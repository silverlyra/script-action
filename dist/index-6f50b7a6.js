var Js = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var Se = (e, t, r) => (Js(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Mt = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, gt = (e, t, r, a) => (Js(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
import * as Sd from "fs/promises";
import { readFile as K0 } from "fs/promises";
import ye from "path";
import $a from "node:http";
import Y0 from "node:https";
import Nr from "node:zlib";
import bt, { PassThrough as X1, pipeline as Ir } from "node:stream";
import { Buffer as Ie } from "node:buffer";
import { types as ei, promisify as Q0, deprecate as ci } from "node:util";
import { format as J0 } from "node:url";
import { isIP as Z0 } from "node:net";
import "node:fs";
import "node:path";
import fo, { randomBytes as X0 } from "crypto";
import Er from "os";
import Ve from "fs";
import mi from "http";
import ho from "https";
import "net";
import e6 from "tls";
import go from "events";
import Sr from "assert";
import Ya from "util";
import Ze from "stream";
import ea from "url";
import Td from "perf_hooks";
import Pt from "zlib";
import t6 from "string_decoder";
import r6 from "child_process";
import a6 from "timers";
function Qa(e, t) {
  for (var r = 0; r < t.length; r++) {
    const a = t[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in e)) {
          const n = Object.getOwnPropertyDescriptor(a, i);
          n && Object.defineProperty(e, i, n.get ? n : {
            enumerable: !0,
            get: () => a[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function i6(e) {
  if (!/^data:/i.test(e))
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  e = e.replace(/\r?\n/g, "");
  const t = e.indexOf(",");
  if (t === -1 || t <= 4)
    throw new TypeError("malformed data: URI");
  const r = e.substring(5, t).split(";");
  let a = "", i = !1;
  const n = r[0] || "text/plain";
  let o = n;
  for (let c = 1; c < r.length; c++)
    r[c] === "base64" ? i = !0 : r[c] && (o += `;${r[c]}`, r[c].indexOf("charset=") === 0 && (a = r[c].substring(8)));
  !r[0] && !a.length && (o += ";charset=US-ASCII", a = "US-ASCII");
  const p = i ? "base64" : "ascii", l = unescape(e.substring(t + 1)), u = Buffer.from(l, p);
  return u.type = n, u.typeFull = o, u.charset = a, u;
}
var D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : {};
function vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ad(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      if (this instanceof a) {
        var i = [null];
        i.push.apply(i, arguments);
        var n = Function.bind.apply(t, i);
        return new n();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var i = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
var N1 = { exports: {} }, Zs;
function n6() {
  return Zs || (Zs = 1, function(e, t) {
    (function(r, a) {
      a(t);
    })(D, function(r) {
      const a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol : (s) => `Symbol(${s})`;
      function i() {
      }
      function n() {
        if (typeof globalThis < "u")
          return globalThis;
        if (typeof window < "u")
          return window;
        if (typeof D < "u")
          return D;
      }
      const o = n();
      function p(s) {
        return typeof s == "object" && s !== null || typeof s == "function";
      }
      const l = i, u = Promise, c = Promise.prototype.then, h = Promise.resolve.bind(u), v = Promise.reject.bind(u);
      function g(s) {
        return new u(s);
      }
      function w(s) {
        return h(s);
      }
      function f(s) {
        return v(s);
      }
      function y(s, d, m) {
        return c.call(s, d, m);
      }
      function E(s, d, m) {
        y(y(s, d, m), void 0, l);
      }
      function N(s, d) {
        E(s, d);
      }
      function F(s, d) {
        E(s, void 0, d);
      }
      function U(s, d, m) {
        return y(s, d, m);
      }
      function P(s) {
        y(s, void 0, l);
      }
      const O = (() => {
        const s = o && o.queueMicrotask;
        if (typeof s == "function")
          return s;
        const d = w(void 0);
        return (m) => y(d, m);
      })();
      function C(s, d, m) {
        if (typeof s != "function")
          throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(s, d, m);
      }
      function A(s, d, m) {
        try {
          return w(C(s, d, m));
        } catch (S) {
          return f(S);
        }
      }
      const T = 16384;
      class R {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = {
            _elements: [],
            _next: void 0
          }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        // For exception safety, this method is structured in order:
        // 1. Read state
        // 2. Calculate required state mutations
        // 3. Perform state mutations
        push(d) {
          const m = this._back;
          let S = m;
          m._elements.length === T - 1 && (S = {
            _elements: [],
            _next: void 0
          }), m._elements.push(d), S !== m && (this._back = S, m._next = S), ++this._size;
        }
        // Like push(), shift() follows the read -> calculate -> mutate pattern for
        // exception safety.
        shift() {
          const d = this._front;
          let m = d;
          const S = this._cursor;
          let B = S + 1;
          const $ = d._elements, G = $[S];
          return B === T && (m = d._next, B = 0), --this._size, this._cursor = B, d !== m && (this._front = m), $[S] = void 0, G;
        }
        // The tricky thing about forEach() is that it can be called
        // re-entrantly. The queue may be mutated inside the callback. It is easy to
        // see that push() within the callback has no negative effects since the end
        // of the queue is checked for on every iteration. If shift() is called
        // repeatedly within the callback then the next iteration may return an
        // element that has been removed. In this case the callback will be called
        // with undefined values until we either "catch up" with elements that still
        // exist or reach the back of the queue.
        forEach(d) {
          let m = this._cursor, S = this._front, B = S._elements;
          for (; (m !== B.length || S._next !== void 0) && !(m === B.length && (S = S._next, B = S._elements, m = 0, B.length === 0)); )
            d(B[m]), ++m;
        }
        // Return the element that would be returned if shift() was called now,
        // without modifying the queue.
        peek() {
          const d = this._front, m = this._cursor;
          return d._elements[m];
        }
      }
      function x(s, d) {
        s._ownerReadableStream = d, d._reader = s, d._state === "readable" ? X(s) : d._state === "closed" ? ne(s) : Q(s, d._storedError);
      }
      function L(s, d) {
        const m = s._ownerReadableStream;
        return ot(m, d);
      }
      function M(s) {
        s._ownerReadableStream._state === "readable" ? ee(s, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : H(s, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), s._ownerReadableStream._reader = void 0, s._ownerReadableStream = void 0;
      }
      function J(s) {
        return new TypeError("Cannot " + s + " a stream using a released reader");
      }
      function X(s) {
        s._closedPromise = g((d, m) => {
          s._closedPromise_resolve = d, s._closedPromise_reject = m;
        });
      }
      function Q(s, d) {
        X(s), ee(s, d);
      }
      function ne(s) {
        X(s), j(s);
      }
      function ee(s, d) {
        s._closedPromise_reject !== void 0 && (P(s._closedPromise), s._closedPromise_reject(d), s._closedPromise_resolve = void 0, s._closedPromise_reject = void 0);
      }
      function H(s, d) {
        Q(s, d);
      }
      function j(s) {
        s._closedPromise_resolve !== void 0 && (s._closedPromise_resolve(void 0), s._closedPromise_resolve = void 0, s._closedPromise_reject = void 0);
      }
      const K = a("[[AbortSteps]]"), re = a("[[ErrorSteps]]"), ce = a("[[CancelSteps]]"), Me = a("[[PullSteps]]"), Ge = Number.isFinite || function(s) {
        return typeof s == "number" && isFinite(s);
      }, it = Math.trunc || function(s) {
        return s < 0 ? Math.ceil(s) : Math.floor(s);
      };
      function St(s) {
        return typeof s == "object" || typeof s == "function";
      }
      function Oe(s, d) {
        if (s !== void 0 && !St(s))
          throw new TypeError(`${d} is not an object.`);
      }
      function ae(s, d) {
        if (typeof s != "function")
          throw new TypeError(`${d} is not a function.`);
      }
      function qe(s) {
        return typeof s == "object" && s !== null || typeof s == "function";
      }
      function k(s, d) {
        if (!qe(s))
          throw new TypeError(`${d} is not an object.`);
      }
      function W(s, d, m) {
        if (s === void 0)
          throw new TypeError(`Parameter ${d} is required in '${m}'.`);
      }
      function b(s, d, m) {
        if (s === void 0)
          throw new TypeError(`${d} is required in '${m}'.`);
      }
      function _(s) {
        return Number(s);
      }
      function I(s) {
        return s === 0 ? 0 : s;
      }
      function V(s) {
        return I(it(s));
      }
      function q(s, d) {
        const S = Number.MAX_SAFE_INTEGER;
        let B = Number(s);
        if (B = I(B), !Ge(B))
          throw new TypeError(`${d} is not a finite number`);
        if (B = V(B), B < 0 || B > S)
          throw new TypeError(`${d} is outside the accepted range of 0 to ${S}, inclusive`);
        return !Ge(B) || B === 0 ? 0 : B;
      }
      function Y(s, d) {
        if (!Gt(s))
          throw new TypeError(`${d} is not a ReadableStream.`);
      }
      function pe(s) {
        return new sa(s);
      }
      function Ce(s, d) {
        s._reader._readRequests.push(d);
      }
      function Ee(s, d, m) {
        const B = s._reader._readRequests.shift();
        m ? B._closeSteps() : B._chunkSteps(d);
      }
      function ft(s) {
        return s._reader._readRequests.length;
      }
      function r1(s) {
        const d = s._reader;
        return !(d === void 0 || !$t(d));
      }
      class sa {
        constructor(d) {
          if (W(d, 1, "ReadableStreamDefaultReader"), Y(d, "First parameter"), Lt(d))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          x(this, d), this._readRequests = new R();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed,
         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
         */
        get closed() {
          return $t(this) ? this._closedPromise : f(a1("closed"));
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        cancel(d = void 0) {
          return $t(this) ? this._ownerReadableStream === void 0 ? f(J("cancel")) : L(this, d) : f(a1("cancel"));
        }
        /**
         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */
        read() {
          if (!$t(this))
            return f(a1("read"));
          if (this._ownerReadableStream === void 0)
            return f(J("read from"));
          let d, m;
          const S = g(($, G) => {
            d = $, m = G;
          });
          return pa(this, {
            _chunkSteps: ($) => d({ value: $, done: !1 }),
            _closeSteps: () => d({ value: void 0, done: !0 }),
            _errorSteps: ($) => m($)
          }), S;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        releaseLock() {
          if (!$t(this))
            throw a1("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            M(this);
          }
        }
      }
      Object.defineProperties(sa.prototype, {
        cancel: { enumerable: !0 },
        read: { enumerable: !0 },
        releaseLock: { enumerable: !0 },
        closed: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(sa.prototype, a.toStringTag, {
        value: "ReadableStreamDefaultReader",
        configurable: !0
      });
      function $t(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_readRequests") ? !1 : s instanceof sa;
      }
      function pa(s, d) {
        const m = s._ownerReadableStream;
        m._disturbed = !0, m._state === "closed" ? d._closeSteps() : m._state === "errored" ? d._errorSteps(m._storedError) : m._readableStreamController[Me](d);
      }
      function a1(s) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${s} can only be used on a ReadableStreamDefaultReader`);
      }
      const Ho = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      class Ko {
        constructor(d, m) {
          this._ongoingPromise = void 0, this._isFinished = !1, this._reader = d, this._preventCancel = m;
        }
        next() {
          const d = () => this._nextSteps();
          return this._ongoingPromise = this._ongoingPromise ? U(this._ongoingPromise, d, d) : d(), this._ongoingPromise;
        }
        return(d) {
          const m = () => this._returnSteps(d);
          return this._ongoingPromise ? U(this._ongoingPromise, m, m) : m();
        }
        _nextSteps() {
          if (this._isFinished)
            return Promise.resolve({ value: void 0, done: !0 });
          const d = this._reader;
          if (d._ownerReadableStream === void 0)
            return f(J("iterate"));
          let m, S;
          const B = g((G, z) => {
            m = G, S = z;
          });
          return pa(d, {
            _chunkSteps: (G) => {
              this._ongoingPromise = void 0, O(() => m({ value: G, done: !1 }));
            },
            _closeSteps: () => {
              this._ongoingPromise = void 0, this._isFinished = !0, M(d), m({ value: void 0, done: !0 });
            },
            _errorSteps: (G) => {
              this._ongoingPromise = void 0, this._isFinished = !0, M(d), S(G);
            }
          }), B;
        }
        _returnSteps(d) {
          if (this._isFinished)
            return Promise.resolve({ value: d, done: !0 });
          this._isFinished = !0;
          const m = this._reader;
          if (m._ownerReadableStream === void 0)
            return f(J("finish iterating"));
          if (!this._preventCancel) {
            const S = L(m, d);
            return M(m), U(S, () => ({ value: d, done: !0 }));
          }
          return M(m), w({ value: d, done: !0 });
        }
      }
      const Yo = {
        next() {
          return Qo(this) ? this._asyncIteratorImpl.next() : f(Jo("next"));
        },
        return(s) {
          return Qo(this) ? this._asyncIteratorImpl.return(s) : f(Jo("return"));
        }
      };
      Ho !== void 0 && Object.setPrototypeOf(Yo, Ho);
      function P2(s, d) {
        const m = pe(s), S = new Ko(m, d), B = Object.create(Yo);
        return B._asyncIteratorImpl = S, B;
      }
      function Qo(s) {
        if (!p(s) || !Object.prototype.hasOwnProperty.call(s, "_asyncIteratorImpl"))
          return !1;
        try {
          return s._asyncIteratorImpl instanceof Ko;
        } catch {
          return !1;
        }
      }
      function Jo(s) {
        return new TypeError(`ReadableStreamAsyncIterator.${s} can only be used on a ReadableSteamAsyncIterator`);
      }
      const Zo = Number.isNaN || function(s) {
        return s !== s;
      };
      function da(s) {
        return s.slice();
      }
      function Xo(s, d, m, S, B) {
        new Uint8Array(s).set(new Uint8Array(m, S, B), d);
      }
      function tm(s) {
        return s;
      }
      function i1(s) {
        return !1;
      }
      function es(s, d, m) {
        if (s.slice)
          return s.slice(d, m);
        const S = m - d, B = new ArrayBuffer(S);
        return Xo(B, 0, s, d, S), B;
      }
      function O2(s) {
        return !(typeof s != "number" || Zo(s) || s < 0);
      }
      function ts(s) {
        const d = es(s.buffer, s.byteOffset, s.byteOffset + s.byteLength);
        return new Uint8Array(d);
      }
      function Li(s) {
        const d = s._queue.shift();
        return s._queueTotalSize -= d.size, s._queueTotalSize < 0 && (s._queueTotalSize = 0), d.value;
      }
      function ji(s, d, m) {
        if (!O2(m) || m === 1 / 0)
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        s._queue.push({ value: d, size: m }), s._queueTotalSize += m;
      }
      function B2(s) {
        return s._queue.peek().value;
      }
      function Ut(s) {
        s._queue = new R(), s._queueTotalSize = 0;
      }
      class la {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
         */
        get view() {
          if (!Mi(this))
            throw Hi("view");
          return this._view;
        }
        respond(d) {
          if (!Mi(this))
            throw Hi("respond");
          if (W(d, 1, "respond"), d = q(d, "First parameter"), this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          i1(this._view.buffer), d1(this._associatedReadableByteStreamController, d);
        }
        respondWithNewView(d) {
          if (!Mi(this))
            throw Hi("respondWithNewView");
          if (W(d, 1, "respondWithNewView"), !ArrayBuffer.isView(d))
            throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          i1(d.buffer), l1(this._associatedReadableByteStreamController, d);
        }
      }
      Object.defineProperties(la.prototype, {
        respond: { enumerable: !0 },
        respondWithNewView: { enumerable: !0 },
        view: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(la.prototype, a.toStringTag, {
        value: "ReadableStreamBYOBRequest",
        configurable: !0
      });
      class Tr {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the current BYOB pull request, or `null` if there isn't one.
         */
        get byobRequest() {
          if (!ir(this))
            throw ca("byobRequest");
          return zi(this);
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
         */
        get desiredSize() {
          if (!ir(this))
            throw ca("desiredSize");
          return ds(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        close() {
          if (!ir(this))
            throw ca("close");
          if (this._closeRequested)
            throw new TypeError("The stream has already been closed; do not close it again!");
          const d = this._controlledReadableByteStream._state;
          if (d !== "readable")
            throw new TypeError(`The stream (in ${d} state) is not in the readable state and cannot be closed`);
          ua(this);
        }
        enqueue(d) {
          if (!ir(this))
            throw ca("enqueue");
          if (W(d, 1, "enqueue"), !ArrayBuffer.isView(d))
            throw new TypeError("chunk must be an array buffer view");
          if (d.byteLength === 0)
            throw new TypeError("chunk must have non-zero byteLength");
          if (d.buffer.byteLength === 0)
            throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested)
            throw new TypeError("stream is closed or draining");
          const m = this._controlledReadableByteStream._state;
          if (m !== "readable")
            throw new TypeError(`The stream (in ${m} state) is not in the readable state and cannot be enqueued to`);
          p1(this, d);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        error(d = void 0) {
          if (!ir(this))
            throw ca("error");
          nt(this, d);
        }
        /** @internal */
        [ce](d) {
          rs(this), Ut(this);
          const m = this._cancelAlgorithm(d);
          return s1(this), m;
        }
        /** @internal */
        [Me](d) {
          const m = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            const B = this._queue.shift();
            this._queueTotalSize -= B.byteLength, os(this);
            const $ = new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
            d._chunkSteps($);
            return;
          }
          const S = this._autoAllocateChunkSize;
          if (S !== void 0) {
            let B;
            try {
              B = new ArrayBuffer(S);
            } catch (G) {
              d._errorSteps(G);
              return;
            }
            const $ = {
              buffer: B,
              bufferByteLength: S,
              byteOffset: 0,
              byteLength: S,
              bytesFilled: 0,
              elementSize: 1,
              viewConstructor: Uint8Array,
              readerType: "default"
            };
            this._pendingPullIntos.push($);
          }
          Ce(m, d), nr(this);
        }
      }
      Object.defineProperties(Tr.prototype, {
        close: { enumerable: !0 },
        enqueue: { enumerable: !0 },
        error: { enumerable: !0 },
        byobRequest: { enumerable: !0 },
        desiredSize: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(Tr.prototype, a.toStringTag, {
        value: "ReadableByteStreamController",
        configurable: !0
      });
      function ir(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_controlledReadableByteStream") ? !1 : s instanceof Tr;
      }
      function Mi(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_associatedReadableByteStreamController") ? !1 : s instanceof la;
      }
      function nr(s) {
        if (!I2(s))
          return;
        if (s._pulling) {
          s._pullAgain = !0;
          return;
        }
        s._pulling = !0;
        const m = s._pullAlgorithm();
        E(m, () => {
          s._pulling = !1, s._pullAgain && (s._pullAgain = !1, nr(s));
        }, (S) => {
          nt(s, S);
        });
      }
      function rs(s) {
        Wi(s), s._pendingPullIntos = new R();
      }
      function qi(s, d) {
        let m = !1;
        s._state === "closed" && (m = !0);
        const S = as(d);
        d.readerType === "default" ? Ee(s, S, m) : x2(s, S, m);
      }
      function as(s) {
        const d = s.bytesFilled, m = s.elementSize;
        return new s.viewConstructor(s.buffer, s.byteOffset, d / m);
      }
      function n1(s, d, m, S) {
        s._queue.push({ buffer: d, byteOffset: m, byteLength: S }), s._queueTotalSize += S;
      }
      function is(s, d) {
        const m = d.elementSize, S = d.bytesFilled - d.bytesFilled % m, B = Math.min(s._queueTotalSize, d.byteLength - d.bytesFilled), $ = d.bytesFilled + B, G = $ - $ % m;
        let z = B, ie = !1;
        G > S && (z = G - d.bytesFilled, ie = !0);
        const se = s._queue;
        for (; z > 0; ) {
          const de = se.peek(), le = Math.min(z, de.byteLength), _e = d.byteOffset + d.bytesFilled;
          Xo(d.buffer, _e, de.buffer, de.byteOffset, le), de.byteLength === le ? se.shift() : (de.byteOffset += le, de.byteLength -= le), s._queueTotalSize -= le, ns(s, le, d), z -= le;
        }
        return ie;
      }
      function ns(s, d, m) {
        m.bytesFilled += d;
      }
      function os(s) {
        s._queueTotalSize === 0 && s._closeRequested ? (s1(s), _a(s._controlledReadableByteStream)) : nr(s);
      }
      function Wi(s) {
        s._byobRequest !== null && (s._byobRequest._associatedReadableByteStreamController = void 0, s._byobRequest._view = null, s._byobRequest = null);
      }
      function ss(s) {
        for (; s._pendingPullIntos.length > 0; ) {
          if (s._queueTotalSize === 0)
            return;
          const d = s._pendingPullIntos.peek();
          is(s, d) && (o1(s), qi(s._controlledReadableByteStream, d));
        }
      }
      function F2(s, d, m) {
        const S = s._controlledReadableByteStream;
        let B = 1;
        d.constructor !== DataView && (B = d.constructor.BYTES_PER_ELEMENT);
        const $ = d.constructor, G = d.buffer, z = {
          buffer: G,
          bufferByteLength: G.byteLength,
          byteOffset: d.byteOffset,
          byteLength: d.byteLength,
          bytesFilled: 0,
          elementSize: B,
          viewConstructor: $,
          readerType: "byob"
        };
        if (s._pendingPullIntos.length > 0) {
          s._pendingPullIntos.push(z), cs(S, m);
          return;
        }
        if (S._state === "closed") {
          const ie = new $(z.buffer, z.byteOffset, 0);
          m._closeSteps(ie);
          return;
        }
        if (s._queueTotalSize > 0) {
          if (is(s, z)) {
            const ie = as(z);
            os(s), m._chunkSteps(ie);
            return;
          }
          if (s._closeRequested) {
            const ie = new TypeError("Insufficient bytes to fill elements in the given buffer");
            nt(s, ie), m._errorSteps(ie);
            return;
          }
        }
        s._pendingPullIntos.push(z), cs(S, m), nr(s);
      }
      function k2(s, d) {
        const m = s._controlledReadableByteStream;
        if (Ki(m))
          for (; ms(m) > 0; ) {
            const S = o1(s);
            qi(m, S);
          }
      }
      function N2(s, d, m) {
        if (ns(s, d, m), m.bytesFilled < m.elementSize)
          return;
        o1(s);
        const S = m.bytesFilled % m.elementSize;
        if (S > 0) {
          const B = m.byteOffset + m.bytesFilled, $ = es(m.buffer, B - S, B);
          n1(s, $, 0, $.byteLength);
        }
        m.bytesFilled -= S, qi(s._controlledReadableByteStream, m), ss(s);
      }
      function ps(s, d) {
        const m = s._pendingPullIntos.peek();
        Wi(s), s._controlledReadableByteStream._state === "closed" ? k2(s) : N2(s, d, m), nr(s);
      }
      function o1(s) {
        return s._pendingPullIntos.shift();
      }
      function I2(s) {
        const d = s._controlledReadableByteStream;
        return d._state !== "readable" || s._closeRequested || !s._started ? !1 : !!(r1(d) && ft(d) > 0 || Ki(d) && ms(d) > 0 || ds(s) > 0);
      }
      function s1(s) {
        s._pullAlgorithm = void 0, s._cancelAlgorithm = void 0;
      }
      function ua(s) {
        const d = s._controlledReadableByteStream;
        if (!(s._closeRequested || d._state !== "readable")) {
          if (s._queueTotalSize > 0) {
            s._closeRequested = !0;
            return;
          }
          if (s._pendingPullIntos.length > 0 && s._pendingPullIntos.peek().bytesFilled > 0) {
            const S = new TypeError("Insufficient bytes to fill elements in the given buffer");
            throw nt(s, S), S;
          }
          s1(s), _a(d);
        }
      }
      function p1(s, d) {
        const m = s._controlledReadableByteStream;
        if (s._closeRequested || m._state !== "readable")
          return;
        const S = d.buffer, B = d.byteOffset, $ = d.byteLength, G = S;
        if (s._pendingPullIntos.length > 0) {
          const z = s._pendingPullIntos.peek();
          i1(z.buffer), z.buffer = z.buffer;
        }
        if (Wi(s), r1(m))
          if (ft(m) === 0)
            n1(s, G, B, $);
          else {
            s._pendingPullIntos.length > 0 && o1(s);
            const z = new Uint8Array(G, B, $);
            Ee(m, z, !1);
          }
        else
          Ki(m) ? (n1(s, G, B, $), ss(s)) : n1(s, G, B, $);
        nr(s);
      }
      function nt(s, d) {
        const m = s._controlledReadableByteStream;
        m._state === "readable" && (rs(s), Ut(s), s1(s), Us(m, d));
      }
      function zi(s) {
        if (s._byobRequest === null && s._pendingPullIntos.length > 0) {
          const d = s._pendingPullIntos.peek(), m = new Uint8Array(d.buffer, d.byteOffset + d.bytesFilled, d.byteLength - d.bytesFilled), S = Object.create(la.prototype);
          U2(S, s, m), s._byobRequest = S;
        }
        return s._byobRequest;
      }
      function ds(s) {
        const d = s._controlledReadableByteStream._state;
        return d === "errored" ? null : d === "closed" ? 0 : s._strategyHWM - s._queueTotalSize;
      }
      function d1(s, d) {
        const m = s._pendingPullIntos.peek();
        if (s._controlledReadableByteStream._state === "closed") {
          if (d !== 0)
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (d === 0)
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (m.bytesFilled + d > m.byteLength)
            throw new RangeError("bytesWritten out of range");
        }
        m.buffer = m.buffer, ps(s, d);
      }
      function l1(s, d) {
        const m = s._pendingPullIntos.peek();
        if (s._controlledReadableByteStream._state === "closed") {
          if (d.byteLength !== 0)
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (d.byteLength === 0)
          throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (m.byteOffset + m.bytesFilled !== d.byteOffset)
          throw new RangeError("The region specified by view does not match byobRequest");
        if (m.bufferByteLength !== d.buffer.byteLength)
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (m.bytesFilled + d.byteLength > m.byteLength)
          throw new RangeError("The region specified by view is larger than byobRequest");
        const B = d.byteLength;
        m.buffer = d.buffer, ps(s, B);
      }
      function ls(s, d, m, S, B, $, G) {
        d._controlledReadableByteStream = s, d._pullAgain = !1, d._pulling = !1, d._byobRequest = null, d._queue = d._queueTotalSize = void 0, Ut(d), d._closeRequested = !1, d._started = !1, d._strategyHWM = $, d._pullAlgorithm = S, d._cancelAlgorithm = B, d._autoAllocateChunkSize = G, d._pendingPullIntos = new R(), s._readableStreamController = d;
        const z = m();
        E(w(z), () => {
          d._started = !0, nr(d);
        }, (ie) => {
          nt(d, ie);
        });
      }
      function $2(s, d, m) {
        const S = Object.create(Tr.prototype);
        let B = () => {
        }, $ = () => w(void 0), G = () => w(void 0);
        d.start !== void 0 && (B = () => d.start(S)), d.pull !== void 0 && ($ = () => d.pull(S)), d.cancel !== void 0 && (G = (ie) => d.cancel(ie));
        const z = d.autoAllocateChunkSize;
        if (z === 0)
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        ls(s, S, B, $, G, m, z);
      }
      function U2(s, d, m) {
        s._associatedReadableByteStreamController = d, s._view = m;
      }
      function Hi(s) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${s} can only be used on a ReadableStreamBYOBRequest`);
      }
      function ca(s) {
        return new TypeError(`ReadableByteStreamController.prototype.${s} can only be used on a ReadableByteStreamController`);
      }
      function us(s) {
        return new ma(s);
      }
      function cs(s, d) {
        s._reader._readIntoRequests.push(d);
      }
      function x2(s, d, m) {
        const B = s._reader._readIntoRequests.shift();
        m ? B._closeSteps(d) : B._chunkSteps(d);
      }
      function ms(s) {
        return s._reader._readIntoRequests.length;
      }
      function Ki(s) {
        const d = s._reader;
        return !(d === void 0 || !or(d));
      }
      class ma {
        constructor(d) {
          if (W(d, 1, "ReadableStreamBYOBReader"), Y(d, "First parameter"), Lt(d))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!ir(d._readableStreamController))
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          x(this, d), this._readIntoRequests = new R();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the reader's lock is released before the stream finishes closing.
         */
        get closed() {
          return or(this) ? this._closedPromise : f(u1("closed"));
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        cancel(d = void 0) {
          return or(this) ? this._ownerReadableStream === void 0 ? f(J("cancel")) : L(this, d) : f(u1("cancel"));
        }
        /**
         * Attempts to reads bytes into view, and returns a promise resolved with the result.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */
        read(d) {
          if (!or(this))
            return f(u1("read"));
          if (!ArrayBuffer.isView(d))
            return f(new TypeError("view must be an array buffer view"));
          if (d.byteLength === 0)
            return f(new TypeError("view must have non-zero byteLength"));
          if (d.buffer.byteLength === 0)
            return f(new TypeError("view's buffer must have non-zero byteLength"));
          if (i1(d.buffer), this._ownerReadableStream === void 0)
            return f(J("read from"));
          let m, S;
          const B = g((G, z) => {
            m = G, S = z;
          });
          return fs(this, d, {
            _chunkSteps: (G) => m({ value: G, done: !1 }),
            _closeSteps: (G) => m({ value: G, done: !0 }),
            _errorSteps: (G) => S(G)
          }), B;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        releaseLock() {
          if (!or(this))
            throw u1("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readIntoRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            M(this);
          }
        }
      }
      Object.defineProperties(ma.prototype, {
        cancel: { enumerable: !0 },
        read: { enumerable: !0 },
        releaseLock: { enumerable: !0 },
        closed: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(ma.prototype, a.toStringTag, {
        value: "ReadableStreamBYOBReader",
        configurable: !0
      });
      function or(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_readIntoRequests") ? !1 : s instanceof ma;
      }
      function fs(s, d, m) {
        const S = s._ownerReadableStream;
        S._disturbed = !0, S._state === "errored" ? m._errorSteps(S._storedError) : F2(S._readableStreamController, d, m);
      }
      function u1(s) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${s} can only be used on a ReadableStreamBYOBReader`);
      }
      function fa(s, d) {
        const { highWaterMark: m } = s;
        if (m === void 0)
          return d;
        if (Zo(m) || m < 0)
          throw new RangeError("Invalid highWaterMark");
        return m;
      }
      function c1(s) {
        const { size: d } = s;
        return d || (() => 1);
      }
      function m1(s, d) {
        Oe(s, d);
        const m = s == null ? void 0 : s.highWaterMark, S = s == null ? void 0 : s.size;
        return {
          highWaterMark: m === void 0 ? void 0 : _(m),
          size: S === void 0 ? void 0 : V2(S, `${d} has member 'size' that`)
        };
      }
      function V2(s, d) {
        return ae(s, d), (m) => _(s(m));
      }
      function G2(s, d) {
        Oe(s, d);
        const m = s == null ? void 0 : s.abort, S = s == null ? void 0 : s.close, B = s == null ? void 0 : s.start, $ = s == null ? void 0 : s.type, G = s == null ? void 0 : s.write;
        return {
          abort: m === void 0 ? void 0 : L2(m, s, `${d} has member 'abort' that`),
          close: S === void 0 ? void 0 : j2(S, s, `${d} has member 'close' that`),
          start: B === void 0 ? void 0 : M2(B, s, `${d} has member 'start' that`),
          write: G === void 0 ? void 0 : q2(G, s, `${d} has member 'write' that`),
          type: $
        };
      }
      function L2(s, d, m) {
        return ae(s, m), (S) => A(s, d, [S]);
      }
      function j2(s, d, m) {
        return ae(s, m), () => A(s, d, []);
      }
      function M2(s, d, m) {
        return ae(s, m), (S) => C(s, d, [S]);
      }
      function q2(s, d, m) {
        return ae(s, m), (S, B) => A(s, d, [S, B]);
      }
      function hs(s, d) {
        if (!Ar(s))
          throw new TypeError(`${d} is not a WritableStream.`);
      }
      function W2(s) {
        if (typeof s != "object" || s === null)
          return !1;
        try {
          return typeof s.aborted == "boolean";
        } catch {
          return !1;
        }
      }
      const z2 = typeof AbortController == "function";
      function H2() {
        if (z2)
          return new AbortController();
      }
      class ha {
        constructor(d = {}, m = {}) {
          d === void 0 ? d = null : k(d, "First parameter");
          const S = m1(m, "Second parameter"), B = G2(d, "First parameter");
          if (vs(this), B.type !== void 0)
            throw new RangeError("Invalid type is specified");
          const G = c1(S), z = fa(S, 1);
          s0(this, B, z, G);
        }
        /**
         * Returns whether or not the writable stream is locked to a writer.
         */
        get locked() {
          if (!Ar(this))
            throw w1("locked");
          return Cr(this);
        }
        /**
         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
         * mechanism of the underlying sink.
         *
         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
         * the stream) if the stream is currently locked.
         */
        abort(d = void 0) {
          return Ar(this) ? Cr(this) ? f(new TypeError("Cannot abort a stream that already has a writer")) : f1(this, d) : f(w1("abort"));
        }
        /**
         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
         *
         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
         */
        close() {
          return Ar(this) ? Cr(this) ? f(new TypeError("Cannot close a stream that already has a writer")) : ht(this) ? f(new TypeError("Cannot close an already-closing stream")) : ws(this) : f(w1("close"));
        }
        /**
         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
         * is locked, no other writer can be acquired until this one is released.
         *
         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
         */
        getWriter() {
          if (!Ar(this))
            throw w1("getWriter");
          return gs(this);
        }
      }
      Object.defineProperties(ha.prototype, {
        abort: { enumerable: !0 },
        close: { enumerable: !0 },
        getWriter: { enumerable: !0 },
        locked: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(ha.prototype, a.toStringTag, {
        value: "WritableStream",
        configurable: !0
      });
      function gs(s) {
        return new ga(s);
      }
      function K2(s, d, m, S, B = 1, $ = () => 1) {
        const G = Object.create(ha.prototype);
        vs(G);
        const z = Object.create(Dr.prototype);
        return Ts(G, z, s, d, m, S, B, $), G;
      }
      function vs(s) {
        s._state = "writable", s._storedError = void 0, s._writer = void 0, s._writableStreamController = void 0, s._writeRequests = new R(), s._inFlightWriteRequest = void 0, s._closeRequest = void 0, s._inFlightCloseRequest = void 0, s._pendingAbortRequest = void 0, s._backpressure = !1;
      }
      function Ar(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_writableStreamController") ? !1 : s instanceof ha;
      }
      function Cr(s) {
        return s._writer !== void 0;
      }
      function f1(s, d) {
        var m;
        if (s._state === "closed" || s._state === "errored")
          return w(void 0);
        s._writableStreamController._abortReason = d, (m = s._writableStreamController._abortController) === null || m === void 0 || m.abort();
        const S = s._state;
        if (S === "closed" || S === "errored")
          return w(void 0);
        if (s._pendingAbortRequest !== void 0)
          return s._pendingAbortRequest._promise;
        let B = !1;
        S === "erroring" && (B = !0, d = void 0);
        const $ = g((G, z) => {
          s._pendingAbortRequest = {
            _promise: void 0,
            _resolve: G,
            _reject: z,
            _reason: d,
            _wasAlreadyErroring: B
          };
        });
        return s._pendingAbortRequest._promise = $, B || Qi(s, d), $;
      }
      function ws(s) {
        const d = s._state;
        if (d === "closed" || d === "errored")
          return f(new TypeError(`The stream (in ${d} state) is not in the writable state and cannot be closed`));
        const m = g((B, $) => {
          const G = {
            _resolve: B,
            _reject: $
          };
          s._closeRequest = G;
        }), S = s._writer;
        return S !== void 0 && s._backpressure && d === "writable" && on(S), p0(s._writableStreamController), m;
      }
      function Y2(s) {
        return g((m, S) => {
          const B = {
            _resolve: m,
            _reject: S
          };
          s._writeRequests.push(B);
        });
      }
      function Yi(s, d) {
        if (s._state === "writable") {
          Qi(s, d);
          return;
        }
        Ji(s);
      }
      function Qi(s, d) {
        const m = s._writableStreamController;
        s._state = "erroring", s._storedError = d;
        const S = s._writer;
        S !== void 0 && _s(S, d), !e0(s) && m._started && Ji(s);
      }
      function Ji(s) {
        s._state = "errored", s._writableStreamController[re]();
        const d = s._storedError;
        if (s._writeRequests.forEach((B) => {
          B._reject(d);
        }), s._writeRequests = new R(), s._pendingAbortRequest === void 0) {
          h1(s);
          return;
        }
        const m = s._pendingAbortRequest;
        if (s._pendingAbortRequest = void 0, m._wasAlreadyErroring) {
          m._reject(d), h1(s);
          return;
        }
        const S = s._writableStreamController[K](m._reason);
        E(S, () => {
          m._resolve(), h1(s);
        }, (B) => {
          m._reject(B), h1(s);
        });
      }
      function Q2(s) {
        s._inFlightWriteRequest._resolve(void 0), s._inFlightWriteRequest = void 0;
      }
      function J2(s, d) {
        s._inFlightWriteRequest._reject(d), s._inFlightWriteRequest = void 0, Yi(s, d);
      }
      function Z2(s) {
        s._inFlightCloseRequest._resolve(void 0), s._inFlightCloseRequest = void 0, s._state === "erroring" && (s._storedError = void 0, s._pendingAbortRequest !== void 0 && (s._pendingAbortRequest._resolve(), s._pendingAbortRequest = void 0)), s._state = "closed";
        const m = s._writer;
        m !== void 0 && Rs(m);
      }
      function X2(s, d) {
        s._inFlightCloseRequest._reject(d), s._inFlightCloseRequest = void 0, s._pendingAbortRequest !== void 0 && (s._pendingAbortRequest._reject(d), s._pendingAbortRequest = void 0), Yi(s, d);
      }
      function ht(s) {
        return !(s._closeRequest === void 0 && s._inFlightCloseRequest === void 0);
      }
      function e0(s) {
        return !(s._inFlightWriteRequest === void 0 && s._inFlightCloseRequest === void 0);
      }
      function t0(s) {
        s._inFlightCloseRequest = s._closeRequest, s._closeRequest = void 0;
      }
      function r0(s) {
        s._inFlightWriteRequest = s._writeRequests.shift();
      }
      function h1(s) {
        s._closeRequest !== void 0 && (s._closeRequest._reject(s._storedError), s._closeRequest = void 0);
        const d = s._writer;
        d !== void 0 && an(d, s._storedError);
      }
      function Zi(s, d) {
        const m = s._writer;
        m !== void 0 && d !== s._backpressure && (d ? h0(m) : on(m)), s._backpressure = d;
      }
      class ga {
        constructor(d) {
          if (W(d, 1, "WritableStreamDefaultWriter"), hs(d, "First parameter"), Cr(d))
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = d, d._writer = this;
          const m = d._state;
          if (m === "writable")
            !ht(d) && d._backpressure ? _1(this) : Ps(this), b1(this);
          else if (m === "erroring")
            nn(this, d._storedError), b1(this);
          else if (m === "closed")
            Ps(this), m0(this);
          else {
            const S = d._storedError;
            nn(this, S), Ds(this, S);
          }
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the writer’s lock is released before the stream finishes closing.
         */
        get closed() {
          return sr(this) ? this._closedPromise : f(pr("closed"));
        }
        /**
         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
         * A producer can use this information to determine the right amount of data to write.
         *
         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
         * the writer’s lock is released.
         */
        get desiredSize() {
          if (!sr(this))
            throw pr("desiredSize");
          if (this._ownerWritableStream === void 0)
            throw va("desiredSize");
          return o0(this);
        }
        /**
         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
         *
         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
         * rejected.
         */
        get ready() {
          return sr(this) ? this._readyPromise : f(pr("ready"));
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
         */
        abort(d = void 0) {
          return sr(this) ? this._ownerWritableStream === void 0 ? f(va("abort")) : a0(this, d) : f(pr("abort"));
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
         */
        close() {
          if (!sr(this))
            return f(pr("close"));
          const d = this._ownerWritableStream;
          return d === void 0 ? f(va("close")) : ht(d) ? f(new TypeError("Cannot close an already-closing stream")) : bs(this);
        }
        /**
         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
         * now on; otherwise, the writer will appear closed.
         *
         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
         * other producers from writing in an interleaved manner.
         */
        releaseLock() {
          if (!sr(this))
            throw pr("releaseLock");
          this._ownerWritableStream !== void 0 && ys(this);
        }
        write(d = void 0) {
          return sr(this) ? this._ownerWritableStream === void 0 ? f(va("write to")) : Es(this, d) : f(pr("write"));
        }
      }
      Object.defineProperties(ga.prototype, {
        abort: { enumerable: !0 },
        close: { enumerable: !0 },
        releaseLock: { enumerable: !0 },
        write: { enumerable: !0 },
        closed: { enumerable: !0 },
        desiredSize: { enumerable: !0 },
        ready: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(ga.prototype, a.toStringTag, {
        value: "WritableStreamDefaultWriter",
        configurable: !0
      });
      function sr(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_ownerWritableStream") ? !1 : s instanceof ga;
      }
      function a0(s, d) {
        const m = s._ownerWritableStream;
        return f1(m, d);
      }
      function bs(s) {
        const d = s._ownerWritableStream;
        return ws(d);
      }
      function i0(s) {
        const d = s._ownerWritableStream, m = d._state;
        return ht(d) || m === "closed" ? w(void 0) : m === "errored" ? f(d._storedError) : bs(s);
      }
      function n0(s, d) {
        s._closedPromiseState === "pending" ? an(s, d) : f0(s, d);
      }
      function _s(s, d) {
        s._readyPromiseState === "pending" ? Os(s, d) : g0(s, d);
      }
      function o0(s) {
        const d = s._ownerWritableStream, m = d._state;
        return m === "errored" || m === "erroring" ? null : m === "closed" ? 0 : As(d._writableStreamController);
      }
      function ys(s) {
        const d = s._ownerWritableStream, m = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        _s(s, m), n0(s, m), d._writer = void 0, s._ownerWritableStream = void 0;
      }
      function Es(s, d) {
        const m = s._ownerWritableStream, S = m._writableStreamController, B = d0(S, d);
        if (m !== s._ownerWritableStream)
          return f(va("write to"));
        const $ = m._state;
        if ($ === "errored")
          return f(m._storedError);
        if (ht(m) || $ === "closed")
          return f(new TypeError("The stream is closing or closed and cannot be written to"));
        if ($ === "erroring")
          return f(m._storedError);
        const G = Y2(m);
        return l0(S, d, B), G;
      }
      const Ss = {};
      class Dr {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
         *
         * @deprecated
         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
         */
        get abortReason() {
          if (!Xi(this))
            throw rn("abortReason");
          return this._abortReason;
        }
        /**
         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
         */
        get signal() {
          if (!Xi(this))
            throw rn("signal");
          if (this._abortController === void 0)
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        /**
         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
         *
         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
         * normal lifecycle of interactions with the underlying sink.
         */
        error(d = void 0) {
          if (!Xi(this))
            throw rn("error");
          this._controlledWritableStream._state === "writable" && Cs(this, d);
        }
        /** @internal */
        [K](d) {
          const m = this._abortAlgorithm(d);
          return g1(this), m;
        }
        /** @internal */
        [re]() {
          Ut(this);
        }
      }
      Object.defineProperties(Dr.prototype, {
        abortReason: { enumerable: !0 },
        signal: { enumerable: !0 },
        error: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(Dr.prototype, a.toStringTag, {
        value: "WritableStreamDefaultController",
        configurable: !0
      });
      function Xi(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_controlledWritableStream") ? !1 : s instanceof Dr;
      }
      function Ts(s, d, m, S, B, $, G, z) {
        d._controlledWritableStream = s, s._writableStreamController = d, d._queue = void 0, d._queueTotalSize = void 0, Ut(d), d._abortReason = void 0, d._abortController = H2(), d._started = !1, d._strategySizeAlgorithm = z, d._strategyHWM = G, d._writeAlgorithm = S, d._closeAlgorithm = B, d._abortAlgorithm = $;
        const ie = tn(d);
        Zi(s, ie);
        const se = m(), de = w(se);
        E(de, () => {
          d._started = !0, v1(d);
        }, (le) => {
          d._started = !0, Yi(s, le);
        });
      }
      function s0(s, d, m, S) {
        const B = Object.create(Dr.prototype);
        let $ = () => {
        }, G = () => w(void 0), z = () => w(void 0), ie = () => w(void 0);
        d.start !== void 0 && ($ = () => d.start(B)), d.write !== void 0 && (G = (se) => d.write(se, B)), d.close !== void 0 && (z = () => d.close()), d.abort !== void 0 && (ie = (se) => d.abort(se)), Ts(s, B, $, G, z, ie, m, S);
      }
      function g1(s) {
        s._writeAlgorithm = void 0, s._closeAlgorithm = void 0, s._abortAlgorithm = void 0, s._strategySizeAlgorithm = void 0;
      }
      function p0(s) {
        ji(s, Ss, 0), v1(s);
      }
      function d0(s, d) {
        try {
          return s._strategySizeAlgorithm(d);
        } catch (m) {
          return en(s, m), 1;
        }
      }
      function As(s) {
        return s._strategyHWM - s._queueTotalSize;
      }
      function l0(s, d, m) {
        try {
          ji(s, d, m);
        } catch (B) {
          en(s, B);
          return;
        }
        const S = s._controlledWritableStream;
        if (!ht(S) && S._state === "writable") {
          const B = tn(s);
          Zi(S, B);
        }
        v1(s);
      }
      function v1(s) {
        const d = s._controlledWritableStream;
        if (!s._started || d._inFlightWriteRequest !== void 0)
          return;
        if (d._state === "erroring") {
          Ji(d);
          return;
        }
        if (s._queue.length === 0)
          return;
        const S = B2(s);
        S === Ss ? u0(s) : c0(s, S);
      }
      function en(s, d) {
        s._controlledWritableStream._state === "writable" && Cs(s, d);
      }
      function u0(s) {
        const d = s._controlledWritableStream;
        t0(d), Li(s);
        const m = s._closeAlgorithm();
        g1(s), E(m, () => {
          Z2(d);
        }, (S) => {
          X2(d, S);
        });
      }
      function c0(s, d) {
        const m = s._controlledWritableStream;
        r0(m);
        const S = s._writeAlgorithm(d);
        E(S, () => {
          Q2(m);
          const B = m._state;
          if (Li(s), !ht(m) && B === "writable") {
            const $ = tn(s);
            Zi(m, $);
          }
          v1(s);
        }, (B) => {
          m._state === "writable" && g1(s), J2(m, B);
        });
      }
      function tn(s) {
        return As(s) <= 0;
      }
      function Cs(s, d) {
        const m = s._controlledWritableStream;
        g1(s), Qi(m, d);
      }
      function w1(s) {
        return new TypeError(`WritableStream.prototype.${s} can only be used on a WritableStream`);
      }
      function rn(s) {
        return new TypeError(`WritableStreamDefaultController.prototype.${s} can only be used on a WritableStreamDefaultController`);
      }
      function pr(s) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${s} can only be used on a WritableStreamDefaultWriter`);
      }
      function va(s) {
        return new TypeError("Cannot " + s + " a stream using a released writer");
      }
      function b1(s) {
        s._closedPromise = g((d, m) => {
          s._closedPromise_resolve = d, s._closedPromise_reject = m, s._closedPromiseState = "pending";
        });
      }
      function Ds(s, d) {
        b1(s), an(s, d);
      }
      function m0(s) {
        b1(s), Rs(s);
      }
      function an(s, d) {
        s._closedPromise_reject !== void 0 && (P(s._closedPromise), s._closedPromise_reject(d), s._closedPromise_resolve = void 0, s._closedPromise_reject = void 0, s._closedPromiseState = "rejected");
      }
      function f0(s, d) {
        Ds(s, d);
      }
      function Rs(s) {
        s._closedPromise_resolve !== void 0 && (s._closedPromise_resolve(void 0), s._closedPromise_resolve = void 0, s._closedPromise_reject = void 0, s._closedPromiseState = "resolved");
      }
      function _1(s) {
        s._readyPromise = g((d, m) => {
          s._readyPromise_resolve = d, s._readyPromise_reject = m;
        }), s._readyPromiseState = "pending";
      }
      function nn(s, d) {
        _1(s), Os(s, d);
      }
      function Ps(s) {
        _1(s), on(s);
      }
      function Os(s, d) {
        s._readyPromise_reject !== void 0 && (P(s._readyPromise), s._readyPromise_reject(d), s._readyPromise_resolve = void 0, s._readyPromise_reject = void 0, s._readyPromiseState = "rejected");
      }
      function h0(s) {
        _1(s);
      }
      function g0(s, d) {
        nn(s, d);
      }
      function on(s) {
        s._readyPromise_resolve !== void 0 && (s._readyPromise_resolve(void 0), s._readyPromise_resolve = void 0, s._readyPromise_reject = void 0, s._readyPromiseState = "fulfilled");
      }
      const Bs = typeof DOMException < "u" ? DOMException : void 0;
      function v0(s) {
        if (!(typeof s == "function" || typeof s == "object"))
          return !1;
        try {
          return new s(), !0;
        } catch {
          return !1;
        }
      }
      function w0() {
        const s = function(m, S) {
          this.message = m || "", this.name = S || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        };
        return s.prototype = Object.create(Error.prototype), Object.defineProperty(s.prototype, "constructor", { value: s, writable: !0, configurable: !0 }), s;
      }
      const b0 = v0(Bs) ? Bs : w0();
      function Fs(s, d, m, S, B, $) {
        const G = pe(s), z = gs(d);
        s._disturbed = !0;
        let ie = !1, se = w(void 0);
        return g((de, le) => {
          let _e;
          if ($ !== void 0) {
            if (_e = () => {
              const Z = new b0("Aborted", "AbortError"), oe = [];
              S || oe.push(() => d._state === "writable" ? f1(d, Z) : w(void 0)), B || oe.push(() => s._state === "readable" ? ot(s, Z) : w(void 0)), We(() => Promise.all(oe.map((he) => he())), !0, Z);
            }, $.aborted) {
              _e();
              return;
            }
            $.addEventListener("abort", _e);
          }
          function st() {
            return g((Z, oe) => {
              function he(Qe) {
                Qe ? Z() : y(Or(), he, oe);
              }
              he(!1);
            });
          }
          function Or() {
            return ie ? w(!0) : y(z._readyPromise, () => g((Z, oe) => {
              pa(G, {
                _chunkSteps: (he) => {
                  se = y(Es(z, he), void 0, i), Z(!1);
                },
                _closeSteps: () => Z(!0),
                _errorSteps: oe
              });
            }));
          }
          if (Tt(s, G._closedPromise, (Z) => {
            S ? et(!0, Z) : We(() => f1(d, Z), !0, Z);
          }), Tt(d, z._closedPromise, (Z) => {
            B ? et(!0, Z) : We(() => ot(s, Z), !0, Z);
          }), Le(s, G._closedPromise, () => {
            m ? et() : We(() => i0(z));
          }), ht(d) || d._state === "closed") {
            const Z = new TypeError("the destination writable stream closed before all data could be piped to it");
            B ? et(!0, Z) : We(() => ot(s, Z), !0, Z);
          }
          P(st());
          function jt() {
            const Z = se;
            return y(se, () => Z !== se ? jt() : void 0);
          }
          function Tt(Z, oe, he) {
            Z._state === "errored" ? he(Z._storedError) : F(oe, he);
          }
          function Le(Z, oe, he) {
            Z._state === "closed" ? he() : N(oe, he);
          }
          function We(Z, oe, he) {
            if (ie)
              return;
            ie = !0, d._state === "writable" && !ht(d) ? N(jt(), Qe) : Qe();
            function Qe() {
              E(Z(), () => At(oe, he), (Br) => At(!0, Br));
            }
          }
          function et(Z, oe) {
            ie || (ie = !0, d._state === "writable" && !ht(d) ? N(jt(), () => At(Z, oe)) : At(Z, oe));
          }
          function At(Z, oe) {
            ys(z), M(G), $ !== void 0 && $.removeEventListener("abort", _e), Z ? le(oe) : de(void 0);
          }
        });
      }
      class Rr {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
         */
        get desiredSize() {
          if (!y1(this))
            throw T1("desiredSize");
          return sn(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        close() {
          if (!y1(this))
            throw T1("close");
          if (!Pr(this))
            throw new TypeError("The stream is not in a state that permits close");
          ba(this);
        }
        enqueue(d = void 0) {
          if (!y1(this))
            throw T1("enqueue");
          if (!Pr(this))
            throw new TypeError("The stream is not in a state that permits enqueue");
          return S1(this, d);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        error(d = void 0) {
          if (!y1(this))
            throw T1("error");
          xt(this, d);
        }
        /** @internal */
        [ce](d) {
          Ut(this);
          const m = this._cancelAlgorithm(d);
          return E1(this), m;
        }
        /** @internal */
        [Me](d) {
          const m = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const S = Li(this);
            this._closeRequested && this._queue.length === 0 ? (E1(this), _a(m)) : wa(this), d._chunkSteps(S);
          } else
            Ce(m, d), wa(this);
        }
      }
      Object.defineProperties(Rr.prototype, {
        close: { enumerable: !0 },
        enqueue: { enumerable: !0 },
        error: { enumerable: !0 },
        desiredSize: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(Rr.prototype, a.toStringTag, {
        value: "ReadableStreamDefaultController",
        configurable: !0
      });
      function y1(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_controlledReadableStream") ? !1 : s instanceof Rr;
      }
      function wa(s) {
        if (!ks(s))
          return;
        if (s._pulling) {
          s._pullAgain = !0;
          return;
        }
        s._pulling = !0;
        const m = s._pullAlgorithm();
        E(m, () => {
          s._pulling = !1, s._pullAgain && (s._pullAgain = !1, wa(s));
        }, (S) => {
          xt(s, S);
        });
      }
      function ks(s) {
        const d = s._controlledReadableStream;
        return !Pr(s) || !s._started ? !1 : !!(Lt(d) && ft(d) > 0 || sn(s) > 0);
      }
      function E1(s) {
        s._pullAlgorithm = void 0, s._cancelAlgorithm = void 0, s._strategySizeAlgorithm = void 0;
      }
      function ba(s) {
        if (!Pr(s))
          return;
        const d = s._controlledReadableStream;
        s._closeRequested = !0, s._queue.length === 0 && (E1(s), _a(d));
      }
      function S1(s, d) {
        if (!Pr(s))
          return;
        const m = s._controlledReadableStream;
        if (Lt(m) && ft(m) > 0)
          Ee(m, d, !1);
        else {
          let S;
          try {
            S = s._strategySizeAlgorithm(d);
          } catch (B) {
            throw xt(s, B), B;
          }
          try {
            ji(s, d, S);
          } catch (B) {
            throw xt(s, B), B;
          }
        }
        wa(s);
      }
      function xt(s, d) {
        const m = s._controlledReadableStream;
        m._state === "readable" && (Ut(s), E1(s), Us(m, d));
      }
      function sn(s) {
        const d = s._controlledReadableStream._state;
        return d === "errored" ? null : d === "closed" ? 0 : s._strategyHWM - s._queueTotalSize;
      }
      function _0(s) {
        return !ks(s);
      }
      function Pr(s) {
        const d = s._controlledReadableStream._state;
        return !s._closeRequested && d === "readable";
      }
      function Ns(s, d, m, S, B, $, G) {
        d._controlledReadableStream = s, d._queue = void 0, d._queueTotalSize = void 0, Ut(d), d._started = !1, d._closeRequested = !1, d._pullAgain = !1, d._pulling = !1, d._strategySizeAlgorithm = G, d._strategyHWM = $, d._pullAlgorithm = S, d._cancelAlgorithm = B, s._readableStreamController = d;
        const z = m();
        E(w(z), () => {
          d._started = !0, wa(d);
        }, (ie) => {
          xt(d, ie);
        });
      }
      function y0(s, d, m, S) {
        const B = Object.create(Rr.prototype);
        let $ = () => {
        }, G = () => w(void 0), z = () => w(void 0);
        d.start !== void 0 && ($ = () => d.start(B)), d.pull !== void 0 && (G = () => d.pull(B)), d.cancel !== void 0 && (z = (ie) => d.cancel(ie)), Ns(s, B, $, G, z, m, S);
      }
      function T1(s) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${s} can only be used on a ReadableStreamDefaultController`);
      }
      function E0(s, d) {
        return ir(s._readableStreamController) ? T0(s) : S0(s);
      }
      function S0(s, d) {
        const m = pe(s);
        let S = !1, B = !1, $ = !1, G = !1, z, ie, se, de, le;
        const _e = g((Le) => {
          le = Le;
        });
        function st() {
          return S ? (B = !0, w(void 0)) : (S = !0, pa(m, {
            _chunkSteps: (We) => {
              O(() => {
                B = !1;
                const et = We, At = We;
                $ || S1(se._readableStreamController, et), G || S1(de._readableStreamController, At), S = !1, B && st();
              });
            },
            _closeSteps: () => {
              S = !1, $ || ba(se._readableStreamController), G || ba(de._readableStreamController), (!$ || !G) && le(void 0);
            },
            _errorSteps: () => {
              S = !1;
            }
          }), w(void 0));
        }
        function Or(Le) {
          if ($ = !0, z = Le, G) {
            const We = da([z, ie]), et = ot(s, We);
            le(et);
          }
          return _e;
        }
        function jt(Le) {
          if (G = !0, ie = Le, $) {
            const We = da([z, ie]), et = ot(s, We);
            le(et);
          }
          return _e;
        }
        function Tt() {
        }
        return se = pn(Tt, st, Or), de = pn(Tt, st, jt), F(m._closedPromise, (Le) => {
          xt(se._readableStreamController, Le), xt(de._readableStreamController, Le), (!$ || !G) && le(void 0);
        }), [se, de];
      }
      function T0(s) {
        let d = pe(s), m = !1, S = !1, B = !1, $ = !1, G = !1, z, ie, se, de, le;
        const _e = g((Z) => {
          le = Z;
        });
        function st(Z) {
          F(Z._closedPromise, (oe) => {
            Z === d && (nt(se._readableStreamController, oe), nt(de._readableStreamController, oe), (!$ || !G) && le(void 0));
          });
        }
        function Or() {
          or(d) && (M(d), d = pe(s), st(d)), pa(d, {
            _chunkSteps: (oe) => {
              O(() => {
                S = !1, B = !1;
                const he = oe;
                let Qe = oe;
                if (!$ && !G)
                  try {
                    Qe = ts(oe);
                  } catch (Br) {
                    nt(se._readableStreamController, Br), nt(de._readableStreamController, Br), le(ot(s, Br));
                    return;
                  }
                $ || p1(se._readableStreamController, he), G || p1(de._readableStreamController, Qe), m = !1, S ? Tt() : B && Le();
              });
            },
            _closeSteps: () => {
              m = !1, $ || ua(se._readableStreamController), G || ua(de._readableStreamController), se._readableStreamController._pendingPullIntos.length > 0 && d1(se._readableStreamController, 0), de._readableStreamController._pendingPullIntos.length > 0 && d1(de._readableStreamController, 0), (!$ || !G) && le(void 0);
            },
            _errorSteps: () => {
              m = !1;
            }
          });
        }
        function jt(Z, oe) {
          $t(d) && (M(d), d = us(s), st(d));
          const he = oe ? de : se, Qe = oe ? se : de;
          fs(d, Z, {
            _chunkSteps: (Fr) => {
              O(() => {
                S = !1, B = !1;
                const kr = oe ? G : $;
                if (oe ? $ : G)
                  kr || l1(he._readableStreamController, Fr);
                else {
                  let Qs;
                  try {
                    Qs = ts(Fr);
                  } catch (ln) {
                    nt(he._readableStreamController, ln), nt(Qe._readableStreamController, ln), le(ot(s, ln));
                    return;
                  }
                  kr || l1(he._readableStreamController, Fr), p1(Qe._readableStreamController, Qs);
                }
                m = !1, S ? Tt() : B && Le();
              });
            },
            _closeSteps: (Fr) => {
              m = !1;
              const kr = oe ? G : $, k1 = oe ? $ : G;
              kr || ua(he._readableStreamController), k1 || ua(Qe._readableStreamController), Fr !== void 0 && (kr || l1(he._readableStreamController, Fr), !k1 && Qe._readableStreamController._pendingPullIntos.length > 0 && d1(Qe._readableStreamController, 0)), (!kr || !k1) && le(void 0);
            },
            _errorSteps: () => {
              m = !1;
            }
          });
        }
        function Tt() {
          if (m)
            return S = !0, w(void 0);
          m = !0;
          const Z = zi(se._readableStreamController);
          return Z === null ? Or() : jt(Z._view, !1), w(void 0);
        }
        function Le() {
          if (m)
            return B = !0, w(void 0);
          m = !0;
          const Z = zi(de._readableStreamController);
          return Z === null ? Or() : jt(Z._view, !0), w(void 0);
        }
        function We(Z) {
          if ($ = !0, z = Z, G) {
            const oe = da([z, ie]), he = ot(s, oe);
            le(he);
          }
          return _e;
        }
        function et(Z) {
          if (G = !0, ie = Z, $) {
            const oe = da([z, ie]), he = ot(s, oe);
            le(he);
          }
          return _e;
        }
        function At() {
        }
        return se = $s(At, Tt, We), de = $s(At, Le, et), st(d), [se, de];
      }
      function A0(s, d) {
        Oe(s, d);
        const m = s, S = m == null ? void 0 : m.autoAllocateChunkSize, B = m == null ? void 0 : m.cancel, $ = m == null ? void 0 : m.pull, G = m == null ? void 0 : m.start, z = m == null ? void 0 : m.type;
        return {
          autoAllocateChunkSize: S === void 0 ? void 0 : q(S, `${d} has member 'autoAllocateChunkSize' that`),
          cancel: B === void 0 ? void 0 : C0(B, m, `${d} has member 'cancel' that`),
          pull: $ === void 0 ? void 0 : D0($, m, `${d} has member 'pull' that`),
          start: G === void 0 ? void 0 : R0(G, m, `${d} has member 'start' that`),
          type: z === void 0 ? void 0 : P0(z, `${d} has member 'type' that`)
        };
      }
      function C0(s, d, m) {
        return ae(s, m), (S) => A(s, d, [S]);
      }
      function D0(s, d, m) {
        return ae(s, m), (S) => A(s, d, [S]);
      }
      function R0(s, d, m) {
        return ae(s, m), (S) => C(s, d, [S]);
      }
      function P0(s, d) {
        if (s = `${s}`, s !== "bytes")
          throw new TypeError(`${d} '${s}' is not a valid enumeration value for ReadableStreamType`);
        return s;
      }
      function O0(s, d) {
        Oe(s, d);
        const m = s == null ? void 0 : s.mode;
        return {
          mode: m === void 0 ? void 0 : B0(m, `${d} has member 'mode' that`)
        };
      }
      function B0(s, d) {
        if (s = `${s}`, s !== "byob")
          throw new TypeError(`${d} '${s}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return s;
      }
      function F0(s, d) {
        return Oe(s, d), { preventCancel: !!(s == null ? void 0 : s.preventCancel) };
      }
      function Is(s, d) {
        Oe(s, d);
        const m = s == null ? void 0 : s.preventAbort, S = s == null ? void 0 : s.preventCancel, B = s == null ? void 0 : s.preventClose, $ = s == null ? void 0 : s.signal;
        return $ !== void 0 && k0($, `${d} has member 'signal' that`), {
          preventAbort: !!m,
          preventCancel: !!S,
          preventClose: !!B,
          signal: $
        };
      }
      function k0(s, d) {
        if (!W2(s))
          throw new TypeError(`${d} is not an AbortSignal.`);
      }
      function N0(s, d) {
        Oe(s, d);
        const m = s == null ? void 0 : s.readable;
        b(m, "readable", "ReadableWritablePair"), Y(m, `${d} has member 'readable' that`);
        const S = s == null ? void 0 : s.writable;
        return b(S, "writable", "ReadableWritablePair"), hs(S, `${d} has member 'writable' that`), { readable: m, writable: S };
      }
      class Vt {
        constructor(d = {}, m = {}) {
          d === void 0 ? d = null : k(d, "First parameter");
          const S = m1(m, "Second parameter"), B = A0(d, "First parameter");
          if (dn(this), B.type === "bytes") {
            if (S.size !== void 0)
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            const $ = fa(S, 0);
            $2(this, B, $);
          } else {
            const $ = c1(S), G = fa(S, 1);
            y0(this, B, G, $);
          }
        }
        /**
         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
         */
        get locked() {
          if (!Gt(this))
            throw dr("locked");
          return Lt(this);
        }
        /**
         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
         *
         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
         * method, which might or might not use it.
         */
        cancel(d = void 0) {
          return Gt(this) ? Lt(this) ? f(new TypeError("Cannot cancel a stream that already has a reader")) : ot(this, d) : f(dr("cancel"));
        }
        getReader(d = void 0) {
          if (!Gt(this))
            throw dr("getReader");
          return O0(d, "First parameter").mode === void 0 ? pe(this) : us(this);
        }
        pipeThrough(d, m = {}) {
          if (!Gt(this))
            throw dr("pipeThrough");
          W(d, 1, "pipeThrough");
          const S = N0(d, "First parameter"), B = Is(m, "Second parameter");
          if (Lt(this))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (Cr(S.writable))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          const $ = Fs(this, S.writable, B.preventClose, B.preventAbort, B.preventCancel, B.signal);
          return P($), S.readable;
        }
        pipeTo(d, m = {}) {
          if (!Gt(this))
            return f(dr("pipeTo"));
          if (d === void 0)
            return f("Parameter 1 is required in 'pipeTo'.");
          if (!Ar(d))
            return f(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let S;
          try {
            S = Is(m, "Second parameter");
          } catch (B) {
            return f(B);
          }
          return Lt(this) ? f(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Cr(d) ? f(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Fs(this, d, S.preventClose, S.preventAbort, S.preventCancel, S.signal);
        }
        /**
         * Tees this readable stream, returning a two-element array containing the two resulting branches as
         * new {@link ReadableStream} instances.
         *
         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
         * propagated to the stream's underlying source.
         *
         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
         * this could allow interference between the two branches.
         */
        tee() {
          if (!Gt(this))
            throw dr("tee");
          const d = E0(this);
          return da(d);
        }
        values(d = void 0) {
          if (!Gt(this))
            throw dr("values");
          const m = F0(d, "First parameter");
          return P2(this, m.preventCancel);
        }
      }
      Object.defineProperties(Vt.prototype, {
        cancel: { enumerable: !0 },
        getReader: { enumerable: !0 },
        pipeThrough: { enumerable: !0 },
        pipeTo: { enumerable: !0 },
        tee: { enumerable: !0 },
        values: { enumerable: !0 },
        locked: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(Vt.prototype, a.toStringTag, {
        value: "ReadableStream",
        configurable: !0
      }), typeof a.asyncIterator == "symbol" && Object.defineProperty(Vt.prototype, a.asyncIterator, {
        value: Vt.prototype.values,
        writable: !0,
        configurable: !0
      });
      function pn(s, d, m, S = 1, B = () => 1) {
        const $ = Object.create(Vt.prototype);
        dn($);
        const G = Object.create(Rr.prototype);
        return Ns($, G, s, d, m, S, B), $;
      }
      function $s(s, d, m) {
        const S = Object.create(Vt.prototype);
        dn(S);
        const B = Object.create(Tr.prototype);
        return ls(S, B, s, d, m, 0, void 0), S;
      }
      function dn(s) {
        s._state = "readable", s._reader = void 0, s._storedError = void 0, s._disturbed = !1;
      }
      function Gt(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_readableStreamController") ? !1 : s instanceof Vt;
      }
      function Lt(s) {
        return s._reader !== void 0;
      }
      function ot(s, d) {
        if (s._disturbed = !0, s._state === "closed")
          return w(void 0);
        if (s._state === "errored")
          return f(s._storedError);
        _a(s);
        const m = s._reader;
        m !== void 0 && or(m) && (m._readIntoRequests.forEach((B) => {
          B._closeSteps(void 0);
        }), m._readIntoRequests = new R());
        const S = s._readableStreamController[ce](d);
        return U(S, i);
      }
      function _a(s) {
        s._state = "closed";
        const d = s._reader;
        d !== void 0 && (j(d), $t(d) && (d._readRequests.forEach((m) => {
          m._closeSteps();
        }), d._readRequests = new R()));
      }
      function Us(s, d) {
        s._state = "errored", s._storedError = d;
        const m = s._reader;
        m !== void 0 && (ee(m, d), $t(m) ? (m._readRequests.forEach((S) => {
          S._errorSteps(d);
        }), m._readRequests = new R()) : (m._readIntoRequests.forEach((S) => {
          S._errorSteps(d);
        }), m._readIntoRequests = new R()));
      }
      function dr(s) {
        return new TypeError(`ReadableStream.prototype.${s} can only be used on a ReadableStream`);
      }
      function xs(s, d) {
        Oe(s, d);
        const m = s == null ? void 0 : s.highWaterMark;
        return b(m, "highWaterMark", "QueuingStrategyInit"), {
          highWaterMark: _(m)
        };
      }
      const Vs = (s) => s.byteLength;
      try {
        Object.defineProperty(Vs, "name", {
          value: "size",
          configurable: !0
        });
      } catch {
      }
      class A1 {
        constructor(d) {
          W(d, 1, "ByteLengthQueuingStrategy"), d = xs(d, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = d.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */
        get highWaterMark() {
          if (!Ls(this))
            throw Gs("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by returning the value of its `byteLength` property.
         */
        get size() {
          if (!Ls(this))
            throw Gs("size");
          return Vs;
        }
      }
      Object.defineProperties(A1.prototype, {
        highWaterMark: { enumerable: !0 },
        size: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(A1.prototype, a.toStringTag, {
        value: "ByteLengthQueuingStrategy",
        configurable: !0
      });
      function Gs(s) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${s} can only be used on a ByteLengthQueuingStrategy`);
      }
      function Ls(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_byteLengthQueuingStrategyHighWaterMark") ? !1 : s instanceof A1;
      }
      const js = () => 1;
      try {
        Object.defineProperty(js, "name", {
          value: "size",
          configurable: !0
        });
      } catch {
      }
      class C1 {
        constructor(d) {
          W(d, 1, "CountQueuingStrategy"), d = xs(d, "First parameter"), this._countQueuingStrategyHighWaterMark = d.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */
        get highWaterMark() {
          if (!qs(this))
            throw Ms("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by always returning 1.
         * This ensures that the total queue size is a count of the number of chunks in the queue.
         */
        get size() {
          if (!qs(this))
            throw Ms("size");
          return js;
        }
      }
      Object.defineProperties(C1.prototype, {
        highWaterMark: { enumerable: !0 },
        size: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(C1.prototype, a.toStringTag, {
        value: "CountQueuingStrategy",
        configurable: !0
      });
      function Ms(s) {
        return new TypeError(`CountQueuingStrategy.prototype.${s} can only be used on a CountQueuingStrategy`);
      }
      function qs(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_countQueuingStrategyHighWaterMark") ? !1 : s instanceof C1;
      }
      function I0(s, d) {
        Oe(s, d);
        const m = s == null ? void 0 : s.flush, S = s == null ? void 0 : s.readableType, B = s == null ? void 0 : s.start, $ = s == null ? void 0 : s.transform, G = s == null ? void 0 : s.writableType;
        return {
          flush: m === void 0 ? void 0 : $0(m, s, `${d} has member 'flush' that`),
          readableType: S,
          start: B === void 0 ? void 0 : U0(B, s, `${d} has member 'start' that`),
          transform: $ === void 0 ? void 0 : x0($, s, `${d} has member 'transform' that`),
          writableType: G
        };
      }
      function $0(s, d, m) {
        return ae(s, m), (S) => A(s, d, [S]);
      }
      function U0(s, d, m) {
        return ae(s, m), (S) => C(s, d, [S]);
      }
      function x0(s, d, m) {
        return ae(s, m), (S, B) => A(s, d, [S, B]);
      }
      class D1 {
        constructor(d = {}, m = {}, S = {}) {
          d === void 0 && (d = null);
          const B = m1(m, "Second parameter"), $ = m1(S, "Third parameter"), G = I0(d, "First parameter");
          if (G.readableType !== void 0)
            throw new RangeError("Invalid readableType specified");
          if (G.writableType !== void 0)
            throw new RangeError("Invalid writableType specified");
          const z = fa($, 0), ie = c1($), se = fa(B, 1), de = c1(B);
          let le;
          const _e = g((st) => {
            le = st;
          });
          V0(this, _e, se, de, z, ie), L0(this, G), G.start !== void 0 ? le(G.start(this._transformStreamController)) : le(void 0);
        }
        /**
         * The readable side of the transform stream.
         */
        get readable() {
          if (!Ws(this))
            throw Ys("readable");
          return this._readable;
        }
        /**
         * The writable side of the transform stream.
         */
        get writable() {
          if (!Ws(this))
            throw Ys("writable");
          return this._writable;
        }
      }
      Object.defineProperties(D1.prototype, {
        readable: { enumerable: !0 },
        writable: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(D1.prototype, a.toStringTag, {
        value: "TransformStream",
        configurable: !0
      });
      function V0(s, d, m, S, B, $) {
        function G() {
          return d;
        }
        function z(_e) {
          return q0(s, _e);
        }
        function ie(_e) {
          return W0(s, _e);
        }
        function se() {
          return z0(s);
        }
        s._writable = K2(G, z, se, ie, m, S);
        function de() {
          return H0(s);
        }
        function le(_e) {
          return P1(s, _e), w(void 0);
        }
        s._readable = pn(G, de, le, B, $), s._backpressure = void 0, s._backpressureChangePromise = void 0, s._backpressureChangePromise_resolve = void 0, O1(s, !0), s._transformStreamController = void 0;
      }
      function Ws(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_transformStreamController") ? !1 : s instanceof D1;
      }
      function R1(s, d) {
        xt(s._readable._readableStreamController, d), P1(s, d);
      }
      function P1(s, d) {
        zs(s._transformStreamController), en(s._writable._writableStreamController, d), s._backpressure && O1(s, !1);
      }
      function O1(s, d) {
        s._backpressureChangePromise !== void 0 && s._backpressureChangePromise_resolve(), s._backpressureChangePromise = g((m) => {
          s._backpressureChangePromise_resolve = m;
        }), s._backpressure = d;
      }
      class ya {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
         */
        get desiredSize() {
          if (!B1(this))
            throw F1("desiredSize");
          const d = this._controlledTransformStream._readable._readableStreamController;
          return sn(d);
        }
        enqueue(d = void 0) {
          if (!B1(this))
            throw F1("enqueue");
          Hs(this, d);
        }
        /**
         * Errors both the readable side and the writable side of the controlled transform stream, making all future
         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
         */
        error(d = void 0) {
          if (!B1(this))
            throw F1("error");
          j0(this, d);
        }
        /**
         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
         * transformer only needs to consume a portion of the chunks written to the writable side.
         */
        terminate() {
          if (!B1(this))
            throw F1("terminate");
          M0(this);
        }
      }
      Object.defineProperties(ya.prototype, {
        enqueue: { enumerable: !0 },
        error: { enumerable: !0 },
        terminate: { enumerable: !0 },
        desiredSize: { enumerable: !0 }
      }), typeof a.toStringTag == "symbol" && Object.defineProperty(ya.prototype, a.toStringTag, {
        value: "TransformStreamDefaultController",
        configurable: !0
      });
      function B1(s) {
        return !p(s) || !Object.prototype.hasOwnProperty.call(s, "_controlledTransformStream") ? !1 : s instanceof ya;
      }
      function G0(s, d, m, S) {
        d._controlledTransformStream = s, s._transformStreamController = d, d._transformAlgorithm = m, d._flushAlgorithm = S;
      }
      function L0(s, d) {
        const m = Object.create(ya.prototype);
        let S = ($) => {
          try {
            return Hs(m, $), w(void 0);
          } catch (G) {
            return f(G);
          }
        }, B = () => w(void 0);
        d.transform !== void 0 && (S = ($) => d.transform($, m)), d.flush !== void 0 && (B = () => d.flush(m)), G0(s, m, S, B);
      }
      function zs(s) {
        s._transformAlgorithm = void 0, s._flushAlgorithm = void 0;
      }
      function Hs(s, d) {
        const m = s._controlledTransformStream, S = m._readable._readableStreamController;
        if (!Pr(S))
          throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          S1(S, d);
        } catch ($) {
          throw P1(m, $), m._readable._storedError;
        }
        _0(S) !== m._backpressure && O1(m, !0);
      }
      function j0(s, d) {
        R1(s._controlledTransformStream, d);
      }
      function Ks(s, d) {
        const m = s._transformAlgorithm(d);
        return U(m, void 0, (S) => {
          throw R1(s._controlledTransformStream, S), S;
        });
      }
      function M0(s) {
        const d = s._controlledTransformStream, m = d._readable._readableStreamController;
        ba(m);
        const S = new TypeError("TransformStream terminated");
        P1(d, S);
      }
      function q0(s, d) {
        const m = s._transformStreamController;
        if (s._backpressure) {
          const S = s._backpressureChangePromise;
          return U(S, () => {
            const B = s._writable;
            if (B._state === "erroring")
              throw B._storedError;
            return Ks(m, d);
          });
        }
        return Ks(m, d);
      }
      function W0(s, d) {
        return R1(s, d), w(void 0);
      }
      function z0(s) {
        const d = s._readable, m = s._transformStreamController, S = m._flushAlgorithm();
        return zs(m), U(S, () => {
          if (d._state === "errored")
            throw d._storedError;
          ba(d._readableStreamController);
        }, (B) => {
          throw R1(s, B), d._storedError;
        });
      }
      function H0(s) {
        return O1(s, !1), s._backpressureChangePromise;
      }
      function F1(s) {
        return new TypeError(`TransformStreamDefaultController.prototype.${s} can only be used on a TransformStreamDefaultController`);
      }
      function Ys(s) {
        return new TypeError(`TransformStream.prototype.${s} can only be used on a TransformStream`);
      }
      r.ByteLengthQueuingStrategy = A1, r.CountQueuingStrategy = C1, r.ReadableByteStreamController = Tr, r.ReadableStream = Vt, r.ReadableStreamBYOBReader = ma, r.ReadableStreamBYOBRequest = la, r.ReadableStreamDefaultController = Rr, r.ReadableStreamDefaultReader = sa, r.TransformStream = D1, r.TransformStreamDefaultController = ya, r.WritableStream = ha, r.WritableStreamDefaultController = Dr, r.WritableStreamDefaultWriter = ga, Object.defineProperty(r, "__esModule", { value: !0 });
    });
  }(N1, N1.exports)), N1.exports;
}
const o6 = 65536;
if (!globalThis.ReadableStream)
  try {
    const e = require("node:process"), { emitWarning: t } = e;
    try {
      e.emitWarning = () => {
      }, Object.assign(globalThis, require("node:stream/web")), e.emitWarning = t;
    } catch (r) {
      throw e.emitWarning = t, r;
    }
  } catch {
    Object.assign(globalThis, n6());
  }
try {
  const { Blob: e } = require("buffer");
  e && !e.prototype.stream && (e.prototype.stream = function(r) {
    let a = 0;
    const i = this;
    return new ReadableStream({
      type: "bytes",
      async pull(n) {
        const p = await i.slice(a, Math.min(i.size, a + o6)).arrayBuffer();
        a += p.byteLength, n.enqueue(new Uint8Array(p)), a === i.size && n.close();
      }
    });
  });
} catch {
}
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
const Xs = 65536;
async function* un(e, t = !0) {
  for (const r of e)
    if ("stream" in r)
      yield* (
        /** @type {AsyncIterableIterator<Uint8Array>} */
        r.stream()
      );
    else if (ArrayBuffer.isView(r))
      if (t) {
        let a = r.byteOffset;
        const i = r.byteOffset + r.byteLength;
        for (; a !== i; ) {
          const n = Math.min(i - a, Xs), o = r.buffer.slice(a, a + n);
          a += o.byteLength, yield new Uint8Array(o);
        }
      } else
        yield r;
    else {
      let a = 0, i = (
        /** @type {Blob} */
        r
      );
      for (; a !== i.size; ) {
        const o = await i.slice(a, Math.min(i.size, a + Xs)).arrayBuffer();
        a += o.byteLength, yield new Uint8Array(o);
      }
    }
}
var Bt, za, Wr, ui, Xr;
const Cd = (Xr = class {
  /**
   * The Blob() constructor returns a new Blob object. The content
   * of the blob consists of the concatenation of the values given
   * in the parameter array.
   *
   * @param {*} blobParts
   * @param {{ type?: string, endings?: string }} [options]
   */
  constructor(t = [], r = {}) {
    /** @type {Array.<(Blob|Uint8Array)>} */
    Mt(this, Bt, []);
    Mt(this, za, "");
    Mt(this, Wr, 0);
    Mt(this, ui, "transparent");
    if (typeof t != "object" || t === null)
      throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    if (typeof t[Symbol.iterator] != "function")
      throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    if (typeof r != "object" && typeof r != "function")
      throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    r === null && (r = {});
    const a = new TextEncoder();
    for (const n of t) {
      let o;
      ArrayBuffer.isView(n) ? o = new Uint8Array(n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength)) : n instanceof ArrayBuffer ? o = new Uint8Array(n.slice(0)) : n instanceof Xr ? o = n : o = a.encode(`${n}`), gt(this, Wr, Se(this, Wr) + (ArrayBuffer.isView(o) ? o.byteLength : o.size)), Se(this, Bt).push(o);
    }
    gt(this, ui, `${r.endings === void 0 ? "transparent" : r.endings}`);
    const i = r.type === void 0 ? "" : String(r.type);
    gt(this, za, /^[\x20-\x7E]*$/.test(i) ? i : "");
  }
  /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */
  get size() {
    return Se(this, Wr);
  }
  /**
   * The type property of a Blob object returns the MIME type of the file.
   */
  get type() {
    return Se(this, za);
  }
  /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */
  async text() {
    const t = new TextDecoder();
    let r = "";
    for await (const a of un(Se(this, Bt), !1))
      r += t.decode(a, { stream: !0 });
    return r += t.decode(), r;
  }
  /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */
  async arrayBuffer() {
    const t = new Uint8Array(this.size);
    let r = 0;
    for await (const a of un(Se(this, Bt), !1))
      t.set(a, r), r += a.length;
    return t.buffer;
  }
  stream() {
    const t = un(Se(this, Bt), !0);
    return new globalThis.ReadableStream({
      // @ts-ignore
      type: "bytes",
      async pull(r) {
        const a = await t.next();
        a.done ? r.close() : r.enqueue(a.value);
      },
      async cancel() {
        await t.return();
      }
    });
  }
  /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */
  slice(t = 0, r = this.size, a = "") {
    const { size: i } = this;
    let n = t < 0 ? Math.max(i + t, 0) : Math.min(t, i), o = r < 0 ? Math.max(i + r, 0) : Math.min(r, i);
    const p = Math.max(o - n, 0), l = Se(this, Bt), u = [];
    let c = 0;
    for (const v of l) {
      if (c >= p)
        break;
      const g = ArrayBuffer.isView(v) ? v.byteLength : v.size;
      if (n && g <= n)
        n -= g, o -= g;
      else {
        let w;
        ArrayBuffer.isView(v) ? (w = v.subarray(n, Math.min(g, o)), c += w.byteLength) : (w = v.slice(n, Math.min(g, o)), c += w.size), o -= g, u.push(w), n = 0;
      }
    }
    const h = new Xr([], { type: String(a).toLowerCase() });
    return gt(h, Wr, p), gt(h, Bt, u), h;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](t) {
    return t && typeof t == "object" && typeof t.constructor == "function" && (typeof t.stream == "function" || typeof t.arrayBuffer == "function") && /^(Blob|File)$/.test(t[Symbol.toStringTag]);
  }
}, Bt = new WeakMap(), za = new WeakMap(), Wr = new WeakMap(), ui = new WeakMap(), Xr);
Object.defineProperties(Cd.prototype, {
  size: { enumerable: !0 },
  type: { enumerable: !0 },
  slice: { enumerable: !0 }
});
const s6 = Cd, ti = s6;
var Ha, Ka, yd;
const p6 = (yd = class extends ti {
  /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */
  // @ts-ignore
  constructor(r, a, i = {}) {
    if (arguments.length < 2)
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    super(r, i);
    Mt(this, Ha, 0);
    Mt(this, Ka, "");
    i === null && (i = {});
    const n = i.lastModified === void 0 ? Date.now() : Number(i.lastModified);
    Number.isNaN(n) || gt(this, Ha, n), gt(this, Ka, String(a));
  }
  get name() {
    return Se(this, Ka);
  }
  get lastModified() {
    return Se(this, Ha);
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](r) {
    return !!r && r instanceof ti && /^(File)$/.test(r[Symbol.toStringTag]);
  }
}, Ha = new WeakMap(), Ka = new WeakMap(), yd), d6 = p6;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var { toStringTag: Ia, iterator: l6, hasInstance: u6 } = Symbol, ep = Math.random, c6 = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), tp = (e, t, r) => (e += "", /^(Blob|File)$/.test(t && t[Ia]) ? [(r = r !== void 0 ? r + "" : t[Ia] == "File" ? t.name : "blob", e), t.name !== r || t[Ia] == "blob" ? new d6([t], r, t) : t] : [e, t + ""]), cn = (e, t) => (t ? e : e.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), lr = (e, t, r) => {
  if (t.length < r)
    throw new TypeError(`Failed to execute '${e}' on 'FormData': ${r} arguments required, but only ${t.length} present.`);
}, rt, Ed;
const Kn = (Ed = class {
  constructor(...t) {
    Mt(this, rt, []);
    if (t.length)
      throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
  }
  get [Ia]() {
    return "FormData";
  }
  [l6]() {
    return this.entries();
  }
  static [u6](t) {
    return t && typeof t == "object" && t[Ia] === "FormData" && !c6.some((r) => typeof t[r] != "function");
  }
  append(...t) {
    lr("append", arguments, 2), Se(this, rt).push(tp(...t));
  }
  delete(t) {
    lr("delete", arguments, 1), t += "", gt(this, rt, Se(this, rt).filter(([r]) => r !== t));
  }
  get(t) {
    lr("get", arguments, 1), t += "";
    for (var r = Se(this, rt), a = r.length, i = 0; i < a; i++)
      if (r[i][0] === t)
        return r[i][1];
    return null;
  }
  getAll(t, r) {
    return lr("getAll", arguments, 1), r = [], t += "", Se(this, rt).forEach((a) => a[0] === t && r.push(a[1])), r;
  }
  has(t) {
    return lr("has", arguments, 1), t += "", Se(this, rt).some((r) => r[0] === t);
  }
  forEach(t, r) {
    lr("forEach", arguments, 1);
    for (var [a, i] of this)
      t.call(r, i, a, this);
  }
  set(...t) {
    lr("set", arguments, 2);
    var r = [], a = !0;
    t = tp(...t), Se(this, rt).forEach((i) => {
      i[0] === t[0] ? a && (a = !r.push(t)) : r.push(i);
    }), a && r.push(t), gt(this, rt, r);
  }
  *entries() {
    yield* Se(this, rt);
  }
  *keys() {
    for (var [t] of this)
      yield t;
  }
  *values() {
    for (var [, t] of this)
      yield t;
  }
}, rt = new WeakMap(), Ed);
function m6(e, t = ti) {
  var r = `${ep()}${ep()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), a = [], i = `--${r}\r
Content-Disposition: form-data; name="`;
  return e.forEach((n, o) => typeof n == "string" ? a.push(i + cn(o) + `"\r
\r
${n.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), `\r
`)}\r
`) : a.push(i + cn(o) + `"; filename="${cn(n.name, 1)}"\r
Content-Type: ${n.type || "application/octet-stream"}\r
\r
`, n, `\r
`)), a.push(`--${r}--`), new t(a, { type: "multipart/form-data; boundary=" + r });
}
class fi extends Error {
  constructor(t, r) {
    super(t), Error.captureStackTrace(this, this.constructor), this.type = r;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
}
let wt = class extends fi {
  /**
   * @param  {string} message -      Error message for human
   * @param  {string} [type] -        Error type for machine
   * @param  {SystemError} [systemError] - For Node.js system error
   */
  constructor(t, r, a) {
    super(t, r), a && (this.code = this.errno = a.code, this.erroredSysCall = a.syscall);
  }
};
const ri = Symbol.toStringTag, Dd = (e) => typeof e == "object" && typeof e.append == "function" && typeof e.delete == "function" && typeof e.get == "function" && typeof e.getAll == "function" && typeof e.has == "function" && typeof e.set == "function" && typeof e.sort == "function" && e[ri] === "URLSearchParams", ai = (e) => e && typeof e == "object" && typeof e.arrayBuffer == "function" && typeof e.type == "string" && typeof e.stream == "function" && typeof e.constructor == "function" && /^(Blob|File)$/.test(e[ri]), f6 = (e) => typeof e == "object" && (e[ri] === "AbortSignal" || e[ri] === "EventTarget"), h6 = (e, t) => {
  const r = new URL(t).hostname, a = new URL(e).hostname;
  return r === a || r.endsWith(`.${a}`);
}, g6 = (e, t) => {
  const r = new URL(t).protocol, a = new URL(e).protocol;
  return r === a;
}, v6 = Q0(bt.pipeline), Ye = Symbol("Body internals");
let Ua = class {
  constructor(t, {
    size: r = 0
  } = {}) {
    let a = null;
    t === null ? t = null : Dd(t) ? t = Ie.from(t.toString()) : ai(t) || Ie.isBuffer(t) || (ei.isAnyArrayBuffer(t) ? t = Ie.from(t) : ArrayBuffer.isView(t) ? t = Ie.from(t.buffer, t.byteOffset, t.byteLength) : t instanceof bt || (t instanceof Kn ? (t = m6(t), a = t.type.split("=")[1]) : t = Ie.from(String(t))));
    let i = t;
    Ie.isBuffer(t) ? i = bt.Readable.from(t) : ai(t) && (i = bt.Readable.from(t.stream())), this[Ye] = {
      body: t,
      stream: i,
      boundary: a,
      disturbed: !1,
      error: null
    }, this.size = r, t instanceof bt && t.on("error", (n) => {
      const o = n instanceof fi ? n : new wt(`Invalid response body while trying to fetch ${this.url}: ${n.message}`, "system", n);
      this[Ye].error = o;
    });
  }
  get body() {
    return this[Ye].stream;
  }
  get bodyUsed() {
    return this[Ye].disturbed;
  }
  /**
   * Decode response as ArrayBuffer
   *
   * @return  Promise
   */
  async arrayBuffer() {
    const { buffer: t, byteOffset: r, byteLength: a } = await mn(this);
    return t.slice(r, r + a);
  }
  async formData() {
    const t = this.headers.get("content-type");
    if (t.startsWith("application/x-www-form-urlencoded")) {
      const a = new Kn(), i = new URLSearchParams(await this.text());
      for (const [n, o] of i)
        a.append(n, o);
      return a;
    }
    const { toFormData: r } = await import("./multipart-parser-205610fd.js");
    return r(this.body, t);
  }
  /**
   * Return raw response as Blob
   *
   * @return Promise
   */
  async blob() {
    const t = this.headers && this.headers.get("content-type") || this[Ye].body && this[Ye].body.type || "", r = await this.arrayBuffer();
    return new ti([r], {
      type: t
    });
  }
  /**
   * Decode response as json
   *
   * @return  Promise
   */
  async json() {
    const t = await this.text();
    return JSON.parse(t);
  }
  /**
   * Decode response as text
   *
   * @return  Promise
   */
  async text() {
    const t = await mn(this);
    return new TextDecoder().decode(t);
  }
  /**
   * Decode response as buffer (non-spec api)
   *
   * @return  Promise
   */
  buffer() {
    return mn(this);
  }
};
Ua.prototype.buffer = ci(Ua.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
Object.defineProperties(Ua.prototype, {
  body: { enumerable: !0 },
  bodyUsed: { enumerable: !0 },
  arrayBuffer: { enumerable: !0 },
  blob: { enumerable: !0 },
  json: { enumerable: !0 },
  text: { enumerable: !0 },
  data: { get: ci(
    () => {
    },
    "data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
    "https://github.com/node-fetch/node-fetch/issues/1000 (response)"
  ) }
});
async function mn(e) {
  if (e[Ye].disturbed)
    throw new TypeError(`body used already for: ${e.url}`);
  if (e[Ye].disturbed = !0, e[Ye].error)
    throw e[Ye].error;
  const { body: t } = e;
  if (t === null)
    return Ie.alloc(0);
  if (!(t instanceof bt))
    return Ie.alloc(0);
  const r = [];
  let a = 0;
  try {
    for await (const i of t) {
      if (e.size > 0 && a + i.length > e.size) {
        const n = new wt(`content size at ${e.url} over limit: ${e.size}`, "max-size");
        throw t.destroy(n), n;
      }
      a += i.length, r.push(i);
    }
  } catch (i) {
    throw i instanceof fi ? i : new wt(`Invalid response body while trying to fetch ${e.url}: ${i.message}`, "system", i);
  }
  if (t.readableEnded === !0 || t._readableState.ended === !0)
    try {
      return r.every((i) => typeof i == "string") ? Ie.from(r.join("")) : Ie.concat(r, a);
    } catch (i) {
      throw new wt(`Could not create Buffer from response body for ${e.url}: ${i.message}`, "system", i);
    }
  else
    throw new wt(`Premature close of server response while trying to fetch ${e.url}`);
}
const wo = (e, t) => {
  let r, a, { body: i } = e[Ye];
  if (e.bodyUsed)
    throw new Error("cannot clone body after it is used");
  return i instanceof bt && typeof i.getBoundary != "function" && (r = new X1({ highWaterMark: t }), a = new X1({ highWaterMark: t }), i.pipe(r), i.pipe(a), e[Ye].stream = r, i = a), i;
}, w6 = ci(
  (e) => e.getBoundary(),
  "form-data doesn't follow the spec and requires special treatment. Use alternative package",
  "https://github.com/node-fetch/node-fetch/issues/1167"
), Rd = (e, t) => e === null ? null : typeof e == "string" ? "text/plain;charset=UTF-8" : Dd(e) ? "application/x-www-form-urlencoded;charset=UTF-8" : ai(e) ? e.type || null : Ie.isBuffer(e) || ei.isAnyArrayBuffer(e) || ArrayBuffer.isView(e) ? null : e instanceof Kn ? `multipart/form-data; boundary=${t[Ye].boundary}` : e && typeof e.getBoundary == "function" ? `multipart/form-data;boundary=${w6(e)}` : e instanceof bt ? null : "text/plain;charset=UTF-8", b6 = (e) => {
  const { body: t } = e[Ye];
  return t === null ? 0 : ai(t) ? t.size : Ie.isBuffer(t) ? t.length : t && typeof t.getLengthSync == "function" && t.hasKnownLength && t.hasKnownLength() ? t.getLengthSync() : null;
}, _6 = async (e, { body: t }) => {
  t === null ? e.end() : await v6(t, e);
}, Y1 = typeof $a.validateHeaderName == "function" ? $a.validateHeaderName : (e) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)) {
    const t = new TypeError(`Header name must be a valid HTTP token [${e}]`);
    throw Object.defineProperty(t, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), t;
  }
}, Yn = typeof $a.validateHeaderValue == "function" ? $a.validateHeaderValue : (e, t) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)) {
    const r = new TypeError(`Invalid character in header content ["${e}"]`);
    throw Object.defineProperty(r, "code", { value: "ERR_INVALID_CHAR" }), r;
  }
};
let gr = class Pd extends URLSearchParams {
  /**
   * Headers class
   *
   * @constructor
   * @param {HeadersInit} [init] - Response headers
   */
  constructor(t) {
    let r = [];
    if (t instanceof Pd) {
      const a = t.raw();
      for (const [i, n] of Object.entries(a))
        r.push(...n.map((o) => [i, o]));
    } else if (t != null)
      if (typeof t == "object" && !ei.isBoxedPrimitive(t)) {
        const a = t[Symbol.iterator];
        if (a == null)
          r.push(...Object.entries(t));
        else {
          if (typeof a != "function")
            throw new TypeError("Header pairs must be iterable");
          r = [...t].map((i) => {
            if (typeof i != "object" || ei.isBoxedPrimitive(i))
              throw new TypeError("Each header pair must be an iterable object");
            return [...i];
          }).map((i) => {
            if (i.length !== 2)
              throw new TypeError("Each header pair must be a name/value tuple");
            return [...i];
          });
        }
      } else
        throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    return r = r.length > 0 ? r.map(([a, i]) => (Y1(a), Yn(a, String(i)), [String(a).toLowerCase(), String(i)])) : void 0, super(r), new Proxy(this, {
      get(a, i, n) {
        switch (i) {
          case "append":
          case "set":
            return (o, p) => (Y1(o), Yn(o, String(p)), URLSearchParams.prototype[i].call(
              a,
              String(o).toLowerCase(),
              String(p)
            ));
          case "delete":
          case "has":
          case "getAll":
            return (o) => (Y1(o), URLSearchParams.prototype[i].call(
              a,
              String(o).toLowerCase()
            ));
          case "keys":
            return () => (a.sort(), new Set(URLSearchParams.prototype.keys.call(a)).keys());
          default:
            return Reflect.get(a, i, n);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(t) {
    const r = this.getAll(t);
    if (r.length === 0)
      return null;
    let a = r.join(", ");
    return /^content-encoding$/i.test(t) && (a = a.toLowerCase()), a;
  }
  forEach(t, r = void 0) {
    for (const a of this.keys())
      Reflect.apply(t, r, [this.get(a), a, this]);
  }
  *values() {
    for (const t of this.keys())
      yield this.get(t);
  }
  /**
   * @type {() => IterableIterator<[string, string]>}
   */
  *entries() {
    for (const t of this.keys())
      yield [t, this.get(t)];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Node-fetch non-spec method
   * returning all headers and their values as array
   * @returns {Record<string, string[]>}
   */
  raw() {
    return [...this.keys()].reduce((t, r) => (t[r] = this.getAll(r), t), {});
  }
  /**
   * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((t, r) => {
      const a = this.getAll(r);
      return r === "host" ? t[r] = a[0] : t[r] = a.length > 1 ? a : a[0], t;
    }, {});
  }
};
Object.defineProperties(
  gr.prototype,
  ["get", "entries", "forEach", "values"].reduce((e, t) => (e[t] = { enumerable: !0 }, e), {})
);
function y6(e = []) {
  return new gr(
    e.reduce((t, r, a, i) => (a % 2 === 0 && t.push(i.slice(a, a + 2)), t), []).filter(([t, r]) => {
      try {
        return Y1(t), Yn(t, String(r)), !0;
      } catch {
        return !1;
      }
    })
  );
}
const E6 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Od = (e) => E6.has(e), pt = Symbol("Response internals");
let Ht = class Na extends Ua {
  constructor(t = null, r = {}) {
    super(t, r);
    const a = r.status != null ? r.status : 200, i = new gr(r.headers);
    if (t !== null && !i.has("Content-Type")) {
      const n = Rd(t, this);
      n && i.append("Content-Type", n);
    }
    this[pt] = {
      type: "default",
      url: r.url,
      status: a,
      statusText: r.statusText || "",
      headers: i,
      counter: r.counter,
      highWaterMark: r.highWaterMark
    };
  }
  get type() {
    return this[pt].type;
  }
  get url() {
    return this[pt].url || "";
  }
  get status() {
    return this[pt].status;
  }
  /**
   * Convenience property representing if the request ended normally
   */
  get ok() {
    return this[pt].status >= 200 && this[pt].status < 300;
  }
  get redirected() {
    return this[pt].counter > 0;
  }
  get statusText() {
    return this[pt].statusText;
  }
  get headers() {
    return this[pt].headers;
  }
  get highWaterMark() {
    return this[pt].highWaterMark;
  }
  /**
   * Clone this response
   *
   * @return  Response
   */
  clone() {
    return new Na(wo(this, this.highWaterMark), {
      type: this.type,
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size,
      highWaterMark: this.highWaterMark
    });
  }
  /**
   * @param {string} url    The URL that the new response is to originate from.
   * @param {number} status An optional status code for the response (e.g., 302.)
   * @returns {Response}    A Response object.
   */
  static redirect(t, r = 302) {
    if (!Od(r))
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    return new Na(null, {
      headers: {
        location: new URL(t).toString()
      },
      status: r
    });
  }
  static error() {
    const t = new Na(null, { status: 0, statusText: "" });
    return t[pt].type = "error", t;
  }
  static json(t = void 0, r = {}) {
    const a = JSON.stringify(t);
    if (a === void 0)
      throw new TypeError("data is not JSON serializable");
    const i = new gr(r && r.headers);
    return i.has("content-type") || i.set("content-type", "application/json"), new Na(a, {
      ...r,
      headers: i
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Ht.prototype, {
  type: { enumerable: !0 },
  url: { enumerable: !0 },
  status: { enumerable: !0 },
  ok: { enumerable: !0 },
  redirected: { enumerable: !0 },
  statusText: { enumerable: !0 },
  headers: { enumerable: !0 },
  clone: { enumerable: !0 }
});
const S6 = (e) => {
  if (e.search)
    return e.search;
  const t = e.href.length - 1, r = e.hash || (e.href[t] === "#" ? "#" : "");
  return e.href[t - r.length] === "?" ? "?" : "";
};
function rp(e, t = !1) {
  return e == null || (e = new URL(e), /^(about|blob|data):$/.test(e.protocol)) ? "no-referrer" : (e.username = "", e.password = "", e.hash = "", t && (e.pathname = "", e.search = ""), e);
}
const Bd = /* @__PURE__ */ new Set([
  "",
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
]), T6 = "strict-origin-when-cross-origin";
function A6(e) {
  if (!Bd.has(e))
    throw new TypeError(`Invalid referrerPolicy: ${e}`);
  return e;
}
function C6(e) {
  if (/^(http|ws)s:$/.test(e.protocol))
    return !0;
  const t = e.host.replace(/(^\[)|(]$)/g, ""), r = Z0(t);
  return r === 4 && /^127\./.test(t) || r === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t) ? !0 : e.host === "localhost" || e.host.endsWith(".localhost") ? !1 : e.protocol === "file:";
}
function $r(e) {
  return /^about:(blank|srcdoc)$/.test(e) || e.protocol === "data:" || /^(blob|filesystem):$/.test(e.protocol) ? !0 : C6(e);
}
function D6(e, { referrerURLCallback: t, referrerOriginCallback: r } = {}) {
  if (e.referrer === "no-referrer" || e.referrerPolicy === "")
    return null;
  const a = e.referrerPolicy;
  if (e.referrer === "about:client")
    return "no-referrer";
  const i = e.referrer;
  let n = rp(i), o = rp(i, !0);
  n.toString().length > 4096 && (n = o), t && (n = t(n)), r && (o = r(o));
  const p = new URL(e.url);
  switch (a) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return o;
    case "unsafe-url":
      return n;
    case "strict-origin":
      return $r(n) && !$r(p) ? "no-referrer" : o.toString();
    case "strict-origin-when-cross-origin":
      return n.origin === p.origin ? n : $r(n) && !$r(p) ? "no-referrer" : o;
    case "same-origin":
      return n.origin === p.origin ? n : "no-referrer";
    case "origin-when-cross-origin":
      return n.origin === p.origin ? n : o;
    case "no-referrer-when-downgrade":
      return $r(n) && !$r(p) ? "no-referrer" : n;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${a}`);
  }
}
function R6(e) {
  const t = (e.get("referrer-policy") || "").split(/[,\s]+/);
  let r = "";
  for (const a of t)
    a && Bd.has(a) && (r = a);
  return r;
}
const Te = Symbol("Request internals"), Ea = (e) => typeof e == "object" && typeof e[Te] == "object", P6 = ci(
  () => {
  },
  ".data is not a valid RequestInit property, use .body instead",
  "https://github.com/node-fetch/node-fetch/issues/1000 (request)"
);
let Qn = class Fd extends Ua {
  constructor(t, r = {}) {
    let a;
    if (Ea(t) ? a = new URL(t.url) : (a = new URL(t), t = {}), a.username !== "" || a.password !== "")
      throw new TypeError(`${a} is an url with embedded credentials.`);
    let i = r.method || t.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(i) && (i = i.toUpperCase()), !Ea(r) && "data" in r && P6(), (r.body != null || Ea(t) && t.body !== null) && (i === "GET" || i === "HEAD"))
      throw new TypeError("Request with GET/HEAD method cannot have body");
    const n = r.body ? r.body : Ea(t) && t.body !== null ? wo(t) : null;
    super(n, {
      size: r.size || t.size || 0
    });
    const o = new gr(r.headers || t.headers || {});
    if (n !== null && !o.has("Content-Type")) {
      const u = Rd(n, this);
      u && o.set("Content-Type", u);
    }
    let p = Ea(t) ? t.signal : null;
    if ("signal" in r && (p = r.signal), p != null && !f6(p))
      throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    let l = r.referrer == null ? t.referrer : r.referrer;
    if (l === "")
      l = "no-referrer";
    else if (l) {
      const u = new URL(l);
      l = /^about:(\/\/)?client$/.test(u) ? "client" : u;
    } else
      l = void 0;
    this[Te] = {
      method: i,
      redirect: r.redirect || t.redirect || "follow",
      headers: o,
      parsedURL: a,
      signal: p,
      referrer: l
    }, this.follow = r.follow === void 0 ? t.follow === void 0 ? 20 : t.follow : r.follow, this.compress = r.compress === void 0 ? t.compress === void 0 ? !0 : t.compress : r.compress, this.counter = r.counter || t.counter || 0, this.agent = r.agent || t.agent, this.highWaterMark = r.highWaterMark || t.highWaterMark || 16384, this.insecureHTTPParser = r.insecureHTTPParser || t.insecureHTTPParser || !1, this.referrerPolicy = r.referrerPolicy || t.referrerPolicy || "";
  }
  /** @returns {string} */
  get method() {
    return this[Te].method;
  }
  /** @returns {string} */
  get url() {
    return J0(this[Te].parsedURL);
  }
  /** @returns {Headers} */
  get headers() {
    return this[Te].headers;
  }
  get redirect() {
    return this[Te].redirect;
  }
  /** @returns {AbortSignal} */
  get signal() {
    return this[Te].signal;
  }
  // https://fetch.spec.whatwg.org/#dom-request-referrer
  get referrer() {
    if (this[Te].referrer === "no-referrer")
      return "";
    if (this[Te].referrer === "client")
      return "about:client";
    if (this[Te].referrer)
      return this[Te].referrer.toString();
  }
  get referrerPolicy() {
    return this[Te].referrerPolicy;
  }
  set referrerPolicy(t) {
    this[Te].referrerPolicy = A6(t);
  }
  /**
   * Clone this request
   *
   * @return  Request
   */
  clone() {
    return new Fd(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Qn.prototype, {
  method: { enumerable: !0 },
  url: { enumerable: !0 },
  headers: { enumerable: !0 },
  redirect: { enumerable: !0 },
  clone: { enumerable: !0 },
  signal: { enumerable: !0 },
  referrer: { enumerable: !0 },
  referrerPolicy: { enumerable: !0 }
});
const O6 = (e) => {
  const { parsedURL: t } = e[Te], r = new gr(e[Te].headers);
  r.has("Accept") || r.set("Accept", "*/*");
  let a = null;
  if (e.body === null && /^(post|put)$/i.test(e.method) && (a = "0"), e.body !== null) {
    const p = b6(e);
    typeof p == "number" && !Number.isNaN(p) && (a = String(p));
  }
  a && r.set("Content-Length", a), e.referrerPolicy === "" && (e.referrerPolicy = T6), e.referrer && e.referrer !== "no-referrer" ? e[Te].referrer = D6(e) : e[Te].referrer = "no-referrer", e[Te].referrer instanceof URL && r.set("Referer", e.referrer), r.has("User-Agent") || r.set("User-Agent", "node-fetch"), e.compress && !r.has("Accept-Encoding") && r.set("Accept-Encoding", "gzip, deflate, br");
  let { agent: i } = e;
  typeof i == "function" && (i = i(t)), !r.has("Connection") && !i && r.set("Connection", "close");
  const n = S6(t), o = {
    // Overwrite search to retain trailing ? (issue #776)
    path: t.pathname + n,
    // The following options are not expressed in the URL
    method: e.method,
    headers: r[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: e.insecureHTTPParser,
    agent: i
  };
  return {
    /** @type {URL} */
    parsedURL: t,
    options: o
  };
};
let B6 = class extends fi {
  constructor(t, r = "aborted") {
    super(t, r);
  }
};
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
if (!globalThis.DOMException)
  try {
    const { MessageChannel: e } = require("worker_threads"), t = new e().port1, r = new ArrayBuffer();
    t.postMessage(r, [r, r]);
  } catch (e) {
    e.constructor.name === "DOMException" && (globalThis.DOMException = e.constructor);
  }
const F6 = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function kd(e, t) {
  return new Promise((r, a) => {
    const i = new Qn(e, t), { parsedURL: n, options: o } = O6(i);
    if (!F6.has(n.protocol))
      throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${n.protocol.replace(/:$/, "")}" is not supported.`);
    if (n.protocol === "data:") {
      const w = i6(i.url), f = new Ht(w, { headers: { "Content-Type": w.typeFull } });
      r(f);
      return;
    }
    const p = (n.protocol === "https:" ? Y0 : $a).request, { signal: l } = i;
    let u = null;
    const c = () => {
      const w = new B6("The operation was aborted.");
      a(w), i.body && i.body instanceof bt.Readable && i.body.destroy(w), !(!u || !u.body) && u.body.emit("error", w);
    };
    if (l && l.aborted) {
      c();
      return;
    }
    const h = () => {
      c(), g();
    }, v = p(n.toString(), o);
    l && l.addEventListener("abort", h);
    const g = () => {
      v.abort(), l && l.removeEventListener("abort", h);
    };
    v.on("error", (w) => {
      a(new wt(`request to ${i.url} failed, reason: ${w.message}`, "system", w)), g();
    }), k6(v, (w) => {
      u && u.body && u.body.destroy(w);
    }), process.version < "v14" && v.on("socket", (w) => {
      let f;
      w.prependListener("end", () => {
        f = w._eventsCount;
      }), w.prependListener("close", (y) => {
        if (u && f < w._eventsCount && !y) {
          const E = new Error("Premature close");
          E.code = "ERR_STREAM_PREMATURE_CLOSE", u.body.emit("error", E);
        }
      });
    }), v.on("response", (w) => {
      v.setTimeout(0);
      const f = y6(w.rawHeaders);
      if (Od(w.statusCode)) {
        const U = f.get("Location");
        let P = null;
        try {
          P = U === null ? null : new URL(U, i.url);
        } catch {
          if (i.redirect !== "manual") {
            a(new wt(`uri requested responds with an invalid redirect URL: ${U}`, "invalid-redirect")), g();
            return;
          }
        }
        switch (i.redirect) {
          case "error":
            a(new wt(`uri requested responds with a redirect, redirect mode is set to error: ${i.url}`, "no-redirect")), g();
            return;
          case "manual":
            break;
          case "follow": {
            if (P === null)
              break;
            if (i.counter >= i.follow) {
              a(new wt(`maximum redirect reached at: ${i.url}`, "max-redirect")), g();
              return;
            }
            const O = {
              headers: new gr(i.headers),
              follow: i.follow,
              counter: i.counter + 1,
              agent: i.agent,
              compress: i.compress,
              method: i.method,
              body: wo(i),
              signal: i.signal,
              size: i.size,
              referrer: i.referrer,
              referrerPolicy: i.referrerPolicy
            };
            if (!h6(i.url, P) || !g6(i.url, P))
              for (const A of ["authorization", "www-authenticate", "cookie", "cookie2"])
                O.headers.delete(A);
            if (w.statusCode !== 303 && i.body && t.body instanceof bt.Readable) {
              a(new wt("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), g();
              return;
            }
            (w.statusCode === 303 || (w.statusCode === 301 || w.statusCode === 302) && i.method === "POST") && (O.method = "GET", O.body = void 0, O.headers.delete("content-length"));
            const C = R6(f);
            C && (O.referrerPolicy = C), r(kd(new Qn(P, O))), g();
            return;
          }
          default:
            return a(new TypeError(`Redirect option '${i.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      l && w.once("end", () => {
        l.removeEventListener("abort", h);
      });
      let y = Ir(w, new X1(), (U) => {
        U && a(U);
      });
      process.version < "v12.10" && w.on("aborted", h);
      const E = {
        url: i.url,
        status: w.statusCode,
        statusText: w.statusMessage,
        headers: f,
        size: i.size,
        counter: i.counter,
        highWaterMark: i.highWaterMark
      }, N = f.get("Content-Encoding");
      if (!i.compress || i.method === "HEAD" || N === null || w.statusCode === 204 || w.statusCode === 304) {
        u = new Ht(y, E), r(u);
        return;
      }
      const F = {
        flush: Nr.Z_SYNC_FLUSH,
        finishFlush: Nr.Z_SYNC_FLUSH
      };
      if (N === "gzip" || N === "x-gzip") {
        y = Ir(y, Nr.createGunzip(F), (U) => {
          U && a(U);
        }), u = new Ht(y, E), r(u);
        return;
      }
      if (N === "deflate" || N === "x-deflate") {
        const U = Ir(w, new X1(), (P) => {
          P && a(P);
        });
        U.once("data", (P) => {
          (P[0] & 15) === 8 ? y = Ir(y, Nr.createInflate(), (O) => {
            O && a(O);
          }) : y = Ir(y, Nr.createInflateRaw(), (O) => {
            O && a(O);
          }), u = new Ht(y, E), r(u);
        }), U.once("end", () => {
          u || (u = new Ht(y, E), r(u));
        });
        return;
      }
      if (N === "br") {
        y = Ir(y, Nr.createBrotliDecompress(), (U) => {
          U && a(U);
        }), u = new Ht(y, E), r(u);
        return;
      }
      u = new Ht(y, E), r(u);
    }), _6(v, i).catch(a);
  });
}
function k6(e, t) {
  const r = Ie.from(`0\r
\r
`);
  let a = !1, i = !1, n;
  e.on("response", (o) => {
    const { headers: p } = o;
    a = p["transfer-encoding"] === "chunked" && !p["content-length"];
  }), e.on("socket", (o) => {
    const p = () => {
      if (a && !i) {
        const u = new Error("Premature close");
        u.code = "ERR_STREAM_PREMATURE_CLOSE", t(u);
      }
    }, l = (u) => {
      i = Ie.compare(u.slice(-5), r) === 0, !i && n && (i = Ie.compare(n.slice(-3), r.slice(0, 3)) === 0 && Ie.compare(u.slice(-2), r.slice(3)) === 0), n = u;
    };
    o.prependListener("close", p), o.on("data", l), e.on("close", () => {
      o.removeListener("close", p), o.removeListener("data", l);
    });
  });
}
global.crypto = {
  /** 
   * A "phonyfill" for `getRandomValues`.
   * 
   * It's is like a polyfill but **does not conform to the WebCrypto specification!**.
   * Unlike a the [polyfill](./node-polyfill.js), this implementation is faster as it avoids copying data. 
   * 
   * Specifically, the provided typed array is not filled with random values, nor is it returned form the function.
   * Instead a new typed array of the same type and size is returned, which contains the random data.
   * 
   * @param {TypedArray} typedArray A typed array *used only* for specifying the type and size of the return value.
   * @returns {TypedArray} A typed array of the same type and size as `typedArray` filled with random data.
   */
  getRandomValues(e) {
    const { BYTES_PER_ELEMENT: t, length: r } = e, a = t * r, { buffer: i } = X0(a);
    return Reflect.construct(e.constructor, [i]);
  }
};
var xa = {}, hi = {}, fn = {}, zr = {}, er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.toCommandProperties = er.toCommandValue = void 0;
function N6(e) {
  return e == null ? "" : typeof e == "string" || e instanceof String ? e : JSON.stringify(e);
}
er.toCommandValue = N6;
function I6(e) {
  return Object.keys(e).length ? {
    title: e.title,
    file: e.file,
    line: e.startLine,
    endLine: e.endLine,
    col: e.startColumn,
    endColumn: e.endColumn
  } : {};
}
er.toCommandProperties = I6;
var $6 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), U6 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), x6 = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && $6(t, e, r);
  return U6(t, e), t;
};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.issue = zr.issueCommand = void 0;
const V6 = x6(Er), Nd = er;
function Id(e, t, r) {
  const a = new L6(e, t, r);
  process.stdout.write(a.toString() + V6.EOL);
}
zr.issueCommand = Id;
function G6(e, t = "") {
  Id(e, {}, t);
}
zr.issue = G6;
const ap = "::";
class L6 {
  constructor(t, r, a) {
    t || (t = "missing.command"), this.command = t, this.properties = r, this.message = a;
  }
  toString() {
    let t = ap + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      t += " ";
      let r = !0;
      for (const a in this.properties)
        if (this.properties.hasOwnProperty(a)) {
          const i = this.properties[a];
          i && (r ? r = !1 : t += ",", t += `${a}=${M6(i)}`);
        }
    }
    return t += `${ap}${j6(this.message)}`, t;
  }
}
function j6(e) {
  return Nd.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function M6(e) {
  return Nd.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var Hr = {}, I1, q6 = new Uint8Array(16);
function $d() {
  if (!I1 && (I1 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !I1))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return I1(q6);
}
const W6 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function gi(e) {
  return typeof e == "string" && W6.test(e);
}
var Re = [];
for (var hn = 0; hn < 256; ++hn)
  Re.push((hn + 256).toString(16).substr(1));
function vi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = (Re[e[t + 0]] + Re[e[t + 1]] + Re[e[t + 2]] + Re[e[t + 3]] + "-" + Re[e[t + 4]] + Re[e[t + 5]] + "-" + Re[e[t + 6]] + Re[e[t + 7]] + "-" + Re[e[t + 8]] + Re[e[t + 9]] + "-" + Re[e[t + 10]] + Re[e[t + 11]] + Re[e[t + 12]] + Re[e[t + 13]] + Re[e[t + 14]] + Re[e[t + 15]]).toLowerCase();
  if (!gi(r))
    throw TypeError("Stringified UUID is invalid");
  return r;
}
var ip, gn, vn = 0, wn = 0;
function z6(e, t, r) {
  var a = t && r || 0, i = t || new Array(16);
  e = e || {};
  var n = e.node || ip, o = e.clockseq !== void 0 ? e.clockseq : gn;
  if (n == null || o == null) {
    var p = e.random || (e.rng || $d)();
    n == null && (n = ip = [p[0] | 1, p[1], p[2], p[3], p[4], p[5]]), o == null && (o = gn = (p[6] << 8 | p[7]) & 16383);
  }
  var l = e.msecs !== void 0 ? e.msecs : Date.now(), u = e.nsecs !== void 0 ? e.nsecs : wn + 1, c = l - vn + (u - wn) / 1e4;
  if (c < 0 && e.clockseq === void 0 && (o = o + 1 & 16383), (c < 0 || l > vn) && e.nsecs === void 0 && (u = 0), u >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  vn = l, wn = u, gn = o, l += 122192928e5;
  var h = ((l & 268435455) * 1e4 + u) % 4294967296;
  i[a++] = h >>> 24 & 255, i[a++] = h >>> 16 & 255, i[a++] = h >>> 8 & 255, i[a++] = h & 255;
  var v = l / 4294967296 * 1e4 & 268435455;
  i[a++] = v >>> 8 & 255, i[a++] = v & 255, i[a++] = v >>> 24 & 15 | 16, i[a++] = v >>> 16 & 255, i[a++] = o >>> 8 | 128, i[a++] = o & 255;
  for (var g = 0; g < 6; ++g)
    i[a + g] = n[g];
  return t || vi(i);
}
function Ud(e) {
  if (!gi(e))
    throw TypeError("Invalid UUID");
  var t, r = new Uint8Array(16);
  return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = t & 255, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = t & 255, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = t & 255, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = t & 255, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = t & 255, r;
}
function H6(e) {
  e = unescape(encodeURIComponent(e));
  for (var t = [], r = 0; r < e.length; ++r)
    t.push(e.charCodeAt(r));
  return t;
}
var K6 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Y6 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function xd(e, t, r) {
  function a(i, n, o, p) {
    if (typeof i == "string" && (i = H6(i)), typeof n == "string" && (n = Ud(n)), n.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var l = new Uint8Array(16 + i.length);
    if (l.set(n), l.set(i, n.length), l = r(l), l[6] = l[6] & 15 | t, l[8] = l[8] & 63 | 128, o) {
      p = p || 0;
      for (var u = 0; u < 16; ++u)
        o[p + u] = l[u];
      return o;
    }
    return vi(l);
  }
  try {
    a.name = e;
  } catch {
  }
  return a.DNS = K6, a.URL = Y6, a;
}
function Q6(e) {
  if (typeof e == "string") {
    var t = unescape(encodeURIComponent(e));
    e = new Uint8Array(t.length);
    for (var r = 0; r < t.length; ++r)
      e[r] = t.charCodeAt(r);
  }
  return J6(Z6(X6(e), e.length * 8));
}
function J6(e) {
  for (var t = [], r = e.length * 32, a = "0123456789abcdef", i = 0; i < r; i += 8) {
    var n = e[i >> 5] >>> i % 32 & 255, o = parseInt(a.charAt(n >>> 4 & 15) + a.charAt(n & 15), 16);
    t.push(o);
  }
  return t;
}
function Vd(e) {
  return (e + 64 >>> 9 << 4) + 14 + 1;
}
function Z6(e, t) {
  e[t >> 5] |= 128 << t % 32, e[Vd(t) - 1] = t;
  for (var r = 1732584193, a = -271733879, i = -1732584194, n = 271733878, o = 0; o < e.length; o += 16) {
    var p = r, l = a, u = i, c = n;
    r = Be(r, a, i, n, e[o], 7, -680876936), n = Be(n, r, a, i, e[o + 1], 12, -389564586), i = Be(i, n, r, a, e[o + 2], 17, 606105819), a = Be(a, i, n, r, e[o + 3], 22, -1044525330), r = Be(r, a, i, n, e[o + 4], 7, -176418897), n = Be(n, r, a, i, e[o + 5], 12, 1200080426), i = Be(i, n, r, a, e[o + 6], 17, -1473231341), a = Be(a, i, n, r, e[o + 7], 22, -45705983), r = Be(r, a, i, n, e[o + 8], 7, 1770035416), n = Be(n, r, a, i, e[o + 9], 12, -1958414417), i = Be(i, n, r, a, e[o + 10], 17, -42063), a = Be(a, i, n, r, e[o + 11], 22, -1990404162), r = Be(r, a, i, n, e[o + 12], 7, 1804603682), n = Be(n, r, a, i, e[o + 13], 12, -40341101), i = Be(i, n, r, a, e[o + 14], 17, -1502002290), a = Be(a, i, n, r, e[o + 15], 22, 1236535329), r = Fe(r, a, i, n, e[o + 1], 5, -165796510), n = Fe(n, r, a, i, e[o + 6], 9, -1069501632), i = Fe(i, n, r, a, e[o + 11], 14, 643717713), a = Fe(a, i, n, r, e[o], 20, -373897302), r = Fe(r, a, i, n, e[o + 5], 5, -701558691), n = Fe(n, r, a, i, e[o + 10], 9, 38016083), i = Fe(i, n, r, a, e[o + 15], 14, -660478335), a = Fe(a, i, n, r, e[o + 4], 20, -405537848), r = Fe(r, a, i, n, e[o + 9], 5, 568446438), n = Fe(n, r, a, i, e[o + 14], 9, -1019803690), i = Fe(i, n, r, a, e[o + 3], 14, -187363961), a = Fe(a, i, n, r, e[o + 8], 20, 1163531501), r = Fe(r, a, i, n, e[o + 13], 5, -1444681467), n = Fe(n, r, a, i, e[o + 2], 9, -51403784), i = Fe(i, n, r, a, e[o + 7], 14, 1735328473), a = Fe(a, i, n, r, e[o + 12], 20, -1926607734), r = ke(r, a, i, n, e[o + 5], 4, -378558), n = ke(n, r, a, i, e[o + 8], 11, -2022574463), i = ke(i, n, r, a, e[o + 11], 16, 1839030562), a = ke(a, i, n, r, e[o + 14], 23, -35309556), r = ke(r, a, i, n, e[o + 1], 4, -1530992060), n = ke(n, r, a, i, e[o + 4], 11, 1272893353), i = ke(i, n, r, a, e[o + 7], 16, -155497632), a = ke(a, i, n, r, e[o + 10], 23, -1094730640), r = ke(r, a, i, n, e[o + 13], 4, 681279174), n = ke(n, r, a, i, e[o], 11, -358537222), i = ke(i, n, r, a, e[o + 3], 16, -722521979), a = ke(a, i, n, r, e[o + 6], 23, 76029189), r = ke(r, a, i, n, e[o + 9], 4, -640364487), n = ke(n, r, a, i, e[o + 12], 11, -421815835), i = ke(i, n, r, a, e[o + 15], 16, 530742520), a = ke(a, i, n, r, e[o + 2], 23, -995338651), r = Ne(r, a, i, n, e[o], 6, -198630844), n = Ne(n, r, a, i, e[o + 7], 10, 1126891415), i = Ne(i, n, r, a, e[o + 14], 15, -1416354905), a = Ne(a, i, n, r, e[o + 5], 21, -57434055), r = Ne(r, a, i, n, e[o + 12], 6, 1700485571), n = Ne(n, r, a, i, e[o + 3], 10, -1894986606), i = Ne(i, n, r, a, e[o + 10], 15, -1051523), a = Ne(a, i, n, r, e[o + 1], 21, -2054922799), r = Ne(r, a, i, n, e[o + 8], 6, 1873313359), n = Ne(n, r, a, i, e[o + 15], 10, -30611744), i = Ne(i, n, r, a, e[o + 6], 15, -1560198380), a = Ne(a, i, n, r, e[o + 13], 21, 1309151649), r = Ne(r, a, i, n, e[o + 4], 6, -145523070), n = Ne(n, r, a, i, e[o + 11], 10, -1120210379), i = Ne(i, n, r, a, e[o + 2], 15, 718787259), a = Ne(a, i, n, r, e[o + 9], 21, -343485551), r = Zt(r, p), a = Zt(a, l), i = Zt(i, u), n = Zt(n, c);
  }
  return [r, a, i, n];
}
function X6(e) {
  if (e.length === 0)
    return [];
  for (var t = e.length * 8, r = new Uint32Array(Vd(t)), a = 0; a < t; a += 8)
    r[a >> 5] |= (e[a / 8] & 255) << a % 32;
  return r;
}
function Zt(e, t) {
  var r = (e & 65535) + (t & 65535), a = (e >> 16) + (t >> 16) + (r >> 16);
  return a << 16 | r & 65535;
}
function e4(e, t) {
  return e << t | e >>> 32 - t;
}
function wi(e, t, r, a, i, n) {
  return Zt(e4(Zt(Zt(t, e), Zt(a, n)), i), r);
}
function Be(e, t, r, a, i, n, o) {
  return wi(t & r | ~t & a, e, t, i, n, o);
}
function Fe(e, t, r, a, i, n, o) {
  return wi(t & a | r & ~a, e, t, i, n, o);
}
function ke(e, t, r, a, i, n, o) {
  return wi(t ^ r ^ a, e, t, i, n, o);
}
function Ne(e, t, r, a, i, n, o) {
  return wi(r ^ (t | ~a), e, t, i, n, o);
}
var t4 = xd("v3", 48, Q6);
const r4 = t4;
function a4(e, t, r) {
  e = e || {};
  var a = e.random || (e.rng || $d)();
  if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, t) {
    r = r || 0;
    for (var i = 0; i < 16; ++i)
      t[r + i] = a[i];
    return t;
  }
  return vi(a);
}
function i4(e, t, r, a) {
  switch (e) {
    case 0:
      return t & r ^ ~t & a;
    case 1:
      return t ^ r ^ a;
    case 2:
      return t & r ^ t & a ^ r & a;
    case 3:
      return t ^ r ^ a;
  }
}
function bn(e, t) {
  return e << t | e >>> 32 - t;
}
function n4(e) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782], r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof e == "string") {
    var a = unescape(encodeURIComponent(e));
    e = [];
    for (var i = 0; i < a.length; ++i)
      e.push(a.charCodeAt(i));
  } else
    Array.isArray(e) || (e = Array.prototype.slice.call(e));
  e.push(128);
  for (var n = e.length / 4 + 2, o = Math.ceil(n / 16), p = new Array(o), l = 0; l < o; ++l) {
    for (var u = new Uint32Array(16), c = 0; c < 16; ++c)
      u[c] = e[l * 64 + c * 4] << 24 | e[l * 64 + c * 4 + 1] << 16 | e[l * 64 + c * 4 + 2] << 8 | e[l * 64 + c * 4 + 3];
    p[l] = u;
  }
  p[o - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32), p[o - 1][14] = Math.floor(p[o - 1][14]), p[o - 1][15] = (e.length - 1) * 8 & 4294967295;
  for (var h = 0; h < o; ++h) {
    for (var v = new Uint32Array(80), g = 0; g < 16; ++g)
      v[g] = p[h][g];
    for (var w = 16; w < 80; ++w)
      v[w] = bn(v[w - 3] ^ v[w - 8] ^ v[w - 14] ^ v[w - 16], 1);
    for (var f = r[0], y = r[1], E = r[2], N = r[3], F = r[4], U = 0; U < 80; ++U) {
      var P = Math.floor(U / 20), O = bn(f, 5) + i4(P, y, E, N) + F + t[P] + v[U] >>> 0;
      F = N, N = E, E = bn(y, 30) >>> 0, y = f, f = O;
    }
    r[0] = r[0] + f >>> 0, r[1] = r[1] + y >>> 0, r[2] = r[2] + E >>> 0, r[3] = r[3] + N >>> 0, r[4] = r[4] + F >>> 0;
  }
  return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, r[0] & 255, r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, r[1] & 255, r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, r[2] & 255, r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, r[3] & 255, r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, r[4] & 255];
}
var o4 = xd("v5", 80, n4);
const s4 = o4, p4 = "00000000-0000-0000-0000-000000000000";
function d4(e) {
  if (!gi(e))
    throw TypeError("Invalid UUID");
  return parseInt(e.substr(14, 1), 16);
}
const l4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: p4,
  parse: Ud,
  stringify: vi,
  v1: z6,
  v3: r4,
  v4: a4,
  v5: s4,
  validate: gi,
  version: d4
}, Symbol.toStringTag, { value: "Module" })), u4 = /* @__PURE__ */ Ad(l4);
var c4 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), m4 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Gd = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && c4(t, e, r);
  return m4(t, e), t;
};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.prepareKeyValueMessage = Hr.issueFileCommand = void 0;
const np = Gd(Ve), Jn = Gd(Er), f4 = u4, Ld = er;
function h4(e, t) {
  const r = process.env[`GITHUB_${e}`];
  if (!r)
    throw new Error(`Unable to find environment variable for file command ${e}`);
  if (!np.existsSync(r))
    throw new Error(`Missing file at path: ${r}`);
  np.appendFileSync(r, `${Ld.toCommandValue(t)}${Jn.EOL}`, {
    encoding: "utf8"
  });
}
Hr.issueFileCommand = h4;
function g4(e, t) {
  const r = `ghadelimiter_${f4.v4()}`, a = Ld.toCommandValue(t);
  if (e.includes(r))
    throw new Error(`Unexpected input: name should not contain the delimiter "${r}"`);
  if (a.includes(r))
    throw new Error(`Unexpected input: value should not contain the delimiter "${r}"`);
  return `${e}<<${r}${Jn.EOL}${a}${Jn.EOL}${r}`;
}
Hr.prepareKeyValueMessage = g4;
var Sa = {}, bi = {}, Kr = {};
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.checkBypass = Kr.getProxyUrl = void 0;
function v4(e) {
  const t = e.protocol === "https:";
  if (jd(e))
    return;
  const r = (() => t ? process.env.https_proxy || process.env.HTTPS_PROXY : process.env.http_proxy || process.env.HTTP_PROXY)();
  if (r)
    return new URL(r);
}
Kr.getProxyUrl = v4;
function jd(e) {
  if (!e.hostname)
    return !1;
  const t = e.hostname;
  if (w4(t))
    return !0;
  const r = process.env.no_proxy || process.env.NO_PROXY || "";
  if (!r)
    return !1;
  let a;
  e.port ? a = Number(e.port) : e.protocol === "http:" ? a = 80 : e.protocol === "https:" && (a = 443);
  const i = [e.hostname.toUpperCase()];
  typeof a == "number" && i.push(`${i[0]}:${a}`);
  for (const n of r.split(",").map((o) => o.trim().toUpperCase()).filter((o) => o))
    if (n === "*" || i.some((o) => o === n || o.endsWith(`.${n}`) || n.startsWith(".") && o.endsWith(`${n}`)))
      return !0;
  return !1;
}
Kr.checkBypass = jd;
function w4(e) {
  const t = e.toLowerCase();
  return t === "localhost" || t.startsWith("127.") || t.startsWith("[::1]") || t.startsWith("[0:0:0:0:0:0:0:1]");
}
var ta = {}, b4 = e6, bo = mi, Md = ho, _4 = go, y4 = Ya;
ta.httpOverHttp = E4;
ta.httpsOverHttp = S4;
ta.httpOverHttps = T4;
ta.httpsOverHttps = A4;
function E4(e) {
  var t = new Nt(e);
  return t.request = bo.request, t;
}
function S4(e) {
  var t = new Nt(e);
  return t.request = bo.request, t.createSocket = qd, t.defaultPort = 443, t;
}
function T4(e) {
  var t = new Nt(e);
  return t.request = Md.request, t;
}
function A4(e) {
  var t = new Nt(e);
  return t.request = Md.request, t.createSocket = qd, t.defaultPort = 443, t;
}
function Nt(e) {
  var t = this;
  t.options = e || {}, t.proxyOptions = t.options.proxy || {}, t.maxSockets = t.options.maxSockets || bo.Agent.defaultMaxSockets, t.requests = [], t.sockets = [], t.on("free", function(a, i, n, o) {
    for (var p = Wd(i, n, o), l = 0, u = t.requests.length; l < u; ++l) {
      var c = t.requests[l];
      if (c.host === p.host && c.port === p.port) {
        t.requests.splice(l, 1), c.request.onSocket(a);
        return;
      }
    }
    a.destroy(), t.removeSocket(a);
  });
}
y4.inherits(Nt, _4.EventEmitter);
Nt.prototype.addRequest = function(t, r, a, i) {
  var n = this, o = _o({ request: t }, n.options, Wd(r, a, i));
  if (n.sockets.length >= this.maxSockets) {
    n.requests.push(o);
    return;
  }
  n.createSocket(o, function(p) {
    p.on("free", l), p.on("close", u), p.on("agentRemove", u), t.onSocket(p);
    function l() {
      n.emit("free", p, o);
    }
    function u(c) {
      n.removeSocket(p), p.removeListener("free", l), p.removeListener("close", u), p.removeListener("agentRemove", u);
    }
  });
};
Nt.prototype.createSocket = function(t, r) {
  var a = this, i = {};
  a.sockets.push(i);
  var n = _o({}, a.proxyOptions, {
    method: "CONNECT",
    path: t.host + ":" + t.port,
    agent: !1,
    headers: {
      host: t.host + ":" + t.port
    }
  });
  t.localAddress && (n.localAddress = t.localAddress), n.proxyAuth && (n.headers = n.headers || {}, n.headers["Proxy-Authorization"] = "Basic " + new Buffer(n.proxyAuth).toString("base64")), Kt("making CONNECT request");
  var o = a.request(n);
  o.useChunkedEncodingByDefault = !1, o.once("response", p), o.once("upgrade", l), o.once("connect", u), o.once("error", c), o.end();
  function p(h) {
    h.upgrade = !0;
  }
  function l(h, v, g) {
    process.nextTick(function() {
      u(h, v, g);
    });
  }
  function u(h, v, g) {
    if (o.removeAllListeners(), v.removeAllListeners(), h.statusCode !== 200) {
      Kt(
        "tunneling socket could not be established, statusCode=%d",
        h.statusCode
      ), v.destroy();
      var w = new Error("tunneling socket could not be established, statusCode=" + h.statusCode);
      w.code = "ECONNRESET", t.request.emit("error", w), a.removeSocket(i);
      return;
    }
    if (g.length > 0) {
      Kt("got illegal response body from proxy"), v.destroy();
      var w = new Error("got illegal response body from proxy");
      w.code = "ECONNRESET", t.request.emit("error", w), a.removeSocket(i);
      return;
    }
    return Kt("tunneling connection has established"), a.sockets[a.sockets.indexOf(i)] = v, r(v);
  }
  function c(h) {
    o.removeAllListeners(), Kt(
      `tunneling socket could not be established, cause=%s
`,
      h.message,
      h.stack
    );
    var v = new Error("tunneling socket could not be established, cause=" + h.message);
    v.code = "ECONNRESET", t.request.emit("error", v), a.removeSocket(i);
  }
};
Nt.prototype.removeSocket = function(t) {
  var r = this.sockets.indexOf(t);
  if (r !== -1) {
    this.sockets.splice(r, 1);
    var a = this.requests.shift();
    a && this.createSocket(a, function(i) {
      a.request.onSocket(i);
    });
  }
};
function qd(e, t) {
  var r = this;
  Nt.prototype.createSocket.call(r, e, function(a) {
    var i = e.request.getHeader("host"), n = _o({}, r.options, {
      socket: a,
      servername: i ? i.replace(/:.*$/, "") : e.host
    }), o = b4.connect(0, n);
    r.sockets[r.sockets.indexOf(a)] = o, t(o);
  });
}
function Wd(e, t, r) {
  return typeof e == "string" ? {
    host: e,
    port: t,
    localAddress: r
  } : e;
}
function _o(e) {
  for (var t = 1, r = arguments.length; t < r; ++t) {
    var a = arguments[t];
    if (typeof a == "object")
      for (var i = Object.keys(a), n = 0, o = i.length; n < o; ++n) {
        var p = i[n];
        a[p] !== void 0 && (e[p] = a[p]);
      }
  }
  return e;
}
var Kt;
process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? Kt = function() {
  var e = Array.prototype.slice.call(arguments);
  typeof e[0] == "string" ? e[0] = "TUNNEL: " + e[0] : e.unshift("TUNNEL:"), console.error.apply(console, e);
} : Kt = function() {
};
ta.debug = Kt;
var C4 = ta;
(function(e) {
  var t = D && D.__createBinding || (Object.create ? function(C, A, T, R) {
    R === void 0 && (R = T), Object.defineProperty(C, R, { enumerable: !0, get: function() {
      return A[T];
    } });
  } : function(C, A, T, R) {
    R === void 0 && (R = T), C[R] = A[T];
  }), r = D && D.__setModuleDefault || (Object.create ? function(C, A) {
    Object.defineProperty(C, "default", { enumerable: !0, value: A });
  } : function(C, A) {
    C.default = A;
  }), a = D && D.__importStar || function(C) {
    if (C && C.__esModule)
      return C;
    var A = {};
    if (C != null)
      for (var T in C)
        T !== "default" && Object.hasOwnProperty.call(C, T) && t(A, C, T);
    return r(A, C), A;
  }, i = D && D.__awaiter || function(C, A, T, R) {
    function x(L) {
      return L instanceof T ? L : new T(function(M) {
        M(L);
      });
    }
    return new (T || (T = Promise))(function(L, M) {
      function J(ne) {
        try {
          Q(R.next(ne));
        } catch (ee) {
          M(ee);
        }
      }
      function X(ne) {
        try {
          Q(R.throw(ne));
        } catch (ee) {
          M(ee);
        }
      }
      function Q(ne) {
        ne.done ? L(ne.value) : x(ne.value).then(J, X);
      }
      Q((R = R.apply(C, A || [])).next());
    });
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.HttpClient = e.isHttps = e.HttpClientResponse = e.HttpClientError = e.getProxyUrl = e.MediaTypes = e.Headers = e.HttpCodes = void 0;
  const n = a(mi), o = a(ho), p = a(Kr), l = a(C4);
  var u;
  (function(C) {
    C[C.OK = 200] = "OK", C[C.MultipleChoices = 300] = "MultipleChoices", C[C.MovedPermanently = 301] = "MovedPermanently", C[C.ResourceMoved = 302] = "ResourceMoved", C[C.SeeOther = 303] = "SeeOther", C[C.NotModified = 304] = "NotModified", C[C.UseProxy = 305] = "UseProxy", C[C.SwitchProxy = 306] = "SwitchProxy", C[C.TemporaryRedirect = 307] = "TemporaryRedirect", C[C.PermanentRedirect = 308] = "PermanentRedirect", C[C.BadRequest = 400] = "BadRequest", C[C.Unauthorized = 401] = "Unauthorized", C[C.PaymentRequired = 402] = "PaymentRequired", C[C.Forbidden = 403] = "Forbidden", C[C.NotFound = 404] = "NotFound", C[C.MethodNotAllowed = 405] = "MethodNotAllowed", C[C.NotAcceptable = 406] = "NotAcceptable", C[C.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", C[C.RequestTimeout = 408] = "RequestTimeout", C[C.Conflict = 409] = "Conflict", C[C.Gone = 410] = "Gone", C[C.TooManyRequests = 429] = "TooManyRequests", C[C.InternalServerError = 500] = "InternalServerError", C[C.NotImplemented = 501] = "NotImplemented", C[C.BadGateway = 502] = "BadGateway", C[C.ServiceUnavailable = 503] = "ServiceUnavailable", C[C.GatewayTimeout = 504] = "GatewayTimeout";
  })(u = e.HttpCodes || (e.HttpCodes = {}));
  var c;
  (function(C) {
    C.Accept = "accept", C.ContentType = "content-type";
  })(c = e.Headers || (e.Headers = {}));
  var h;
  (function(C) {
    C.ApplicationJson = "application/json";
  })(h = e.MediaTypes || (e.MediaTypes = {}));
  function v(C) {
    const A = p.getProxyUrl(new URL(C));
    return A ? A.href : "";
  }
  e.getProxyUrl = v;
  const g = [
    u.MovedPermanently,
    u.ResourceMoved,
    u.SeeOther,
    u.TemporaryRedirect,
    u.PermanentRedirect
  ], w = [
    u.BadGateway,
    u.ServiceUnavailable,
    u.GatewayTimeout
  ], f = ["OPTIONS", "GET", "DELETE", "HEAD"], y = 10, E = 5;
  class N extends Error {
    constructor(A, T) {
      super(A), this.name = "HttpClientError", this.statusCode = T, Object.setPrototypeOf(this, N.prototype);
    }
  }
  e.HttpClientError = N;
  class F {
    constructor(A) {
      this.message = A;
    }
    readBody() {
      return i(this, void 0, void 0, function* () {
        return new Promise((A) => i(this, void 0, void 0, function* () {
          let T = Buffer.alloc(0);
          this.message.on("data", (R) => {
            T = Buffer.concat([T, R]);
          }), this.message.on("end", () => {
            A(T.toString());
          });
        }));
      });
    }
  }
  e.HttpClientResponse = F;
  function U(C) {
    return new URL(C).protocol === "https:";
  }
  e.isHttps = U;
  class P {
    constructor(A, T, R) {
      this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = A, this.handlers = T || [], this.requestOptions = R, R && (R.ignoreSslError != null && (this._ignoreSslError = R.ignoreSslError), this._socketTimeout = R.socketTimeout, R.allowRedirects != null && (this._allowRedirects = R.allowRedirects), R.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = R.allowRedirectDowngrade), R.maxRedirects != null && (this._maxRedirects = Math.max(R.maxRedirects, 0)), R.keepAlive != null && (this._keepAlive = R.keepAlive), R.allowRetries != null && (this._allowRetries = R.allowRetries), R.maxRetries != null && (this._maxRetries = R.maxRetries));
    }
    options(A, T) {
      return i(this, void 0, void 0, function* () {
        return this.request("OPTIONS", A, null, T || {});
      });
    }
    get(A, T) {
      return i(this, void 0, void 0, function* () {
        return this.request("GET", A, null, T || {});
      });
    }
    del(A, T) {
      return i(this, void 0, void 0, function* () {
        return this.request("DELETE", A, null, T || {});
      });
    }
    post(A, T, R) {
      return i(this, void 0, void 0, function* () {
        return this.request("POST", A, T, R || {});
      });
    }
    patch(A, T, R) {
      return i(this, void 0, void 0, function* () {
        return this.request("PATCH", A, T, R || {});
      });
    }
    put(A, T, R) {
      return i(this, void 0, void 0, function* () {
        return this.request("PUT", A, T, R || {});
      });
    }
    head(A, T) {
      return i(this, void 0, void 0, function* () {
        return this.request("HEAD", A, null, T || {});
      });
    }
    sendStream(A, T, R, x) {
      return i(this, void 0, void 0, function* () {
        return this.request(A, T, R, x);
      });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(A, T = {}) {
      return i(this, void 0, void 0, function* () {
        T[c.Accept] = this._getExistingOrDefaultHeader(T, c.Accept, h.ApplicationJson);
        const R = yield this.get(A, T);
        return this._processResponse(R, this.requestOptions);
      });
    }
    postJson(A, T, R = {}) {
      return i(this, void 0, void 0, function* () {
        const x = JSON.stringify(T, null, 2);
        R[c.Accept] = this._getExistingOrDefaultHeader(R, c.Accept, h.ApplicationJson), R[c.ContentType] = this._getExistingOrDefaultHeader(R, c.ContentType, h.ApplicationJson);
        const L = yield this.post(A, x, R);
        return this._processResponse(L, this.requestOptions);
      });
    }
    putJson(A, T, R = {}) {
      return i(this, void 0, void 0, function* () {
        const x = JSON.stringify(T, null, 2);
        R[c.Accept] = this._getExistingOrDefaultHeader(R, c.Accept, h.ApplicationJson), R[c.ContentType] = this._getExistingOrDefaultHeader(R, c.ContentType, h.ApplicationJson);
        const L = yield this.put(A, x, R);
        return this._processResponse(L, this.requestOptions);
      });
    }
    patchJson(A, T, R = {}) {
      return i(this, void 0, void 0, function* () {
        const x = JSON.stringify(T, null, 2);
        R[c.Accept] = this._getExistingOrDefaultHeader(R, c.Accept, h.ApplicationJson), R[c.ContentType] = this._getExistingOrDefaultHeader(R, c.ContentType, h.ApplicationJson);
        const L = yield this.patch(A, x, R);
        return this._processResponse(L, this.requestOptions);
      });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(A, T, R, x) {
      return i(this, void 0, void 0, function* () {
        if (this._disposed)
          throw new Error("Client has already been disposed.");
        const L = new URL(T);
        let M = this._prepareRequest(A, L, x);
        const J = this._allowRetries && f.includes(A) ? this._maxRetries + 1 : 1;
        let X = 0, Q;
        do {
          if (Q = yield this.requestRaw(M, R), Q && Q.message && Q.message.statusCode === u.Unauthorized) {
            let ee;
            for (const H of this.handlers)
              if (H.canHandleAuthentication(Q)) {
                ee = H;
                break;
              }
            return ee ? ee.handleAuthentication(this, M, R) : Q;
          }
          let ne = this._maxRedirects;
          for (; Q.message.statusCode && g.includes(Q.message.statusCode) && this._allowRedirects && ne > 0; ) {
            const ee = Q.message.headers.location;
            if (!ee)
              break;
            const H = new URL(ee);
            if (L.protocol === "https:" && L.protocol !== H.protocol && !this._allowRedirectDowngrade)
              throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
            if (yield Q.readBody(), H.hostname !== L.hostname)
              for (const j in x)
                j.toLowerCase() === "authorization" && delete x[j];
            M = this._prepareRequest(A, H, x), Q = yield this.requestRaw(M, R), ne--;
          }
          if (!Q.message.statusCode || !w.includes(Q.message.statusCode))
            return Q;
          X += 1, X < J && (yield Q.readBody(), yield this._performExponentialBackoff(X));
        } while (X < J);
        return Q;
      });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
      this._agent && this._agent.destroy(), this._disposed = !0;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(A, T) {
      return i(this, void 0, void 0, function* () {
        return new Promise((R, x) => {
          function L(M, J) {
            M ? x(M) : J ? R(J) : x(new Error("Unknown error"));
          }
          this.requestRawWithCallback(A, T, L);
        });
      });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(A, T, R) {
      typeof T == "string" && (A.options.headers || (A.options.headers = {}), A.options.headers["Content-Length"] = Buffer.byteLength(T, "utf8"));
      let x = !1;
      function L(X, Q) {
        x || (x = !0, R(X, Q));
      }
      const M = A.httpModule.request(A.options, (X) => {
        const Q = new F(X);
        L(void 0, Q);
      });
      let J;
      M.on("socket", (X) => {
        J = X;
      }), M.setTimeout(this._socketTimeout || 3 * 6e4, () => {
        J && J.end(), L(new Error(`Request timeout: ${A.options.path}`));
      }), M.on("error", function(X) {
        L(X);
      }), T && typeof T == "string" && M.write(T, "utf8"), T && typeof T != "string" ? (T.on("close", function() {
        M.end();
      }), T.pipe(M)) : M.end();
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(A) {
      const T = new URL(A);
      return this._getAgent(T);
    }
    _prepareRequest(A, T, R) {
      const x = {};
      x.parsedUrl = T;
      const L = x.parsedUrl.protocol === "https:";
      x.httpModule = L ? o : n;
      const M = L ? 443 : 80;
      if (x.options = {}, x.options.host = x.parsedUrl.hostname, x.options.port = x.parsedUrl.port ? parseInt(x.parsedUrl.port) : M, x.options.path = (x.parsedUrl.pathname || "") + (x.parsedUrl.search || ""), x.options.method = A, x.options.headers = this._mergeHeaders(R), this.userAgent != null && (x.options.headers["user-agent"] = this.userAgent), x.options.agent = this._getAgent(x.parsedUrl), this.handlers)
        for (const J of this.handlers)
          J.prepareRequest(x.options);
      return x;
    }
    _mergeHeaders(A) {
      return this.requestOptions && this.requestOptions.headers ? Object.assign({}, O(this.requestOptions.headers), O(A || {})) : O(A || {});
    }
    _getExistingOrDefaultHeader(A, T, R) {
      let x;
      return this.requestOptions && this.requestOptions.headers && (x = O(this.requestOptions.headers)[T]), A[T] || x || R;
    }
    _getAgent(A) {
      let T;
      const R = p.getProxyUrl(A), x = R && R.hostname;
      if (this._keepAlive && x && (T = this._proxyAgent), this._keepAlive && !x && (T = this._agent), T)
        return T;
      const L = A.protocol === "https:";
      let M = 100;
      if (this.requestOptions && (M = this.requestOptions.maxSockets || n.globalAgent.maxSockets), R && R.hostname) {
        const J = {
          maxSockets: M,
          keepAlive: this._keepAlive,
          proxy: Object.assign(Object.assign({}, (R.username || R.password) && {
            proxyAuth: `${R.username}:${R.password}`
          }), { host: R.hostname, port: R.port })
        };
        let X;
        const Q = R.protocol === "https:";
        L ? X = Q ? l.httpsOverHttps : l.httpsOverHttp : X = Q ? l.httpOverHttps : l.httpOverHttp, T = X(J), this._proxyAgent = T;
      }
      if (this._keepAlive && !T) {
        const J = { keepAlive: this._keepAlive, maxSockets: M };
        T = L ? new o.Agent(J) : new n.Agent(J), this._agent = T;
      }
      return T || (T = L ? o.globalAgent : n.globalAgent), L && this._ignoreSslError && (T.options = Object.assign(T.options || {}, {
        rejectUnauthorized: !1
      })), T;
    }
    _performExponentialBackoff(A) {
      return i(this, void 0, void 0, function* () {
        A = Math.min(y, A);
        const T = E * Math.pow(2, A);
        return new Promise((R) => setTimeout(() => R(), T));
      });
    }
    _processResponse(A, T) {
      return i(this, void 0, void 0, function* () {
        return new Promise((R, x) => i(this, void 0, void 0, function* () {
          const L = A.message.statusCode || 0, M = {
            statusCode: L,
            result: null,
            headers: {}
          };
          L === u.NotFound && R(M);
          function J(ne, ee) {
            if (typeof ee == "string") {
              const H = new Date(ee);
              if (!isNaN(H.valueOf()))
                return H;
            }
            return ee;
          }
          let X, Q;
          try {
            Q = yield A.readBody(), Q && Q.length > 0 && (T && T.deserializeDates ? X = JSON.parse(Q, J) : X = JSON.parse(Q), M.result = X), M.headers = A.message.headers;
          } catch {
          }
          if (L > 299) {
            let ne;
            X && X.message ? ne = X.message : Q && Q.length > 0 ? ne = Q : ne = `Failed request: (${L})`;
            const ee = new N(ne, L);
            ee.result = M.result, x(ee);
          } else
            R(M);
        }));
      });
    }
  }
  e.HttpClient = P;
  const O = (C) => Object.keys(C).reduce((A, T) => (A[T.toLowerCase()] = C[T], A), {});
})(bi);
var kt = {}, yo = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(kt, "__esModule", { value: !0 });
kt.PersonalAccessTokenCredentialHandler = kt.BearerCredentialHandler = kt.BasicCredentialHandler = void 0;
class D4 {
  constructor(t, r) {
    this.username = t, this.password = r;
  }
  prepareRequest(t) {
    if (!t.headers)
      throw Error("The request has no headers");
    t.headers.Authorization = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return !1;
  }
  handleAuthentication() {
    return yo(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
kt.BasicCredentialHandler = D4;
class R4 {
  constructor(t) {
    this.token = t;
  }
  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(t) {
    if (!t.headers)
      throw Error("The request has no headers");
    t.headers.Authorization = `Bearer ${this.token}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return !1;
  }
  handleAuthentication() {
    return yo(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
kt.BearerCredentialHandler = R4;
class P4 {
  constructor(t) {
    this.token = t;
  }
  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(t) {
    if (!t.headers)
      throw Error("The request has no headers");
    t.headers.Authorization = `Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return !1;
  }
  handleAuthentication() {
    return yo(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
kt.PersonalAccessTokenCredentialHandler = P4;
var op;
function O4() {
  if (op)
    return Sa;
  op = 1;
  var e = D && D.__awaiter || function(n, o, p, l) {
    function u(c) {
      return c instanceof p ? c : new p(function(h) {
        h(c);
      });
    }
    return new (p || (p = Promise))(function(c, h) {
      function v(f) {
        try {
          w(l.next(f));
        } catch (y) {
          h(y);
        }
      }
      function g(f) {
        try {
          w(l.throw(f));
        } catch (y) {
          h(y);
        }
      }
      function w(f) {
        f.done ? c(f.value) : u(f.value).then(v, g);
      }
      w((l = l.apply(n, o || [])).next());
    });
  };
  Object.defineProperty(Sa, "__esModule", { value: !0 }), Sa.OidcClient = void 0;
  const t = bi, r = kt, a = Xe();
  class i {
    static createHttpClient(o = !0, p = 10) {
      const l = {
        allowRetries: o,
        maxRetries: p
      };
      return new t.HttpClient("actions/oidc-client", [new r.BearerCredentialHandler(i.getRequestToken())], l);
    }
    static getRequestToken() {
      const o = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
      if (!o)
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
      return o;
    }
    static getIDTokenUrl() {
      const o = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
      if (!o)
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
      return o;
    }
    static getCall(o) {
      var p;
      return e(this, void 0, void 0, function* () {
        const c = (p = (yield i.createHttpClient().getJson(o).catch((h) => {
          throw new Error(`Failed to get ID Token. 
 
        Error Code : ${h.statusCode}
 
        Error Message: ${h.result.message}`);
        })).result) === null || p === void 0 ? void 0 : p.value;
        if (!c)
          throw new Error("Response json body do not have ID Token field");
        return c;
      });
    }
    static getIDToken(o) {
      return e(this, void 0, void 0, function* () {
        try {
          let p = i.getIDTokenUrl();
          if (o) {
            const u = encodeURIComponent(o);
            p = `${p}&audience=${u}`;
          }
          a.debug(`ID token url is ${p}`);
          const l = yield i.getCall(p);
          return a.setSecret(l), l;
        } catch (p) {
          throw new Error(`Error message: ${p.message}`);
        }
      });
    }
  }
  return Sa.OidcClient = i, Sa;
}
var _n = {}, sp;
function pp() {
  return sp || (sp = 1, function(e) {
    var t = D && D.__awaiter || function(u, c, h, v) {
      function g(w) {
        return w instanceof h ? w : new h(function(f) {
          f(w);
        });
      }
      return new (h || (h = Promise))(function(w, f) {
        function y(F) {
          try {
            N(v.next(F));
          } catch (U) {
            f(U);
          }
        }
        function E(F) {
          try {
            N(v.throw(F));
          } catch (U) {
            f(U);
          }
        }
        function N(F) {
          F.done ? w(F.value) : g(F.value).then(y, E);
        }
        N((v = v.apply(u, c || [])).next());
      });
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.summary = e.markdownSummary = e.SUMMARY_DOCS_URL = e.SUMMARY_ENV_VAR = void 0;
    const r = Er, a = Ve, { access: i, appendFile: n, writeFile: o } = a.promises;
    e.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY", e.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
    class p {
      constructor() {
        this._buffer = "";
      }
      /**
       * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
       * Also checks r/w permissions.
       *
       * @returns step summary file path
       */
      filePath() {
        return t(this, void 0, void 0, function* () {
          if (this._filePath)
            return this._filePath;
          const c = process.env[e.SUMMARY_ENV_VAR];
          if (!c)
            throw new Error(`Unable to find environment variable for $${e.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
          try {
            yield i(c, a.constants.R_OK | a.constants.W_OK);
          } catch {
            throw new Error(`Unable to access summary file: '${c}'. Check if the file has correct read/write permissions.`);
          }
          return this._filePath = c, this._filePath;
        });
      }
      /**
       * Wraps content in an HTML tag, adding any HTML attributes
       *
       * @param {string} tag HTML tag to wrap
       * @param {string | null} content content within the tag
       * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
       *
       * @returns {string} content wrapped in HTML element
       */
      wrap(c, h, v = {}) {
        const g = Object.entries(v).map(([w, f]) => ` ${w}="${f}"`).join("");
        return h ? `<${c}${g}>${h}</${c}>` : `<${c}${g}>`;
      }
      /**
       * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
       *
       * @param {SummaryWriteOptions} [options] (optional) options for write operation
       *
       * @returns {Promise<Summary>} summary instance
       */
      write(c) {
        return t(this, void 0, void 0, function* () {
          const h = !!(c != null && c.overwrite), v = yield this.filePath();
          return yield (h ? o : n)(v, this._buffer, { encoding: "utf8" }), this.emptyBuffer();
        });
      }
      /**
       * Clears the summary buffer and wipes the summary file
       *
       * @returns {Summary} summary instance
       */
      clear() {
        return t(this, void 0, void 0, function* () {
          return this.emptyBuffer().write({ overwrite: !0 });
        });
      }
      /**
       * Returns the current summary buffer as a string
       *
       * @returns {string} string of summary buffer
       */
      stringify() {
        return this._buffer;
      }
      /**
       * If the summary buffer is empty
       *
       * @returns {boolen} true if the buffer is empty
       */
      isEmptyBuffer() {
        return this._buffer.length === 0;
      }
      /**
       * Resets the summary buffer without writing to summary file
       *
       * @returns {Summary} summary instance
       */
      emptyBuffer() {
        return this._buffer = "", this;
      }
      /**
       * Adds raw text to the summary buffer
       *
       * @param {string} text content to add
       * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
       *
       * @returns {Summary} summary instance
       */
      addRaw(c, h = !1) {
        return this._buffer += c, h ? this.addEOL() : this;
      }
      /**
       * Adds the operating system-specific end-of-line marker to the buffer
       *
       * @returns {Summary} summary instance
       */
      addEOL() {
        return this.addRaw(r.EOL);
      }
      /**
       * Adds an HTML codeblock to the summary buffer
       *
       * @param {string} code content to render within fenced code block
       * @param {string} lang (optional) language to syntax highlight code
       *
       * @returns {Summary} summary instance
       */
      addCodeBlock(c, h) {
        const v = Object.assign({}, h && { lang: h }), g = this.wrap("pre", this.wrap("code", c), v);
        return this.addRaw(g).addEOL();
      }
      /**
       * Adds an HTML list to the summary buffer
       *
       * @param {string[]} items list of items to render
       * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
       *
       * @returns {Summary} summary instance
       */
      addList(c, h = !1) {
        const v = h ? "ol" : "ul", g = c.map((f) => this.wrap("li", f)).join(""), w = this.wrap(v, g);
        return this.addRaw(w).addEOL();
      }
      /**
       * Adds an HTML table to the summary buffer
       *
       * @param {SummaryTableCell[]} rows table rows
       *
       * @returns {Summary} summary instance
       */
      addTable(c) {
        const h = c.map((g) => {
          const w = g.map((f) => {
            if (typeof f == "string")
              return this.wrap("td", f);
            const { header: y, data: E, colspan: N, rowspan: F } = f, U = y ? "th" : "td", P = Object.assign(Object.assign({}, N && { colspan: N }), F && { rowspan: F });
            return this.wrap(U, E, P);
          }).join("");
          return this.wrap("tr", w);
        }).join(""), v = this.wrap("table", h);
        return this.addRaw(v).addEOL();
      }
      /**
       * Adds a collapsable HTML details element to the summary buffer
       *
       * @param {string} label text for the closed state
       * @param {string} content collapsable content
       *
       * @returns {Summary} summary instance
       */
      addDetails(c, h) {
        const v = this.wrap("details", this.wrap("summary", c) + h);
        return this.addRaw(v).addEOL();
      }
      /**
       * Adds an HTML image tag to the summary buffer
       *
       * @param {string} src path to the image you to embed
       * @param {string} alt text description of the image
       * @param {SummaryImageOptions} options (optional) addition image attributes
       *
       * @returns {Summary} summary instance
       */
      addImage(c, h, v) {
        const { width: g, height: w } = v || {}, f = Object.assign(Object.assign({}, g && { width: g }), w && { height: w }), y = this.wrap("img", null, Object.assign({ src: c, alt: h }, f));
        return this.addRaw(y).addEOL();
      }
      /**
       * Adds an HTML section heading element
       *
       * @param {string} text heading text
       * @param {number | string} [level=1] (optional) the heading level, default: 1
       *
       * @returns {Summary} summary instance
       */
      addHeading(c, h) {
        const v = `h${h}`, g = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(v) ? v : "h1", w = this.wrap(g, c);
        return this.addRaw(w).addEOL();
      }
      /**
       * Adds an HTML thematic break (<hr>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addSeparator() {
        const c = this.wrap("hr", null);
        return this.addRaw(c).addEOL();
      }
      /**
       * Adds an HTML line break (<br>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addBreak() {
        const c = this.wrap("br", null);
        return this.addRaw(c).addEOL();
      }
      /**
       * Adds an HTML blockquote to the summary buffer
       *
       * @param {string} text quote text
       * @param {string} cite (optional) citation url
       *
       * @returns {Summary} summary instance
       */
      addQuote(c, h) {
        const v = Object.assign({}, h && { cite: h }), g = this.wrap("blockquote", c, v);
        return this.addRaw(g).addEOL();
      }
      /**
       * Adds an HTML anchor tag to the summary buffer
       *
       * @param {string} text link text/content
       * @param {string} href hyperlink
       *
       * @returns {Summary} summary instance
       */
      addLink(c, h) {
        const v = this.wrap("a", c, { href: h });
        return this.addRaw(v).addEOL();
      }
    }
    const l = new p();
    e.markdownSummary = l, e.summary = l;
  }(_n)), _n;
}
var Ct = {}, dp;
function B4() {
  if (dp)
    return Ct;
  dp = 1;
  var e = D && D.__createBinding || (Object.create ? function(p, l, u, c) {
    c === void 0 && (c = u), Object.defineProperty(p, c, { enumerable: !0, get: function() {
      return l[u];
    } });
  } : function(p, l, u, c) {
    c === void 0 && (c = u), p[c] = l[u];
  }), t = D && D.__setModuleDefault || (Object.create ? function(p, l) {
    Object.defineProperty(p, "default", { enumerable: !0, value: l });
  } : function(p, l) {
    p.default = l;
  }), r = D && D.__importStar || function(p) {
    if (p && p.__esModule)
      return p;
    var l = {};
    if (p != null)
      for (var u in p)
        u !== "default" && Object.hasOwnProperty.call(p, u) && e(l, p, u);
    return t(l, p), l;
  };
  Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.toPlatformPath = Ct.toWin32Path = Ct.toPosixPath = void 0;
  const a = r(ye);
  function i(p) {
    return p.replace(/[\\]/g, "/");
  }
  Ct.toPosixPath = i;
  function n(p) {
    return p.replace(/[/]/g, "\\");
  }
  Ct.toWin32Path = n;
  function o(p) {
    return p.replace(/[/\\]/g, a.sep);
  }
  return Ct.toPlatformPath = o, Ct;
}
var lp;
function Xe() {
  return lp || (lp = 1, function(e) {
    var t = D && D.__createBinding || (Object.create ? function(j, K, re, ce) {
      ce === void 0 && (ce = re), Object.defineProperty(j, ce, { enumerable: !0, get: function() {
        return K[re];
      } });
    } : function(j, K, re, ce) {
      ce === void 0 && (ce = re), j[ce] = K[re];
    }), r = D && D.__setModuleDefault || (Object.create ? function(j, K) {
      Object.defineProperty(j, "default", { enumerable: !0, value: K });
    } : function(j, K) {
      j.default = K;
    }), a = D && D.__importStar || function(j) {
      if (j && j.__esModule)
        return j;
      var K = {};
      if (j != null)
        for (var re in j)
          re !== "default" && Object.hasOwnProperty.call(j, re) && t(K, j, re);
      return r(K, j), K;
    }, i = D && D.__awaiter || function(j, K, re, ce) {
      function Me(Ge) {
        return Ge instanceof re ? Ge : new re(function(it) {
          it(Ge);
        });
      }
      return new (re || (re = Promise))(function(Ge, it) {
        function St(qe) {
          try {
            ae(ce.next(qe));
          } catch (k) {
            it(k);
          }
        }
        function Oe(qe) {
          try {
            ae(ce.throw(qe));
          } catch (k) {
            it(k);
          }
        }
        function ae(qe) {
          qe.done ? Ge(qe.value) : Me(qe.value).then(St, Oe);
        }
        ae((ce = ce.apply(j, K || [])).next());
      });
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getIDToken = e.getState = e.saveState = e.group = e.endGroup = e.startGroup = e.info = e.notice = e.warning = e.error = e.debug = e.isDebug = e.setFailed = e.setCommandEcho = e.setOutput = e.getBooleanInput = e.getMultilineInput = e.getInput = e.addPath = e.setSecret = e.exportVariable = e.ExitCode = void 0;
    const n = zr, o = Hr, p = er, l = a(Er), u = a(ye), c = O4();
    var h;
    (function(j) {
      j[j.Success = 0] = "Success", j[j.Failure = 1] = "Failure";
    })(h = e.ExitCode || (e.ExitCode = {}));
    function v(j, K) {
      const re = p.toCommandValue(K);
      if (process.env[j] = re, process.env.GITHUB_ENV || "")
        return o.issueFileCommand("ENV", o.prepareKeyValueMessage(j, K));
      n.issueCommand("set-env", { name: j }, re);
    }
    e.exportVariable = v;
    function g(j) {
      n.issueCommand("add-mask", {}, j);
    }
    e.setSecret = g;
    function w(j) {
      process.env.GITHUB_PATH || "" ? o.issueFileCommand("PATH", j) : n.issueCommand("add-path", {}, j), process.env.PATH = `${j}${u.delimiter}${process.env.PATH}`;
    }
    e.addPath = w;
    function f(j, K) {
      const re = process.env[`INPUT_${j.replace(/ /g, "_").toUpperCase()}`] || "";
      if (K && K.required && !re)
        throw new Error(`Input required and not supplied: ${j}`);
      return K && K.trimWhitespace === !1 ? re : re.trim();
    }
    e.getInput = f;
    function y(j, K) {
      const re = f(j, K).split(`
`).filter((ce) => ce !== "");
      return K && K.trimWhitespace === !1 ? re : re.map((ce) => ce.trim());
    }
    e.getMultilineInput = y;
    function E(j, K) {
      const re = ["true", "True", "TRUE"], ce = ["false", "False", "FALSE"], Me = f(j, K);
      if (re.includes(Me))
        return !0;
      if (ce.includes(Me))
        return !1;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${j}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    e.getBooleanInput = E;
    function N(j, K) {
      if (process.env.GITHUB_OUTPUT || "")
        return o.issueFileCommand("OUTPUT", o.prepareKeyValueMessage(j, K));
      process.stdout.write(l.EOL), n.issueCommand("set-output", { name: j }, p.toCommandValue(K));
    }
    e.setOutput = N;
    function F(j) {
      n.issue("echo", j ? "on" : "off");
    }
    e.setCommandEcho = F;
    function U(j) {
      process.exitCode = h.Failure, C(j);
    }
    e.setFailed = U;
    function P() {
      return process.env.RUNNER_DEBUG === "1";
    }
    e.isDebug = P;
    function O(j) {
      n.issueCommand("debug", {}, j);
    }
    e.debug = O;
    function C(j, K = {}) {
      n.issueCommand("error", p.toCommandProperties(K), j instanceof Error ? j.toString() : j);
    }
    e.error = C;
    function A(j, K = {}) {
      n.issueCommand("warning", p.toCommandProperties(K), j instanceof Error ? j.toString() : j);
    }
    e.warning = A;
    function T(j, K = {}) {
      n.issueCommand("notice", p.toCommandProperties(K), j instanceof Error ? j.toString() : j);
    }
    e.notice = T;
    function R(j) {
      process.stdout.write(j + l.EOL);
    }
    e.info = R;
    function x(j) {
      n.issue("group", j);
    }
    e.startGroup = x;
    function L() {
      n.issue("endgroup");
    }
    e.endGroup = L;
    function M(j, K) {
      return i(this, void 0, void 0, function* () {
        x(j);
        let re;
        try {
          re = yield K();
        } finally {
          L();
        }
        return re;
      });
    }
    e.group = M;
    function J(j, K) {
      if (process.env.GITHUB_STATE || "")
        return o.issueFileCommand("STATE", o.prepareKeyValueMessage(j, K));
      n.issueCommand("save-state", { name: j }, p.toCommandValue(K));
    }
    e.saveState = J;
    function X(j) {
      return process.env[`STATE_${j}`] || "";
    }
    e.getState = X;
    function Q(j) {
      return i(this, void 0, void 0, function* () {
        return yield c.OidcClient.getIDToken(j);
      });
    }
    e.getIDToken = Q;
    var ne = pp();
    Object.defineProperty(e, "summary", { enumerable: !0, get: function() {
      return ne.summary;
    } });
    var ee = pp();
    Object.defineProperty(e, "markdownSummary", { enumerable: !0, get: function() {
      return ee.markdownSummary;
    } });
    var H = B4();
    Object.defineProperty(e, "toPosixPath", { enumerable: !0, get: function() {
      return H.toPosixPath;
    } }), Object.defineProperty(e, "toWin32Path", { enumerable: !0, get: function() {
      return H.toWin32Path;
    } }), Object.defineProperty(e, "toPlatformPath", { enumerable: !0, get: function() {
      return H.toPlatformPath;
    } });
  }(fn)), fn;
}
var _i = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.checkArtifactFilePath = vr.checkArtifactName = void 0;
const F4 = Xe(), Zn = /* @__PURE__ */ new Map([
  ['"', ' Double quote "'],
  [":", " Colon :"],
  ["<", " Less than <"],
  [">", " Greater than >"],
  ["|", " Vertical bar |"],
  ["*", " Asterisk *"],
  ["?", " Question mark ?"],
  ["\r", " Carriage return \\r"],
  [`
`, " Line feed \\n"]
]), up = new Map([
  ...Zn,
  ["\\", " Backslash \\"],
  ["/", " Forward slash /"]
]);
function k4(e) {
  if (!e)
    throw new Error(`Artifact name: ${e}, is incorrectly provided`);
  for (const [t, r] of up)
    if (e.includes(t))
      throw new Error(`Artifact name is not valid: ${e}. Contains the following character: ${r}
          
Invalid characters include: ${Array.from(up.values()).toString()}
          
These characters are not allowed in the artifact name due to limitations with certain file systems such as NTFS. To maintain file system agnostic behavior, these characters are intentionally not allowed to prevent potential problems with downloads on different file systems.`);
  F4.info("Artifact name is valid!");
}
vr.checkArtifactName = k4;
function N4(e) {
  if (!e)
    throw new Error(`Artifact path: ${e}, is incorrectly provided`);
  for (const [t, r] of Zn)
    if (e.includes(t))
      throw new Error(`Artifact path is not valid: ${e}. Contains the following character: ${r}
          
Invalid characters include: ${Array.from(Zn.values()).toString()}
          
The following characters are not allowed in files that are uploaded due to limitations with certain file systems such as NTFS. To maintain file system agnostic behavior, these characters are intentionally not allowed to prevent potential problems with downloads on different file systems.
          `);
}
vr.checkArtifactFilePath = N4;
var I4 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), $4 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), U4 = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && I4(t, e, r);
  return $4(t, e), t;
};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.getUploadSpecification = void 0;
const $1 = U4(Ve), x4 = Xe(), Ta = ye, V4 = vr;
function G4(e, t, r) {
  const a = [];
  if (!$1.existsSync(t))
    throw new Error(`Provided rootDirectory ${t} does not exist`);
  if (!$1.lstatSync(t).isDirectory())
    throw new Error(`Provided rootDirectory ${t} is not a valid directory`);
  t = Ta.normalize(t), t = Ta.resolve(t);
  for (let i of r) {
    if (!$1.existsSync(i))
      throw new Error(`File ${i} does not exist`);
    if ($1.lstatSync(i).isDirectory())
      x4.debug(`Removing ${i} from rawSearchResults because it is a directory`);
    else {
      if (i = Ta.normalize(i), i = Ta.resolve(i), !i.startsWith(t))
        throw new Error(`The rootDirectory: ${t} is not a parent directory of the file: ${i}`);
      const n = i.replace(t, "");
      V4.checkArtifactFilePath(n), a.push({
        absoluteFilePath: i,
        uploadFilePath: Ta.join(e, n)
      });
    }
  }
  return a;
}
_i.getUploadSpecification = G4;
var yi = {}, zd = { exports: {} }, Hd = { exports: {} }, U1 = {}, cp;
function L4() {
  if (cp)
    return U1;
  cp = 1;
  var e = ye, t = process.platform === "win32", r = Ve, a = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
  function i() {
    var l;
    if (a) {
      var u = new Error();
      l = c;
    } else
      l = h;
    return l;
    function c(v) {
      v && (u.message = v.message, v = u, h(v));
    }
    function h(v) {
      if (v) {
        if (process.throwDeprecation)
          throw v;
        if (!process.noDeprecation) {
          var g = "fs: missing callback " + (v.stack || v.message);
          process.traceDeprecation ? console.trace(g) : console.error(g);
        }
      }
    }
  }
  function n(l) {
    return typeof l == "function" ? l : i();
  }
  if (e.normalize, t)
    var o = /(.*?)(?:[\/\\]+|$)/g;
  else
    var o = /(.*?)(?:[\/]+|$)/g;
  if (t)
    var p = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
  else
    var p = /^[\/]*/;
  return U1.realpathSync = function(u, c) {
    if (u = e.resolve(u), c && Object.prototype.hasOwnProperty.call(c, u))
      return c[u];
    var h = u, v = {}, g = {}, w, f, y, E;
    N();
    function N() {
      var A = p.exec(u);
      w = A[0].length, f = A[0], y = A[0], E = "", t && !g[y] && (r.lstatSync(y), g[y] = !0);
    }
    for (; w < u.length; ) {
      o.lastIndex = w;
      var F = o.exec(u);
      if (E = f, f += F[0], y = E + F[1], w = o.lastIndex, !(g[y] || c && c[y] === y)) {
        var U;
        if (c && Object.prototype.hasOwnProperty.call(c, y))
          U = c[y];
        else {
          var P = r.lstatSync(y);
          if (!P.isSymbolicLink()) {
            g[y] = !0, c && (c[y] = y);
            continue;
          }
          var O = null;
          if (!t) {
            var C = P.dev.toString(32) + ":" + P.ino.toString(32);
            v.hasOwnProperty(C) && (O = v[C]);
          }
          O === null && (r.statSync(y), O = r.readlinkSync(y)), U = e.resolve(E, O), c && (c[y] = U), t || (v[C] = O);
        }
        u = e.resolve(U, u.slice(w)), N();
      }
    }
    return c && (c[h] = u), u;
  }, U1.realpath = function(u, c, h) {
    if (typeof h != "function" && (h = n(c), c = null), u = e.resolve(u), c && Object.prototype.hasOwnProperty.call(c, u))
      return process.nextTick(h.bind(null, null, c[u]));
    var v = u, g = {}, w = {}, f, y, E, N;
    F();
    function F() {
      var A = p.exec(u);
      f = A[0].length, y = A[0], E = A[0], N = "", t && !w[E] ? r.lstat(E, function(T) {
        if (T)
          return h(T);
        w[E] = !0, U();
      }) : process.nextTick(U);
    }
    function U() {
      if (f >= u.length)
        return c && (c[v] = u), h(null, u);
      o.lastIndex = f;
      var A = o.exec(u);
      return N = y, y += A[0], E = N + A[1], f = o.lastIndex, w[E] || c && c[E] === E ? process.nextTick(U) : c && Object.prototype.hasOwnProperty.call(c, E) ? C(c[E]) : r.lstat(E, P);
    }
    function P(A, T) {
      if (A)
        return h(A);
      if (!T.isSymbolicLink())
        return w[E] = !0, c && (c[E] = E), process.nextTick(U);
      if (!t) {
        var R = T.dev.toString(32) + ":" + T.ino.toString(32);
        if (g.hasOwnProperty(R))
          return O(null, g[R], E);
      }
      r.stat(E, function(x) {
        if (x)
          return h(x);
        r.readlink(E, function(L, M) {
          t || (g[R] = M), O(L, M);
        });
      });
    }
    function O(A, T, R) {
      if (A)
        return h(A);
      var x = e.resolve(N, T);
      c && (c[R] = x), C(x);
    }
    function C(A) {
      u = e.resolve(A, u.slice(f)), F();
    }
  }, U1;
}
var yn, mp;
function Kd() {
  if (mp)
    return yn;
  mp = 1, yn = p, p.realpath = p, p.sync = l, p.realpathSync = l, p.monkeypatch = u, p.unmonkeypatch = c;
  var e = Ve, t = e.realpath, r = e.realpathSync, a = process.version, i = /^v[0-5]\./.test(a), n = L4();
  function o(h) {
    return h && h.syscall === "realpath" && (h.code === "ELOOP" || h.code === "ENOMEM" || h.code === "ENAMETOOLONG");
  }
  function p(h, v, g) {
    if (i)
      return t(h, v, g);
    typeof v == "function" && (g = v, v = null), t(h, v, function(w, f) {
      o(w) ? n.realpath(h, v, g) : g(w, f);
    });
  }
  function l(h, v) {
    if (i)
      return r(h, v);
    try {
      return r(h, v);
    } catch (g) {
      if (o(g))
        return n.realpathSync(h, v);
      throw g;
    }
  }
  function u() {
    e.realpath = p, e.realpathSync = l;
  }
  function c() {
    e.realpath = t, e.realpathSync = r;
  }
  return yn;
}
var j4 = function(e, t) {
  for (var r = [], a = 0; a < e.length; a++) {
    var i = t(e[a], a);
    M4(i) ? r.push.apply(r, i) : r.push(i);
  }
  return r;
}, M4 = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, q4 = Yd;
function Yd(e, t, r) {
  e instanceof RegExp && (e = fp(e, r)), t instanceof RegExp && (t = fp(t, r));
  var a = Qd(e, t, r);
  return a && {
    start: a[0],
    end: a[1],
    pre: r.slice(0, a[0]),
    body: r.slice(a[0] + e.length, a[1]),
    post: r.slice(a[1] + t.length)
  };
}
function fp(e, t) {
  var r = t.match(e);
  return r ? r[0] : null;
}
Yd.range = Qd;
function Qd(e, t, r) {
  var a, i, n, o, p, l = r.indexOf(e), u = r.indexOf(t, l + 1), c = l;
  if (l >= 0 && u > 0) {
    for (a = [], n = r.length; c >= 0 && !p; )
      c == l ? (a.push(c), l = r.indexOf(e, c + 1)) : a.length == 1 ? p = [a.pop(), u] : (i = a.pop(), i < n && (n = i, o = u), u = r.indexOf(t, c + 1)), c = l < u && l >= 0 ? l : u;
    a.length && (p = [n, o]);
  }
  return p;
}
var W4 = j4, Jd = q4, z4 = Y4, Zd = "\0SLASH" + Math.random() + "\0", Xd = "\0OPEN" + Math.random() + "\0", Eo = "\0CLOSE" + Math.random() + "\0", el = "\0COMMA" + Math.random() + "\0", tl = "\0PERIOD" + Math.random() + "\0";
function En(e) {
  return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function H4(e) {
  return e.split("\\\\").join(Zd).split("\\{").join(Xd).split("\\}").join(Eo).split("\\,").join(el).split("\\.").join(tl);
}
function K4(e) {
  return e.split(Zd).join("\\").split(Xd).join("{").split(Eo).join("}").split(el).join(",").split(tl).join(".");
}
function rl(e) {
  if (!e)
    return [""];
  var t = [], r = Jd("{", "}", e);
  if (!r)
    return e.split(",");
  var a = r.pre, i = r.body, n = r.post, o = a.split(",");
  o[o.length - 1] += "{" + i + "}";
  var p = rl(n);
  return n.length && (o[o.length - 1] += p.shift(), o.push.apply(o, p)), t.push.apply(t, o), t;
}
function Y4(e) {
  return e ? (e.substr(0, 2) === "{}" && (e = "\\{\\}" + e.substr(2)), Gr(H4(e), !0).map(K4)) : [];
}
function Q4(e) {
  return "{" + e + "}";
}
function J4(e) {
  return /^-?0\d/.test(e);
}
function Z4(e, t) {
  return e <= t;
}
function X4(e, t) {
  return e >= t;
}
function Gr(e, t) {
  var r = [], a = Jd("{", "}", e);
  if (!a || /\$$/.test(a.pre))
    return [e];
  var i = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body), n = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body), o = i || n, p = a.body.indexOf(",") >= 0;
  if (!o && !p)
    return a.post.match(/,.*\}/) ? (e = a.pre + "{" + a.body + Eo + a.post, Gr(e)) : [e];
  var l;
  if (o)
    l = a.body.split(/\.\./);
  else if (l = rl(a.body), l.length === 1 && (l = Gr(l[0], !1).map(Q4), l.length === 1)) {
    var c = a.post.length ? Gr(a.post, !1) : [""];
    return c.map(function(x) {
      return a.pre + l[0] + x;
    });
  }
  var u = a.pre, c = a.post.length ? Gr(a.post, !1) : [""], h;
  if (o) {
    var v = En(l[0]), g = En(l[1]), w = Math.max(l[0].length, l[1].length), f = l.length == 3 ? Math.abs(En(l[2])) : 1, y = Z4, E = g < v;
    E && (f *= -1, y = X4);
    var N = l.some(J4);
    h = [];
    for (var F = v; y(F, g); F += f) {
      var U;
      if (n)
        U = String.fromCharCode(F), U === "\\" && (U = "");
      else if (U = String(F), N) {
        var P = w - U.length;
        if (P > 0) {
          var O = new Array(P + 1).join("0");
          F < 0 ? U = "-" + O + U.slice(1) : U = O + U;
        }
      }
      h.push(U);
    }
  } else
    h = W4(l, function(R) {
      return Gr(R, !1);
    });
  for (var C = 0; C < h.length; C++)
    for (var A = 0; A < c.length; A++) {
      var T = u + h[C] + c[A];
      (!t || o || T) && r.push(T);
    }
  return r;
}
var Ei = Je;
Je.Minimatch = Pe;
var Va = function() {
  try {
    return require("path");
  } catch {
  }
}() || {
  sep: "/"
};
Je.sep = Va.sep;
var So = Je.GLOBSTAR = Pe.GLOBSTAR = {}, eu = z4, hp = {
  "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
  "?": { open: "(?:", close: ")?" },
  "+": { open: "(?:", close: ")+" },
  "*": { open: "(?:", close: ")*" },
  "@": { open: "(?:", close: ")" }
}, Xn = "[^/]", eo = Xn + "*?", tu = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", ru = "(?:(?!(?:\\/|^)\\.).)*?", gp = au("().*{}+?[]^$\\!");
function au(e) {
  return e.split("").reduce(function(t, r) {
    return t[r] = !0, t;
  }, {});
}
var al = /\/+/;
Je.filter = iu;
function iu(e, t) {
  return t = t || {}, function(r, a, i) {
    return Je(r, e, t);
  };
}
function qt(e, t) {
  t = t || {};
  var r = {};
  return Object.keys(e).forEach(function(a) {
    r[a] = e[a];
  }), Object.keys(t).forEach(function(a) {
    r[a] = t[a];
  }), r;
}
Je.defaults = function(e) {
  if (!e || typeof e != "object" || !Object.keys(e).length)
    return Je;
  var t = Je, r = function(i, n, o) {
    return t(i, n, qt(e, o));
  };
  return r.Minimatch = function(i, n) {
    return new t.Minimatch(i, qt(e, n));
  }, r.Minimatch.defaults = function(i) {
    return t.defaults(qt(e, i)).Minimatch;
  }, r.filter = function(i, n) {
    return t.filter(i, qt(e, n));
  }, r.defaults = function(i) {
    return t.defaults(qt(e, i));
  }, r.makeRe = function(i, n) {
    return t.makeRe(i, qt(e, n));
  }, r.braceExpand = function(i, n) {
    return t.braceExpand(i, qt(e, n));
  }, r.match = function(a, i, n) {
    return t.match(a, i, qt(e, n));
  }, r;
};
Pe.defaults = function(e) {
  return Je.defaults(e).Minimatch;
};
function Je(e, t, r) {
  return Si(t), r || (r = {}), !r.nocomment && t.charAt(0) === "#" ? !1 : new Pe(t, r).match(e);
}
function Pe(e, t) {
  if (!(this instanceof Pe))
    return new Pe(e, t);
  Si(e), t || (t = {}), e = e.trim(), !t.allowWindowsEscape && Va.sep !== "/" && (e = e.split(Va.sep).join("/")), this.options = t, this.set = [], this.pattern = e, this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.partial = !!t.partial, this.make();
}
Pe.prototype.debug = function() {
};
Pe.prototype.make = nu;
function nu() {
  var e = this.pattern, t = this.options;
  if (!t.nocomment && e.charAt(0) === "#") {
    this.comment = !0;
    return;
  }
  if (!e) {
    this.empty = !0;
    return;
  }
  this.parseNegate();
  var r = this.globSet = this.braceExpand();
  t.debug && (this.debug = function() {
    console.error.apply(console, arguments);
  }), this.debug(this.pattern, r), r = this.globParts = r.map(function(a) {
    return a.split(al);
  }), this.debug(this.pattern, r), r = r.map(function(a, i, n) {
    return a.map(this.parse, this);
  }, this), this.debug(this.pattern, r), r = r.filter(function(a) {
    return a.indexOf(!1) === -1;
  }), this.debug(this.pattern, r), this.set = r;
}
Pe.prototype.parseNegate = ou;
function ou() {
  var e = this.pattern, t = !1, r = this.options, a = 0;
  if (!r.nonegate) {
    for (var i = 0, n = e.length; i < n && e.charAt(i) === "!"; i++)
      t = !t, a++;
    a && (this.pattern = e.substr(a)), this.negate = t;
  }
}
Je.braceExpand = function(e, t) {
  return il(e, t);
};
Pe.prototype.braceExpand = il;
function il(e, t) {
  return t || (this instanceof Pe ? t = this.options : t = {}), e = typeof e > "u" ? this.pattern : e, Si(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : eu(e);
}
var su = 1024 * 64, Si = function(e) {
  if (typeof e != "string")
    throw new TypeError("invalid pattern");
  if (e.length > su)
    throw new TypeError("pattern is too long");
};
Pe.prototype.parse = pu;
var x1 = {};
function pu(e, t) {
  Si(e);
  var r = this.options;
  if (e === "**")
    if (r.noglobstar)
      e = "*";
    else
      return So;
  if (e === "")
    return "";
  var a = "", i = !!r.nocase, n = !1, o = [], p = [], l, u = !1, c = -1, h = -1, v = e.charAt(0) === "." ? "" : r.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", g = this;
  function w() {
    if (l) {
      switch (l) {
        case "*":
          a += eo, i = !0;
          break;
        case "?":
          a += Xn, i = !0;
          break;
        default:
          a += "\\" + l;
          break;
      }
      g.debug("clearStateChar %j %j", l, a), l = !1;
    }
  }
  for (var f = 0, y = e.length, E; f < y && (E = e.charAt(f)); f++) {
    if (this.debug("%s	%s %s %j", e, f, a, E), n && gp[E]) {
      a += "\\" + E, n = !1;
      continue;
    }
    switch (E) {
      case "/":
        return !1;
      case "\\":
        w(), n = !0;
        continue;
      case "?":
      case "*":
      case "+":
      case "@":
      case "!":
        if (this.debug("%s	%s %s %j <-- stateChar", e, f, a, E), u) {
          this.debug("  in class"), E === "!" && f === h + 1 && (E = "^"), a += E;
          continue;
        }
        g.debug("call clearStateChar %j", l), w(), l = E, r.noext && w();
        continue;
      case "(":
        if (u) {
          a += "(";
          continue;
        }
        if (!l) {
          a += "\\(";
          continue;
        }
        o.push({
          type: l,
          start: f - 1,
          reStart: a.length,
          open: hp[l].open,
          close: hp[l].close
        }), a += l === "!" ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", l, a), l = !1;
        continue;
      case ")":
        if (u || !o.length) {
          a += "\\)";
          continue;
        }
        w(), i = !0;
        var N = o.pop();
        a += N.close, N.type === "!" && p.push(N), N.reEnd = a.length;
        continue;
      case "|":
        if (u || !o.length || n) {
          a += "\\|", n = !1;
          continue;
        }
        w(), a += "|";
        continue;
      case "[":
        if (w(), u) {
          a += "\\" + E;
          continue;
        }
        u = !0, h = f, c = a.length, a += E;
        continue;
      case "]":
        if (f === h + 1 || !u) {
          a += "\\" + E, n = !1;
          continue;
        }
        var F = e.substring(h + 1, f);
        try {
          RegExp("[" + F + "]");
        } catch {
          var U = this.parse(F, x1);
          a = a.substr(0, c) + "\\[" + U[0] + "\\]", i = i || U[1], u = !1;
          continue;
        }
        i = !0, u = !1, a += E;
        continue;
      default:
        w(), n ? n = !1 : gp[E] && !(E === "^" && u) && (a += "\\"), a += E;
    }
  }
  for (u && (F = e.substr(h + 1), U = this.parse(F, x1), a = a.substr(0, c) + "\\[" + U[0], i = i || U[1]), N = o.pop(); N; N = o.pop()) {
    var P = a.slice(N.reStart + N.open.length);
    this.debug("setting tail", a, N), P = P.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(j, K, re) {
      return re || (re = "\\"), K + K + re + "|";
    }), this.debug(`tail=%j
   %s`, P, P, N, a);
    var O = N.type === "*" ? eo : N.type === "?" ? Xn : "\\" + N.type;
    i = !0, a = a.slice(0, N.reStart) + O + "\\(" + P;
  }
  w(), n && (a += "\\\\");
  var C = !1;
  switch (a.charAt(0)) {
    case "[":
    case ".":
    case "(":
      C = !0;
  }
  for (var A = p.length - 1; A > -1; A--) {
    var T = p[A], R = a.slice(0, T.reStart), x = a.slice(T.reStart, T.reEnd - 8), L = a.slice(T.reEnd - 8, T.reEnd), M = a.slice(T.reEnd);
    L += M;
    var J = R.split("(").length - 1, X = M;
    for (f = 0; f < J; f++)
      X = X.replace(/\)[+*?]?/, "");
    M = X;
    var Q = "";
    M === "" && t !== x1 && (Q = "$");
    var ne = R + x + M + Q + L;
    a = ne;
  }
  if (a !== "" && i && (a = "(?=.)" + a), C && (a = v + a), t === x1)
    return [a, i];
  if (!i)
    return lu(e);
  var ee = r.nocase ? "i" : "";
  try {
    var H = new RegExp("^" + a + "$", ee);
  } catch {
    return new RegExp("$.");
  }
  return H._glob = e, H._src = a, H;
}
Je.makeRe = function(e, t) {
  return new Pe(e, t || {}).makeRe();
};
Pe.prototype.makeRe = du;
function du() {
  if (this.regexp || this.regexp === !1)
    return this.regexp;
  var e = this.set;
  if (!e.length)
    return this.regexp = !1, this.regexp;
  var t = this.options, r = t.noglobstar ? eo : t.dot ? tu : ru, a = t.nocase ? "i" : "", i = e.map(function(n) {
    return n.map(function(o) {
      return o === So ? r : typeof o == "string" ? uu(o) : o._src;
    }).join("\\/");
  }).join("|");
  i = "^(?:" + i + ")$", this.negate && (i = "^(?!" + i + ").*$");
  try {
    this.regexp = new RegExp(i, a);
  } catch {
    this.regexp = !1;
  }
  return this.regexp;
}
Je.match = function(e, t, r) {
  r = r || {};
  var a = new Pe(t, r);
  return e = e.filter(function(i) {
    return a.match(i);
  }), a.options.nonull && !e.length && e.push(t), e;
};
Pe.prototype.match = function(t, r) {
  if (typeof r > "u" && (r = this.partial), this.debug("match", t, this.pattern), this.comment)
    return !1;
  if (this.empty)
    return t === "";
  if (t === "/" && r)
    return !0;
  var a = this.options;
  Va.sep !== "/" && (t = t.split(Va.sep).join("/")), t = t.split(al), this.debug(this.pattern, "split", t);
  var i = this.set;
  this.debug(this.pattern, "set", i);
  var n, o;
  for (o = t.length - 1; o >= 0 && (n = t[o], !n); o--)
    ;
  for (o = 0; o < i.length; o++) {
    var p = i[o], l = t;
    a.matchBase && p.length === 1 && (l = [n]);
    var u = this.matchOne(l, p, r);
    if (u)
      return a.flipNegate ? !0 : !this.negate;
  }
  return a.flipNegate ? !1 : this.negate;
};
Pe.prototype.matchOne = function(e, t, r) {
  var a = this.options;
  this.debug(
    "matchOne",
    { this: this, file: e, pattern: t }
  ), this.debug("matchOne", e.length, t.length);
  for (var i = 0, n = 0, o = e.length, p = t.length; i < o && n < p; i++, n++) {
    this.debug("matchOne loop");
    var l = t[n], u = e[i];
    if (this.debug(t, l, u), l === !1)
      return !1;
    if (l === So) {
      this.debug("GLOBSTAR", [t, l, u]);
      var c = i, h = n + 1;
      if (h === p) {
        for (this.debug("** at the end"); i < o; i++)
          if (e[i] === "." || e[i] === ".." || !a.dot && e[i].charAt(0) === ".")
            return !1;
        return !0;
      }
      for (; c < o; ) {
        var v = e[c];
        if (this.debug(`
globstar while`, e, c, t, h, v), this.matchOne(e.slice(c), t.slice(h), r))
          return this.debug("globstar found match!", c, o, v), !0;
        if (v === "." || v === ".." || !a.dot && v.charAt(0) === ".") {
          this.debug("dot detected!", e, c, t, h);
          break;
        }
        this.debug("globstar swallow a segment, and continue"), c++;
      }
      return !!(r && (this.debug(`
>>> no match, partial?`, e, c, t, h), c === o));
    }
    var g;
    if (typeof l == "string" ? (g = u === l, this.debug("string match", l, u, g)) : (g = u.match(l), this.debug("pattern match", l, u, g)), !g)
      return !1;
  }
  if (i === o && n === p)
    return !0;
  if (i === o)
    return r;
  if (n === p)
    return i === o - 1 && e[i] === "";
  throw new Error("wtf?");
};
function lu(e) {
  return e.replace(/\\(.)/g, "$1");
}
function uu(e) {
  return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
var V1 = { exports: {} }, vp;
function cu() {
  return vp || (vp = 1, typeof Object.create == "function" ? V1.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : V1.exports = function(t, r) {
    if (r) {
      t.super_ = r;
      var a = function() {
      };
      a.prototype = r.prototype, t.prototype = new a(), t.prototype.constructor = t;
    }
  }), V1.exports;
}
var Aa = { exports: {} }, wp;
function To() {
  if (wp)
    return Aa.exports;
  wp = 1;
  function e(r) {
    return r.charAt(0) === "/";
  }
  function t(r) {
    var a = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, i = a.exec(r), n = i[1] || "", o = !!(n && n.charAt(1) !== ":");
    return !!(i[2] || o);
  }
  return Aa.exports = process.platform === "win32" ? t : e, Aa.exports.posix = e, Aa.exports.win32 = t, Aa.exports;
}
var dt = {}, bp;
function nl() {
  if (bp)
    return dt;
  bp = 1, dt.alphasort = o, dt.alphasorti = n, dt.setopts = u, dt.ownProp = e, dt.makeAbs = v, dt.finish = c, dt.mark = h, dt.isIgnored = g, dt.childrenIgnored = w;
  function e(f, y) {
    return Object.prototype.hasOwnProperty.call(f, y);
  }
  var t = ye, r = Ei, a = To(), i = r.Minimatch;
  function n(f, y) {
    return f.toLowerCase().localeCompare(y.toLowerCase());
  }
  function o(f, y) {
    return f.localeCompare(y);
  }
  function p(f, y) {
    f.ignore = y.ignore || [], Array.isArray(f.ignore) || (f.ignore = [f.ignore]), f.ignore.length && (f.ignore = f.ignore.map(l));
  }
  function l(f) {
    var y = null;
    if (f.slice(-3) === "/**") {
      var E = f.replace(/(\/\*\*)+$/, "");
      y = new i(E, { dot: !0 });
    }
    return {
      matcher: new i(f, { dot: !0 }),
      gmatcher: y
    };
  }
  function u(f, y, E) {
    if (E || (E = {}), E.matchBase && y.indexOf("/") === -1) {
      if (E.noglobstar)
        throw new Error("base matching requires globstar");
      y = "**/" + y;
    }
    f.silent = !!E.silent, f.pattern = y, f.strict = E.strict !== !1, f.realpath = !!E.realpath, f.realpathCache = E.realpathCache || /* @__PURE__ */ Object.create(null), f.follow = !!E.follow, f.dot = !!E.dot, f.mark = !!E.mark, f.nodir = !!E.nodir, f.nodir && (f.mark = !0), f.sync = !!E.sync, f.nounique = !!E.nounique, f.nonull = !!E.nonull, f.nosort = !!E.nosort, f.nocase = !!E.nocase, f.stat = !!E.stat, f.noprocess = !!E.noprocess, f.absolute = !!E.absolute, f.maxLength = E.maxLength || 1 / 0, f.cache = E.cache || /* @__PURE__ */ Object.create(null), f.statCache = E.statCache || /* @__PURE__ */ Object.create(null), f.symlinks = E.symlinks || /* @__PURE__ */ Object.create(null), p(f, E), f.changedCwd = !1;
    var N = process.cwd();
    e(E, "cwd") ? (f.cwd = t.resolve(E.cwd), f.changedCwd = f.cwd !== N) : f.cwd = N, f.root = E.root || t.resolve(f.cwd, "/"), f.root = t.resolve(f.root), process.platform === "win32" && (f.root = f.root.replace(/\\/g, "/")), f.cwdAbs = a(f.cwd) ? f.cwd : v(f, f.cwd), process.platform === "win32" && (f.cwdAbs = f.cwdAbs.replace(/\\/g, "/")), f.nomount = !!E.nomount, E.nonegate = !0, E.nocomment = !0, f.minimatch = new i(y, E), f.options = f.minimatch.options;
  }
  function c(f) {
    for (var y = f.nounique, E = y ? [] : /* @__PURE__ */ Object.create(null), N = 0, F = f.matches.length; N < F; N++) {
      var U = f.matches[N];
      if (!U || Object.keys(U).length === 0) {
        if (f.nonull) {
          var P = f.minimatch.globSet[N];
          y ? E.push(P) : E[P] = !0;
        }
      } else {
        var O = Object.keys(U);
        y ? E.push.apply(E, O) : O.forEach(function(C) {
          E[C] = !0;
        });
      }
    }
    if (y || (E = Object.keys(E)), f.nosort || (E = E.sort(f.nocase ? n : o)), f.mark) {
      for (var N = 0; N < E.length; N++)
        E[N] = f._mark(E[N]);
      f.nodir && (E = E.filter(function(C) {
        var A = !/\/$/.test(C), T = f.cache[C] || f.cache[v(f, C)];
        return A && T && (A = T !== "DIR" && !Array.isArray(T)), A;
      }));
    }
    f.ignore.length && (E = E.filter(function(C) {
      return !g(f, C);
    })), f.found = E;
  }
  function h(f, y) {
    var E = v(f, y), N = f.cache[E], F = y;
    if (N) {
      var U = N === "DIR" || Array.isArray(N), P = y.slice(-1) === "/";
      if (U && !P ? F += "/" : !U && P && (F = F.slice(0, -1)), F !== y) {
        var O = v(f, F);
        f.statCache[O] = f.statCache[E], f.cache[O] = f.cache[E];
      }
    }
    return F;
  }
  function v(f, y) {
    var E = y;
    return y.charAt(0) === "/" ? E = t.join(f.root, y) : a(y) || y === "" ? E = y : f.changedCwd ? E = t.resolve(f.cwd, y) : E = t.resolve(y), process.platform === "win32" && (E = E.replace(/\\/g, "/")), E;
  }
  function g(f, y) {
    return f.ignore.length ? f.ignore.some(function(E) {
      return E.matcher.match(y) || !!(E.gmatcher && E.gmatcher.match(y));
    }) : !1;
  }
  function w(f, y) {
    return f.ignore.length ? f.ignore.some(function(E) {
      return !!(E.gmatcher && E.gmatcher.match(y));
    }) : !1;
  }
  return dt;
}
var Sn, _p;
function mu() {
  if (_p)
    return Sn;
  _p = 1, Sn = h, h.GlobSync = v;
  var e = Ve, t = Kd(), r = Ei;
  r.Minimatch, ul().Glob;
  var a = ye, i = Sr, n = To(), o = nl();
  o.alphasort, o.alphasorti;
  var p = o.setopts, l = o.ownProp, u = o.childrenIgnored, c = o.isIgnored;
  function h(g, w) {
    if (typeof w == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    return new v(g, w).found;
  }
  function v(g, w) {
    if (!g)
      throw new Error("must provide pattern");
    if (typeof w == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    if (!(this instanceof v))
      return new v(g, w);
    if (p(this, g, w), this.noprocess)
      return this;
    var f = this.minimatch.set.length;
    this.matches = new Array(f);
    for (var y = 0; y < f; y++)
      this._process(this.minimatch.set[y], y, !1);
    this._finish();
  }
  return v.prototype._finish = function() {
    if (i(this instanceof v), this.realpath) {
      var g = this;
      this.matches.forEach(function(w, f) {
        var y = g.matches[f] = /* @__PURE__ */ Object.create(null);
        for (var E in w)
          try {
            E = g._makeAbs(E);
            var N = t.realpathSync(E, g.realpathCache);
            y[N] = !0;
          } catch (F) {
            if (F.syscall === "stat")
              y[g._makeAbs(E)] = !0;
            else
              throw F;
          }
      });
    }
    o.finish(this);
  }, v.prototype._process = function(g, w, f) {
    i(this instanceof v);
    for (var y = 0; typeof g[y] == "string"; )
      y++;
    var E;
    switch (y) {
      case g.length:
        this._processSimple(g.join("/"), w);
        return;
      case 0:
        E = null;
        break;
      default:
        E = g.slice(0, y).join("/");
        break;
    }
    var N = g.slice(y), F;
    E === null ? F = "." : ((n(E) || n(g.join("/"))) && (!E || !n(E)) && (E = "/" + E), F = E);
    var U = this._makeAbs(F);
    if (!u(this, F)) {
      var P = N[0] === r.GLOBSTAR;
      P ? this._processGlobStar(E, F, U, N, w, f) : this._processReaddir(E, F, U, N, w, f);
    }
  }, v.prototype._processReaddir = function(g, w, f, y, E, N) {
    var F = this._readdir(f, N);
    if (F) {
      for (var U = y[0], P = !!this.minimatch.negate, O = U._glob, C = this.dot || O.charAt(0) === ".", A = [], T = 0; T < F.length; T++) {
        var R = F[T];
        if (R.charAt(0) !== "." || C) {
          var x;
          P && !g ? x = !R.match(U) : x = R.match(U), x && A.push(R);
        }
      }
      var L = A.length;
      if (L !== 0) {
        if (y.length === 1 && !this.mark && !this.stat) {
          this.matches[E] || (this.matches[E] = /* @__PURE__ */ Object.create(null));
          for (var T = 0; T < L; T++) {
            var R = A[T];
            g && (g.slice(-1) !== "/" ? R = g + "/" + R : R = g + R), R.charAt(0) === "/" && !this.nomount && (R = a.join(this.root, R)), this._emitMatch(E, R);
          }
          return;
        }
        y.shift();
        for (var T = 0; T < L; T++) {
          var R = A[T], M;
          g ? M = [g, R] : M = [R], this._process(M.concat(y), E, N);
        }
      }
    }
  }, v.prototype._emitMatch = function(g, w) {
    if (!c(this, w)) {
      var f = this._makeAbs(w);
      if (this.mark && (w = this._mark(w)), this.absolute && (w = f), !this.matches[g][w]) {
        if (this.nodir) {
          var y = this.cache[f];
          if (y === "DIR" || Array.isArray(y))
            return;
        }
        this.matches[g][w] = !0, this.stat && this._stat(w);
      }
    }
  }, v.prototype._readdirInGlobStar = function(g) {
    if (this.follow)
      return this._readdir(g, !1);
    var w, f;
    try {
      f = e.lstatSync(g);
    } catch (E) {
      if (E.code === "ENOENT")
        return null;
    }
    var y = f && f.isSymbolicLink();
    return this.symlinks[g] = y, !y && f && !f.isDirectory() ? this.cache[g] = "FILE" : w = this._readdir(g, !1), w;
  }, v.prototype._readdir = function(g, w) {
    if (w && !l(this.symlinks, g))
      return this._readdirInGlobStar(g);
    if (l(this.cache, g)) {
      var f = this.cache[g];
      if (!f || f === "FILE")
        return null;
      if (Array.isArray(f))
        return f;
    }
    try {
      return this._readdirEntries(g, e.readdirSync(g));
    } catch (y) {
      return this._readdirError(g, y), null;
    }
  }, v.prototype._readdirEntries = function(g, w) {
    if (!this.mark && !this.stat)
      for (var f = 0; f < w.length; f++) {
        var y = w[f];
        g === "/" ? y = g + y : y = g + "/" + y, this.cache[y] = !0;
      }
    return this.cache[g] = w, w;
  }, v.prototype._readdirError = function(g, w) {
    switch (w.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var f = this._makeAbs(g);
        if (this.cache[f] = "FILE", f === this.cwdAbs) {
          var y = new Error(w.code + " invalid cwd " + this.cwd);
          throw y.path = this.cwd, y.code = w.code, y;
        }
        break;
      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(g)] = !1;
        break;
      default:
        if (this.cache[this._makeAbs(g)] = !1, this.strict)
          throw w;
        this.silent || console.error("glob error", w);
        break;
    }
  }, v.prototype._processGlobStar = function(g, w, f, y, E, N) {
    var F = this._readdir(f, N);
    if (F) {
      var U = y.slice(1), P = g ? [g] : [], O = P.concat(U);
      this._process(O, E, !1);
      var C = F.length, A = this.symlinks[f];
      if (!(A && N))
        for (var T = 0; T < C; T++) {
          var R = F[T];
          if (!(R.charAt(0) === "." && !this.dot)) {
            var x = P.concat(F[T], U);
            this._process(x, E, !0);
            var L = P.concat(F[T], y);
            this._process(L, E, !0);
          }
        }
    }
  }, v.prototype._processSimple = function(g, w) {
    var f = this._stat(g);
    if (this.matches[w] || (this.matches[w] = /* @__PURE__ */ Object.create(null)), !!f) {
      if (g && n(g) && !this.nomount) {
        var y = /[\/\\]$/.test(g);
        g.charAt(0) === "/" ? g = a.join(this.root, g) : (g = a.resolve(this.root, g), y && (g += "/"));
      }
      process.platform === "win32" && (g = g.replace(/\\/g, "/")), this._emitMatch(w, g);
    }
  }, v.prototype._stat = function(g) {
    var w = this._makeAbs(g), f = g.slice(-1) === "/";
    if (g.length > this.maxLength)
      return !1;
    if (!this.stat && l(this.cache, w)) {
      var N = this.cache[w];
      if (Array.isArray(N) && (N = "DIR"), !f || N === "DIR")
        return N;
      if (f && N === "FILE")
        return !1;
    }
    var y = this.statCache[w];
    if (!y) {
      var E;
      try {
        E = e.lstatSync(w);
      } catch (F) {
        if (F && (F.code === "ENOENT" || F.code === "ENOTDIR"))
          return this.statCache[w] = !1, !1;
      }
      if (E && E.isSymbolicLink())
        try {
          y = e.statSync(w);
        } catch {
          y = E;
        }
      else
        y = E;
    }
    this.statCache[w] = y;
    var N = !0;
    return y && (N = y.isDirectory() ? "DIR" : "FILE"), this.cache[w] = this.cache[w] || N, f && N === "FILE" ? !1 : N;
  }, v.prototype._mark = function(g) {
    return o.mark(this, g);
  }, v.prototype._makeAbs = function(g) {
    return o.makeAbs(this, g);
  }, Sn;
}
var ol = sl;
function sl(e, t) {
  if (e && t)
    return sl(e)(t);
  if (typeof e != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(e).forEach(function(a) {
    r[a] = e[a];
  }), r;
  function r() {
    for (var a = new Array(arguments.length), i = 0; i < a.length; i++)
      a[i] = arguments[i];
    var n = e.apply(this, a), o = a[a.length - 1];
    return typeof n == "function" && n !== o && Object.keys(o).forEach(function(p) {
      n[p] = o[p];
    }), n;
  }
}
var Ao = { exports: {} }, pl = ol;
Ao.exports = pl(Q1);
Ao.exports.strict = pl(dl);
Q1.proto = Q1(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return Q1(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return dl(this);
    },
    configurable: !0
  });
});
function Q1(e) {
  var t = function() {
    return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
  };
  return t.called = !1, t;
}
function dl(e) {
  var t = function() {
    if (t.called)
      throw new Error(t.onceError);
    return t.called = !0, t.value = e.apply(this, arguments);
  }, r = e.name || "Function wrapped with `once`";
  return t.onceError = r + " shouldn't be called more than once", t.called = !1, t;
}
var Co = Ao.exports;
const ll = /* @__PURE__ */ vo(Co);
var Tn, yp;
function fu() {
  if (yp)
    return Tn;
  yp = 1;
  var e = ol, t = /* @__PURE__ */ Object.create(null), r = Co;
  Tn = e(a);
  function a(o, p) {
    return t[o] ? (t[o].push(p), null) : (t[o] = [p], i(o));
  }
  function i(o) {
    return r(function p() {
      var l = t[o], u = l.length, c = n(arguments);
      try {
        for (var h = 0; h < u; h++)
          l[h].apply(null, c);
      } finally {
        l.length > u ? (l.splice(0, u), process.nextTick(function() {
          p.apply(null, c);
        })) : delete t[o];
      }
    });
  }
  function n(o) {
    for (var p = o.length, l = [], u = 0; u < p; u++)
      l[u] = o[u];
    return l;
  }
  return Tn;
}
var An, Ep;
function ul() {
  if (Ep)
    return An;
  Ep = 1, An = y;
  var e = Ve, t = Kd(), r = Ei;
  r.Minimatch;
  var a = cu(), i = go.EventEmitter, n = ye, o = Sr, p = To(), l = mu(), u = nl();
  u.alphasort, u.alphasorti;
  var c = u.setopts, h = u.ownProp, v = fu(), g = u.childrenIgnored, w = u.isIgnored, f = Co;
  function y(P, O, C) {
    if (typeof O == "function" && (C = O, O = {}), O || (O = {}), O.sync) {
      if (C)
        throw new TypeError("callback provided to sync glob");
      return l(P, O);
    }
    return new F(P, O, C);
  }
  y.sync = l;
  var E = y.GlobSync = l.GlobSync;
  y.glob = y;
  function N(P, O) {
    if (O === null || typeof O != "object")
      return P;
    for (var C = Object.keys(O), A = C.length; A--; )
      P[C[A]] = O[C[A]];
    return P;
  }
  y.hasMagic = function(P, O) {
    var C = N({}, O);
    C.noprocess = !0;
    var A = new F(P, C), T = A.minimatch.set;
    if (!P)
      return !1;
    if (T.length > 1)
      return !0;
    for (var R = 0; R < T[0].length; R++)
      if (typeof T[0][R] != "string")
        return !0;
    return !1;
  }, y.Glob = F, a(F, i);
  function F(P, O, C) {
    if (typeof O == "function" && (C = O, O = null), O && O.sync) {
      if (C)
        throw new TypeError("callback provided to sync glob");
      return new E(P, O);
    }
    if (!(this instanceof F))
      return new F(P, O, C);
    c(this, P, O), this._didRealPath = !1;
    var A = this.minimatch.set.length;
    this.matches = new Array(A), typeof C == "function" && (C = f(C), this.on("error", C), this.on("end", function(M) {
      C(null, M);
    }));
    var T = this;
    if (this._processing = 0, this._emitQueue = [], this._processQueue = [], this.paused = !1, this.noprocess)
      return this;
    if (A === 0)
      return L();
    for (var R = !0, x = 0; x < A; x++)
      this._process(this.minimatch.set[x], x, !1, L);
    R = !1;
    function L() {
      --T._processing, T._processing <= 0 && (R ? process.nextTick(function() {
        T._finish();
      }) : T._finish());
    }
  }
  F.prototype._finish = function() {
    if (o(this instanceof F), !this.aborted) {
      if (this.realpath && !this._didRealpath)
        return this._realpath();
      u.finish(this), this.emit("end", this.found);
    }
  }, F.prototype._realpath = function() {
    if (this._didRealpath)
      return;
    this._didRealpath = !0;
    var P = this.matches.length;
    if (P === 0)
      return this._finish();
    for (var O = this, C = 0; C < this.matches.length; C++)
      this._realpathSet(C, A);
    function A() {
      --P === 0 && O._finish();
    }
  }, F.prototype._realpathSet = function(P, O) {
    var C = this.matches[P];
    if (!C)
      return O();
    var A = Object.keys(C), T = this, R = A.length;
    if (R === 0)
      return O();
    var x = this.matches[P] = /* @__PURE__ */ Object.create(null);
    A.forEach(function(L, M) {
      L = T._makeAbs(L), t.realpath(L, T.realpathCache, function(J, X) {
        J ? J.syscall === "stat" ? x[L] = !0 : T.emit("error", J) : x[X] = !0, --R === 0 && (T.matches[P] = x, O());
      });
    });
  }, F.prototype._mark = function(P) {
    return u.mark(this, P);
  }, F.prototype._makeAbs = function(P) {
    return u.makeAbs(this, P);
  }, F.prototype.abort = function() {
    this.aborted = !0, this.emit("abort");
  }, F.prototype.pause = function() {
    this.paused || (this.paused = !0, this.emit("pause"));
  }, F.prototype.resume = function() {
    if (this.paused) {
      if (this.emit("resume"), this.paused = !1, this._emitQueue.length) {
        var P = this._emitQueue.slice(0);
        this._emitQueue.length = 0;
        for (var O = 0; O < P.length; O++) {
          var C = P[O];
          this._emitMatch(C[0], C[1]);
        }
      }
      if (this._processQueue.length) {
        var A = this._processQueue.slice(0);
        this._processQueue.length = 0;
        for (var O = 0; O < A.length; O++) {
          var T = A[O];
          this._processing--, this._process(T[0], T[1], T[2], T[3]);
        }
      }
    }
  }, F.prototype._process = function(P, O, C, A) {
    if (o(this instanceof F), o(typeof A == "function"), !this.aborted) {
      if (this._processing++, this.paused) {
        this._processQueue.push([P, O, C, A]);
        return;
      }
      for (var T = 0; typeof P[T] == "string"; )
        T++;
      var R;
      switch (T) {
        case P.length:
          this._processSimple(P.join("/"), O, A);
          return;
        case 0:
          R = null;
          break;
        default:
          R = P.slice(0, T).join("/");
          break;
      }
      var x = P.slice(T), L;
      R === null ? L = "." : ((p(R) || p(P.join("/"))) && (!R || !p(R)) && (R = "/" + R), L = R);
      var M = this._makeAbs(L);
      if (g(this, L))
        return A();
      var J = x[0] === r.GLOBSTAR;
      J ? this._processGlobStar(R, L, M, x, O, C, A) : this._processReaddir(R, L, M, x, O, C, A);
    }
  }, F.prototype._processReaddir = function(P, O, C, A, T, R, x) {
    var L = this;
    this._readdir(C, R, function(M, J) {
      return L._processReaddir2(P, O, C, A, T, R, J, x);
    });
  }, F.prototype._processReaddir2 = function(P, O, C, A, T, R, x, L) {
    if (!x)
      return L();
    for (var M = A[0], J = !!this.minimatch.negate, X = M._glob, Q = this.dot || X.charAt(0) === ".", ne = [], ee = 0; ee < x.length; ee++) {
      var H = x[ee];
      if (H.charAt(0) !== "." || Q) {
        var j;
        J && !P ? j = !H.match(M) : j = H.match(M), j && ne.push(H);
      }
    }
    var K = ne.length;
    if (K === 0)
      return L();
    if (A.length === 1 && !this.mark && !this.stat) {
      this.matches[T] || (this.matches[T] = /* @__PURE__ */ Object.create(null));
      for (var ee = 0; ee < K; ee++) {
        var H = ne[ee];
        P && (P !== "/" ? H = P + "/" + H : H = P + H), H.charAt(0) === "/" && !this.nomount && (H = n.join(this.root, H)), this._emitMatch(T, H);
      }
      return L();
    }
    A.shift();
    for (var ee = 0; ee < K; ee++) {
      var H = ne[ee];
      P && (P !== "/" ? H = P + "/" + H : H = P + H), this._process([H].concat(A), T, R, L);
    }
    L();
  }, F.prototype._emitMatch = function(P, O) {
    if (!this.aborted && !w(this, O)) {
      if (this.paused) {
        this._emitQueue.push([P, O]);
        return;
      }
      var C = p(O) ? O : this._makeAbs(O);
      if (this.mark && (O = this._mark(O)), this.absolute && (O = C), !this.matches[P][O]) {
        if (this.nodir) {
          var A = this.cache[C];
          if (A === "DIR" || Array.isArray(A))
            return;
        }
        this.matches[P][O] = !0;
        var T = this.statCache[C];
        T && this.emit("stat", O, T), this.emit("match", O);
      }
    }
  }, F.prototype._readdirInGlobStar = function(P, O) {
    if (this.aborted)
      return;
    if (this.follow)
      return this._readdir(P, !1, O);
    var C = "lstat\0" + P, A = this, T = v(C, R);
    T && e.lstat(P, T);
    function R(x, L) {
      if (x && x.code === "ENOENT")
        return O();
      var M = L && L.isSymbolicLink();
      A.symlinks[P] = M, !M && L && !L.isDirectory() ? (A.cache[P] = "FILE", O()) : A._readdir(P, !1, O);
    }
  }, F.prototype._readdir = function(P, O, C) {
    if (!this.aborted && (C = v("readdir\0" + P + "\0" + O, C), !!C)) {
      if (O && !h(this.symlinks, P))
        return this._readdirInGlobStar(P, C);
      if (h(this.cache, P)) {
        var A = this.cache[P];
        if (!A || A === "FILE")
          return C();
        if (Array.isArray(A))
          return C(null, A);
      }
      e.readdir(P, U(this, P, C));
    }
  };
  function U(P, O, C) {
    return function(A, T) {
      A ? P._readdirError(O, A, C) : P._readdirEntries(O, T, C);
    };
  }
  return F.prototype._readdirEntries = function(P, O, C) {
    if (!this.aborted) {
      if (!this.mark && !this.stat)
        for (var A = 0; A < O.length; A++) {
          var T = O[A];
          P === "/" ? T = P + T : T = P + "/" + T, this.cache[T] = !0;
        }
      return this.cache[P] = O, C(null, O);
    }
  }, F.prototype._readdirError = function(P, O, C) {
    if (!this.aborted) {
      switch (O.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var A = this._makeAbs(P);
          if (this.cache[A] = "FILE", A === this.cwdAbs) {
            var T = new Error(O.code + " invalid cwd " + this.cwd);
            T.path = this.cwd, T.code = O.code, this.emit("error", T), this.abort();
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(P)] = !1;
          break;
        default:
          this.cache[this._makeAbs(P)] = !1, this.strict && (this.emit("error", O), this.abort()), this.silent || console.error("glob error", O);
          break;
      }
      return C();
    }
  }, F.prototype._processGlobStar = function(P, O, C, A, T, R, x) {
    var L = this;
    this._readdir(C, R, function(M, J) {
      L._processGlobStar2(P, O, C, A, T, R, J, x);
    });
  }, F.prototype._processGlobStar2 = function(P, O, C, A, T, R, x, L) {
    if (!x)
      return L();
    var M = A.slice(1), J = P ? [P] : [], X = J.concat(M);
    this._process(X, T, !1, L);
    var Q = this.symlinks[C], ne = x.length;
    if (Q && R)
      return L();
    for (var ee = 0; ee < ne; ee++) {
      var H = x[ee];
      if (!(H.charAt(0) === "." && !this.dot)) {
        var j = J.concat(x[ee], M);
        this._process(j, T, !0, L);
        var K = J.concat(x[ee], A);
        this._process(K, T, !0, L);
      }
    }
    L();
  }, F.prototype._processSimple = function(P, O, C) {
    var A = this;
    this._stat(P, function(T, R) {
      A._processSimple2(P, O, T, R, C);
    });
  }, F.prototype._processSimple2 = function(P, O, C, A, T) {
    if (this.matches[O] || (this.matches[O] = /* @__PURE__ */ Object.create(null)), !A)
      return T();
    if (P && p(P) && !this.nomount) {
      var R = /[\/\\]$/.test(P);
      P.charAt(0) === "/" ? P = n.join(this.root, P) : (P = n.resolve(this.root, P), R && (P += "/"));
    }
    process.platform === "win32" && (P = P.replace(/\\/g, "/")), this._emitMatch(O, P), T();
  }, F.prototype._stat = function(P, O) {
    var C = this._makeAbs(P), A = P.slice(-1) === "/";
    if (P.length > this.maxLength)
      return O();
    if (!this.stat && h(this.cache, C)) {
      var T = this.cache[C];
      if (Array.isArray(T) && (T = "DIR"), !A || T === "DIR")
        return O(null, T);
      if (A && T === "FILE")
        return O();
    }
    var R = this.statCache[C];
    if (R !== void 0) {
      if (R === !1)
        return O(null, R);
      var x = R.isDirectory() ? "DIR" : "FILE";
      return A && x === "FILE" ? O() : O(null, x, R);
    }
    var L = this, M = v("stat\0" + C, J);
    M && e.lstat(C, M);
    function J(X, Q) {
      if (Q && Q.isSymbolicLink())
        return e.stat(C, function(ne, ee) {
          ne ? L._stat2(P, C, null, Q, O) : L._stat2(P, C, ne, ee, O);
        });
      L._stat2(P, C, X, Q, O);
    }
  }, F.prototype._stat2 = function(P, O, C, A, T) {
    if (C && (C.code === "ENOENT" || C.code === "ENOTDIR"))
      return this.statCache[O] = !1, T();
    var R = P.slice(-1) === "/";
    if (this.statCache[O] = A, O.slice(-1) === "/" && A && !A.isDirectory())
      return T(null, !1, A);
    var x = !0;
    return A && (x = A.isDirectory() ? "DIR" : "FILE"), this.cache[O] = this.cache[O] || x, R && x === "FILE" ? T() : T(null, x, A);
  }, An;
}
const fe = Sr, cl = ye, Sp = Ve;
let Yr;
try {
  Yr = ul();
} catch {
}
const hu = {
  nosort: !0,
  silent: !0
};
let Cn = 0;
const Ga = process.platform === "win32", ml = (e) => {
  if ([
    "unlink",
    "chmod",
    "stat",
    "lstat",
    "rmdir",
    "readdir"
  ].forEach((r) => {
    e[r] = e[r] || Sp[r], r = r + "Sync", e[r] = e[r] || Sp[r];
  }), e.maxBusyTries = e.maxBusyTries || 3, e.emfileWait = e.emfileWait || 1e3, e.glob === !1 && (e.disableGlob = !0), e.disableGlob !== !0 && Yr === void 0)
    throw Error("glob dependency not found, set `options.disableGlob = true` if intentional");
  e.disableGlob = e.disableGlob || !1, e.glob = e.glob || hu;
}, Do = (e, t, r) => {
  typeof t == "function" && (r = t, t = {}), fe(e, "rimraf: missing path"), fe.equal(typeof e, "string", "rimraf: path should be a string"), fe.equal(typeof r, "function", "rimraf: callback function required"), fe(t, "rimraf: invalid options argument provided"), fe.equal(typeof t, "object", "rimraf: options should be object"), ml(t);
  let a = 0, i = null, n = 0;
  const o = (l) => {
    i = i || l, --n === 0 && r(i);
  }, p = (l, u) => {
    if (l)
      return r(l);
    if (n = u.length, n === 0)
      return r();
    u.forEach((c) => {
      const h = (v) => {
        if (v) {
          if ((v.code === "EBUSY" || v.code === "ENOTEMPTY" || v.code === "EPERM") && a < t.maxBusyTries)
            return a++, setTimeout(() => Dn(c, t, h), a * 100);
          if (v.code === "EMFILE" && Cn < t.emfileWait)
            return setTimeout(() => Dn(c, t, h), Cn++);
          v.code === "ENOENT" && (v = null);
        }
        Cn = 0, o(v);
      };
      Dn(c, t, h);
    });
  };
  if (t.disableGlob || !Yr.hasMagic(e))
    return p(null, [e]);
  t.lstat(e, (l, u) => {
    if (!l)
      return p(null, [e]);
    Yr(e, t.glob, p);
  });
}, Dn = (e, t, r) => {
  fe(e), fe(t), fe(typeof r == "function"), t.lstat(e, (a, i) => {
    if (a && a.code === "ENOENT")
      return r(null);
    if (a && a.code === "EPERM" && Ga && Tp(e, t, a, r), i && i.isDirectory())
      return J1(e, t, a, r);
    t.unlink(e, (n) => {
      if (n) {
        if (n.code === "ENOENT")
          return r(null);
        if (n.code === "EPERM")
          return Ga ? Tp(e, t, n, r) : J1(e, t, n, r);
        if (n.code === "EISDIR")
          return J1(e, t, n, r);
      }
      return r(n);
    });
  });
}, Tp = (e, t, r, a) => {
  fe(e), fe(t), fe(typeof a == "function"), t.chmod(e, 438, (i) => {
    i ? a(i.code === "ENOENT" ? null : r) : t.stat(e, (n, o) => {
      n ? a(n.code === "ENOENT" ? null : r) : o.isDirectory() ? J1(e, t, r, a) : t.unlink(e, a);
    });
  });
}, Ap = (e, t, r) => {
  fe(e), fe(t);
  try {
    t.chmodSync(e, 438);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw r;
  }
  let a;
  try {
    a = t.statSync(e);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw r;
  }
  a.isDirectory() ? Z1(e, t, r) : t.unlinkSync(e);
}, J1 = (e, t, r, a) => {
  fe(e), fe(t), fe(typeof a == "function"), t.rmdir(e, (i) => {
    i && (i.code === "ENOTEMPTY" || i.code === "EEXIST" || i.code === "EPERM") ? gu(e, t, a) : i && i.code === "ENOTDIR" ? a(r) : a(i);
  });
}, gu = (e, t, r) => {
  fe(e), fe(t), fe(typeof r == "function"), t.readdir(e, (a, i) => {
    if (a)
      return r(a);
    let n = i.length;
    if (n === 0)
      return t.rmdir(e, r);
    let o;
    i.forEach((p) => {
      Do(cl.join(e, p), t, (l) => {
        if (!o) {
          if (l)
            return r(o = l);
          --n === 0 && t.rmdir(e, r);
        }
      });
    });
  });
}, fl = (e, t) => {
  t = t || {}, ml(t), fe(e, "rimraf: missing path"), fe.equal(typeof e, "string", "rimraf: path should be a string"), fe(t, "rimraf: missing options"), fe.equal(typeof t, "object", "rimraf: options should be object");
  let r;
  if (t.disableGlob || !Yr.hasMagic(e))
    r = [e];
  else
    try {
      t.lstatSync(e), r = [e];
    } catch {
      r = Yr.sync(e, t.glob);
    }
  if (r.length)
    for (let a = 0; a < r.length; a++) {
      const i = r[a];
      let n;
      try {
        n = t.lstatSync(i);
      } catch (o) {
        if (o.code === "ENOENT")
          return;
        o.code === "EPERM" && Ga && Ap(i, t, o);
      }
      try {
        n && n.isDirectory() ? Z1(i, t, null) : t.unlinkSync(i);
      } catch (o) {
        if (o.code === "ENOENT")
          return;
        if (o.code === "EPERM")
          return Ga ? Ap(i, t, o) : Z1(i, t, o);
        if (o.code !== "EISDIR")
          throw o;
        Z1(i, t, o);
      }
    }
}, Z1 = (e, t, r) => {
  fe(e), fe(t);
  try {
    t.rmdirSync(e);
  } catch (a) {
    if (a.code === "ENOENT")
      return;
    if (a.code === "ENOTDIR")
      throw r;
    (a.code === "ENOTEMPTY" || a.code === "EEXIST" || a.code === "EPERM") && vu(e, t);
  }
}, vu = (e, t) => {
  fe(e), fe(t), t.readdirSync(e).forEach((i) => fl(cl.join(e, i), t));
  const r = Ga ? 100 : 1;
  let a = 0;
  do {
    let i = !0;
    try {
      const n = t.rmdirSync(e, t);
      return i = !1, n;
    } finally {
      if (++a < r && i)
        continue;
    }
  } while (!0);
};
var wu = Do;
Do.sync = fl;
/*!
 * Tmp
 *
 * Copyright (c) 2011-2017 KARASZI Istvan <github@spam.raszi.hu>
 *
 * MIT Licensed
 */
(function(e) {
  const t = Ve, r = Er, a = ye, i = fo, n = { fs: t.constants, os: r.constants }, o = wu, p = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", l = /XXXXXX/, u = 3, c = (n.O_CREAT || n.fs.O_CREAT) | (n.O_EXCL || n.fs.O_EXCL) | (n.O_RDWR || n.fs.O_RDWR), h = r.platform() === "win32", v = n.EBADF || n.os.errno.EBADF, g = n.ENOENT || n.os.errno.ENOENT, w = 448, f = 384, y = "exit", E = [], N = t.rmdirSync.bind(t), F = o.sync;
  let U = !1;
  function P(k, W) {
    const b = j(k, W), _ = b[0], I = b[1];
    try {
      re(_);
    } catch (q) {
      return I(q);
    }
    let V = _.tries;
    (function q() {
      try {
        const Y = K(_);
        t.stat(Y, function(pe) {
          if (!pe)
            return V-- > 0 ? q() : I(new Error("Could not get a unique tmp filename, max tries reached " + Y));
          I(null, Y);
        });
      } catch (Y) {
        I(Y);
      }
    })();
  }
  function O(k) {
    const W = j(k), b = W[0];
    re(b);
    let _ = b.tries;
    do {
      const I = K(b);
      try {
        t.statSync(I);
      } catch {
        return I;
      }
    } while (_-- > 0);
    throw new Error("Could not get a unique tmp filename, max tries reached");
  }
  function C(k, W) {
    const b = j(k, W), _ = b[0], I = b[1];
    P(_, function(q, Y) {
      if (q)
        return I(q);
      t.open(Y, c, _.mode || f, function(Ce, Ee) {
        if (Ce)
          return I(Ce);
        if (_.discardDescriptor)
          return t.close(Ee, function(r1) {
            return I(r1, Y, void 0, M(Y, -1, _, !1));
          });
        {
          const ft = _.discardDescriptor || _.detachDescriptor;
          I(null, Y, Ee, M(Y, ft ? -1 : Ee, _, !1));
        }
      });
    });
  }
  function A(k) {
    const W = j(k), b = W[0], _ = b.discardDescriptor || b.detachDescriptor, I = O(b);
    var V = t.openSync(I, c, b.mode || f);
    return b.discardDescriptor && (t.closeSync(V), V = void 0), {
      name: I,
      fd: V,
      removeCallback: M(I, _ ? -1 : V, b, !0)
    };
  }
  function T(k, W) {
    const b = j(k, W), _ = b[0], I = b[1];
    P(_, function(q, Y) {
      if (q)
        return I(q);
      t.mkdir(Y, _.mode || w, function(Ce) {
        if (Ce)
          return I(Ce);
        I(null, Y, J(Y, _, !1));
      });
    });
  }
  function R(k) {
    const W = j(k), b = W[0], _ = O(b);
    return t.mkdirSync(_, b.mode || w), {
      name: _,
      removeCallback: J(_, b, !0)
    };
  }
  function x(k, W) {
    const b = function(_) {
      if (_ && !St(_))
        return W(_);
      W();
    };
    0 <= k[0] ? t.close(k[0], function() {
      t.unlink(k[1], b);
    }) : t.unlink(k[1], b);
  }
  function L(k) {
    let W = null;
    try {
      0 <= k[0] && t.closeSync(k[0]);
    } catch (b) {
      if (!it(b) && !St(b))
        throw b;
    } finally {
      try {
        t.unlinkSync(k[1]);
      } catch (b) {
        St(b) || (W = b);
      }
    }
    if (W !== null)
      throw W;
  }
  function M(k, W, b, _) {
    const I = X(L, [W, k], _), V = X(x, [W, k], _, I);
    return b.keep || E.unshift(I), _ ? I : V;
  }
  function J(k, W, b) {
    const _ = W.unsafeCleanup ? o : t.rmdir.bind(t), I = W.unsafeCleanup ? F : N, V = X(I, k, b), q = X(_, k, b, V);
    return W.keep || E.unshift(V), b ? V : q;
  }
  function X(k, W, b, _) {
    let I = !1;
    return function V(q) {
      if (!I) {
        const Y = _ || V, pe = E.indexOf(Y);
        return pe >= 0 && E.splice(pe, 1), I = !0, b || k === N || k === F ? k(W) : k(W, q || function() {
        });
      }
    };
  }
  function Q() {
    if (U)
      for (; E.length; )
        try {
          E[0]();
        } catch {
        }
  }
  function ne(k) {
    let W = [], b = null;
    try {
      b = i.randomBytes(k);
    } catch {
      b = i.pseudoRandomBytes(k);
    }
    for (var _ = 0; _ < k; _++)
      W.push(p[b[_] % p.length]);
    return W.join("");
  }
  function ee(k) {
    return k === null || H(k) || !k.trim();
  }
  function H(k) {
    return typeof k > "u";
  }
  function j(k, W) {
    if (typeof k == "function")
      return [{}, k];
    if (H(k))
      return [{}, W];
    const b = {};
    for (const _ of Object.getOwnPropertyNames(k))
      b[_] = k[_];
    return [b, W];
  }
  function K(k) {
    const W = k.tmpdir;
    if (!H(k.name))
      return a.join(W, k.dir, k.name);
    if (!H(k.template))
      return a.join(W, k.dir, k.template).replace(l, ne(6));
    const b = [
      k.prefix ? k.prefix : "tmp",
      "-",
      process.pid,
      "-",
      ne(12),
      k.postfix ? "-" + k.postfix : ""
    ].join("");
    return a.join(W, k.dir, b);
  }
  function re(k) {
    k.tmpdir = qe(k);
    const W = k.tmpdir;
    if (H(k.name) || Ge(k.name, "name", W), H(k.dir) || Ge(k.dir, "dir", W), !H(k.template) && (Ge(k.template, "template", W), !k.template.match(l)))
      throw new Error(`Invalid template, found "${k.template}".`);
    if (!H(k.tries) && isNaN(k.tries) || k.tries < 0)
      throw new Error(`Invalid tries, found "${k.tries}".`);
    k.tries = H(k.name) ? k.tries || u : 1, k.keep = !!k.keep, k.detachDescriptor = !!k.detachDescriptor, k.discardDescriptor = !!k.discardDescriptor, k.unsafeCleanup = !!k.unsafeCleanup, k.dir = H(k.dir) ? "" : a.relative(W, ce(k.dir, W)), k.template = H(k.template) ? void 0 : a.relative(W, ce(k.template, W)), k.template = ee(k.template) ? void 0 : a.relative(k.dir, k.template), k.name = H(k.name) ? void 0 : Me(k.name), k.prefix = H(k.prefix) ? "" : k.prefix, k.postfix = H(k.postfix) ? "" : k.postfix;
  }
  function ce(k, W) {
    const b = Me(k);
    return b.startsWith(W) ? a.resolve(b) : a.resolve(a.join(W, b));
  }
  function Me(k) {
    return ee(k) ? k : k.replace(/["']/g, "");
  }
  function Ge(k, W, b) {
    if (W === "name") {
      if (a.isAbsolute(k))
        throw new Error(`${W} option must not contain an absolute path, found "${k}".`);
      let _ = a.basename(k);
      if (_ === ".." || _ === "." || _ !== k)
        throw new Error(`${W} option must not contain a path, found "${k}".`);
    } else {
      if (a.isAbsolute(k) && !k.startsWith(b))
        throw new Error(`${W} option must be relative to "${b}", found "${k}".`);
      let _ = ce(k, b);
      if (!_.startsWith(b))
        throw new Error(`${W} option must be relative to "${b}", found "${_}".`);
    }
  }
  function it(k) {
    return Oe(k, -v, "EBADF");
  }
  function St(k) {
    return Oe(k, -g, "ENOENT");
  }
  function Oe(k, W, b) {
    return h ? k.code === b : k.code === b && k.errno === W;
  }
  function ae() {
    U = !0;
  }
  function qe(k) {
    return a.resolve(Me(k && k.tmpdir || r.tmpdir()));
  }
  process.addListener(y, Q), Object.defineProperty(e.exports, "tmpdir", {
    enumerable: !0,
    configurable: !1,
    get: function() {
      return qe();
    }
  }), e.exports.dir = T, e.exports.dirSync = R, e.exports.file = C, e.exports.fileSync = A, e.exports.tmpName = P, e.exports.tmpNameSync = O, e.exports.setGracefulCleanup = ae;
})(Hd);
var bu = Hd.exports;
(function(e) {
  const { promisify: t } = Ya, r = bu;
  e.exports.fileSync = r.fileSync;
  const a = t(
    (n, o) => r.file(
      n,
      (p, l, u, c) => p ? o(p) : o(void 0, { path: l, fd: u, cleanup: t(c) })
    )
  );
  e.exports.file = async (n) => a(n), e.exports.withFile = async function(o, p) {
    const { path: l, fd: u, cleanup: c } = await e.exports.file(p);
    try {
      return await o({ path: l, fd: u });
    } finally {
      await c();
    }
  }, e.exports.dirSync = r.dirSync;
  const i = t(
    (n, o) => r.dir(
      n,
      (p, l, u) => p ? o(p) : o(void 0, { path: l, cleanup: t(u) })
    )
  );
  e.exports.dir = async (n) => i(n), e.exports.withDir = async function(o, p) {
    const { path: l, cleanup: u } = await e.exports.dir(p);
    try {
      return await o({ path: l });
    } finally {
      await u();
    }
  }, e.exports.tmpNameSync = r.tmpNameSync, e.exports.tmpName = t(r.tmpName), e.exports.tmpdir = r.tmpdir, e.exports.setGracefulCleanup = r.setGracefulCleanup;
})(zd);
var _u = zd.exports, te = {}, me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.getRetentionDays = me.getWorkSpaceDirectory = me.getWorkFlowRunId = me.getRuntimeUrl = me.getRuntimeToken = me.getDownloadFileConcurrency = me.getInitialRetryIntervalInMilliseconds = me.getRetryMultiplier = me.getRetryLimit = me.getUploadChunkSize = me.getUploadFileConcurrency = void 0;
function yu() {
  return 2;
}
me.getUploadFileConcurrency = yu;
function Eu() {
  return 8 * 1024 * 1024;
}
me.getUploadChunkSize = Eu;
function Su() {
  return 5;
}
me.getRetryLimit = Su;
function Tu() {
  return 1.5;
}
me.getRetryMultiplier = Tu;
function Au() {
  return 3e3;
}
me.getInitialRetryIntervalInMilliseconds = Au;
function Cu() {
  return 2;
}
me.getDownloadFileConcurrency = Cu;
function Du() {
  const e = process.env.ACTIONS_RUNTIME_TOKEN;
  if (!e)
    throw new Error("Unable to get ACTIONS_RUNTIME_TOKEN env variable");
  return e;
}
me.getRuntimeToken = Du;
function Ru() {
  const e = process.env.ACTIONS_RUNTIME_URL;
  if (!e)
    throw new Error("Unable to get ACTIONS_RUNTIME_URL env variable");
  return e;
}
me.getRuntimeUrl = Ru;
function Pu() {
  const e = process.env.GITHUB_RUN_ID;
  if (!e)
    throw new Error("Unable to get GITHUB_RUN_ID env variable");
  return e;
}
me.getWorkFlowRunId = Pu;
function Ou() {
  const e = process.env.GITHUB_WORKSPACE;
  if (!e)
    throw new Error("Unable to get GITHUB_WORKSPACE env variable");
  return e;
}
me.getWorkSpaceDirectory = Ou;
function Bu() {
  return process.env.GITHUB_RETENTION_DAYS;
}
me.getRetentionDays = Bu;
var Ro = {};
Object.defineProperty(Ro, "__esModule", { value: !0 });
const Fu = [
  BigInt("0x0000000000000000"),
  BigInt("0x7F6EF0C830358979"),
  BigInt("0xFEDDE190606B12F2"),
  BigInt("0x81B31158505E9B8B"),
  BigInt("0xC962E5739841B68F"),
  BigInt("0xB60C15BBA8743FF6"),
  BigInt("0x37BF04E3F82AA47D"),
  BigInt("0x48D1F42BC81F2D04"),
  BigInt("0xA61CECB46814FE75"),
  BigInt("0xD9721C7C5821770C"),
  BigInt("0x58C10D24087FEC87"),
  BigInt("0x27AFFDEC384A65FE"),
  BigInt("0x6F7E09C7F05548FA"),
  BigInt("0x1010F90FC060C183"),
  BigInt("0x91A3E857903E5A08"),
  BigInt("0xEECD189FA00BD371"),
  BigInt("0x78E0FF3B88BE6F81"),
  BigInt("0x078E0FF3B88BE6F8"),
  BigInt("0x863D1EABE8D57D73"),
  BigInt("0xF953EE63D8E0F40A"),
  BigInt("0xB1821A4810FFD90E"),
  BigInt("0xCEECEA8020CA5077"),
  BigInt("0x4F5FFBD87094CBFC"),
  BigInt("0x30310B1040A14285"),
  BigInt("0xDEFC138FE0AA91F4"),
  BigInt("0xA192E347D09F188D"),
  BigInt("0x2021F21F80C18306"),
  BigInt("0x5F4F02D7B0F40A7F"),
  BigInt("0x179EF6FC78EB277B"),
  BigInt("0x68F0063448DEAE02"),
  BigInt("0xE943176C18803589"),
  BigInt("0x962DE7A428B5BCF0"),
  BigInt("0xF1C1FE77117CDF02"),
  BigInt("0x8EAF0EBF2149567B"),
  BigInt("0x0F1C1FE77117CDF0"),
  BigInt("0x7072EF2F41224489"),
  BigInt("0x38A31B04893D698D"),
  BigInt("0x47CDEBCCB908E0F4"),
  BigInt("0xC67EFA94E9567B7F"),
  BigInt("0xB9100A5CD963F206"),
  BigInt("0x57DD12C379682177"),
  BigInt("0x28B3E20B495DA80E"),
  BigInt("0xA900F35319033385"),
  BigInt("0xD66E039B2936BAFC"),
  BigInt("0x9EBFF7B0E12997F8"),
  BigInt("0xE1D10778D11C1E81"),
  BigInt("0x606216208142850A"),
  BigInt("0x1F0CE6E8B1770C73"),
  BigInt("0x8921014C99C2B083"),
  BigInt("0xF64FF184A9F739FA"),
  BigInt("0x77FCE0DCF9A9A271"),
  BigInt("0x08921014C99C2B08"),
  BigInt("0x4043E43F0183060C"),
  BigInt("0x3F2D14F731B68F75"),
  BigInt("0xBE9E05AF61E814FE"),
  BigInt("0xC1F0F56751DD9D87"),
  BigInt("0x2F3DEDF8F1D64EF6"),
  BigInt("0x50531D30C1E3C78F"),
  BigInt("0xD1E00C6891BD5C04"),
  BigInt("0xAE8EFCA0A188D57D"),
  BigInt("0xE65F088B6997F879"),
  BigInt("0x9931F84359A27100"),
  BigInt("0x1882E91B09FCEA8B"),
  BigInt("0x67EC19D339C963F2"),
  BigInt("0xD75ADABD7A6E2D6F"),
  BigInt("0xA8342A754A5BA416"),
  BigInt("0x29873B2D1A053F9D"),
  BigInt("0x56E9CBE52A30B6E4"),
  BigInt("0x1E383FCEE22F9BE0"),
  BigInt("0x6156CF06D21A1299"),
  BigInt("0xE0E5DE5E82448912"),
  BigInt("0x9F8B2E96B271006B"),
  BigInt("0x71463609127AD31A"),
  BigInt("0x0E28C6C1224F5A63"),
  BigInt("0x8F9BD7997211C1E8"),
  BigInt("0xF0F5275142244891"),
  BigInt("0xB824D37A8A3B6595"),
  BigInt("0xC74A23B2BA0EECEC"),
  BigInt("0x46F932EAEA507767"),
  BigInt("0x3997C222DA65FE1E"),
  BigInt("0xAFBA2586F2D042EE"),
  BigInt("0xD0D4D54EC2E5CB97"),
  BigInt("0x5167C41692BB501C"),
  BigInt("0x2E0934DEA28ED965"),
  BigInt("0x66D8C0F56A91F461"),
  BigInt("0x19B6303D5AA47D18"),
  BigInt("0x980521650AFAE693"),
  BigInt("0xE76BD1AD3ACF6FEA"),
  BigInt("0x09A6C9329AC4BC9B"),
  BigInt("0x76C839FAAAF135E2"),
  BigInt("0xF77B28A2FAAFAE69"),
  BigInt("0x8815D86ACA9A2710"),
  BigInt("0xC0C42C4102850A14"),
  BigInt("0xBFAADC8932B0836D"),
  BigInt("0x3E19CDD162EE18E6"),
  BigInt("0x41773D1952DB919F"),
  BigInt("0x269B24CA6B12F26D"),
  BigInt("0x59F5D4025B277B14"),
  BigInt("0xD846C55A0B79E09F"),
  BigInt("0xA72835923B4C69E6"),
  BigInt("0xEFF9C1B9F35344E2"),
  BigInt("0x90973171C366CD9B"),
  BigInt("0x1124202993385610"),
  BigInt("0x6E4AD0E1A30DDF69"),
  BigInt("0x8087C87E03060C18"),
  BigInt("0xFFE938B633338561"),
  BigInt("0x7E5A29EE636D1EEA"),
  BigInt("0x0134D92653589793"),
  BigInt("0x49E52D0D9B47BA97"),
  BigInt("0x368BDDC5AB7233EE"),
  BigInt("0xB738CC9DFB2CA865"),
  BigInt("0xC8563C55CB19211C"),
  BigInt("0x5E7BDBF1E3AC9DEC"),
  BigInt("0x21152B39D3991495"),
  BigInt("0xA0A63A6183C78F1E"),
  BigInt("0xDFC8CAA9B3F20667"),
  BigInt("0x97193E827BED2B63"),
  BigInt("0xE877CE4A4BD8A21A"),
  BigInt("0x69C4DF121B863991"),
  BigInt("0x16AA2FDA2BB3B0E8"),
  BigInt("0xF86737458BB86399"),
  BigInt("0x8709C78DBB8DEAE0"),
  BigInt("0x06BAD6D5EBD3716B"),
  BigInt("0x79D4261DDBE6F812"),
  BigInt("0x3105D23613F9D516"),
  BigInt("0x4E6B22FE23CC5C6F"),
  BigInt("0xCFD833A67392C7E4"),
  BigInt("0xB0B6C36E43A74E9D"),
  BigInt("0x9A6C9329AC4BC9B5"),
  BigInt("0xE50263E19C7E40CC"),
  BigInt("0x64B172B9CC20DB47"),
  BigInt("0x1BDF8271FC15523E"),
  BigInt("0x530E765A340A7F3A"),
  BigInt("0x2C608692043FF643"),
  BigInt("0xADD397CA54616DC8"),
  BigInt("0xD2BD67026454E4B1"),
  BigInt("0x3C707F9DC45F37C0"),
  BigInt("0x431E8F55F46ABEB9"),
  BigInt("0xC2AD9E0DA4342532"),
  BigInt("0xBDC36EC59401AC4B"),
  BigInt("0xF5129AEE5C1E814F"),
  BigInt("0x8A7C6A266C2B0836"),
  BigInt("0x0BCF7B7E3C7593BD"),
  BigInt("0x74A18BB60C401AC4"),
  BigInt("0xE28C6C1224F5A634"),
  BigInt("0x9DE29CDA14C02F4D"),
  BigInt("0x1C518D82449EB4C6"),
  BigInt("0x633F7D4A74AB3DBF"),
  BigInt("0x2BEE8961BCB410BB"),
  BigInt("0x548079A98C8199C2"),
  BigInt("0xD53368F1DCDF0249"),
  BigInt("0xAA5D9839ECEA8B30"),
  BigInt("0x449080A64CE15841"),
  BigInt("0x3BFE706E7CD4D138"),
  BigInt("0xBA4D61362C8A4AB3"),
  BigInt("0xC52391FE1CBFC3CA"),
  BigInt("0x8DF265D5D4A0EECE"),
  BigInt("0xF29C951DE49567B7"),
  BigInt("0x732F8445B4CBFC3C"),
  BigInt("0x0C41748D84FE7545"),
  BigInt("0x6BAD6D5EBD3716B7"),
  BigInt("0x14C39D968D029FCE"),
  BigInt("0x95708CCEDD5C0445"),
  BigInt("0xEA1E7C06ED698D3C"),
  BigInt("0xA2CF882D2576A038"),
  BigInt("0xDDA178E515432941"),
  BigInt("0x5C1269BD451DB2CA"),
  BigInt("0x237C997575283BB3"),
  BigInt("0xCDB181EAD523E8C2"),
  BigInt("0xB2DF7122E51661BB"),
  BigInt("0x336C607AB548FA30"),
  BigInt("0x4C0290B2857D7349"),
  BigInt("0x04D364994D625E4D"),
  BigInt("0x7BBD94517D57D734"),
  BigInt("0xFA0E85092D094CBF"),
  BigInt("0x856075C11D3CC5C6"),
  BigInt("0x134D926535897936"),
  BigInt("0x6C2362AD05BCF04F"),
  BigInt("0xED9073F555E26BC4"),
  BigInt("0x92FE833D65D7E2BD"),
  BigInt("0xDA2F7716ADC8CFB9"),
  BigInt("0xA54187DE9DFD46C0"),
  BigInt("0x24F29686CDA3DD4B"),
  BigInt("0x5B9C664EFD965432"),
  BigInt("0xB5517ED15D9D8743"),
  BigInt("0xCA3F8E196DA80E3A"),
  BigInt("0x4B8C9F413DF695B1"),
  BigInt("0x34E26F890DC31CC8"),
  BigInt("0x7C339BA2C5DC31CC"),
  BigInt("0x035D6B6AF5E9B8B5"),
  BigInt("0x82EE7A32A5B7233E"),
  BigInt("0xFD808AFA9582AA47"),
  BigInt("0x4D364994D625E4DA"),
  BigInt("0x3258B95CE6106DA3"),
  BigInt("0xB3EBA804B64EF628"),
  BigInt("0xCC8558CC867B7F51"),
  BigInt("0x8454ACE74E645255"),
  BigInt("0xFB3A5C2F7E51DB2C"),
  BigInt("0x7A894D772E0F40A7"),
  BigInt("0x05E7BDBF1E3AC9DE"),
  BigInt("0xEB2AA520BE311AAF"),
  BigInt("0x944455E88E0493D6"),
  BigInt("0x15F744B0DE5A085D"),
  BigInt("0x6A99B478EE6F8124"),
  BigInt("0x224840532670AC20"),
  BigInt("0x5D26B09B16452559"),
  BigInt("0xDC95A1C3461BBED2"),
  BigInt("0xA3FB510B762E37AB"),
  BigInt("0x35D6B6AF5E9B8B5B"),
  BigInt("0x4AB846676EAE0222"),
  BigInt("0xCB0B573F3EF099A9"),
  BigInt("0xB465A7F70EC510D0"),
  BigInt("0xFCB453DCC6DA3DD4"),
  BigInt("0x83DAA314F6EFB4AD"),
  BigInt("0x0269B24CA6B12F26"),
  BigInt("0x7D0742849684A65F"),
  BigInt("0x93CA5A1B368F752E"),
  BigInt("0xECA4AAD306BAFC57"),
  BigInt("0x6D17BB8B56E467DC"),
  BigInt("0x12794B4366D1EEA5"),
  BigInt("0x5AA8BF68AECEC3A1"),
  BigInt("0x25C64FA09EFB4AD8"),
  BigInt("0xA4755EF8CEA5D153"),
  BigInt("0xDB1BAE30FE90582A"),
  BigInt("0xBCF7B7E3C7593BD8"),
  BigInt("0xC399472BF76CB2A1"),
  BigInt("0x422A5673A732292A"),
  BigInt("0x3D44A6BB9707A053"),
  BigInt("0x759552905F188D57"),
  BigInt("0x0AFBA2586F2D042E"),
  BigInt("0x8B48B3003F739FA5"),
  BigInt("0xF42643C80F4616DC"),
  BigInt("0x1AEB5B57AF4DC5AD"),
  BigInt("0x6585AB9F9F784CD4"),
  BigInt("0xE436BAC7CF26D75F"),
  BigInt("0x9B584A0FFF135E26"),
  BigInt("0xD389BE24370C7322"),
  BigInt("0xACE74EEC0739FA5B"),
  BigInt("0x2D545FB4576761D0"),
  BigInt("0x523AAF7C6752E8A9"),
  BigInt("0xC41748D84FE75459"),
  BigInt("0xBB79B8107FD2DD20"),
  BigInt("0x3ACAA9482F8C46AB"),
  BigInt("0x45A459801FB9CFD2"),
  BigInt("0x0D75ADABD7A6E2D6"),
  BigInt("0x721B5D63E7936BAF"),
  BigInt("0xF3A84C3BB7CDF024"),
  BigInt("0x8CC6BCF387F8795D"),
  BigInt("0x620BA46C27F3AA2C"),
  BigInt("0x1D6554A417C62355"),
  BigInt("0x9CD645FC4798B8DE"),
  BigInt("0xE3B8B53477AD31A7"),
  BigInt("0xAB69411FBFB21CA3"),
  BigInt("0xD407B1D78F8795DA"),
  BigInt("0x55B4A08FDFD90E51"),
  BigInt("0x2ADA5047EFEC8728")
];
class ii {
  constructor() {
    this._crc = BigInt(0);
  }
  update(t) {
    const r = typeof t == "string" ? Buffer.from(t) : t;
    let a = ii.flip64Bits(this._crc);
    for (const i of r) {
      const n = Number(a & BigInt(255));
      a = Fu[n ^ i] ^ a >> BigInt(8);
    }
    this._crc = ii.flip64Bits(a);
  }
  digest(t) {
    switch (t) {
      case "hex":
        return this._crc.toString(16).toUpperCase();
      case "base64":
        return this.toBuffer().toString("base64");
      default:
        return this.toBuffer();
    }
  }
  toBuffer() {
    return Buffer.from([0, 8, 16, 24, 32, 40, 48, 56].map((t) => Number(this._crc >> BigInt(t) & BigInt(255))));
  }
  static flip64Bits(t) {
    return (BigInt(1) << BigInt(64)) - BigInt(1) - t;
  }
}
Ro.default = ii;
var ra = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
}, hl = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(te, "__esModule", { value: !0 });
te.digestForStream = te.sleep = te.getProperRetention = te.rmFile = te.getFileSize = te.createEmptyFilesForArtifact = te.createDirectoriesForArtifact = te.displayHttpDiagnostics = te.getArtifactUrl = te.createHttpClient = te.getUploadHeaders = te.getDownloadHeaders = te.getContentRange = te.tryGetRetryAfterValueTimeInMilliseconds = te.isThrottledStatusCode = te.isRetryableStatusCode = te.isForbiddenStatusCode = te.isSuccessStatusCode = te.getApiVersion = te.parseEnvNumber = te.getExponentialRetryTimeInMilliseconds = void 0;
const ku = hl(fo), Ti = Ve, hr = Xe(), Yt = bi, Nu = kt, fr = me, Iu = hl(Ro);
function $u(e) {
  if (e < 0)
    throw new Error("RetryCount should not be negative");
  if (e === 0)
    return fr.getInitialRetryIntervalInMilliseconds();
  const t = fr.getInitialRetryIntervalInMilliseconds() * fr.getRetryMultiplier() * e, r = t * fr.getRetryMultiplier();
  return Math.trunc(Math.random() * (r - t) + t);
}
te.getExponentialRetryTimeInMilliseconds = $u;
function Uu(e) {
  const t = Number(process.env[e]);
  if (!(Number.isNaN(t) || t < 0))
    return t;
}
te.parseEnvNumber = Uu;
function La() {
  return "6.0-preview";
}
te.getApiVersion = La;
function xu(e) {
  return e ? e >= 200 && e < 300 : !1;
}
te.isSuccessStatusCode = xu;
function Vu(e) {
  return e ? e === Yt.HttpCodes.Forbidden : !1;
}
te.isForbiddenStatusCode = Vu;
function Gu(e) {
  return e ? [
    Yt.HttpCodes.BadGateway,
    Yt.HttpCodes.GatewayTimeout,
    Yt.HttpCodes.InternalServerError,
    Yt.HttpCodes.ServiceUnavailable,
    Yt.HttpCodes.TooManyRequests,
    413
    // Payload Too Large
  ].includes(e) : !1;
}
te.isRetryableStatusCode = Gu;
function Lu(e) {
  return e ? e === Yt.HttpCodes.TooManyRequests : !1;
}
te.isThrottledStatusCode = Lu;
function ju(e) {
  if (e["retry-after"]) {
    const t = Number(e["retry-after"]);
    if (!isNaN(t))
      return hr.info(`Retry-After header is present with a value of ${t}`), t * 1e3;
    hr.info(`Returned retry-after header value: ${t} is non-numeric and cannot be used`);
    return;
  }
  hr.info("No retry-after header was found. Dumping all headers for diagnostic purposes"), console.log(e);
}
te.tryGetRetryAfterValueTimeInMilliseconds = ju;
function Mu(e, t, r) {
  return `bytes ${e}-${t}/${r}`;
}
te.getContentRange = Mu;
function qu(e, t, r) {
  const a = {};
  return e && (a["Content-Type"] = e), t && (a.Connection = "Keep-Alive", a["Keep-Alive"] = "10"), r ? (a["Accept-Encoding"] = "gzip", a.Accept = `application/octet-stream;api-version=${La()}`) : a.Accept = `application/json;api-version=${La()}`, a;
}
te.getDownloadHeaders = qu;
function Wu(e, t, r, a, i, n, o) {
  const p = {};
  return p.Accept = `application/json;api-version=${La()}`, e && (p["Content-Type"] = e), t && (p.Connection = "Keep-Alive", p["Keep-Alive"] = "10"), r && (p["Content-Encoding"] = "gzip", p["x-tfs-filelength"] = a), i && (p["Content-Length"] = i), n && (p["Content-Range"] = n), o && (p["x-actions-results-crc64"] = o.crc64, p["x-actions-results-md5"] = o.md5), p;
}
te.getUploadHeaders = Wu;
function zu(e) {
  return new Yt.HttpClient(e, [
    new Nu.BearerCredentialHandler(fr.getRuntimeToken())
  ]);
}
te.createHttpClient = zu;
function Hu() {
  const e = `${fr.getRuntimeUrl()}_apis/pipelines/workflows/${fr.getWorkFlowRunId()}/artifacts?api-version=${La()}`;
  return hr.debug(`Artifact Url: ${e}`), e;
}
te.getArtifactUrl = Hu;
function Ku(e) {
  hr.info(`##### Begin Diagnostic HTTP information #####
Status Code: ${e.message.statusCode}
Status Message: ${e.message.statusMessage}
Header Information: ${JSON.stringify(e.message.headers, void 0, 2)}
###### End Diagnostic HTTP information ######`);
}
te.displayHttpDiagnostics = Ku;
function Yu(e) {
  return ra(this, void 0, void 0, function* () {
    for (const t of e)
      yield Ti.promises.mkdir(t, {
        recursive: !0
      });
  });
}
te.createDirectoriesForArtifact = Yu;
function Qu(e) {
  return ra(this, void 0, void 0, function* () {
    for (const t of e)
      yield (yield Ti.promises.open(t, "w")).close();
  });
}
te.createEmptyFilesForArtifact = Qu;
function Ju(e) {
  return ra(this, void 0, void 0, function* () {
    const t = yield Ti.promises.stat(e);
    return hr.debug(`${e} size:(${t.size}) blksize:(${t.blksize}) blocks:(${t.blocks})`), t.size;
  });
}
te.getFileSize = Ju;
function Zu(e) {
  return ra(this, void 0, void 0, function* () {
    yield Ti.promises.unlink(e);
  });
}
te.rmFile = Zu;
function Xu(e, t) {
  if (e < 0)
    throw new Error("Invalid retention, minimum value is 1.");
  let r = e;
  if (t) {
    const a = parseInt(t);
    !isNaN(a) && a < r && (hr.warning(`Retention days is greater than the max value allowed by the repository setting, reduce retention to ${a} days`), r = a);
  }
  return r;
}
te.getProperRetention = Xu;
function e3(e) {
  return ra(this, void 0, void 0, function* () {
    return new Promise((t) => setTimeout(t, e));
  });
}
te.sleep = e3;
function t3(e) {
  return ra(this, void 0, void 0, function* () {
    return new Promise((t, r) => {
      const a = new Iu.default(), i = ku.default.createHash("md5");
      e.on("data", (n) => {
        a.update(n), i.update(n);
      }).on("end", () => t({
        crc64: a.digest("base64"),
        md5: i.digest("base64")
      })).on("error", r);
    });
  });
}
te.digestForStream = t3;
var Ja = {};
Object.defineProperty(Ja, "__esModule", { value: !0 });
Ja.StatusReporter = void 0;
const Cp = Xe();
class r3 {
  constructor(t) {
    this.totalNumberOfFilesToProcess = 0, this.processedCount = 0, this.largeFiles = /* @__PURE__ */ new Map(), this.totalFileStatus = void 0, this.displayFrequencyInMilliseconds = t;
  }
  setTotalNumberOfFilesToProcess(t) {
    this.totalNumberOfFilesToProcess = t, this.processedCount = 0;
  }
  start() {
    this.totalFileStatus = setInterval(() => {
      const t = this.formatPercentage(this.processedCount, this.totalNumberOfFilesToProcess);
      Cp.info(`Total file count: ${this.totalNumberOfFilesToProcess} ---- Processed file #${this.processedCount} (${t.slice(0, t.indexOf(".") + 2)}%)`);
    }, this.displayFrequencyInMilliseconds);
  }
  // if there is a large file that is being uploaded in chunks, this is used to display extra information about the status of the upload
  updateLargeFileStatus(t, r, a, i) {
    const n = this.formatPercentage(a, i);
    Cp.info(`Uploaded ${t} (${n.slice(0, n.indexOf(".") + 2)}%) bytes ${r}:${a}`);
  }
  stop() {
    this.totalFileStatus && clearInterval(this.totalFileStatus);
  }
  incrementProcessedCount() {
    this.processedCount++;
  }
  formatPercentage(t, r) {
    return (t / r * 100).toFixed(4).toString();
  }
}
Ja.StatusReporter = r3;
var Za = {};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.HttpManager = void 0;
const Dp = te;
class a3 {
  constructor(t, r) {
    if (t < 1)
      throw new Error("There must be at least one client");
    this.userAgent = r, this.clients = new Array(t).fill(Dp.createHttpClient(r));
  }
  getClient(t) {
    return this.clients[t];
  }
  // client disposal is necessary if a keep-alive connection is used to properly close the connection
  // for more information see: https://github.com/actions/http-client/blob/04e5ad73cd3fd1f5610a32116b0759eddf6570d2/index.ts#L292
  disposeAndReplaceClient(t) {
    this.clients[t].dispose(), this.clients[t] = Dp.createHttpClient(this.userAgent);
  }
  disposeAndReplaceAllClients() {
    for (const [t] of this.clients.entries())
      this.disposeAndReplaceClient(t);
  }
}
Za.HttpManager = a3;
var Qr = {}, i3 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), n3 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), gl = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && i3(t, e, r);
  return n3(t, e), t;
}, ni = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
}, o3 = D && D.__asyncValues || function(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function a(n) {
    r[n] = e[n] && function(o) {
      return new Promise(function(p, l) {
        o = e[n](o), i(p, l, o.done, o.value);
      });
    };
  }
  function i(n, o, p, l) {
    Promise.resolve(l).then(function(u) {
      n({ value: u, done: p });
    }, o);
  }
};
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.createGZipFileInBuffer = Qr.createGZipFileOnDisk = void 0;
const oi = gl(Ve), vl = gl(Pt), s3 = Ya, p3 = s3.promisify(oi.stat), d3 = [
  ".gzip",
  ".zip",
  ".tar.lz",
  ".tar.gz",
  ".tar.bz2",
  ".7z"
];
function l3(e, t) {
  return ni(this, void 0, void 0, function* () {
    for (const r of d3)
      if (e.endsWith(r))
        return Number.MAX_SAFE_INTEGER;
    return new Promise((r, a) => {
      const i = oi.createReadStream(e), n = vl.createGzip(), o = oi.createWriteStream(t);
      i.pipe(n).pipe(o), o.on("finish", () => ni(this, void 0, void 0, function* () {
        const p = (yield p3(t)).size;
        r(p);
      })), o.on("error", (p) => {
        console.log(p);
      });
    });
  });
}
Qr.createGZipFileOnDisk = l3;
function u3(e) {
  return ni(this, void 0, void 0, function* () {
    return new Promise((t) => ni(this, void 0, void 0, function* () {
      var r, a;
      const i = oi.createReadStream(e), n = vl.createGzip();
      i.pipe(n);
      const o = [];
      try {
        for (var p = o3(n), l; l = yield p.next(), !l.done; ) {
          const u = l.value;
          o.push(u);
        }
      } catch (u) {
        r = { error: u };
      } finally {
        try {
          l && !l.done && (a = p.return) && (yield a.call(p));
        } finally {
          if (r)
            throw r.error;
        }
      }
      t(Buffer.concat(o));
    }));
  });
}
Qr.createGZipFileInBuffer = u3;
var wr = {}, c3 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), m3 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), f3 = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && c3(t, e, r);
  return m3(t, e), t;
}, wl = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.retryHttpClientRequest = wr.retry = void 0;
const Ur = te, Rp = f3(Xe()), h3 = me;
function bl(e, t, r, a) {
  return wl(this, void 0, void 0, function* () {
    let i, n, o = !1, p = "", l, u = 1;
    for (; u <= a; ) {
      try {
        if (i = yield t(), n = i.message.statusCode, Ur.isSuccessStatusCode(n))
          return i;
        n && (l = r.get(n)), o = Ur.isRetryableStatusCode(n), p = `Artifact service responded with ${n}`;
      } catch (c) {
        o = !0, p = c.message;
      }
      if (!o) {
        Rp.info(`${e} - Error is not retryable`), i && Ur.displayHttpDiagnostics(i);
        break;
      }
      Rp.info(`${e} - Attempt ${u} of ${a} failed with error: ${p}`), yield Ur.sleep(Ur.getExponentialRetryTimeInMilliseconds(u)), u++;
    }
    throw i && Ur.displayHttpDiagnostics(i), Error(l ? `${e} failed: ${l}` : `${e} failed: ${p}`);
  });
}
wr.retry = bl;
function g3(e, t, r = /* @__PURE__ */ new Map(), a = h3.getRetryLimit()) {
  return wl(this, void 0, void 0, function* () {
    return yield bl(e, t, r, a);
  });
}
wr.retryHttpClientRequest = g3;
var v3 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), w3 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Ai = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && v3(t, e, r);
  return w3(t, e), t;
}, vt = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.UploadHttpClient = void 0;
const to = Ai(Ve), ge = Ai(Xe()), b3 = Ai(_u), _3 = Ai(Ze), De = te, Ca = me, y3 = Ya, Pp = ea, Op = Td, E3 = Ja, Rn = bi, S3 = Za, Bp = Qr, Fp = wr, T3 = y3.promisify(to.stat);
class A3 {
  constructor() {
    this.uploadHttpManager = new S3.HttpManager(Ca.getUploadFileConcurrency(), "@actions/artifact-upload"), this.statusReporter = new E3.StatusReporter(1e4);
  }
  /**
   * Creates a file container for the new artifact in the remote blob storage/file service
   * @param {string} artifactName Name of the artifact being created
   * @returns The response from the Artifact Service if the file container was successfully created
   */
  createArtifactInFileContainer(t, r) {
    return vt(this, void 0, void 0, function* () {
      const a = {
        Type: "actions_storage",
        Name: t
      };
      if (r && r.retentionDays) {
        const h = Ca.getRetentionDays();
        a.RetentionDays = De.getProperRetention(r.retentionDays, h);
      }
      const i = JSON.stringify(a, null, 2), n = De.getArtifactUrl(), o = this.uploadHttpManager.getClient(0), p = De.getUploadHeaders("application/json", !1), l = /* @__PURE__ */ new Map([
        [
          Rn.HttpCodes.Forbidden,
          "Artifact storage quota has been hit. Unable to upload any new artifacts"
        ],
        [
          Rn.HttpCodes.BadRequest,
          `The artifact name ${t} is not valid. Request URL ${n}`
        ]
      ]), c = yield (yield Fp.retryHttpClientRequest("Create Artifact Container", () => vt(this, void 0, void 0, function* () {
        return o.post(n, i, p);
      }), l)).readBody();
      return JSON.parse(c);
    });
  }
  /**
   * Concurrently upload all of the files in chunks
   * @param {string} uploadUrl Base Url for the artifact that was created
   * @param {SearchResult[]} filesToUpload A list of information about the files being uploaded
   * @returns The size of all the files uploaded in bytes
   */
  uploadArtifactToFileContainer(t, r, a) {
    return vt(this, void 0, void 0, function* () {
      const i = Ca.getUploadFileConcurrency(), n = Ca.getUploadChunkSize();
      ge.debug(`File Concurrency: ${i}, and Chunk Size: ${n}`);
      const o = [];
      let p = !0;
      a && a.continueOnError === !1 && (p = !1);
      for (const f of r) {
        const y = new Pp.URL(t);
        y.searchParams.append("itemPath", f.uploadFilePath), o.push({
          file: f.absoluteFilePath,
          resourceUrl: y.toString(),
          maxChunkSize: n,
          continueOnError: p
        });
      }
      const l = [...new Array(i).keys()], u = [];
      let c = 0, h = 0, v = 0, g = 0, w = !1;
      return this.statusReporter.setTotalNumberOfFilesToProcess(r.length), this.statusReporter.start(), yield Promise.all(l.map((f) => vt(this, void 0, void 0, function* () {
        for (; c < r.length; ) {
          const y = o[c];
          if (c += 1, w) {
            u.push(y.file);
            continue;
          }
          const E = Op.performance.now(), N = yield this.uploadFileAsync(f, y);
          ge.isDebug() && ge.debug(`File: ${++h}/${r.length}. ${y.file} took ${(Op.performance.now() - E).toFixed(3)} milliseconds to finish upload`), v += N.successfulUploadSize, g += N.totalSize, N.isSuccess === !1 && (u.push(y.file), p || (ge.error("aborting artifact upload"), w = !0)), this.statusReporter.incrementProcessedCount();
        }
      }))), this.statusReporter.stop(), this.uploadHttpManager.disposeAndReplaceAllClients(), ge.info(`Total size of all the files uploaded is ${v} bytes`), {
        uploadSize: v,
        totalSize: g,
        failedItems: u
      };
    });
  }
  /**
   * Asynchronously uploads a file. The file is compressed and uploaded using GZip if it is determined to save space.
   * If the upload file is bigger than the max chunk size it will be uploaded via multiple calls
   * @param {number} httpClientIndex The index of the httpClient that is being used to make all of the calls
   * @param {UploadFileParameters} parameters Information about the file that needs to be uploaded
   * @returns The size of the file that was uploaded in bytes along with any failed uploads
   */
  uploadFileAsync(t, r) {
    return vt(this, void 0, void 0, function* () {
      const a = yield T3(r.file), i = a.size, n = a.isFIFO();
      let o = 0, p = !0, l = 0, u = 0, c = !0;
      if (!n && i < 65536) {
        ge.debug(`${r.file} is less than 64k in size. Creating a gzip file in-memory to potentially reduce the upload size`);
        const h = yield Bp.createGZipFileInBuffer(r.file);
        let v;
        return i < h.byteLength ? (ge.debug(`The gzip file created for ${r.file} did not help with reducing the size of the file. The original file will be uploaded as-is`), v = () => to.createReadStream(r.file), c = !1, u = i) : (ge.debug(`A gzip file created for ${r.file} helped with reducing the size of the original file. The file will be uploaded using gzip.`), v = () => {
          const w = new _3.PassThrough();
          return w.end(h), w;
        }, u = h.byteLength), (yield this.uploadChunk(t, r.resourceUrl, v, 0, u - 1, u, c, i)) || (p = !1, l += u, ge.warning(`Aborting upload for ${r.file} due to failure`)), {
          isSuccess: p,
          successfulUploadSize: u - l,
          totalSize: i
        };
      } else {
        const h = yield b3.file();
        ge.debug(`${r.file} is greater than 64k in size. Creating a gzip file on-disk ${h.path} to potentially reduce the upload size`), u = yield Bp.createGZipFileOnDisk(r.file, h.path);
        let v = h.path;
        !n && i < u ? (ge.debug(`The gzip file created for ${r.file} did not help with reducing the size of the file. The original file will be uploaded as-is`), u = i, v = r.file, c = !1) : ge.debug(`The gzip file created for ${r.file} is smaller than the original file. The file will be uploaded using gzip.`);
        let g = !1;
        for (; o < u; ) {
          const w = Math.min(u - o, r.maxChunkSize), f = o, y = o + w - 1;
          if (o += r.maxChunkSize, g) {
            l += w;
            continue;
          }
          (yield this.uploadChunk(t, r.resourceUrl, () => to.createReadStream(v, {
            start: f,
            end: y,
            autoClose: !1
          }), f, y, u, c, i)) ? u > 8388608 && this.statusReporter.updateLargeFileStatus(r.file, f, y, u) : (p = !1, l += w, ge.warning(`Aborting upload for ${r.file} due to failure`), g = !0);
        }
        return ge.debug(`deleting temporary gzip file ${h.path}`), yield h.cleanup(), {
          isSuccess: p,
          successfulUploadSize: u - l,
          totalSize: i
        };
      }
    });
  }
  /**
   * Uploads a chunk of an individual file to the specified resourceUrl. If the upload fails and the status code
   * indicates a retryable status, we try to upload the chunk as well
   * @param {number} httpClientIndex The index of the httpClient being used to make all the necessary calls
   * @param {string} resourceUrl Url of the resource that the chunk will be uploaded to
   * @param {NodeJS.ReadableStream} openStream Stream of the file that will be uploaded
   * @param {number} start Starting byte index of file that the chunk belongs to
   * @param {number} end Ending byte index of file that the chunk belongs to
   * @param {number} uploadFileSize Total size of the file in bytes that is being uploaded
   * @param {boolean} isGzip Denotes if we are uploading a Gzip compressed stream
   * @param {number} totalFileSize Original total size of the file that is being uploaded
   * @returns if the chunk was successfully uploaded
   */
  uploadChunk(t, r, a, i, n, o, p, l) {
    return vt(this, void 0, void 0, function* () {
      const u = yield De.digestForStream(a()), c = De.getUploadHeaders("application/octet-stream", !0, p, l, n - i + 1, De.getContentRange(i, n, o), u), h = () => vt(this, void 0, void 0, function* () {
        return yield this.uploadHttpManager.getClient(t).sendStream("PUT", r, a(), c);
      });
      let v = 0;
      const g = Ca.getRetryLimit(), w = (y) => (v++, v > g ? (y && De.displayHttpDiagnostics(y), ge.info(`Retry limit has been reached for chunk at offset ${i} to ${r}`), !0) : !1), f = (y) => vt(this, void 0, void 0, function* () {
        if (this.uploadHttpManager.disposeAndReplaceClient(t), y)
          ge.info(`Backoff due to too many requests, retry #${v}. Waiting for ${y} milliseconds before continuing the upload`), yield De.sleep(y);
        else {
          const E = De.getExponentialRetryTimeInMilliseconds(v);
          ge.info(`Exponential backoff for retry #${v}. Waiting for ${E} milliseconds before continuing the upload at offset ${i}`), yield De.sleep(E);
        }
        ge.info(`Finished backoff for retry #${v}, continuing with upload`);
      });
      for (; v <= g; ) {
        let y;
        try {
          y = yield h();
        } catch (E) {
          if (ge.info(`An error has been caught http-client index ${t}, retrying the upload`), console.log(E), w())
            return !1;
          yield f();
          continue;
        }
        if (yield y.readBody(), De.isSuccessStatusCode(y.message.statusCode))
          return !0;
        if (De.isRetryableStatusCode(y.message.statusCode)) {
          if (ge.info(`A ${y.message.statusCode} status code has been received, will attempt to retry the upload`), w(y))
            return !1;
          De.isThrottledStatusCode(y.message.statusCode) ? yield f(De.tryGetRetryAfterValueTimeInMilliseconds(y.message.headers)) : yield f();
        } else
          return ge.error(`Unexpected response. Unable to upload chunk to ${r}`), De.displayHttpDiagnostics(y), !1;
      }
      return !1;
    });
  }
  /**
   * Updates the size of the artifact from -1 which was initially set when the container was first created for the artifact.
   * Updating the size indicates that we are done uploading all the contents of the artifact
   */
  patchArtifactSize(t, r) {
    return vt(this, void 0, void 0, function* () {
      const a = new Pp.URL(De.getArtifactUrl());
      a.searchParams.append("artifactName", r);
      const n = JSON.stringify({ Size: t }, null, 2);
      ge.debug(`URL is ${a.toString()}`);
      const o = this.uploadHttpManager.getClient(0), p = De.getUploadHeaders("application/json", !1), l = /* @__PURE__ */ new Map([
        [
          Rn.HttpCodes.NotFound,
          `An Artifact with the name ${r} was not found`
        ]
      ]);
      yield (yield Fp.retryHttpClientRequest("Finalize artifact upload", () => vt(this, void 0, void 0, function* () {
        return o.patch(a.toString(), n, p);
      }), l)).readBody(), ge.debug(`Artifact ${r} has been successfully uploaded, total size in bytes: ${t}`);
    });
  }
}
yi.UploadHttpClient = A3;
var Ci = {}, C3 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), D3 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Po = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && C3(t, e, r);
  return D3(t, e), t;
}, lt = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.DownloadHttpClient = void 0;
const kp = Po(Ve), je = Po(Xe()), R3 = Po(Pt), ze = te, P3 = ea, O3 = Ja, Np = Td, B3 = Za, Pn = me, Ip = wr;
class F3 {
  constructor() {
    this.downloadHttpManager = new B3.HttpManager(Pn.getDownloadFileConcurrency(), "@actions/artifact-download"), this.statusReporter = new O3.StatusReporter(1e3);
  }
  /**
   * Gets a list of all artifacts that are in a specific container
   */
  listArtifacts() {
    return lt(this, void 0, void 0, function* () {
      const t = ze.getArtifactUrl(), r = this.downloadHttpManager.getClient(0), a = ze.getDownloadHeaders("application/json"), n = yield (yield Ip.retryHttpClientRequest("List Artifacts", () => lt(this, void 0, void 0, function* () {
        return r.get(t, a);
      }))).readBody();
      return JSON.parse(n);
    });
  }
  /**
   * Fetches a set of container items that describe the contents of an artifact
   * @param artifactName the name of the artifact
   * @param containerUrl the artifact container URL for the run
   */
  getContainerItems(t, r) {
    return lt(this, void 0, void 0, function* () {
      const a = new P3.URL(r);
      a.searchParams.append("itemPath", t);
      const i = this.downloadHttpManager.getClient(0), n = ze.getDownloadHeaders("application/json"), p = yield (yield Ip.retryHttpClientRequest("Get Container Items", () => lt(this, void 0, void 0, function* () {
        return i.get(a.toString(), n);
      }))).readBody();
      return JSON.parse(p);
    });
  }
  /**
   * Concurrently downloads all the files that are part of an artifact
   * @param downloadItems information about what items to download and where to save them
   */
  downloadSingleArtifact(t) {
    return lt(this, void 0, void 0, function* () {
      const r = Pn.getDownloadFileConcurrency();
      je.debug(`Download file concurrency is set to ${r}`);
      const a = [...new Array(r).keys()];
      let i = 0, n = 0;
      je.info(`Total number of files that will be downloaded: ${t.length}`), this.statusReporter.setTotalNumberOfFilesToProcess(t.length), this.statusReporter.start(), yield Promise.all(a.map((o) => lt(this, void 0, void 0, function* () {
        for (; i < t.length; ) {
          const p = t[i];
          i += 1;
          const l = Np.performance.now();
          yield this.downloadIndividualFile(o, p.sourceLocation, p.targetPath), je.isDebug() && je.debug(`File: ${++n}/${t.length}. ${p.targetPath} took ${(Np.performance.now() - l).toFixed(3)} milliseconds to finish downloading`), this.statusReporter.incrementProcessedCount();
        }
      }))).catch((o) => {
        throw new Error(`Unable to download the artifact: ${o}`);
      }).finally(() => {
        this.statusReporter.stop(), this.downloadHttpManager.disposeAndReplaceAllClients();
      });
    });
  }
  /**
   * Downloads an individual file
   * @param httpClientIndex the index of the http client that is used to make all of the calls
   * @param artifactLocation origin location where a file will be downloaded from
   * @param downloadPath destination location for the file being downloaded
   */
  downloadIndividualFile(t, r, a) {
    return lt(this, void 0, void 0, function* () {
      let i = 0;
      const n = Pn.getRetryLimit();
      let o = kp.createWriteStream(a);
      const p = ze.getDownloadHeaders("application/json", !0, !0), l = () => lt(this, void 0, void 0, function* () {
        return yield this.downloadHttpManager.getClient(t).get(r, p);
      }), u = (g) => "content-encoding" in g && g["content-encoding"] === "gzip", c = (g) => lt(this, void 0, void 0, function* () {
        if (i++, i > n)
          return Promise.reject(new Error(`Retry limit has been reached. Unable to download ${r}`));
        if (this.downloadHttpManager.disposeAndReplaceClient(t), g)
          je.info(`Backoff due to too many requests, retry #${i}. Waiting for ${g} milliseconds before continuing the download`), yield ze.sleep(g);
        else {
          const w = ze.getExponentialRetryTimeInMilliseconds(i);
          je.info(`Exponential backoff for retry #${i}. Waiting for ${w} milliseconds before continuing the download`), yield ze.sleep(w);
        }
        je.info(`Finished backoff for retry #${i}, continuing with download`);
      }), h = (g, w) => !g || !w || process.env.ACTIONS_ARTIFACT_SKIP_DOWNLOAD_VALIDATION ? (je.info("Skipping download validation."), !0) : parseInt(g) === w, v = (g) => lt(this, void 0, void 0, function* () {
        o.close(), yield new Promise((w) => {
          o.on("close", w), o.writableFinished && w();
        }), yield ze.rmFile(g), o = kp.createWriteStream(g);
      });
      for (; i <= n; ) {
        let g;
        try {
          g = yield l();
        } catch (f) {
          je.info("An error occurred while attempting to download a file"), console.log(f), yield c();
          continue;
        }
        let w = !1;
        if (ze.isSuccessStatusCode(g.message.statusCode))
          try {
            const f = u(g.message.headers);
            if (yield this.pipeResponseToFile(g, o, f), f || h(g.message.headers["content-length"], yield ze.getFileSize(a)))
              return;
            w = !0;
          } catch {
            w = !0;
          }
        if (w || ze.isRetryableStatusCode(g.message.statusCode))
          je.info(`A ${g.message.statusCode} response code has been received while attempting to download an artifact`), v(a), ze.isThrottledStatusCode(g.message.statusCode) ? yield c(ze.tryGetRetryAfterValueTimeInMilliseconds(g.message.headers)) : yield c();
        else
          return ze.displayHttpDiagnostics(g), Promise.reject(new Error(`Unexpected http ${g.message.statusCode} during download for ${r}`));
      }
    });
  }
  /**
   * Pipes the response from downloading an individual file to the appropriate destination stream while decoding gzip content if necessary
   * @param response the http response received when downloading a file
   * @param destinationStream the stream where the file should be written to
   * @param isGzip a boolean denoting if the content is compressed using gzip and if we need to decode it
   */
  pipeResponseToFile(t, r, a) {
    return lt(this, void 0, void 0, function* () {
      yield new Promise((i, n) => {
        if (a) {
          const o = R3.createGunzip();
          t.message.on("error", (p) => {
            je.error("An error occurred while attempting to read the response stream"), o.close(), r.close(), n(p);
          }).pipe(o).on("error", (p) => {
            je.error("An error occurred while attempting to decompress the response stream"), r.close(), n(p);
          }).pipe(r).on("close", () => {
            i();
          }).on("error", (p) => {
            je.error(`An error occurred while writing a downloaded file to ${r.path}`), n(p);
          });
        } else
          t.message.on("error", (o) => {
            je.error("An error occurred while attempting to read the response stream"), r.close(), n(o);
          }).pipe(r).on("close", () => {
            i();
          }).on("error", (o) => {
            je.error(`An error occurred while writing a downloaded file to ${r.path}`), n(o);
          });
      });
    });
  }
}
Ci.DownloadHttpClient = F3;
var Di = {}, k3 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), N3 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), I3 = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && k3(t, e, r);
  return N3(t, e), t;
};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.getDownloadSpecification = void 0;
const G1 = I3(ye);
function $3(e, t, r, a) {
  const i = /* @__PURE__ */ new Set(), n = {
    rootDownloadLocation: a ? G1.join(r, e) : r,
    directoryStructure: [],
    emptyFilesToCreate: [],
    filesToDownload: []
  };
  for (const o of t)
    if (o.path.startsWith(`${e}/`) || o.path.startsWith(`${e}\\`)) {
      const p = G1.normalize(o.path), l = G1.join(r, a ? p : p.replace(e, ""));
      o.itemType === "file" && (i.add(G1.dirname(l)), o.fileLength === 0 ? n.emptyFilesToCreate.push(l) : n.filesToDownload.push({
        sourceLocation: o.contentLocation,
        targetPath: l
      }));
    }
  return n.directoryStructure = Array.from(i), n;
}
Di.getDownloadSpecification = $3;
var U3 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), x3 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), V3 = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && U3(t, e, r);
  return x3(t, e), t;
}, On = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.DefaultArtifactClient = void 0;
const He = V3(Xe()), G3 = _i, L3 = yi, L1 = te, j3 = vr, $p = Ci, Up = Di, xp = me, j1 = ye;
class Oo {
  /**
   * Constructs a DefaultArtifactClient
   */
  static create() {
    return new Oo();
  }
  /**
   * Uploads an artifact
   */
  uploadArtifact(t, r, a, i) {
    return On(this, void 0, void 0, function* () {
      He.info(`Starting artifact upload
For more detailed logs during the artifact upload process, enable step-debugging: https://docs.github.com/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-step-debug-logging`), j3.checkArtifactName(t);
      const n = G3.getUploadSpecification(t, a, r), o = {
        artifactName: t,
        artifactItems: [],
        size: 0,
        failedItems: []
      }, p = new L3.UploadHttpClient();
      if (n.length === 0)
        He.warning("No files found that can be uploaded");
      else {
        const l = yield p.createArtifactInFileContainer(t, i);
        if (!l.fileContainerResourceUrl)
          throw He.debug(l.toString()), new Error("No URL provided by the Artifact Service to upload an artifact to");
        He.debug(`Upload Resource URL: ${l.fileContainerResourceUrl}`), He.info(`Container for artifact "${t}" successfully created. Starting upload of file(s)`);
        const u = yield p.uploadArtifactToFileContainer(l.fileContainerResourceUrl, n, i);
        He.info("File upload process has finished. Finalizing the artifact upload"), yield p.patchArtifactSize(u.totalSize, t), u.failedItems.length > 0 ? He.info(`Upload finished. There were ${u.failedItems.length} items that failed to upload`) : He.info("Artifact has been finalized. All files have been successfully uploaded!"), He.info(`
The raw size of all the files that were specified for upload is ${u.totalSize} bytes
The size of all the files that were uploaded is ${u.uploadSize} bytes. This takes into account any gzip compression used to reduce the upload size, time and storage

Note: The size of downloaded zips can differ significantly from the reported size. For more information see: https://github.com/actions/upload-artifact#zipped-artifact-downloads \r
`), o.artifactItems = n.map((c) => c.absoluteFilePath), o.size = u.uploadSize, o.failedItems = u.failedItems;
      }
      return o;
    });
  }
  downloadArtifact(t, r, a) {
    return On(this, void 0, void 0, function* () {
      const i = new $p.DownloadHttpClient(), n = yield i.listArtifacts();
      if (n.count === 0)
        throw new Error("Unable to find any artifacts for the associated workflow");
      const o = n.value.find((u) => u.name === t);
      if (!o)
        throw new Error(`Unable to find an artifact with the name: ${t}`);
      const p = yield i.getContainerItems(o.name, o.fileContainerResourceUrl);
      r || (r = xp.getWorkSpaceDirectory()), r = j1.normalize(r), r = j1.resolve(r);
      const l = Up.getDownloadSpecification(t, p.value, r, (a == null ? void 0 : a.createArtifactFolder) || !1);
      return l.filesToDownload.length === 0 ? He.info(`No downloadable files were found for the artifact: ${o.name}`) : (yield L1.createDirectoriesForArtifact(l.directoryStructure), He.info("Directory structure has been setup for the artifact"), yield L1.createEmptyFilesForArtifact(l.emptyFilesToCreate), yield i.downloadSingleArtifact(l.filesToDownload)), {
        artifactName: t,
        downloadPath: l.rootDownloadLocation
      };
    });
  }
  downloadAllArtifacts(t) {
    return On(this, void 0, void 0, function* () {
      const r = new $p.DownloadHttpClient(), a = [], i = yield r.listArtifacts();
      if (i.count === 0)
        return He.info("Unable to find any artifacts for the associated workflow"), a;
      t || (t = xp.getWorkSpaceDirectory()), t = j1.normalize(t), t = j1.resolve(t);
      let n = 0;
      for (; n < i.count; ) {
        const o = i.value[n];
        n += 1, He.info(`starting download of artifact ${o.name} : ${n}/${i.count}`);
        const p = yield r.getContainerItems(o.name, o.fileContainerResourceUrl), l = Up.getDownloadSpecification(o.name, p.value, t, !0);
        l.filesToDownload.length === 0 ? He.info(`No downloadable files were found for any artifact ${o.name}`) : (yield L1.createDirectoriesForArtifact(l.directoryStructure), yield L1.createEmptyFilesForArtifact(l.emptyFilesToCreate), yield r.downloadSingleArtifact(l.filesToDownload)), a.push({
          artifactName: o.name,
          downloadPath: l.rootDownloadLocation
        });
      }
      return a;
    });
  }
}
hi.DefaultArtifactClient = Oo;
Object.defineProperty(xa, "__esModule", { value: !0 });
var _l = xa.create = void 0;
const M3 = hi;
function q3() {
  return M3.DefaultArtifactClient.create();
}
_l = xa.create = q3;
const W3 = /* @__PURE__ */ Qa({
  __proto__: null,
  get create() {
    return _l;
  },
  default: xa
}, [xa]);
var at = Xe();
const z3 = /* @__PURE__ */ vo(at), H3 = /* @__PURE__ */ Qa({
  __proto__: null,
  default: z3
}, [at]);
var br = {}, Jr = {}, $e = {}, Bo = {};
(function(e) {
  var t = D && D.__createBinding || (Object.create ? function(f, y, E, N) {
    N === void 0 && (N = E), Object.defineProperty(f, N, { enumerable: !0, get: function() {
      return y[E];
    } });
  } : function(f, y, E, N) {
    N === void 0 && (N = E), f[N] = y[E];
  }), r = D && D.__setModuleDefault || (Object.create ? function(f, y) {
    Object.defineProperty(f, "default", { enumerable: !0, value: y });
  } : function(f, y) {
    f.default = y;
  }), a = D && D.__importStar || function(f) {
    if (f && f.__esModule)
      return f;
    var y = {};
    if (f != null)
      for (var E in f)
        E !== "default" && Object.hasOwnProperty.call(f, E) && t(y, f, E);
    return r(y, f), y;
  }, i = D && D.__awaiter || function(f, y, E, N) {
    function F(U) {
      return U instanceof E ? U : new E(function(P) {
        P(U);
      });
    }
    return new (E || (E = Promise))(function(U, P) {
      function O(T) {
        try {
          A(N.next(T));
        } catch (R) {
          P(R);
        }
      }
      function C(T) {
        try {
          A(N.throw(T));
        } catch (R) {
          P(R);
        }
      }
      function A(T) {
        T.done ? U(T.value) : F(T.value).then(O, C);
      }
      A((N = N.apply(f, y || [])).next());
    });
  }, n;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getCmdPath = e.tryGetExecutablePath = e.isRooted = e.isDirectory = e.exists = e.READONLY = e.UV_FS_O_EXLOCK = e.IS_WINDOWS = e.unlink = e.symlink = e.stat = e.rmdir = e.rm = e.rename = e.readlink = e.readdir = e.open = e.mkdir = e.lstat = e.copyFile = e.chmod = void 0;
  const o = a(Ve), p = a(ye);
  n = o.promises, e.chmod = n.chmod, e.copyFile = n.copyFile, e.lstat = n.lstat, e.mkdir = n.mkdir, e.open = n.open, e.readdir = n.readdir, e.readlink = n.readlink, e.rename = n.rename, e.rm = n.rm, e.rmdir = n.rmdir, e.stat = n.stat, e.symlink = n.symlink, e.unlink = n.unlink, e.IS_WINDOWS = process.platform === "win32", e.UV_FS_O_EXLOCK = 268435456, e.READONLY = o.constants.O_RDONLY;
  function l(f) {
    return i(this, void 0, void 0, function* () {
      try {
        yield e.stat(f);
      } catch (y) {
        if (y.code === "ENOENT")
          return !1;
        throw y;
      }
      return !0;
    });
  }
  e.exists = l;
  function u(f, y = !1) {
    return i(this, void 0, void 0, function* () {
      return (y ? yield e.stat(f) : yield e.lstat(f)).isDirectory();
    });
  }
  e.isDirectory = u;
  function c(f) {
    if (f = v(f), !f)
      throw new Error('isRooted() parameter "p" cannot be empty');
    return e.IS_WINDOWS ? f.startsWith("\\") || /^[A-Z]:/i.test(f) : f.startsWith("/");
  }
  e.isRooted = c;
  function h(f, y) {
    return i(this, void 0, void 0, function* () {
      let E;
      try {
        E = yield e.stat(f);
      } catch (F) {
        F.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${f}': ${F}`);
      }
      if (E && E.isFile()) {
        if (e.IS_WINDOWS) {
          const F = p.extname(f).toUpperCase();
          if (y.some((U) => U.toUpperCase() === F))
            return f;
        } else if (g(E))
          return f;
      }
      const N = f;
      for (const F of y) {
        f = N + F, E = void 0;
        try {
          E = yield e.stat(f);
        } catch (U) {
          U.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${f}': ${U}`);
        }
        if (E && E.isFile()) {
          if (e.IS_WINDOWS) {
            try {
              const U = p.dirname(f), P = p.basename(f).toUpperCase();
              for (const O of yield e.readdir(U))
                if (P === O.toUpperCase()) {
                  f = p.join(U, O);
                  break;
                }
            } catch (U) {
              console.log(`Unexpected error attempting to determine the actual case of the file '${f}': ${U}`);
            }
            return f;
          } else if (g(E))
            return f;
        }
      }
      return "";
    });
  }
  e.tryGetExecutablePath = h;
  function v(f) {
    return f = f || "", e.IS_WINDOWS ? (f = f.replace(/\//g, "\\"), f.replace(/\\\\+/g, "\\")) : f.replace(/\/\/+/g, "/");
  }
  function g(f) {
    return (f.mode & 1) > 0 || (f.mode & 8) > 0 && f.gid === process.getgid() || (f.mode & 64) > 0 && f.uid === process.getuid();
  }
  function w() {
    var f;
    return (f = process.env.COMSPEC) !== null && f !== void 0 ? f : "cmd.exe";
  }
  e.getCmdPath = w;
})(Bo);
var K3 = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), Y3 = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), yl = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && K3(t, e, r);
  return Y3(t, e), t;
}, rr = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty($e, "__esModule", { value: !0 });
var El = $e.findInPath = Pl = $e.which = Dl = $e.mkdirP = Cl = $e.rmRF = Tl = $e.mv = Sl = $e.cp = void 0;
const Q3 = Sr, _t = yl(ye), ue = yl(Bo);
function J3(e, t, r = {}) {
  return rr(this, void 0, void 0, function* () {
    const { force: a, recursive: i, copySourceDirectory: n } = X3(r), o = (yield ue.exists(t)) ? yield ue.stat(t) : null;
    if (o && o.isFile() && !a)
      return;
    const p = o && o.isDirectory() && n ? _t.join(t, _t.basename(e)) : t;
    if (!(yield ue.exists(e)))
      throw new Error(`no such file or directory: ${e}`);
    if ((yield ue.stat(e)).isDirectory())
      if (i)
        yield Bl(e, p, 0, a);
      else
        throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`);
    else {
      if (_t.relative(e, p) === "")
        throw new Error(`'${p}' and '${e}' are the same file`);
      yield Fl(e, p, a);
    }
  });
}
var Sl = $e.cp = J3;
function Z3(e, t, r = {}) {
  return rr(this, void 0, void 0, function* () {
    if (yield ue.exists(t)) {
      let a = !0;
      if ((yield ue.isDirectory(t)) && (t = _t.join(t, _t.basename(e)), a = yield ue.exists(t)), a)
        if (r.force == null || r.force)
          yield Al(t);
        else
          throw new Error("Destination already exists");
    }
    yield Fo(_t.dirname(t)), yield ue.rename(e, t);
  });
}
var Tl = $e.mv = Z3;
function Al(e) {
  return rr(this, void 0, void 0, function* () {
    if (ue.IS_WINDOWS && /[*"<>|]/.test(e))
      throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
    try {
      yield ue.rm(e, {
        force: !0,
        maxRetries: 3,
        recursive: !0,
        retryDelay: 300
      });
    } catch (t) {
      throw new Error(`File was unable to be removed ${t}`);
    }
  });
}
var Cl = $e.rmRF = Al;
function Fo(e) {
  return rr(this, void 0, void 0, function* () {
    Q3.ok(e, "a path argument must be provided"), yield ue.mkdir(e, { recursive: !0 });
  });
}
var Dl = $e.mkdirP = Fo;
function Rl(e, t) {
  return rr(this, void 0, void 0, function* () {
    if (!e)
      throw new Error("parameter 'tool' is required");
    if (t) {
      const a = yield Rl(e, !1);
      if (!a)
        throw ue.IS_WINDOWS ? new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`) : new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
      return a;
    }
    const r = yield Ol(e);
    return r && r.length > 0 ? r[0] : "";
  });
}
var Pl = $e.which = Rl;
function Ol(e) {
  return rr(this, void 0, void 0, function* () {
    if (!e)
      throw new Error("parameter 'tool' is required");
    const t = [];
    if (ue.IS_WINDOWS && process.env.PATHEXT)
      for (const i of process.env.PATHEXT.split(_t.delimiter))
        i && t.push(i);
    if (ue.isRooted(e)) {
      const i = yield ue.tryGetExecutablePath(e, t);
      return i ? [i] : [];
    }
    if (e.includes(_t.sep))
      return [];
    const r = [];
    if (process.env.PATH)
      for (const i of process.env.PATH.split(_t.delimiter))
        i && r.push(i);
    const a = [];
    for (const i of r) {
      const n = yield ue.tryGetExecutablePath(_t.join(i, e), t);
      n && a.push(n);
    }
    return a;
  });
}
El = $e.findInPath = Ol;
function X3(e) {
  const t = e.force == null ? !0 : e.force, r = !!e.recursive, a = e.copySourceDirectory == null ? !0 : !!e.copySourceDirectory;
  return { force: t, recursive: r, copySourceDirectory: a };
}
function Bl(e, t, r, a) {
  return rr(this, void 0, void 0, function* () {
    if (r >= 255)
      return;
    r++, yield Fo(t);
    const i = yield ue.readdir(e);
    for (const n of i) {
      const o = `${e}/${n}`, p = `${t}/${n}`;
      (yield ue.lstat(o)).isDirectory() ? yield Bl(o, p, r, a) : yield Fl(o, p, a);
    }
    yield ue.chmod(t, (yield ue.stat(e)).mode);
  });
}
function Fl(e, t, r) {
  return rr(this, void 0, void 0, function* () {
    if ((yield ue.lstat(e)).isSymbolicLink()) {
      try {
        yield ue.lstat(t), yield ue.unlink(t);
      } catch (i) {
        i.code === "EPERM" && (yield ue.chmod(t, "0666"), yield ue.unlink(t));
      }
      const a = yield ue.readlink(e);
      yield ue.symlink(a, t, ue.IS_WINDOWS ? "junction" : null);
    } else
      (!(yield ue.exists(t)) || r) && (yield ue.copyFile(e, t));
  });
}
const ec = /* @__PURE__ */ Qa({
  __proto__: null,
  get cp() {
    return Sl;
  },
  default: $e,
  get findInPath() {
    return El;
  },
  get mkdirP() {
    return Dl;
  },
  get mv() {
    return Tl;
  },
  get rmRF() {
    return Cl;
  },
  get which() {
    return Pl;
  }
}, [$e]);
var tc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), rc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), aa = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && tc(t, e, r);
  return rc(t, e), t;
}, Vp = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.argStringToArray = Jr.ToolRunner = void 0;
const M1 = aa(Er), kl = aa(go), ac = aa(r6), ic = aa(ye), nc = aa($e), Gp = aa(Bo), oc = a6, q1 = process.platform === "win32";
class sc extends kl.EventEmitter {
  constructor(t, r, a) {
    if (super(), !t)
      throw new Error("Parameter 'toolPath' cannot be null or empty.");
    this.toolPath = t, this.args = r || [], this.options = a || {};
  }
  _debug(t) {
    this.options.listeners && this.options.listeners.debug && this.options.listeners.debug(t);
  }
  _getCommandString(t, r) {
    const a = this._getSpawnFileName(), i = this._getSpawnArgs(t);
    let n = r ? "" : "[command]";
    if (q1)
      if (this._isCmdFile()) {
        n += a;
        for (const o of i)
          n += ` ${o}`;
      } else if (t.windowsVerbatimArguments) {
        n += `"${a}"`;
        for (const o of i)
          n += ` ${o}`;
      } else {
        n += this._windowsQuoteCmdArg(a);
        for (const o of i)
          n += ` ${this._windowsQuoteCmdArg(o)}`;
      }
    else {
      n += a;
      for (const o of i)
        n += ` ${o}`;
    }
    return n;
  }
  _processLineBuffer(t, r, a) {
    try {
      let i = r + t.toString(), n = i.indexOf(M1.EOL);
      for (; n > -1; ) {
        const o = i.substring(0, n);
        a(o), i = i.substring(n + M1.EOL.length), n = i.indexOf(M1.EOL);
      }
      return i;
    } catch (i) {
      return this._debug(`error processing line. Failed with error ${i}`), "";
    }
  }
  _getSpawnFileName() {
    return q1 && this._isCmdFile() ? process.env.COMSPEC || "cmd.exe" : this.toolPath;
  }
  _getSpawnArgs(t) {
    if (q1 && this._isCmdFile()) {
      let r = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
      for (const a of this.args)
        r += " ", r += t.windowsVerbatimArguments ? a : this._windowsQuoteCmdArg(a);
      return r += '"', [r];
    }
    return this.args;
  }
  _endsWith(t, r) {
    return t.endsWith(r);
  }
  _isCmdFile() {
    const t = this.toolPath.toUpperCase();
    return this._endsWith(t, ".CMD") || this._endsWith(t, ".BAT");
  }
  _windowsQuoteCmdArg(t) {
    if (!this._isCmdFile())
      return this._uvQuoteCmdArg(t);
    if (!t)
      return '""';
    const r = [
      " ",
      "	",
      "&",
      "(",
      ")",
      "[",
      "]",
      "{",
      "}",
      "^",
      "=",
      ";",
      "!",
      "'",
      "+",
      ",",
      "`",
      "~",
      "|",
      "<",
      ">",
      '"'
    ];
    let a = !1;
    for (const o of t)
      if (r.some((p) => p === o)) {
        a = !0;
        break;
      }
    if (!a)
      return t;
    let i = '"', n = !0;
    for (let o = t.length; o > 0; o--)
      i += t[o - 1], n && t[o - 1] === "\\" ? i += "\\" : t[o - 1] === '"' ? (n = !0, i += '"') : n = !1;
    return i += '"', i.split("").reverse().join("");
  }
  _uvQuoteCmdArg(t) {
    if (!t)
      return '""';
    if (!t.includes(" ") && !t.includes("	") && !t.includes('"'))
      return t;
    if (!t.includes('"') && !t.includes("\\"))
      return `"${t}"`;
    let r = '"', a = !0;
    for (let i = t.length; i > 0; i--)
      r += t[i - 1], a && t[i - 1] === "\\" ? r += "\\" : t[i - 1] === '"' ? (a = !0, r += "\\") : a = !1;
    return r += '"', r.split("").reverse().join("");
  }
  _cloneExecOptions(t) {
    t = t || {};
    const r = {
      cwd: t.cwd || process.cwd(),
      env: t.env || process.env,
      silent: t.silent || !1,
      windowsVerbatimArguments: t.windowsVerbatimArguments || !1,
      failOnStdErr: t.failOnStdErr || !1,
      ignoreReturnCode: t.ignoreReturnCode || !1,
      delay: t.delay || 1e4
    };
    return r.outStream = t.outStream || process.stdout, r.errStream = t.errStream || process.stderr, r;
  }
  _getSpawnOptions(t, r) {
    t = t || {};
    const a = {};
    return a.cwd = t.cwd, a.env = t.env, a.windowsVerbatimArguments = t.windowsVerbatimArguments || this._isCmdFile(), t.windowsVerbatimArguments && (a.argv0 = `"${r}"`), a;
  }
  /**
   * Exec a tool.
   * Output will be streamed to the live console.
   * Returns promise with return code
   *
   * @param     tool     path to tool to exec
   * @param     options  optional exec options.  See ExecOptions
   * @returns   number
   */
  exec() {
    return Vp(this, void 0, void 0, function* () {
      return !Gp.isRooted(this.toolPath) && (this.toolPath.includes("/") || q1 && this.toolPath.includes("\\")) && (this.toolPath = ic.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath)), this.toolPath = yield nc.which(this.toolPath, !0), new Promise((t, r) => Vp(this, void 0, void 0, function* () {
        this._debug(`exec tool: ${this.toolPath}`), this._debug("arguments:");
        for (const u of this.args)
          this._debug(`   ${u}`);
        const a = this._cloneExecOptions(this.options);
        !a.silent && a.outStream && a.outStream.write(this._getCommandString(a) + M1.EOL);
        const i = new ko(a, this.toolPath);
        if (i.on("debug", (u) => {
          this._debug(u);
        }), this.options.cwd && !(yield Gp.exists(this.options.cwd)))
          return r(new Error(`The cwd: ${this.options.cwd} does not exist!`));
        const n = this._getSpawnFileName(), o = ac.spawn(n, this._getSpawnArgs(a), this._getSpawnOptions(this.options, n));
        let p = "";
        o.stdout && o.stdout.on("data", (u) => {
          this.options.listeners && this.options.listeners.stdout && this.options.listeners.stdout(u), !a.silent && a.outStream && a.outStream.write(u), p = this._processLineBuffer(u, p, (c) => {
            this.options.listeners && this.options.listeners.stdline && this.options.listeners.stdline(c);
          });
        });
        let l = "";
        if (o.stderr && o.stderr.on("data", (u) => {
          i.processStderr = !0, this.options.listeners && this.options.listeners.stderr && this.options.listeners.stderr(u), !a.silent && a.errStream && a.outStream && (a.failOnStdErr ? a.errStream : a.outStream).write(u), l = this._processLineBuffer(u, l, (c) => {
            this.options.listeners && this.options.listeners.errline && this.options.listeners.errline(c);
          });
        }), o.on("error", (u) => {
          i.processError = u.message, i.processExited = !0, i.processClosed = !0, i.CheckComplete();
        }), o.on("exit", (u) => {
          i.processExitCode = u, i.processExited = !0, this._debug(`Exit code ${u} received from tool '${this.toolPath}'`), i.CheckComplete();
        }), o.on("close", (u) => {
          i.processExitCode = u, i.processExited = !0, i.processClosed = !0, this._debug(`STDIO streams have closed for tool '${this.toolPath}'`), i.CheckComplete();
        }), i.on("done", (u, c) => {
          p.length > 0 && this.emit("stdline", p), l.length > 0 && this.emit("errline", l), o.removeAllListeners(), u ? r(u) : t(c);
        }), this.options.input) {
          if (!o.stdin)
            throw new Error("child process missing stdin");
          o.stdin.end(this.options.input);
        }
      }));
    });
  }
}
Jr.ToolRunner = sc;
function pc(e) {
  const t = [];
  let r = !1, a = !1, i = "";
  function n(o) {
    a && o !== '"' && (i += "\\"), i += o, a = !1;
  }
  for (let o = 0; o < e.length; o++) {
    const p = e.charAt(o);
    if (p === '"') {
      a ? n(p) : r = !r;
      continue;
    }
    if (p === "\\" && a) {
      n(p);
      continue;
    }
    if (p === "\\" && r) {
      a = !0;
      continue;
    }
    if (p === " " && !r) {
      i.length > 0 && (t.push(i), i = "");
      continue;
    }
    n(p);
  }
  return i.length > 0 && t.push(i.trim()), t;
}
Jr.argStringToArray = pc;
class ko extends kl.EventEmitter {
  constructor(t, r) {
    if (super(), this.processClosed = !1, this.processError = "", this.processExitCode = 0, this.processExited = !1, this.processStderr = !1, this.delay = 1e4, this.done = !1, this.timeout = null, !r)
      throw new Error("toolPath must not be empty");
    this.options = t, this.toolPath = r, t.delay && (this.delay = t.delay);
  }
  CheckComplete() {
    this.done || (this.processClosed ? this._setResult() : this.processExited && (this.timeout = oc.setTimeout(ko.HandleTimeout, this.delay, this)));
  }
  _debug(t) {
    this.emit("debug", t);
  }
  _setResult() {
    let t;
    this.processExited && (this.processError ? t = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`) : this.processExitCode !== 0 && !this.options.ignoreReturnCode ? t = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`) : this.processStderr && this.options.failOnStdErr && (t = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`))), this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.done = !0, this.emit("done", t, this.processExitCode);
  }
  static HandleTimeout(t) {
    if (!t.done) {
      if (!t.processClosed && t.processExited) {
        const r = `The STDIO streams did not close within ${t.delay / 1e3} seconds of the exit event from process '${t.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
        t._debug(r);
      }
      t._setResult();
    }
  }
}
var dc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), lc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), uc = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && dc(t, e, r);
  return lc(t, e), t;
}, Nl = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(br, "__esModule", { value: !0 });
var No = br.getExecOutput = Io = br.exec = void 0;
const Lp = t6, jp = uc(Jr);
function Il(e, t, r) {
  return Nl(this, void 0, void 0, function* () {
    const a = jp.argStringToArray(e);
    if (a.length === 0)
      throw new Error("Parameter 'commandLine' cannot be null or empty.");
    const i = a[0];
    return t = a.slice(1).concat(t || []), new jp.ToolRunner(i, t, r).exec();
  });
}
var Io = br.exec = Il;
function cc(e, t, r) {
  var a, i;
  return Nl(this, void 0, void 0, function* () {
    let n = "", o = "";
    const p = new Lp.StringDecoder("utf8"), l = new Lp.StringDecoder("utf8"), u = (a = r == null ? void 0 : r.listeners) === null || a === void 0 ? void 0 : a.stdout, c = (i = r == null ? void 0 : r.listeners) === null || i === void 0 ? void 0 : i.stderr, h = (f) => {
      o += l.write(f), c && c(f);
    }, v = (f) => {
      n += p.write(f), u && u(f);
    }, g = Object.assign(Object.assign({}, r == null ? void 0 : r.listeners), { stdout: v, stderr: h }), w = yield Il(e, t, Object.assign(Object.assign({}, r), { listeners: g }));
    return n += p.end(), o += l.end(), {
      exitCode: w,
      stdout: n,
      stderr: o
    };
  });
}
No = br.getExecOutput = cc;
const mc = /* @__PURE__ */ Qa({
  __proto__: null,
  default: br,
  get exec() {
    return Io;
  },
  get getExecOutput() {
    return No;
  }
}, [br]);
var _r = {}, Ri = {}, Pi = {}, fc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), hc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), gc = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && fc(t, e, r);
  return hc(t, e), t;
};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.getOptions = void 0;
const W1 = gc(Xe());
function vc(e) {
  const t = {
    followSymbolicLinks: !0,
    implicitDescendants: !0,
    matchDirectories: !0,
    omitBrokenSymbolicLinks: !0
  };
  return e && (typeof e.followSymbolicLinks == "boolean" && (t.followSymbolicLinks = e.followSymbolicLinks, W1.debug(`followSymbolicLinks '${t.followSymbolicLinks}'`)), typeof e.implicitDescendants == "boolean" && (t.implicitDescendants = e.implicitDescendants, W1.debug(`implicitDescendants '${t.implicitDescendants}'`)), typeof e.matchDirectories == "boolean" && (t.matchDirectories = e.matchDirectories, W1.debug(`matchDirectories '${t.matchDirectories}'`)), typeof e.omitBrokenSymbolicLinks == "boolean" && (t.omitBrokenSymbolicLinks = e.omitBrokenSymbolicLinks, W1.debug(`omitBrokenSymbolicLinks '${t.omitBrokenSymbolicLinks}'`))), t;
}
Pi.getOptions = vc;
var Xt = {}, Ue = {}, wc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), bc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), _c = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && wc(t, e, r);
  return bc(t, e), t;
}, yc = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.safeTrimTrailingSeparator = Ue.normalizeSeparators = Ue.hasRoot = Ue.hasAbsoluteRoot = Ue.ensureAbsoluteRoot = Ue.dirname = void 0;
const si = _c(ye), cr = yc(Sr), tr = process.platform === "win32";
function Ec(e) {
  if (e = ao(e), tr && /^\\\\[^\\]+(\\[^\\]+)?$/.test(e))
    return e;
  let t = si.dirname(e);
  return tr && /^\\\\[^\\]+\\[^\\]+\\$/.test(t) && (t = ao(t)), t;
}
Ue.dirname = Ec;
function Sc(e, t) {
  if (cr.default(e, "ensureAbsoluteRoot parameter 'root' must not be empty"), cr.default(t, "ensureAbsoluteRoot parameter 'itemPath' must not be empty"), ro(t))
    return t;
  if (tr) {
    if (t.match(/^[A-Z]:[^\\/]|^[A-Z]:$/i)) {
      let r = process.cwd();
      return cr.default(r.match(/^[A-Z]:\\/i), `Expected current directory to start with an absolute drive root. Actual '${r}'`), t[0].toUpperCase() === r[0].toUpperCase() ? t.length === 2 ? `${t[0]}:\\${r.substr(3)}` : (r.endsWith("\\") || (r += "\\"), `${t[0]}:\\${r.substr(3)}${t.substr(2)}`) : `${t[0]}:\\${t.substr(2)}`;
    } else if (Xa(t).match(/^\\$|^\\[^\\]/)) {
      const r = process.cwd();
      return cr.default(r.match(/^[A-Z]:\\/i), `Expected current directory to start with an absolute drive root. Actual '${r}'`), `${r[0]}:\\${t.substr(1)}`;
    }
  }
  return cr.default(ro(e), "ensureAbsoluteRoot parameter 'root' must have an absolute root"), e.endsWith("/") || tr && e.endsWith("\\") || (e += si.sep), e + t;
}
Ue.ensureAbsoluteRoot = Sc;
function ro(e) {
  return cr.default(e, "hasAbsoluteRoot parameter 'itemPath' must not be empty"), e = Xa(e), tr ? e.startsWith("\\\\") || /^[A-Z]:\\/i.test(e) : e.startsWith("/");
}
Ue.hasAbsoluteRoot = ro;
function Tc(e) {
  return cr.default(e, "isRooted parameter 'itemPath' must not be empty"), e = Xa(e), tr ? e.startsWith("\\") || /^[A-Z]:/i.test(e) : e.startsWith("/");
}
Ue.hasRoot = Tc;
function Xa(e) {
  return e = e || "", tr ? (e = e.replace(/\//g, "\\"), (/^\\\\+[^\\]/.test(e) ? "\\" : "") + e.replace(/\\\\+/g, "\\")) : e.replace(/\/\/+/g, "/");
}
Ue.normalizeSeparators = Xa;
function ao(e) {
  return e ? (e = Xa(e), !e.endsWith(si.sep) || e === si.sep || tr && /^[A-Z]:\\$/i.test(e) ? e : e.substr(0, e.length - 1)) : "";
}
Ue.safeTrimTrailingSeparator = ao;
var Oi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.MatchKind = void 0, function(t) {
    t[t.None = 0] = "None", t[t.Directory = 1] = "Directory", t[t.File = 2] = "File", t[t.All = 3] = "All";
  }(e.MatchKind || (e.MatchKind = {}));
})(Oi);
var Ac = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), Cc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Dc = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && Ac(t, e, r);
  return Cc(t, e), t;
};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.partialMatch = Xt.match = Xt.getSearchPaths = void 0;
const Mp = Dc(Ue), Rc = Oi, qp = process.platform === "win32";
function Pc(e) {
  e = e.filter((a) => !a.negate);
  const t = {};
  for (const a of e) {
    const i = qp ? a.searchPath.toUpperCase() : a.searchPath;
    t[i] = "candidate";
  }
  const r = [];
  for (const a of e) {
    const i = qp ? a.searchPath.toUpperCase() : a.searchPath;
    if (t[i] === "included")
      continue;
    let n = !1, o = i, p = Mp.dirname(o);
    for (; p !== o; ) {
      if (t[p]) {
        n = !0;
        break;
      }
      o = p, p = Mp.dirname(o);
    }
    n || (r.push(a.searchPath), t[i] = "included");
  }
  return r;
}
Xt.getSearchPaths = Pc;
function Oc(e, t) {
  let r = Rc.MatchKind.None;
  for (const a of e)
    a.negate ? r &= ~a.match(t) : r |= a.match(t);
  return r;
}
Xt.match = Oc;
function Bc(e, t) {
  return e.some((r) => !r.negate && r.partialMatch(t));
}
Xt.partialMatch = Bc;
var Bi = {}, Fi = {}, Fc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), kc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), $l = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && Fc(t, e, r);
  return kc(t, e), t;
}, Nc = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.Path = void 0;
const Da = $l(ye), Wt = $l(Ue), Ra = Nc(Sr), Ic = process.platform === "win32";
class $c {
  /**
   * Constructs a Path
   * @param itemPath Path or array of segments
   */
  constructor(t) {
    if (this.segments = [], typeof t == "string")
      if (Ra.default(t, "Parameter 'itemPath' must not be empty"), t = Wt.safeTrimTrailingSeparator(t), !Wt.hasRoot(t))
        this.segments = t.split(Da.sep);
      else {
        let r = t, a = Wt.dirname(r);
        for (; a !== r; ) {
          const i = Da.basename(r);
          this.segments.unshift(i), r = a, a = Wt.dirname(r);
        }
        this.segments.unshift(r);
      }
    else {
      Ra.default(t.length > 0, "Parameter 'itemPath' must not be an empty array");
      for (let r = 0; r < t.length; r++) {
        let a = t[r];
        Ra.default(a, "Parameter 'itemPath' must not contain any empty segments"), a = Wt.normalizeSeparators(t[r]), r === 0 && Wt.hasRoot(a) ? (a = Wt.safeTrimTrailingSeparator(a), Ra.default(a === Wt.dirname(a), "Parameter 'itemPath' root segment contains information for multiple segments"), this.segments.push(a)) : (Ra.default(!a.includes(Da.sep), "Parameter 'itemPath' contains unexpected path separators"), this.segments.push(a));
      }
    }
  }
  /**
   * Converts the path to it's string representation
   */
  toString() {
    let t = this.segments[0], r = t.endsWith(Da.sep) || Ic && /^[A-Z]:$/i.test(t);
    for (let a = 1; a < this.segments.length; a++)
      r ? r = !1 : t += Da.sep, t += this.segments[a];
    return t;
  }
}
Fi.Path = $c;
var Uc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), xc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), $o = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && Uc(t, e, r);
  return xc(t, e), t;
}, Vc = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.Pattern = void 0;
const Gc = $o(Er), Pa = $o(ye), Ke = $o(Ue), ur = Vc(Sr), Lc = Ei, Bn = Oi, z1 = Fi, Dt = process.platform === "win32";
class tt {
  constructor(t, r = !1, a, i) {
    this.negate = !1;
    let n;
    if (typeof t == "string")
      n = t.trim();
    else {
      a = a || [], ur.default(a.length, "Parameter 'segments' must not empty");
      const u = tt.getLiteral(a[0]);
      ur.default(u && Ke.hasAbsoluteRoot(u), "Parameter 'segments' first element must be a root path"), n = new z1.Path(a).toString().trim(), t && (n = `!${n}`);
    }
    for (; n.startsWith("!"); )
      this.negate = !this.negate, n = n.substr(1).trim();
    n = tt.fixupPattern(n, i), this.segments = new z1.Path(n).segments, this.trailingSeparator = Ke.normalizeSeparators(n).endsWith(Pa.sep), n = Ke.safeTrimTrailingSeparator(n);
    let o = !1;
    const p = this.segments.map((u) => tt.getLiteral(u)).filter((u) => !o && !(o = u === ""));
    this.searchPath = new z1.Path(p).toString(), this.rootRegExp = new RegExp(tt.regExpEscape(p[0]), Dt ? "i" : ""), this.isImplicitPattern = r;
    const l = {
      dot: !0,
      nobrace: !0,
      nocase: Dt,
      nocomment: !0,
      noext: !0,
      nonegate: !0
    };
    n = Dt ? n.replace(/\\/g, "/") : n, this.minimatch = new Lc.Minimatch(n, l);
  }
  /**
   * Matches the pattern against the specified path
   */
  match(t) {
    return this.segments[this.segments.length - 1] === "**" ? (t = Ke.normalizeSeparators(t), !t.endsWith(Pa.sep) && this.isImplicitPattern === !1 && (t = `${t}${Pa.sep}`)) : t = Ke.safeTrimTrailingSeparator(t), this.minimatch.match(t) ? this.trailingSeparator ? Bn.MatchKind.Directory : Bn.MatchKind.All : Bn.MatchKind.None;
  }
  /**
   * Indicates whether the pattern may match descendants of the specified path
   */
  partialMatch(t) {
    return t = Ke.safeTrimTrailingSeparator(t), Ke.dirname(t) === t ? this.rootRegExp.test(t) : this.minimatch.matchOne(t.split(Dt ? /\\+/ : /\/+/), this.minimatch.set[0], !0);
  }
  /**
   * Escapes glob patterns within a path
   */
  static globEscape(t) {
    return (Dt ? t : t.replace(/\\/g, "\\\\")).replace(/(\[)(?=[^/]+\])/g, "[[]").replace(/\?/g, "[?]").replace(/\*/g, "[*]");
  }
  /**
   * Normalizes slashes and ensures absolute root
   */
  static fixupPattern(t, r) {
    ur.default(t, "pattern cannot be empty");
    const a = new z1.Path(t).segments.map((i) => tt.getLiteral(i));
    if (ur.default(a.every((i, n) => (i !== "." || n === 0) && i !== ".."), `Invalid pattern '${t}'. Relative pathing '.' and '..' is not allowed.`), ur.default(!Ke.hasRoot(t) || a[0], `Invalid pattern '${t}'. Root segment must not contain globs.`), t = Ke.normalizeSeparators(t), t === "." || t.startsWith(`.${Pa.sep}`))
      t = tt.globEscape(process.cwd()) + t.substr(1);
    else if (t === "~" || t.startsWith(`~${Pa.sep}`))
      r = r || Gc.homedir(), ur.default(r, "Unable to determine HOME directory"), ur.default(Ke.hasAbsoluteRoot(r), `Expected HOME directory to be a rooted path. Actual '${r}'`), t = tt.globEscape(r) + t.substr(1);
    else if (Dt && (t.match(/^[A-Z]:$/i) || t.match(/^[A-Z]:[^\\]/i))) {
      let i = Ke.ensureAbsoluteRoot("C:\\dummy-root", t.substr(0, 2));
      t.length > 2 && !i.endsWith("\\") && (i += "\\"), t = tt.globEscape(i) + t.substr(2);
    } else if (Dt && (t === "\\" || t.match(/^\\[^\\]/))) {
      let i = Ke.ensureAbsoluteRoot("C:\\dummy-root", "\\");
      i.endsWith("\\") || (i += "\\"), t = tt.globEscape(i) + t.substr(1);
    } else
      t = Ke.ensureAbsoluteRoot(tt.globEscape(process.cwd()), t);
    return Ke.normalizeSeparators(t);
  }
  /**
   * Attempts to unescape a pattern segment to create a literal path segment.
   * Otherwise returns empty string.
   */
  static getLiteral(t) {
    let r = "";
    for (let a = 0; a < t.length; a++) {
      const i = t[a];
      if (i === "\\" && !Dt && a + 1 < t.length) {
        r += t[++a];
        continue;
      } else {
        if (i === "*" || i === "?")
          return "";
        if (i === "[" && a + 1 < t.length) {
          let n = "", o = -1;
          for (let p = a + 1; p < t.length; p++) {
            const l = t[p];
            if (l === "\\" && !Dt && p + 1 < t.length) {
              n += t[++p];
              continue;
            } else if (l === "]") {
              o = p;
              break;
            } else
              n += l;
          }
          if (o >= 0) {
            if (n.length > 1)
              return "";
            if (n) {
              r += n, a = o;
              continue;
            }
          }
        }
      }
      r += i;
    }
    return r;
  }
  /**
   * Escapes regexp special characters
   * https://javascript.info/regexp-escaping
   */
  static regExpEscape(t) {
    return t.replace(/[[\\^$.|?*+()]/g, "\\$&");
  }
}
Bi.Pattern = tt;
var ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.SearchState = void 0;
class jc {
  constructor(t, r) {
    this.path = t, this.level = r;
  }
}
ki.SearchState = jc;
var Mc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), qc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), e1 = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && Mc(t, e, r);
  return qc(t, e), t;
}, Fn = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
}, Wc = D && D.__asyncValues || function(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function a(n) {
    r[n] = e[n] && function(o) {
      return new Promise(function(p, l) {
        o = e[n](o), i(p, l, o.done, o.value);
      });
    };
  }
  function i(n, o, p, l) {
    Promise.resolve(l).then(function(u) {
      n({ value: u, done: p });
    }, o);
  }
}, Qt = D && D.__await || function(e) {
  return this instanceof Qt ? (this.v = e, this) : new Qt(e);
}, zc = D && D.__asyncGenerator || function(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = r.apply(e, t || []), i, n = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    a[v] && (i[v] = function(g) {
      return new Promise(function(w, f) {
        n.push([v, g, w, f]) > 1 || p(v, g);
      });
    });
  }
  function p(v, g) {
    try {
      l(a[v](g));
    } catch (w) {
      h(n[0][3], w);
    }
  }
  function l(v) {
    v.value instanceof Qt ? Promise.resolve(v.value.v).then(u, c) : h(n[0][2], v);
  }
  function u(v) {
    p("next", v);
  }
  function c(v) {
    p("throw", v);
  }
  function h(v, g) {
    v(g), n.shift(), n.length && p(n[0][0], n[0][1]);
  }
};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.DefaultGlobber = void 0;
const kn = e1(Xe()), Oa = e1(Ve), Wp = e1(Pi), Hc = e1(ye), H1 = e1(Xt), zp = Oi, Hp = Bi, Kp = ki, Kc = process.platform === "win32";
class pi {
  constructor(t) {
    this.patterns = [], this.searchPaths = [], this.options = Wp.getOptions(t);
  }
  getSearchPaths() {
    return this.searchPaths.slice();
  }
  glob() {
    var t, r;
    return Fn(this, void 0, void 0, function* () {
      const a = [];
      try {
        for (var i = Wc(this.globGenerator()), n; n = yield i.next(), !n.done; ) {
          const o = n.value;
          a.push(o);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          n && !n.done && (r = i.return) && (yield r.call(i));
        } finally {
          if (t)
            throw t.error;
        }
      }
      return a;
    });
  }
  globGenerator() {
    return zc(this, arguments, function* () {
      const r = Wp.getOptions(this.options), a = [];
      for (const o of this.patterns)
        a.push(o), r.implicitDescendants && (o.trailingSeparator || o.segments[o.segments.length - 1] !== "**") && a.push(new Hp.Pattern(o.negate, !0, o.segments.concat("**")));
      const i = [];
      for (const o of H1.getSearchPaths(a)) {
        kn.debug(`Search path '${o}'`);
        try {
          yield Qt(Oa.promises.lstat(o));
        } catch (p) {
          if (p.code === "ENOENT")
            continue;
          throw p;
        }
        i.unshift(new Kp.SearchState(o, 1));
      }
      const n = [];
      for (; i.length; ) {
        const o = i.pop(), p = H1.match(a, o.path), l = !!p || H1.partialMatch(a, o.path);
        if (!p && !l)
          continue;
        const u = yield Qt(
          pi.stat(o, r, n)
          // Broken symlink, or symlink cycle detected, or no longer exists
        );
        if (u)
          if (u.isDirectory()) {
            if (p & zp.MatchKind.Directory && r.matchDirectories)
              yield yield Qt(o.path);
            else if (!l)
              continue;
            const c = o.level + 1, h = (yield Qt(Oa.promises.readdir(o.path))).map((v) => new Kp.SearchState(Hc.join(o.path, v), c));
            i.push(...h.reverse());
          } else
            p & zp.MatchKind.File && (yield yield Qt(o.path));
      }
    });
  }
  /**
   * Constructs a DefaultGlobber
   */
  static create(t, r) {
    return Fn(this, void 0, void 0, function* () {
      const a = new pi(r);
      Kc && (t = t.replace(/\r\n/g, `
`), t = t.replace(/\r/g, `
`));
      const i = t.split(`
`).map((n) => n.trim());
      for (const n of i)
        !n || n.startsWith("#") || a.patterns.push(new Hp.Pattern(n));
      return a.searchPaths.push(...H1.getSearchPaths(a.patterns)), a;
    });
  }
  static stat(t, r, a) {
    return Fn(this, void 0, void 0, function* () {
      let i;
      if (r.followSymbolicLinks)
        try {
          i = yield Oa.promises.stat(t.path);
        } catch (n) {
          if (n.code === "ENOENT") {
            if (r.omitBrokenSymbolicLinks) {
              kn.debug(`Broken symlink '${t.path}'`);
              return;
            }
            throw new Error(`No information found for the path '${t.path}'. This may indicate a broken symbolic link.`);
          }
          throw n;
        }
      else
        i = yield Oa.promises.lstat(t.path);
      if (i.isDirectory() && r.followSymbolicLinks) {
        const n = yield Oa.promises.realpath(t.path);
        for (; a.length >= t.level; )
          a.pop();
        if (a.some((o) => o === n)) {
          kn.debug(`Symlink cycle detected for path '${t.path}' and realpath '${n}'`);
          return;
        }
        a.push(n);
      }
      return i;
    });
  }
}
Ri.DefaultGlobber = pi;
var Ni = {}, Yc = D && D.__createBinding || (Object.create ? function(e, t, r, a) {
  a === void 0 && (a = r), Object.defineProperty(e, a, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, a) {
  a === void 0 && (a = r), e[a] = t[r];
}), Qc = D && D.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), ia = D && D.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && Yc(t, e, r);
  return Qc(t, e), t;
}, Jc = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
}, Zc = D && D.__asyncValues || function(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function a(n) {
    r[n] = e[n] && function(o) {
      return new Promise(function(p, l) {
        o = e[n](o), i(p, l, o.done, o.value);
      });
    };
  }
  function i(n, o, p, l) {
    Promise.resolve(l).then(function(u) {
      n({ value: u, done: p });
    }, o);
  }
};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.hashFiles = void 0;
const Yp = ia(fo), Qp = ia(Xe()), Jp = ia(Ve), Xc = ia(Ze), e5 = ia(Ya), t5 = ia(ye);
function r5(e, t, r = !1) {
  var a, i, n;
  return Jc(this, void 0, void 0, function* () {
    const o = r ? Qp.info : Qp.debug;
    let p = !1;
    const l = t || ((n = process.env.GITHUB_WORKSPACE) !== null && n !== void 0 ? n : process.cwd()), u = Yp.createHash("sha256");
    let c = 0;
    try {
      for (var h = Zc(e.globGenerator()), v; v = yield h.next(), !v.done; ) {
        const g = v.value;
        if (o(g), !g.startsWith(`${l}${t5.sep}`)) {
          o(`Ignore '${g}' since it is not under GITHUB_WORKSPACE.`);
          continue;
        }
        if (Jp.statSync(g).isDirectory()) {
          o(`Skip directory '${g}'.`);
          continue;
        }
        const w = Yp.createHash("sha256");
        yield e5.promisify(Xc.pipeline)(Jp.createReadStream(g), w), u.write(w.digest()), c++, p || (p = !0);
      }
    } catch (g) {
      a = { error: g };
    } finally {
      try {
        v && !v.done && (i = h.return) && (yield i.call(h));
      } finally {
        if (a)
          throw a.error;
      }
    }
    return u.end(), p ? (o(`Found ${c} files to hash.`), u.digest("hex")) : (o("No matches found for glob"), "");
  });
}
Ni.hashFiles = r5;
var Ul = D && D.__awaiter || function(e, t, r, a) {
  function i(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function p(c) {
      try {
        u(a.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(a.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? n(c.value) : i(c.value).then(p, l);
    }
    u((a = a.apply(e, t || [])).next());
  });
};
Object.defineProperty(_r, "__esModule", { value: !0 });
var xl = _r.hashFiles = Gl = _r.create = void 0;
const a5 = Ri, i5 = Ni;
function Vl(e, t) {
  return Ul(this, void 0, void 0, function* () {
    return yield a5.DefaultGlobber.create(e, t);
  });
}
var Gl = _r.create = Vl;
function n5(e, t = "", r, a = !1) {
  return Ul(this, void 0, void 0, function* () {
    let i = !0;
    r && typeof r.followSymbolicLinks == "boolean" && (i = r.followSymbolicLinks);
    const n = yield Vl(e, { followSymbolicLinks: i });
    return i5.hashFiles(n, t, a);
  });
}
xl = _r.hashFiles = n5;
const o5 = /* @__PURE__ */ Qa({
  __proto__: null,
  get create() {
    return Gl;
  },
  default: _r,
  get hashFiles() {
    return xl;
  }
}, [_r]);
var Uo = { exports: {} }, Nn, Zp;
function s5() {
  return Zp || (Zp = 1, Nn = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }), Nn;
}
var In, Xp;
function Ll() {
  if (Xp)
    return In;
  Xp = 1;
  const e = s5(), t = {};
  for (const i of Object.keys(e))
    t[e[i]] = i;
  const r = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  In = r;
  for (const i of Object.keys(r)) {
    if (!("channels" in r[i]))
      throw new Error("missing channels property: " + i);
    if (!("labels" in r[i]))
      throw new Error("missing channel labels property: " + i);
    if (r[i].labels.length !== r[i].channels)
      throw new Error("channel and label counts mismatch: " + i);
    const { channels: n, labels: o } = r[i];
    delete r[i].channels, delete r[i].labels, Object.defineProperty(r[i], "channels", { value: n }), Object.defineProperty(r[i], "labels", { value: o });
  }
  r.rgb.hsl = function(i) {
    const n = i[0] / 255, o = i[1] / 255, p = i[2] / 255, l = Math.min(n, o, p), u = Math.max(n, o, p), c = u - l;
    let h, v;
    u === l ? h = 0 : n === u ? h = (o - p) / c : o === u ? h = 2 + (p - n) / c : p === u && (h = 4 + (n - o) / c), h = Math.min(h * 60, 360), h < 0 && (h += 360);
    const g = (l + u) / 2;
    return u === l ? v = 0 : g <= 0.5 ? v = c / (u + l) : v = c / (2 - u - l), [h, v * 100, g * 100];
  }, r.rgb.hsv = function(i) {
    let n, o, p, l, u;
    const c = i[0] / 255, h = i[1] / 255, v = i[2] / 255, g = Math.max(c, h, v), w = g - Math.min(c, h, v), f = function(y) {
      return (g - y) / 6 / w + 1 / 2;
    };
    return w === 0 ? (l = 0, u = 0) : (u = w / g, n = f(c), o = f(h), p = f(v), c === g ? l = p - o : h === g ? l = 1 / 3 + n - p : v === g && (l = 2 / 3 + o - n), l < 0 ? l += 1 : l > 1 && (l -= 1)), [
      l * 360,
      u * 100,
      g * 100
    ];
  }, r.rgb.hwb = function(i) {
    const n = i[0], o = i[1];
    let p = i[2];
    const l = r.rgb.hsl(i)[0], u = 1 / 255 * Math.min(n, Math.min(o, p));
    return p = 1 - 1 / 255 * Math.max(n, Math.max(o, p)), [l, u * 100, p * 100];
  }, r.rgb.cmyk = function(i) {
    const n = i[0] / 255, o = i[1] / 255, p = i[2] / 255, l = Math.min(1 - n, 1 - o, 1 - p), u = (1 - n - l) / (1 - l) || 0, c = (1 - o - l) / (1 - l) || 0, h = (1 - p - l) / (1 - l) || 0;
    return [u * 100, c * 100, h * 100, l * 100];
  };
  function a(i, n) {
    return (i[0] - n[0]) ** 2 + (i[1] - n[1]) ** 2 + (i[2] - n[2]) ** 2;
  }
  return r.rgb.keyword = function(i) {
    const n = t[i];
    if (n)
      return n;
    let o = 1 / 0, p;
    for (const l of Object.keys(e)) {
      const u = e[l], c = a(i, u);
      c < o && (o = c, p = l);
    }
    return p;
  }, r.keyword.rgb = function(i) {
    return e[i];
  }, r.rgb.xyz = function(i) {
    let n = i[0] / 255, o = i[1] / 255, p = i[2] / 255;
    n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92, o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92, p = p > 0.04045 ? ((p + 0.055) / 1.055) ** 2.4 : p / 12.92;
    const l = n * 0.4124 + o * 0.3576 + p * 0.1805, u = n * 0.2126 + o * 0.7152 + p * 0.0722, c = n * 0.0193 + o * 0.1192 + p * 0.9505;
    return [l * 100, u * 100, c * 100];
  }, r.rgb.lab = function(i) {
    const n = r.rgb.xyz(i);
    let o = n[0], p = n[1], l = n[2];
    o /= 95.047, p /= 100, l /= 108.883, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, p = p > 8856e-6 ? p ** (1 / 3) : 7.787 * p + 16 / 116, l = l > 8856e-6 ? l ** (1 / 3) : 7.787 * l + 16 / 116;
    const u = 116 * p - 16, c = 500 * (o - p), h = 200 * (p - l);
    return [u, c, h];
  }, r.hsl.rgb = function(i) {
    const n = i[0] / 360, o = i[1] / 100, p = i[2] / 100;
    let l, u, c;
    if (o === 0)
      return c = p * 255, [c, c, c];
    p < 0.5 ? l = p * (1 + o) : l = p + o - p * o;
    const h = 2 * p - l, v = [0, 0, 0];
    for (let g = 0; g < 3; g++)
      u = n + 1 / 3 * -(g - 1), u < 0 && u++, u > 1 && u--, 6 * u < 1 ? c = h + (l - h) * 6 * u : 2 * u < 1 ? c = l : 3 * u < 2 ? c = h + (l - h) * (2 / 3 - u) * 6 : c = h, v[g] = c * 255;
    return v;
  }, r.hsl.hsv = function(i) {
    const n = i[0];
    let o = i[1] / 100, p = i[2] / 100, l = o;
    const u = Math.max(p, 0.01);
    p *= 2, o *= p <= 1 ? p : 2 - p, l *= u <= 1 ? u : 2 - u;
    const c = (p + o) / 2, h = p === 0 ? 2 * l / (u + l) : 2 * o / (p + o);
    return [n, h * 100, c * 100];
  }, r.hsv.rgb = function(i) {
    const n = i[0] / 60, o = i[1] / 100;
    let p = i[2] / 100;
    const l = Math.floor(n) % 6, u = n - Math.floor(n), c = 255 * p * (1 - o), h = 255 * p * (1 - o * u), v = 255 * p * (1 - o * (1 - u));
    switch (p *= 255, l) {
      case 0:
        return [p, v, c];
      case 1:
        return [h, p, c];
      case 2:
        return [c, p, v];
      case 3:
        return [c, h, p];
      case 4:
        return [v, c, p];
      case 5:
        return [p, c, h];
    }
  }, r.hsv.hsl = function(i) {
    const n = i[0], o = i[1] / 100, p = i[2] / 100, l = Math.max(p, 0.01);
    let u, c;
    c = (2 - o) * p;
    const h = (2 - o) * l;
    return u = o * l, u /= h <= 1 ? h : 2 - h, u = u || 0, c /= 2, [n, u * 100, c * 100];
  }, r.hwb.rgb = function(i) {
    const n = i[0] / 360;
    let o = i[1] / 100, p = i[2] / 100;
    const l = o + p;
    let u;
    l > 1 && (o /= l, p /= l);
    const c = Math.floor(6 * n), h = 1 - p;
    u = 6 * n - c, c & 1 && (u = 1 - u);
    const v = o + u * (h - o);
    let g, w, f;
    switch (c) {
      default:
      case 6:
      case 0:
        g = h, w = v, f = o;
        break;
      case 1:
        g = v, w = h, f = o;
        break;
      case 2:
        g = o, w = h, f = v;
        break;
      case 3:
        g = o, w = v, f = h;
        break;
      case 4:
        g = v, w = o, f = h;
        break;
      case 5:
        g = h, w = o, f = v;
        break;
    }
    return [g * 255, w * 255, f * 255];
  }, r.cmyk.rgb = function(i) {
    const n = i[0] / 100, o = i[1] / 100, p = i[2] / 100, l = i[3] / 100, u = 1 - Math.min(1, n * (1 - l) + l), c = 1 - Math.min(1, o * (1 - l) + l), h = 1 - Math.min(1, p * (1 - l) + l);
    return [u * 255, c * 255, h * 255];
  }, r.xyz.rgb = function(i) {
    const n = i[0] / 100, o = i[1] / 100, p = i[2] / 100;
    let l, u, c;
    return l = n * 3.2406 + o * -1.5372 + p * -0.4986, u = n * -0.9689 + o * 1.8758 + p * 0.0415, c = n * 0.0557 + o * -0.204 + p * 1.057, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92, c = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92, l = Math.min(Math.max(0, l), 1), u = Math.min(Math.max(0, u), 1), c = Math.min(Math.max(0, c), 1), [l * 255, u * 255, c * 255];
  }, r.xyz.lab = function(i) {
    let n = i[0], o = i[1], p = i[2];
    n /= 95.047, o /= 100, p /= 108.883, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, p = p > 8856e-6 ? p ** (1 / 3) : 7.787 * p + 16 / 116;
    const l = 116 * o - 16, u = 500 * (n - o), c = 200 * (o - p);
    return [l, u, c];
  }, r.lab.xyz = function(i) {
    const n = i[0], o = i[1], p = i[2];
    let l, u, c;
    u = (n + 16) / 116, l = o / 500 + u, c = u - p / 200;
    const h = u ** 3, v = l ** 3, g = c ** 3;
    return u = h > 8856e-6 ? h : (u - 16 / 116) / 7.787, l = v > 8856e-6 ? v : (l - 16 / 116) / 7.787, c = g > 8856e-6 ? g : (c - 16 / 116) / 7.787, l *= 95.047, u *= 100, c *= 108.883, [l, u, c];
  }, r.lab.lch = function(i) {
    const n = i[0], o = i[1], p = i[2];
    let l;
    l = Math.atan2(p, o) * 360 / 2 / Math.PI, l < 0 && (l += 360);
    const c = Math.sqrt(o * o + p * p);
    return [n, c, l];
  }, r.lch.lab = function(i) {
    const n = i[0], o = i[1], l = i[2] / 360 * 2 * Math.PI, u = o * Math.cos(l), c = o * Math.sin(l);
    return [n, u, c];
  }, r.rgb.ansi16 = function(i, n = null) {
    const [o, p, l] = i;
    let u = n === null ? r.rgb.hsv(i)[2] : n;
    if (u = Math.round(u / 50), u === 0)
      return 30;
    let c = 30 + (Math.round(l / 255) << 2 | Math.round(p / 255) << 1 | Math.round(o / 255));
    return u === 2 && (c += 60), c;
  }, r.hsv.ansi16 = function(i) {
    return r.rgb.ansi16(r.hsv.rgb(i), i[2]);
  }, r.rgb.ansi256 = function(i) {
    const n = i[0], o = i[1], p = i[2];
    return n === o && o === p ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(o / 255 * 5) + Math.round(p / 255 * 5);
  }, r.ansi16.rgb = function(i) {
    let n = i % 10;
    if (n === 0 || n === 7)
      return i > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n];
    const o = (~~(i > 50) + 1) * 0.5, p = (n & 1) * o * 255, l = (n >> 1 & 1) * o * 255, u = (n >> 2 & 1) * o * 255;
    return [p, l, u];
  }, r.ansi256.rgb = function(i) {
    if (i >= 232) {
      const u = (i - 232) * 10 + 8;
      return [u, u, u];
    }
    i -= 16;
    let n;
    const o = Math.floor(i / 36) / 5 * 255, p = Math.floor((n = i % 36) / 6) / 5 * 255, l = n % 6 / 5 * 255;
    return [o, p, l];
  }, r.rgb.hex = function(i) {
    const o = (((Math.round(i[0]) & 255) << 16) + ((Math.round(i[1]) & 255) << 8) + (Math.round(i[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(o.length) + o;
  }, r.hex.rgb = function(i) {
    const n = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!n)
      return [0, 0, 0];
    let o = n[0];
    n[0].length === 3 && (o = o.split("").map((h) => h + h).join(""));
    const p = parseInt(o, 16), l = p >> 16 & 255, u = p >> 8 & 255, c = p & 255;
    return [l, u, c];
  }, r.rgb.hcg = function(i) {
    const n = i[0] / 255, o = i[1] / 255, p = i[2] / 255, l = Math.max(Math.max(n, o), p), u = Math.min(Math.min(n, o), p), c = l - u;
    let h, v;
    return c < 1 ? h = u / (1 - c) : h = 0, c <= 0 ? v = 0 : l === n ? v = (o - p) / c % 6 : l === o ? v = 2 + (p - n) / c : v = 4 + (n - o) / c, v /= 6, v %= 1, [v * 360, c * 100, h * 100];
  }, r.hsl.hcg = function(i) {
    const n = i[1] / 100, o = i[2] / 100, p = o < 0.5 ? 2 * n * o : 2 * n * (1 - o);
    let l = 0;
    return p < 1 && (l = (o - 0.5 * p) / (1 - p)), [i[0], p * 100, l * 100];
  }, r.hsv.hcg = function(i) {
    const n = i[1] / 100, o = i[2] / 100, p = n * o;
    let l = 0;
    return p < 1 && (l = (o - p) / (1 - p)), [i[0], p * 100, l * 100];
  }, r.hcg.rgb = function(i) {
    const n = i[0] / 360, o = i[1] / 100, p = i[2] / 100;
    if (o === 0)
      return [p * 255, p * 255, p * 255];
    const l = [0, 0, 0], u = n % 1 * 6, c = u % 1, h = 1 - c;
    let v = 0;
    switch (Math.floor(u)) {
      case 0:
        l[0] = 1, l[1] = c, l[2] = 0;
        break;
      case 1:
        l[0] = h, l[1] = 1, l[2] = 0;
        break;
      case 2:
        l[0] = 0, l[1] = 1, l[2] = c;
        break;
      case 3:
        l[0] = 0, l[1] = h, l[2] = 1;
        break;
      case 4:
        l[0] = c, l[1] = 0, l[2] = 1;
        break;
      default:
        l[0] = 1, l[1] = 0, l[2] = h;
    }
    return v = (1 - o) * p, [
      (o * l[0] + v) * 255,
      (o * l[1] + v) * 255,
      (o * l[2] + v) * 255
    ];
  }, r.hcg.hsv = function(i) {
    const n = i[1] / 100, o = i[2] / 100, p = n + o * (1 - n);
    let l = 0;
    return p > 0 && (l = n / p), [i[0], l * 100, p * 100];
  }, r.hcg.hsl = function(i) {
    const n = i[1] / 100, p = i[2] / 100 * (1 - n) + 0.5 * n;
    let l = 0;
    return p > 0 && p < 0.5 ? l = n / (2 * p) : p >= 0.5 && p < 1 && (l = n / (2 * (1 - p))), [i[0], l * 100, p * 100];
  }, r.hcg.hwb = function(i) {
    const n = i[1] / 100, o = i[2] / 100, p = n + o * (1 - n);
    return [i[0], (p - n) * 100, (1 - p) * 100];
  }, r.hwb.hcg = function(i) {
    const n = i[1] / 100, p = 1 - i[2] / 100, l = p - n;
    let u = 0;
    return l < 1 && (u = (p - l) / (1 - l)), [i[0], l * 100, u * 100];
  }, r.apple.rgb = function(i) {
    return [i[0] / 65535 * 255, i[1] / 65535 * 255, i[2] / 65535 * 255];
  }, r.rgb.apple = function(i) {
    return [i[0] / 255 * 65535, i[1] / 255 * 65535, i[2] / 255 * 65535];
  }, r.gray.rgb = function(i) {
    return [i[0] / 100 * 255, i[0] / 100 * 255, i[0] / 100 * 255];
  }, r.gray.hsl = function(i) {
    return [0, 0, i[0]];
  }, r.gray.hsv = r.gray.hsl, r.gray.hwb = function(i) {
    return [0, 100, i[0]];
  }, r.gray.cmyk = function(i) {
    return [0, 0, 0, i[0]];
  }, r.gray.lab = function(i) {
    return [i[0], 0, 0];
  }, r.gray.hex = function(i) {
    const n = Math.round(i[0] / 100 * 255) & 255, p = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
    return "000000".substring(p.length) + p;
  }, r.rgb.gray = function(i) {
    return [(i[0] + i[1] + i[2]) / 3 / 255 * 100];
  }, In;
}
var $n, ed;
function p5() {
  if (ed)
    return $n;
  ed = 1;
  const e = Ll();
  function t() {
    const n = {}, o = Object.keys(e);
    for (let p = o.length, l = 0; l < p; l++)
      n[o[l]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    return n;
  }
  function r(n) {
    const o = t(), p = [n];
    for (o[n].distance = 0; p.length; ) {
      const l = p.pop(), u = Object.keys(e[l]);
      for (let c = u.length, h = 0; h < c; h++) {
        const v = u[h], g = o[v];
        g.distance === -1 && (g.distance = o[l].distance + 1, g.parent = l, p.unshift(v));
      }
    }
    return o;
  }
  function a(n, o) {
    return function(p) {
      return o(n(p));
    };
  }
  function i(n, o) {
    const p = [o[n].parent, n];
    let l = e[o[n].parent][n], u = o[n].parent;
    for (; o[u].parent; )
      p.unshift(o[u].parent), l = a(e[o[u].parent][u], l), u = o[u].parent;
    return l.conversion = p, l;
  }
  return $n = function(n) {
    const o = r(n), p = {}, l = Object.keys(o);
    for (let u = l.length, c = 0; c < u; c++) {
      const h = l[c];
      o[h].parent !== null && (p[h] = i(h, o));
    }
    return p;
  }, $n;
}
var Un, td;
function d5() {
  if (td)
    return Un;
  td = 1;
  const e = Ll(), t = p5(), r = {}, a = Object.keys(e);
  function i(o) {
    const p = function(...l) {
      const u = l[0];
      return u == null ? u : (u.length > 1 && (l = u), o(l));
    };
    return "conversion" in o && (p.conversion = o.conversion), p;
  }
  function n(o) {
    const p = function(...l) {
      const u = l[0];
      if (u == null)
        return u;
      u.length > 1 && (l = u);
      const c = o(l);
      if (typeof c == "object")
        for (let h = c.length, v = 0; v < h; v++)
          c[v] = Math.round(c[v]);
      return c;
    };
    return "conversion" in o && (p.conversion = o.conversion), p;
  }
  return a.forEach((o) => {
    r[o] = {}, Object.defineProperty(r[o], "channels", { value: e[o].channels }), Object.defineProperty(r[o], "labels", { value: e[o].labels });
    const p = t(o);
    Object.keys(p).forEach((u) => {
      const c = p[u];
      r[o][u] = n(c), r[o][u].raw = i(c);
    });
  }), Un = r, Un;
}
Uo.exports;
(function(e) {
  const t = (c, h) => (...v) => `\x1B[${c(...v) + h}m`, r = (c, h) => (...v) => {
    const g = c(...v);
    return `\x1B[${38 + h};5;${g}m`;
  }, a = (c, h) => (...v) => {
    const g = c(...v);
    return `\x1B[${38 + h};2;${g[0]};${g[1]};${g[2]}m`;
  }, i = (c) => c, n = (c, h, v) => [c, h, v], o = (c, h, v) => {
    Object.defineProperty(c, h, {
      get: () => {
        const g = v();
        return Object.defineProperty(c, h, {
          value: g,
          enumerable: !0,
          configurable: !0
        }), g;
      },
      enumerable: !0,
      configurable: !0
    });
  };
  let p;
  const l = (c, h, v, g) => {
    p === void 0 && (p = d5());
    const w = g ? 10 : 0, f = {};
    for (const [y, E] of Object.entries(p)) {
      const N = y === "ansi16" ? "ansi" : y;
      y === h ? f[N] = c(v, w) : typeof E == "object" && (f[N] = c(E[h], w));
    }
    return f;
  };
  function u() {
    const c = /* @__PURE__ */ new Map(), h = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    h.color.gray = h.color.blackBright, h.bgColor.bgGray = h.bgColor.bgBlackBright, h.color.grey = h.color.blackBright, h.bgColor.bgGrey = h.bgColor.bgBlackBright;
    for (const [v, g] of Object.entries(h)) {
      for (const [w, f] of Object.entries(g))
        h[w] = {
          open: `\x1B[${f[0]}m`,
          close: `\x1B[${f[1]}m`
        }, g[w] = h[w], c.set(f[0], f[1]);
      Object.defineProperty(h, v, {
        value: g,
        enumerable: !1
      });
    }
    return Object.defineProperty(h, "codes", {
      value: c,
      enumerable: !1
    }), h.color.close = "\x1B[39m", h.bgColor.close = "\x1B[49m", o(h.color, "ansi", () => l(t, "ansi16", i, !1)), o(h.color, "ansi256", () => l(r, "ansi256", i, !1)), o(h.color, "ansi16m", () => l(a, "rgb", n, !1)), o(h.bgColor, "ansi", () => l(t, "ansi16", i, !0)), o(h.bgColor, "ansi256", () => l(r, "ansi256", i, !0)), o(h.bgColor, "ansi16m", () => l(a, "rgb", n, !0)), h;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: u
  });
})(Uo);
var l5 = Uo.exports, u5 = {
  stdout: !1,
  stderr: !1
};
const c5 = (e, t, r) => {
  let a = e.indexOf(t);
  if (a === -1)
    return e;
  const i = t.length;
  let n = 0, o = "";
  do
    o += e.substr(n, a - n) + t + r, n = a + i, a = e.indexOf(t, n);
  while (a !== -1);
  return o += e.substr(n), o;
}, m5 = (e, t, r, a) => {
  let i = 0, n = "";
  do {
    const o = e[a - 1] === "\r";
    n += e.substr(i, (o ? a - 1 : a) - i) + t + (o ? `\r
` : `
`) + r, i = a + 1, a = e.indexOf(`
`, i);
  } while (a !== -1);
  return n += e.substr(i), n;
};
var f5 = {
  stringReplaceAll: c5,
  stringEncaseCRLFWithFirstIndex: m5
}, xn, rd;
function h5() {
  if (rd)
    return xn;
  rd = 1;
  const e = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, t = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, r = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, a = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, i = /* @__PURE__ */ new Map([
    ["n", `
`],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", "\x1B"],
    ["a", "\x07"]
  ]);
  function n(u) {
    const c = u[0] === "u", h = u[1] === "{";
    return c && !h && u.length === 5 || u[0] === "x" && u.length === 3 ? String.fromCharCode(parseInt(u.slice(1), 16)) : c && h ? String.fromCodePoint(parseInt(u.slice(2, -1), 16)) : i.get(u) || u;
  }
  function o(u, c) {
    const h = [], v = c.trim().split(/\s*,\s*/g);
    let g;
    for (const w of v) {
      const f = Number(w);
      if (!Number.isNaN(f))
        h.push(f);
      else if (g = w.match(r))
        h.push(g[2].replace(a, (y, E, N) => E ? n(E) : N));
      else
        throw new Error(`Invalid Chalk template style argument: ${w} (in style '${u}')`);
    }
    return h;
  }
  function p(u) {
    t.lastIndex = 0;
    const c = [];
    let h;
    for (; (h = t.exec(u)) !== null; ) {
      const v = h[1];
      if (h[2]) {
        const g = o(v, h[2]);
        c.push([v].concat(g));
      } else
        c.push([v]);
    }
    return c;
  }
  function l(u, c) {
    const h = {};
    for (const g of c)
      for (const w of g.styles)
        h[w[0]] = g.inverse ? null : w.slice(1);
    let v = u;
    for (const [g, w] of Object.entries(h))
      if (Array.isArray(w)) {
        if (!(g in v))
          throw new Error(`Unknown Chalk style: ${g}`);
        v = w.length > 0 ? v[g](...w) : v[g];
      }
    return v;
  }
  return xn = (u, c) => {
    const h = [], v = [];
    let g = [];
    if (c.replace(e, (w, f, y, E, N, F) => {
      if (f)
        g.push(n(f));
      else if (E) {
        const U = g.join("");
        g = [], v.push(h.length === 0 ? U : l(u, h)(U)), h.push({ inverse: y, styles: p(E) });
      } else if (N) {
        if (h.length === 0)
          throw new Error("Found extraneous } in Chalk template literal");
        v.push(l(u, h)(g.join(""))), g = [], h.pop();
      } else
        g.push(F);
    }), v.push(g.join("")), h.length > 0) {
      const w = `Chalk template literal is missing ${h.length} closing bracket${h.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(w);
    }
    return v.join("");
  }, xn;
}
const ja = l5, { stdout: io, stderr: no } = u5, {
  stringReplaceAll: g5,
  stringEncaseCRLFWithFirstIndex: v5
} = f5, { isArray: di } = Array, jl = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], na = /* @__PURE__ */ Object.create(null), w5 = (e, t = {}) => {
  if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  const r = io ? io.level : 0;
  e.level = t.level === void 0 ? r : t.level;
};
class b5 {
  constructor(t) {
    return Ml(t);
  }
}
const Ml = (e) => {
  const t = {};
  return w5(t, e), t.template = (...r) => Wl(t.template, ...r), Object.setPrototypeOf(t, Ii.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = () => {
    throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
  }, t.template.Instance = b5, t.template;
};
function Ii(e) {
  return Ml(e);
}
for (const [e, t] of Object.entries(ja))
  na[e] = {
    get() {
      const r = $i(this, xo(t.open, t.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, e, { value: r }), r;
    }
  };
na.visible = {
  get() {
    const e = $i(this, this._styler, !0);
    return Object.defineProperty(this, "visible", { value: e }), e;
  }
};
const ql = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
for (const e of ql)
  na[e] = {
    get() {
      const { level: t } = this;
      return function(...r) {
        const a = xo(ja.color[jl[t]][e](...r), ja.color.close, this._styler);
        return $i(this, a, this._isEmpty);
      };
    }
  };
for (const e of ql) {
  const t = "bg" + e[0].toUpperCase() + e.slice(1);
  na[t] = {
    get() {
      const { level: r } = this;
      return function(...a) {
        const i = xo(ja.bgColor[jl[r]][e](...a), ja.bgColor.close, this._styler);
        return $i(this, i, this._isEmpty);
      };
    }
  };
}
const _5 = Object.defineProperties(() => {
}, {
  ...na,
  level: {
    enumerable: !0,
    get() {
      return this._generator.level;
    },
    set(e) {
      this._generator.level = e;
    }
  }
}), xo = (e, t, r) => {
  let a, i;
  return r === void 0 ? (a = e, i = t) : (a = r.openAll + e, i = t + r.closeAll), {
    open: e,
    close: t,
    openAll: a,
    closeAll: i,
    parent: r
  };
}, $i = (e, t, r) => {
  const a = (...i) => di(i[0]) && di(i[0].raw) ? ad(a, Wl(a, ...i)) : ad(a, i.length === 1 ? "" + i[0] : i.join(" "));
  return Object.setPrototypeOf(a, _5), a._generator = e, a._styler = t, a._isEmpty = r, a;
}, ad = (e, t) => {
  if (e.level <= 0 || !t)
    return e._isEmpty ? "" : t;
  let r = e._styler;
  if (r === void 0)
    return t;
  const { openAll: a, closeAll: i } = r;
  if (t.indexOf("\x1B") !== -1)
    for (; r !== void 0; )
      t = g5(t, r.close, r.open), r = r.parent;
  const n = t.indexOf(`
`);
  return n !== -1 && (t = v5(t, i, a, n)), a + t + i;
};
let Vn;
const Wl = (e, ...t) => {
  const [r] = t;
  if (!di(r) || !di(r.raw))
    return t.join(" ");
  const a = t.slice(1), i = [r.raw[0]];
  for (let n = 1; n < r.length; n++)
    i.push(
      String(a[n - 1]).replace(/[{}\\]/g, "\\$&"),
      String(r.raw[n])
    );
  return Vn === void 0 && (Vn = h5()), Vn(e, i.join(""));
};
Object.defineProperties(Ii.prototype, na);
const Ui = Ii();
Ui.supportsColor = io;
Ui.stderr = Ii({ level: no ? no.level : 0 });
Ui.stderr.supportsColor = no;
var y5 = Ui;
const id = /* @__PURE__ */ vo(y5);
async function E5() {
  const e = nd("GITHUB_EVENT_NAME"), t = JSON.parse(await K0(nd("GITHUB_EVENT_PATH"), "utf-8"));
  return { name: e, data: t };
}
function nd(e) {
  const t = process.env[e];
  if (typeof t != "string")
    throw new Error(`$${e} is not set`);
  if (!t)
    throw new Error(`$${e} is empty`);
  return t;
}
function xi() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && "version" in process ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var Vi = { exports: {} }, S5 = zl;
function zl(e, t, r, a) {
  if (typeof r != "function")
    throw new Error("method for before hook must be a function");
  return a || (a = {}), Array.isArray(t) ? t.reverse().reduce(function(i, n) {
    return zl.bind(null, e, n, i, a);
  }, r)() : Promise.resolve().then(function() {
    return e.registry[t] ? e.registry[t].reduce(function(i, n) {
      return n.hook.bind(null, i, a);
    }, r)() : r(a);
  });
}
var T5 = A5;
function A5(e, t, r, a) {
  var i = a;
  e.registry[r] || (e.registry[r] = []), t === "before" && (a = function(n, o) {
    return Promise.resolve().then(i.bind(null, o)).then(n.bind(null, o));
  }), t === "after" && (a = function(n, o) {
    var p;
    return Promise.resolve().then(n.bind(null, o)).then(function(l) {
      return p = l, i(p, o);
    }).then(function() {
      return p;
    });
  }), t === "error" && (a = function(n, o) {
    return Promise.resolve().then(n.bind(null, o)).catch(function(p) {
      return i(p, o);
    });
  }), e.registry[r].push({
    hook: a,
    orig: i
  });
}
var C5 = D5;
function D5(e, t, r) {
  if (e.registry[t]) {
    var a = e.registry[t].map(function(i) {
      return i.orig;
    }).indexOf(r);
    a !== -1 && e.registry[t].splice(a, 1);
  }
}
var Hl = S5, R5 = T5, P5 = C5, od = Function.bind, sd = od.bind(od);
function Kl(e, t, r) {
  var a = sd(P5, null).apply(
    null,
    r ? [t, r] : [t]
  );
  e.api = { remove: a }, e.remove = a, ["before", "error", "after", "wrap"].forEach(function(i) {
    var n = r ? [t, i, r] : [t, i];
    e[i] = e.api[i] = sd(R5, null).apply(null, n);
  });
}
function O5() {
  var e = "h", t = {
    registry: {}
  }, r = Hl.bind(null, t, e);
  return Kl(r, t, e), r;
}
function Yl() {
  var e = {
    registry: {}
  }, t = Hl.bind(null, e);
  return Kl(t, e), t;
}
var pd = !1;
function oa() {
  return pd || (console.warn(
    '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
  ), pd = !0), Yl();
}
oa.Singular = O5.bind();
oa.Collection = Yl.bind();
Vi.exports = oa;
Vi.exports.Hook = oa;
Vi.exports.Singular = oa.Singular;
var B5 = Vi.exports.Collection = oa.Collection;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function dd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ql(e) {
  var t, r;
  return dd(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(dd(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
function F5(e) {
  return e ? Object.keys(e).reduce((t, r) => (t[r.toLowerCase()] = e[r], t), {}) : {};
}
function Jl(e, t) {
  const r = Object.assign({}, e);
  return Object.keys(t).forEach((a) => {
    Ql(t[a]) ? a in e ? r[a] = Jl(e[a], t[a]) : Object.assign(r, { [a]: t[a] }) : Object.assign(r, { [a]: t[a] });
  }), r;
}
function ld(e) {
  for (const t in e)
    e[t] === void 0 && delete e[t];
  return e;
}
function oo(e, t, r) {
  if (typeof t == "string") {
    let [i, n] = t.split(" ");
    r = Object.assign(n ? { method: i, url: n } : { url: i }, r);
  } else
    r = Object.assign({}, t);
  r.headers = F5(r.headers), ld(r), ld(r.headers);
  const a = Jl(e || {}, r);
  return e && e.mediaType.previews.length && (a.mediaType.previews = e.mediaType.previews.filter((i) => !a.mediaType.previews.includes(i)).concat(a.mediaType.previews)), a.mediaType.previews = a.mediaType.previews.map((i) => i.replace(/-preview/, "")), a;
}
function k5(e, t) {
  const r = /\?/.test(e) ? "&" : "?", a = Object.keys(t);
  return a.length === 0 ? e : e + r + a.map((i) => i === "q" ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${i}=${encodeURIComponent(t[i])}`).join("&");
}
const N5 = /\{[^}]+\}/g;
function I5(e) {
  return e.replace(/^\W+|\W+$/g, "").split(/,/);
}
function $5(e) {
  const t = e.match(N5);
  return t ? t.map(I5).reduce((r, a) => r.concat(a), []) : [];
}
function ud(e, t) {
  return Object.keys(e).filter((r) => !t.includes(r)).reduce((r, a) => (r[a] = e[a], r), {});
}
function Zl(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
    return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")), t;
  }).join("");
}
function jr(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Ba(e, t, r) {
  return t = e === "+" || e === "#" ? Zl(t) : jr(t), r ? jr(r) + "=" + t : t;
}
function xr(e) {
  return e != null;
}
function Gn(e) {
  return e === ";" || e === "&" || e === "?";
}
function U5(e, t, r, a) {
  var i = e[r], n = [];
  if (xr(i) && i !== "")
    if (typeof i == "string" || typeof i == "number" || typeof i == "boolean")
      i = i.toString(), a && a !== "*" && (i = i.substring(0, parseInt(a, 10))), n.push(Ba(t, i, Gn(t) ? r : ""));
    else if (a === "*")
      Array.isArray(i) ? i.filter(xr).forEach(function(o) {
        n.push(Ba(t, o, Gn(t) ? r : ""));
      }) : Object.keys(i).forEach(function(o) {
        xr(i[o]) && n.push(Ba(t, i[o], o));
      });
    else {
      const o = [];
      Array.isArray(i) ? i.filter(xr).forEach(function(p) {
        o.push(Ba(t, p));
      }) : Object.keys(i).forEach(function(p) {
        xr(i[p]) && (o.push(jr(p)), o.push(Ba(t, i[p].toString())));
      }), Gn(t) ? n.push(jr(r) + "=" + o.join(",")) : o.length !== 0 && n.push(o.join(","));
    }
  else
    t === ";" ? xr(i) && n.push(jr(r)) : i === "" && (t === "&" || t === "?") ? n.push(jr(r) + "=") : i === "" && n.push("");
  return n;
}
function x5(e) {
  return {
    expand: V5.bind(null, e)
  };
}
function V5(e, t) {
  var r = ["+", "#", ".", "/", ";", "?", "&"];
  return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(a, i, n) {
    if (i) {
      let p = "";
      const l = [];
      if (r.indexOf(i.charAt(0)) !== -1 && (p = i.charAt(0), i = i.substr(1)), i.split(/,/g).forEach(function(u) {
        var c = /([^:\*]*)(?::(\d+)|(\*))?/.exec(u);
        l.push(U5(t, p, c[1], c[2] || c[3]));
      }), p && p !== "+") {
        var o = ",";
        return p === "?" ? o = "&" : p !== "#" && (o = p), (l.length !== 0 ? p : "") + l.join(o);
      } else
        return l.join(",");
    } else
      return Zl(n);
  });
}
function Xl(e) {
  let t = e.method.toUpperCase(), r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), a = Object.assign({}, e.headers), i, n = ud(e, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const o = $5(r);
  r = x5(r).expand(n), /^http/.test(r) || (r = e.baseUrl + r);
  const p = Object.keys(e).filter((c) => o.includes(c)).concat("baseUrl"), l = ud(n, p);
  if (!/application\/octet-stream/i.test(a.accept) && (e.mediaType.format && (a.accept = a.accept.split(/,/).map((c) => c.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")), e.mediaType.previews.length)) {
    const c = a.accept.match(/[\w-]+(?=-preview)/g) || [];
    a.accept = c.concat(e.mediaType.previews).map((h) => {
      const v = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${h}-preview${v}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(t) ? r = k5(r, l) : "data" in l ? i = l.data : Object.keys(l).length && (i = l), !a["content-type"] && typeof i < "u" && (a["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(t) && typeof i > "u" && (i = ""), Object.assign({ method: t, url: r, headers: a }, typeof i < "u" ? { body: i } : null, e.request ? { request: e.request } : null);
}
function G5(e, t, r) {
  return Xl(oo(e, t, r));
}
function e2(e, t) {
  const r = oo(e, t), a = G5.bind(null, r);
  return Object.assign(a, {
    DEFAULTS: r,
    defaults: e2.bind(null, r),
    merge: oo.bind(null, r),
    parse: Xl
  });
}
const L5 = "7.0.5", j5 = `octokit-endpoint.js/${L5} ${xi()}`, M5 = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": j5
  },
  mediaType: {
    format: "",
    previews: []
  }
}, q5 = e2(null, M5);
var mt = {}, t2 = { exports: {} }, we = {}, W5 = we;
function cd(e) {
  return e < 0 ? -1 : 1;
}
function z5(e) {
  return e % 1 === 0.5 && !(e & 1) ? Math.floor(e) : Math.round(e);
}
function ar(e, t) {
  t.unsigned || --e;
  const r = t.unsigned ? 0 : -Math.pow(2, e), a = Math.pow(2, e) - 1, i = t.moduloBitLength ? Math.pow(2, t.moduloBitLength) : Math.pow(2, e), n = t.moduloBitLength ? Math.pow(2, t.moduloBitLength - 1) : Math.pow(2, e - 1);
  return function(o, p) {
    p || (p = {});
    let l = +o;
    if (p.enforceRange) {
      if (!Number.isFinite(l))
        throw new TypeError("Argument is not a finite number");
      if (l = cd(l) * Math.floor(Math.abs(l)), l < r || l > a)
        throw new TypeError("Argument is not in byte range");
      return l;
    }
    if (!isNaN(l) && p.clamp)
      return l = z5(l), l < r && (l = r), l > a && (l = a), l;
    if (!Number.isFinite(l) || l === 0)
      return 0;
    if (l = cd(l) * Math.floor(Math.abs(l)), l = l % i, !t.unsigned && l >= n)
      return l - i;
    if (t.unsigned) {
      if (l < 0)
        l += i;
      else if (l === -0)
        return 0;
    }
    return l;
  };
}
we.void = function() {
};
we.boolean = function(e) {
  return !!e;
};
we.byte = ar(8, { unsigned: !1 });
we.octet = ar(8, { unsigned: !0 });
we.short = ar(16, { unsigned: !1 });
we["unsigned short"] = ar(16, { unsigned: !0 });
we.long = ar(32, { unsigned: !1 });
we["unsigned long"] = ar(32, { unsigned: !0 });
we["long long"] = ar(32, { unsigned: !1, moduloBitLength: 64 });
we["unsigned long long"] = ar(32, { unsigned: !0, moduloBitLength: 64 });
we.double = function(e) {
  const t = +e;
  if (!Number.isFinite(t))
    throw new TypeError("Argument is not a finite floating-point value");
  return t;
};
we["unrestricted double"] = function(e) {
  const t = +e;
  if (isNaN(t))
    throw new TypeError("Argument is NaN");
  return t;
};
we.float = we.double;
we["unrestricted float"] = we["unrestricted double"];
we.DOMString = function(e, t) {
  return t || (t = {}), t.treatNullAsEmptyString && e === null ? "" : String(e);
};
we.ByteString = function(e, t) {
  const r = String(e);
  let a;
  for (let i = 0; (a = r.codePointAt(i)) !== void 0; ++i)
    if (a > 255)
      throw new TypeError("Argument is not a valid bytestring");
  return r;
};
we.USVString = function(e) {
  const t = String(e), r = t.length, a = [];
  for (let i = 0; i < r; ++i) {
    const n = t.charCodeAt(i);
    if (n < 55296 || n > 57343)
      a.push(String.fromCodePoint(n));
    else if (56320 <= n && n <= 57343)
      a.push(String.fromCodePoint(65533));
    else if (i === r - 1)
      a.push(String.fromCodePoint(65533));
    else {
      const o = t.charCodeAt(i + 1);
      if (56320 <= o && o <= 57343) {
        const p = n & 1023, l = o & 1023;
        a.push(String.fromCodePoint((2 << 15) + (2 << 9) * p + l)), ++i;
      } else
        a.push(String.fromCodePoint(65533));
    }
  }
  return a.join("");
};
we.Date = function(e, t) {
  if (!(e instanceof Date))
    throw new TypeError("Argument is not a Date object");
  if (!isNaN(e))
    return e;
};
we.RegExp = function(e, t) {
  return e instanceof RegExp || (e = new RegExp(e)), e;
};
var r2 = { exports: {} };
(function(e) {
  e.exports.mixin = function(r, a) {
    const i = Object.getOwnPropertyNames(a);
    for (let n = 0; n < i.length; ++n)
      Object.defineProperty(r, i[n], Object.getOwnPropertyDescriptor(a, i[n]));
  }, e.exports.wrapperSymbol = Symbol("wrapper"), e.exports.implSymbol = Symbol("impl"), e.exports.wrapperForImpl = function(t) {
    return t[e.exports.wrapperSymbol];
  }, e.exports.implForWrapper = function(t) {
    return t[e.exports.implSymbol];
  };
})(r2);
var H5 = r2.exports, a2 = {}, i2 = { exports: {} };
const Mr = 2147483647, yt = 36, Vo = 1, Ma = 26, K5 = 38, Y5 = 700, n2 = 72, o2 = 128, s2 = "-", Q5 = /^xn--/, J5 = /[^\0-\x7E]/, Z5 = /[\x2E\u3002\uFF0E\uFF61]/g, X5 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Ln = yt - Vo, Et = Math.floor, jn = String.fromCharCode;
function mr(e) {
  throw new RangeError(X5[e]);
}
function e9(e, t) {
  const r = [];
  let a = e.length;
  for (; a--; )
    r[a] = t(e[a]);
  return r;
}
function p2(e, t) {
  const r = e.split("@");
  let a = "";
  r.length > 1 && (a = r[0] + "@", e = r[1]), e = e.replace(Z5, ".");
  const i = e.split("."), n = e9(i, t).join(".");
  return a + n;
}
function Go(e) {
  const t = [];
  let r = 0;
  const a = e.length;
  for (; r < a; ) {
    const i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < a) {
      const n = e.charCodeAt(r++);
      (n & 64512) == 56320 ? t.push(((i & 1023) << 10) + (n & 1023) + 65536) : (t.push(i), r--);
    } else
      t.push(i);
  }
  return t;
}
const d2 = (e) => String.fromCodePoint(...e), t9 = function(e) {
  return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : yt;
}, md = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, l2 = function(e, t, r) {
  let a = 0;
  for (e = r ? Et(e / Y5) : e >> 1, e += Et(e / t); e > Ln * Ma >> 1; a += yt)
    e = Et(e / Ln);
  return Et(a + (Ln + 1) * e / (e + K5));
}, Lo = function(e) {
  const t = [], r = e.length;
  let a = 0, i = o2, n = n2, o = e.lastIndexOf(s2);
  o < 0 && (o = 0);
  for (let p = 0; p < o; ++p)
    e.charCodeAt(p) >= 128 && mr("not-basic"), t.push(e.charCodeAt(p));
  for (let p = o > 0 ? o + 1 : 0; p < r; ) {
    let l = a;
    for (let c = 1, h = yt; ; h += yt) {
      p >= r && mr("invalid-input");
      const v = t9(e.charCodeAt(p++));
      (v >= yt || v > Et((Mr - a) / c)) && mr("overflow"), a += v * c;
      const g = h <= n ? Vo : h >= n + Ma ? Ma : h - n;
      if (v < g)
        break;
      const w = yt - g;
      c > Et(Mr / w) && mr("overflow"), c *= w;
    }
    const u = t.length + 1;
    n = l2(a - l, u, l == 0), Et(a / u) > Mr - i && mr("overflow"), i += Et(a / u), a %= u, t.splice(a++, 0, i);
  }
  return String.fromCodePoint(...t);
}, jo = function(e) {
  const t = [];
  e = Go(e);
  let r = e.length, a = o2, i = 0, n = n2;
  for (const l of e)
    l < 128 && t.push(jn(l));
  let o = t.length, p = o;
  for (o && t.push(s2); p < r; ) {
    let l = Mr;
    for (const c of e)
      c >= a && c < l && (l = c);
    const u = p + 1;
    l - a > Et((Mr - i) / u) && mr("overflow"), i += (l - a) * u, a = l;
    for (const c of e)
      if (c < a && ++i > Mr && mr("overflow"), c == a) {
        let h = i;
        for (let v = yt; ; v += yt) {
          const g = v <= n ? Vo : v >= n + Ma ? Ma : v - n;
          if (h < g)
            break;
          const w = h - g, f = yt - g;
          t.push(
            jn(md(g + w % f, 0))
          ), h = Et(w / f);
        }
        t.push(jn(md(h, 0))), n = l2(i, u, p == o), i = 0, ++p;
      }
    ++i, ++a;
  }
  return t.join("");
}, u2 = function(e) {
  return p2(e, function(t) {
    return Q5.test(t) ? Lo(t.slice(4).toLowerCase()) : t;
  });
}, c2 = function(e) {
  return p2(e, function(t) {
    return J5.test(t) ? "xn--" + jo(t) : t;
  });
}, r9 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.1.0",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Go,
    encode: d2
  },
  decode: Lo,
  encode: jo,
  toASCII: c2,
  toUnicode: u2
}, a9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Lo,
  default: r9,
  encode: jo,
  toASCII: c2,
  toUnicode: u2,
  ucs2decode: Go,
  ucs2encode: d2
}, Symbol.toStringTag, { value: "Module" })), m2 = /* @__PURE__ */ Ad(a9);
var Gi = {};
const i9 = [
  [
    [
      0,
      44
    ],
    "disallowed_STD3_valid"
  ],
  [
    [
      45,
      46
    ],
    "valid"
  ],
  [
    [
      47,
      47
    ],
    "disallowed_STD3_valid"
  ],
  [
    [
      48,
      57
    ],
    "valid"
  ],
  [
    [
      58,
      64
    ],
    "disallowed_STD3_valid"
  ],
  [
    [
      65,
      65
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      66,
      66
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      67,
      67
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      68,
      68
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      69,
      69
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      70,
      70
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      71,
      71
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      72,
      72
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      73,
      73
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      74,
      74
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      75,
      75
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      76,
      76
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      77,
      77
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      78,
      78
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      79,
      79
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      80,
      80
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      81,
      81
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      82,
      82
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      83,
      83
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      84,
      84
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      85,
      85
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      86,
      86
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      87,
      87
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      88,
      88
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      89,
      89
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      90,
      90
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      91,
      96
    ],
    "disallowed_STD3_valid"
  ],
  [
    [
      97,
      122
    ],
    "valid"
  ],
  [
    [
      123,
      127
    ],
    "disallowed_STD3_valid"
  ],
  [
    [
      128,
      159
    ],
    "disallowed"
  ],
  [
    [
      160,
      160
    ],
    "disallowed_STD3_mapped",
    [
      32
    ]
  ],
  [
    [
      161,
      167
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      168,
      168
    ],
    "disallowed_STD3_mapped",
    [
      32,
      776
    ]
  ],
  [
    [
      169,
      169
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      170,
      170
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      171,
      172
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      173,
      173
    ],
    "ignored"
  ],
  [
    [
      174,
      174
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      175,
      175
    ],
    "disallowed_STD3_mapped",
    [
      32,
      772
    ]
  ],
  [
    [
      176,
      177
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      178,
      178
    ],
    "mapped",
    [
      50
    ]
  ],
  [
    [
      179,
      179
    ],
    "mapped",
    [
      51
    ]
  ],
  [
    [
      180,
      180
    ],
    "disallowed_STD3_mapped",
    [
      32,
      769
    ]
  ],
  [
    [
      181,
      181
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      182,
      182
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      183,
      183
    ],
    "valid"
  ],
  [
    [
      184,
      184
    ],
    "disallowed_STD3_mapped",
    [
      32,
      807
    ]
  ],
  [
    [
      185,
      185
    ],
    "mapped",
    [
      49
    ]
  ],
  [
    [
      186,
      186
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      187,
      187
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      188,
      188
    ],
    "mapped",
    [
      49,
      8260,
      52
    ]
  ],
  [
    [
      189,
      189
    ],
    "mapped",
    [
      49,
      8260,
      50
    ]
  ],
  [
    [
      190,
      190
    ],
    "mapped",
    [
      51,
      8260,
      52
    ]
  ],
  [
    [
      191,
      191
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      192,
      192
    ],
    "mapped",
    [
      224
    ]
  ],
  [
    [
      193,
      193
    ],
    "mapped",
    [
      225
    ]
  ],
  [
    [
      194,
      194
    ],
    "mapped",
    [
      226
    ]
  ],
  [
    [
      195,
      195
    ],
    "mapped",
    [
      227
    ]
  ],
  [
    [
      196,
      196
    ],
    "mapped",
    [
      228
    ]
  ],
  [
    [
      197,
      197
    ],
    "mapped",
    [
      229
    ]
  ],
  [
    [
      198,
      198
    ],
    "mapped",
    [
      230
    ]
  ],
  [
    [
      199,
      199
    ],
    "mapped",
    [
      231
    ]
  ],
  [
    [
      200,
      200
    ],
    "mapped",
    [
      232
    ]
  ],
  [
    [
      201,
      201
    ],
    "mapped",
    [
      233
    ]
  ],
  [
    [
      202,
      202
    ],
    "mapped",
    [
      234
    ]
  ],
  [
    [
      203,
      203
    ],
    "mapped",
    [
      235
    ]
  ],
  [
    [
      204,
      204
    ],
    "mapped",
    [
      236
    ]
  ],
  [
    [
      205,
      205
    ],
    "mapped",
    [
      237
    ]
  ],
  [
    [
      206,
      206
    ],
    "mapped",
    [
      238
    ]
  ],
  [
    [
      207,
      207
    ],
    "mapped",
    [
      239
    ]
  ],
  [
    [
      208,
      208
    ],
    "mapped",
    [
      240
    ]
  ],
  [
    [
      209,
      209
    ],
    "mapped",
    [
      241
    ]
  ],
  [
    [
      210,
      210
    ],
    "mapped",
    [
      242
    ]
  ],
  [
    [
      211,
      211
    ],
    "mapped",
    [
      243
    ]
  ],
  [
    [
      212,
      212
    ],
    "mapped",
    [
      244
    ]
  ],
  [
    [
      213,
      213
    ],
    "mapped",
    [
      245
    ]
  ],
  [
    [
      214,
      214
    ],
    "mapped",
    [
      246
    ]
  ],
  [
    [
      215,
      215
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      216,
      216
    ],
    "mapped",
    [
      248
    ]
  ],
  [
    [
      217,
      217
    ],
    "mapped",
    [
      249
    ]
  ],
  [
    [
      218,
      218
    ],
    "mapped",
    [
      250
    ]
  ],
  [
    [
      219,
      219
    ],
    "mapped",
    [
      251
    ]
  ],
  [
    [
      220,
      220
    ],
    "mapped",
    [
      252
    ]
  ],
  [
    [
      221,
      221
    ],
    "mapped",
    [
      253
    ]
  ],
  [
    [
      222,
      222
    ],
    "mapped",
    [
      254
    ]
  ],
  [
    [
      223,
      223
    ],
    "deviation",
    [
      115,
      115
    ]
  ],
  [
    [
      224,
      246
    ],
    "valid"
  ],
  [
    [
      247,
      247
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      248,
      255
    ],
    "valid"
  ],
  [
    [
      256,
      256
    ],
    "mapped",
    [
      257
    ]
  ],
  [
    [
      257,
      257
    ],
    "valid"
  ],
  [
    [
      258,
      258
    ],
    "mapped",
    [
      259
    ]
  ],
  [
    [
      259,
      259
    ],
    "valid"
  ],
  [
    [
      260,
      260
    ],
    "mapped",
    [
      261
    ]
  ],
  [
    [
      261,
      261
    ],
    "valid"
  ],
  [
    [
      262,
      262
    ],
    "mapped",
    [
      263
    ]
  ],
  [
    [
      263,
      263
    ],
    "valid"
  ],
  [
    [
      264,
      264
    ],
    "mapped",
    [
      265
    ]
  ],
  [
    [
      265,
      265
    ],
    "valid"
  ],
  [
    [
      266,
      266
    ],
    "mapped",
    [
      267
    ]
  ],
  [
    [
      267,
      267
    ],
    "valid"
  ],
  [
    [
      268,
      268
    ],
    "mapped",
    [
      269
    ]
  ],
  [
    [
      269,
      269
    ],
    "valid"
  ],
  [
    [
      270,
      270
    ],
    "mapped",
    [
      271
    ]
  ],
  [
    [
      271,
      271
    ],
    "valid"
  ],
  [
    [
      272,
      272
    ],
    "mapped",
    [
      273
    ]
  ],
  [
    [
      273,
      273
    ],
    "valid"
  ],
  [
    [
      274,
      274
    ],
    "mapped",
    [
      275
    ]
  ],
  [
    [
      275,
      275
    ],
    "valid"
  ],
  [
    [
      276,
      276
    ],
    "mapped",
    [
      277
    ]
  ],
  [
    [
      277,
      277
    ],
    "valid"
  ],
  [
    [
      278,
      278
    ],
    "mapped",
    [
      279
    ]
  ],
  [
    [
      279,
      279
    ],
    "valid"
  ],
  [
    [
      280,
      280
    ],
    "mapped",
    [
      281
    ]
  ],
  [
    [
      281,
      281
    ],
    "valid"
  ],
  [
    [
      282,
      282
    ],
    "mapped",
    [
      283
    ]
  ],
  [
    [
      283,
      283
    ],
    "valid"
  ],
  [
    [
      284,
      284
    ],
    "mapped",
    [
      285
    ]
  ],
  [
    [
      285,
      285
    ],
    "valid"
  ],
  [
    [
      286,
      286
    ],
    "mapped",
    [
      287
    ]
  ],
  [
    [
      287,
      287
    ],
    "valid"
  ],
  [
    [
      288,
      288
    ],
    "mapped",
    [
      289
    ]
  ],
  [
    [
      289,
      289
    ],
    "valid"
  ],
  [
    [
      290,
      290
    ],
    "mapped",
    [
      291
    ]
  ],
  [
    [
      291,
      291
    ],
    "valid"
  ],
  [
    [
      292,
      292
    ],
    "mapped",
    [
      293
    ]
  ],
  [
    [
      293,
      293
    ],
    "valid"
  ],
  [
    [
      294,
      294
    ],
    "mapped",
    [
      295
    ]
  ],
  [
    [
      295,
      295
    ],
    "valid"
  ],
  [
    [
      296,
      296
    ],
    "mapped",
    [
      297
    ]
  ],
  [
    [
      297,
      297
    ],
    "valid"
  ],
  [
    [
      298,
      298
    ],
    "mapped",
    [
      299
    ]
  ],
  [
    [
      299,
      299
    ],
    "valid"
  ],
  [
    [
      300,
      300
    ],
    "mapped",
    [
      301
    ]
  ],
  [
    [
      301,
      301
    ],
    "valid"
  ],
  [
    [
      302,
      302
    ],
    "mapped",
    [
      303
    ]
  ],
  [
    [
      303,
      303
    ],
    "valid"
  ],
  [
    [
      304,
      304
    ],
    "mapped",
    [
      105,
      775
    ]
  ],
  [
    [
      305,
      305
    ],
    "valid"
  ],
  [
    [
      306,
      307
    ],
    "mapped",
    [
      105,
      106
    ]
  ],
  [
    [
      308,
      308
    ],
    "mapped",
    [
      309
    ]
  ],
  [
    [
      309,
      309
    ],
    "valid"
  ],
  [
    [
      310,
      310
    ],
    "mapped",
    [
      311
    ]
  ],
  [
    [
      311,
      312
    ],
    "valid"
  ],
  [
    [
      313,
      313
    ],
    "mapped",
    [
      314
    ]
  ],
  [
    [
      314,
      314
    ],
    "valid"
  ],
  [
    [
      315,
      315
    ],
    "mapped",
    [
      316
    ]
  ],
  [
    [
      316,
      316
    ],
    "valid"
  ],
  [
    [
      317,
      317
    ],
    "mapped",
    [
      318
    ]
  ],
  [
    [
      318,
      318
    ],
    "valid"
  ],
  [
    [
      319,
      320
    ],
    "mapped",
    [
      108,
      183
    ]
  ],
  [
    [
      321,
      321
    ],
    "mapped",
    [
      322
    ]
  ],
  [
    [
      322,
      322
    ],
    "valid"
  ],
  [
    [
      323,
      323
    ],
    "mapped",
    [
      324
    ]
  ],
  [
    [
      324,
      324
    ],
    "valid"
  ],
  [
    [
      325,
      325
    ],
    "mapped",
    [
      326
    ]
  ],
  [
    [
      326,
      326
    ],
    "valid"
  ],
  [
    [
      327,
      327
    ],
    "mapped",
    [
      328
    ]
  ],
  [
    [
      328,
      328
    ],
    "valid"
  ],
  [
    [
      329,
      329
    ],
    "mapped",
    [
      700,
      110
    ]
  ],
  [
    [
      330,
      330
    ],
    "mapped",
    [
      331
    ]
  ],
  [
    [
      331,
      331
    ],
    "valid"
  ],
  [
    [
      332,
      332
    ],
    "mapped",
    [
      333
    ]
  ],
  [
    [
      333,
      333
    ],
    "valid"
  ],
  [
    [
      334,
      334
    ],
    "mapped",
    [
      335
    ]
  ],
  [
    [
      335,
      335
    ],
    "valid"
  ],
  [
    [
      336,
      336
    ],
    "mapped",
    [
      337
    ]
  ],
  [
    [
      337,
      337
    ],
    "valid"
  ],
  [
    [
      338,
      338
    ],
    "mapped",
    [
      339
    ]
  ],
  [
    [
      339,
      339
    ],
    "valid"
  ],
  [
    [
      340,
      340
    ],
    "mapped",
    [
      341
    ]
  ],
  [
    [
      341,
      341
    ],
    "valid"
  ],
  [
    [
      342,
      342
    ],
    "mapped",
    [
      343
    ]
  ],
  [
    [
      343,
      343
    ],
    "valid"
  ],
  [
    [
      344,
      344
    ],
    "mapped",
    [
      345
    ]
  ],
  [
    [
      345,
      345
    ],
    "valid"
  ],
  [
    [
      346,
      346
    ],
    "mapped",
    [
      347
    ]
  ],
  [
    [
      347,
      347
    ],
    "valid"
  ],
  [
    [
      348,
      348
    ],
    "mapped",
    [
      349
    ]
  ],
  [
    [
      349,
      349
    ],
    "valid"
  ],
  [
    [
      350,
      350
    ],
    "mapped",
    [
      351
    ]
  ],
  [
    [
      351,
      351
    ],
    "valid"
  ],
  [
    [
      352,
      352
    ],
    "mapped",
    [
      353
    ]
  ],
  [
    [
      353,
      353
    ],
    "valid"
  ],
  [
    [
      354,
      354
    ],
    "mapped",
    [
      355
    ]
  ],
  [
    [
      355,
      355
    ],
    "valid"
  ],
  [
    [
      356,
      356
    ],
    "mapped",
    [
      357
    ]
  ],
  [
    [
      357,
      357
    ],
    "valid"
  ],
  [
    [
      358,
      358
    ],
    "mapped",
    [
      359
    ]
  ],
  [
    [
      359,
      359
    ],
    "valid"
  ],
  [
    [
      360,
      360
    ],
    "mapped",
    [
      361
    ]
  ],
  [
    [
      361,
      361
    ],
    "valid"
  ],
  [
    [
      362,
      362
    ],
    "mapped",
    [
      363
    ]
  ],
  [
    [
      363,
      363
    ],
    "valid"
  ],
  [
    [
      364,
      364
    ],
    "mapped",
    [
      365
    ]
  ],
  [
    [
      365,
      365
    ],
    "valid"
  ],
  [
    [
      366,
      366
    ],
    "mapped",
    [
      367
    ]
  ],
  [
    [
      367,
      367
    ],
    "valid"
  ],
  [
    [
      368,
      368
    ],
    "mapped",
    [
      369
    ]
  ],
  [
    [
      369,
      369
    ],
    "valid"
  ],
  [
    [
      370,
      370
    ],
    "mapped",
    [
      371
    ]
  ],
  [
    [
      371,
      371
    ],
    "valid"
  ],
  [
    [
      372,
      372
    ],
    "mapped",
    [
      373
    ]
  ],
  [
    [
      373,
      373
    ],
    "valid"
  ],
  [
    [
      374,
      374
    ],
    "mapped",
    [
      375
    ]
  ],
  [
    [
      375,
      375
    ],
    "valid"
  ],
  [
    [
      376,
      376
    ],
    "mapped",
    [
      255
    ]
  ],
  [
    [
      377,
      377
    ],
    "mapped",
    [
      378
    ]
  ],
  [
    [
      378,
      378
    ],
    "valid"
  ],
  [
    [
      379,
      379
    ],
    "mapped",
    [
      380
    ]
  ],
  [
    [
      380,
      380
    ],
    "valid"
  ],
  [
    [
      381,
      381
    ],
    "mapped",
    [
      382
    ]
  ],
  [
    [
      382,
      382
    ],
    "valid"
  ],
  [
    [
      383,
      383
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      384,
      384
    ],
    "valid"
  ],
  [
    [
      385,
      385
    ],
    "mapped",
    [
      595
    ]
  ],
  [
    [
      386,
      386
    ],
    "mapped",
    [
      387
    ]
  ],
  [
    [
      387,
      387
    ],
    "valid"
  ],
  [
    [
      388,
      388
    ],
    "mapped",
    [
      389
    ]
  ],
  [
    [
      389,
      389
    ],
    "valid"
  ],
  [
    [
      390,
      390
    ],
    "mapped",
    [
      596
    ]
  ],
  [
    [
      391,
      391
    ],
    "mapped",
    [
      392
    ]
  ],
  [
    [
      392,
      392
    ],
    "valid"
  ],
  [
    [
      393,
      393
    ],
    "mapped",
    [
      598
    ]
  ],
  [
    [
      394,
      394
    ],
    "mapped",
    [
      599
    ]
  ],
  [
    [
      395,
      395
    ],
    "mapped",
    [
      396
    ]
  ],
  [
    [
      396,
      397
    ],
    "valid"
  ],
  [
    [
      398,
      398
    ],
    "mapped",
    [
      477
    ]
  ],
  [
    [
      399,
      399
    ],
    "mapped",
    [
      601
    ]
  ],
  [
    [
      400,
      400
    ],
    "mapped",
    [
      603
    ]
  ],
  [
    [
      401,
      401
    ],
    "mapped",
    [
      402
    ]
  ],
  [
    [
      402,
      402
    ],
    "valid"
  ],
  [
    [
      403,
      403
    ],
    "mapped",
    [
      608
    ]
  ],
  [
    [
      404,
      404
    ],
    "mapped",
    [
      611
    ]
  ],
  [
    [
      405,
      405
    ],
    "valid"
  ],
  [
    [
      406,
      406
    ],
    "mapped",
    [
      617
    ]
  ],
  [
    [
      407,
      407
    ],
    "mapped",
    [
      616
    ]
  ],
  [
    [
      408,
      408
    ],
    "mapped",
    [
      409
    ]
  ],
  [
    [
      409,
      411
    ],
    "valid"
  ],
  [
    [
      412,
      412
    ],
    "mapped",
    [
      623
    ]
  ],
  [
    [
      413,
      413
    ],
    "mapped",
    [
      626
    ]
  ],
  [
    [
      414,
      414
    ],
    "valid"
  ],
  [
    [
      415,
      415
    ],
    "mapped",
    [
      629
    ]
  ],
  [
    [
      416,
      416
    ],
    "mapped",
    [
      417
    ]
  ],
  [
    [
      417,
      417
    ],
    "valid"
  ],
  [
    [
      418,
      418
    ],
    "mapped",
    [
      419
    ]
  ],
  [
    [
      419,
      419
    ],
    "valid"
  ],
  [
    [
      420,
      420
    ],
    "mapped",
    [
      421
    ]
  ],
  [
    [
      421,
      421
    ],
    "valid"
  ],
  [
    [
      422,
      422
    ],
    "mapped",
    [
      640
    ]
  ],
  [
    [
      423,
      423
    ],
    "mapped",
    [
      424
    ]
  ],
  [
    [
      424,
      424
    ],
    "valid"
  ],
  [
    [
      425,
      425
    ],
    "mapped",
    [
      643
    ]
  ],
  [
    [
      426,
      427
    ],
    "valid"
  ],
  [
    [
      428,
      428
    ],
    "mapped",
    [
      429
    ]
  ],
  [
    [
      429,
      429
    ],
    "valid"
  ],
  [
    [
      430,
      430
    ],
    "mapped",
    [
      648
    ]
  ],
  [
    [
      431,
      431
    ],
    "mapped",
    [
      432
    ]
  ],
  [
    [
      432,
      432
    ],
    "valid"
  ],
  [
    [
      433,
      433
    ],
    "mapped",
    [
      650
    ]
  ],
  [
    [
      434,
      434
    ],
    "mapped",
    [
      651
    ]
  ],
  [
    [
      435,
      435
    ],
    "mapped",
    [
      436
    ]
  ],
  [
    [
      436,
      436
    ],
    "valid"
  ],
  [
    [
      437,
      437
    ],
    "mapped",
    [
      438
    ]
  ],
  [
    [
      438,
      438
    ],
    "valid"
  ],
  [
    [
      439,
      439
    ],
    "mapped",
    [
      658
    ]
  ],
  [
    [
      440,
      440
    ],
    "mapped",
    [
      441
    ]
  ],
  [
    [
      441,
      443
    ],
    "valid"
  ],
  [
    [
      444,
      444
    ],
    "mapped",
    [
      445
    ]
  ],
  [
    [
      445,
      451
    ],
    "valid"
  ],
  [
    [
      452,
      454
    ],
    "mapped",
    [
      100,
      382
    ]
  ],
  [
    [
      455,
      457
    ],
    "mapped",
    [
      108,
      106
    ]
  ],
  [
    [
      458,
      460
    ],
    "mapped",
    [
      110,
      106
    ]
  ],
  [
    [
      461,
      461
    ],
    "mapped",
    [
      462
    ]
  ],
  [
    [
      462,
      462
    ],
    "valid"
  ],
  [
    [
      463,
      463
    ],
    "mapped",
    [
      464
    ]
  ],
  [
    [
      464,
      464
    ],
    "valid"
  ],
  [
    [
      465,
      465
    ],
    "mapped",
    [
      466
    ]
  ],
  [
    [
      466,
      466
    ],
    "valid"
  ],
  [
    [
      467,
      467
    ],
    "mapped",
    [
      468
    ]
  ],
  [
    [
      468,
      468
    ],
    "valid"
  ],
  [
    [
      469,
      469
    ],
    "mapped",
    [
      470
    ]
  ],
  [
    [
      470,
      470
    ],
    "valid"
  ],
  [
    [
      471,
      471
    ],
    "mapped",
    [
      472
    ]
  ],
  [
    [
      472,
      472
    ],
    "valid"
  ],
  [
    [
      473,
      473
    ],
    "mapped",
    [
      474
    ]
  ],
  [
    [
      474,
      474
    ],
    "valid"
  ],
  [
    [
      475,
      475
    ],
    "mapped",
    [
      476
    ]
  ],
  [
    [
      476,
      477
    ],
    "valid"
  ],
  [
    [
      478,
      478
    ],
    "mapped",
    [
      479
    ]
  ],
  [
    [
      479,
      479
    ],
    "valid"
  ],
  [
    [
      480,
      480
    ],
    "mapped",
    [
      481
    ]
  ],
  [
    [
      481,
      481
    ],
    "valid"
  ],
  [
    [
      482,
      482
    ],
    "mapped",
    [
      483
    ]
  ],
  [
    [
      483,
      483
    ],
    "valid"
  ],
  [
    [
      484,
      484
    ],
    "mapped",
    [
      485
    ]
  ],
  [
    [
      485,
      485
    ],
    "valid"
  ],
  [
    [
      486,
      486
    ],
    "mapped",
    [
      487
    ]
  ],
  [
    [
      487,
      487
    ],
    "valid"
  ],
  [
    [
      488,
      488
    ],
    "mapped",
    [
      489
    ]
  ],
  [
    [
      489,
      489
    ],
    "valid"
  ],
  [
    [
      490,
      490
    ],
    "mapped",
    [
      491
    ]
  ],
  [
    [
      491,
      491
    ],
    "valid"
  ],
  [
    [
      492,
      492
    ],
    "mapped",
    [
      493
    ]
  ],
  [
    [
      493,
      493
    ],
    "valid"
  ],
  [
    [
      494,
      494
    ],
    "mapped",
    [
      495
    ]
  ],
  [
    [
      495,
      496
    ],
    "valid"
  ],
  [
    [
      497,
      499
    ],
    "mapped",
    [
      100,
      122
    ]
  ],
  [
    [
      500,
      500
    ],
    "mapped",
    [
      501
    ]
  ],
  [
    [
      501,
      501
    ],
    "valid"
  ],
  [
    [
      502,
      502
    ],
    "mapped",
    [
      405
    ]
  ],
  [
    [
      503,
      503
    ],
    "mapped",
    [
      447
    ]
  ],
  [
    [
      504,
      504
    ],
    "mapped",
    [
      505
    ]
  ],
  [
    [
      505,
      505
    ],
    "valid"
  ],
  [
    [
      506,
      506
    ],
    "mapped",
    [
      507
    ]
  ],
  [
    [
      507,
      507
    ],
    "valid"
  ],
  [
    [
      508,
      508
    ],
    "mapped",
    [
      509
    ]
  ],
  [
    [
      509,
      509
    ],
    "valid"
  ],
  [
    [
      510,
      510
    ],
    "mapped",
    [
      511
    ]
  ],
  [
    [
      511,
      511
    ],
    "valid"
  ],
  [
    [
      512,
      512
    ],
    "mapped",
    [
      513
    ]
  ],
  [
    [
      513,
      513
    ],
    "valid"
  ],
  [
    [
      514,
      514
    ],
    "mapped",
    [
      515
    ]
  ],
  [
    [
      515,
      515
    ],
    "valid"
  ],
  [
    [
      516,
      516
    ],
    "mapped",
    [
      517
    ]
  ],
  [
    [
      517,
      517
    ],
    "valid"
  ],
  [
    [
      518,
      518
    ],
    "mapped",
    [
      519
    ]
  ],
  [
    [
      519,
      519
    ],
    "valid"
  ],
  [
    [
      520,
      520
    ],
    "mapped",
    [
      521
    ]
  ],
  [
    [
      521,
      521
    ],
    "valid"
  ],
  [
    [
      522,
      522
    ],
    "mapped",
    [
      523
    ]
  ],
  [
    [
      523,
      523
    ],
    "valid"
  ],
  [
    [
      524,
      524
    ],
    "mapped",
    [
      525
    ]
  ],
  [
    [
      525,
      525
    ],
    "valid"
  ],
  [
    [
      526,
      526
    ],
    "mapped",
    [
      527
    ]
  ],
  [
    [
      527,
      527
    ],
    "valid"
  ],
  [
    [
      528,
      528
    ],
    "mapped",
    [
      529
    ]
  ],
  [
    [
      529,
      529
    ],
    "valid"
  ],
  [
    [
      530,
      530
    ],
    "mapped",
    [
      531
    ]
  ],
  [
    [
      531,
      531
    ],
    "valid"
  ],
  [
    [
      532,
      532
    ],
    "mapped",
    [
      533
    ]
  ],
  [
    [
      533,
      533
    ],
    "valid"
  ],
  [
    [
      534,
      534
    ],
    "mapped",
    [
      535
    ]
  ],
  [
    [
      535,
      535
    ],
    "valid"
  ],
  [
    [
      536,
      536
    ],
    "mapped",
    [
      537
    ]
  ],
  [
    [
      537,
      537
    ],
    "valid"
  ],
  [
    [
      538,
      538
    ],
    "mapped",
    [
      539
    ]
  ],
  [
    [
      539,
      539
    ],
    "valid"
  ],
  [
    [
      540,
      540
    ],
    "mapped",
    [
      541
    ]
  ],
  [
    [
      541,
      541
    ],
    "valid"
  ],
  [
    [
      542,
      542
    ],
    "mapped",
    [
      543
    ]
  ],
  [
    [
      543,
      543
    ],
    "valid"
  ],
  [
    [
      544,
      544
    ],
    "mapped",
    [
      414
    ]
  ],
  [
    [
      545,
      545
    ],
    "valid"
  ],
  [
    [
      546,
      546
    ],
    "mapped",
    [
      547
    ]
  ],
  [
    [
      547,
      547
    ],
    "valid"
  ],
  [
    [
      548,
      548
    ],
    "mapped",
    [
      549
    ]
  ],
  [
    [
      549,
      549
    ],
    "valid"
  ],
  [
    [
      550,
      550
    ],
    "mapped",
    [
      551
    ]
  ],
  [
    [
      551,
      551
    ],
    "valid"
  ],
  [
    [
      552,
      552
    ],
    "mapped",
    [
      553
    ]
  ],
  [
    [
      553,
      553
    ],
    "valid"
  ],
  [
    [
      554,
      554
    ],
    "mapped",
    [
      555
    ]
  ],
  [
    [
      555,
      555
    ],
    "valid"
  ],
  [
    [
      556,
      556
    ],
    "mapped",
    [
      557
    ]
  ],
  [
    [
      557,
      557
    ],
    "valid"
  ],
  [
    [
      558,
      558
    ],
    "mapped",
    [
      559
    ]
  ],
  [
    [
      559,
      559
    ],
    "valid"
  ],
  [
    [
      560,
      560
    ],
    "mapped",
    [
      561
    ]
  ],
  [
    [
      561,
      561
    ],
    "valid"
  ],
  [
    [
      562,
      562
    ],
    "mapped",
    [
      563
    ]
  ],
  [
    [
      563,
      563
    ],
    "valid"
  ],
  [
    [
      564,
      566
    ],
    "valid"
  ],
  [
    [
      567,
      569
    ],
    "valid"
  ],
  [
    [
      570,
      570
    ],
    "mapped",
    [
      11365
    ]
  ],
  [
    [
      571,
      571
    ],
    "mapped",
    [
      572
    ]
  ],
  [
    [
      572,
      572
    ],
    "valid"
  ],
  [
    [
      573,
      573
    ],
    "mapped",
    [
      410
    ]
  ],
  [
    [
      574,
      574
    ],
    "mapped",
    [
      11366
    ]
  ],
  [
    [
      575,
      576
    ],
    "valid"
  ],
  [
    [
      577,
      577
    ],
    "mapped",
    [
      578
    ]
  ],
  [
    [
      578,
      578
    ],
    "valid"
  ],
  [
    [
      579,
      579
    ],
    "mapped",
    [
      384
    ]
  ],
  [
    [
      580,
      580
    ],
    "mapped",
    [
      649
    ]
  ],
  [
    [
      581,
      581
    ],
    "mapped",
    [
      652
    ]
  ],
  [
    [
      582,
      582
    ],
    "mapped",
    [
      583
    ]
  ],
  [
    [
      583,
      583
    ],
    "valid"
  ],
  [
    [
      584,
      584
    ],
    "mapped",
    [
      585
    ]
  ],
  [
    [
      585,
      585
    ],
    "valid"
  ],
  [
    [
      586,
      586
    ],
    "mapped",
    [
      587
    ]
  ],
  [
    [
      587,
      587
    ],
    "valid"
  ],
  [
    [
      588,
      588
    ],
    "mapped",
    [
      589
    ]
  ],
  [
    [
      589,
      589
    ],
    "valid"
  ],
  [
    [
      590,
      590
    ],
    "mapped",
    [
      591
    ]
  ],
  [
    [
      591,
      591
    ],
    "valid"
  ],
  [
    [
      592,
      680
    ],
    "valid"
  ],
  [
    [
      681,
      685
    ],
    "valid"
  ],
  [
    [
      686,
      687
    ],
    "valid"
  ],
  [
    [
      688,
      688
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      689,
      689
    ],
    "mapped",
    [
      614
    ]
  ],
  [
    [
      690,
      690
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      691,
      691
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      692,
      692
    ],
    "mapped",
    [
      633
    ]
  ],
  [
    [
      693,
      693
    ],
    "mapped",
    [
      635
    ]
  ],
  [
    [
      694,
      694
    ],
    "mapped",
    [
      641
    ]
  ],
  [
    [
      695,
      695
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      696,
      696
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      697,
      705
    ],
    "valid"
  ],
  [
    [
      706,
      709
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      710,
      721
    ],
    "valid"
  ],
  [
    [
      722,
      727
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      728,
      728
    ],
    "disallowed_STD3_mapped",
    [
      32,
      774
    ]
  ],
  [
    [
      729,
      729
    ],
    "disallowed_STD3_mapped",
    [
      32,
      775
    ]
  ],
  [
    [
      730,
      730
    ],
    "disallowed_STD3_mapped",
    [
      32,
      778
    ]
  ],
  [
    [
      731,
      731
    ],
    "disallowed_STD3_mapped",
    [
      32,
      808
    ]
  ],
  [
    [
      732,
      732
    ],
    "disallowed_STD3_mapped",
    [
      32,
      771
    ]
  ],
  [
    [
      733,
      733
    ],
    "disallowed_STD3_mapped",
    [
      32,
      779
    ]
  ],
  [
    [
      734,
      734
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      735,
      735
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      736,
      736
    ],
    "mapped",
    [
      611
    ]
  ],
  [
    [
      737,
      737
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      738,
      738
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      739,
      739
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      740,
      740
    ],
    "mapped",
    [
      661
    ]
  ],
  [
    [
      741,
      745
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      746,
      747
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      748,
      748
    ],
    "valid"
  ],
  [
    [
      749,
      749
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      750,
      750
    ],
    "valid"
  ],
  [
    [
      751,
      767
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      768,
      831
    ],
    "valid"
  ],
  [
    [
      832,
      832
    ],
    "mapped",
    [
      768
    ]
  ],
  [
    [
      833,
      833
    ],
    "mapped",
    [
      769
    ]
  ],
  [
    [
      834,
      834
    ],
    "valid"
  ],
  [
    [
      835,
      835
    ],
    "mapped",
    [
      787
    ]
  ],
  [
    [
      836,
      836
    ],
    "mapped",
    [
      776,
      769
    ]
  ],
  [
    [
      837,
      837
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      838,
      846
    ],
    "valid"
  ],
  [
    [
      847,
      847
    ],
    "ignored"
  ],
  [
    [
      848,
      855
    ],
    "valid"
  ],
  [
    [
      856,
      860
    ],
    "valid"
  ],
  [
    [
      861,
      863
    ],
    "valid"
  ],
  [
    [
      864,
      865
    ],
    "valid"
  ],
  [
    [
      866,
      866
    ],
    "valid"
  ],
  [
    [
      867,
      879
    ],
    "valid"
  ],
  [
    [
      880,
      880
    ],
    "mapped",
    [
      881
    ]
  ],
  [
    [
      881,
      881
    ],
    "valid"
  ],
  [
    [
      882,
      882
    ],
    "mapped",
    [
      883
    ]
  ],
  [
    [
      883,
      883
    ],
    "valid"
  ],
  [
    [
      884,
      884
    ],
    "mapped",
    [
      697
    ]
  ],
  [
    [
      885,
      885
    ],
    "valid"
  ],
  [
    [
      886,
      886
    ],
    "mapped",
    [
      887
    ]
  ],
  [
    [
      887,
      887
    ],
    "valid"
  ],
  [
    [
      888,
      889
    ],
    "disallowed"
  ],
  [
    [
      890,
      890
    ],
    "disallowed_STD3_mapped",
    [
      32,
      953
    ]
  ],
  [
    [
      891,
      893
    ],
    "valid"
  ],
  [
    [
      894,
      894
    ],
    "disallowed_STD3_mapped",
    [
      59
    ]
  ],
  [
    [
      895,
      895
    ],
    "mapped",
    [
      1011
    ]
  ],
  [
    [
      896,
      899
    ],
    "disallowed"
  ],
  [
    [
      900,
      900
    ],
    "disallowed_STD3_mapped",
    [
      32,
      769
    ]
  ],
  [
    [
      901,
      901
    ],
    "disallowed_STD3_mapped",
    [
      32,
      776,
      769
    ]
  ],
  [
    [
      902,
      902
    ],
    "mapped",
    [
      940
    ]
  ],
  [
    [
      903,
      903
    ],
    "mapped",
    [
      183
    ]
  ],
  [
    [
      904,
      904
    ],
    "mapped",
    [
      941
    ]
  ],
  [
    [
      905,
      905
    ],
    "mapped",
    [
      942
    ]
  ],
  [
    [
      906,
      906
    ],
    "mapped",
    [
      943
    ]
  ],
  [
    [
      907,
      907
    ],
    "disallowed"
  ],
  [
    [
      908,
      908
    ],
    "mapped",
    [
      972
    ]
  ],
  [
    [
      909,
      909
    ],
    "disallowed"
  ],
  [
    [
      910,
      910
    ],
    "mapped",
    [
      973
    ]
  ],
  [
    [
      911,
      911
    ],
    "mapped",
    [
      974
    ]
  ],
  [
    [
      912,
      912
    ],
    "valid"
  ],
  [
    [
      913,
      913
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      914,
      914
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      915,
      915
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      916,
      916
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      917,
      917
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      918,
      918
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      919,
      919
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      920,
      920
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      921,
      921
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      922,
      922
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      923,
      923
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      924,
      924
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      925,
      925
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      926,
      926
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      927,
      927
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      928,
      928
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      929,
      929
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      930,
      930
    ],
    "disallowed"
  ],
  [
    [
      931,
      931
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      932,
      932
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      933,
      933
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      934,
      934
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      935,
      935
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      936,
      936
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      937,
      937
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      938,
      938
    ],
    "mapped",
    [
      970
    ]
  ],
  [
    [
      939,
      939
    ],
    "mapped",
    [
      971
    ]
  ],
  [
    [
      940,
      961
    ],
    "valid"
  ],
  [
    [
      962,
      962
    ],
    "deviation",
    [
      963
    ]
  ],
  [
    [
      963,
      974
    ],
    "valid"
  ],
  [
    [
      975,
      975
    ],
    "mapped",
    [
      983
    ]
  ],
  [
    [
      976,
      976
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      977,
      977
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      978,
      978
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      979,
      979
    ],
    "mapped",
    [
      973
    ]
  ],
  [
    [
      980,
      980
    ],
    "mapped",
    [
      971
    ]
  ],
  [
    [
      981,
      981
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      982,
      982
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      983,
      983
    ],
    "valid"
  ],
  [
    [
      984,
      984
    ],
    "mapped",
    [
      985
    ]
  ],
  [
    [
      985,
      985
    ],
    "valid"
  ],
  [
    [
      986,
      986
    ],
    "mapped",
    [
      987
    ]
  ],
  [
    [
      987,
      987
    ],
    "valid"
  ],
  [
    [
      988,
      988
    ],
    "mapped",
    [
      989
    ]
  ],
  [
    [
      989,
      989
    ],
    "valid"
  ],
  [
    [
      990,
      990
    ],
    "mapped",
    [
      991
    ]
  ],
  [
    [
      991,
      991
    ],
    "valid"
  ],
  [
    [
      992,
      992
    ],
    "mapped",
    [
      993
    ]
  ],
  [
    [
      993,
      993
    ],
    "valid"
  ],
  [
    [
      994,
      994
    ],
    "mapped",
    [
      995
    ]
  ],
  [
    [
      995,
      995
    ],
    "valid"
  ],
  [
    [
      996,
      996
    ],
    "mapped",
    [
      997
    ]
  ],
  [
    [
      997,
      997
    ],
    "valid"
  ],
  [
    [
      998,
      998
    ],
    "mapped",
    [
      999
    ]
  ],
  [
    [
      999,
      999
    ],
    "valid"
  ],
  [
    [
      1e3,
      1e3
    ],
    "mapped",
    [
      1001
    ]
  ],
  [
    [
      1001,
      1001
    ],
    "valid"
  ],
  [
    [
      1002,
      1002
    ],
    "mapped",
    [
      1003
    ]
  ],
  [
    [
      1003,
      1003
    ],
    "valid"
  ],
  [
    [
      1004,
      1004
    ],
    "mapped",
    [
      1005
    ]
  ],
  [
    [
      1005,
      1005
    ],
    "valid"
  ],
  [
    [
      1006,
      1006
    ],
    "mapped",
    [
      1007
    ]
  ],
  [
    [
      1007,
      1007
    ],
    "valid"
  ],
  [
    [
      1008,
      1008
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      1009,
      1009
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      1010,
      1010
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      1011,
      1011
    ],
    "valid"
  ],
  [
    [
      1012,
      1012
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      1013,
      1013
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      1014,
      1014
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1015,
      1015
    ],
    "mapped",
    [
      1016
    ]
  ],
  [
    [
      1016,
      1016
    ],
    "valid"
  ],
  [
    [
      1017,
      1017
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      1018,
      1018
    ],
    "mapped",
    [
      1019
    ]
  ],
  [
    [
      1019,
      1019
    ],
    "valid"
  ],
  [
    [
      1020,
      1020
    ],
    "valid"
  ],
  [
    [
      1021,
      1021
    ],
    "mapped",
    [
      891
    ]
  ],
  [
    [
      1022,
      1022
    ],
    "mapped",
    [
      892
    ]
  ],
  [
    [
      1023,
      1023
    ],
    "mapped",
    [
      893
    ]
  ],
  [
    [
      1024,
      1024
    ],
    "mapped",
    [
      1104
    ]
  ],
  [
    [
      1025,
      1025
    ],
    "mapped",
    [
      1105
    ]
  ],
  [
    [
      1026,
      1026
    ],
    "mapped",
    [
      1106
    ]
  ],
  [
    [
      1027,
      1027
    ],
    "mapped",
    [
      1107
    ]
  ],
  [
    [
      1028,
      1028
    ],
    "mapped",
    [
      1108
    ]
  ],
  [
    [
      1029,
      1029
    ],
    "mapped",
    [
      1109
    ]
  ],
  [
    [
      1030,
      1030
    ],
    "mapped",
    [
      1110
    ]
  ],
  [
    [
      1031,
      1031
    ],
    "mapped",
    [
      1111
    ]
  ],
  [
    [
      1032,
      1032
    ],
    "mapped",
    [
      1112
    ]
  ],
  [
    [
      1033,
      1033
    ],
    "mapped",
    [
      1113
    ]
  ],
  [
    [
      1034,
      1034
    ],
    "mapped",
    [
      1114
    ]
  ],
  [
    [
      1035,
      1035
    ],
    "mapped",
    [
      1115
    ]
  ],
  [
    [
      1036,
      1036
    ],
    "mapped",
    [
      1116
    ]
  ],
  [
    [
      1037,
      1037
    ],
    "mapped",
    [
      1117
    ]
  ],
  [
    [
      1038,
      1038
    ],
    "mapped",
    [
      1118
    ]
  ],
  [
    [
      1039,
      1039
    ],
    "mapped",
    [
      1119
    ]
  ],
  [
    [
      1040,
      1040
    ],
    "mapped",
    [
      1072
    ]
  ],
  [
    [
      1041,
      1041
    ],
    "mapped",
    [
      1073
    ]
  ],
  [
    [
      1042,
      1042
    ],
    "mapped",
    [
      1074
    ]
  ],
  [
    [
      1043,
      1043
    ],
    "mapped",
    [
      1075
    ]
  ],
  [
    [
      1044,
      1044
    ],
    "mapped",
    [
      1076
    ]
  ],
  [
    [
      1045,
      1045
    ],
    "mapped",
    [
      1077
    ]
  ],
  [
    [
      1046,
      1046
    ],
    "mapped",
    [
      1078
    ]
  ],
  [
    [
      1047,
      1047
    ],
    "mapped",
    [
      1079
    ]
  ],
  [
    [
      1048,
      1048
    ],
    "mapped",
    [
      1080
    ]
  ],
  [
    [
      1049,
      1049
    ],
    "mapped",
    [
      1081
    ]
  ],
  [
    [
      1050,
      1050
    ],
    "mapped",
    [
      1082
    ]
  ],
  [
    [
      1051,
      1051
    ],
    "mapped",
    [
      1083
    ]
  ],
  [
    [
      1052,
      1052
    ],
    "mapped",
    [
      1084
    ]
  ],
  [
    [
      1053,
      1053
    ],
    "mapped",
    [
      1085
    ]
  ],
  [
    [
      1054,
      1054
    ],
    "mapped",
    [
      1086
    ]
  ],
  [
    [
      1055,
      1055
    ],
    "mapped",
    [
      1087
    ]
  ],
  [
    [
      1056,
      1056
    ],
    "mapped",
    [
      1088
    ]
  ],
  [
    [
      1057,
      1057
    ],
    "mapped",
    [
      1089
    ]
  ],
  [
    [
      1058,
      1058
    ],
    "mapped",
    [
      1090
    ]
  ],
  [
    [
      1059,
      1059
    ],
    "mapped",
    [
      1091
    ]
  ],
  [
    [
      1060,
      1060
    ],
    "mapped",
    [
      1092
    ]
  ],
  [
    [
      1061,
      1061
    ],
    "mapped",
    [
      1093
    ]
  ],
  [
    [
      1062,
      1062
    ],
    "mapped",
    [
      1094
    ]
  ],
  [
    [
      1063,
      1063
    ],
    "mapped",
    [
      1095
    ]
  ],
  [
    [
      1064,
      1064
    ],
    "mapped",
    [
      1096
    ]
  ],
  [
    [
      1065,
      1065
    ],
    "mapped",
    [
      1097
    ]
  ],
  [
    [
      1066,
      1066
    ],
    "mapped",
    [
      1098
    ]
  ],
  [
    [
      1067,
      1067
    ],
    "mapped",
    [
      1099
    ]
  ],
  [
    [
      1068,
      1068
    ],
    "mapped",
    [
      1100
    ]
  ],
  [
    [
      1069,
      1069
    ],
    "mapped",
    [
      1101
    ]
  ],
  [
    [
      1070,
      1070
    ],
    "mapped",
    [
      1102
    ]
  ],
  [
    [
      1071,
      1071
    ],
    "mapped",
    [
      1103
    ]
  ],
  [
    [
      1072,
      1103
    ],
    "valid"
  ],
  [
    [
      1104,
      1104
    ],
    "valid"
  ],
  [
    [
      1105,
      1116
    ],
    "valid"
  ],
  [
    [
      1117,
      1117
    ],
    "valid"
  ],
  [
    [
      1118,
      1119
    ],
    "valid"
  ],
  [
    [
      1120,
      1120
    ],
    "mapped",
    [
      1121
    ]
  ],
  [
    [
      1121,
      1121
    ],
    "valid"
  ],
  [
    [
      1122,
      1122
    ],
    "mapped",
    [
      1123
    ]
  ],
  [
    [
      1123,
      1123
    ],
    "valid"
  ],
  [
    [
      1124,
      1124
    ],
    "mapped",
    [
      1125
    ]
  ],
  [
    [
      1125,
      1125
    ],
    "valid"
  ],
  [
    [
      1126,
      1126
    ],
    "mapped",
    [
      1127
    ]
  ],
  [
    [
      1127,
      1127
    ],
    "valid"
  ],
  [
    [
      1128,
      1128
    ],
    "mapped",
    [
      1129
    ]
  ],
  [
    [
      1129,
      1129
    ],
    "valid"
  ],
  [
    [
      1130,
      1130
    ],
    "mapped",
    [
      1131
    ]
  ],
  [
    [
      1131,
      1131
    ],
    "valid"
  ],
  [
    [
      1132,
      1132
    ],
    "mapped",
    [
      1133
    ]
  ],
  [
    [
      1133,
      1133
    ],
    "valid"
  ],
  [
    [
      1134,
      1134
    ],
    "mapped",
    [
      1135
    ]
  ],
  [
    [
      1135,
      1135
    ],
    "valid"
  ],
  [
    [
      1136,
      1136
    ],
    "mapped",
    [
      1137
    ]
  ],
  [
    [
      1137,
      1137
    ],
    "valid"
  ],
  [
    [
      1138,
      1138
    ],
    "mapped",
    [
      1139
    ]
  ],
  [
    [
      1139,
      1139
    ],
    "valid"
  ],
  [
    [
      1140,
      1140
    ],
    "mapped",
    [
      1141
    ]
  ],
  [
    [
      1141,
      1141
    ],
    "valid"
  ],
  [
    [
      1142,
      1142
    ],
    "mapped",
    [
      1143
    ]
  ],
  [
    [
      1143,
      1143
    ],
    "valid"
  ],
  [
    [
      1144,
      1144
    ],
    "mapped",
    [
      1145
    ]
  ],
  [
    [
      1145,
      1145
    ],
    "valid"
  ],
  [
    [
      1146,
      1146
    ],
    "mapped",
    [
      1147
    ]
  ],
  [
    [
      1147,
      1147
    ],
    "valid"
  ],
  [
    [
      1148,
      1148
    ],
    "mapped",
    [
      1149
    ]
  ],
  [
    [
      1149,
      1149
    ],
    "valid"
  ],
  [
    [
      1150,
      1150
    ],
    "mapped",
    [
      1151
    ]
  ],
  [
    [
      1151,
      1151
    ],
    "valid"
  ],
  [
    [
      1152,
      1152
    ],
    "mapped",
    [
      1153
    ]
  ],
  [
    [
      1153,
      1153
    ],
    "valid"
  ],
  [
    [
      1154,
      1154
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1155,
      1158
    ],
    "valid"
  ],
  [
    [
      1159,
      1159
    ],
    "valid"
  ],
  [
    [
      1160,
      1161
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1162,
      1162
    ],
    "mapped",
    [
      1163
    ]
  ],
  [
    [
      1163,
      1163
    ],
    "valid"
  ],
  [
    [
      1164,
      1164
    ],
    "mapped",
    [
      1165
    ]
  ],
  [
    [
      1165,
      1165
    ],
    "valid"
  ],
  [
    [
      1166,
      1166
    ],
    "mapped",
    [
      1167
    ]
  ],
  [
    [
      1167,
      1167
    ],
    "valid"
  ],
  [
    [
      1168,
      1168
    ],
    "mapped",
    [
      1169
    ]
  ],
  [
    [
      1169,
      1169
    ],
    "valid"
  ],
  [
    [
      1170,
      1170
    ],
    "mapped",
    [
      1171
    ]
  ],
  [
    [
      1171,
      1171
    ],
    "valid"
  ],
  [
    [
      1172,
      1172
    ],
    "mapped",
    [
      1173
    ]
  ],
  [
    [
      1173,
      1173
    ],
    "valid"
  ],
  [
    [
      1174,
      1174
    ],
    "mapped",
    [
      1175
    ]
  ],
  [
    [
      1175,
      1175
    ],
    "valid"
  ],
  [
    [
      1176,
      1176
    ],
    "mapped",
    [
      1177
    ]
  ],
  [
    [
      1177,
      1177
    ],
    "valid"
  ],
  [
    [
      1178,
      1178
    ],
    "mapped",
    [
      1179
    ]
  ],
  [
    [
      1179,
      1179
    ],
    "valid"
  ],
  [
    [
      1180,
      1180
    ],
    "mapped",
    [
      1181
    ]
  ],
  [
    [
      1181,
      1181
    ],
    "valid"
  ],
  [
    [
      1182,
      1182
    ],
    "mapped",
    [
      1183
    ]
  ],
  [
    [
      1183,
      1183
    ],
    "valid"
  ],
  [
    [
      1184,
      1184
    ],
    "mapped",
    [
      1185
    ]
  ],
  [
    [
      1185,
      1185
    ],
    "valid"
  ],
  [
    [
      1186,
      1186
    ],
    "mapped",
    [
      1187
    ]
  ],
  [
    [
      1187,
      1187
    ],
    "valid"
  ],
  [
    [
      1188,
      1188
    ],
    "mapped",
    [
      1189
    ]
  ],
  [
    [
      1189,
      1189
    ],
    "valid"
  ],
  [
    [
      1190,
      1190
    ],
    "mapped",
    [
      1191
    ]
  ],
  [
    [
      1191,
      1191
    ],
    "valid"
  ],
  [
    [
      1192,
      1192
    ],
    "mapped",
    [
      1193
    ]
  ],
  [
    [
      1193,
      1193
    ],
    "valid"
  ],
  [
    [
      1194,
      1194
    ],
    "mapped",
    [
      1195
    ]
  ],
  [
    [
      1195,
      1195
    ],
    "valid"
  ],
  [
    [
      1196,
      1196
    ],
    "mapped",
    [
      1197
    ]
  ],
  [
    [
      1197,
      1197
    ],
    "valid"
  ],
  [
    [
      1198,
      1198
    ],
    "mapped",
    [
      1199
    ]
  ],
  [
    [
      1199,
      1199
    ],
    "valid"
  ],
  [
    [
      1200,
      1200
    ],
    "mapped",
    [
      1201
    ]
  ],
  [
    [
      1201,
      1201
    ],
    "valid"
  ],
  [
    [
      1202,
      1202
    ],
    "mapped",
    [
      1203
    ]
  ],
  [
    [
      1203,
      1203
    ],
    "valid"
  ],
  [
    [
      1204,
      1204
    ],
    "mapped",
    [
      1205
    ]
  ],
  [
    [
      1205,
      1205
    ],
    "valid"
  ],
  [
    [
      1206,
      1206
    ],
    "mapped",
    [
      1207
    ]
  ],
  [
    [
      1207,
      1207
    ],
    "valid"
  ],
  [
    [
      1208,
      1208
    ],
    "mapped",
    [
      1209
    ]
  ],
  [
    [
      1209,
      1209
    ],
    "valid"
  ],
  [
    [
      1210,
      1210
    ],
    "mapped",
    [
      1211
    ]
  ],
  [
    [
      1211,
      1211
    ],
    "valid"
  ],
  [
    [
      1212,
      1212
    ],
    "mapped",
    [
      1213
    ]
  ],
  [
    [
      1213,
      1213
    ],
    "valid"
  ],
  [
    [
      1214,
      1214
    ],
    "mapped",
    [
      1215
    ]
  ],
  [
    [
      1215,
      1215
    ],
    "valid"
  ],
  [
    [
      1216,
      1216
    ],
    "disallowed"
  ],
  [
    [
      1217,
      1217
    ],
    "mapped",
    [
      1218
    ]
  ],
  [
    [
      1218,
      1218
    ],
    "valid"
  ],
  [
    [
      1219,
      1219
    ],
    "mapped",
    [
      1220
    ]
  ],
  [
    [
      1220,
      1220
    ],
    "valid"
  ],
  [
    [
      1221,
      1221
    ],
    "mapped",
    [
      1222
    ]
  ],
  [
    [
      1222,
      1222
    ],
    "valid"
  ],
  [
    [
      1223,
      1223
    ],
    "mapped",
    [
      1224
    ]
  ],
  [
    [
      1224,
      1224
    ],
    "valid"
  ],
  [
    [
      1225,
      1225
    ],
    "mapped",
    [
      1226
    ]
  ],
  [
    [
      1226,
      1226
    ],
    "valid"
  ],
  [
    [
      1227,
      1227
    ],
    "mapped",
    [
      1228
    ]
  ],
  [
    [
      1228,
      1228
    ],
    "valid"
  ],
  [
    [
      1229,
      1229
    ],
    "mapped",
    [
      1230
    ]
  ],
  [
    [
      1230,
      1230
    ],
    "valid"
  ],
  [
    [
      1231,
      1231
    ],
    "valid"
  ],
  [
    [
      1232,
      1232
    ],
    "mapped",
    [
      1233
    ]
  ],
  [
    [
      1233,
      1233
    ],
    "valid"
  ],
  [
    [
      1234,
      1234
    ],
    "mapped",
    [
      1235
    ]
  ],
  [
    [
      1235,
      1235
    ],
    "valid"
  ],
  [
    [
      1236,
      1236
    ],
    "mapped",
    [
      1237
    ]
  ],
  [
    [
      1237,
      1237
    ],
    "valid"
  ],
  [
    [
      1238,
      1238
    ],
    "mapped",
    [
      1239
    ]
  ],
  [
    [
      1239,
      1239
    ],
    "valid"
  ],
  [
    [
      1240,
      1240
    ],
    "mapped",
    [
      1241
    ]
  ],
  [
    [
      1241,
      1241
    ],
    "valid"
  ],
  [
    [
      1242,
      1242
    ],
    "mapped",
    [
      1243
    ]
  ],
  [
    [
      1243,
      1243
    ],
    "valid"
  ],
  [
    [
      1244,
      1244
    ],
    "mapped",
    [
      1245
    ]
  ],
  [
    [
      1245,
      1245
    ],
    "valid"
  ],
  [
    [
      1246,
      1246
    ],
    "mapped",
    [
      1247
    ]
  ],
  [
    [
      1247,
      1247
    ],
    "valid"
  ],
  [
    [
      1248,
      1248
    ],
    "mapped",
    [
      1249
    ]
  ],
  [
    [
      1249,
      1249
    ],
    "valid"
  ],
  [
    [
      1250,
      1250
    ],
    "mapped",
    [
      1251
    ]
  ],
  [
    [
      1251,
      1251
    ],
    "valid"
  ],
  [
    [
      1252,
      1252
    ],
    "mapped",
    [
      1253
    ]
  ],
  [
    [
      1253,
      1253
    ],
    "valid"
  ],
  [
    [
      1254,
      1254
    ],
    "mapped",
    [
      1255
    ]
  ],
  [
    [
      1255,
      1255
    ],
    "valid"
  ],
  [
    [
      1256,
      1256
    ],
    "mapped",
    [
      1257
    ]
  ],
  [
    [
      1257,
      1257
    ],
    "valid"
  ],
  [
    [
      1258,
      1258
    ],
    "mapped",
    [
      1259
    ]
  ],
  [
    [
      1259,
      1259
    ],
    "valid"
  ],
  [
    [
      1260,
      1260
    ],
    "mapped",
    [
      1261
    ]
  ],
  [
    [
      1261,
      1261
    ],
    "valid"
  ],
  [
    [
      1262,
      1262
    ],
    "mapped",
    [
      1263
    ]
  ],
  [
    [
      1263,
      1263
    ],
    "valid"
  ],
  [
    [
      1264,
      1264
    ],
    "mapped",
    [
      1265
    ]
  ],
  [
    [
      1265,
      1265
    ],
    "valid"
  ],
  [
    [
      1266,
      1266
    ],
    "mapped",
    [
      1267
    ]
  ],
  [
    [
      1267,
      1267
    ],
    "valid"
  ],
  [
    [
      1268,
      1268
    ],
    "mapped",
    [
      1269
    ]
  ],
  [
    [
      1269,
      1269
    ],
    "valid"
  ],
  [
    [
      1270,
      1270
    ],
    "mapped",
    [
      1271
    ]
  ],
  [
    [
      1271,
      1271
    ],
    "valid"
  ],
  [
    [
      1272,
      1272
    ],
    "mapped",
    [
      1273
    ]
  ],
  [
    [
      1273,
      1273
    ],
    "valid"
  ],
  [
    [
      1274,
      1274
    ],
    "mapped",
    [
      1275
    ]
  ],
  [
    [
      1275,
      1275
    ],
    "valid"
  ],
  [
    [
      1276,
      1276
    ],
    "mapped",
    [
      1277
    ]
  ],
  [
    [
      1277,
      1277
    ],
    "valid"
  ],
  [
    [
      1278,
      1278
    ],
    "mapped",
    [
      1279
    ]
  ],
  [
    [
      1279,
      1279
    ],
    "valid"
  ],
  [
    [
      1280,
      1280
    ],
    "mapped",
    [
      1281
    ]
  ],
  [
    [
      1281,
      1281
    ],
    "valid"
  ],
  [
    [
      1282,
      1282
    ],
    "mapped",
    [
      1283
    ]
  ],
  [
    [
      1283,
      1283
    ],
    "valid"
  ],
  [
    [
      1284,
      1284
    ],
    "mapped",
    [
      1285
    ]
  ],
  [
    [
      1285,
      1285
    ],
    "valid"
  ],
  [
    [
      1286,
      1286
    ],
    "mapped",
    [
      1287
    ]
  ],
  [
    [
      1287,
      1287
    ],
    "valid"
  ],
  [
    [
      1288,
      1288
    ],
    "mapped",
    [
      1289
    ]
  ],
  [
    [
      1289,
      1289
    ],
    "valid"
  ],
  [
    [
      1290,
      1290
    ],
    "mapped",
    [
      1291
    ]
  ],
  [
    [
      1291,
      1291
    ],
    "valid"
  ],
  [
    [
      1292,
      1292
    ],
    "mapped",
    [
      1293
    ]
  ],
  [
    [
      1293,
      1293
    ],
    "valid"
  ],
  [
    [
      1294,
      1294
    ],
    "mapped",
    [
      1295
    ]
  ],
  [
    [
      1295,
      1295
    ],
    "valid"
  ],
  [
    [
      1296,
      1296
    ],
    "mapped",
    [
      1297
    ]
  ],
  [
    [
      1297,
      1297
    ],
    "valid"
  ],
  [
    [
      1298,
      1298
    ],
    "mapped",
    [
      1299
    ]
  ],
  [
    [
      1299,
      1299
    ],
    "valid"
  ],
  [
    [
      1300,
      1300
    ],
    "mapped",
    [
      1301
    ]
  ],
  [
    [
      1301,
      1301
    ],
    "valid"
  ],
  [
    [
      1302,
      1302
    ],
    "mapped",
    [
      1303
    ]
  ],
  [
    [
      1303,
      1303
    ],
    "valid"
  ],
  [
    [
      1304,
      1304
    ],
    "mapped",
    [
      1305
    ]
  ],
  [
    [
      1305,
      1305
    ],
    "valid"
  ],
  [
    [
      1306,
      1306
    ],
    "mapped",
    [
      1307
    ]
  ],
  [
    [
      1307,
      1307
    ],
    "valid"
  ],
  [
    [
      1308,
      1308
    ],
    "mapped",
    [
      1309
    ]
  ],
  [
    [
      1309,
      1309
    ],
    "valid"
  ],
  [
    [
      1310,
      1310
    ],
    "mapped",
    [
      1311
    ]
  ],
  [
    [
      1311,
      1311
    ],
    "valid"
  ],
  [
    [
      1312,
      1312
    ],
    "mapped",
    [
      1313
    ]
  ],
  [
    [
      1313,
      1313
    ],
    "valid"
  ],
  [
    [
      1314,
      1314
    ],
    "mapped",
    [
      1315
    ]
  ],
  [
    [
      1315,
      1315
    ],
    "valid"
  ],
  [
    [
      1316,
      1316
    ],
    "mapped",
    [
      1317
    ]
  ],
  [
    [
      1317,
      1317
    ],
    "valid"
  ],
  [
    [
      1318,
      1318
    ],
    "mapped",
    [
      1319
    ]
  ],
  [
    [
      1319,
      1319
    ],
    "valid"
  ],
  [
    [
      1320,
      1320
    ],
    "mapped",
    [
      1321
    ]
  ],
  [
    [
      1321,
      1321
    ],
    "valid"
  ],
  [
    [
      1322,
      1322
    ],
    "mapped",
    [
      1323
    ]
  ],
  [
    [
      1323,
      1323
    ],
    "valid"
  ],
  [
    [
      1324,
      1324
    ],
    "mapped",
    [
      1325
    ]
  ],
  [
    [
      1325,
      1325
    ],
    "valid"
  ],
  [
    [
      1326,
      1326
    ],
    "mapped",
    [
      1327
    ]
  ],
  [
    [
      1327,
      1327
    ],
    "valid"
  ],
  [
    [
      1328,
      1328
    ],
    "disallowed"
  ],
  [
    [
      1329,
      1329
    ],
    "mapped",
    [
      1377
    ]
  ],
  [
    [
      1330,
      1330
    ],
    "mapped",
    [
      1378
    ]
  ],
  [
    [
      1331,
      1331
    ],
    "mapped",
    [
      1379
    ]
  ],
  [
    [
      1332,
      1332
    ],
    "mapped",
    [
      1380
    ]
  ],
  [
    [
      1333,
      1333
    ],
    "mapped",
    [
      1381
    ]
  ],
  [
    [
      1334,
      1334
    ],
    "mapped",
    [
      1382
    ]
  ],
  [
    [
      1335,
      1335
    ],
    "mapped",
    [
      1383
    ]
  ],
  [
    [
      1336,
      1336
    ],
    "mapped",
    [
      1384
    ]
  ],
  [
    [
      1337,
      1337
    ],
    "mapped",
    [
      1385
    ]
  ],
  [
    [
      1338,
      1338
    ],
    "mapped",
    [
      1386
    ]
  ],
  [
    [
      1339,
      1339
    ],
    "mapped",
    [
      1387
    ]
  ],
  [
    [
      1340,
      1340
    ],
    "mapped",
    [
      1388
    ]
  ],
  [
    [
      1341,
      1341
    ],
    "mapped",
    [
      1389
    ]
  ],
  [
    [
      1342,
      1342
    ],
    "mapped",
    [
      1390
    ]
  ],
  [
    [
      1343,
      1343
    ],
    "mapped",
    [
      1391
    ]
  ],
  [
    [
      1344,
      1344
    ],
    "mapped",
    [
      1392
    ]
  ],
  [
    [
      1345,
      1345
    ],
    "mapped",
    [
      1393
    ]
  ],
  [
    [
      1346,
      1346
    ],
    "mapped",
    [
      1394
    ]
  ],
  [
    [
      1347,
      1347
    ],
    "mapped",
    [
      1395
    ]
  ],
  [
    [
      1348,
      1348
    ],
    "mapped",
    [
      1396
    ]
  ],
  [
    [
      1349,
      1349
    ],
    "mapped",
    [
      1397
    ]
  ],
  [
    [
      1350,
      1350
    ],
    "mapped",
    [
      1398
    ]
  ],
  [
    [
      1351,
      1351
    ],
    "mapped",
    [
      1399
    ]
  ],
  [
    [
      1352,
      1352
    ],
    "mapped",
    [
      1400
    ]
  ],
  [
    [
      1353,
      1353
    ],
    "mapped",
    [
      1401
    ]
  ],
  [
    [
      1354,
      1354
    ],
    "mapped",
    [
      1402
    ]
  ],
  [
    [
      1355,
      1355
    ],
    "mapped",
    [
      1403
    ]
  ],
  [
    [
      1356,
      1356
    ],
    "mapped",
    [
      1404
    ]
  ],
  [
    [
      1357,
      1357
    ],
    "mapped",
    [
      1405
    ]
  ],
  [
    [
      1358,
      1358
    ],
    "mapped",
    [
      1406
    ]
  ],
  [
    [
      1359,
      1359
    ],
    "mapped",
    [
      1407
    ]
  ],
  [
    [
      1360,
      1360
    ],
    "mapped",
    [
      1408
    ]
  ],
  [
    [
      1361,
      1361
    ],
    "mapped",
    [
      1409
    ]
  ],
  [
    [
      1362,
      1362
    ],
    "mapped",
    [
      1410
    ]
  ],
  [
    [
      1363,
      1363
    ],
    "mapped",
    [
      1411
    ]
  ],
  [
    [
      1364,
      1364
    ],
    "mapped",
    [
      1412
    ]
  ],
  [
    [
      1365,
      1365
    ],
    "mapped",
    [
      1413
    ]
  ],
  [
    [
      1366,
      1366
    ],
    "mapped",
    [
      1414
    ]
  ],
  [
    [
      1367,
      1368
    ],
    "disallowed"
  ],
  [
    [
      1369,
      1369
    ],
    "valid"
  ],
  [
    [
      1370,
      1375
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1376,
      1376
    ],
    "disallowed"
  ],
  [
    [
      1377,
      1414
    ],
    "valid"
  ],
  [
    [
      1415,
      1415
    ],
    "mapped",
    [
      1381,
      1410
    ]
  ],
  [
    [
      1416,
      1416
    ],
    "disallowed"
  ],
  [
    [
      1417,
      1417
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1418,
      1418
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1419,
      1420
    ],
    "disallowed"
  ],
  [
    [
      1421,
      1422
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1423,
      1423
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1424,
      1424
    ],
    "disallowed"
  ],
  [
    [
      1425,
      1441
    ],
    "valid"
  ],
  [
    [
      1442,
      1442
    ],
    "valid"
  ],
  [
    [
      1443,
      1455
    ],
    "valid"
  ],
  [
    [
      1456,
      1465
    ],
    "valid"
  ],
  [
    [
      1466,
      1466
    ],
    "valid"
  ],
  [
    [
      1467,
      1469
    ],
    "valid"
  ],
  [
    [
      1470,
      1470
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1471,
      1471
    ],
    "valid"
  ],
  [
    [
      1472,
      1472
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1473,
      1474
    ],
    "valid"
  ],
  [
    [
      1475,
      1475
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1476,
      1476
    ],
    "valid"
  ],
  [
    [
      1477,
      1477
    ],
    "valid"
  ],
  [
    [
      1478,
      1478
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1479,
      1479
    ],
    "valid"
  ],
  [
    [
      1480,
      1487
    ],
    "disallowed"
  ],
  [
    [
      1488,
      1514
    ],
    "valid"
  ],
  [
    [
      1515,
      1519
    ],
    "disallowed"
  ],
  [
    [
      1520,
      1524
    ],
    "valid"
  ],
  [
    [
      1525,
      1535
    ],
    "disallowed"
  ],
  [
    [
      1536,
      1539
    ],
    "disallowed"
  ],
  [
    [
      1540,
      1540
    ],
    "disallowed"
  ],
  [
    [
      1541,
      1541
    ],
    "disallowed"
  ],
  [
    [
      1542,
      1546
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1547,
      1547
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1548,
      1548
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1549,
      1551
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1552,
      1557
    ],
    "valid"
  ],
  [
    [
      1558,
      1562
    ],
    "valid"
  ],
  [
    [
      1563,
      1563
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1564,
      1564
    ],
    "disallowed"
  ],
  [
    [
      1565,
      1565
    ],
    "disallowed"
  ],
  [
    [
      1566,
      1566
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1567,
      1567
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1568,
      1568
    ],
    "valid"
  ],
  [
    [
      1569,
      1594
    ],
    "valid"
  ],
  [
    [
      1595,
      1599
    ],
    "valid"
  ],
  [
    [
      1600,
      1600
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1601,
      1618
    ],
    "valid"
  ],
  [
    [
      1619,
      1621
    ],
    "valid"
  ],
  [
    [
      1622,
      1624
    ],
    "valid"
  ],
  [
    [
      1625,
      1630
    ],
    "valid"
  ],
  [
    [
      1631,
      1631
    ],
    "valid"
  ],
  [
    [
      1632,
      1641
    ],
    "valid"
  ],
  [
    [
      1642,
      1645
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1646,
      1647
    ],
    "valid"
  ],
  [
    [
      1648,
      1652
    ],
    "valid"
  ],
  [
    [
      1653,
      1653
    ],
    "mapped",
    [
      1575,
      1652
    ]
  ],
  [
    [
      1654,
      1654
    ],
    "mapped",
    [
      1608,
      1652
    ]
  ],
  [
    [
      1655,
      1655
    ],
    "mapped",
    [
      1735,
      1652
    ]
  ],
  [
    [
      1656,
      1656
    ],
    "mapped",
    [
      1610,
      1652
    ]
  ],
  [
    [
      1657,
      1719
    ],
    "valid"
  ],
  [
    [
      1720,
      1721
    ],
    "valid"
  ],
  [
    [
      1722,
      1726
    ],
    "valid"
  ],
  [
    [
      1727,
      1727
    ],
    "valid"
  ],
  [
    [
      1728,
      1742
    ],
    "valid"
  ],
  [
    [
      1743,
      1743
    ],
    "valid"
  ],
  [
    [
      1744,
      1747
    ],
    "valid"
  ],
  [
    [
      1748,
      1748
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1749,
      1756
    ],
    "valid"
  ],
  [
    [
      1757,
      1757
    ],
    "disallowed"
  ],
  [
    [
      1758,
      1758
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1759,
      1768
    ],
    "valid"
  ],
  [
    [
      1769,
      1769
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1770,
      1773
    ],
    "valid"
  ],
  [
    [
      1774,
      1775
    ],
    "valid"
  ],
  [
    [
      1776,
      1785
    ],
    "valid"
  ],
  [
    [
      1786,
      1790
    ],
    "valid"
  ],
  [
    [
      1791,
      1791
    ],
    "valid"
  ],
  [
    [
      1792,
      1805
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      1806,
      1806
    ],
    "disallowed"
  ],
  [
    [
      1807,
      1807
    ],
    "disallowed"
  ],
  [
    [
      1808,
      1836
    ],
    "valid"
  ],
  [
    [
      1837,
      1839
    ],
    "valid"
  ],
  [
    [
      1840,
      1866
    ],
    "valid"
  ],
  [
    [
      1867,
      1868
    ],
    "disallowed"
  ],
  [
    [
      1869,
      1871
    ],
    "valid"
  ],
  [
    [
      1872,
      1901
    ],
    "valid"
  ],
  [
    [
      1902,
      1919
    ],
    "valid"
  ],
  [
    [
      1920,
      1968
    ],
    "valid"
  ],
  [
    [
      1969,
      1969
    ],
    "valid"
  ],
  [
    [
      1970,
      1983
    ],
    "disallowed"
  ],
  [
    [
      1984,
      2037
    ],
    "valid"
  ],
  [
    [
      2038,
      2042
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2043,
      2047
    ],
    "disallowed"
  ],
  [
    [
      2048,
      2093
    ],
    "valid"
  ],
  [
    [
      2094,
      2095
    ],
    "disallowed"
  ],
  [
    [
      2096,
      2110
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2111,
      2111
    ],
    "disallowed"
  ],
  [
    [
      2112,
      2139
    ],
    "valid"
  ],
  [
    [
      2140,
      2141
    ],
    "disallowed"
  ],
  [
    [
      2142,
      2142
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2143,
      2207
    ],
    "disallowed"
  ],
  [
    [
      2208,
      2208
    ],
    "valid"
  ],
  [
    [
      2209,
      2209
    ],
    "valid"
  ],
  [
    [
      2210,
      2220
    ],
    "valid"
  ],
  [
    [
      2221,
      2226
    ],
    "valid"
  ],
  [
    [
      2227,
      2228
    ],
    "valid"
  ],
  [
    [
      2229,
      2274
    ],
    "disallowed"
  ],
  [
    [
      2275,
      2275
    ],
    "valid"
  ],
  [
    [
      2276,
      2302
    ],
    "valid"
  ],
  [
    [
      2303,
      2303
    ],
    "valid"
  ],
  [
    [
      2304,
      2304
    ],
    "valid"
  ],
  [
    [
      2305,
      2307
    ],
    "valid"
  ],
  [
    [
      2308,
      2308
    ],
    "valid"
  ],
  [
    [
      2309,
      2361
    ],
    "valid"
  ],
  [
    [
      2362,
      2363
    ],
    "valid"
  ],
  [
    [
      2364,
      2381
    ],
    "valid"
  ],
  [
    [
      2382,
      2382
    ],
    "valid"
  ],
  [
    [
      2383,
      2383
    ],
    "valid"
  ],
  [
    [
      2384,
      2388
    ],
    "valid"
  ],
  [
    [
      2389,
      2389
    ],
    "valid"
  ],
  [
    [
      2390,
      2391
    ],
    "valid"
  ],
  [
    [
      2392,
      2392
    ],
    "mapped",
    [
      2325,
      2364
    ]
  ],
  [
    [
      2393,
      2393
    ],
    "mapped",
    [
      2326,
      2364
    ]
  ],
  [
    [
      2394,
      2394
    ],
    "mapped",
    [
      2327,
      2364
    ]
  ],
  [
    [
      2395,
      2395
    ],
    "mapped",
    [
      2332,
      2364
    ]
  ],
  [
    [
      2396,
      2396
    ],
    "mapped",
    [
      2337,
      2364
    ]
  ],
  [
    [
      2397,
      2397
    ],
    "mapped",
    [
      2338,
      2364
    ]
  ],
  [
    [
      2398,
      2398
    ],
    "mapped",
    [
      2347,
      2364
    ]
  ],
  [
    [
      2399,
      2399
    ],
    "mapped",
    [
      2351,
      2364
    ]
  ],
  [
    [
      2400,
      2403
    ],
    "valid"
  ],
  [
    [
      2404,
      2405
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2406,
      2415
    ],
    "valid"
  ],
  [
    [
      2416,
      2416
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2417,
      2418
    ],
    "valid"
  ],
  [
    [
      2419,
      2423
    ],
    "valid"
  ],
  [
    [
      2424,
      2424
    ],
    "valid"
  ],
  [
    [
      2425,
      2426
    ],
    "valid"
  ],
  [
    [
      2427,
      2428
    ],
    "valid"
  ],
  [
    [
      2429,
      2429
    ],
    "valid"
  ],
  [
    [
      2430,
      2431
    ],
    "valid"
  ],
  [
    [
      2432,
      2432
    ],
    "valid"
  ],
  [
    [
      2433,
      2435
    ],
    "valid"
  ],
  [
    [
      2436,
      2436
    ],
    "disallowed"
  ],
  [
    [
      2437,
      2444
    ],
    "valid"
  ],
  [
    [
      2445,
      2446
    ],
    "disallowed"
  ],
  [
    [
      2447,
      2448
    ],
    "valid"
  ],
  [
    [
      2449,
      2450
    ],
    "disallowed"
  ],
  [
    [
      2451,
      2472
    ],
    "valid"
  ],
  [
    [
      2473,
      2473
    ],
    "disallowed"
  ],
  [
    [
      2474,
      2480
    ],
    "valid"
  ],
  [
    [
      2481,
      2481
    ],
    "disallowed"
  ],
  [
    [
      2482,
      2482
    ],
    "valid"
  ],
  [
    [
      2483,
      2485
    ],
    "disallowed"
  ],
  [
    [
      2486,
      2489
    ],
    "valid"
  ],
  [
    [
      2490,
      2491
    ],
    "disallowed"
  ],
  [
    [
      2492,
      2492
    ],
    "valid"
  ],
  [
    [
      2493,
      2493
    ],
    "valid"
  ],
  [
    [
      2494,
      2500
    ],
    "valid"
  ],
  [
    [
      2501,
      2502
    ],
    "disallowed"
  ],
  [
    [
      2503,
      2504
    ],
    "valid"
  ],
  [
    [
      2505,
      2506
    ],
    "disallowed"
  ],
  [
    [
      2507,
      2509
    ],
    "valid"
  ],
  [
    [
      2510,
      2510
    ],
    "valid"
  ],
  [
    [
      2511,
      2518
    ],
    "disallowed"
  ],
  [
    [
      2519,
      2519
    ],
    "valid"
  ],
  [
    [
      2520,
      2523
    ],
    "disallowed"
  ],
  [
    [
      2524,
      2524
    ],
    "mapped",
    [
      2465,
      2492
    ]
  ],
  [
    [
      2525,
      2525
    ],
    "mapped",
    [
      2466,
      2492
    ]
  ],
  [
    [
      2526,
      2526
    ],
    "disallowed"
  ],
  [
    [
      2527,
      2527
    ],
    "mapped",
    [
      2479,
      2492
    ]
  ],
  [
    [
      2528,
      2531
    ],
    "valid"
  ],
  [
    [
      2532,
      2533
    ],
    "disallowed"
  ],
  [
    [
      2534,
      2545
    ],
    "valid"
  ],
  [
    [
      2546,
      2554
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2555,
      2555
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2556,
      2560
    ],
    "disallowed"
  ],
  [
    [
      2561,
      2561
    ],
    "valid"
  ],
  [
    [
      2562,
      2562
    ],
    "valid"
  ],
  [
    [
      2563,
      2563
    ],
    "valid"
  ],
  [
    [
      2564,
      2564
    ],
    "disallowed"
  ],
  [
    [
      2565,
      2570
    ],
    "valid"
  ],
  [
    [
      2571,
      2574
    ],
    "disallowed"
  ],
  [
    [
      2575,
      2576
    ],
    "valid"
  ],
  [
    [
      2577,
      2578
    ],
    "disallowed"
  ],
  [
    [
      2579,
      2600
    ],
    "valid"
  ],
  [
    [
      2601,
      2601
    ],
    "disallowed"
  ],
  [
    [
      2602,
      2608
    ],
    "valid"
  ],
  [
    [
      2609,
      2609
    ],
    "disallowed"
  ],
  [
    [
      2610,
      2610
    ],
    "valid"
  ],
  [
    [
      2611,
      2611
    ],
    "mapped",
    [
      2610,
      2620
    ]
  ],
  [
    [
      2612,
      2612
    ],
    "disallowed"
  ],
  [
    [
      2613,
      2613
    ],
    "valid"
  ],
  [
    [
      2614,
      2614
    ],
    "mapped",
    [
      2616,
      2620
    ]
  ],
  [
    [
      2615,
      2615
    ],
    "disallowed"
  ],
  [
    [
      2616,
      2617
    ],
    "valid"
  ],
  [
    [
      2618,
      2619
    ],
    "disallowed"
  ],
  [
    [
      2620,
      2620
    ],
    "valid"
  ],
  [
    [
      2621,
      2621
    ],
    "disallowed"
  ],
  [
    [
      2622,
      2626
    ],
    "valid"
  ],
  [
    [
      2627,
      2630
    ],
    "disallowed"
  ],
  [
    [
      2631,
      2632
    ],
    "valid"
  ],
  [
    [
      2633,
      2634
    ],
    "disallowed"
  ],
  [
    [
      2635,
      2637
    ],
    "valid"
  ],
  [
    [
      2638,
      2640
    ],
    "disallowed"
  ],
  [
    [
      2641,
      2641
    ],
    "valid"
  ],
  [
    [
      2642,
      2648
    ],
    "disallowed"
  ],
  [
    [
      2649,
      2649
    ],
    "mapped",
    [
      2582,
      2620
    ]
  ],
  [
    [
      2650,
      2650
    ],
    "mapped",
    [
      2583,
      2620
    ]
  ],
  [
    [
      2651,
      2651
    ],
    "mapped",
    [
      2588,
      2620
    ]
  ],
  [
    [
      2652,
      2652
    ],
    "valid"
  ],
  [
    [
      2653,
      2653
    ],
    "disallowed"
  ],
  [
    [
      2654,
      2654
    ],
    "mapped",
    [
      2603,
      2620
    ]
  ],
  [
    [
      2655,
      2661
    ],
    "disallowed"
  ],
  [
    [
      2662,
      2676
    ],
    "valid"
  ],
  [
    [
      2677,
      2677
    ],
    "valid"
  ],
  [
    [
      2678,
      2688
    ],
    "disallowed"
  ],
  [
    [
      2689,
      2691
    ],
    "valid"
  ],
  [
    [
      2692,
      2692
    ],
    "disallowed"
  ],
  [
    [
      2693,
      2699
    ],
    "valid"
  ],
  [
    [
      2700,
      2700
    ],
    "valid"
  ],
  [
    [
      2701,
      2701
    ],
    "valid"
  ],
  [
    [
      2702,
      2702
    ],
    "disallowed"
  ],
  [
    [
      2703,
      2705
    ],
    "valid"
  ],
  [
    [
      2706,
      2706
    ],
    "disallowed"
  ],
  [
    [
      2707,
      2728
    ],
    "valid"
  ],
  [
    [
      2729,
      2729
    ],
    "disallowed"
  ],
  [
    [
      2730,
      2736
    ],
    "valid"
  ],
  [
    [
      2737,
      2737
    ],
    "disallowed"
  ],
  [
    [
      2738,
      2739
    ],
    "valid"
  ],
  [
    [
      2740,
      2740
    ],
    "disallowed"
  ],
  [
    [
      2741,
      2745
    ],
    "valid"
  ],
  [
    [
      2746,
      2747
    ],
    "disallowed"
  ],
  [
    [
      2748,
      2757
    ],
    "valid"
  ],
  [
    [
      2758,
      2758
    ],
    "disallowed"
  ],
  [
    [
      2759,
      2761
    ],
    "valid"
  ],
  [
    [
      2762,
      2762
    ],
    "disallowed"
  ],
  [
    [
      2763,
      2765
    ],
    "valid"
  ],
  [
    [
      2766,
      2767
    ],
    "disallowed"
  ],
  [
    [
      2768,
      2768
    ],
    "valid"
  ],
  [
    [
      2769,
      2783
    ],
    "disallowed"
  ],
  [
    [
      2784,
      2784
    ],
    "valid"
  ],
  [
    [
      2785,
      2787
    ],
    "valid"
  ],
  [
    [
      2788,
      2789
    ],
    "disallowed"
  ],
  [
    [
      2790,
      2799
    ],
    "valid"
  ],
  [
    [
      2800,
      2800
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2801,
      2801
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2802,
      2808
    ],
    "disallowed"
  ],
  [
    [
      2809,
      2809
    ],
    "valid"
  ],
  [
    [
      2810,
      2816
    ],
    "disallowed"
  ],
  [
    [
      2817,
      2819
    ],
    "valid"
  ],
  [
    [
      2820,
      2820
    ],
    "disallowed"
  ],
  [
    [
      2821,
      2828
    ],
    "valid"
  ],
  [
    [
      2829,
      2830
    ],
    "disallowed"
  ],
  [
    [
      2831,
      2832
    ],
    "valid"
  ],
  [
    [
      2833,
      2834
    ],
    "disallowed"
  ],
  [
    [
      2835,
      2856
    ],
    "valid"
  ],
  [
    [
      2857,
      2857
    ],
    "disallowed"
  ],
  [
    [
      2858,
      2864
    ],
    "valid"
  ],
  [
    [
      2865,
      2865
    ],
    "disallowed"
  ],
  [
    [
      2866,
      2867
    ],
    "valid"
  ],
  [
    [
      2868,
      2868
    ],
    "disallowed"
  ],
  [
    [
      2869,
      2869
    ],
    "valid"
  ],
  [
    [
      2870,
      2873
    ],
    "valid"
  ],
  [
    [
      2874,
      2875
    ],
    "disallowed"
  ],
  [
    [
      2876,
      2883
    ],
    "valid"
  ],
  [
    [
      2884,
      2884
    ],
    "valid"
  ],
  [
    [
      2885,
      2886
    ],
    "disallowed"
  ],
  [
    [
      2887,
      2888
    ],
    "valid"
  ],
  [
    [
      2889,
      2890
    ],
    "disallowed"
  ],
  [
    [
      2891,
      2893
    ],
    "valid"
  ],
  [
    [
      2894,
      2901
    ],
    "disallowed"
  ],
  [
    [
      2902,
      2903
    ],
    "valid"
  ],
  [
    [
      2904,
      2907
    ],
    "disallowed"
  ],
  [
    [
      2908,
      2908
    ],
    "mapped",
    [
      2849,
      2876
    ]
  ],
  [
    [
      2909,
      2909
    ],
    "mapped",
    [
      2850,
      2876
    ]
  ],
  [
    [
      2910,
      2910
    ],
    "disallowed"
  ],
  [
    [
      2911,
      2913
    ],
    "valid"
  ],
  [
    [
      2914,
      2915
    ],
    "valid"
  ],
  [
    [
      2916,
      2917
    ],
    "disallowed"
  ],
  [
    [
      2918,
      2927
    ],
    "valid"
  ],
  [
    [
      2928,
      2928
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2929,
      2929
    ],
    "valid"
  ],
  [
    [
      2930,
      2935
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      2936,
      2945
    ],
    "disallowed"
  ],
  [
    [
      2946,
      2947
    ],
    "valid"
  ],
  [
    [
      2948,
      2948
    ],
    "disallowed"
  ],
  [
    [
      2949,
      2954
    ],
    "valid"
  ],
  [
    [
      2955,
      2957
    ],
    "disallowed"
  ],
  [
    [
      2958,
      2960
    ],
    "valid"
  ],
  [
    [
      2961,
      2961
    ],
    "disallowed"
  ],
  [
    [
      2962,
      2965
    ],
    "valid"
  ],
  [
    [
      2966,
      2968
    ],
    "disallowed"
  ],
  [
    [
      2969,
      2970
    ],
    "valid"
  ],
  [
    [
      2971,
      2971
    ],
    "disallowed"
  ],
  [
    [
      2972,
      2972
    ],
    "valid"
  ],
  [
    [
      2973,
      2973
    ],
    "disallowed"
  ],
  [
    [
      2974,
      2975
    ],
    "valid"
  ],
  [
    [
      2976,
      2978
    ],
    "disallowed"
  ],
  [
    [
      2979,
      2980
    ],
    "valid"
  ],
  [
    [
      2981,
      2983
    ],
    "disallowed"
  ],
  [
    [
      2984,
      2986
    ],
    "valid"
  ],
  [
    [
      2987,
      2989
    ],
    "disallowed"
  ],
  [
    [
      2990,
      2997
    ],
    "valid"
  ],
  [
    [
      2998,
      2998
    ],
    "valid"
  ],
  [
    [
      2999,
      3001
    ],
    "valid"
  ],
  [
    [
      3002,
      3005
    ],
    "disallowed"
  ],
  [
    [
      3006,
      3010
    ],
    "valid"
  ],
  [
    [
      3011,
      3013
    ],
    "disallowed"
  ],
  [
    [
      3014,
      3016
    ],
    "valid"
  ],
  [
    [
      3017,
      3017
    ],
    "disallowed"
  ],
  [
    [
      3018,
      3021
    ],
    "valid"
  ],
  [
    [
      3022,
      3023
    ],
    "disallowed"
  ],
  [
    [
      3024,
      3024
    ],
    "valid"
  ],
  [
    [
      3025,
      3030
    ],
    "disallowed"
  ],
  [
    [
      3031,
      3031
    ],
    "valid"
  ],
  [
    [
      3032,
      3045
    ],
    "disallowed"
  ],
  [
    [
      3046,
      3046
    ],
    "valid"
  ],
  [
    [
      3047,
      3055
    ],
    "valid"
  ],
  [
    [
      3056,
      3058
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3059,
      3066
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3067,
      3071
    ],
    "disallowed"
  ],
  [
    [
      3072,
      3072
    ],
    "valid"
  ],
  [
    [
      3073,
      3075
    ],
    "valid"
  ],
  [
    [
      3076,
      3076
    ],
    "disallowed"
  ],
  [
    [
      3077,
      3084
    ],
    "valid"
  ],
  [
    [
      3085,
      3085
    ],
    "disallowed"
  ],
  [
    [
      3086,
      3088
    ],
    "valid"
  ],
  [
    [
      3089,
      3089
    ],
    "disallowed"
  ],
  [
    [
      3090,
      3112
    ],
    "valid"
  ],
  [
    [
      3113,
      3113
    ],
    "disallowed"
  ],
  [
    [
      3114,
      3123
    ],
    "valid"
  ],
  [
    [
      3124,
      3124
    ],
    "valid"
  ],
  [
    [
      3125,
      3129
    ],
    "valid"
  ],
  [
    [
      3130,
      3132
    ],
    "disallowed"
  ],
  [
    [
      3133,
      3133
    ],
    "valid"
  ],
  [
    [
      3134,
      3140
    ],
    "valid"
  ],
  [
    [
      3141,
      3141
    ],
    "disallowed"
  ],
  [
    [
      3142,
      3144
    ],
    "valid"
  ],
  [
    [
      3145,
      3145
    ],
    "disallowed"
  ],
  [
    [
      3146,
      3149
    ],
    "valid"
  ],
  [
    [
      3150,
      3156
    ],
    "disallowed"
  ],
  [
    [
      3157,
      3158
    ],
    "valid"
  ],
  [
    [
      3159,
      3159
    ],
    "disallowed"
  ],
  [
    [
      3160,
      3161
    ],
    "valid"
  ],
  [
    [
      3162,
      3162
    ],
    "valid"
  ],
  [
    [
      3163,
      3167
    ],
    "disallowed"
  ],
  [
    [
      3168,
      3169
    ],
    "valid"
  ],
  [
    [
      3170,
      3171
    ],
    "valid"
  ],
  [
    [
      3172,
      3173
    ],
    "disallowed"
  ],
  [
    [
      3174,
      3183
    ],
    "valid"
  ],
  [
    [
      3184,
      3191
    ],
    "disallowed"
  ],
  [
    [
      3192,
      3199
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3200,
      3200
    ],
    "disallowed"
  ],
  [
    [
      3201,
      3201
    ],
    "valid"
  ],
  [
    [
      3202,
      3203
    ],
    "valid"
  ],
  [
    [
      3204,
      3204
    ],
    "disallowed"
  ],
  [
    [
      3205,
      3212
    ],
    "valid"
  ],
  [
    [
      3213,
      3213
    ],
    "disallowed"
  ],
  [
    [
      3214,
      3216
    ],
    "valid"
  ],
  [
    [
      3217,
      3217
    ],
    "disallowed"
  ],
  [
    [
      3218,
      3240
    ],
    "valid"
  ],
  [
    [
      3241,
      3241
    ],
    "disallowed"
  ],
  [
    [
      3242,
      3251
    ],
    "valid"
  ],
  [
    [
      3252,
      3252
    ],
    "disallowed"
  ],
  [
    [
      3253,
      3257
    ],
    "valid"
  ],
  [
    [
      3258,
      3259
    ],
    "disallowed"
  ],
  [
    [
      3260,
      3261
    ],
    "valid"
  ],
  [
    [
      3262,
      3268
    ],
    "valid"
  ],
  [
    [
      3269,
      3269
    ],
    "disallowed"
  ],
  [
    [
      3270,
      3272
    ],
    "valid"
  ],
  [
    [
      3273,
      3273
    ],
    "disallowed"
  ],
  [
    [
      3274,
      3277
    ],
    "valid"
  ],
  [
    [
      3278,
      3284
    ],
    "disallowed"
  ],
  [
    [
      3285,
      3286
    ],
    "valid"
  ],
  [
    [
      3287,
      3293
    ],
    "disallowed"
  ],
  [
    [
      3294,
      3294
    ],
    "valid"
  ],
  [
    [
      3295,
      3295
    ],
    "disallowed"
  ],
  [
    [
      3296,
      3297
    ],
    "valid"
  ],
  [
    [
      3298,
      3299
    ],
    "valid"
  ],
  [
    [
      3300,
      3301
    ],
    "disallowed"
  ],
  [
    [
      3302,
      3311
    ],
    "valid"
  ],
  [
    [
      3312,
      3312
    ],
    "disallowed"
  ],
  [
    [
      3313,
      3314
    ],
    "valid"
  ],
  [
    [
      3315,
      3328
    ],
    "disallowed"
  ],
  [
    [
      3329,
      3329
    ],
    "valid"
  ],
  [
    [
      3330,
      3331
    ],
    "valid"
  ],
  [
    [
      3332,
      3332
    ],
    "disallowed"
  ],
  [
    [
      3333,
      3340
    ],
    "valid"
  ],
  [
    [
      3341,
      3341
    ],
    "disallowed"
  ],
  [
    [
      3342,
      3344
    ],
    "valid"
  ],
  [
    [
      3345,
      3345
    ],
    "disallowed"
  ],
  [
    [
      3346,
      3368
    ],
    "valid"
  ],
  [
    [
      3369,
      3369
    ],
    "valid"
  ],
  [
    [
      3370,
      3385
    ],
    "valid"
  ],
  [
    [
      3386,
      3386
    ],
    "valid"
  ],
  [
    [
      3387,
      3388
    ],
    "disallowed"
  ],
  [
    [
      3389,
      3389
    ],
    "valid"
  ],
  [
    [
      3390,
      3395
    ],
    "valid"
  ],
  [
    [
      3396,
      3396
    ],
    "valid"
  ],
  [
    [
      3397,
      3397
    ],
    "disallowed"
  ],
  [
    [
      3398,
      3400
    ],
    "valid"
  ],
  [
    [
      3401,
      3401
    ],
    "disallowed"
  ],
  [
    [
      3402,
      3405
    ],
    "valid"
  ],
  [
    [
      3406,
      3406
    ],
    "valid"
  ],
  [
    [
      3407,
      3414
    ],
    "disallowed"
  ],
  [
    [
      3415,
      3415
    ],
    "valid"
  ],
  [
    [
      3416,
      3422
    ],
    "disallowed"
  ],
  [
    [
      3423,
      3423
    ],
    "valid"
  ],
  [
    [
      3424,
      3425
    ],
    "valid"
  ],
  [
    [
      3426,
      3427
    ],
    "valid"
  ],
  [
    [
      3428,
      3429
    ],
    "disallowed"
  ],
  [
    [
      3430,
      3439
    ],
    "valid"
  ],
  [
    [
      3440,
      3445
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3446,
      3448
    ],
    "disallowed"
  ],
  [
    [
      3449,
      3449
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3450,
      3455
    ],
    "valid"
  ],
  [
    [
      3456,
      3457
    ],
    "disallowed"
  ],
  [
    [
      3458,
      3459
    ],
    "valid"
  ],
  [
    [
      3460,
      3460
    ],
    "disallowed"
  ],
  [
    [
      3461,
      3478
    ],
    "valid"
  ],
  [
    [
      3479,
      3481
    ],
    "disallowed"
  ],
  [
    [
      3482,
      3505
    ],
    "valid"
  ],
  [
    [
      3506,
      3506
    ],
    "disallowed"
  ],
  [
    [
      3507,
      3515
    ],
    "valid"
  ],
  [
    [
      3516,
      3516
    ],
    "disallowed"
  ],
  [
    [
      3517,
      3517
    ],
    "valid"
  ],
  [
    [
      3518,
      3519
    ],
    "disallowed"
  ],
  [
    [
      3520,
      3526
    ],
    "valid"
  ],
  [
    [
      3527,
      3529
    ],
    "disallowed"
  ],
  [
    [
      3530,
      3530
    ],
    "valid"
  ],
  [
    [
      3531,
      3534
    ],
    "disallowed"
  ],
  [
    [
      3535,
      3540
    ],
    "valid"
  ],
  [
    [
      3541,
      3541
    ],
    "disallowed"
  ],
  [
    [
      3542,
      3542
    ],
    "valid"
  ],
  [
    [
      3543,
      3543
    ],
    "disallowed"
  ],
  [
    [
      3544,
      3551
    ],
    "valid"
  ],
  [
    [
      3552,
      3557
    ],
    "disallowed"
  ],
  [
    [
      3558,
      3567
    ],
    "valid"
  ],
  [
    [
      3568,
      3569
    ],
    "disallowed"
  ],
  [
    [
      3570,
      3571
    ],
    "valid"
  ],
  [
    [
      3572,
      3572
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3573,
      3584
    ],
    "disallowed"
  ],
  [
    [
      3585,
      3634
    ],
    "valid"
  ],
  [
    [
      3635,
      3635
    ],
    "mapped",
    [
      3661,
      3634
    ]
  ],
  [
    [
      3636,
      3642
    ],
    "valid"
  ],
  [
    [
      3643,
      3646
    ],
    "disallowed"
  ],
  [
    [
      3647,
      3647
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3648,
      3662
    ],
    "valid"
  ],
  [
    [
      3663,
      3663
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3664,
      3673
    ],
    "valid"
  ],
  [
    [
      3674,
      3675
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3676,
      3712
    ],
    "disallowed"
  ],
  [
    [
      3713,
      3714
    ],
    "valid"
  ],
  [
    [
      3715,
      3715
    ],
    "disallowed"
  ],
  [
    [
      3716,
      3716
    ],
    "valid"
  ],
  [
    [
      3717,
      3718
    ],
    "disallowed"
  ],
  [
    [
      3719,
      3720
    ],
    "valid"
  ],
  [
    [
      3721,
      3721
    ],
    "disallowed"
  ],
  [
    [
      3722,
      3722
    ],
    "valid"
  ],
  [
    [
      3723,
      3724
    ],
    "disallowed"
  ],
  [
    [
      3725,
      3725
    ],
    "valid"
  ],
  [
    [
      3726,
      3731
    ],
    "disallowed"
  ],
  [
    [
      3732,
      3735
    ],
    "valid"
  ],
  [
    [
      3736,
      3736
    ],
    "disallowed"
  ],
  [
    [
      3737,
      3743
    ],
    "valid"
  ],
  [
    [
      3744,
      3744
    ],
    "disallowed"
  ],
  [
    [
      3745,
      3747
    ],
    "valid"
  ],
  [
    [
      3748,
      3748
    ],
    "disallowed"
  ],
  [
    [
      3749,
      3749
    ],
    "valid"
  ],
  [
    [
      3750,
      3750
    ],
    "disallowed"
  ],
  [
    [
      3751,
      3751
    ],
    "valid"
  ],
  [
    [
      3752,
      3753
    ],
    "disallowed"
  ],
  [
    [
      3754,
      3755
    ],
    "valid"
  ],
  [
    [
      3756,
      3756
    ],
    "disallowed"
  ],
  [
    [
      3757,
      3762
    ],
    "valid"
  ],
  [
    [
      3763,
      3763
    ],
    "mapped",
    [
      3789,
      3762
    ]
  ],
  [
    [
      3764,
      3769
    ],
    "valid"
  ],
  [
    [
      3770,
      3770
    ],
    "disallowed"
  ],
  [
    [
      3771,
      3773
    ],
    "valid"
  ],
  [
    [
      3774,
      3775
    ],
    "disallowed"
  ],
  [
    [
      3776,
      3780
    ],
    "valid"
  ],
  [
    [
      3781,
      3781
    ],
    "disallowed"
  ],
  [
    [
      3782,
      3782
    ],
    "valid"
  ],
  [
    [
      3783,
      3783
    ],
    "disallowed"
  ],
  [
    [
      3784,
      3789
    ],
    "valid"
  ],
  [
    [
      3790,
      3791
    ],
    "disallowed"
  ],
  [
    [
      3792,
      3801
    ],
    "valid"
  ],
  [
    [
      3802,
      3803
    ],
    "disallowed"
  ],
  [
    [
      3804,
      3804
    ],
    "mapped",
    [
      3755,
      3737
    ]
  ],
  [
    [
      3805,
      3805
    ],
    "mapped",
    [
      3755,
      3745
    ]
  ],
  [
    [
      3806,
      3807
    ],
    "valid"
  ],
  [
    [
      3808,
      3839
    ],
    "disallowed"
  ],
  [
    [
      3840,
      3840
    ],
    "valid"
  ],
  [
    [
      3841,
      3850
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3851,
      3851
    ],
    "valid"
  ],
  [
    [
      3852,
      3852
    ],
    "mapped",
    [
      3851
    ]
  ],
  [
    [
      3853,
      3863
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3864,
      3865
    ],
    "valid"
  ],
  [
    [
      3866,
      3871
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3872,
      3881
    ],
    "valid"
  ],
  [
    [
      3882,
      3892
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3893,
      3893
    ],
    "valid"
  ],
  [
    [
      3894,
      3894
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3895,
      3895
    ],
    "valid"
  ],
  [
    [
      3896,
      3896
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3897,
      3897
    ],
    "valid"
  ],
  [
    [
      3898,
      3901
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3902,
      3906
    ],
    "valid"
  ],
  [
    [
      3907,
      3907
    ],
    "mapped",
    [
      3906,
      4023
    ]
  ],
  [
    [
      3908,
      3911
    ],
    "valid"
  ],
  [
    [
      3912,
      3912
    ],
    "disallowed"
  ],
  [
    [
      3913,
      3916
    ],
    "valid"
  ],
  [
    [
      3917,
      3917
    ],
    "mapped",
    [
      3916,
      4023
    ]
  ],
  [
    [
      3918,
      3921
    ],
    "valid"
  ],
  [
    [
      3922,
      3922
    ],
    "mapped",
    [
      3921,
      4023
    ]
  ],
  [
    [
      3923,
      3926
    ],
    "valid"
  ],
  [
    [
      3927,
      3927
    ],
    "mapped",
    [
      3926,
      4023
    ]
  ],
  [
    [
      3928,
      3931
    ],
    "valid"
  ],
  [
    [
      3932,
      3932
    ],
    "mapped",
    [
      3931,
      4023
    ]
  ],
  [
    [
      3933,
      3944
    ],
    "valid"
  ],
  [
    [
      3945,
      3945
    ],
    "mapped",
    [
      3904,
      4021
    ]
  ],
  [
    [
      3946,
      3946
    ],
    "valid"
  ],
  [
    [
      3947,
      3948
    ],
    "valid"
  ],
  [
    [
      3949,
      3952
    ],
    "disallowed"
  ],
  [
    [
      3953,
      3954
    ],
    "valid"
  ],
  [
    [
      3955,
      3955
    ],
    "mapped",
    [
      3953,
      3954
    ]
  ],
  [
    [
      3956,
      3956
    ],
    "valid"
  ],
  [
    [
      3957,
      3957
    ],
    "mapped",
    [
      3953,
      3956
    ]
  ],
  [
    [
      3958,
      3958
    ],
    "mapped",
    [
      4018,
      3968
    ]
  ],
  [
    [
      3959,
      3959
    ],
    "mapped",
    [
      4018,
      3953,
      3968
    ]
  ],
  [
    [
      3960,
      3960
    ],
    "mapped",
    [
      4019,
      3968
    ]
  ],
  [
    [
      3961,
      3961
    ],
    "mapped",
    [
      4019,
      3953,
      3968
    ]
  ],
  [
    [
      3962,
      3968
    ],
    "valid"
  ],
  [
    [
      3969,
      3969
    ],
    "mapped",
    [
      3953,
      3968
    ]
  ],
  [
    [
      3970,
      3972
    ],
    "valid"
  ],
  [
    [
      3973,
      3973
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      3974,
      3979
    ],
    "valid"
  ],
  [
    [
      3980,
      3983
    ],
    "valid"
  ],
  [
    [
      3984,
      3986
    ],
    "valid"
  ],
  [
    [
      3987,
      3987
    ],
    "mapped",
    [
      3986,
      4023
    ]
  ],
  [
    [
      3988,
      3989
    ],
    "valid"
  ],
  [
    [
      3990,
      3990
    ],
    "valid"
  ],
  [
    [
      3991,
      3991
    ],
    "valid"
  ],
  [
    [
      3992,
      3992
    ],
    "disallowed"
  ],
  [
    [
      3993,
      3996
    ],
    "valid"
  ],
  [
    [
      3997,
      3997
    ],
    "mapped",
    [
      3996,
      4023
    ]
  ],
  [
    [
      3998,
      4001
    ],
    "valid"
  ],
  [
    [
      4002,
      4002
    ],
    "mapped",
    [
      4001,
      4023
    ]
  ],
  [
    [
      4003,
      4006
    ],
    "valid"
  ],
  [
    [
      4007,
      4007
    ],
    "mapped",
    [
      4006,
      4023
    ]
  ],
  [
    [
      4008,
      4011
    ],
    "valid"
  ],
  [
    [
      4012,
      4012
    ],
    "mapped",
    [
      4011,
      4023
    ]
  ],
  [
    [
      4013,
      4013
    ],
    "valid"
  ],
  [
    [
      4014,
      4016
    ],
    "valid"
  ],
  [
    [
      4017,
      4023
    ],
    "valid"
  ],
  [
    [
      4024,
      4024
    ],
    "valid"
  ],
  [
    [
      4025,
      4025
    ],
    "mapped",
    [
      3984,
      4021
    ]
  ],
  [
    [
      4026,
      4028
    ],
    "valid"
  ],
  [
    [
      4029,
      4029
    ],
    "disallowed"
  ],
  [
    [
      4030,
      4037
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4038,
      4038
    ],
    "valid"
  ],
  [
    [
      4039,
      4044
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4045,
      4045
    ],
    "disallowed"
  ],
  [
    [
      4046,
      4046
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4047,
      4047
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4048,
      4049
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4050,
      4052
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4053,
      4056
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4057,
      4058
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4059,
      4095
    ],
    "disallowed"
  ],
  [
    [
      4096,
      4129
    ],
    "valid"
  ],
  [
    [
      4130,
      4130
    ],
    "valid"
  ],
  [
    [
      4131,
      4135
    ],
    "valid"
  ],
  [
    [
      4136,
      4136
    ],
    "valid"
  ],
  [
    [
      4137,
      4138
    ],
    "valid"
  ],
  [
    [
      4139,
      4139
    ],
    "valid"
  ],
  [
    [
      4140,
      4146
    ],
    "valid"
  ],
  [
    [
      4147,
      4149
    ],
    "valid"
  ],
  [
    [
      4150,
      4153
    ],
    "valid"
  ],
  [
    [
      4154,
      4159
    ],
    "valid"
  ],
  [
    [
      4160,
      4169
    ],
    "valid"
  ],
  [
    [
      4170,
      4175
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4176,
      4185
    ],
    "valid"
  ],
  [
    [
      4186,
      4249
    ],
    "valid"
  ],
  [
    [
      4250,
      4253
    ],
    "valid"
  ],
  [
    [
      4254,
      4255
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4256,
      4293
    ],
    "disallowed"
  ],
  [
    [
      4294,
      4294
    ],
    "disallowed"
  ],
  [
    [
      4295,
      4295
    ],
    "mapped",
    [
      11559
    ]
  ],
  [
    [
      4296,
      4300
    ],
    "disallowed"
  ],
  [
    [
      4301,
      4301
    ],
    "mapped",
    [
      11565
    ]
  ],
  [
    [
      4302,
      4303
    ],
    "disallowed"
  ],
  [
    [
      4304,
      4342
    ],
    "valid"
  ],
  [
    [
      4343,
      4344
    ],
    "valid"
  ],
  [
    [
      4345,
      4346
    ],
    "valid"
  ],
  [
    [
      4347,
      4347
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4348,
      4348
    ],
    "mapped",
    [
      4316
    ]
  ],
  [
    [
      4349,
      4351
    ],
    "valid"
  ],
  [
    [
      4352,
      4441
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4442,
      4446
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4447,
      4448
    ],
    "disallowed"
  ],
  [
    [
      4449,
      4514
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4515,
      4519
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4520,
      4601
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4602,
      4607
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4608,
      4614
    ],
    "valid"
  ],
  [
    [
      4615,
      4615
    ],
    "valid"
  ],
  [
    [
      4616,
      4678
    ],
    "valid"
  ],
  [
    [
      4679,
      4679
    ],
    "valid"
  ],
  [
    [
      4680,
      4680
    ],
    "valid"
  ],
  [
    [
      4681,
      4681
    ],
    "disallowed"
  ],
  [
    [
      4682,
      4685
    ],
    "valid"
  ],
  [
    [
      4686,
      4687
    ],
    "disallowed"
  ],
  [
    [
      4688,
      4694
    ],
    "valid"
  ],
  [
    [
      4695,
      4695
    ],
    "disallowed"
  ],
  [
    [
      4696,
      4696
    ],
    "valid"
  ],
  [
    [
      4697,
      4697
    ],
    "disallowed"
  ],
  [
    [
      4698,
      4701
    ],
    "valid"
  ],
  [
    [
      4702,
      4703
    ],
    "disallowed"
  ],
  [
    [
      4704,
      4742
    ],
    "valid"
  ],
  [
    [
      4743,
      4743
    ],
    "valid"
  ],
  [
    [
      4744,
      4744
    ],
    "valid"
  ],
  [
    [
      4745,
      4745
    ],
    "disallowed"
  ],
  [
    [
      4746,
      4749
    ],
    "valid"
  ],
  [
    [
      4750,
      4751
    ],
    "disallowed"
  ],
  [
    [
      4752,
      4782
    ],
    "valid"
  ],
  [
    [
      4783,
      4783
    ],
    "valid"
  ],
  [
    [
      4784,
      4784
    ],
    "valid"
  ],
  [
    [
      4785,
      4785
    ],
    "disallowed"
  ],
  [
    [
      4786,
      4789
    ],
    "valid"
  ],
  [
    [
      4790,
      4791
    ],
    "disallowed"
  ],
  [
    [
      4792,
      4798
    ],
    "valid"
  ],
  [
    [
      4799,
      4799
    ],
    "disallowed"
  ],
  [
    [
      4800,
      4800
    ],
    "valid"
  ],
  [
    [
      4801,
      4801
    ],
    "disallowed"
  ],
  [
    [
      4802,
      4805
    ],
    "valid"
  ],
  [
    [
      4806,
      4807
    ],
    "disallowed"
  ],
  [
    [
      4808,
      4814
    ],
    "valid"
  ],
  [
    [
      4815,
      4815
    ],
    "valid"
  ],
  [
    [
      4816,
      4822
    ],
    "valid"
  ],
  [
    [
      4823,
      4823
    ],
    "disallowed"
  ],
  [
    [
      4824,
      4846
    ],
    "valid"
  ],
  [
    [
      4847,
      4847
    ],
    "valid"
  ],
  [
    [
      4848,
      4878
    ],
    "valid"
  ],
  [
    [
      4879,
      4879
    ],
    "valid"
  ],
  [
    [
      4880,
      4880
    ],
    "valid"
  ],
  [
    [
      4881,
      4881
    ],
    "disallowed"
  ],
  [
    [
      4882,
      4885
    ],
    "valid"
  ],
  [
    [
      4886,
      4887
    ],
    "disallowed"
  ],
  [
    [
      4888,
      4894
    ],
    "valid"
  ],
  [
    [
      4895,
      4895
    ],
    "valid"
  ],
  [
    [
      4896,
      4934
    ],
    "valid"
  ],
  [
    [
      4935,
      4935
    ],
    "valid"
  ],
  [
    [
      4936,
      4954
    ],
    "valid"
  ],
  [
    [
      4955,
      4956
    ],
    "disallowed"
  ],
  [
    [
      4957,
      4958
    ],
    "valid"
  ],
  [
    [
      4959,
      4959
    ],
    "valid"
  ],
  [
    [
      4960,
      4960
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4961,
      4988
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      4989,
      4991
    ],
    "disallowed"
  ],
  [
    [
      4992,
      5007
    ],
    "valid"
  ],
  [
    [
      5008,
      5017
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      5018,
      5023
    ],
    "disallowed"
  ],
  [
    [
      5024,
      5108
    ],
    "valid"
  ],
  [
    [
      5109,
      5109
    ],
    "valid"
  ],
  [
    [
      5110,
      5111
    ],
    "disallowed"
  ],
  [
    [
      5112,
      5112
    ],
    "mapped",
    [
      5104
    ]
  ],
  [
    [
      5113,
      5113
    ],
    "mapped",
    [
      5105
    ]
  ],
  [
    [
      5114,
      5114
    ],
    "mapped",
    [
      5106
    ]
  ],
  [
    [
      5115,
      5115
    ],
    "mapped",
    [
      5107
    ]
  ],
  [
    [
      5116,
      5116
    ],
    "mapped",
    [
      5108
    ]
  ],
  [
    [
      5117,
      5117
    ],
    "mapped",
    [
      5109
    ]
  ],
  [
    [
      5118,
      5119
    ],
    "disallowed"
  ],
  [
    [
      5120,
      5120
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      5121,
      5740
    ],
    "valid"
  ],
  [
    [
      5741,
      5742
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      5743,
      5750
    ],
    "valid"
  ],
  [
    [
      5751,
      5759
    ],
    "valid"
  ],
  [
    [
      5760,
      5760
    ],
    "disallowed"
  ],
  [
    [
      5761,
      5786
    ],
    "valid"
  ],
  [
    [
      5787,
      5788
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      5789,
      5791
    ],
    "disallowed"
  ],
  [
    [
      5792,
      5866
    ],
    "valid"
  ],
  [
    [
      5867,
      5872
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      5873,
      5880
    ],
    "valid"
  ],
  [
    [
      5881,
      5887
    ],
    "disallowed"
  ],
  [
    [
      5888,
      5900
    ],
    "valid"
  ],
  [
    [
      5901,
      5901
    ],
    "disallowed"
  ],
  [
    [
      5902,
      5908
    ],
    "valid"
  ],
  [
    [
      5909,
      5919
    ],
    "disallowed"
  ],
  [
    [
      5920,
      5940
    ],
    "valid"
  ],
  [
    [
      5941,
      5942
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      5943,
      5951
    ],
    "disallowed"
  ],
  [
    [
      5952,
      5971
    ],
    "valid"
  ],
  [
    [
      5972,
      5983
    ],
    "disallowed"
  ],
  [
    [
      5984,
      5996
    ],
    "valid"
  ],
  [
    [
      5997,
      5997
    ],
    "disallowed"
  ],
  [
    [
      5998,
      6e3
    ],
    "valid"
  ],
  [
    [
      6001,
      6001
    ],
    "disallowed"
  ],
  [
    [
      6002,
      6003
    ],
    "valid"
  ],
  [
    [
      6004,
      6015
    ],
    "disallowed"
  ],
  [
    [
      6016,
      6067
    ],
    "valid"
  ],
  [
    [
      6068,
      6069
    ],
    "disallowed"
  ],
  [
    [
      6070,
      6099
    ],
    "valid"
  ],
  [
    [
      6100,
      6102
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6103,
      6103
    ],
    "valid"
  ],
  [
    [
      6104,
      6107
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6108,
      6108
    ],
    "valid"
  ],
  [
    [
      6109,
      6109
    ],
    "valid"
  ],
  [
    [
      6110,
      6111
    ],
    "disallowed"
  ],
  [
    [
      6112,
      6121
    ],
    "valid"
  ],
  [
    [
      6122,
      6127
    ],
    "disallowed"
  ],
  [
    [
      6128,
      6137
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6138,
      6143
    ],
    "disallowed"
  ],
  [
    [
      6144,
      6149
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6150,
      6150
    ],
    "disallowed"
  ],
  [
    [
      6151,
      6154
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6155,
      6157
    ],
    "ignored"
  ],
  [
    [
      6158,
      6158
    ],
    "disallowed"
  ],
  [
    [
      6159,
      6159
    ],
    "disallowed"
  ],
  [
    [
      6160,
      6169
    ],
    "valid"
  ],
  [
    [
      6170,
      6175
    ],
    "disallowed"
  ],
  [
    [
      6176,
      6263
    ],
    "valid"
  ],
  [
    [
      6264,
      6271
    ],
    "disallowed"
  ],
  [
    [
      6272,
      6313
    ],
    "valid"
  ],
  [
    [
      6314,
      6314
    ],
    "valid"
  ],
  [
    [
      6315,
      6319
    ],
    "disallowed"
  ],
  [
    [
      6320,
      6389
    ],
    "valid"
  ],
  [
    [
      6390,
      6399
    ],
    "disallowed"
  ],
  [
    [
      6400,
      6428
    ],
    "valid"
  ],
  [
    [
      6429,
      6430
    ],
    "valid"
  ],
  [
    [
      6431,
      6431
    ],
    "disallowed"
  ],
  [
    [
      6432,
      6443
    ],
    "valid"
  ],
  [
    [
      6444,
      6447
    ],
    "disallowed"
  ],
  [
    [
      6448,
      6459
    ],
    "valid"
  ],
  [
    [
      6460,
      6463
    ],
    "disallowed"
  ],
  [
    [
      6464,
      6464
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6465,
      6467
    ],
    "disallowed"
  ],
  [
    [
      6468,
      6469
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6470,
      6509
    ],
    "valid"
  ],
  [
    [
      6510,
      6511
    ],
    "disallowed"
  ],
  [
    [
      6512,
      6516
    ],
    "valid"
  ],
  [
    [
      6517,
      6527
    ],
    "disallowed"
  ],
  [
    [
      6528,
      6569
    ],
    "valid"
  ],
  [
    [
      6570,
      6571
    ],
    "valid"
  ],
  [
    [
      6572,
      6575
    ],
    "disallowed"
  ],
  [
    [
      6576,
      6601
    ],
    "valid"
  ],
  [
    [
      6602,
      6607
    ],
    "disallowed"
  ],
  [
    [
      6608,
      6617
    ],
    "valid"
  ],
  [
    [
      6618,
      6618
    ],
    "valid",
    [],
    "XV8"
  ],
  [
    [
      6619,
      6621
    ],
    "disallowed"
  ],
  [
    [
      6622,
      6623
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6624,
      6655
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6656,
      6683
    ],
    "valid"
  ],
  [
    [
      6684,
      6685
    ],
    "disallowed"
  ],
  [
    [
      6686,
      6687
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6688,
      6750
    ],
    "valid"
  ],
  [
    [
      6751,
      6751
    ],
    "disallowed"
  ],
  [
    [
      6752,
      6780
    ],
    "valid"
  ],
  [
    [
      6781,
      6782
    ],
    "disallowed"
  ],
  [
    [
      6783,
      6793
    ],
    "valid"
  ],
  [
    [
      6794,
      6799
    ],
    "disallowed"
  ],
  [
    [
      6800,
      6809
    ],
    "valid"
  ],
  [
    [
      6810,
      6815
    ],
    "disallowed"
  ],
  [
    [
      6816,
      6822
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6823,
      6823
    ],
    "valid"
  ],
  [
    [
      6824,
      6829
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6830,
      6831
    ],
    "disallowed"
  ],
  [
    [
      6832,
      6845
    ],
    "valid"
  ],
  [
    [
      6846,
      6846
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      6847,
      6911
    ],
    "disallowed"
  ],
  [
    [
      6912,
      6987
    ],
    "valid"
  ],
  [
    [
      6988,
      6991
    ],
    "disallowed"
  ],
  [
    [
      6992,
      7001
    ],
    "valid"
  ],
  [
    [
      7002,
      7018
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      7019,
      7027
    ],
    "valid"
  ],
  [
    [
      7028,
      7036
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      7037,
      7039
    ],
    "disallowed"
  ],
  [
    [
      7040,
      7082
    ],
    "valid"
  ],
  [
    [
      7083,
      7085
    ],
    "valid"
  ],
  [
    [
      7086,
      7097
    ],
    "valid"
  ],
  [
    [
      7098,
      7103
    ],
    "valid"
  ],
  [
    [
      7104,
      7155
    ],
    "valid"
  ],
  [
    [
      7156,
      7163
    ],
    "disallowed"
  ],
  [
    [
      7164,
      7167
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      7168,
      7223
    ],
    "valid"
  ],
  [
    [
      7224,
      7226
    ],
    "disallowed"
  ],
  [
    [
      7227,
      7231
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      7232,
      7241
    ],
    "valid"
  ],
  [
    [
      7242,
      7244
    ],
    "disallowed"
  ],
  [
    [
      7245,
      7293
    ],
    "valid"
  ],
  [
    [
      7294,
      7295
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      7296,
      7359
    ],
    "disallowed"
  ],
  [
    [
      7360,
      7367
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      7368,
      7375
    ],
    "disallowed"
  ],
  [
    [
      7376,
      7378
    ],
    "valid"
  ],
  [
    [
      7379,
      7379
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      7380,
      7410
    ],
    "valid"
  ],
  [
    [
      7411,
      7414
    ],
    "valid"
  ],
  [
    [
      7415,
      7415
    ],
    "disallowed"
  ],
  [
    [
      7416,
      7417
    ],
    "valid"
  ],
  [
    [
      7418,
      7423
    ],
    "disallowed"
  ],
  [
    [
      7424,
      7467
    ],
    "valid"
  ],
  [
    [
      7468,
      7468
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      7469,
      7469
    ],
    "mapped",
    [
      230
    ]
  ],
  [
    [
      7470,
      7470
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      7471,
      7471
    ],
    "valid"
  ],
  [
    [
      7472,
      7472
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      7473,
      7473
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      7474,
      7474
    ],
    "mapped",
    [
      477
    ]
  ],
  [
    [
      7475,
      7475
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      7476,
      7476
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      7477,
      7477
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      7478,
      7478
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      7479,
      7479
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      7480,
      7480
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      7481,
      7481
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      7482,
      7482
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      7483,
      7483
    ],
    "valid"
  ],
  [
    [
      7484,
      7484
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      7485,
      7485
    ],
    "mapped",
    [
      547
    ]
  ],
  [
    [
      7486,
      7486
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      7487,
      7487
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      7488,
      7488
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      7489,
      7489
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      7490,
      7490
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      7491,
      7491
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      7492,
      7492
    ],
    "mapped",
    [
      592
    ]
  ],
  [
    [
      7493,
      7493
    ],
    "mapped",
    [
      593
    ]
  ],
  [
    [
      7494,
      7494
    ],
    "mapped",
    [
      7426
    ]
  ],
  [
    [
      7495,
      7495
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      7496,
      7496
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      7497,
      7497
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      7498,
      7498
    ],
    "mapped",
    [
      601
    ]
  ],
  [
    [
      7499,
      7499
    ],
    "mapped",
    [
      603
    ]
  ],
  [
    [
      7500,
      7500
    ],
    "mapped",
    [
      604
    ]
  ],
  [
    [
      7501,
      7501
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      7502,
      7502
    ],
    "valid"
  ],
  [
    [
      7503,
      7503
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      7504,
      7504
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      7505,
      7505
    ],
    "mapped",
    [
      331
    ]
  ],
  [
    [
      7506,
      7506
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      7507,
      7507
    ],
    "mapped",
    [
      596
    ]
  ],
  [
    [
      7508,
      7508
    ],
    "mapped",
    [
      7446
    ]
  ],
  [
    [
      7509,
      7509
    ],
    "mapped",
    [
      7447
    ]
  ],
  [
    [
      7510,
      7510
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      7511,
      7511
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      7512,
      7512
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      7513,
      7513
    ],
    "mapped",
    [
      7453
    ]
  ],
  [
    [
      7514,
      7514
    ],
    "mapped",
    [
      623
    ]
  ],
  [
    [
      7515,
      7515
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      7516,
      7516
    ],
    "mapped",
    [
      7461
    ]
  ],
  [
    [
      7517,
      7517
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      7518,
      7518
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      7519,
      7519
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      7520,
      7520
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      7521,
      7521
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      7522,
      7522
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      7523,
      7523
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      7524,
      7524
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      7525,
      7525
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      7526,
      7526
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      7527,
      7527
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      7528,
      7528
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      7529,
      7529
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      7530,
      7530
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      7531,
      7531
    ],
    "valid"
  ],
  [
    [
      7532,
      7543
    ],
    "valid"
  ],
  [
    [
      7544,
      7544
    ],
    "mapped",
    [
      1085
    ]
  ],
  [
    [
      7545,
      7578
    ],
    "valid"
  ],
  [
    [
      7579,
      7579
    ],
    "mapped",
    [
      594
    ]
  ],
  [
    [
      7580,
      7580
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      7581,
      7581
    ],
    "mapped",
    [
      597
    ]
  ],
  [
    [
      7582,
      7582
    ],
    "mapped",
    [
      240
    ]
  ],
  [
    [
      7583,
      7583
    ],
    "mapped",
    [
      604
    ]
  ],
  [
    [
      7584,
      7584
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      7585,
      7585
    ],
    "mapped",
    [
      607
    ]
  ],
  [
    [
      7586,
      7586
    ],
    "mapped",
    [
      609
    ]
  ],
  [
    [
      7587,
      7587
    ],
    "mapped",
    [
      613
    ]
  ],
  [
    [
      7588,
      7588
    ],
    "mapped",
    [
      616
    ]
  ],
  [
    [
      7589,
      7589
    ],
    "mapped",
    [
      617
    ]
  ],
  [
    [
      7590,
      7590
    ],
    "mapped",
    [
      618
    ]
  ],
  [
    [
      7591,
      7591
    ],
    "mapped",
    [
      7547
    ]
  ],
  [
    [
      7592,
      7592
    ],
    "mapped",
    [
      669
    ]
  ],
  [
    [
      7593,
      7593
    ],
    "mapped",
    [
      621
    ]
  ],
  [
    [
      7594,
      7594
    ],
    "mapped",
    [
      7557
    ]
  ],
  [
    [
      7595,
      7595
    ],
    "mapped",
    [
      671
    ]
  ],
  [
    [
      7596,
      7596
    ],
    "mapped",
    [
      625
    ]
  ],
  [
    [
      7597,
      7597
    ],
    "mapped",
    [
      624
    ]
  ],
  [
    [
      7598,
      7598
    ],
    "mapped",
    [
      626
    ]
  ],
  [
    [
      7599,
      7599
    ],
    "mapped",
    [
      627
    ]
  ],
  [
    [
      7600,
      7600
    ],
    "mapped",
    [
      628
    ]
  ],
  [
    [
      7601,
      7601
    ],
    "mapped",
    [
      629
    ]
  ],
  [
    [
      7602,
      7602
    ],
    "mapped",
    [
      632
    ]
  ],
  [
    [
      7603,
      7603
    ],
    "mapped",
    [
      642
    ]
  ],
  [
    [
      7604,
      7604
    ],
    "mapped",
    [
      643
    ]
  ],
  [
    [
      7605,
      7605
    ],
    "mapped",
    [
      427
    ]
  ],
  [
    [
      7606,
      7606
    ],
    "mapped",
    [
      649
    ]
  ],
  [
    [
      7607,
      7607
    ],
    "mapped",
    [
      650
    ]
  ],
  [
    [
      7608,
      7608
    ],
    "mapped",
    [
      7452
    ]
  ],
  [
    [
      7609,
      7609
    ],
    "mapped",
    [
      651
    ]
  ],
  [
    [
      7610,
      7610
    ],
    "mapped",
    [
      652
    ]
  ],
  [
    [
      7611,
      7611
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      7612,
      7612
    ],
    "mapped",
    [
      656
    ]
  ],
  [
    [
      7613,
      7613
    ],
    "mapped",
    [
      657
    ]
  ],
  [
    [
      7614,
      7614
    ],
    "mapped",
    [
      658
    ]
  ],
  [
    [
      7615,
      7615
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      7616,
      7619
    ],
    "valid"
  ],
  [
    [
      7620,
      7626
    ],
    "valid"
  ],
  [
    [
      7627,
      7654
    ],
    "valid"
  ],
  [
    [
      7655,
      7669
    ],
    "valid"
  ],
  [
    [
      7670,
      7675
    ],
    "disallowed"
  ],
  [
    [
      7676,
      7676
    ],
    "valid"
  ],
  [
    [
      7677,
      7677
    ],
    "valid"
  ],
  [
    [
      7678,
      7679
    ],
    "valid"
  ],
  [
    [
      7680,
      7680
    ],
    "mapped",
    [
      7681
    ]
  ],
  [
    [
      7681,
      7681
    ],
    "valid"
  ],
  [
    [
      7682,
      7682
    ],
    "mapped",
    [
      7683
    ]
  ],
  [
    [
      7683,
      7683
    ],
    "valid"
  ],
  [
    [
      7684,
      7684
    ],
    "mapped",
    [
      7685
    ]
  ],
  [
    [
      7685,
      7685
    ],
    "valid"
  ],
  [
    [
      7686,
      7686
    ],
    "mapped",
    [
      7687
    ]
  ],
  [
    [
      7687,
      7687
    ],
    "valid"
  ],
  [
    [
      7688,
      7688
    ],
    "mapped",
    [
      7689
    ]
  ],
  [
    [
      7689,
      7689
    ],
    "valid"
  ],
  [
    [
      7690,
      7690
    ],
    "mapped",
    [
      7691
    ]
  ],
  [
    [
      7691,
      7691
    ],
    "valid"
  ],
  [
    [
      7692,
      7692
    ],
    "mapped",
    [
      7693
    ]
  ],
  [
    [
      7693,
      7693
    ],
    "valid"
  ],
  [
    [
      7694,
      7694
    ],
    "mapped",
    [
      7695
    ]
  ],
  [
    [
      7695,
      7695
    ],
    "valid"
  ],
  [
    [
      7696,
      7696
    ],
    "mapped",
    [
      7697
    ]
  ],
  [
    [
      7697,
      7697
    ],
    "valid"
  ],
  [
    [
      7698,
      7698
    ],
    "mapped",
    [
      7699
    ]
  ],
  [
    [
      7699,
      7699
    ],
    "valid"
  ],
  [
    [
      7700,
      7700
    ],
    "mapped",
    [
      7701
    ]
  ],
  [
    [
      7701,
      7701
    ],
    "valid"
  ],
  [
    [
      7702,
      7702
    ],
    "mapped",
    [
      7703
    ]
  ],
  [
    [
      7703,
      7703
    ],
    "valid"
  ],
  [
    [
      7704,
      7704
    ],
    "mapped",
    [
      7705
    ]
  ],
  [
    [
      7705,
      7705
    ],
    "valid"
  ],
  [
    [
      7706,
      7706
    ],
    "mapped",
    [
      7707
    ]
  ],
  [
    [
      7707,
      7707
    ],
    "valid"
  ],
  [
    [
      7708,
      7708
    ],
    "mapped",
    [
      7709
    ]
  ],
  [
    [
      7709,
      7709
    ],
    "valid"
  ],
  [
    [
      7710,
      7710
    ],
    "mapped",
    [
      7711
    ]
  ],
  [
    [
      7711,
      7711
    ],
    "valid"
  ],
  [
    [
      7712,
      7712
    ],
    "mapped",
    [
      7713
    ]
  ],
  [
    [
      7713,
      7713
    ],
    "valid"
  ],
  [
    [
      7714,
      7714
    ],
    "mapped",
    [
      7715
    ]
  ],
  [
    [
      7715,
      7715
    ],
    "valid"
  ],
  [
    [
      7716,
      7716
    ],
    "mapped",
    [
      7717
    ]
  ],
  [
    [
      7717,
      7717
    ],
    "valid"
  ],
  [
    [
      7718,
      7718
    ],
    "mapped",
    [
      7719
    ]
  ],
  [
    [
      7719,
      7719
    ],
    "valid"
  ],
  [
    [
      7720,
      7720
    ],
    "mapped",
    [
      7721
    ]
  ],
  [
    [
      7721,
      7721
    ],
    "valid"
  ],
  [
    [
      7722,
      7722
    ],
    "mapped",
    [
      7723
    ]
  ],
  [
    [
      7723,
      7723
    ],
    "valid"
  ],
  [
    [
      7724,
      7724
    ],
    "mapped",
    [
      7725
    ]
  ],
  [
    [
      7725,
      7725
    ],
    "valid"
  ],
  [
    [
      7726,
      7726
    ],
    "mapped",
    [
      7727
    ]
  ],
  [
    [
      7727,
      7727
    ],
    "valid"
  ],
  [
    [
      7728,
      7728
    ],
    "mapped",
    [
      7729
    ]
  ],
  [
    [
      7729,
      7729
    ],
    "valid"
  ],
  [
    [
      7730,
      7730
    ],
    "mapped",
    [
      7731
    ]
  ],
  [
    [
      7731,
      7731
    ],
    "valid"
  ],
  [
    [
      7732,
      7732
    ],
    "mapped",
    [
      7733
    ]
  ],
  [
    [
      7733,
      7733
    ],
    "valid"
  ],
  [
    [
      7734,
      7734
    ],
    "mapped",
    [
      7735
    ]
  ],
  [
    [
      7735,
      7735
    ],
    "valid"
  ],
  [
    [
      7736,
      7736
    ],
    "mapped",
    [
      7737
    ]
  ],
  [
    [
      7737,
      7737
    ],
    "valid"
  ],
  [
    [
      7738,
      7738
    ],
    "mapped",
    [
      7739
    ]
  ],
  [
    [
      7739,
      7739
    ],
    "valid"
  ],
  [
    [
      7740,
      7740
    ],
    "mapped",
    [
      7741
    ]
  ],
  [
    [
      7741,
      7741
    ],
    "valid"
  ],
  [
    [
      7742,
      7742
    ],
    "mapped",
    [
      7743
    ]
  ],
  [
    [
      7743,
      7743
    ],
    "valid"
  ],
  [
    [
      7744,
      7744
    ],
    "mapped",
    [
      7745
    ]
  ],
  [
    [
      7745,
      7745
    ],
    "valid"
  ],
  [
    [
      7746,
      7746
    ],
    "mapped",
    [
      7747
    ]
  ],
  [
    [
      7747,
      7747
    ],
    "valid"
  ],
  [
    [
      7748,
      7748
    ],
    "mapped",
    [
      7749
    ]
  ],
  [
    [
      7749,
      7749
    ],
    "valid"
  ],
  [
    [
      7750,
      7750
    ],
    "mapped",
    [
      7751
    ]
  ],
  [
    [
      7751,
      7751
    ],
    "valid"
  ],
  [
    [
      7752,
      7752
    ],
    "mapped",
    [
      7753
    ]
  ],
  [
    [
      7753,
      7753
    ],
    "valid"
  ],
  [
    [
      7754,
      7754
    ],
    "mapped",
    [
      7755
    ]
  ],
  [
    [
      7755,
      7755
    ],
    "valid"
  ],
  [
    [
      7756,
      7756
    ],
    "mapped",
    [
      7757
    ]
  ],
  [
    [
      7757,
      7757
    ],
    "valid"
  ],
  [
    [
      7758,
      7758
    ],
    "mapped",
    [
      7759
    ]
  ],
  [
    [
      7759,
      7759
    ],
    "valid"
  ],
  [
    [
      7760,
      7760
    ],
    "mapped",
    [
      7761
    ]
  ],
  [
    [
      7761,
      7761
    ],
    "valid"
  ],
  [
    [
      7762,
      7762
    ],
    "mapped",
    [
      7763
    ]
  ],
  [
    [
      7763,
      7763
    ],
    "valid"
  ],
  [
    [
      7764,
      7764
    ],
    "mapped",
    [
      7765
    ]
  ],
  [
    [
      7765,
      7765
    ],
    "valid"
  ],
  [
    [
      7766,
      7766
    ],
    "mapped",
    [
      7767
    ]
  ],
  [
    [
      7767,
      7767
    ],
    "valid"
  ],
  [
    [
      7768,
      7768
    ],
    "mapped",
    [
      7769
    ]
  ],
  [
    [
      7769,
      7769
    ],
    "valid"
  ],
  [
    [
      7770,
      7770
    ],
    "mapped",
    [
      7771
    ]
  ],
  [
    [
      7771,
      7771
    ],
    "valid"
  ],
  [
    [
      7772,
      7772
    ],
    "mapped",
    [
      7773
    ]
  ],
  [
    [
      7773,
      7773
    ],
    "valid"
  ],
  [
    [
      7774,
      7774
    ],
    "mapped",
    [
      7775
    ]
  ],
  [
    [
      7775,
      7775
    ],
    "valid"
  ],
  [
    [
      7776,
      7776
    ],
    "mapped",
    [
      7777
    ]
  ],
  [
    [
      7777,
      7777
    ],
    "valid"
  ],
  [
    [
      7778,
      7778
    ],
    "mapped",
    [
      7779
    ]
  ],
  [
    [
      7779,
      7779
    ],
    "valid"
  ],
  [
    [
      7780,
      7780
    ],
    "mapped",
    [
      7781
    ]
  ],
  [
    [
      7781,
      7781
    ],
    "valid"
  ],
  [
    [
      7782,
      7782
    ],
    "mapped",
    [
      7783
    ]
  ],
  [
    [
      7783,
      7783
    ],
    "valid"
  ],
  [
    [
      7784,
      7784
    ],
    "mapped",
    [
      7785
    ]
  ],
  [
    [
      7785,
      7785
    ],
    "valid"
  ],
  [
    [
      7786,
      7786
    ],
    "mapped",
    [
      7787
    ]
  ],
  [
    [
      7787,
      7787
    ],
    "valid"
  ],
  [
    [
      7788,
      7788
    ],
    "mapped",
    [
      7789
    ]
  ],
  [
    [
      7789,
      7789
    ],
    "valid"
  ],
  [
    [
      7790,
      7790
    ],
    "mapped",
    [
      7791
    ]
  ],
  [
    [
      7791,
      7791
    ],
    "valid"
  ],
  [
    [
      7792,
      7792
    ],
    "mapped",
    [
      7793
    ]
  ],
  [
    [
      7793,
      7793
    ],
    "valid"
  ],
  [
    [
      7794,
      7794
    ],
    "mapped",
    [
      7795
    ]
  ],
  [
    [
      7795,
      7795
    ],
    "valid"
  ],
  [
    [
      7796,
      7796
    ],
    "mapped",
    [
      7797
    ]
  ],
  [
    [
      7797,
      7797
    ],
    "valid"
  ],
  [
    [
      7798,
      7798
    ],
    "mapped",
    [
      7799
    ]
  ],
  [
    [
      7799,
      7799
    ],
    "valid"
  ],
  [
    [
      7800,
      7800
    ],
    "mapped",
    [
      7801
    ]
  ],
  [
    [
      7801,
      7801
    ],
    "valid"
  ],
  [
    [
      7802,
      7802
    ],
    "mapped",
    [
      7803
    ]
  ],
  [
    [
      7803,
      7803
    ],
    "valid"
  ],
  [
    [
      7804,
      7804
    ],
    "mapped",
    [
      7805
    ]
  ],
  [
    [
      7805,
      7805
    ],
    "valid"
  ],
  [
    [
      7806,
      7806
    ],
    "mapped",
    [
      7807
    ]
  ],
  [
    [
      7807,
      7807
    ],
    "valid"
  ],
  [
    [
      7808,
      7808
    ],
    "mapped",
    [
      7809
    ]
  ],
  [
    [
      7809,
      7809
    ],
    "valid"
  ],
  [
    [
      7810,
      7810
    ],
    "mapped",
    [
      7811
    ]
  ],
  [
    [
      7811,
      7811
    ],
    "valid"
  ],
  [
    [
      7812,
      7812
    ],
    "mapped",
    [
      7813
    ]
  ],
  [
    [
      7813,
      7813
    ],
    "valid"
  ],
  [
    [
      7814,
      7814
    ],
    "mapped",
    [
      7815
    ]
  ],
  [
    [
      7815,
      7815
    ],
    "valid"
  ],
  [
    [
      7816,
      7816
    ],
    "mapped",
    [
      7817
    ]
  ],
  [
    [
      7817,
      7817
    ],
    "valid"
  ],
  [
    [
      7818,
      7818
    ],
    "mapped",
    [
      7819
    ]
  ],
  [
    [
      7819,
      7819
    ],
    "valid"
  ],
  [
    [
      7820,
      7820
    ],
    "mapped",
    [
      7821
    ]
  ],
  [
    [
      7821,
      7821
    ],
    "valid"
  ],
  [
    [
      7822,
      7822
    ],
    "mapped",
    [
      7823
    ]
  ],
  [
    [
      7823,
      7823
    ],
    "valid"
  ],
  [
    [
      7824,
      7824
    ],
    "mapped",
    [
      7825
    ]
  ],
  [
    [
      7825,
      7825
    ],
    "valid"
  ],
  [
    [
      7826,
      7826
    ],
    "mapped",
    [
      7827
    ]
  ],
  [
    [
      7827,
      7827
    ],
    "valid"
  ],
  [
    [
      7828,
      7828
    ],
    "mapped",
    [
      7829
    ]
  ],
  [
    [
      7829,
      7833
    ],
    "valid"
  ],
  [
    [
      7834,
      7834
    ],
    "mapped",
    [
      97,
      702
    ]
  ],
  [
    [
      7835,
      7835
    ],
    "mapped",
    [
      7777
    ]
  ],
  [
    [
      7836,
      7837
    ],
    "valid"
  ],
  [
    [
      7838,
      7838
    ],
    "mapped",
    [
      115,
      115
    ]
  ],
  [
    [
      7839,
      7839
    ],
    "valid"
  ],
  [
    [
      7840,
      7840
    ],
    "mapped",
    [
      7841
    ]
  ],
  [
    [
      7841,
      7841
    ],
    "valid"
  ],
  [
    [
      7842,
      7842
    ],
    "mapped",
    [
      7843
    ]
  ],
  [
    [
      7843,
      7843
    ],
    "valid"
  ],
  [
    [
      7844,
      7844
    ],
    "mapped",
    [
      7845
    ]
  ],
  [
    [
      7845,
      7845
    ],
    "valid"
  ],
  [
    [
      7846,
      7846
    ],
    "mapped",
    [
      7847
    ]
  ],
  [
    [
      7847,
      7847
    ],
    "valid"
  ],
  [
    [
      7848,
      7848
    ],
    "mapped",
    [
      7849
    ]
  ],
  [
    [
      7849,
      7849
    ],
    "valid"
  ],
  [
    [
      7850,
      7850
    ],
    "mapped",
    [
      7851
    ]
  ],
  [
    [
      7851,
      7851
    ],
    "valid"
  ],
  [
    [
      7852,
      7852
    ],
    "mapped",
    [
      7853
    ]
  ],
  [
    [
      7853,
      7853
    ],
    "valid"
  ],
  [
    [
      7854,
      7854
    ],
    "mapped",
    [
      7855
    ]
  ],
  [
    [
      7855,
      7855
    ],
    "valid"
  ],
  [
    [
      7856,
      7856
    ],
    "mapped",
    [
      7857
    ]
  ],
  [
    [
      7857,
      7857
    ],
    "valid"
  ],
  [
    [
      7858,
      7858
    ],
    "mapped",
    [
      7859
    ]
  ],
  [
    [
      7859,
      7859
    ],
    "valid"
  ],
  [
    [
      7860,
      7860
    ],
    "mapped",
    [
      7861
    ]
  ],
  [
    [
      7861,
      7861
    ],
    "valid"
  ],
  [
    [
      7862,
      7862
    ],
    "mapped",
    [
      7863
    ]
  ],
  [
    [
      7863,
      7863
    ],
    "valid"
  ],
  [
    [
      7864,
      7864
    ],
    "mapped",
    [
      7865
    ]
  ],
  [
    [
      7865,
      7865
    ],
    "valid"
  ],
  [
    [
      7866,
      7866
    ],
    "mapped",
    [
      7867
    ]
  ],
  [
    [
      7867,
      7867
    ],
    "valid"
  ],
  [
    [
      7868,
      7868
    ],
    "mapped",
    [
      7869
    ]
  ],
  [
    [
      7869,
      7869
    ],
    "valid"
  ],
  [
    [
      7870,
      7870
    ],
    "mapped",
    [
      7871
    ]
  ],
  [
    [
      7871,
      7871
    ],
    "valid"
  ],
  [
    [
      7872,
      7872
    ],
    "mapped",
    [
      7873
    ]
  ],
  [
    [
      7873,
      7873
    ],
    "valid"
  ],
  [
    [
      7874,
      7874
    ],
    "mapped",
    [
      7875
    ]
  ],
  [
    [
      7875,
      7875
    ],
    "valid"
  ],
  [
    [
      7876,
      7876
    ],
    "mapped",
    [
      7877
    ]
  ],
  [
    [
      7877,
      7877
    ],
    "valid"
  ],
  [
    [
      7878,
      7878
    ],
    "mapped",
    [
      7879
    ]
  ],
  [
    [
      7879,
      7879
    ],
    "valid"
  ],
  [
    [
      7880,
      7880
    ],
    "mapped",
    [
      7881
    ]
  ],
  [
    [
      7881,
      7881
    ],
    "valid"
  ],
  [
    [
      7882,
      7882
    ],
    "mapped",
    [
      7883
    ]
  ],
  [
    [
      7883,
      7883
    ],
    "valid"
  ],
  [
    [
      7884,
      7884
    ],
    "mapped",
    [
      7885
    ]
  ],
  [
    [
      7885,
      7885
    ],
    "valid"
  ],
  [
    [
      7886,
      7886
    ],
    "mapped",
    [
      7887
    ]
  ],
  [
    [
      7887,
      7887
    ],
    "valid"
  ],
  [
    [
      7888,
      7888
    ],
    "mapped",
    [
      7889
    ]
  ],
  [
    [
      7889,
      7889
    ],
    "valid"
  ],
  [
    [
      7890,
      7890
    ],
    "mapped",
    [
      7891
    ]
  ],
  [
    [
      7891,
      7891
    ],
    "valid"
  ],
  [
    [
      7892,
      7892
    ],
    "mapped",
    [
      7893
    ]
  ],
  [
    [
      7893,
      7893
    ],
    "valid"
  ],
  [
    [
      7894,
      7894
    ],
    "mapped",
    [
      7895
    ]
  ],
  [
    [
      7895,
      7895
    ],
    "valid"
  ],
  [
    [
      7896,
      7896
    ],
    "mapped",
    [
      7897
    ]
  ],
  [
    [
      7897,
      7897
    ],
    "valid"
  ],
  [
    [
      7898,
      7898
    ],
    "mapped",
    [
      7899
    ]
  ],
  [
    [
      7899,
      7899
    ],
    "valid"
  ],
  [
    [
      7900,
      7900
    ],
    "mapped",
    [
      7901
    ]
  ],
  [
    [
      7901,
      7901
    ],
    "valid"
  ],
  [
    [
      7902,
      7902
    ],
    "mapped",
    [
      7903
    ]
  ],
  [
    [
      7903,
      7903
    ],
    "valid"
  ],
  [
    [
      7904,
      7904
    ],
    "mapped",
    [
      7905
    ]
  ],
  [
    [
      7905,
      7905
    ],
    "valid"
  ],
  [
    [
      7906,
      7906
    ],
    "mapped",
    [
      7907
    ]
  ],
  [
    [
      7907,
      7907
    ],
    "valid"
  ],
  [
    [
      7908,
      7908
    ],
    "mapped",
    [
      7909
    ]
  ],
  [
    [
      7909,
      7909
    ],
    "valid"
  ],
  [
    [
      7910,
      7910
    ],
    "mapped",
    [
      7911
    ]
  ],
  [
    [
      7911,
      7911
    ],
    "valid"
  ],
  [
    [
      7912,
      7912
    ],
    "mapped",
    [
      7913
    ]
  ],
  [
    [
      7913,
      7913
    ],
    "valid"
  ],
  [
    [
      7914,
      7914
    ],
    "mapped",
    [
      7915
    ]
  ],
  [
    [
      7915,
      7915
    ],
    "valid"
  ],
  [
    [
      7916,
      7916
    ],
    "mapped",
    [
      7917
    ]
  ],
  [
    [
      7917,
      7917
    ],
    "valid"
  ],
  [
    [
      7918,
      7918
    ],
    "mapped",
    [
      7919
    ]
  ],
  [
    [
      7919,
      7919
    ],
    "valid"
  ],
  [
    [
      7920,
      7920
    ],
    "mapped",
    [
      7921
    ]
  ],
  [
    [
      7921,
      7921
    ],
    "valid"
  ],
  [
    [
      7922,
      7922
    ],
    "mapped",
    [
      7923
    ]
  ],
  [
    [
      7923,
      7923
    ],
    "valid"
  ],
  [
    [
      7924,
      7924
    ],
    "mapped",
    [
      7925
    ]
  ],
  [
    [
      7925,
      7925
    ],
    "valid"
  ],
  [
    [
      7926,
      7926
    ],
    "mapped",
    [
      7927
    ]
  ],
  [
    [
      7927,
      7927
    ],
    "valid"
  ],
  [
    [
      7928,
      7928
    ],
    "mapped",
    [
      7929
    ]
  ],
  [
    [
      7929,
      7929
    ],
    "valid"
  ],
  [
    [
      7930,
      7930
    ],
    "mapped",
    [
      7931
    ]
  ],
  [
    [
      7931,
      7931
    ],
    "valid"
  ],
  [
    [
      7932,
      7932
    ],
    "mapped",
    [
      7933
    ]
  ],
  [
    [
      7933,
      7933
    ],
    "valid"
  ],
  [
    [
      7934,
      7934
    ],
    "mapped",
    [
      7935
    ]
  ],
  [
    [
      7935,
      7935
    ],
    "valid"
  ],
  [
    [
      7936,
      7943
    ],
    "valid"
  ],
  [
    [
      7944,
      7944
    ],
    "mapped",
    [
      7936
    ]
  ],
  [
    [
      7945,
      7945
    ],
    "mapped",
    [
      7937
    ]
  ],
  [
    [
      7946,
      7946
    ],
    "mapped",
    [
      7938
    ]
  ],
  [
    [
      7947,
      7947
    ],
    "mapped",
    [
      7939
    ]
  ],
  [
    [
      7948,
      7948
    ],
    "mapped",
    [
      7940
    ]
  ],
  [
    [
      7949,
      7949
    ],
    "mapped",
    [
      7941
    ]
  ],
  [
    [
      7950,
      7950
    ],
    "mapped",
    [
      7942
    ]
  ],
  [
    [
      7951,
      7951
    ],
    "mapped",
    [
      7943
    ]
  ],
  [
    [
      7952,
      7957
    ],
    "valid"
  ],
  [
    [
      7958,
      7959
    ],
    "disallowed"
  ],
  [
    [
      7960,
      7960
    ],
    "mapped",
    [
      7952
    ]
  ],
  [
    [
      7961,
      7961
    ],
    "mapped",
    [
      7953
    ]
  ],
  [
    [
      7962,
      7962
    ],
    "mapped",
    [
      7954
    ]
  ],
  [
    [
      7963,
      7963
    ],
    "mapped",
    [
      7955
    ]
  ],
  [
    [
      7964,
      7964
    ],
    "mapped",
    [
      7956
    ]
  ],
  [
    [
      7965,
      7965
    ],
    "mapped",
    [
      7957
    ]
  ],
  [
    [
      7966,
      7967
    ],
    "disallowed"
  ],
  [
    [
      7968,
      7975
    ],
    "valid"
  ],
  [
    [
      7976,
      7976
    ],
    "mapped",
    [
      7968
    ]
  ],
  [
    [
      7977,
      7977
    ],
    "mapped",
    [
      7969
    ]
  ],
  [
    [
      7978,
      7978
    ],
    "mapped",
    [
      7970
    ]
  ],
  [
    [
      7979,
      7979
    ],
    "mapped",
    [
      7971
    ]
  ],
  [
    [
      7980,
      7980
    ],
    "mapped",
    [
      7972
    ]
  ],
  [
    [
      7981,
      7981
    ],
    "mapped",
    [
      7973
    ]
  ],
  [
    [
      7982,
      7982
    ],
    "mapped",
    [
      7974
    ]
  ],
  [
    [
      7983,
      7983
    ],
    "mapped",
    [
      7975
    ]
  ],
  [
    [
      7984,
      7991
    ],
    "valid"
  ],
  [
    [
      7992,
      7992
    ],
    "mapped",
    [
      7984
    ]
  ],
  [
    [
      7993,
      7993
    ],
    "mapped",
    [
      7985
    ]
  ],
  [
    [
      7994,
      7994
    ],
    "mapped",
    [
      7986
    ]
  ],
  [
    [
      7995,
      7995
    ],
    "mapped",
    [
      7987
    ]
  ],
  [
    [
      7996,
      7996
    ],
    "mapped",
    [
      7988
    ]
  ],
  [
    [
      7997,
      7997
    ],
    "mapped",
    [
      7989
    ]
  ],
  [
    [
      7998,
      7998
    ],
    "mapped",
    [
      7990
    ]
  ],
  [
    [
      7999,
      7999
    ],
    "mapped",
    [
      7991
    ]
  ],
  [
    [
      8e3,
      8005
    ],
    "valid"
  ],
  [
    [
      8006,
      8007
    ],
    "disallowed"
  ],
  [
    [
      8008,
      8008
    ],
    "mapped",
    [
      8e3
    ]
  ],
  [
    [
      8009,
      8009
    ],
    "mapped",
    [
      8001
    ]
  ],
  [
    [
      8010,
      8010
    ],
    "mapped",
    [
      8002
    ]
  ],
  [
    [
      8011,
      8011
    ],
    "mapped",
    [
      8003
    ]
  ],
  [
    [
      8012,
      8012
    ],
    "mapped",
    [
      8004
    ]
  ],
  [
    [
      8013,
      8013
    ],
    "mapped",
    [
      8005
    ]
  ],
  [
    [
      8014,
      8015
    ],
    "disallowed"
  ],
  [
    [
      8016,
      8023
    ],
    "valid"
  ],
  [
    [
      8024,
      8024
    ],
    "disallowed"
  ],
  [
    [
      8025,
      8025
    ],
    "mapped",
    [
      8017
    ]
  ],
  [
    [
      8026,
      8026
    ],
    "disallowed"
  ],
  [
    [
      8027,
      8027
    ],
    "mapped",
    [
      8019
    ]
  ],
  [
    [
      8028,
      8028
    ],
    "disallowed"
  ],
  [
    [
      8029,
      8029
    ],
    "mapped",
    [
      8021
    ]
  ],
  [
    [
      8030,
      8030
    ],
    "disallowed"
  ],
  [
    [
      8031,
      8031
    ],
    "mapped",
    [
      8023
    ]
  ],
  [
    [
      8032,
      8039
    ],
    "valid"
  ],
  [
    [
      8040,
      8040
    ],
    "mapped",
    [
      8032
    ]
  ],
  [
    [
      8041,
      8041
    ],
    "mapped",
    [
      8033
    ]
  ],
  [
    [
      8042,
      8042
    ],
    "mapped",
    [
      8034
    ]
  ],
  [
    [
      8043,
      8043
    ],
    "mapped",
    [
      8035
    ]
  ],
  [
    [
      8044,
      8044
    ],
    "mapped",
    [
      8036
    ]
  ],
  [
    [
      8045,
      8045
    ],
    "mapped",
    [
      8037
    ]
  ],
  [
    [
      8046,
      8046
    ],
    "mapped",
    [
      8038
    ]
  ],
  [
    [
      8047,
      8047
    ],
    "mapped",
    [
      8039
    ]
  ],
  [
    [
      8048,
      8048
    ],
    "valid"
  ],
  [
    [
      8049,
      8049
    ],
    "mapped",
    [
      940
    ]
  ],
  [
    [
      8050,
      8050
    ],
    "valid"
  ],
  [
    [
      8051,
      8051
    ],
    "mapped",
    [
      941
    ]
  ],
  [
    [
      8052,
      8052
    ],
    "valid"
  ],
  [
    [
      8053,
      8053
    ],
    "mapped",
    [
      942
    ]
  ],
  [
    [
      8054,
      8054
    ],
    "valid"
  ],
  [
    [
      8055,
      8055
    ],
    "mapped",
    [
      943
    ]
  ],
  [
    [
      8056,
      8056
    ],
    "valid"
  ],
  [
    [
      8057,
      8057
    ],
    "mapped",
    [
      972
    ]
  ],
  [
    [
      8058,
      8058
    ],
    "valid"
  ],
  [
    [
      8059,
      8059
    ],
    "mapped",
    [
      973
    ]
  ],
  [
    [
      8060,
      8060
    ],
    "valid"
  ],
  [
    [
      8061,
      8061
    ],
    "mapped",
    [
      974
    ]
  ],
  [
    [
      8062,
      8063
    ],
    "disallowed"
  ],
  [
    [
      8064,
      8064
    ],
    "mapped",
    [
      7936,
      953
    ]
  ],
  [
    [
      8065,
      8065
    ],
    "mapped",
    [
      7937,
      953
    ]
  ],
  [
    [
      8066,
      8066
    ],
    "mapped",
    [
      7938,
      953
    ]
  ],
  [
    [
      8067,
      8067
    ],
    "mapped",
    [
      7939,
      953
    ]
  ],
  [
    [
      8068,
      8068
    ],
    "mapped",
    [
      7940,
      953
    ]
  ],
  [
    [
      8069,
      8069
    ],
    "mapped",
    [
      7941,
      953
    ]
  ],
  [
    [
      8070,
      8070
    ],
    "mapped",
    [
      7942,
      953
    ]
  ],
  [
    [
      8071,
      8071
    ],
    "mapped",
    [
      7943,
      953
    ]
  ],
  [
    [
      8072,
      8072
    ],
    "mapped",
    [
      7936,
      953
    ]
  ],
  [
    [
      8073,
      8073
    ],
    "mapped",
    [
      7937,
      953
    ]
  ],
  [
    [
      8074,
      8074
    ],
    "mapped",
    [
      7938,
      953
    ]
  ],
  [
    [
      8075,
      8075
    ],
    "mapped",
    [
      7939,
      953
    ]
  ],
  [
    [
      8076,
      8076
    ],
    "mapped",
    [
      7940,
      953
    ]
  ],
  [
    [
      8077,
      8077
    ],
    "mapped",
    [
      7941,
      953
    ]
  ],
  [
    [
      8078,
      8078
    ],
    "mapped",
    [
      7942,
      953
    ]
  ],
  [
    [
      8079,
      8079
    ],
    "mapped",
    [
      7943,
      953
    ]
  ],
  [
    [
      8080,
      8080
    ],
    "mapped",
    [
      7968,
      953
    ]
  ],
  [
    [
      8081,
      8081
    ],
    "mapped",
    [
      7969,
      953
    ]
  ],
  [
    [
      8082,
      8082
    ],
    "mapped",
    [
      7970,
      953
    ]
  ],
  [
    [
      8083,
      8083
    ],
    "mapped",
    [
      7971,
      953
    ]
  ],
  [
    [
      8084,
      8084
    ],
    "mapped",
    [
      7972,
      953
    ]
  ],
  [
    [
      8085,
      8085
    ],
    "mapped",
    [
      7973,
      953
    ]
  ],
  [
    [
      8086,
      8086
    ],
    "mapped",
    [
      7974,
      953
    ]
  ],
  [
    [
      8087,
      8087
    ],
    "mapped",
    [
      7975,
      953
    ]
  ],
  [
    [
      8088,
      8088
    ],
    "mapped",
    [
      7968,
      953
    ]
  ],
  [
    [
      8089,
      8089
    ],
    "mapped",
    [
      7969,
      953
    ]
  ],
  [
    [
      8090,
      8090
    ],
    "mapped",
    [
      7970,
      953
    ]
  ],
  [
    [
      8091,
      8091
    ],
    "mapped",
    [
      7971,
      953
    ]
  ],
  [
    [
      8092,
      8092
    ],
    "mapped",
    [
      7972,
      953
    ]
  ],
  [
    [
      8093,
      8093
    ],
    "mapped",
    [
      7973,
      953
    ]
  ],
  [
    [
      8094,
      8094
    ],
    "mapped",
    [
      7974,
      953
    ]
  ],
  [
    [
      8095,
      8095
    ],
    "mapped",
    [
      7975,
      953
    ]
  ],
  [
    [
      8096,
      8096
    ],
    "mapped",
    [
      8032,
      953
    ]
  ],
  [
    [
      8097,
      8097
    ],
    "mapped",
    [
      8033,
      953
    ]
  ],
  [
    [
      8098,
      8098
    ],
    "mapped",
    [
      8034,
      953
    ]
  ],
  [
    [
      8099,
      8099
    ],
    "mapped",
    [
      8035,
      953
    ]
  ],
  [
    [
      8100,
      8100
    ],
    "mapped",
    [
      8036,
      953
    ]
  ],
  [
    [
      8101,
      8101
    ],
    "mapped",
    [
      8037,
      953
    ]
  ],
  [
    [
      8102,
      8102
    ],
    "mapped",
    [
      8038,
      953
    ]
  ],
  [
    [
      8103,
      8103
    ],
    "mapped",
    [
      8039,
      953
    ]
  ],
  [
    [
      8104,
      8104
    ],
    "mapped",
    [
      8032,
      953
    ]
  ],
  [
    [
      8105,
      8105
    ],
    "mapped",
    [
      8033,
      953
    ]
  ],
  [
    [
      8106,
      8106
    ],
    "mapped",
    [
      8034,
      953
    ]
  ],
  [
    [
      8107,
      8107
    ],
    "mapped",
    [
      8035,
      953
    ]
  ],
  [
    [
      8108,
      8108
    ],
    "mapped",
    [
      8036,
      953
    ]
  ],
  [
    [
      8109,
      8109
    ],
    "mapped",
    [
      8037,
      953
    ]
  ],
  [
    [
      8110,
      8110
    ],
    "mapped",
    [
      8038,
      953
    ]
  ],
  [
    [
      8111,
      8111
    ],
    "mapped",
    [
      8039,
      953
    ]
  ],
  [
    [
      8112,
      8113
    ],
    "valid"
  ],
  [
    [
      8114,
      8114
    ],
    "mapped",
    [
      8048,
      953
    ]
  ],
  [
    [
      8115,
      8115
    ],
    "mapped",
    [
      945,
      953
    ]
  ],
  [
    [
      8116,
      8116
    ],
    "mapped",
    [
      940,
      953
    ]
  ],
  [
    [
      8117,
      8117
    ],
    "disallowed"
  ],
  [
    [
      8118,
      8118
    ],
    "valid"
  ],
  [
    [
      8119,
      8119
    ],
    "mapped",
    [
      8118,
      953
    ]
  ],
  [
    [
      8120,
      8120
    ],
    "mapped",
    [
      8112
    ]
  ],
  [
    [
      8121,
      8121
    ],
    "mapped",
    [
      8113
    ]
  ],
  [
    [
      8122,
      8122
    ],
    "mapped",
    [
      8048
    ]
  ],
  [
    [
      8123,
      8123
    ],
    "mapped",
    [
      940
    ]
  ],
  [
    [
      8124,
      8124
    ],
    "mapped",
    [
      945,
      953
    ]
  ],
  [
    [
      8125,
      8125
    ],
    "disallowed_STD3_mapped",
    [
      32,
      787
    ]
  ],
  [
    [
      8126,
      8126
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      8127,
      8127
    ],
    "disallowed_STD3_mapped",
    [
      32,
      787
    ]
  ],
  [
    [
      8128,
      8128
    ],
    "disallowed_STD3_mapped",
    [
      32,
      834
    ]
  ],
  [
    [
      8129,
      8129
    ],
    "disallowed_STD3_mapped",
    [
      32,
      776,
      834
    ]
  ],
  [
    [
      8130,
      8130
    ],
    "mapped",
    [
      8052,
      953
    ]
  ],
  [
    [
      8131,
      8131
    ],
    "mapped",
    [
      951,
      953
    ]
  ],
  [
    [
      8132,
      8132
    ],
    "mapped",
    [
      942,
      953
    ]
  ],
  [
    [
      8133,
      8133
    ],
    "disallowed"
  ],
  [
    [
      8134,
      8134
    ],
    "valid"
  ],
  [
    [
      8135,
      8135
    ],
    "mapped",
    [
      8134,
      953
    ]
  ],
  [
    [
      8136,
      8136
    ],
    "mapped",
    [
      8050
    ]
  ],
  [
    [
      8137,
      8137
    ],
    "mapped",
    [
      941
    ]
  ],
  [
    [
      8138,
      8138
    ],
    "mapped",
    [
      8052
    ]
  ],
  [
    [
      8139,
      8139
    ],
    "mapped",
    [
      942
    ]
  ],
  [
    [
      8140,
      8140
    ],
    "mapped",
    [
      951,
      953
    ]
  ],
  [
    [
      8141,
      8141
    ],
    "disallowed_STD3_mapped",
    [
      32,
      787,
      768
    ]
  ],
  [
    [
      8142,
      8142
    ],
    "disallowed_STD3_mapped",
    [
      32,
      787,
      769
    ]
  ],
  [
    [
      8143,
      8143
    ],
    "disallowed_STD3_mapped",
    [
      32,
      787,
      834
    ]
  ],
  [
    [
      8144,
      8146
    ],
    "valid"
  ],
  [
    [
      8147,
      8147
    ],
    "mapped",
    [
      912
    ]
  ],
  [
    [
      8148,
      8149
    ],
    "disallowed"
  ],
  [
    [
      8150,
      8151
    ],
    "valid"
  ],
  [
    [
      8152,
      8152
    ],
    "mapped",
    [
      8144
    ]
  ],
  [
    [
      8153,
      8153
    ],
    "mapped",
    [
      8145
    ]
  ],
  [
    [
      8154,
      8154
    ],
    "mapped",
    [
      8054
    ]
  ],
  [
    [
      8155,
      8155
    ],
    "mapped",
    [
      943
    ]
  ],
  [
    [
      8156,
      8156
    ],
    "disallowed"
  ],
  [
    [
      8157,
      8157
    ],
    "disallowed_STD3_mapped",
    [
      32,
      788,
      768
    ]
  ],
  [
    [
      8158,
      8158
    ],
    "disallowed_STD3_mapped",
    [
      32,
      788,
      769
    ]
  ],
  [
    [
      8159,
      8159
    ],
    "disallowed_STD3_mapped",
    [
      32,
      788,
      834
    ]
  ],
  [
    [
      8160,
      8162
    ],
    "valid"
  ],
  [
    [
      8163,
      8163
    ],
    "mapped",
    [
      944
    ]
  ],
  [
    [
      8164,
      8167
    ],
    "valid"
  ],
  [
    [
      8168,
      8168
    ],
    "mapped",
    [
      8160
    ]
  ],
  [
    [
      8169,
      8169
    ],
    "mapped",
    [
      8161
    ]
  ],
  [
    [
      8170,
      8170
    ],
    "mapped",
    [
      8058
    ]
  ],
  [
    [
      8171,
      8171
    ],
    "mapped",
    [
      973
    ]
  ],
  [
    [
      8172,
      8172
    ],
    "mapped",
    [
      8165
    ]
  ],
  [
    [
      8173,
      8173
    ],
    "disallowed_STD3_mapped",
    [
      32,
      776,
      768
    ]
  ],
  [
    [
      8174,
      8174
    ],
    "disallowed_STD3_mapped",
    [
      32,
      776,
      769
    ]
  ],
  [
    [
      8175,
      8175
    ],
    "disallowed_STD3_mapped",
    [
      96
    ]
  ],
  [
    [
      8176,
      8177
    ],
    "disallowed"
  ],
  [
    [
      8178,
      8178
    ],
    "mapped",
    [
      8060,
      953
    ]
  ],
  [
    [
      8179,
      8179
    ],
    "mapped",
    [
      969,
      953
    ]
  ],
  [
    [
      8180,
      8180
    ],
    "mapped",
    [
      974,
      953
    ]
  ],
  [
    [
      8181,
      8181
    ],
    "disallowed"
  ],
  [
    [
      8182,
      8182
    ],
    "valid"
  ],
  [
    [
      8183,
      8183
    ],
    "mapped",
    [
      8182,
      953
    ]
  ],
  [
    [
      8184,
      8184
    ],
    "mapped",
    [
      8056
    ]
  ],
  [
    [
      8185,
      8185
    ],
    "mapped",
    [
      972
    ]
  ],
  [
    [
      8186,
      8186
    ],
    "mapped",
    [
      8060
    ]
  ],
  [
    [
      8187,
      8187
    ],
    "mapped",
    [
      974
    ]
  ],
  [
    [
      8188,
      8188
    ],
    "mapped",
    [
      969,
      953
    ]
  ],
  [
    [
      8189,
      8189
    ],
    "disallowed_STD3_mapped",
    [
      32,
      769
    ]
  ],
  [
    [
      8190,
      8190
    ],
    "disallowed_STD3_mapped",
    [
      32,
      788
    ]
  ],
  [
    [
      8191,
      8191
    ],
    "disallowed"
  ],
  [
    [
      8192,
      8202
    ],
    "disallowed_STD3_mapped",
    [
      32
    ]
  ],
  [
    [
      8203,
      8203
    ],
    "ignored"
  ],
  [
    [
      8204,
      8205
    ],
    "deviation",
    []
  ],
  [
    [
      8206,
      8207
    ],
    "disallowed"
  ],
  [
    [
      8208,
      8208
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8209,
      8209
    ],
    "mapped",
    [
      8208
    ]
  ],
  [
    [
      8210,
      8214
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8215,
      8215
    ],
    "disallowed_STD3_mapped",
    [
      32,
      819
    ]
  ],
  [
    [
      8216,
      8227
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8228,
      8230
    ],
    "disallowed"
  ],
  [
    [
      8231,
      8231
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8232,
      8238
    ],
    "disallowed"
  ],
  [
    [
      8239,
      8239
    ],
    "disallowed_STD3_mapped",
    [
      32
    ]
  ],
  [
    [
      8240,
      8242
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8243,
      8243
    ],
    "mapped",
    [
      8242,
      8242
    ]
  ],
  [
    [
      8244,
      8244
    ],
    "mapped",
    [
      8242,
      8242,
      8242
    ]
  ],
  [
    [
      8245,
      8245
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8246,
      8246
    ],
    "mapped",
    [
      8245,
      8245
    ]
  ],
  [
    [
      8247,
      8247
    ],
    "mapped",
    [
      8245,
      8245,
      8245
    ]
  ],
  [
    [
      8248,
      8251
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8252,
      8252
    ],
    "disallowed_STD3_mapped",
    [
      33,
      33
    ]
  ],
  [
    [
      8253,
      8253
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8254,
      8254
    ],
    "disallowed_STD3_mapped",
    [
      32,
      773
    ]
  ],
  [
    [
      8255,
      8262
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8263,
      8263
    ],
    "disallowed_STD3_mapped",
    [
      63,
      63
    ]
  ],
  [
    [
      8264,
      8264
    ],
    "disallowed_STD3_mapped",
    [
      63,
      33
    ]
  ],
  [
    [
      8265,
      8265
    ],
    "disallowed_STD3_mapped",
    [
      33,
      63
    ]
  ],
  [
    [
      8266,
      8269
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8270,
      8274
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8275,
      8276
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8277,
      8278
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8279,
      8279
    ],
    "mapped",
    [
      8242,
      8242,
      8242,
      8242
    ]
  ],
  [
    [
      8280,
      8286
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8287,
      8287
    ],
    "disallowed_STD3_mapped",
    [
      32
    ]
  ],
  [
    [
      8288,
      8288
    ],
    "ignored"
  ],
  [
    [
      8289,
      8291
    ],
    "disallowed"
  ],
  [
    [
      8292,
      8292
    ],
    "ignored"
  ],
  [
    [
      8293,
      8293
    ],
    "disallowed"
  ],
  [
    [
      8294,
      8297
    ],
    "disallowed"
  ],
  [
    [
      8298,
      8303
    ],
    "disallowed"
  ],
  [
    [
      8304,
      8304
    ],
    "mapped",
    [
      48
    ]
  ],
  [
    [
      8305,
      8305
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      8306,
      8307
    ],
    "disallowed"
  ],
  [
    [
      8308,
      8308
    ],
    "mapped",
    [
      52
    ]
  ],
  [
    [
      8309,
      8309
    ],
    "mapped",
    [
      53
    ]
  ],
  [
    [
      8310,
      8310
    ],
    "mapped",
    [
      54
    ]
  ],
  [
    [
      8311,
      8311
    ],
    "mapped",
    [
      55
    ]
  ],
  [
    [
      8312,
      8312
    ],
    "mapped",
    [
      56
    ]
  ],
  [
    [
      8313,
      8313
    ],
    "mapped",
    [
      57
    ]
  ],
  [
    [
      8314,
      8314
    ],
    "disallowed_STD3_mapped",
    [
      43
    ]
  ],
  [
    [
      8315,
      8315
    ],
    "mapped",
    [
      8722
    ]
  ],
  [
    [
      8316,
      8316
    ],
    "disallowed_STD3_mapped",
    [
      61
    ]
  ],
  [
    [
      8317,
      8317
    ],
    "disallowed_STD3_mapped",
    [
      40
    ]
  ],
  [
    [
      8318,
      8318
    ],
    "disallowed_STD3_mapped",
    [
      41
    ]
  ],
  [
    [
      8319,
      8319
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      8320,
      8320
    ],
    "mapped",
    [
      48
    ]
  ],
  [
    [
      8321,
      8321
    ],
    "mapped",
    [
      49
    ]
  ],
  [
    [
      8322,
      8322
    ],
    "mapped",
    [
      50
    ]
  ],
  [
    [
      8323,
      8323
    ],
    "mapped",
    [
      51
    ]
  ],
  [
    [
      8324,
      8324
    ],
    "mapped",
    [
      52
    ]
  ],
  [
    [
      8325,
      8325
    ],
    "mapped",
    [
      53
    ]
  ],
  [
    [
      8326,
      8326
    ],
    "mapped",
    [
      54
    ]
  ],
  [
    [
      8327,
      8327
    ],
    "mapped",
    [
      55
    ]
  ],
  [
    [
      8328,
      8328
    ],
    "mapped",
    [
      56
    ]
  ],
  [
    [
      8329,
      8329
    ],
    "mapped",
    [
      57
    ]
  ],
  [
    [
      8330,
      8330
    ],
    "disallowed_STD3_mapped",
    [
      43
    ]
  ],
  [
    [
      8331,
      8331
    ],
    "mapped",
    [
      8722
    ]
  ],
  [
    [
      8332,
      8332
    ],
    "disallowed_STD3_mapped",
    [
      61
    ]
  ],
  [
    [
      8333,
      8333
    ],
    "disallowed_STD3_mapped",
    [
      40
    ]
  ],
  [
    [
      8334,
      8334
    ],
    "disallowed_STD3_mapped",
    [
      41
    ]
  ],
  [
    [
      8335,
      8335
    ],
    "disallowed"
  ],
  [
    [
      8336,
      8336
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      8337,
      8337
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      8338,
      8338
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      8339,
      8339
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      8340,
      8340
    ],
    "mapped",
    [
      601
    ]
  ],
  [
    [
      8341,
      8341
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      8342,
      8342
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      8343,
      8343
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      8344,
      8344
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      8345,
      8345
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      8346,
      8346
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      8347,
      8347
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      8348,
      8348
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      8349,
      8351
    ],
    "disallowed"
  ],
  [
    [
      8352,
      8359
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8360,
      8360
    ],
    "mapped",
    [
      114,
      115
    ]
  ],
  [
    [
      8361,
      8362
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8363,
      8363
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8364,
      8364
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8365,
      8367
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8368,
      8369
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8370,
      8373
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8374,
      8376
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8377,
      8377
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8378,
      8378
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8379,
      8381
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8382,
      8382
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8383,
      8399
    ],
    "disallowed"
  ],
  [
    [
      8400,
      8417
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8418,
      8419
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8420,
      8426
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8427,
      8427
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8428,
      8431
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8432,
      8432
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8433,
      8447
    ],
    "disallowed"
  ],
  [
    [
      8448,
      8448
    ],
    "disallowed_STD3_mapped",
    [
      97,
      47,
      99
    ]
  ],
  [
    [
      8449,
      8449
    ],
    "disallowed_STD3_mapped",
    [
      97,
      47,
      115
    ]
  ],
  [
    [
      8450,
      8450
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      8451,
      8451
    ],
    "mapped",
    [
      176,
      99
    ]
  ],
  [
    [
      8452,
      8452
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8453,
      8453
    ],
    "disallowed_STD3_mapped",
    [
      99,
      47,
      111
    ]
  ],
  [
    [
      8454,
      8454
    ],
    "disallowed_STD3_mapped",
    [
      99,
      47,
      117
    ]
  ],
  [
    [
      8455,
      8455
    ],
    "mapped",
    [
      603
    ]
  ],
  [
    [
      8456,
      8456
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8457,
      8457
    ],
    "mapped",
    [
      176,
      102
    ]
  ],
  [
    [
      8458,
      8458
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      8459,
      8462
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      8463,
      8463
    ],
    "mapped",
    [
      295
    ]
  ],
  [
    [
      8464,
      8465
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      8466,
      8467
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      8468,
      8468
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8469,
      8469
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      8470,
      8470
    ],
    "mapped",
    [
      110,
      111
    ]
  ],
  [
    [
      8471,
      8472
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8473,
      8473
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      8474,
      8474
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      8475,
      8477
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      8478,
      8479
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8480,
      8480
    ],
    "mapped",
    [
      115,
      109
    ]
  ],
  [
    [
      8481,
      8481
    ],
    "mapped",
    [
      116,
      101,
      108
    ]
  ],
  [
    [
      8482,
      8482
    ],
    "mapped",
    [
      116,
      109
    ]
  ],
  [
    [
      8483,
      8483
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8484,
      8484
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      8485,
      8485
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8486,
      8486
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      8487,
      8487
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8488,
      8488
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      8489,
      8489
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8490,
      8490
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      8491,
      8491
    ],
    "mapped",
    [
      229
    ]
  ],
  [
    [
      8492,
      8492
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      8493,
      8493
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      8494,
      8494
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8495,
      8496
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      8497,
      8497
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      8498,
      8498
    ],
    "disallowed"
  ],
  [
    [
      8499,
      8499
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      8500,
      8500
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      8501,
      8501
    ],
    "mapped",
    [
      1488
    ]
  ],
  [
    [
      8502,
      8502
    ],
    "mapped",
    [
      1489
    ]
  ],
  [
    [
      8503,
      8503
    ],
    "mapped",
    [
      1490
    ]
  ],
  [
    [
      8504,
      8504
    ],
    "mapped",
    [
      1491
    ]
  ],
  [
    [
      8505,
      8505
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      8506,
      8506
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8507,
      8507
    ],
    "mapped",
    [
      102,
      97,
      120
    ]
  ],
  [
    [
      8508,
      8508
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      8509,
      8510
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      8511,
      8511
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      8512,
      8512
    ],
    "mapped",
    [
      8721
    ]
  ],
  [
    [
      8513,
      8516
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8517,
      8518
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      8519,
      8519
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      8520,
      8520
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      8521,
      8521
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      8522,
      8523
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8524,
      8524
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8525,
      8525
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8526,
      8526
    ],
    "valid"
  ],
  [
    [
      8527,
      8527
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8528,
      8528
    ],
    "mapped",
    [
      49,
      8260,
      55
    ]
  ],
  [
    [
      8529,
      8529
    ],
    "mapped",
    [
      49,
      8260,
      57
    ]
  ],
  [
    [
      8530,
      8530
    ],
    "mapped",
    [
      49,
      8260,
      49,
      48
    ]
  ],
  [
    [
      8531,
      8531
    ],
    "mapped",
    [
      49,
      8260,
      51
    ]
  ],
  [
    [
      8532,
      8532
    ],
    "mapped",
    [
      50,
      8260,
      51
    ]
  ],
  [
    [
      8533,
      8533
    ],
    "mapped",
    [
      49,
      8260,
      53
    ]
  ],
  [
    [
      8534,
      8534
    ],
    "mapped",
    [
      50,
      8260,
      53
    ]
  ],
  [
    [
      8535,
      8535
    ],
    "mapped",
    [
      51,
      8260,
      53
    ]
  ],
  [
    [
      8536,
      8536
    ],
    "mapped",
    [
      52,
      8260,
      53
    ]
  ],
  [
    [
      8537,
      8537
    ],
    "mapped",
    [
      49,
      8260,
      54
    ]
  ],
  [
    [
      8538,
      8538
    ],
    "mapped",
    [
      53,
      8260,
      54
    ]
  ],
  [
    [
      8539,
      8539
    ],
    "mapped",
    [
      49,
      8260,
      56
    ]
  ],
  [
    [
      8540,
      8540
    ],
    "mapped",
    [
      51,
      8260,
      56
    ]
  ],
  [
    [
      8541,
      8541
    ],
    "mapped",
    [
      53,
      8260,
      56
    ]
  ],
  [
    [
      8542,
      8542
    ],
    "mapped",
    [
      55,
      8260,
      56
    ]
  ],
  [
    [
      8543,
      8543
    ],
    "mapped",
    [
      49,
      8260
    ]
  ],
  [
    [
      8544,
      8544
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      8545,
      8545
    ],
    "mapped",
    [
      105,
      105
    ]
  ],
  [
    [
      8546,
      8546
    ],
    "mapped",
    [
      105,
      105,
      105
    ]
  ],
  [
    [
      8547,
      8547
    ],
    "mapped",
    [
      105,
      118
    ]
  ],
  [
    [
      8548,
      8548
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      8549,
      8549
    ],
    "mapped",
    [
      118,
      105
    ]
  ],
  [
    [
      8550,
      8550
    ],
    "mapped",
    [
      118,
      105,
      105
    ]
  ],
  [
    [
      8551,
      8551
    ],
    "mapped",
    [
      118,
      105,
      105,
      105
    ]
  ],
  [
    [
      8552,
      8552
    ],
    "mapped",
    [
      105,
      120
    ]
  ],
  [
    [
      8553,
      8553
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      8554,
      8554
    ],
    "mapped",
    [
      120,
      105
    ]
  ],
  [
    [
      8555,
      8555
    ],
    "mapped",
    [
      120,
      105,
      105
    ]
  ],
  [
    [
      8556,
      8556
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      8557,
      8557
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      8558,
      8558
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      8559,
      8559
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      8560,
      8560
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      8561,
      8561
    ],
    "mapped",
    [
      105,
      105
    ]
  ],
  [
    [
      8562,
      8562
    ],
    "mapped",
    [
      105,
      105,
      105
    ]
  ],
  [
    [
      8563,
      8563
    ],
    "mapped",
    [
      105,
      118
    ]
  ],
  [
    [
      8564,
      8564
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      8565,
      8565
    ],
    "mapped",
    [
      118,
      105
    ]
  ],
  [
    [
      8566,
      8566
    ],
    "mapped",
    [
      118,
      105,
      105
    ]
  ],
  [
    [
      8567,
      8567
    ],
    "mapped",
    [
      118,
      105,
      105,
      105
    ]
  ],
  [
    [
      8568,
      8568
    ],
    "mapped",
    [
      105,
      120
    ]
  ],
  [
    [
      8569,
      8569
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      8570,
      8570
    ],
    "mapped",
    [
      120,
      105
    ]
  ],
  [
    [
      8571,
      8571
    ],
    "mapped",
    [
      120,
      105,
      105
    ]
  ],
  [
    [
      8572,
      8572
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      8573,
      8573
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      8574,
      8574
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      8575,
      8575
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      8576,
      8578
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8579,
      8579
    ],
    "disallowed"
  ],
  [
    [
      8580,
      8580
    ],
    "valid"
  ],
  [
    [
      8581,
      8584
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8585,
      8585
    ],
    "mapped",
    [
      48,
      8260,
      51
    ]
  ],
  [
    [
      8586,
      8587
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8588,
      8591
    ],
    "disallowed"
  ],
  [
    [
      8592,
      8682
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8683,
      8691
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8692,
      8703
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8704,
      8747
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8748,
      8748
    ],
    "mapped",
    [
      8747,
      8747
    ]
  ],
  [
    [
      8749,
      8749
    ],
    "mapped",
    [
      8747,
      8747,
      8747
    ]
  ],
  [
    [
      8750,
      8750
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8751,
      8751
    ],
    "mapped",
    [
      8750,
      8750
    ]
  ],
  [
    [
      8752,
      8752
    ],
    "mapped",
    [
      8750,
      8750,
      8750
    ]
  ],
  [
    [
      8753,
      8799
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8800,
      8800
    ],
    "disallowed_STD3_valid"
  ],
  [
    [
      8801,
      8813
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8814,
      8815
    ],
    "disallowed_STD3_valid"
  ],
  [
    [
      8816,
      8945
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8946,
      8959
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8960,
      8960
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8961,
      8961
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      8962,
      9e3
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9001,
      9001
    ],
    "mapped",
    [
      12296
    ]
  ],
  [
    [
      9002,
      9002
    ],
    "mapped",
    [
      12297
    ]
  ],
  [
    [
      9003,
      9082
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9083,
      9083
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9084,
      9084
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9085,
      9114
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9115,
      9166
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9167,
      9168
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9169,
      9179
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9180,
      9191
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9192,
      9192
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9193,
      9203
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9204,
      9210
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9211,
      9215
    ],
    "disallowed"
  ],
  [
    [
      9216,
      9252
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9253,
      9254
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9255,
      9279
    ],
    "disallowed"
  ],
  [
    [
      9280,
      9290
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9291,
      9311
    ],
    "disallowed"
  ],
  [
    [
      9312,
      9312
    ],
    "mapped",
    [
      49
    ]
  ],
  [
    [
      9313,
      9313
    ],
    "mapped",
    [
      50
    ]
  ],
  [
    [
      9314,
      9314
    ],
    "mapped",
    [
      51
    ]
  ],
  [
    [
      9315,
      9315
    ],
    "mapped",
    [
      52
    ]
  ],
  [
    [
      9316,
      9316
    ],
    "mapped",
    [
      53
    ]
  ],
  [
    [
      9317,
      9317
    ],
    "mapped",
    [
      54
    ]
  ],
  [
    [
      9318,
      9318
    ],
    "mapped",
    [
      55
    ]
  ],
  [
    [
      9319,
      9319
    ],
    "mapped",
    [
      56
    ]
  ],
  [
    [
      9320,
      9320
    ],
    "mapped",
    [
      57
    ]
  ],
  [
    [
      9321,
      9321
    ],
    "mapped",
    [
      49,
      48
    ]
  ],
  [
    [
      9322,
      9322
    ],
    "mapped",
    [
      49,
      49
    ]
  ],
  [
    [
      9323,
      9323
    ],
    "mapped",
    [
      49,
      50
    ]
  ],
  [
    [
      9324,
      9324
    ],
    "mapped",
    [
      49,
      51
    ]
  ],
  [
    [
      9325,
      9325
    ],
    "mapped",
    [
      49,
      52
    ]
  ],
  [
    [
      9326,
      9326
    ],
    "mapped",
    [
      49,
      53
    ]
  ],
  [
    [
      9327,
      9327
    ],
    "mapped",
    [
      49,
      54
    ]
  ],
  [
    [
      9328,
      9328
    ],
    "mapped",
    [
      49,
      55
    ]
  ],
  [
    [
      9329,
      9329
    ],
    "mapped",
    [
      49,
      56
    ]
  ],
  [
    [
      9330,
      9330
    ],
    "mapped",
    [
      49,
      57
    ]
  ],
  [
    [
      9331,
      9331
    ],
    "mapped",
    [
      50,
      48
    ]
  ],
  [
    [
      9332,
      9332
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      41
    ]
  ],
  [
    [
      9333,
      9333
    ],
    "disallowed_STD3_mapped",
    [
      40,
      50,
      41
    ]
  ],
  [
    [
      9334,
      9334
    ],
    "disallowed_STD3_mapped",
    [
      40,
      51,
      41
    ]
  ],
  [
    [
      9335,
      9335
    ],
    "disallowed_STD3_mapped",
    [
      40,
      52,
      41
    ]
  ],
  [
    [
      9336,
      9336
    ],
    "disallowed_STD3_mapped",
    [
      40,
      53,
      41
    ]
  ],
  [
    [
      9337,
      9337
    ],
    "disallowed_STD3_mapped",
    [
      40,
      54,
      41
    ]
  ],
  [
    [
      9338,
      9338
    ],
    "disallowed_STD3_mapped",
    [
      40,
      55,
      41
    ]
  ],
  [
    [
      9339,
      9339
    ],
    "disallowed_STD3_mapped",
    [
      40,
      56,
      41
    ]
  ],
  [
    [
      9340,
      9340
    ],
    "disallowed_STD3_mapped",
    [
      40,
      57,
      41
    ]
  ],
  [
    [
      9341,
      9341
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      48,
      41
    ]
  ],
  [
    [
      9342,
      9342
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      49,
      41
    ]
  ],
  [
    [
      9343,
      9343
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      50,
      41
    ]
  ],
  [
    [
      9344,
      9344
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      51,
      41
    ]
  ],
  [
    [
      9345,
      9345
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      52,
      41
    ]
  ],
  [
    [
      9346,
      9346
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      53,
      41
    ]
  ],
  [
    [
      9347,
      9347
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      54,
      41
    ]
  ],
  [
    [
      9348,
      9348
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      55,
      41
    ]
  ],
  [
    [
      9349,
      9349
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      56,
      41
    ]
  ],
  [
    [
      9350,
      9350
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49,
      57,
      41
    ]
  ],
  [
    [
      9351,
      9351
    ],
    "disallowed_STD3_mapped",
    [
      40,
      50,
      48,
      41
    ]
  ],
  [
    [
      9352,
      9371
    ],
    "disallowed"
  ],
  [
    [
      9372,
      9372
    ],
    "disallowed_STD3_mapped",
    [
      40,
      97,
      41
    ]
  ],
  [
    [
      9373,
      9373
    ],
    "disallowed_STD3_mapped",
    [
      40,
      98,
      41
    ]
  ],
  [
    [
      9374,
      9374
    ],
    "disallowed_STD3_mapped",
    [
      40,
      99,
      41
    ]
  ],
  [
    [
      9375,
      9375
    ],
    "disallowed_STD3_mapped",
    [
      40,
      100,
      41
    ]
  ],
  [
    [
      9376,
      9376
    ],
    "disallowed_STD3_mapped",
    [
      40,
      101,
      41
    ]
  ],
  [
    [
      9377,
      9377
    ],
    "disallowed_STD3_mapped",
    [
      40,
      102,
      41
    ]
  ],
  [
    [
      9378,
      9378
    ],
    "disallowed_STD3_mapped",
    [
      40,
      103,
      41
    ]
  ],
  [
    [
      9379,
      9379
    ],
    "disallowed_STD3_mapped",
    [
      40,
      104,
      41
    ]
  ],
  [
    [
      9380,
      9380
    ],
    "disallowed_STD3_mapped",
    [
      40,
      105,
      41
    ]
  ],
  [
    [
      9381,
      9381
    ],
    "disallowed_STD3_mapped",
    [
      40,
      106,
      41
    ]
  ],
  [
    [
      9382,
      9382
    ],
    "disallowed_STD3_mapped",
    [
      40,
      107,
      41
    ]
  ],
  [
    [
      9383,
      9383
    ],
    "disallowed_STD3_mapped",
    [
      40,
      108,
      41
    ]
  ],
  [
    [
      9384,
      9384
    ],
    "disallowed_STD3_mapped",
    [
      40,
      109,
      41
    ]
  ],
  [
    [
      9385,
      9385
    ],
    "disallowed_STD3_mapped",
    [
      40,
      110,
      41
    ]
  ],
  [
    [
      9386,
      9386
    ],
    "disallowed_STD3_mapped",
    [
      40,
      111,
      41
    ]
  ],
  [
    [
      9387,
      9387
    ],
    "disallowed_STD3_mapped",
    [
      40,
      112,
      41
    ]
  ],
  [
    [
      9388,
      9388
    ],
    "disallowed_STD3_mapped",
    [
      40,
      113,
      41
    ]
  ],
  [
    [
      9389,
      9389
    ],
    "disallowed_STD3_mapped",
    [
      40,
      114,
      41
    ]
  ],
  [
    [
      9390,
      9390
    ],
    "disallowed_STD3_mapped",
    [
      40,
      115,
      41
    ]
  ],
  [
    [
      9391,
      9391
    ],
    "disallowed_STD3_mapped",
    [
      40,
      116,
      41
    ]
  ],
  [
    [
      9392,
      9392
    ],
    "disallowed_STD3_mapped",
    [
      40,
      117,
      41
    ]
  ],
  [
    [
      9393,
      9393
    ],
    "disallowed_STD3_mapped",
    [
      40,
      118,
      41
    ]
  ],
  [
    [
      9394,
      9394
    ],
    "disallowed_STD3_mapped",
    [
      40,
      119,
      41
    ]
  ],
  [
    [
      9395,
      9395
    ],
    "disallowed_STD3_mapped",
    [
      40,
      120,
      41
    ]
  ],
  [
    [
      9396,
      9396
    ],
    "disallowed_STD3_mapped",
    [
      40,
      121,
      41
    ]
  ],
  [
    [
      9397,
      9397
    ],
    "disallowed_STD3_mapped",
    [
      40,
      122,
      41
    ]
  ],
  [
    [
      9398,
      9398
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      9399,
      9399
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      9400,
      9400
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      9401,
      9401
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      9402,
      9402
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      9403,
      9403
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      9404,
      9404
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      9405,
      9405
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      9406,
      9406
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      9407,
      9407
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      9408,
      9408
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      9409,
      9409
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      9410,
      9410
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      9411,
      9411
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      9412,
      9412
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      9413,
      9413
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      9414,
      9414
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      9415,
      9415
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      9416,
      9416
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      9417,
      9417
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      9418,
      9418
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      9419,
      9419
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      9420,
      9420
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      9421,
      9421
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      9422,
      9422
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      9423,
      9423
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      9424,
      9424
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      9425,
      9425
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      9426,
      9426
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      9427,
      9427
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      9428,
      9428
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      9429,
      9429
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      9430,
      9430
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      9431,
      9431
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      9432,
      9432
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      9433,
      9433
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      9434,
      9434
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      9435,
      9435
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      9436,
      9436
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      9437,
      9437
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      9438,
      9438
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      9439,
      9439
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      9440,
      9440
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      9441,
      9441
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      9442,
      9442
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      9443,
      9443
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      9444,
      9444
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      9445,
      9445
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      9446,
      9446
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      9447,
      9447
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      9448,
      9448
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      9449,
      9449
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      9450,
      9450
    ],
    "mapped",
    [
      48
    ]
  ],
  [
    [
      9451,
      9470
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9471,
      9471
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9472,
      9621
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9622,
      9631
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9632,
      9711
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9712,
      9719
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9720,
      9727
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9728,
      9747
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9748,
      9749
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9750,
      9751
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9752,
      9752
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9753,
      9753
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9754,
      9839
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9840,
      9841
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9842,
      9853
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9854,
      9855
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9856,
      9865
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9866,
      9873
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9874,
      9884
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9885,
      9885
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9886,
      9887
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9888,
      9889
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9890,
      9905
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9906,
      9906
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9907,
      9916
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9917,
      9919
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9920,
      9923
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9924,
      9933
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9934,
      9934
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9935,
      9953
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9954,
      9954
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9955,
      9955
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9956,
      9959
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9960,
      9983
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9984,
      9984
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9985,
      9988
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9989,
      9989
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9990,
      9993
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9994,
      9995
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      9996,
      10023
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10024,
      10024
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10025,
      10059
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10060,
      10060
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10061,
      10061
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10062,
      10062
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10063,
      10066
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10067,
      10069
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10070,
      10070
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10071,
      10071
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10072,
      10078
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10079,
      10080
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10081,
      10087
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10088,
      10101
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10102,
      10132
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10133,
      10135
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10136,
      10159
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10160,
      10160
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10161,
      10174
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10175,
      10175
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10176,
      10182
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10183,
      10186
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10187,
      10187
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10188,
      10188
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10189,
      10189
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10190,
      10191
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10192,
      10219
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10220,
      10223
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10224,
      10239
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10240,
      10495
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10496,
      10763
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10764,
      10764
    ],
    "mapped",
    [
      8747,
      8747,
      8747,
      8747
    ]
  ],
  [
    [
      10765,
      10867
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10868,
      10868
    ],
    "disallowed_STD3_mapped",
    [
      58,
      58,
      61
    ]
  ],
  [
    [
      10869,
      10869
    ],
    "disallowed_STD3_mapped",
    [
      61,
      61
    ]
  ],
  [
    [
      10870,
      10870
    ],
    "disallowed_STD3_mapped",
    [
      61,
      61,
      61
    ]
  ],
  [
    [
      10871,
      10971
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      10972,
      10972
    ],
    "mapped",
    [
      10973,
      824
    ]
  ],
  [
    [
      10973,
      11007
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11008,
      11021
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11022,
      11027
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11028,
      11034
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11035,
      11039
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11040,
      11043
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11044,
      11084
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11085,
      11087
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11088,
      11092
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11093,
      11097
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11098,
      11123
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11124,
      11125
    ],
    "disallowed"
  ],
  [
    [
      11126,
      11157
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11158,
      11159
    ],
    "disallowed"
  ],
  [
    [
      11160,
      11193
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11194,
      11196
    ],
    "disallowed"
  ],
  [
    [
      11197,
      11208
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11209,
      11209
    ],
    "disallowed"
  ],
  [
    [
      11210,
      11217
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11218,
      11243
    ],
    "disallowed"
  ],
  [
    [
      11244,
      11247
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11248,
      11263
    ],
    "disallowed"
  ],
  [
    [
      11264,
      11264
    ],
    "mapped",
    [
      11312
    ]
  ],
  [
    [
      11265,
      11265
    ],
    "mapped",
    [
      11313
    ]
  ],
  [
    [
      11266,
      11266
    ],
    "mapped",
    [
      11314
    ]
  ],
  [
    [
      11267,
      11267
    ],
    "mapped",
    [
      11315
    ]
  ],
  [
    [
      11268,
      11268
    ],
    "mapped",
    [
      11316
    ]
  ],
  [
    [
      11269,
      11269
    ],
    "mapped",
    [
      11317
    ]
  ],
  [
    [
      11270,
      11270
    ],
    "mapped",
    [
      11318
    ]
  ],
  [
    [
      11271,
      11271
    ],
    "mapped",
    [
      11319
    ]
  ],
  [
    [
      11272,
      11272
    ],
    "mapped",
    [
      11320
    ]
  ],
  [
    [
      11273,
      11273
    ],
    "mapped",
    [
      11321
    ]
  ],
  [
    [
      11274,
      11274
    ],
    "mapped",
    [
      11322
    ]
  ],
  [
    [
      11275,
      11275
    ],
    "mapped",
    [
      11323
    ]
  ],
  [
    [
      11276,
      11276
    ],
    "mapped",
    [
      11324
    ]
  ],
  [
    [
      11277,
      11277
    ],
    "mapped",
    [
      11325
    ]
  ],
  [
    [
      11278,
      11278
    ],
    "mapped",
    [
      11326
    ]
  ],
  [
    [
      11279,
      11279
    ],
    "mapped",
    [
      11327
    ]
  ],
  [
    [
      11280,
      11280
    ],
    "mapped",
    [
      11328
    ]
  ],
  [
    [
      11281,
      11281
    ],
    "mapped",
    [
      11329
    ]
  ],
  [
    [
      11282,
      11282
    ],
    "mapped",
    [
      11330
    ]
  ],
  [
    [
      11283,
      11283
    ],
    "mapped",
    [
      11331
    ]
  ],
  [
    [
      11284,
      11284
    ],
    "mapped",
    [
      11332
    ]
  ],
  [
    [
      11285,
      11285
    ],
    "mapped",
    [
      11333
    ]
  ],
  [
    [
      11286,
      11286
    ],
    "mapped",
    [
      11334
    ]
  ],
  [
    [
      11287,
      11287
    ],
    "mapped",
    [
      11335
    ]
  ],
  [
    [
      11288,
      11288
    ],
    "mapped",
    [
      11336
    ]
  ],
  [
    [
      11289,
      11289
    ],
    "mapped",
    [
      11337
    ]
  ],
  [
    [
      11290,
      11290
    ],
    "mapped",
    [
      11338
    ]
  ],
  [
    [
      11291,
      11291
    ],
    "mapped",
    [
      11339
    ]
  ],
  [
    [
      11292,
      11292
    ],
    "mapped",
    [
      11340
    ]
  ],
  [
    [
      11293,
      11293
    ],
    "mapped",
    [
      11341
    ]
  ],
  [
    [
      11294,
      11294
    ],
    "mapped",
    [
      11342
    ]
  ],
  [
    [
      11295,
      11295
    ],
    "mapped",
    [
      11343
    ]
  ],
  [
    [
      11296,
      11296
    ],
    "mapped",
    [
      11344
    ]
  ],
  [
    [
      11297,
      11297
    ],
    "mapped",
    [
      11345
    ]
  ],
  [
    [
      11298,
      11298
    ],
    "mapped",
    [
      11346
    ]
  ],
  [
    [
      11299,
      11299
    ],
    "mapped",
    [
      11347
    ]
  ],
  [
    [
      11300,
      11300
    ],
    "mapped",
    [
      11348
    ]
  ],
  [
    [
      11301,
      11301
    ],
    "mapped",
    [
      11349
    ]
  ],
  [
    [
      11302,
      11302
    ],
    "mapped",
    [
      11350
    ]
  ],
  [
    [
      11303,
      11303
    ],
    "mapped",
    [
      11351
    ]
  ],
  [
    [
      11304,
      11304
    ],
    "mapped",
    [
      11352
    ]
  ],
  [
    [
      11305,
      11305
    ],
    "mapped",
    [
      11353
    ]
  ],
  [
    [
      11306,
      11306
    ],
    "mapped",
    [
      11354
    ]
  ],
  [
    [
      11307,
      11307
    ],
    "mapped",
    [
      11355
    ]
  ],
  [
    [
      11308,
      11308
    ],
    "mapped",
    [
      11356
    ]
  ],
  [
    [
      11309,
      11309
    ],
    "mapped",
    [
      11357
    ]
  ],
  [
    [
      11310,
      11310
    ],
    "mapped",
    [
      11358
    ]
  ],
  [
    [
      11311,
      11311
    ],
    "disallowed"
  ],
  [
    [
      11312,
      11358
    ],
    "valid"
  ],
  [
    [
      11359,
      11359
    ],
    "disallowed"
  ],
  [
    [
      11360,
      11360
    ],
    "mapped",
    [
      11361
    ]
  ],
  [
    [
      11361,
      11361
    ],
    "valid"
  ],
  [
    [
      11362,
      11362
    ],
    "mapped",
    [
      619
    ]
  ],
  [
    [
      11363,
      11363
    ],
    "mapped",
    [
      7549
    ]
  ],
  [
    [
      11364,
      11364
    ],
    "mapped",
    [
      637
    ]
  ],
  [
    [
      11365,
      11366
    ],
    "valid"
  ],
  [
    [
      11367,
      11367
    ],
    "mapped",
    [
      11368
    ]
  ],
  [
    [
      11368,
      11368
    ],
    "valid"
  ],
  [
    [
      11369,
      11369
    ],
    "mapped",
    [
      11370
    ]
  ],
  [
    [
      11370,
      11370
    ],
    "valid"
  ],
  [
    [
      11371,
      11371
    ],
    "mapped",
    [
      11372
    ]
  ],
  [
    [
      11372,
      11372
    ],
    "valid"
  ],
  [
    [
      11373,
      11373
    ],
    "mapped",
    [
      593
    ]
  ],
  [
    [
      11374,
      11374
    ],
    "mapped",
    [
      625
    ]
  ],
  [
    [
      11375,
      11375
    ],
    "mapped",
    [
      592
    ]
  ],
  [
    [
      11376,
      11376
    ],
    "mapped",
    [
      594
    ]
  ],
  [
    [
      11377,
      11377
    ],
    "valid"
  ],
  [
    [
      11378,
      11378
    ],
    "mapped",
    [
      11379
    ]
  ],
  [
    [
      11379,
      11379
    ],
    "valid"
  ],
  [
    [
      11380,
      11380
    ],
    "valid"
  ],
  [
    [
      11381,
      11381
    ],
    "mapped",
    [
      11382
    ]
  ],
  [
    [
      11382,
      11383
    ],
    "valid"
  ],
  [
    [
      11384,
      11387
    ],
    "valid"
  ],
  [
    [
      11388,
      11388
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      11389,
      11389
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      11390,
      11390
    ],
    "mapped",
    [
      575
    ]
  ],
  [
    [
      11391,
      11391
    ],
    "mapped",
    [
      576
    ]
  ],
  [
    [
      11392,
      11392
    ],
    "mapped",
    [
      11393
    ]
  ],
  [
    [
      11393,
      11393
    ],
    "valid"
  ],
  [
    [
      11394,
      11394
    ],
    "mapped",
    [
      11395
    ]
  ],
  [
    [
      11395,
      11395
    ],
    "valid"
  ],
  [
    [
      11396,
      11396
    ],
    "mapped",
    [
      11397
    ]
  ],
  [
    [
      11397,
      11397
    ],
    "valid"
  ],
  [
    [
      11398,
      11398
    ],
    "mapped",
    [
      11399
    ]
  ],
  [
    [
      11399,
      11399
    ],
    "valid"
  ],
  [
    [
      11400,
      11400
    ],
    "mapped",
    [
      11401
    ]
  ],
  [
    [
      11401,
      11401
    ],
    "valid"
  ],
  [
    [
      11402,
      11402
    ],
    "mapped",
    [
      11403
    ]
  ],
  [
    [
      11403,
      11403
    ],
    "valid"
  ],
  [
    [
      11404,
      11404
    ],
    "mapped",
    [
      11405
    ]
  ],
  [
    [
      11405,
      11405
    ],
    "valid"
  ],
  [
    [
      11406,
      11406
    ],
    "mapped",
    [
      11407
    ]
  ],
  [
    [
      11407,
      11407
    ],
    "valid"
  ],
  [
    [
      11408,
      11408
    ],
    "mapped",
    [
      11409
    ]
  ],
  [
    [
      11409,
      11409
    ],
    "valid"
  ],
  [
    [
      11410,
      11410
    ],
    "mapped",
    [
      11411
    ]
  ],
  [
    [
      11411,
      11411
    ],
    "valid"
  ],
  [
    [
      11412,
      11412
    ],
    "mapped",
    [
      11413
    ]
  ],
  [
    [
      11413,
      11413
    ],
    "valid"
  ],
  [
    [
      11414,
      11414
    ],
    "mapped",
    [
      11415
    ]
  ],
  [
    [
      11415,
      11415
    ],
    "valid"
  ],
  [
    [
      11416,
      11416
    ],
    "mapped",
    [
      11417
    ]
  ],
  [
    [
      11417,
      11417
    ],
    "valid"
  ],
  [
    [
      11418,
      11418
    ],
    "mapped",
    [
      11419
    ]
  ],
  [
    [
      11419,
      11419
    ],
    "valid"
  ],
  [
    [
      11420,
      11420
    ],
    "mapped",
    [
      11421
    ]
  ],
  [
    [
      11421,
      11421
    ],
    "valid"
  ],
  [
    [
      11422,
      11422
    ],
    "mapped",
    [
      11423
    ]
  ],
  [
    [
      11423,
      11423
    ],
    "valid"
  ],
  [
    [
      11424,
      11424
    ],
    "mapped",
    [
      11425
    ]
  ],
  [
    [
      11425,
      11425
    ],
    "valid"
  ],
  [
    [
      11426,
      11426
    ],
    "mapped",
    [
      11427
    ]
  ],
  [
    [
      11427,
      11427
    ],
    "valid"
  ],
  [
    [
      11428,
      11428
    ],
    "mapped",
    [
      11429
    ]
  ],
  [
    [
      11429,
      11429
    ],
    "valid"
  ],
  [
    [
      11430,
      11430
    ],
    "mapped",
    [
      11431
    ]
  ],
  [
    [
      11431,
      11431
    ],
    "valid"
  ],
  [
    [
      11432,
      11432
    ],
    "mapped",
    [
      11433
    ]
  ],
  [
    [
      11433,
      11433
    ],
    "valid"
  ],
  [
    [
      11434,
      11434
    ],
    "mapped",
    [
      11435
    ]
  ],
  [
    [
      11435,
      11435
    ],
    "valid"
  ],
  [
    [
      11436,
      11436
    ],
    "mapped",
    [
      11437
    ]
  ],
  [
    [
      11437,
      11437
    ],
    "valid"
  ],
  [
    [
      11438,
      11438
    ],
    "mapped",
    [
      11439
    ]
  ],
  [
    [
      11439,
      11439
    ],
    "valid"
  ],
  [
    [
      11440,
      11440
    ],
    "mapped",
    [
      11441
    ]
  ],
  [
    [
      11441,
      11441
    ],
    "valid"
  ],
  [
    [
      11442,
      11442
    ],
    "mapped",
    [
      11443
    ]
  ],
  [
    [
      11443,
      11443
    ],
    "valid"
  ],
  [
    [
      11444,
      11444
    ],
    "mapped",
    [
      11445
    ]
  ],
  [
    [
      11445,
      11445
    ],
    "valid"
  ],
  [
    [
      11446,
      11446
    ],
    "mapped",
    [
      11447
    ]
  ],
  [
    [
      11447,
      11447
    ],
    "valid"
  ],
  [
    [
      11448,
      11448
    ],
    "mapped",
    [
      11449
    ]
  ],
  [
    [
      11449,
      11449
    ],
    "valid"
  ],
  [
    [
      11450,
      11450
    ],
    "mapped",
    [
      11451
    ]
  ],
  [
    [
      11451,
      11451
    ],
    "valid"
  ],
  [
    [
      11452,
      11452
    ],
    "mapped",
    [
      11453
    ]
  ],
  [
    [
      11453,
      11453
    ],
    "valid"
  ],
  [
    [
      11454,
      11454
    ],
    "mapped",
    [
      11455
    ]
  ],
  [
    [
      11455,
      11455
    ],
    "valid"
  ],
  [
    [
      11456,
      11456
    ],
    "mapped",
    [
      11457
    ]
  ],
  [
    [
      11457,
      11457
    ],
    "valid"
  ],
  [
    [
      11458,
      11458
    ],
    "mapped",
    [
      11459
    ]
  ],
  [
    [
      11459,
      11459
    ],
    "valid"
  ],
  [
    [
      11460,
      11460
    ],
    "mapped",
    [
      11461
    ]
  ],
  [
    [
      11461,
      11461
    ],
    "valid"
  ],
  [
    [
      11462,
      11462
    ],
    "mapped",
    [
      11463
    ]
  ],
  [
    [
      11463,
      11463
    ],
    "valid"
  ],
  [
    [
      11464,
      11464
    ],
    "mapped",
    [
      11465
    ]
  ],
  [
    [
      11465,
      11465
    ],
    "valid"
  ],
  [
    [
      11466,
      11466
    ],
    "mapped",
    [
      11467
    ]
  ],
  [
    [
      11467,
      11467
    ],
    "valid"
  ],
  [
    [
      11468,
      11468
    ],
    "mapped",
    [
      11469
    ]
  ],
  [
    [
      11469,
      11469
    ],
    "valid"
  ],
  [
    [
      11470,
      11470
    ],
    "mapped",
    [
      11471
    ]
  ],
  [
    [
      11471,
      11471
    ],
    "valid"
  ],
  [
    [
      11472,
      11472
    ],
    "mapped",
    [
      11473
    ]
  ],
  [
    [
      11473,
      11473
    ],
    "valid"
  ],
  [
    [
      11474,
      11474
    ],
    "mapped",
    [
      11475
    ]
  ],
  [
    [
      11475,
      11475
    ],
    "valid"
  ],
  [
    [
      11476,
      11476
    ],
    "mapped",
    [
      11477
    ]
  ],
  [
    [
      11477,
      11477
    ],
    "valid"
  ],
  [
    [
      11478,
      11478
    ],
    "mapped",
    [
      11479
    ]
  ],
  [
    [
      11479,
      11479
    ],
    "valid"
  ],
  [
    [
      11480,
      11480
    ],
    "mapped",
    [
      11481
    ]
  ],
  [
    [
      11481,
      11481
    ],
    "valid"
  ],
  [
    [
      11482,
      11482
    ],
    "mapped",
    [
      11483
    ]
  ],
  [
    [
      11483,
      11483
    ],
    "valid"
  ],
  [
    [
      11484,
      11484
    ],
    "mapped",
    [
      11485
    ]
  ],
  [
    [
      11485,
      11485
    ],
    "valid"
  ],
  [
    [
      11486,
      11486
    ],
    "mapped",
    [
      11487
    ]
  ],
  [
    [
      11487,
      11487
    ],
    "valid"
  ],
  [
    [
      11488,
      11488
    ],
    "mapped",
    [
      11489
    ]
  ],
  [
    [
      11489,
      11489
    ],
    "valid"
  ],
  [
    [
      11490,
      11490
    ],
    "mapped",
    [
      11491
    ]
  ],
  [
    [
      11491,
      11492
    ],
    "valid"
  ],
  [
    [
      11493,
      11498
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11499,
      11499
    ],
    "mapped",
    [
      11500
    ]
  ],
  [
    [
      11500,
      11500
    ],
    "valid"
  ],
  [
    [
      11501,
      11501
    ],
    "mapped",
    [
      11502
    ]
  ],
  [
    [
      11502,
      11505
    ],
    "valid"
  ],
  [
    [
      11506,
      11506
    ],
    "mapped",
    [
      11507
    ]
  ],
  [
    [
      11507,
      11507
    ],
    "valid"
  ],
  [
    [
      11508,
      11512
    ],
    "disallowed"
  ],
  [
    [
      11513,
      11519
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11520,
      11557
    ],
    "valid"
  ],
  [
    [
      11558,
      11558
    ],
    "disallowed"
  ],
  [
    [
      11559,
      11559
    ],
    "valid"
  ],
  [
    [
      11560,
      11564
    ],
    "disallowed"
  ],
  [
    [
      11565,
      11565
    ],
    "valid"
  ],
  [
    [
      11566,
      11567
    ],
    "disallowed"
  ],
  [
    [
      11568,
      11621
    ],
    "valid"
  ],
  [
    [
      11622,
      11623
    ],
    "valid"
  ],
  [
    [
      11624,
      11630
    ],
    "disallowed"
  ],
  [
    [
      11631,
      11631
    ],
    "mapped",
    [
      11617
    ]
  ],
  [
    [
      11632,
      11632
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11633,
      11646
    ],
    "disallowed"
  ],
  [
    [
      11647,
      11647
    ],
    "valid"
  ],
  [
    [
      11648,
      11670
    ],
    "valid"
  ],
  [
    [
      11671,
      11679
    ],
    "disallowed"
  ],
  [
    [
      11680,
      11686
    ],
    "valid"
  ],
  [
    [
      11687,
      11687
    ],
    "disallowed"
  ],
  [
    [
      11688,
      11694
    ],
    "valid"
  ],
  [
    [
      11695,
      11695
    ],
    "disallowed"
  ],
  [
    [
      11696,
      11702
    ],
    "valid"
  ],
  [
    [
      11703,
      11703
    ],
    "disallowed"
  ],
  [
    [
      11704,
      11710
    ],
    "valid"
  ],
  [
    [
      11711,
      11711
    ],
    "disallowed"
  ],
  [
    [
      11712,
      11718
    ],
    "valid"
  ],
  [
    [
      11719,
      11719
    ],
    "disallowed"
  ],
  [
    [
      11720,
      11726
    ],
    "valid"
  ],
  [
    [
      11727,
      11727
    ],
    "disallowed"
  ],
  [
    [
      11728,
      11734
    ],
    "valid"
  ],
  [
    [
      11735,
      11735
    ],
    "disallowed"
  ],
  [
    [
      11736,
      11742
    ],
    "valid"
  ],
  [
    [
      11743,
      11743
    ],
    "disallowed"
  ],
  [
    [
      11744,
      11775
    ],
    "valid"
  ],
  [
    [
      11776,
      11799
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11800,
      11803
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11804,
      11805
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11806,
      11822
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11823,
      11823
    ],
    "valid"
  ],
  [
    [
      11824,
      11824
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11825,
      11825
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11826,
      11835
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11836,
      11842
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11843,
      11903
    ],
    "disallowed"
  ],
  [
    [
      11904,
      11929
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11930,
      11930
    ],
    "disallowed"
  ],
  [
    [
      11931,
      11934
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      11935,
      11935
    ],
    "mapped",
    [
      27597
    ]
  ],
  [
    [
      11936,
      12018
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12019,
      12019
    ],
    "mapped",
    [
      40863
    ]
  ],
  [
    [
      12020,
      12031
    ],
    "disallowed"
  ],
  [
    [
      12032,
      12032
    ],
    "mapped",
    [
      19968
    ]
  ],
  [
    [
      12033,
      12033
    ],
    "mapped",
    [
      20008
    ]
  ],
  [
    [
      12034,
      12034
    ],
    "mapped",
    [
      20022
    ]
  ],
  [
    [
      12035,
      12035
    ],
    "mapped",
    [
      20031
    ]
  ],
  [
    [
      12036,
      12036
    ],
    "mapped",
    [
      20057
    ]
  ],
  [
    [
      12037,
      12037
    ],
    "mapped",
    [
      20101
    ]
  ],
  [
    [
      12038,
      12038
    ],
    "mapped",
    [
      20108
    ]
  ],
  [
    [
      12039,
      12039
    ],
    "mapped",
    [
      20128
    ]
  ],
  [
    [
      12040,
      12040
    ],
    "mapped",
    [
      20154
    ]
  ],
  [
    [
      12041,
      12041
    ],
    "mapped",
    [
      20799
    ]
  ],
  [
    [
      12042,
      12042
    ],
    "mapped",
    [
      20837
    ]
  ],
  [
    [
      12043,
      12043
    ],
    "mapped",
    [
      20843
    ]
  ],
  [
    [
      12044,
      12044
    ],
    "mapped",
    [
      20866
    ]
  ],
  [
    [
      12045,
      12045
    ],
    "mapped",
    [
      20886
    ]
  ],
  [
    [
      12046,
      12046
    ],
    "mapped",
    [
      20907
    ]
  ],
  [
    [
      12047,
      12047
    ],
    "mapped",
    [
      20960
    ]
  ],
  [
    [
      12048,
      12048
    ],
    "mapped",
    [
      20981
    ]
  ],
  [
    [
      12049,
      12049
    ],
    "mapped",
    [
      20992
    ]
  ],
  [
    [
      12050,
      12050
    ],
    "mapped",
    [
      21147
    ]
  ],
  [
    [
      12051,
      12051
    ],
    "mapped",
    [
      21241
    ]
  ],
  [
    [
      12052,
      12052
    ],
    "mapped",
    [
      21269
    ]
  ],
  [
    [
      12053,
      12053
    ],
    "mapped",
    [
      21274
    ]
  ],
  [
    [
      12054,
      12054
    ],
    "mapped",
    [
      21304
    ]
  ],
  [
    [
      12055,
      12055
    ],
    "mapped",
    [
      21313
    ]
  ],
  [
    [
      12056,
      12056
    ],
    "mapped",
    [
      21340
    ]
  ],
  [
    [
      12057,
      12057
    ],
    "mapped",
    [
      21353
    ]
  ],
  [
    [
      12058,
      12058
    ],
    "mapped",
    [
      21378
    ]
  ],
  [
    [
      12059,
      12059
    ],
    "mapped",
    [
      21430
    ]
  ],
  [
    [
      12060,
      12060
    ],
    "mapped",
    [
      21448
    ]
  ],
  [
    [
      12061,
      12061
    ],
    "mapped",
    [
      21475
    ]
  ],
  [
    [
      12062,
      12062
    ],
    "mapped",
    [
      22231
    ]
  ],
  [
    [
      12063,
      12063
    ],
    "mapped",
    [
      22303
    ]
  ],
  [
    [
      12064,
      12064
    ],
    "mapped",
    [
      22763
    ]
  ],
  [
    [
      12065,
      12065
    ],
    "mapped",
    [
      22786
    ]
  ],
  [
    [
      12066,
      12066
    ],
    "mapped",
    [
      22794
    ]
  ],
  [
    [
      12067,
      12067
    ],
    "mapped",
    [
      22805
    ]
  ],
  [
    [
      12068,
      12068
    ],
    "mapped",
    [
      22823
    ]
  ],
  [
    [
      12069,
      12069
    ],
    "mapped",
    [
      22899
    ]
  ],
  [
    [
      12070,
      12070
    ],
    "mapped",
    [
      23376
    ]
  ],
  [
    [
      12071,
      12071
    ],
    "mapped",
    [
      23424
    ]
  ],
  [
    [
      12072,
      12072
    ],
    "mapped",
    [
      23544
    ]
  ],
  [
    [
      12073,
      12073
    ],
    "mapped",
    [
      23567
    ]
  ],
  [
    [
      12074,
      12074
    ],
    "mapped",
    [
      23586
    ]
  ],
  [
    [
      12075,
      12075
    ],
    "mapped",
    [
      23608
    ]
  ],
  [
    [
      12076,
      12076
    ],
    "mapped",
    [
      23662
    ]
  ],
  [
    [
      12077,
      12077
    ],
    "mapped",
    [
      23665
    ]
  ],
  [
    [
      12078,
      12078
    ],
    "mapped",
    [
      24027
    ]
  ],
  [
    [
      12079,
      12079
    ],
    "mapped",
    [
      24037
    ]
  ],
  [
    [
      12080,
      12080
    ],
    "mapped",
    [
      24049
    ]
  ],
  [
    [
      12081,
      12081
    ],
    "mapped",
    [
      24062
    ]
  ],
  [
    [
      12082,
      12082
    ],
    "mapped",
    [
      24178
    ]
  ],
  [
    [
      12083,
      12083
    ],
    "mapped",
    [
      24186
    ]
  ],
  [
    [
      12084,
      12084
    ],
    "mapped",
    [
      24191
    ]
  ],
  [
    [
      12085,
      12085
    ],
    "mapped",
    [
      24308
    ]
  ],
  [
    [
      12086,
      12086
    ],
    "mapped",
    [
      24318
    ]
  ],
  [
    [
      12087,
      12087
    ],
    "mapped",
    [
      24331
    ]
  ],
  [
    [
      12088,
      12088
    ],
    "mapped",
    [
      24339
    ]
  ],
  [
    [
      12089,
      12089
    ],
    "mapped",
    [
      24400
    ]
  ],
  [
    [
      12090,
      12090
    ],
    "mapped",
    [
      24417
    ]
  ],
  [
    [
      12091,
      12091
    ],
    "mapped",
    [
      24435
    ]
  ],
  [
    [
      12092,
      12092
    ],
    "mapped",
    [
      24515
    ]
  ],
  [
    [
      12093,
      12093
    ],
    "mapped",
    [
      25096
    ]
  ],
  [
    [
      12094,
      12094
    ],
    "mapped",
    [
      25142
    ]
  ],
  [
    [
      12095,
      12095
    ],
    "mapped",
    [
      25163
    ]
  ],
  [
    [
      12096,
      12096
    ],
    "mapped",
    [
      25903
    ]
  ],
  [
    [
      12097,
      12097
    ],
    "mapped",
    [
      25908
    ]
  ],
  [
    [
      12098,
      12098
    ],
    "mapped",
    [
      25991
    ]
  ],
  [
    [
      12099,
      12099
    ],
    "mapped",
    [
      26007
    ]
  ],
  [
    [
      12100,
      12100
    ],
    "mapped",
    [
      26020
    ]
  ],
  [
    [
      12101,
      12101
    ],
    "mapped",
    [
      26041
    ]
  ],
  [
    [
      12102,
      12102
    ],
    "mapped",
    [
      26080
    ]
  ],
  [
    [
      12103,
      12103
    ],
    "mapped",
    [
      26085
    ]
  ],
  [
    [
      12104,
      12104
    ],
    "mapped",
    [
      26352
    ]
  ],
  [
    [
      12105,
      12105
    ],
    "mapped",
    [
      26376
    ]
  ],
  [
    [
      12106,
      12106
    ],
    "mapped",
    [
      26408
    ]
  ],
  [
    [
      12107,
      12107
    ],
    "mapped",
    [
      27424
    ]
  ],
  [
    [
      12108,
      12108
    ],
    "mapped",
    [
      27490
    ]
  ],
  [
    [
      12109,
      12109
    ],
    "mapped",
    [
      27513
    ]
  ],
  [
    [
      12110,
      12110
    ],
    "mapped",
    [
      27571
    ]
  ],
  [
    [
      12111,
      12111
    ],
    "mapped",
    [
      27595
    ]
  ],
  [
    [
      12112,
      12112
    ],
    "mapped",
    [
      27604
    ]
  ],
  [
    [
      12113,
      12113
    ],
    "mapped",
    [
      27611
    ]
  ],
  [
    [
      12114,
      12114
    ],
    "mapped",
    [
      27663
    ]
  ],
  [
    [
      12115,
      12115
    ],
    "mapped",
    [
      27668
    ]
  ],
  [
    [
      12116,
      12116
    ],
    "mapped",
    [
      27700
    ]
  ],
  [
    [
      12117,
      12117
    ],
    "mapped",
    [
      28779
    ]
  ],
  [
    [
      12118,
      12118
    ],
    "mapped",
    [
      29226
    ]
  ],
  [
    [
      12119,
      12119
    ],
    "mapped",
    [
      29238
    ]
  ],
  [
    [
      12120,
      12120
    ],
    "mapped",
    [
      29243
    ]
  ],
  [
    [
      12121,
      12121
    ],
    "mapped",
    [
      29247
    ]
  ],
  [
    [
      12122,
      12122
    ],
    "mapped",
    [
      29255
    ]
  ],
  [
    [
      12123,
      12123
    ],
    "mapped",
    [
      29273
    ]
  ],
  [
    [
      12124,
      12124
    ],
    "mapped",
    [
      29275
    ]
  ],
  [
    [
      12125,
      12125
    ],
    "mapped",
    [
      29356
    ]
  ],
  [
    [
      12126,
      12126
    ],
    "mapped",
    [
      29572
    ]
  ],
  [
    [
      12127,
      12127
    ],
    "mapped",
    [
      29577
    ]
  ],
  [
    [
      12128,
      12128
    ],
    "mapped",
    [
      29916
    ]
  ],
  [
    [
      12129,
      12129
    ],
    "mapped",
    [
      29926
    ]
  ],
  [
    [
      12130,
      12130
    ],
    "mapped",
    [
      29976
    ]
  ],
  [
    [
      12131,
      12131
    ],
    "mapped",
    [
      29983
    ]
  ],
  [
    [
      12132,
      12132
    ],
    "mapped",
    [
      29992
    ]
  ],
  [
    [
      12133,
      12133
    ],
    "mapped",
    [
      3e4
    ]
  ],
  [
    [
      12134,
      12134
    ],
    "mapped",
    [
      30091
    ]
  ],
  [
    [
      12135,
      12135
    ],
    "mapped",
    [
      30098
    ]
  ],
  [
    [
      12136,
      12136
    ],
    "mapped",
    [
      30326
    ]
  ],
  [
    [
      12137,
      12137
    ],
    "mapped",
    [
      30333
    ]
  ],
  [
    [
      12138,
      12138
    ],
    "mapped",
    [
      30382
    ]
  ],
  [
    [
      12139,
      12139
    ],
    "mapped",
    [
      30399
    ]
  ],
  [
    [
      12140,
      12140
    ],
    "mapped",
    [
      30446
    ]
  ],
  [
    [
      12141,
      12141
    ],
    "mapped",
    [
      30683
    ]
  ],
  [
    [
      12142,
      12142
    ],
    "mapped",
    [
      30690
    ]
  ],
  [
    [
      12143,
      12143
    ],
    "mapped",
    [
      30707
    ]
  ],
  [
    [
      12144,
      12144
    ],
    "mapped",
    [
      31034
    ]
  ],
  [
    [
      12145,
      12145
    ],
    "mapped",
    [
      31160
    ]
  ],
  [
    [
      12146,
      12146
    ],
    "mapped",
    [
      31166
    ]
  ],
  [
    [
      12147,
      12147
    ],
    "mapped",
    [
      31348
    ]
  ],
  [
    [
      12148,
      12148
    ],
    "mapped",
    [
      31435
    ]
  ],
  [
    [
      12149,
      12149
    ],
    "mapped",
    [
      31481
    ]
  ],
  [
    [
      12150,
      12150
    ],
    "mapped",
    [
      31859
    ]
  ],
  [
    [
      12151,
      12151
    ],
    "mapped",
    [
      31992
    ]
  ],
  [
    [
      12152,
      12152
    ],
    "mapped",
    [
      32566
    ]
  ],
  [
    [
      12153,
      12153
    ],
    "mapped",
    [
      32593
    ]
  ],
  [
    [
      12154,
      12154
    ],
    "mapped",
    [
      32650
    ]
  ],
  [
    [
      12155,
      12155
    ],
    "mapped",
    [
      32701
    ]
  ],
  [
    [
      12156,
      12156
    ],
    "mapped",
    [
      32769
    ]
  ],
  [
    [
      12157,
      12157
    ],
    "mapped",
    [
      32780
    ]
  ],
  [
    [
      12158,
      12158
    ],
    "mapped",
    [
      32786
    ]
  ],
  [
    [
      12159,
      12159
    ],
    "mapped",
    [
      32819
    ]
  ],
  [
    [
      12160,
      12160
    ],
    "mapped",
    [
      32895
    ]
  ],
  [
    [
      12161,
      12161
    ],
    "mapped",
    [
      32905
    ]
  ],
  [
    [
      12162,
      12162
    ],
    "mapped",
    [
      33251
    ]
  ],
  [
    [
      12163,
      12163
    ],
    "mapped",
    [
      33258
    ]
  ],
  [
    [
      12164,
      12164
    ],
    "mapped",
    [
      33267
    ]
  ],
  [
    [
      12165,
      12165
    ],
    "mapped",
    [
      33276
    ]
  ],
  [
    [
      12166,
      12166
    ],
    "mapped",
    [
      33292
    ]
  ],
  [
    [
      12167,
      12167
    ],
    "mapped",
    [
      33307
    ]
  ],
  [
    [
      12168,
      12168
    ],
    "mapped",
    [
      33311
    ]
  ],
  [
    [
      12169,
      12169
    ],
    "mapped",
    [
      33390
    ]
  ],
  [
    [
      12170,
      12170
    ],
    "mapped",
    [
      33394
    ]
  ],
  [
    [
      12171,
      12171
    ],
    "mapped",
    [
      33400
    ]
  ],
  [
    [
      12172,
      12172
    ],
    "mapped",
    [
      34381
    ]
  ],
  [
    [
      12173,
      12173
    ],
    "mapped",
    [
      34411
    ]
  ],
  [
    [
      12174,
      12174
    ],
    "mapped",
    [
      34880
    ]
  ],
  [
    [
      12175,
      12175
    ],
    "mapped",
    [
      34892
    ]
  ],
  [
    [
      12176,
      12176
    ],
    "mapped",
    [
      34915
    ]
  ],
  [
    [
      12177,
      12177
    ],
    "mapped",
    [
      35198
    ]
  ],
  [
    [
      12178,
      12178
    ],
    "mapped",
    [
      35211
    ]
  ],
  [
    [
      12179,
      12179
    ],
    "mapped",
    [
      35282
    ]
  ],
  [
    [
      12180,
      12180
    ],
    "mapped",
    [
      35328
    ]
  ],
  [
    [
      12181,
      12181
    ],
    "mapped",
    [
      35895
    ]
  ],
  [
    [
      12182,
      12182
    ],
    "mapped",
    [
      35910
    ]
  ],
  [
    [
      12183,
      12183
    ],
    "mapped",
    [
      35925
    ]
  ],
  [
    [
      12184,
      12184
    ],
    "mapped",
    [
      35960
    ]
  ],
  [
    [
      12185,
      12185
    ],
    "mapped",
    [
      35997
    ]
  ],
  [
    [
      12186,
      12186
    ],
    "mapped",
    [
      36196
    ]
  ],
  [
    [
      12187,
      12187
    ],
    "mapped",
    [
      36208
    ]
  ],
  [
    [
      12188,
      12188
    ],
    "mapped",
    [
      36275
    ]
  ],
  [
    [
      12189,
      12189
    ],
    "mapped",
    [
      36523
    ]
  ],
  [
    [
      12190,
      12190
    ],
    "mapped",
    [
      36554
    ]
  ],
  [
    [
      12191,
      12191
    ],
    "mapped",
    [
      36763
    ]
  ],
  [
    [
      12192,
      12192
    ],
    "mapped",
    [
      36784
    ]
  ],
  [
    [
      12193,
      12193
    ],
    "mapped",
    [
      36789
    ]
  ],
  [
    [
      12194,
      12194
    ],
    "mapped",
    [
      37009
    ]
  ],
  [
    [
      12195,
      12195
    ],
    "mapped",
    [
      37193
    ]
  ],
  [
    [
      12196,
      12196
    ],
    "mapped",
    [
      37318
    ]
  ],
  [
    [
      12197,
      12197
    ],
    "mapped",
    [
      37324
    ]
  ],
  [
    [
      12198,
      12198
    ],
    "mapped",
    [
      37329
    ]
  ],
  [
    [
      12199,
      12199
    ],
    "mapped",
    [
      38263
    ]
  ],
  [
    [
      12200,
      12200
    ],
    "mapped",
    [
      38272
    ]
  ],
  [
    [
      12201,
      12201
    ],
    "mapped",
    [
      38428
    ]
  ],
  [
    [
      12202,
      12202
    ],
    "mapped",
    [
      38582
    ]
  ],
  [
    [
      12203,
      12203
    ],
    "mapped",
    [
      38585
    ]
  ],
  [
    [
      12204,
      12204
    ],
    "mapped",
    [
      38632
    ]
  ],
  [
    [
      12205,
      12205
    ],
    "mapped",
    [
      38737
    ]
  ],
  [
    [
      12206,
      12206
    ],
    "mapped",
    [
      38750
    ]
  ],
  [
    [
      12207,
      12207
    ],
    "mapped",
    [
      38754
    ]
  ],
  [
    [
      12208,
      12208
    ],
    "mapped",
    [
      38761
    ]
  ],
  [
    [
      12209,
      12209
    ],
    "mapped",
    [
      38859
    ]
  ],
  [
    [
      12210,
      12210
    ],
    "mapped",
    [
      38893
    ]
  ],
  [
    [
      12211,
      12211
    ],
    "mapped",
    [
      38899
    ]
  ],
  [
    [
      12212,
      12212
    ],
    "mapped",
    [
      38913
    ]
  ],
  [
    [
      12213,
      12213
    ],
    "mapped",
    [
      39080
    ]
  ],
  [
    [
      12214,
      12214
    ],
    "mapped",
    [
      39131
    ]
  ],
  [
    [
      12215,
      12215
    ],
    "mapped",
    [
      39135
    ]
  ],
  [
    [
      12216,
      12216
    ],
    "mapped",
    [
      39318
    ]
  ],
  [
    [
      12217,
      12217
    ],
    "mapped",
    [
      39321
    ]
  ],
  [
    [
      12218,
      12218
    ],
    "mapped",
    [
      39340
    ]
  ],
  [
    [
      12219,
      12219
    ],
    "mapped",
    [
      39592
    ]
  ],
  [
    [
      12220,
      12220
    ],
    "mapped",
    [
      39640
    ]
  ],
  [
    [
      12221,
      12221
    ],
    "mapped",
    [
      39647
    ]
  ],
  [
    [
      12222,
      12222
    ],
    "mapped",
    [
      39717
    ]
  ],
  [
    [
      12223,
      12223
    ],
    "mapped",
    [
      39727
    ]
  ],
  [
    [
      12224,
      12224
    ],
    "mapped",
    [
      39730
    ]
  ],
  [
    [
      12225,
      12225
    ],
    "mapped",
    [
      39740
    ]
  ],
  [
    [
      12226,
      12226
    ],
    "mapped",
    [
      39770
    ]
  ],
  [
    [
      12227,
      12227
    ],
    "mapped",
    [
      40165
    ]
  ],
  [
    [
      12228,
      12228
    ],
    "mapped",
    [
      40565
    ]
  ],
  [
    [
      12229,
      12229
    ],
    "mapped",
    [
      40575
    ]
  ],
  [
    [
      12230,
      12230
    ],
    "mapped",
    [
      40613
    ]
  ],
  [
    [
      12231,
      12231
    ],
    "mapped",
    [
      40635
    ]
  ],
  [
    [
      12232,
      12232
    ],
    "mapped",
    [
      40643
    ]
  ],
  [
    [
      12233,
      12233
    ],
    "mapped",
    [
      40653
    ]
  ],
  [
    [
      12234,
      12234
    ],
    "mapped",
    [
      40657
    ]
  ],
  [
    [
      12235,
      12235
    ],
    "mapped",
    [
      40697
    ]
  ],
  [
    [
      12236,
      12236
    ],
    "mapped",
    [
      40701
    ]
  ],
  [
    [
      12237,
      12237
    ],
    "mapped",
    [
      40718
    ]
  ],
  [
    [
      12238,
      12238
    ],
    "mapped",
    [
      40723
    ]
  ],
  [
    [
      12239,
      12239
    ],
    "mapped",
    [
      40736
    ]
  ],
  [
    [
      12240,
      12240
    ],
    "mapped",
    [
      40763
    ]
  ],
  [
    [
      12241,
      12241
    ],
    "mapped",
    [
      40778
    ]
  ],
  [
    [
      12242,
      12242
    ],
    "mapped",
    [
      40786
    ]
  ],
  [
    [
      12243,
      12243
    ],
    "mapped",
    [
      40845
    ]
  ],
  [
    [
      12244,
      12244
    ],
    "mapped",
    [
      40860
    ]
  ],
  [
    [
      12245,
      12245
    ],
    "mapped",
    [
      40864
    ]
  ],
  [
    [
      12246,
      12271
    ],
    "disallowed"
  ],
  [
    [
      12272,
      12283
    ],
    "disallowed"
  ],
  [
    [
      12284,
      12287
    ],
    "disallowed"
  ],
  [
    [
      12288,
      12288
    ],
    "disallowed_STD3_mapped",
    [
      32
    ]
  ],
  [
    [
      12289,
      12289
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12290,
      12290
    ],
    "mapped",
    [
      46
    ]
  ],
  [
    [
      12291,
      12292
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12293,
      12295
    ],
    "valid"
  ],
  [
    [
      12296,
      12329
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12330,
      12333
    ],
    "valid"
  ],
  [
    [
      12334,
      12341
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12342,
      12342
    ],
    "mapped",
    [
      12306
    ]
  ],
  [
    [
      12343,
      12343
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12344,
      12344
    ],
    "mapped",
    [
      21313
    ]
  ],
  [
    [
      12345,
      12345
    ],
    "mapped",
    [
      21316
    ]
  ],
  [
    [
      12346,
      12346
    ],
    "mapped",
    [
      21317
    ]
  ],
  [
    [
      12347,
      12347
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12348,
      12348
    ],
    "valid"
  ],
  [
    [
      12349,
      12349
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12350,
      12350
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12351,
      12351
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12352,
      12352
    ],
    "disallowed"
  ],
  [
    [
      12353,
      12436
    ],
    "valid"
  ],
  [
    [
      12437,
      12438
    ],
    "valid"
  ],
  [
    [
      12439,
      12440
    ],
    "disallowed"
  ],
  [
    [
      12441,
      12442
    ],
    "valid"
  ],
  [
    [
      12443,
      12443
    ],
    "disallowed_STD3_mapped",
    [
      32,
      12441
    ]
  ],
  [
    [
      12444,
      12444
    ],
    "disallowed_STD3_mapped",
    [
      32,
      12442
    ]
  ],
  [
    [
      12445,
      12446
    ],
    "valid"
  ],
  [
    [
      12447,
      12447
    ],
    "mapped",
    [
      12424,
      12426
    ]
  ],
  [
    [
      12448,
      12448
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12449,
      12542
    ],
    "valid"
  ],
  [
    [
      12543,
      12543
    ],
    "mapped",
    [
      12467,
      12488
    ]
  ],
  [
    [
      12544,
      12548
    ],
    "disallowed"
  ],
  [
    [
      12549,
      12588
    ],
    "valid"
  ],
  [
    [
      12589,
      12589
    ],
    "valid"
  ],
  [
    [
      12590,
      12592
    ],
    "disallowed"
  ],
  [
    [
      12593,
      12593
    ],
    "mapped",
    [
      4352
    ]
  ],
  [
    [
      12594,
      12594
    ],
    "mapped",
    [
      4353
    ]
  ],
  [
    [
      12595,
      12595
    ],
    "mapped",
    [
      4522
    ]
  ],
  [
    [
      12596,
      12596
    ],
    "mapped",
    [
      4354
    ]
  ],
  [
    [
      12597,
      12597
    ],
    "mapped",
    [
      4524
    ]
  ],
  [
    [
      12598,
      12598
    ],
    "mapped",
    [
      4525
    ]
  ],
  [
    [
      12599,
      12599
    ],
    "mapped",
    [
      4355
    ]
  ],
  [
    [
      12600,
      12600
    ],
    "mapped",
    [
      4356
    ]
  ],
  [
    [
      12601,
      12601
    ],
    "mapped",
    [
      4357
    ]
  ],
  [
    [
      12602,
      12602
    ],
    "mapped",
    [
      4528
    ]
  ],
  [
    [
      12603,
      12603
    ],
    "mapped",
    [
      4529
    ]
  ],
  [
    [
      12604,
      12604
    ],
    "mapped",
    [
      4530
    ]
  ],
  [
    [
      12605,
      12605
    ],
    "mapped",
    [
      4531
    ]
  ],
  [
    [
      12606,
      12606
    ],
    "mapped",
    [
      4532
    ]
  ],
  [
    [
      12607,
      12607
    ],
    "mapped",
    [
      4533
    ]
  ],
  [
    [
      12608,
      12608
    ],
    "mapped",
    [
      4378
    ]
  ],
  [
    [
      12609,
      12609
    ],
    "mapped",
    [
      4358
    ]
  ],
  [
    [
      12610,
      12610
    ],
    "mapped",
    [
      4359
    ]
  ],
  [
    [
      12611,
      12611
    ],
    "mapped",
    [
      4360
    ]
  ],
  [
    [
      12612,
      12612
    ],
    "mapped",
    [
      4385
    ]
  ],
  [
    [
      12613,
      12613
    ],
    "mapped",
    [
      4361
    ]
  ],
  [
    [
      12614,
      12614
    ],
    "mapped",
    [
      4362
    ]
  ],
  [
    [
      12615,
      12615
    ],
    "mapped",
    [
      4363
    ]
  ],
  [
    [
      12616,
      12616
    ],
    "mapped",
    [
      4364
    ]
  ],
  [
    [
      12617,
      12617
    ],
    "mapped",
    [
      4365
    ]
  ],
  [
    [
      12618,
      12618
    ],
    "mapped",
    [
      4366
    ]
  ],
  [
    [
      12619,
      12619
    ],
    "mapped",
    [
      4367
    ]
  ],
  [
    [
      12620,
      12620
    ],
    "mapped",
    [
      4368
    ]
  ],
  [
    [
      12621,
      12621
    ],
    "mapped",
    [
      4369
    ]
  ],
  [
    [
      12622,
      12622
    ],
    "mapped",
    [
      4370
    ]
  ],
  [
    [
      12623,
      12623
    ],
    "mapped",
    [
      4449
    ]
  ],
  [
    [
      12624,
      12624
    ],
    "mapped",
    [
      4450
    ]
  ],
  [
    [
      12625,
      12625
    ],
    "mapped",
    [
      4451
    ]
  ],
  [
    [
      12626,
      12626
    ],
    "mapped",
    [
      4452
    ]
  ],
  [
    [
      12627,
      12627
    ],
    "mapped",
    [
      4453
    ]
  ],
  [
    [
      12628,
      12628
    ],
    "mapped",
    [
      4454
    ]
  ],
  [
    [
      12629,
      12629
    ],
    "mapped",
    [
      4455
    ]
  ],
  [
    [
      12630,
      12630
    ],
    "mapped",
    [
      4456
    ]
  ],
  [
    [
      12631,
      12631
    ],
    "mapped",
    [
      4457
    ]
  ],
  [
    [
      12632,
      12632
    ],
    "mapped",
    [
      4458
    ]
  ],
  [
    [
      12633,
      12633
    ],
    "mapped",
    [
      4459
    ]
  ],
  [
    [
      12634,
      12634
    ],
    "mapped",
    [
      4460
    ]
  ],
  [
    [
      12635,
      12635
    ],
    "mapped",
    [
      4461
    ]
  ],
  [
    [
      12636,
      12636
    ],
    "mapped",
    [
      4462
    ]
  ],
  [
    [
      12637,
      12637
    ],
    "mapped",
    [
      4463
    ]
  ],
  [
    [
      12638,
      12638
    ],
    "mapped",
    [
      4464
    ]
  ],
  [
    [
      12639,
      12639
    ],
    "mapped",
    [
      4465
    ]
  ],
  [
    [
      12640,
      12640
    ],
    "mapped",
    [
      4466
    ]
  ],
  [
    [
      12641,
      12641
    ],
    "mapped",
    [
      4467
    ]
  ],
  [
    [
      12642,
      12642
    ],
    "mapped",
    [
      4468
    ]
  ],
  [
    [
      12643,
      12643
    ],
    "mapped",
    [
      4469
    ]
  ],
  [
    [
      12644,
      12644
    ],
    "disallowed"
  ],
  [
    [
      12645,
      12645
    ],
    "mapped",
    [
      4372
    ]
  ],
  [
    [
      12646,
      12646
    ],
    "mapped",
    [
      4373
    ]
  ],
  [
    [
      12647,
      12647
    ],
    "mapped",
    [
      4551
    ]
  ],
  [
    [
      12648,
      12648
    ],
    "mapped",
    [
      4552
    ]
  ],
  [
    [
      12649,
      12649
    ],
    "mapped",
    [
      4556
    ]
  ],
  [
    [
      12650,
      12650
    ],
    "mapped",
    [
      4558
    ]
  ],
  [
    [
      12651,
      12651
    ],
    "mapped",
    [
      4563
    ]
  ],
  [
    [
      12652,
      12652
    ],
    "mapped",
    [
      4567
    ]
  ],
  [
    [
      12653,
      12653
    ],
    "mapped",
    [
      4569
    ]
  ],
  [
    [
      12654,
      12654
    ],
    "mapped",
    [
      4380
    ]
  ],
  [
    [
      12655,
      12655
    ],
    "mapped",
    [
      4573
    ]
  ],
  [
    [
      12656,
      12656
    ],
    "mapped",
    [
      4575
    ]
  ],
  [
    [
      12657,
      12657
    ],
    "mapped",
    [
      4381
    ]
  ],
  [
    [
      12658,
      12658
    ],
    "mapped",
    [
      4382
    ]
  ],
  [
    [
      12659,
      12659
    ],
    "mapped",
    [
      4384
    ]
  ],
  [
    [
      12660,
      12660
    ],
    "mapped",
    [
      4386
    ]
  ],
  [
    [
      12661,
      12661
    ],
    "mapped",
    [
      4387
    ]
  ],
  [
    [
      12662,
      12662
    ],
    "mapped",
    [
      4391
    ]
  ],
  [
    [
      12663,
      12663
    ],
    "mapped",
    [
      4393
    ]
  ],
  [
    [
      12664,
      12664
    ],
    "mapped",
    [
      4395
    ]
  ],
  [
    [
      12665,
      12665
    ],
    "mapped",
    [
      4396
    ]
  ],
  [
    [
      12666,
      12666
    ],
    "mapped",
    [
      4397
    ]
  ],
  [
    [
      12667,
      12667
    ],
    "mapped",
    [
      4398
    ]
  ],
  [
    [
      12668,
      12668
    ],
    "mapped",
    [
      4399
    ]
  ],
  [
    [
      12669,
      12669
    ],
    "mapped",
    [
      4402
    ]
  ],
  [
    [
      12670,
      12670
    ],
    "mapped",
    [
      4406
    ]
  ],
  [
    [
      12671,
      12671
    ],
    "mapped",
    [
      4416
    ]
  ],
  [
    [
      12672,
      12672
    ],
    "mapped",
    [
      4423
    ]
  ],
  [
    [
      12673,
      12673
    ],
    "mapped",
    [
      4428
    ]
  ],
  [
    [
      12674,
      12674
    ],
    "mapped",
    [
      4593
    ]
  ],
  [
    [
      12675,
      12675
    ],
    "mapped",
    [
      4594
    ]
  ],
  [
    [
      12676,
      12676
    ],
    "mapped",
    [
      4439
    ]
  ],
  [
    [
      12677,
      12677
    ],
    "mapped",
    [
      4440
    ]
  ],
  [
    [
      12678,
      12678
    ],
    "mapped",
    [
      4441
    ]
  ],
  [
    [
      12679,
      12679
    ],
    "mapped",
    [
      4484
    ]
  ],
  [
    [
      12680,
      12680
    ],
    "mapped",
    [
      4485
    ]
  ],
  [
    [
      12681,
      12681
    ],
    "mapped",
    [
      4488
    ]
  ],
  [
    [
      12682,
      12682
    ],
    "mapped",
    [
      4497
    ]
  ],
  [
    [
      12683,
      12683
    ],
    "mapped",
    [
      4498
    ]
  ],
  [
    [
      12684,
      12684
    ],
    "mapped",
    [
      4500
    ]
  ],
  [
    [
      12685,
      12685
    ],
    "mapped",
    [
      4510
    ]
  ],
  [
    [
      12686,
      12686
    ],
    "mapped",
    [
      4513
    ]
  ],
  [
    [
      12687,
      12687
    ],
    "disallowed"
  ],
  [
    [
      12688,
      12689
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12690,
      12690
    ],
    "mapped",
    [
      19968
    ]
  ],
  [
    [
      12691,
      12691
    ],
    "mapped",
    [
      20108
    ]
  ],
  [
    [
      12692,
      12692
    ],
    "mapped",
    [
      19977
    ]
  ],
  [
    [
      12693,
      12693
    ],
    "mapped",
    [
      22235
    ]
  ],
  [
    [
      12694,
      12694
    ],
    "mapped",
    [
      19978
    ]
  ],
  [
    [
      12695,
      12695
    ],
    "mapped",
    [
      20013
    ]
  ],
  [
    [
      12696,
      12696
    ],
    "mapped",
    [
      19979
    ]
  ],
  [
    [
      12697,
      12697
    ],
    "mapped",
    [
      30002
    ]
  ],
  [
    [
      12698,
      12698
    ],
    "mapped",
    [
      20057
    ]
  ],
  [
    [
      12699,
      12699
    ],
    "mapped",
    [
      19993
    ]
  ],
  [
    [
      12700,
      12700
    ],
    "mapped",
    [
      19969
    ]
  ],
  [
    [
      12701,
      12701
    ],
    "mapped",
    [
      22825
    ]
  ],
  [
    [
      12702,
      12702
    ],
    "mapped",
    [
      22320
    ]
  ],
  [
    [
      12703,
      12703
    ],
    "mapped",
    [
      20154
    ]
  ],
  [
    [
      12704,
      12727
    ],
    "valid"
  ],
  [
    [
      12728,
      12730
    ],
    "valid"
  ],
  [
    [
      12731,
      12735
    ],
    "disallowed"
  ],
  [
    [
      12736,
      12751
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12752,
      12771
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12772,
      12783
    ],
    "disallowed"
  ],
  [
    [
      12784,
      12799
    ],
    "valid"
  ],
  [
    [
      12800,
      12800
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4352,
      41
    ]
  ],
  [
    [
      12801,
      12801
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4354,
      41
    ]
  ],
  [
    [
      12802,
      12802
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4355,
      41
    ]
  ],
  [
    [
      12803,
      12803
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4357,
      41
    ]
  ],
  [
    [
      12804,
      12804
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4358,
      41
    ]
  ],
  [
    [
      12805,
      12805
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4359,
      41
    ]
  ],
  [
    [
      12806,
      12806
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4361,
      41
    ]
  ],
  [
    [
      12807,
      12807
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4363,
      41
    ]
  ],
  [
    [
      12808,
      12808
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4364,
      41
    ]
  ],
  [
    [
      12809,
      12809
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4366,
      41
    ]
  ],
  [
    [
      12810,
      12810
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4367,
      41
    ]
  ],
  [
    [
      12811,
      12811
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4368,
      41
    ]
  ],
  [
    [
      12812,
      12812
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4369,
      41
    ]
  ],
  [
    [
      12813,
      12813
    ],
    "disallowed_STD3_mapped",
    [
      40,
      4370,
      41
    ]
  ],
  [
    [
      12814,
      12814
    ],
    "disallowed_STD3_mapped",
    [
      40,
      44032,
      41
    ]
  ],
  [
    [
      12815,
      12815
    ],
    "disallowed_STD3_mapped",
    [
      40,
      45208,
      41
    ]
  ],
  [
    [
      12816,
      12816
    ],
    "disallowed_STD3_mapped",
    [
      40,
      45796,
      41
    ]
  ],
  [
    [
      12817,
      12817
    ],
    "disallowed_STD3_mapped",
    [
      40,
      46972,
      41
    ]
  ],
  [
    [
      12818,
      12818
    ],
    "disallowed_STD3_mapped",
    [
      40,
      47560,
      41
    ]
  ],
  [
    [
      12819,
      12819
    ],
    "disallowed_STD3_mapped",
    [
      40,
      48148,
      41
    ]
  ],
  [
    [
      12820,
      12820
    ],
    "disallowed_STD3_mapped",
    [
      40,
      49324,
      41
    ]
  ],
  [
    [
      12821,
      12821
    ],
    "disallowed_STD3_mapped",
    [
      40,
      50500,
      41
    ]
  ],
  [
    [
      12822,
      12822
    ],
    "disallowed_STD3_mapped",
    [
      40,
      51088,
      41
    ]
  ],
  [
    [
      12823,
      12823
    ],
    "disallowed_STD3_mapped",
    [
      40,
      52264,
      41
    ]
  ],
  [
    [
      12824,
      12824
    ],
    "disallowed_STD3_mapped",
    [
      40,
      52852,
      41
    ]
  ],
  [
    [
      12825,
      12825
    ],
    "disallowed_STD3_mapped",
    [
      40,
      53440,
      41
    ]
  ],
  [
    [
      12826,
      12826
    ],
    "disallowed_STD3_mapped",
    [
      40,
      54028,
      41
    ]
  ],
  [
    [
      12827,
      12827
    ],
    "disallowed_STD3_mapped",
    [
      40,
      54616,
      41
    ]
  ],
  [
    [
      12828,
      12828
    ],
    "disallowed_STD3_mapped",
    [
      40,
      51452,
      41
    ]
  ],
  [
    [
      12829,
      12829
    ],
    "disallowed_STD3_mapped",
    [
      40,
      50724,
      51204,
      41
    ]
  ],
  [
    [
      12830,
      12830
    ],
    "disallowed_STD3_mapped",
    [
      40,
      50724,
      54980,
      41
    ]
  ],
  [
    [
      12831,
      12831
    ],
    "disallowed"
  ],
  [
    [
      12832,
      12832
    ],
    "disallowed_STD3_mapped",
    [
      40,
      19968,
      41
    ]
  ],
  [
    [
      12833,
      12833
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20108,
      41
    ]
  ],
  [
    [
      12834,
      12834
    ],
    "disallowed_STD3_mapped",
    [
      40,
      19977,
      41
    ]
  ],
  [
    [
      12835,
      12835
    ],
    "disallowed_STD3_mapped",
    [
      40,
      22235,
      41
    ]
  ],
  [
    [
      12836,
      12836
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20116,
      41
    ]
  ],
  [
    [
      12837,
      12837
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20845,
      41
    ]
  ],
  [
    [
      12838,
      12838
    ],
    "disallowed_STD3_mapped",
    [
      40,
      19971,
      41
    ]
  ],
  [
    [
      12839,
      12839
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20843,
      41
    ]
  ],
  [
    [
      12840,
      12840
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20061,
      41
    ]
  ],
  [
    [
      12841,
      12841
    ],
    "disallowed_STD3_mapped",
    [
      40,
      21313,
      41
    ]
  ],
  [
    [
      12842,
      12842
    ],
    "disallowed_STD3_mapped",
    [
      40,
      26376,
      41
    ]
  ],
  [
    [
      12843,
      12843
    ],
    "disallowed_STD3_mapped",
    [
      40,
      28779,
      41
    ]
  ],
  [
    [
      12844,
      12844
    ],
    "disallowed_STD3_mapped",
    [
      40,
      27700,
      41
    ]
  ],
  [
    [
      12845,
      12845
    ],
    "disallowed_STD3_mapped",
    [
      40,
      26408,
      41
    ]
  ],
  [
    [
      12846,
      12846
    ],
    "disallowed_STD3_mapped",
    [
      40,
      37329,
      41
    ]
  ],
  [
    [
      12847,
      12847
    ],
    "disallowed_STD3_mapped",
    [
      40,
      22303,
      41
    ]
  ],
  [
    [
      12848,
      12848
    ],
    "disallowed_STD3_mapped",
    [
      40,
      26085,
      41
    ]
  ],
  [
    [
      12849,
      12849
    ],
    "disallowed_STD3_mapped",
    [
      40,
      26666,
      41
    ]
  ],
  [
    [
      12850,
      12850
    ],
    "disallowed_STD3_mapped",
    [
      40,
      26377,
      41
    ]
  ],
  [
    [
      12851,
      12851
    ],
    "disallowed_STD3_mapped",
    [
      40,
      31038,
      41
    ]
  ],
  [
    [
      12852,
      12852
    ],
    "disallowed_STD3_mapped",
    [
      40,
      21517,
      41
    ]
  ],
  [
    [
      12853,
      12853
    ],
    "disallowed_STD3_mapped",
    [
      40,
      29305,
      41
    ]
  ],
  [
    [
      12854,
      12854
    ],
    "disallowed_STD3_mapped",
    [
      40,
      36001,
      41
    ]
  ],
  [
    [
      12855,
      12855
    ],
    "disallowed_STD3_mapped",
    [
      40,
      31069,
      41
    ]
  ],
  [
    [
      12856,
      12856
    ],
    "disallowed_STD3_mapped",
    [
      40,
      21172,
      41
    ]
  ],
  [
    [
      12857,
      12857
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20195,
      41
    ]
  ],
  [
    [
      12858,
      12858
    ],
    "disallowed_STD3_mapped",
    [
      40,
      21628,
      41
    ]
  ],
  [
    [
      12859,
      12859
    ],
    "disallowed_STD3_mapped",
    [
      40,
      23398,
      41
    ]
  ],
  [
    [
      12860,
      12860
    ],
    "disallowed_STD3_mapped",
    [
      40,
      30435,
      41
    ]
  ],
  [
    [
      12861,
      12861
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20225,
      41
    ]
  ],
  [
    [
      12862,
      12862
    ],
    "disallowed_STD3_mapped",
    [
      40,
      36039,
      41
    ]
  ],
  [
    [
      12863,
      12863
    ],
    "disallowed_STD3_mapped",
    [
      40,
      21332,
      41
    ]
  ],
  [
    [
      12864,
      12864
    ],
    "disallowed_STD3_mapped",
    [
      40,
      31085,
      41
    ]
  ],
  [
    [
      12865,
      12865
    ],
    "disallowed_STD3_mapped",
    [
      40,
      20241,
      41
    ]
  ],
  [
    [
      12866,
      12866
    ],
    "disallowed_STD3_mapped",
    [
      40,
      33258,
      41
    ]
  ],
  [
    [
      12867,
      12867
    ],
    "disallowed_STD3_mapped",
    [
      40,
      33267,
      41
    ]
  ],
  [
    [
      12868,
      12868
    ],
    "mapped",
    [
      21839
    ]
  ],
  [
    [
      12869,
      12869
    ],
    "mapped",
    [
      24188
    ]
  ],
  [
    [
      12870,
      12870
    ],
    "mapped",
    [
      25991
    ]
  ],
  [
    [
      12871,
      12871
    ],
    "mapped",
    [
      31631
    ]
  ],
  [
    [
      12872,
      12879
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12880,
      12880
    ],
    "mapped",
    [
      112,
      116,
      101
    ]
  ],
  [
    [
      12881,
      12881
    ],
    "mapped",
    [
      50,
      49
    ]
  ],
  [
    [
      12882,
      12882
    ],
    "mapped",
    [
      50,
      50
    ]
  ],
  [
    [
      12883,
      12883
    ],
    "mapped",
    [
      50,
      51
    ]
  ],
  [
    [
      12884,
      12884
    ],
    "mapped",
    [
      50,
      52
    ]
  ],
  [
    [
      12885,
      12885
    ],
    "mapped",
    [
      50,
      53
    ]
  ],
  [
    [
      12886,
      12886
    ],
    "mapped",
    [
      50,
      54
    ]
  ],
  [
    [
      12887,
      12887
    ],
    "mapped",
    [
      50,
      55
    ]
  ],
  [
    [
      12888,
      12888
    ],
    "mapped",
    [
      50,
      56
    ]
  ],
  [
    [
      12889,
      12889
    ],
    "mapped",
    [
      50,
      57
    ]
  ],
  [
    [
      12890,
      12890
    ],
    "mapped",
    [
      51,
      48
    ]
  ],
  [
    [
      12891,
      12891
    ],
    "mapped",
    [
      51,
      49
    ]
  ],
  [
    [
      12892,
      12892
    ],
    "mapped",
    [
      51,
      50
    ]
  ],
  [
    [
      12893,
      12893
    ],
    "mapped",
    [
      51,
      51
    ]
  ],
  [
    [
      12894,
      12894
    ],
    "mapped",
    [
      51,
      52
    ]
  ],
  [
    [
      12895,
      12895
    ],
    "mapped",
    [
      51,
      53
    ]
  ],
  [
    [
      12896,
      12896
    ],
    "mapped",
    [
      4352
    ]
  ],
  [
    [
      12897,
      12897
    ],
    "mapped",
    [
      4354
    ]
  ],
  [
    [
      12898,
      12898
    ],
    "mapped",
    [
      4355
    ]
  ],
  [
    [
      12899,
      12899
    ],
    "mapped",
    [
      4357
    ]
  ],
  [
    [
      12900,
      12900
    ],
    "mapped",
    [
      4358
    ]
  ],
  [
    [
      12901,
      12901
    ],
    "mapped",
    [
      4359
    ]
  ],
  [
    [
      12902,
      12902
    ],
    "mapped",
    [
      4361
    ]
  ],
  [
    [
      12903,
      12903
    ],
    "mapped",
    [
      4363
    ]
  ],
  [
    [
      12904,
      12904
    ],
    "mapped",
    [
      4364
    ]
  ],
  [
    [
      12905,
      12905
    ],
    "mapped",
    [
      4366
    ]
  ],
  [
    [
      12906,
      12906
    ],
    "mapped",
    [
      4367
    ]
  ],
  [
    [
      12907,
      12907
    ],
    "mapped",
    [
      4368
    ]
  ],
  [
    [
      12908,
      12908
    ],
    "mapped",
    [
      4369
    ]
  ],
  [
    [
      12909,
      12909
    ],
    "mapped",
    [
      4370
    ]
  ],
  [
    [
      12910,
      12910
    ],
    "mapped",
    [
      44032
    ]
  ],
  [
    [
      12911,
      12911
    ],
    "mapped",
    [
      45208
    ]
  ],
  [
    [
      12912,
      12912
    ],
    "mapped",
    [
      45796
    ]
  ],
  [
    [
      12913,
      12913
    ],
    "mapped",
    [
      46972
    ]
  ],
  [
    [
      12914,
      12914
    ],
    "mapped",
    [
      47560
    ]
  ],
  [
    [
      12915,
      12915
    ],
    "mapped",
    [
      48148
    ]
  ],
  [
    [
      12916,
      12916
    ],
    "mapped",
    [
      49324
    ]
  ],
  [
    [
      12917,
      12917
    ],
    "mapped",
    [
      50500
    ]
  ],
  [
    [
      12918,
      12918
    ],
    "mapped",
    [
      51088
    ]
  ],
  [
    [
      12919,
      12919
    ],
    "mapped",
    [
      52264
    ]
  ],
  [
    [
      12920,
      12920
    ],
    "mapped",
    [
      52852
    ]
  ],
  [
    [
      12921,
      12921
    ],
    "mapped",
    [
      53440
    ]
  ],
  [
    [
      12922,
      12922
    ],
    "mapped",
    [
      54028
    ]
  ],
  [
    [
      12923,
      12923
    ],
    "mapped",
    [
      54616
    ]
  ],
  [
    [
      12924,
      12924
    ],
    "mapped",
    [
      52280,
      44256
    ]
  ],
  [
    [
      12925,
      12925
    ],
    "mapped",
    [
      51452,
      51032
    ]
  ],
  [
    [
      12926,
      12926
    ],
    "mapped",
    [
      50864
    ]
  ],
  [
    [
      12927,
      12927
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      12928,
      12928
    ],
    "mapped",
    [
      19968
    ]
  ],
  [
    [
      12929,
      12929
    ],
    "mapped",
    [
      20108
    ]
  ],
  [
    [
      12930,
      12930
    ],
    "mapped",
    [
      19977
    ]
  ],
  [
    [
      12931,
      12931
    ],
    "mapped",
    [
      22235
    ]
  ],
  [
    [
      12932,
      12932
    ],
    "mapped",
    [
      20116
    ]
  ],
  [
    [
      12933,
      12933
    ],
    "mapped",
    [
      20845
    ]
  ],
  [
    [
      12934,
      12934
    ],
    "mapped",
    [
      19971
    ]
  ],
  [
    [
      12935,
      12935
    ],
    "mapped",
    [
      20843
    ]
  ],
  [
    [
      12936,
      12936
    ],
    "mapped",
    [
      20061
    ]
  ],
  [
    [
      12937,
      12937
    ],
    "mapped",
    [
      21313
    ]
  ],
  [
    [
      12938,
      12938
    ],
    "mapped",
    [
      26376
    ]
  ],
  [
    [
      12939,
      12939
    ],
    "mapped",
    [
      28779
    ]
  ],
  [
    [
      12940,
      12940
    ],
    "mapped",
    [
      27700
    ]
  ],
  [
    [
      12941,
      12941
    ],
    "mapped",
    [
      26408
    ]
  ],
  [
    [
      12942,
      12942
    ],
    "mapped",
    [
      37329
    ]
  ],
  [
    [
      12943,
      12943
    ],
    "mapped",
    [
      22303
    ]
  ],
  [
    [
      12944,
      12944
    ],
    "mapped",
    [
      26085
    ]
  ],
  [
    [
      12945,
      12945
    ],
    "mapped",
    [
      26666
    ]
  ],
  [
    [
      12946,
      12946
    ],
    "mapped",
    [
      26377
    ]
  ],
  [
    [
      12947,
      12947
    ],
    "mapped",
    [
      31038
    ]
  ],
  [
    [
      12948,
      12948
    ],
    "mapped",
    [
      21517
    ]
  ],
  [
    [
      12949,
      12949
    ],
    "mapped",
    [
      29305
    ]
  ],
  [
    [
      12950,
      12950
    ],
    "mapped",
    [
      36001
    ]
  ],
  [
    [
      12951,
      12951
    ],
    "mapped",
    [
      31069
    ]
  ],
  [
    [
      12952,
      12952
    ],
    "mapped",
    [
      21172
    ]
  ],
  [
    [
      12953,
      12953
    ],
    "mapped",
    [
      31192
    ]
  ],
  [
    [
      12954,
      12954
    ],
    "mapped",
    [
      30007
    ]
  ],
  [
    [
      12955,
      12955
    ],
    "mapped",
    [
      22899
    ]
  ],
  [
    [
      12956,
      12956
    ],
    "mapped",
    [
      36969
    ]
  ],
  [
    [
      12957,
      12957
    ],
    "mapped",
    [
      20778
    ]
  ],
  [
    [
      12958,
      12958
    ],
    "mapped",
    [
      21360
    ]
  ],
  [
    [
      12959,
      12959
    ],
    "mapped",
    [
      27880
    ]
  ],
  [
    [
      12960,
      12960
    ],
    "mapped",
    [
      38917
    ]
  ],
  [
    [
      12961,
      12961
    ],
    "mapped",
    [
      20241
    ]
  ],
  [
    [
      12962,
      12962
    ],
    "mapped",
    [
      20889
    ]
  ],
  [
    [
      12963,
      12963
    ],
    "mapped",
    [
      27491
    ]
  ],
  [
    [
      12964,
      12964
    ],
    "mapped",
    [
      19978
    ]
  ],
  [
    [
      12965,
      12965
    ],
    "mapped",
    [
      20013
    ]
  ],
  [
    [
      12966,
      12966
    ],
    "mapped",
    [
      19979
    ]
  ],
  [
    [
      12967,
      12967
    ],
    "mapped",
    [
      24038
    ]
  ],
  [
    [
      12968,
      12968
    ],
    "mapped",
    [
      21491
    ]
  ],
  [
    [
      12969,
      12969
    ],
    "mapped",
    [
      21307
    ]
  ],
  [
    [
      12970,
      12970
    ],
    "mapped",
    [
      23447
    ]
  ],
  [
    [
      12971,
      12971
    ],
    "mapped",
    [
      23398
    ]
  ],
  [
    [
      12972,
      12972
    ],
    "mapped",
    [
      30435
    ]
  ],
  [
    [
      12973,
      12973
    ],
    "mapped",
    [
      20225
    ]
  ],
  [
    [
      12974,
      12974
    ],
    "mapped",
    [
      36039
    ]
  ],
  [
    [
      12975,
      12975
    ],
    "mapped",
    [
      21332
    ]
  ],
  [
    [
      12976,
      12976
    ],
    "mapped",
    [
      22812
    ]
  ],
  [
    [
      12977,
      12977
    ],
    "mapped",
    [
      51,
      54
    ]
  ],
  [
    [
      12978,
      12978
    ],
    "mapped",
    [
      51,
      55
    ]
  ],
  [
    [
      12979,
      12979
    ],
    "mapped",
    [
      51,
      56
    ]
  ],
  [
    [
      12980,
      12980
    ],
    "mapped",
    [
      51,
      57
    ]
  ],
  [
    [
      12981,
      12981
    ],
    "mapped",
    [
      52,
      48
    ]
  ],
  [
    [
      12982,
      12982
    ],
    "mapped",
    [
      52,
      49
    ]
  ],
  [
    [
      12983,
      12983
    ],
    "mapped",
    [
      52,
      50
    ]
  ],
  [
    [
      12984,
      12984
    ],
    "mapped",
    [
      52,
      51
    ]
  ],
  [
    [
      12985,
      12985
    ],
    "mapped",
    [
      52,
      52
    ]
  ],
  [
    [
      12986,
      12986
    ],
    "mapped",
    [
      52,
      53
    ]
  ],
  [
    [
      12987,
      12987
    ],
    "mapped",
    [
      52,
      54
    ]
  ],
  [
    [
      12988,
      12988
    ],
    "mapped",
    [
      52,
      55
    ]
  ],
  [
    [
      12989,
      12989
    ],
    "mapped",
    [
      52,
      56
    ]
  ],
  [
    [
      12990,
      12990
    ],
    "mapped",
    [
      52,
      57
    ]
  ],
  [
    [
      12991,
      12991
    ],
    "mapped",
    [
      53,
      48
    ]
  ],
  [
    [
      12992,
      12992
    ],
    "mapped",
    [
      49,
      26376
    ]
  ],
  [
    [
      12993,
      12993
    ],
    "mapped",
    [
      50,
      26376
    ]
  ],
  [
    [
      12994,
      12994
    ],
    "mapped",
    [
      51,
      26376
    ]
  ],
  [
    [
      12995,
      12995
    ],
    "mapped",
    [
      52,
      26376
    ]
  ],
  [
    [
      12996,
      12996
    ],
    "mapped",
    [
      53,
      26376
    ]
  ],
  [
    [
      12997,
      12997
    ],
    "mapped",
    [
      54,
      26376
    ]
  ],
  [
    [
      12998,
      12998
    ],
    "mapped",
    [
      55,
      26376
    ]
  ],
  [
    [
      12999,
      12999
    ],
    "mapped",
    [
      56,
      26376
    ]
  ],
  [
    [
      13e3,
      13e3
    ],
    "mapped",
    [
      57,
      26376
    ]
  ],
  [
    [
      13001,
      13001
    ],
    "mapped",
    [
      49,
      48,
      26376
    ]
  ],
  [
    [
      13002,
      13002
    ],
    "mapped",
    [
      49,
      49,
      26376
    ]
  ],
  [
    [
      13003,
      13003
    ],
    "mapped",
    [
      49,
      50,
      26376
    ]
  ],
  [
    [
      13004,
      13004
    ],
    "mapped",
    [
      104,
      103
    ]
  ],
  [
    [
      13005,
      13005
    ],
    "mapped",
    [
      101,
      114,
      103
    ]
  ],
  [
    [
      13006,
      13006
    ],
    "mapped",
    [
      101,
      118
    ]
  ],
  [
    [
      13007,
      13007
    ],
    "mapped",
    [
      108,
      116,
      100
    ]
  ],
  [
    [
      13008,
      13008
    ],
    "mapped",
    [
      12450
    ]
  ],
  [
    [
      13009,
      13009
    ],
    "mapped",
    [
      12452
    ]
  ],
  [
    [
      13010,
      13010
    ],
    "mapped",
    [
      12454
    ]
  ],
  [
    [
      13011,
      13011
    ],
    "mapped",
    [
      12456
    ]
  ],
  [
    [
      13012,
      13012
    ],
    "mapped",
    [
      12458
    ]
  ],
  [
    [
      13013,
      13013
    ],
    "mapped",
    [
      12459
    ]
  ],
  [
    [
      13014,
      13014
    ],
    "mapped",
    [
      12461
    ]
  ],
  [
    [
      13015,
      13015
    ],
    "mapped",
    [
      12463
    ]
  ],
  [
    [
      13016,
      13016
    ],
    "mapped",
    [
      12465
    ]
  ],
  [
    [
      13017,
      13017
    ],
    "mapped",
    [
      12467
    ]
  ],
  [
    [
      13018,
      13018
    ],
    "mapped",
    [
      12469
    ]
  ],
  [
    [
      13019,
      13019
    ],
    "mapped",
    [
      12471
    ]
  ],
  [
    [
      13020,
      13020
    ],
    "mapped",
    [
      12473
    ]
  ],
  [
    [
      13021,
      13021
    ],
    "mapped",
    [
      12475
    ]
  ],
  [
    [
      13022,
      13022
    ],
    "mapped",
    [
      12477
    ]
  ],
  [
    [
      13023,
      13023
    ],
    "mapped",
    [
      12479
    ]
  ],
  [
    [
      13024,
      13024
    ],
    "mapped",
    [
      12481
    ]
  ],
  [
    [
      13025,
      13025
    ],
    "mapped",
    [
      12484
    ]
  ],
  [
    [
      13026,
      13026
    ],
    "mapped",
    [
      12486
    ]
  ],
  [
    [
      13027,
      13027
    ],
    "mapped",
    [
      12488
    ]
  ],
  [
    [
      13028,
      13028
    ],
    "mapped",
    [
      12490
    ]
  ],
  [
    [
      13029,
      13029
    ],
    "mapped",
    [
      12491
    ]
  ],
  [
    [
      13030,
      13030
    ],
    "mapped",
    [
      12492
    ]
  ],
  [
    [
      13031,
      13031
    ],
    "mapped",
    [
      12493
    ]
  ],
  [
    [
      13032,
      13032
    ],
    "mapped",
    [
      12494
    ]
  ],
  [
    [
      13033,
      13033
    ],
    "mapped",
    [
      12495
    ]
  ],
  [
    [
      13034,
      13034
    ],
    "mapped",
    [
      12498
    ]
  ],
  [
    [
      13035,
      13035
    ],
    "mapped",
    [
      12501
    ]
  ],
  [
    [
      13036,
      13036
    ],
    "mapped",
    [
      12504
    ]
  ],
  [
    [
      13037,
      13037
    ],
    "mapped",
    [
      12507
    ]
  ],
  [
    [
      13038,
      13038
    ],
    "mapped",
    [
      12510
    ]
  ],
  [
    [
      13039,
      13039
    ],
    "mapped",
    [
      12511
    ]
  ],
  [
    [
      13040,
      13040
    ],
    "mapped",
    [
      12512
    ]
  ],
  [
    [
      13041,
      13041
    ],
    "mapped",
    [
      12513
    ]
  ],
  [
    [
      13042,
      13042
    ],
    "mapped",
    [
      12514
    ]
  ],
  [
    [
      13043,
      13043
    ],
    "mapped",
    [
      12516
    ]
  ],
  [
    [
      13044,
      13044
    ],
    "mapped",
    [
      12518
    ]
  ],
  [
    [
      13045,
      13045
    ],
    "mapped",
    [
      12520
    ]
  ],
  [
    [
      13046,
      13046
    ],
    "mapped",
    [
      12521
    ]
  ],
  [
    [
      13047,
      13047
    ],
    "mapped",
    [
      12522
    ]
  ],
  [
    [
      13048,
      13048
    ],
    "mapped",
    [
      12523
    ]
  ],
  [
    [
      13049,
      13049
    ],
    "mapped",
    [
      12524
    ]
  ],
  [
    [
      13050,
      13050
    ],
    "mapped",
    [
      12525
    ]
  ],
  [
    [
      13051,
      13051
    ],
    "mapped",
    [
      12527
    ]
  ],
  [
    [
      13052,
      13052
    ],
    "mapped",
    [
      12528
    ]
  ],
  [
    [
      13053,
      13053
    ],
    "mapped",
    [
      12529
    ]
  ],
  [
    [
      13054,
      13054
    ],
    "mapped",
    [
      12530
    ]
  ],
  [
    [
      13055,
      13055
    ],
    "disallowed"
  ],
  [
    [
      13056,
      13056
    ],
    "mapped",
    [
      12450,
      12497,
      12540,
      12488
    ]
  ],
  [
    [
      13057,
      13057
    ],
    "mapped",
    [
      12450,
      12523,
      12501,
      12449
    ]
  ],
  [
    [
      13058,
      13058
    ],
    "mapped",
    [
      12450,
      12531,
      12506,
      12450
    ]
  ],
  [
    [
      13059,
      13059
    ],
    "mapped",
    [
      12450,
      12540,
      12523
    ]
  ],
  [
    [
      13060,
      13060
    ],
    "mapped",
    [
      12452,
      12491,
      12531,
      12464
    ]
  ],
  [
    [
      13061,
      13061
    ],
    "mapped",
    [
      12452,
      12531,
      12481
    ]
  ],
  [
    [
      13062,
      13062
    ],
    "mapped",
    [
      12454,
      12457,
      12531
    ]
  ],
  [
    [
      13063,
      13063
    ],
    "mapped",
    [
      12456,
      12473,
      12463,
      12540,
      12489
    ]
  ],
  [
    [
      13064,
      13064
    ],
    "mapped",
    [
      12456,
      12540,
      12459,
      12540
    ]
  ],
  [
    [
      13065,
      13065
    ],
    "mapped",
    [
      12458,
      12531,
      12473
    ]
  ],
  [
    [
      13066,
      13066
    ],
    "mapped",
    [
      12458,
      12540,
      12512
    ]
  ],
  [
    [
      13067,
      13067
    ],
    "mapped",
    [
      12459,
      12452,
      12522
    ]
  ],
  [
    [
      13068,
      13068
    ],
    "mapped",
    [
      12459,
      12521,
      12483,
      12488
    ]
  ],
  [
    [
      13069,
      13069
    ],
    "mapped",
    [
      12459,
      12525,
      12522,
      12540
    ]
  ],
  [
    [
      13070,
      13070
    ],
    "mapped",
    [
      12460,
      12525,
      12531
    ]
  ],
  [
    [
      13071,
      13071
    ],
    "mapped",
    [
      12460,
      12531,
      12510
    ]
  ],
  [
    [
      13072,
      13072
    ],
    "mapped",
    [
      12462,
      12460
    ]
  ],
  [
    [
      13073,
      13073
    ],
    "mapped",
    [
      12462,
      12491,
      12540
    ]
  ],
  [
    [
      13074,
      13074
    ],
    "mapped",
    [
      12461,
      12517,
      12522,
      12540
    ]
  ],
  [
    [
      13075,
      13075
    ],
    "mapped",
    [
      12462,
      12523,
      12480,
      12540
    ]
  ],
  [
    [
      13076,
      13076
    ],
    "mapped",
    [
      12461,
      12525
    ]
  ],
  [
    [
      13077,
      13077
    ],
    "mapped",
    [
      12461,
      12525,
      12464,
      12521,
      12512
    ]
  ],
  [
    [
      13078,
      13078
    ],
    "mapped",
    [
      12461,
      12525,
      12513,
      12540,
      12488,
      12523
    ]
  ],
  [
    [
      13079,
      13079
    ],
    "mapped",
    [
      12461,
      12525,
      12527,
      12483,
      12488
    ]
  ],
  [
    [
      13080,
      13080
    ],
    "mapped",
    [
      12464,
      12521,
      12512
    ]
  ],
  [
    [
      13081,
      13081
    ],
    "mapped",
    [
      12464,
      12521,
      12512,
      12488,
      12531
    ]
  ],
  [
    [
      13082,
      13082
    ],
    "mapped",
    [
      12463,
      12523,
      12476,
      12452,
      12525
    ]
  ],
  [
    [
      13083,
      13083
    ],
    "mapped",
    [
      12463,
      12525,
      12540,
      12493
    ]
  ],
  [
    [
      13084,
      13084
    ],
    "mapped",
    [
      12465,
      12540,
      12473
    ]
  ],
  [
    [
      13085,
      13085
    ],
    "mapped",
    [
      12467,
      12523,
      12490
    ]
  ],
  [
    [
      13086,
      13086
    ],
    "mapped",
    [
      12467,
      12540,
      12509
    ]
  ],
  [
    [
      13087,
      13087
    ],
    "mapped",
    [
      12469,
      12452,
      12463,
      12523
    ]
  ],
  [
    [
      13088,
      13088
    ],
    "mapped",
    [
      12469,
      12531,
      12481,
      12540,
      12512
    ]
  ],
  [
    [
      13089,
      13089
    ],
    "mapped",
    [
      12471,
      12522,
      12531,
      12464
    ]
  ],
  [
    [
      13090,
      13090
    ],
    "mapped",
    [
      12475,
      12531,
      12481
    ]
  ],
  [
    [
      13091,
      13091
    ],
    "mapped",
    [
      12475,
      12531,
      12488
    ]
  ],
  [
    [
      13092,
      13092
    ],
    "mapped",
    [
      12480,
      12540,
      12473
    ]
  ],
  [
    [
      13093,
      13093
    ],
    "mapped",
    [
      12487,
      12471
    ]
  ],
  [
    [
      13094,
      13094
    ],
    "mapped",
    [
      12489,
      12523
    ]
  ],
  [
    [
      13095,
      13095
    ],
    "mapped",
    [
      12488,
      12531
    ]
  ],
  [
    [
      13096,
      13096
    ],
    "mapped",
    [
      12490,
      12494
    ]
  ],
  [
    [
      13097,
      13097
    ],
    "mapped",
    [
      12494,
      12483,
      12488
    ]
  ],
  [
    [
      13098,
      13098
    ],
    "mapped",
    [
      12495,
      12452,
      12484
    ]
  ],
  [
    [
      13099,
      13099
    ],
    "mapped",
    [
      12497,
      12540,
      12475,
      12531,
      12488
    ]
  ],
  [
    [
      13100,
      13100
    ],
    "mapped",
    [
      12497,
      12540,
      12484
    ]
  ],
  [
    [
      13101,
      13101
    ],
    "mapped",
    [
      12496,
      12540,
      12524,
      12523
    ]
  ],
  [
    [
      13102,
      13102
    ],
    "mapped",
    [
      12500,
      12450,
      12473,
      12488,
      12523
    ]
  ],
  [
    [
      13103,
      13103
    ],
    "mapped",
    [
      12500,
      12463,
      12523
    ]
  ],
  [
    [
      13104,
      13104
    ],
    "mapped",
    [
      12500,
      12467
    ]
  ],
  [
    [
      13105,
      13105
    ],
    "mapped",
    [
      12499,
      12523
    ]
  ],
  [
    [
      13106,
      13106
    ],
    "mapped",
    [
      12501,
      12449,
      12521,
      12483,
      12489
    ]
  ],
  [
    [
      13107,
      13107
    ],
    "mapped",
    [
      12501,
      12451,
      12540,
      12488
    ]
  ],
  [
    [
      13108,
      13108
    ],
    "mapped",
    [
      12502,
      12483,
      12471,
      12455,
      12523
    ]
  ],
  [
    [
      13109,
      13109
    ],
    "mapped",
    [
      12501,
      12521,
      12531
    ]
  ],
  [
    [
      13110,
      13110
    ],
    "mapped",
    [
      12504,
      12463,
      12479,
      12540,
      12523
    ]
  ],
  [
    [
      13111,
      13111
    ],
    "mapped",
    [
      12506,
      12477
    ]
  ],
  [
    [
      13112,
      13112
    ],
    "mapped",
    [
      12506,
      12491,
      12498
    ]
  ],
  [
    [
      13113,
      13113
    ],
    "mapped",
    [
      12504,
      12523,
      12484
    ]
  ],
  [
    [
      13114,
      13114
    ],
    "mapped",
    [
      12506,
      12531,
      12473
    ]
  ],
  [
    [
      13115,
      13115
    ],
    "mapped",
    [
      12506,
      12540,
      12472
    ]
  ],
  [
    [
      13116,
      13116
    ],
    "mapped",
    [
      12505,
      12540,
      12479
    ]
  ],
  [
    [
      13117,
      13117
    ],
    "mapped",
    [
      12509,
      12452,
      12531,
      12488
    ]
  ],
  [
    [
      13118,
      13118
    ],
    "mapped",
    [
      12508,
      12523,
      12488
    ]
  ],
  [
    [
      13119,
      13119
    ],
    "mapped",
    [
      12507,
      12531
    ]
  ],
  [
    [
      13120,
      13120
    ],
    "mapped",
    [
      12509,
      12531,
      12489
    ]
  ],
  [
    [
      13121,
      13121
    ],
    "mapped",
    [
      12507,
      12540,
      12523
    ]
  ],
  [
    [
      13122,
      13122
    ],
    "mapped",
    [
      12507,
      12540,
      12531
    ]
  ],
  [
    [
      13123,
      13123
    ],
    "mapped",
    [
      12510,
      12452,
      12463,
      12525
    ]
  ],
  [
    [
      13124,
      13124
    ],
    "mapped",
    [
      12510,
      12452,
      12523
    ]
  ],
  [
    [
      13125,
      13125
    ],
    "mapped",
    [
      12510,
      12483,
      12495
    ]
  ],
  [
    [
      13126,
      13126
    ],
    "mapped",
    [
      12510,
      12523,
      12463
    ]
  ],
  [
    [
      13127,
      13127
    ],
    "mapped",
    [
      12510,
      12531,
      12471,
      12519,
      12531
    ]
  ],
  [
    [
      13128,
      13128
    ],
    "mapped",
    [
      12511,
      12463,
      12525,
      12531
    ]
  ],
  [
    [
      13129,
      13129
    ],
    "mapped",
    [
      12511,
      12522
    ]
  ],
  [
    [
      13130,
      13130
    ],
    "mapped",
    [
      12511,
      12522,
      12496,
      12540,
      12523
    ]
  ],
  [
    [
      13131,
      13131
    ],
    "mapped",
    [
      12513,
      12460
    ]
  ],
  [
    [
      13132,
      13132
    ],
    "mapped",
    [
      12513,
      12460,
      12488,
      12531
    ]
  ],
  [
    [
      13133,
      13133
    ],
    "mapped",
    [
      12513,
      12540,
      12488,
      12523
    ]
  ],
  [
    [
      13134,
      13134
    ],
    "mapped",
    [
      12516,
      12540,
      12489
    ]
  ],
  [
    [
      13135,
      13135
    ],
    "mapped",
    [
      12516,
      12540,
      12523
    ]
  ],
  [
    [
      13136,
      13136
    ],
    "mapped",
    [
      12518,
      12450,
      12531
    ]
  ],
  [
    [
      13137,
      13137
    ],
    "mapped",
    [
      12522,
      12483,
      12488,
      12523
    ]
  ],
  [
    [
      13138,
      13138
    ],
    "mapped",
    [
      12522,
      12521
    ]
  ],
  [
    [
      13139,
      13139
    ],
    "mapped",
    [
      12523,
      12500,
      12540
    ]
  ],
  [
    [
      13140,
      13140
    ],
    "mapped",
    [
      12523,
      12540,
      12502,
      12523
    ]
  ],
  [
    [
      13141,
      13141
    ],
    "mapped",
    [
      12524,
      12512
    ]
  ],
  [
    [
      13142,
      13142
    ],
    "mapped",
    [
      12524,
      12531,
      12488,
      12466,
      12531
    ]
  ],
  [
    [
      13143,
      13143
    ],
    "mapped",
    [
      12527,
      12483,
      12488
    ]
  ],
  [
    [
      13144,
      13144
    ],
    "mapped",
    [
      48,
      28857
    ]
  ],
  [
    [
      13145,
      13145
    ],
    "mapped",
    [
      49,
      28857
    ]
  ],
  [
    [
      13146,
      13146
    ],
    "mapped",
    [
      50,
      28857
    ]
  ],
  [
    [
      13147,
      13147
    ],
    "mapped",
    [
      51,
      28857
    ]
  ],
  [
    [
      13148,
      13148
    ],
    "mapped",
    [
      52,
      28857
    ]
  ],
  [
    [
      13149,
      13149
    ],
    "mapped",
    [
      53,
      28857
    ]
  ],
  [
    [
      13150,
      13150
    ],
    "mapped",
    [
      54,
      28857
    ]
  ],
  [
    [
      13151,
      13151
    ],
    "mapped",
    [
      55,
      28857
    ]
  ],
  [
    [
      13152,
      13152
    ],
    "mapped",
    [
      56,
      28857
    ]
  ],
  [
    [
      13153,
      13153
    ],
    "mapped",
    [
      57,
      28857
    ]
  ],
  [
    [
      13154,
      13154
    ],
    "mapped",
    [
      49,
      48,
      28857
    ]
  ],
  [
    [
      13155,
      13155
    ],
    "mapped",
    [
      49,
      49,
      28857
    ]
  ],
  [
    [
      13156,
      13156
    ],
    "mapped",
    [
      49,
      50,
      28857
    ]
  ],
  [
    [
      13157,
      13157
    ],
    "mapped",
    [
      49,
      51,
      28857
    ]
  ],
  [
    [
      13158,
      13158
    ],
    "mapped",
    [
      49,
      52,
      28857
    ]
  ],
  [
    [
      13159,
      13159
    ],
    "mapped",
    [
      49,
      53,
      28857
    ]
  ],
  [
    [
      13160,
      13160
    ],
    "mapped",
    [
      49,
      54,
      28857
    ]
  ],
  [
    [
      13161,
      13161
    ],
    "mapped",
    [
      49,
      55,
      28857
    ]
  ],
  [
    [
      13162,
      13162
    ],
    "mapped",
    [
      49,
      56,
      28857
    ]
  ],
  [
    [
      13163,
      13163
    ],
    "mapped",
    [
      49,
      57,
      28857
    ]
  ],
  [
    [
      13164,
      13164
    ],
    "mapped",
    [
      50,
      48,
      28857
    ]
  ],
  [
    [
      13165,
      13165
    ],
    "mapped",
    [
      50,
      49,
      28857
    ]
  ],
  [
    [
      13166,
      13166
    ],
    "mapped",
    [
      50,
      50,
      28857
    ]
  ],
  [
    [
      13167,
      13167
    ],
    "mapped",
    [
      50,
      51,
      28857
    ]
  ],
  [
    [
      13168,
      13168
    ],
    "mapped",
    [
      50,
      52,
      28857
    ]
  ],
  [
    [
      13169,
      13169
    ],
    "mapped",
    [
      104,
      112,
      97
    ]
  ],
  [
    [
      13170,
      13170
    ],
    "mapped",
    [
      100,
      97
    ]
  ],
  [
    [
      13171,
      13171
    ],
    "mapped",
    [
      97,
      117
    ]
  ],
  [
    [
      13172,
      13172
    ],
    "mapped",
    [
      98,
      97,
      114
    ]
  ],
  [
    [
      13173,
      13173
    ],
    "mapped",
    [
      111,
      118
    ]
  ],
  [
    [
      13174,
      13174
    ],
    "mapped",
    [
      112,
      99
    ]
  ],
  [
    [
      13175,
      13175
    ],
    "mapped",
    [
      100,
      109
    ]
  ],
  [
    [
      13176,
      13176
    ],
    "mapped",
    [
      100,
      109,
      50
    ]
  ],
  [
    [
      13177,
      13177
    ],
    "mapped",
    [
      100,
      109,
      51
    ]
  ],
  [
    [
      13178,
      13178
    ],
    "mapped",
    [
      105,
      117
    ]
  ],
  [
    [
      13179,
      13179
    ],
    "mapped",
    [
      24179,
      25104
    ]
  ],
  [
    [
      13180,
      13180
    ],
    "mapped",
    [
      26157,
      21644
    ]
  ],
  [
    [
      13181,
      13181
    ],
    "mapped",
    [
      22823,
      27491
    ]
  ],
  [
    [
      13182,
      13182
    ],
    "mapped",
    [
      26126,
      27835
    ]
  ],
  [
    [
      13183,
      13183
    ],
    "mapped",
    [
      26666,
      24335,
      20250,
      31038
    ]
  ],
  [
    [
      13184,
      13184
    ],
    "mapped",
    [
      112,
      97
    ]
  ],
  [
    [
      13185,
      13185
    ],
    "mapped",
    [
      110,
      97
    ]
  ],
  [
    [
      13186,
      13186
    ],
    "mapped",
    [
      956,
      97
    ]
  ],
  [
    [
      13187,
      13187
    ],
    "mapped",
    [
      109,
      97
    ]
  ],
  [
    [
      13188,
      13188
    ],
    "mapped",
    [
      107,
      97
    ]
  ],
  [
    [
      13189,
      13189
    ],
    "mapped",
    [
      107,
      98
    ]
  ],
  [
    [
      13190,
      13190
    ],
    "mapped",
    [
      109,
      98
    ]
  ],
  [
    [
      13191,
      13191
    ],
    "mapped",
    [
      103,
      98
    ]
  ],
  [
    [
      13192,
      13192
    ],
    "mapped",
    [
      99,
      97,
      108
    ]
  ],
  [
    [
      13193,
      13193
    ],
    "mapped",
    [
      107,
      99,
      97,
      108
    ]
  ],
  [
    [
      13194,
      13194
    ],
    "mapped",
    [
      112,
      102
    ]
  ],
  [
    [
      13195,
      13195
    ],
    "mapped",
    [
      110,
      102
    ]
  ],
  [
    [
      13196,
      13196
    ],
    "mapped",
    [
      956,
      102
    ]
  ],
  [
    [
      13197,
      13197
    ],
    "mapped",
    [
      956,
      103
    ]
  ],
  [
    [
      13198,
      13198
    ],
    "mapped",
    [
      109,
      103
    ]
  ],
  [
    [
      13199,
      13199
    ],
    "mapped",
    [
      107,
      103
    ]
  ],
  [
    [
      13200,
      13200
    ],
    "mapped",
    [
      104,
      122
    ]
  ],
  [
    [
      13201,
      13201
    ],
    "mapped",
    [
      107,
      104,
      122
    ]
  ],
  [
    [
      13202,
      13202
    ],
    "mapped",
    [
      109,
      104,
      122
    ]
  ],
  [
    [
      13203,
      13203
    ],
    "mapped",
    [
      103,
      104,
      122
    ]
  ],
  [
    [
      13204,
      13204
    ],
    "mapped",
    [
      116,
      104,
      122
    ]
  ],
  [
    [
      13205,
      13205
    ],
    "mapped",
    [
      956,
      108
    ]
  ],
  [
    [
      13206,
      13206
    ],
    "mapped",
    [
      109,
      108
    ]
  ],
  [
    [
      13207,
      13207
    ],
    "mapped",
    [
      100,
      108
    ]
  ],
  [
    [
      13208,
      13208
    ],
    "mapped",
    [
      107,
      108
    ]
  ],
  [
    [
      13209,
      13209
    ],
    "mapped",
    [
      102,
      109
    ]
  ],
  [
    [
      13210,
      13210
    ],
    "mapped",
    [
      110,
      109
    ]
  ],
  [
    [
      13211,
      13211
    ],
    "mapped",
    [
      956,
      109
    ]
  ],
  [
    [
      13212,
      13212
    ],
    "mapped",
    [
      109,
      109
    ]
  ],
  [
    [
      13213,
      13213
    ],
    "mapped",
    [
      99,
      109
    ]
  ],
  [
    [
      13214,
      13214
    ],
    "mapped",
    [
      107,
      109
    ]
  ],
  [
    [
      13215,
      13215
    ],
    "mapped",
    [
      109,
      109,
      50
    ]
  ],
  [
    [
      13216,
      13216
    ],
    "mapped",
    [
      99,
      109,
      50
    ]
  ],
  [
    [
      13217,
      13217
    ],
    "mapped",
    [
      109,
      50
    ]
  ],
  [
    [
      13218,
      13218
    ],
    "mapped",
    [
      107,
      109,
      50
    ]
  ],
  [
    [
      13219,
      13219
    ],
    "mapped",
    [
      109,
      109,
      51
    ]
  ],
  [
    [
      13220,
      13220
    ],
    "mapped",
    [
      99,
      109,
      51
    ]
  ],
  [
    [
      13221,
      13221
    ],
    "mapped",
    [
      109,
      51
    ]
  ],
  [
    [
      13222,
      13222
    ],
    "mapped",
    [
      107,
      109,
      51
    ]
  ],
  [
    [
      13223,
      13223
    ],
    "mapped",
    [
      109,
      8725,
      115
    ]
  ],
  [
    [
      13224,
      13224
    ],
    "mapped",
    [
      109,
      8725,
      115,
      50
    ]
  ],
  [
    [
      13225,
      13225
    ],
    "mapped",
    [
      112,
      97
    ]
  ],
  [
    [
      13226,
      13226
    ],
    "mapped",
    [
      107,
      112,
      97
    ]
  ],
  [
    [
      13227,
      13227
    ],
    "mapped",
    [
      109,
      112,
      97
    ]
  ],
  [
    [
      13228,
      13228
    ],
    "mapped",
    [
      103,
      112,
      97
    ]
  ],
  [
    [
      13229,
      13229
    ],
    "mapped",
    [
      114,
      97,
      100
    ]
  ],
  [
    [
      13230,
      13230
    ],
    "mapped",
    [
      114,
      97,
      100,
      8725,
      115
    ]
  ],
  [
    [
      13231,
      13231
    ],
    "mapped",
    [
      114,
      97,
      100,
      8725,
      115,
      50
    ]
  ],
  [
    [
      13232,
      13232
    ],
    "mapped",
    [
      112,
      115
    ]
  ],
  [
    [
      13233,
      13233
    ],
    "mapped",
    [
      110,
      115
    ]
  ],
  [
    [
      13234,
      13234
    ],
    "mapped",
    [
      956,
      115
    ]
  ],
  [
    [
      13235,
      13235
    ],
    "mapped",
    [
      109,
      115
    ]
  ],
  [
    [
      13236,
      13236
    ],
    "mapped",
    [
      112,
      118
    ]
  ],
  [
    [
      13237,
      13237
    ],
    "mapped",
    [
      110,
      118
    ]
  ],
  [
    [
      13238,
      13238
    ],
    "mapped",
    [
      956,
      118
    ]
  ],
  [
    [
      13239,
      13239
    ],
    "mapped",
    [
      109,
      118
    ]
  ],
  [
    [
      13240,
      13240
    ],
    "mapped",
    [
      107,
      118
    ]
  ],
  [
    [
      13241,
      13241
    ],
    "mapped",
    [
      109,
      118
    ]
  ],
  [
    [
      13242,
      13242
    ],
    "mapped",
    [
      112,
      119
    ]
  ],
  [
    [
      13243,
      13243
    ],
    "mapped",
    [
      110,
      119
    ]
  ],
  [
    [
      13244,
      13244
    ],
    "mapped",
    [
      956,
      119
    ]
  ],
  [
    [
      13245,
      13245
    ],
    "mapped",
    [
      109,
      119
    ]
  ],
  [
    [
      13246,
      13246
    ],
    "mapped",
    [
      107,
      119
    ]
  ],
  [
    [
      13247,
      13247
    ],
    "mapped",
    [
      109,
      119
    ]
  ],
  [
    [
      13248,
      13248
    ],
    "mapped",
    [
      107,
      969
    ]
  ],
  [
    [
      13249,
      13249
    ],
    "mapped",
    [
      109,
      969
    ]
  ],
  [
    [
      13250,
      13250
    ],
    "disallowed"
  ],
  [
    [
      13251,
      13251
    ],
    "mapped",
    [
      98,
      113
    ]
  ],
  [
    [
      13252,
      13252
    ],
    "mapped",
    [
      99,
      99
    ]
  ],
  [
    [
      13253,
      13253
    ],
    "mapped",
    [
      99,
      100
    ]
  ],
  [
    [
      13254,
      13254
    ],
    "mapped",
    [
      99,
      8725,
      107,
      103
    ]
  ],
  [
    [
      13255,
      13255
    ],
    "disallowed"
  ],
  [
    [
      13256,
      13256
    ],
    "mapped",
    [
      100,
      98
    ]
  ],
  [
    [
      13257,
      13257
    ],
    "mapped",
    [
      103,
      121
    ]
  ],
  [
    [
      13258,
      13258
    ],
    "mapped",
    [
      104,
      97
    ]
  ],
  [
    [
      13259,
      13259
    ],
    "mapped",
    [
      104,
      112
    ]
  ],
  [
    [
      13260,
      13260
    ],
    "mapped",
    [
      105,
      110
    ]
  ],
  [
    [
      13261,
      13261
    ],
    "mapped",
    [
      107,
      107
    ]
  ],
  [
    [
      13262,
      13262
    ],
    "mapped",
    [
      107,
      109
    ]
  ],
  [
    [
      13263,
      13263
    ],
    "mapped",
    [
      107,
      116
    ]
  ],
  [
    [
      13264,
      13264
    ],
    "mapped",
    [
      108,
      109
    ]
  ],
  [
    [
      13265,
      13265
    ],
    "mapped",
    [
      108,
      110
    ]
  ],
  [
    [
      13266,
      13266
    ],
    "mapped",
    [
      108,
      111,
      103
    ]
  ],
  [
    [
      13267,
      13267
    ],
    "mapped",
    [
      108,
      120
    ]
  ],
  [
    [
      13268,
      13268
    ],
    "mapped",
    [
      109,
      98
    ]
  ],
  [
    [
      13269,
      13269
    ],
    "mapped",
    [
      109,
      105,
      108
    ]
  ],
  [
    [
      13270,
      13270
    ],
    "mapped",
    [
      109,
      111,
      108
    ]
  ],
  [
    [
      13271,
      13271
    ],
    "mapped",
    [
      112,
      104
    ]
  ],
  [
    [
      13272,
      13272
    ],
    "disallowed"
  ],
  [
    [
      13273,
      13273
    ],
    "mapped",
    [
      112,
      112,
      109
    ]
  ],
  [
    [
      13274,
      13274
    ],
    "mapped",
    [
      112,
      114
    ]
  ],
  [
    [
      13275,
      13275
    ],
    "mapped",
    [
      115,
      114
    ]
  ],
  [
    [
      13276,
      13276
    ],
    "mapped",
    [
      115,
      118
    ]
  ],
  [
    [
      13277,
      13277
    ],
    "mapped",
    [
      119,
      98
    ]
  ],
  [
    [
      13278,
      13278
    ],
    "mapped",
    [
      118,
      8725,
      109
    ]
  ],
  [
    [
      13279,
      13279
    ],
    "mapped",
    [
      97,
      8725,
      109
    ]
  ],
  [
    [
      13280,
      13280
    ],
    "mapped",
    [
      49,
      26085
    ]
  ],
  [
    [
      13281,
      13281
    ],
    "mapped",
    [
      50,
      26085
    ]
  ],
  [
    [
      13282,
      13282
    ],
    "mapped",
    [
      51,
      26085
    ]
  ],
  [
    [
      13283,
      13283
    ],
    "mapped",
    [
      52,
      26085
    ]
  ],
  [
    [
      13284,
      13284
    ],
    "mapped",
    [
      53,
      26085
    ]
  ],
  [
    [
      13285,
      13285
    ],
    "mapped",
    [
      54,
      26085
    ]
  ],
  [
    [
      13286,
      13286
    ],
    "mapped",
    [
      55,
      26085
    ]
  ],
  [
    [
      13287,
      13287
    ],
    "mapped",
    [
      56,
      26085
    ]
  ],
  [
    [
      13288,
      13288
    ],
    "mapped",
    [
      57,
      26085
    ]
  ],
  [
    [
      13289,
      13289
    ],
    "mapped",
    [
      49,
      48,
      26085
    ]
  ],
  [
    [
      13290,
      13290
    ],
    "mapped",
    [
      49,
      49,
      26085
    ]
  ],
  [
    [
      13291,
      13291
    ],
    "mapped",
    [
      49,
      50,
      26085
    ]
  ],
  [
    [
      13292,
      13292
    ],
    "mapped",
    [
      49,
      51,
      26085
    ]
  ],
  [
    [
      13293,
      13293
    ],
    "mapped",
    [
      49,
      52,
      26085
    ]
  ],
  [
    [
      13294,
      13294
    ],
    "mapped",
    [
      49,
      53,
      26085
    ]
  ],
  [
    [
      13295,
      13295
    ],
    "mapped",
    [
      49,
      54,
      26085
    ]
  ],
  [
    [
      13296,
      13296
    ],
    "mapped",
    [
      49,
      55,
      26085
    ]
  ],
  [
    [
      13297,
      13297
    ],
    "mapped",
    [
      49,
      56,
      26085
    ]
  ],
  [
    [
      13298,
      13298
    ],
    "mapped",
    [
      49,
      57,
      26085
    ]
  ],
  [
    [
      13299,
      13299
    ],
    "mapped",
    [
      50,
      48,
      26085
    ]
  ],
  [
    [
      13300,
      13300
    ],
    "mapped",
    [
      50,
      49,
      26085
    ]
  ],
  [
    [
      13301,
      13301
    ],
    "mapped",
    [
      50,
      50,
      26085
    ]
  ],
  [
    [
      13302,
      13302
    ],
    "mapped",
    [
      50,
      51,
      26085
    ]
  ],
  [
    [
      13303,
      13303
    ],
    "mapped",
    [
      50,
      52,
      26085
    ]
  ],
  [
    [
      13304,
      13304
    ],
    "mapped",
    [
      50,
      53,
      26085
    ]
  ],
  [
    [
      13305,
      13305
    ],
    "mapped",
    [
      50,
      54,
      26085
    ]
  ],
  [
    [
      13306,
      13306
    ],
    "mapped",
    [
      50,
      55,
      26085
    ]
  ],
  [
    [
      13307,
      13307
    ],
    "mapped",
    [
      50,
      56,
      26085
    ]
  ],
  [
    [
      13308,
      13308
    ],
    "mapped",
    [
      50,
      57,
      26085
    ]
  ],
  [
    [
      13309,
      13309
    ],
    "mapped",
    [
      51,
      48,
      26085
    ]
  ],
  [
    [
      13310,
      13310
    ],
    "mapped",
    [
      51,
      49,
      26085
    ]
  ],
  [
    [
      13311,
      13311
    ],
    "mapped",
    [
      103,
      97,
      108
    ]
  ],
  [
    [
      13312,
      19893
    ],
    "valid"
  ],
  [
    [
      19894,
      19903
    ],
    "disallowed"
  ],
  [
    [
      19904,
      19967
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      19968,
      40869
    ],
    "valid"
  ],
  [
    [
      40870,
      40891
    ],
    "valid"
  ],
  [
    [
      40892,
      40899
    ],
    "valid"
  ],
  [
    [
      40900,
      40907
    ],
    "valid"
  ],
  [
    [
      40908,
      40908
    ],
    "valid"
  ],
  [
    [
      40909,
      40917
    ],
    "valid"
  ],
  [
    [
      40918,
      40959
    ],
    "disallowed"
  ],
  [
    [
      40960,
      42124
    ],
    "valid"
  ],
  [
    [
      42125,
      42127
    ],
    "disallowed"
  ],
  [
    [
      42128,
      42145
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42146,
      42147
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42148,
      42163
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42164,
      42164
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42165,
      42176
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42177,
      42177
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42178,
      42180
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42181,
      42181
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42182,
      42182
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42183,
      42191
    ],
    "disallowed"
  ],
  [
    [
      42192,
      42237
    ],
    "valid"
  ],
  [
    [
      42238,
      42239
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42240,
      42508
    ],
    "valid"
  ],
  [
    [
      42509,
      42511
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42512,
      42539
    ],
    "valid"
  ],
  [
    [
      42540,
      42559
    ],
    "disallowed"
  ],
  [
    [
      42560,
      42560
    ],
    "mapped",
    [
      42561
    ]
  ],
  [
    [
      42561,
      42561
    ],
    "valid"
  ],
  [
    [
      42562,
      42562
    ],
    "mapped",
    [
      42563
    ]
  ],
  [
    [
      42563,
      42563
    ],
    "valid"
  ],
  [
    [
      42564,
      42564
    ],
    "mapped",
    [
      42565
    ]
  ],
  [
    [
      42565,
      42565
    ],
    "valid"
  ],
  [
    [
      42566,
      42566
    ],
    "mapped",
    [
      42567
    ]
  ],
  [
    [
      42567,
      42567
    ],
    "valid"
  ],
  [
    [
      42568,
      42568
    ],
    "mapped",
    [
      42569
    ]
  ],
  [
    [
      42569,
      42569
    ],
    "valid"
  ],
  [
    [
      42570,
      42570
    ],
    "mapped",
    [
      42571
    ]
  ],
  [
    [
      42571,
      42571
    ],
    "valid"
  ],
  [
    [
      42572,
      42572
    ],
    "mapped",
    [
      42573
    ]
  ],
  [
    [
      42573,
      42573
    ],
    "valid"
  ],
  [
    [
      42574,
      42574
    ],
    "mapped",
    [
      42575
    ]
  ],
  [
    [
      42575,
      42575
    ],
    "valid"
  ],
  [
    [
      42576,
      42576
    ],
    "mapped",
    [
      42577
    ]
  ],
  [
    [
      42577,
      42577
    ],
    "valid"
  ],
  [
    [
      42578,
      42578
    ],
    "mapped",
    [
      42579
    ]
  ],
  [
    [
      42579,
      42579
    ],
    "valid"
  ],
  [
    [
      42580,
      42580
    ],
    "mapped",
    [
      42581
    ]
  ],
  [
    [
      42581,
      42581
    ],
    "valid"
  ],
  [
    [
      42582,
      42582
    ],
    "mapped",
    [
      42583
    ]
  ],
  [
    [
      42583,
      42583
    ],
    "valid"
  ],
  [
    [
      42584,
      42584
    ],
    "mapped",
    [
      42585
    ]
  ],
  [
    [
      42585,
      42585
    ],
    "valid"
  ],
  [
    [
      42586,
      42586
    ],
    "mapped",
    [
      42587
    ]
  ],
  [
    [
      42587,
      42587
    ],
    "valid"
  ],
  [
    [
      42588,
      42588
    ],
    "mapped",
    [
      42589
    ]
  ],
  [
    [
      42589,
      42589
    ],
    "valid"
  ],
  [
    [
      42590,
      42590
    ],
    "mapped",
    [
      42591
    ]
  ],
  [
    [
      42591,
      42591
    ],
    "valid"
  ],
  [
    [
      42592,
      42592
    ],
    "mapped",
    [
      42593
    ]
  ],
  [
    [
      42593,
      42593
    ],
    "valid"
  ],
  [
    [
      42594,
      42594
    ],
    "mapped",
    [
      42595
    ]
  ],
  [
    [
      42595,
      42595
    ],
    "valid"
  ],
  [
    [
      42596,
      42596
    ],
    "mapped",
    [
      42597
    ]
  ],
  [
    [
      42597,
      42597
    ],
    "valid"
  ],
  [
    [
      42598,
      42598
    ],
    "mapped",
    [
      42599
    ]
  ],
  [
    [
      42599,
      42599
    ],
    "valid"
  ],
  [
    [
      42600,
      42600
    ],
    "mapped",
    [
      42601
    ]
  ],
  [
    [
      42601,
      42601
    ],
    "valid"
  ],
  [
    [
      42602,
      42602
    ],
    "mapped",
    [
      42603
    ]
  ],
  [
    [
      42603,
      42603
    ],
    "valid"
  ],
  [
    [
      42604,
      42604
    ],
    "mapped",
    [
      42605
    ]
  ],
  [
    [
      42605,
      42607
    ],
    "valid"
  ],
  [
    [
      42608,
      42611
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42612,
      42619
    ],
    "valid"
  ],
  [
    [
      42620,
      42621
    ],
    "valid"
  ],
  [
    [
      42622,
      42622
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42623,
      42623
    ],
    "valid"
  ],
  [
    [
      42624,
      42624
    ],
    "mapped",
    [
      42625
    ]
  ],
  [
    [
      42625,
      42625
    ],
    "valid"
  ],
  [
    [
      42626,
      42626
    ],
    "mapped",
    [
      42627
    ]
  ],
  [
    [
      42627,
      42627
    ],
    "valid"
  ],
  [
    [
      42628,
      42628
    ],
    "mapped",
    [
      42629
    ]
  ],
  [
    [
      42629,
      42629
    ],
    "valid"
  ],
  [
    [
      42630,
      42630
    ],
    "mapped",
    [
      42631
    ]
  ],
  [
    [
      42631,
      42631
    ],
    "valid"
  ],
  [
    [
      42632,
      42632
    ],
    "mapped",
    [
      42633
    ]
  ],
  [
    [
      42633,
      42633
    ],
    "valid"
  ],
  [
    [
      42634,
      42634
    ],
    "mapped",
    [
      42635
    ]
  ],
  [
    [
      42635,
      42635
    ],
    "valid"
  ],
  [
    [
      42636,
      42636
    ],
    "mapped",
    [
      42637
    ]
  ],
  [
    [
      42637,
      42637
    ],
    "valid"
  ],
  [
    [
      42638,
      42638
    ],
    "mapped",
    [
      42639
    ]
  ],
  [
    [
      42639,
      42639
    ],
    "valid"
  ],
  [
    [
      42640,
      42640
    ],
    "mapped",
    [
      42641
    ]
  ],
  [
    [
      42641,
      42641
    ],
    "valid"
  ],
  [
    [
      42642,
      42642
    ],
    "mapped",
    [
      42643
    ]
  ],
  [
    [
      42643,
      42643
    ],
    "valid"
  ],
  [
    [
      42644,
      42644
    ],
    "mapped",
    [
      42645
    ]
  ],
  [
    [
      42645,
      42645
    ],
    "valid"
  ],
  [
    [
      42646,
      42646
    ],
    "mapped",
    [
      42647
    ]
  ],
  [
    [
      42647,
      42647
    ],
    "valid"
  ],
  [
    [
      42648,
      42648
    ],
    "mapped",
    [
      42649
    ]
  ],
  [
    [
      42649,
      42649
    ],
    "valid"
  ],
  [
    [
      42650,
      42650
    ],
    "mapped",
    [
      42651
    ]
  ],
  [
    [
      42651,
      42651
    ],
    "valid"
  ],
  [
    [
      42652,
      42652
    ],
    "mapped",
    [
      1098
    ]
  ],
  [
    [
      42653,
      42653
    ],
    "mapped",
    [
      1100
    ]
  ],
  [
    [
      42654,
      42654
    ],
    "valid"
  ],
  [
    [
      42655,
      42655
    ],
    "valid"
  ],
  [
    [
      42656,
      42725
    ],
    "valid"
  ],
  [
    [
      42726,
      42735
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42736,
      42737
    ],
    "valid"
  ],
  [
    [
      42738,
      42743
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42744,
      42751
    ],
    "disallowed"
  ],
  [
    [
      42752,
      42774
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42775,
      42778
    ],
    "valid"
  ],
  [
    [
      42779,
      42783
    ],
    "valid"
  ],
  [
    [
      42784,
      42785
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42786,
      42786
    ],
    "mapped",
    [
      42787
    ]
  ],
  [
    [
      42787,
      42787
    ],
    "valid"
  ],
  [
    [
      42788,
      42788
    ],
    "mapped",
    [
      42789
    ]
  ],
  [
    [
      42789,
      42789
    ],
    "valid"
  ],
  [
    [
      42790,
      42790
    ],
    "mapped",
    [
      42791
    ]
  ],
  [
    [
      42791,
      42791
    ],
    "valid"
  ],
  [
    [
      42792,
      42792
    ],
    "mapped",
    [
      42793
    ]
  ],
  [
    [
      42793,
      42793
    ],
    "valid"
  ],
  [
    [
      42794,
      42794
    ],
    "mapped",
    [
      42795
    ]
  ],
  [
    [
      42795,
      42795
    ],
    "valid"
  ],
  [
    [
      42796,
      42796
    ],
    "mapped",
    [
      42797
    ]
  ],
  [
    [
      42797,
      42797
    ],
    "valid"
  ],
  [
    [
      42798,
      42798
    ],
    "mapped",
    [
      42799
    ]
  ],
  [
    [
      42799,
      42801
    ],
    "valid"
  ],
  [
    [
      42802,
      42802
    ],
    "mapped",
    [
      42803
    ]
  ],
  [
    [
      42803,
      42803
    ],
    "valid"
  ],
  [
    [
      42804,
      42804
    ],
    "mapped",
    [
      42805
    ]
  ],
  [
    [
      42805,
      42805
    ],
    "valid"
  ],
  [
    [
      42806,
      42806
    ],
    "mapped",
    [
      42807
    ]
  ],
  [
    [
      42807,
      42807
    ],
    "valid"
  ],
  [
    [
      42808,
      42808
    ],
    "mapped",
    [
      42809
    ]
  ],
  [
    [
      42809,
      42809
    ],
    "valid"
  ],
  [
    [
      42810,
      42810
    ],
    "mapped",
    [
      42811
    ]
  ],
  [
    [
      42811,
      42811
    ],
    "valid"
  ],
  [
    [
      42812,
      42812
    ],
    "mapped",
    [
      42813
    ]
  ],
  [
    [
      42813,
      42813
    ],
    "valid"
  ],
  [
    [
      42814,
      42814
    ],
    "mapped",
    [
      42815
    ]
  ],
  [
    [
      42815,
      42815
    ],
    "valid"
  ],
  [
    [
      42816,
      42816
    ],
    "mapped",
    [
      42817
    ]
  ],
  [
    [
      42817,
      42817
    ],
    "valid"
  ],
  [
    [
      42818,
      42818
    ],
    "mapped",
    [
      42819
    ]
  ],
  [
    [
      42819,
      42819
    ],
    "valid"
  ],
  [
    [
      42820,
      42820
    ],
    "mapped",
    [
      42821
    ]
  ],
  [
    [
      42821,
      42821
    ],
    "valid"
  ],
  [
    [
      42822,
      42822
    ],
    "mapped",
    [
      42823
    ]
  ],
  [
    [
      42823,
      42823
    ],
    "valid"
  ],
  [
    [
      42824,
      42824
    ],
    "mapped",
    [
      42825
    ]
  ],
  [
    [
      42825,
      42825
    ],
    "valid"
  ],
  [
    [
      42826,
      42826
    ],
    "mapped",
    [
      42827
    ]
  ],
  [
    [
      42827,
      42827
    ],
    "valid"
  ],
  [
    [
      42828,
      42828
    ],
    "mapped",
    [
      42829
    ]
  ],
  [
    [
      42829,
      42829
    ],
    "valid"
  ],
  [
    [
      42830,
      42830
    ],
    "mapped",
    [
      42831
    ]
  ],
  [
    [
      42831,
      42831
    ],
    "valid"
  ],
  [
    [
      42832,
      42832
    ],
    "mapped",
    [
      42833
    ]
  ],
  [
    [
      42833,
      42833
    ],
    "valid"
  ],
  [
    [
      42834,
      42834
    ],
    "mapped",
    [
      42835
    ]
  ],
  [
    [
      42835,
      42835
    ],
    "valid"
  ],
  [
    [
      42836,
      42836
    ],
    "mapped",
    [
      42837
    ]
  ],
  [
    [
      42837,
      42837
    ],
    "valid"
  ],
  [
    [
      42838,
      42838
    ],
    "mapped",
    [
      42839
    ]
  ],
  [
    [
      42839,
      42839
    ],
    "valid"
  ],
  [
    [
      42840,
      42840
    ],
    "mapped",
    [
      42841
    ]
  ],
  [
    [
      42841,
      42841
    ],
    "valid"
  ],
  [
    [
      42842,
      42842
    ],
    "mapped",
    [
      42843
    ]
  ],
  [
    [
      42843,
      42843
    ],
    "valid"
  ],
  [
    [
      42844,
      42844
    ],
    "mapped",
    [
      42845
    ]
  ],
  [
    [
      42845,
      42845
    ],
    "valid"
  ],
  [
    [
      42846,
      42846
    ],
    "mapped",
    [
      42847
    ]
  ],
  [
    [
      42847,
      42847
    ],
    "valid"
  ],
  [
    [
      42848,
      42848
    ],
    "mapped",
    [
      42849
    ]
  ],
  [
    [
      42849,
      42849
    ],
    "valid"
  ],
  [
    [
      42850,
      42850
    ],
    "mapped",
    [
      42851
    ]
  ],
  [
    [
      42851,
      42851
    ],
    "valid"
  ],
  [
    [
      42852,
      42852
    ],
    "mapped",
    [
      42853
    ]
  ],
  [
    [
      42853,
      42853
    ],
    "valid"
  ],
  [
    [
      42854,
      42854
    ],
    "mapped",
    [
      42855
    ]
  ],
  [
    [
      42855,
      42855
    ],
    "valid"
  ],
  [
    [
      42856,
      42856
    ],
    "mapped",
    [
      42857
    ]
  ],
  [
    [
      42857,
      42857
    ],
    "valid"
  ],
  [
    [
      42858,
      42858
    ],
    "mapped",
    [
      42859
    ]
  ],
  [
    [
      42859,
      42859
    ],
    "valid"
  ],
  [
    [
      42860,
      42860
    ],
    "mapped",
    [
      42861
    ]
  ],
  [
    [
      42861,
      42861
    ],
    "valid"
  ],
  [
    [
      42862,
      42862
    ],
    "mapped",
    [
      42863
    ]
  ],
  [
    [
      42863,
      42863
    ],
    "valid"
  ],
  [
    [
      42864,
      42864
    ],
    "mapped",
    [
      42863
    ]
  ],
  [
    [
      42865,
      42872
    ],
    "valid"
  ],
  [
    [
      42873,
      42873
    ],
    "mapped",
    [
      42874
    ]
  ],
  [
    [
      42874,
      42874
    ],
    "valid"
  ],
  [
    [
      42875,
      42875
    ],
    "mapped",
    [
      42876
    ]
  ],
  [
    [
      42876,
      42876
    ],
    "valid"
  ],
  [
    [
      42877,
      42877
    ],
    "mapped",
    [
      7545
    ]
  ],
  [
    [
      42878,
      42878
    ],
    "mapped",
    [
      42879
    ]
  ],
  [
    [
      42879,
      42879
    ],
    "valid"
  ],
  [
    [
      42880,
      42880
    ],
    "mapped",
    [
      42881
    ]
  ],
  [
    [
      42881,
      42881
    ],
    "valid"
  ],
  [
    [
      42882,
      42882
    ],
    "mapped",
    [
      42883
    ]
  ],
  [
    [
      42883,
      42883
    ],
    "valid"
  ],
  [
    [
      42884,
      42884
    ],
    "mapped",
    [
      42885
    ]
  ],
  [
    [
      42885,
      42885
    ],
    "valid"
  ],
  [
    [
      42886,
      42886
    ],
    "mapped",
    [
      42887
    ]
  ],
  [
    [
      42887,
      42888
    ],
    "valid"
  ],
  [
    [
      42889,
      42890
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      42891,
      42891
    ],
    "mapped",
    [
      42892
    ]
  ],
  [
    [
      42892,
      42892
    ],
    "valid"
  ],
  [
    [
      42893,
      42893
    ],
    "mapped",
    [
      613
    ]
  ],
  [
    [
      42894,
      42894
    ],
    "valid"
  ],
  [
    [
      42895,
      42895
    ],
    "valid"
  ],
  [
    [
      42896,
      42896
    ],
    "mapped",
    [
      42897
    ]
  ],
  [
    [
      42897,
      42897
    ],
    "valid"
  ],
  [
    [
      42898,
      42898
    ],
    "mapped",
    [
      42899
    ]
  ],
  [
    [
      42899,
      42899
    ],
    "valid"
  ],
  [
    [
      42900,
      42901
    ],
    "valid"
  ],
  [
    [
      42902,
      42902
    ],
    "mapped",
    [
      42903
    ]
  ],
  [
    [
      42903,
      42903
    ],
    "valid"
  ],
  [
    [
      42904,
      42904
    ],
    "mapped",
    [
      42905
    ]
  ],
  [
    [
      42905,
      42905
    ],
    "valid"
  ],
  [
    [
      42906,
      42906
    ],
    "mapped",
    [
      42907
    ]
  ],
  [
    [
      42907,
      42907
    ],
    "valid"
  ],
  [
    [
      42908,
      42908
    ],
    "mapped",
    [
      42909
    ]
  ],
  [
    [
      42909,
      42909
    ],
    "valid"
  ],
  [
    [
      42910,
      42910
    ],
    "mapped",
    [
      42911
    ]
  ],
  [
    [
      42911,
      42911
    ],
    "valid"
  ],
  [
    [
      42912,
      42912
    ],
    "mapped",
    [
      42913
    ]
  ],
  [
    [
      42913,
      42913
    ],
    "valid"
  ],
  [
    [
      42914,
      42914
    ],
    "mapped",
    [
      42915
    ]
  ],
  [
    [
      42915,
      42915
    ],
    "valid"
  ],
  [
    [
      42916,
      42916
    ],
    "mapped",
    [
      42917
    ]
  ],
  [
    [
      42917,
      42917
    ],
    "valid"
  ],
  [
    [
      42918,
      42918
    ],
    "mapped",
    [
      42919
    ]
  ],
  [
    [
      42919,
      42919
    ],
    "valid"
  ],
  [
    [
      42920,
      42920
    ],
    "mapped",
    [
      42921
    ]
  ],
  [
    [
      42921,
      42921
    ],
    "valid"
  ],
  [
    [
      42922,
      42922
    ],
    "mapped",
    [
      614
    ]
  ],
  [
    [
      42923,
      42923
    ],
    "mapped",
    [
      604
    ]
  ],
  [
    [
      42924,
      42924
    ],
    "mapped",
    [
      609
    ]
  ],
  [
    [
      42925,
      42925
    ],
    "mapped",
    [
      620
    ]
  ],
  [
    [
      42926,
      42927
    ],
    "disallowed"
  ],
  [
    [
      42928,
      42928
    ],
    "mapped",
    [
      670
    ]
  ],
  [
    [
      42929,
      42929
    ],
    "mapped",
    [
      647
    ]
  ],
  [
    [
      42930,
      42930
    ],
    "mapped",
    [
      669
    ]
  ],
  [
    [
      42931,
      42931
    ],
    "mapped",
    [
      43859
    ]
  ],
  [
    [
      42932,
      42932
    ],
    "mapped",
    [
      42933
    ]
  ],
  [
    [
      42933,
      42933
    ],
    "valid"
  ],
  [
    [
      42934,
      42934
    ],
    "mapped",
    [
      42935
    ]
  ],
  [
    [
      42935,
      42935
    ],
    "valid"
  ],
  [
    [
      42936,
      42998
    ],
    "disallowed"
  ],
  [
    [
      42999,
      42999
    ],
    "valid"
  ],
  [
    [
      43e3,
      43e3
    ],
    "mapped",
    [
      295
    ]
  ],
  [
    [
      43001,
      43001
    ],
    "mapped",
    [
      339
    ]
  ],
  [
    [
      43002,
      43002
    ],
    "valid"
  ],
  [
    [
      43003,
      43007
    ],
    "valid"
  ],
  [
    [
      43008,
      43047
    ],
    "valid"
  ],
  [
    [
      43048,
      43051
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43052,
      43055
    ],
    "disallowed"
  ],
  [
    [
      43056,
      43065
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43066,
      43071
    ],
    "disallowed"
  ],
  [
    [
      43072,
      43123
    ],
    "valid"
  ],
  [
    [
      43124,
      43127
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43128,
      43135
    ],
    "disallowed"
  ],
  [
    [
      43136,
      43204
    ],
    "valid"
  ],
  [
    [
      43205,
      43213
    ],
    "disallowed"
  ],
  [
    [
      43214,
      43215
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43216,
      43225
    ],
    "valid"
  ],
  [
    [
      43226,
      43231
    ],
    "disallowed"
  ],
  [
    [
      43232,
      43255
    ],
    "valid"
  ],
  [
    [
      43256,
      43258
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43259,
      43259
    ],
    "valid"
  ],
  [
    [
      43260,
      43260
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43261,
      43261
    ],
    "valid"
  ],
  [
    [
      43262,
      43263
    ],
    "disallowed"
  ],
  [
    [
      43264,
      43309
    ],
    "valid"
  ],
  [
    [
      43310,
      43311
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43312,
      43347
    ],
    "valid"
  ],
  [
    [
      43348,
      43358
    ],
    "disallowed"
  ],
  [
    [
      43359,
      43359
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43360,
      43388
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43389,
      43391
    ],
    "disallowed"
  ],
  [
    [
      43392,
      43456
    ],
    "valid"
  ],
  [
    [
      43457,
      43469
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43470,
      43470
    ],
    "disallowed"
  ],
  [
    [
      43471,
      43481
    ],
    "valid"
  ],
  [
    [
      43482,
      43485
    ],
    "disallowed"
  ],
  [
    [
      43486,
      43487
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43488,
      43518
    ],
    "valid"
  ],
  [
    [
      43519,
      43519
    ],
    "disallowed"
  ],
  [
    [
      43520,
      43574
    ],
    "valid"
  ],
  [
    [
      43575,
      43583
    ],
    "disallowed"
  ],
  [
    [
      43584,
      43597
    ],
    "valid"
  ],
  [
    [
      43598,
      43599
    ],
    "disallowed"
  ],
  [
    [
      43600,
      43609
    ],
    "valid"
  ],
  [
    [
      43610,
      43611
    ],
    "disallowed"
  ],
  [
    [
      43612,
      43615
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43616,
      43638
    ],
    "valid"
  ],
  [
    [
      43639,
      43641
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43642,
      43643
    ],
    "valid"
  ],
  [
    [
      43644,
      43647
    ],
    "valid"
  ],
  [
    [
      43648,
      43714
    ],
    "valid"
  ],
  [
    [
      43715,
      43738
    ],
    "disallowed"
  ],
  [
    [
      43739,
      43741
    ],
    "valid"
  ],
  [
    [
      43742,
      43743
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43744,
      43759
    ],
    "valid"
  ],
  [
    [
      43760,
      43761
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43762,
      43766
    ],
    "valid"
  ],
  [
    [
      43767,
      43776
    ],
    "disallowed"
  ],
  [
    [
      43777,
      43782
    ],
    "valid"
  ],
  [
    [
      43783,
      43784
    ],
    "disallowed"
  ],
  [
    [
      43785,
      43790
    ],
    "valid"
  ],
  [
    [
      43791,
      43792
    ],
    "disallowed"
  ],
  [
    [
      43793,
      43798
    ],
    "valid"
  ],
  [
    [
      43799,
      43807
    ],
    "disallowed"
  ],
  [
    [
      43808,
      43814
    ],
    "valid"
  ],
  [
    [
      43815,
      43815
    ],
    "disallowed"
  ],
  [
    [
      43816,
      43822
    ],
    "valid"
  ],
  [
    [
      43823,
      43823
    ],
    "disallowed"
  ],
  [
    [
      43824,
      43866
    ],
    "valid"
  ],
  [
    [
      43867,
      43867
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      43868,
      43868
    ],
    "mapped",
    [
      42791
    ]
  ],
  [
    [
      43869,
      43869
    ],
    "mapped",
    [
      43831
    ]
  ],
  [
    [
      43870,
      43870
    ],
    "mapped",
    [
      619
    ]
  ],
  [
    [
      43871,
      43871
    ],
    "mapped",
    [
      43858
    ]
  ],
  [
    [
      43872,
      43875
    ],
    "valid"
  ],
  [
    [
      43876,
      43877
    ],
    "valid"
  ],
  [
    [
      43878,
      43887
    ],
    "disallowed"
  ],
  [
    [
      43888,
      43888
    ],
    "mapped",
    [
      5024
    ]
  ],
  [
    [
      43889,
      43889
    ],
    "mapped",
    [
      5025
    ]
  ],
  [
    [
      43890,
      43890
    ],
    "mapped",
    [
      5026
    ]
  ],
  [
    [
      43891,
      43891
    ],
    "mapped",
    [
      5027
    ]
  ],
  [
    [
      43892,
      43892
    ],
    "mapped",
    [
      5028
    ]
  ],
  [
    [
      43893,
      43893
    ],
    "mapped",
    [
      5029
    ]
  ],
  [
    [
      43894,
      43894
    ],
    "mapped",
    [
      5030
    ]
  ],
  [
    [
      43895,
      43895
    ],
    "mapped",
    [
      5031
    ]
  ],
  [
    [
      43896,
      43896
    ],
    "mapped",
    [
      5032
    ]
  ],
  [
    [
      43897,
      43897
    ],
    "mapped",
    [
      5033
    ]
  ],
  [
    [
      43898,
      43898
    ],
    "mapped",
    [
      5034
    ]
  ],
  [
    [
      43899,
      43899
    ],
    "mapped",
    [
      5035
    ]
  ],
  [
    [
      43900,
      43900
    ],
    "mapped",
    [
      5036
    ]
  ],
  [
    [
      43901,
      43901
    ],
    "mapped",
    [
      5037
    ]
  ],
  [
    [
      43902,
      43902
    ],
    "mapped",
    [
      5038
    ]
  ],
  [
    [
      43903,
      43903
    ],
    "mapped",
    [
      5039
    ]
  ],
  [
    [
      43904,
      43904
    ],
    "mapped",
    [
      5040
    ]
  ],
  [
    [
      43905,
      43905
    ],
    "mapped",
    [
      5041
    ]
  ],
  [
    [
      43906,
      43906
    ],
    "mapped",
    [
      5042
    ]
  ],
  [
    [
      43907,
      43907
    ],
    "mapped",
    [
      5043
    ]
  ],
  [
    [
      43908,
      43908
    ],
    "mapped",
    [
      5044
    ]
  ],
  [
    [
      43909,
      43909
    ],
    "mapped",
    [
      5045
    ]
  ],
  [
    [
      43910,
      43910
    ],
    "mapped",
    [
      5046
    ]
  ],
  [
    [
      43911,
      43911
    ],
    "mapped",
    [
      5047
    ]
  ],
  [
    [
      43912,
      43912
    ],
    "mapped",
    [
      5048
    ]
  ],
  [
    [
      43913,
      43913
    ],
    "mapped",
    [
      5049
    ]
  ],
  [
    [
      43914,
      43914
    ],
    "mapped",
    [
      5050
    ]
  ],
  [
    [
      43915,
      43915
    ],
    "mapped",
    [
      5051
    ]
  ],
  [
    [
      43916,
      43916
    ],
    "mapped",
    [
      5052
    ]
  ],
  [
    [
      43917,
      43917
    ],
    "mapped",
    [
      5053
    ]
  ],
  [
    [
      43918,
      43918
    ],
    "mapped",
    [
      5054
    ]
  ],
  [
    [
      43919,
      43919
    ],
    "mapped",
    [
      5055
    ]
  ],
  [
    [
      43920,
      43920
    ],
    "mapped",
    [
      5056
    ]
  ],
  [
    [
      43921,
      43921
    ],
    "mapped",
    [
      5057
    ]
  ],
  [
    [
      43922,
      43922
    ],
    "mapped",
    [
      5058
    ]
  ],
  [
    [
      43923,
      43923
    ],
    "mapped",
    [
      5059
    ]
  ],
  [
    [
      43924,
      43924
    ],
    "mapped",
    [
      5060
    ]
  ],
  [
    [
      43925,
      43925
    ],
    "mapped",
    [
      5061
    ]
  ],
  [
    [
      43926,
      43926
    ],
    "mapped",
    [
      5062
    ]
  ],
  [
    [
      43927,
      43927
    ],
    "mapped",
    [
      5063
    ]
  ],
  [
    [
      43928,
      43928
    ],
    "mapped",
    [
      5064
    ]
  ],
  [
    [
      43929,
      43929
    ],
    "mapped",
    [
      5065
    ]
  ],
  [
    [
      43930,
      43930
    ],
    "mapped",
    [
      5066
    ]
  ],
  [
    [
      43931,
      43931
    ],
    "mapped",
    [
      5067
    ]
  ],
  [
    [
      43932,
      43932
    ],
    "mapped",
    [
      5068
    ]
  ],
  [
    [
      43933,
      43933
    ],
    "mapped",
    [
      5069
    ]
  ],
  [
    [
      43934,
      43934
    ],
    "mapped",
    [
      5070
    ]
  ],
  [
    [
      43935,
      43935
    ],
    "mapped",
    [
      5071
    ]
  ],
  [
    [
      43936,
      43936
    ],
    "mapped",
    [
      5072
    ]
  ],
  [
    [
      43937,
      43937
    ],
    "mapped",
    [
      5073
    ]
  ],
  [
    [
      43938,
      43938
    ],
    "mapped",
    [
      5074
    ]
  ],
  [
    [
      43939,
      43939
    ],
    "mapped",
    [
      5075
    ]
  ],
  [
    [
      43940,
      43940
    ],
    "mapped",
    [
      5076
    ]
  ],
  [
    [
      43941,
      43941
    ],
    "mapped",
    [
      5077
    ]
  ],
  [
    [
      43942,
      43942
    ],
    "mapped",
    [
      5078
    ]
  ],
  [
    [
      43943,
      43943
    ],
    "mapped",
    [
      5079
    ]
  ],
  [
    [
      43944,
      43944
    ],
    "mapped",
    [
      5080
    ]
  ],
  [
    [
      43945,
      43945
    ],
    "mapped",
    [
      5081
    ]
  ],
  [
    [
      43946,
      43946
    ],
    "mapped",
    [
      5082
    ]
  ],
  [
    [
      43947,
      43947
    ],
    "mapped",
    [
      5083
    ]
  ],
  [
    [
      43948,
      43948
    ],
    "mapped",
    [
      5084
    ]
  ],
  [
    [
      43949,
      43949
    ],
    "mapped",
    [
      5085
    ]
  ],
  [
    [
      43950,
      43950
    ],
    "mapped",
    [
      5086
    ]
  ],
  [
    [
      43951,
      43951
    ],
    "mapped",
    [
      5087
    ]
  ],
  [
    [
      43952,
      43952
    ],
    "mapped",
    [
      5088
    ]
  ],
  [
    [
      43953,
      43953
    ],
    "mapped",
    [
      5089
    ]
  ],
  [
    [
      43954,
      43954
    ],
    "mapped",
    [
      5090
    ]
  ],
  [
    [
      43955,
      43955
    ],
    "mapped",
    [
      5091
    ]
  ],
  [
    [
      43956,
      43956
    ],
    "mapped",
    [
      5092
    ]
  ],
  [
    [
      43957,
      43957
    ],
    "mapped",
    [
      5093
    ]
  ],
  [
    [
      43958,
      43958
    ],
    "mapped",
    [
      5094
    ]
  ],
  [
    [
      43959,
      43959
    ],
    "mapped",
    [
      5095
    ]
  ],
  [
    [
      43960,
      43960
    ],
    "mapped",
    [
      5096
    ]
  ],
  [
    [
      43961,
      43961
    ],
    "mapped",
    [
      5097
    ]
  ],
  [
    [
      43962,
      43962
    ],
    "mapped",
    [
      5098
    ]
  ],
  [
    [
      43963,
      43963
    ],
    "mapped",
    [
      5099
    ]
  ],
  [
    [
      43964,
      43964
    ],
    "mapped",
    [
      5100
    ]
  ],
  [
    [
      43965,
      43965
    ],
    "mapped",
    [
      5101
    ]
  ],
  [
    [
      43966,
      43966
    ],
    "mapped",
    [
      5102
    ]
  ],
  [
    [
      43967,
      43967
    ],
    "mapped",
    [
      5103
    ]
  ],
  [
    [
      43968,
      44010
    ],
    "valid"
  ],
  [
    [
      44011,
      44011
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      44012,
      44013
    ],
    "valid"
  ],
  [
    [
      44014,
      44015
    ],
    "disallowed"
  ],
  [
    [
      44016,
      44025
    ],
    "valid"
  ],
  [
    [
      44026,
      44031
    ],
    "disallowed"
  ],
  [
    [
      44032,
      55203
    ],
    "valid"
  ],
  [
    [
      55204,
      55215
    ],
    "disallowed"
  ],
  [
    [
      55216,
      55238
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      55239,
      55242
    ],
    "disallowed"
  ],
  [
    [
      55243,
      55291
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      55292,
      55295
    ],
    "disallowed"
  ],
  [
    [
      55296,
      57343
    ],
    "disallowed"
  ],
  [
    [
      57344,
      63743
    ],
    "disallowed"
  ],
  [
    [
      63744,
      63744
    ],
    "mapped",
    [
      35912
    ]
  ],
  [
    [
      63745,
      63745
    ],
    "mapped",
    [
      26356
    ]
  ],
  [
    [
      63746,
      63746
    ],
    "mapped",
    [
      36554
    ]
  ],
  [
    [
      63747,
      63747
    ],
    "mapped",
    [
      36040
    ]
  ],
  [
    [
      63748,
      63748
    ],
    "mapped",
    [
      28369
    ]
  ],
  [
    [
      63749,
      63749
    ],
    "mapped",
    [
      20018
    ]
  ],
  [
    [
      63750,
      63750
    ],
    "mapped",
    [
      21477
    ]
  ],
  [
    [
      63751,
      63752
    ],
    "mapped",
    [
      40860
    ]
  ],
  [
    [
      63753,
      63753
    ],
    "mapped",
    [
      22865
    ]
  ],
  [
    [
      63754,
      63754
    ],
    "mapped",
    [
      37329
    ]
  ],
  [
    [
      63755,
      63755
    ],
    "mapped",
    [
      21895
    ]
  ],
  [
    [
      63756,
      63756
    ],
    "mapped",
    [
      22856
    ]
  ],
  [
    [
      63757,
      63757
    ],
    "mapped",
    [
      25078
    ]
  ],
  [
    [
      63758,
      63758
    ],
    "mapped",
    [
      30313
    ]
  ],
  [
    [
      63759,
      63759
    ],
    "mapped",
    [
      32645
    ]
  ],
  [
    [
      63760,
      63760
    ],
    "mapped",
    [
      34367
    ]
  ],
  [
    [
      63761,
      63761
    ],
    "mapped",
    [
      34746
    ]
  ],
  [
    [
      63762,
      63762
    ],
    "mapped",
    [
      35064
    ]
  ],
  [
    [
      63763,
      63763
    ],
    "mapped",
    [
      37007
    ]
  ],
  [
    [
      63764,
      63764
    ],
    "mapped",
    [
      27138
    ]
  ],
  [
    [
      63765,
      63765
    ],
    "mapped",
    [
      27931
    ]
  ],
  [
    [
      63766,
      63766
    ],
    "mapped",
    [
      28889
    ]
  ],
  [
    [
      63767,
      63767
    ],
    "mapped",
    [
      29662
    ]
  ],
  [
    [
      63768,
      63768
    ],
    "mapped",
    [
      33853
    ]
  ],
  [
    [
      63769,
      63769
    ],
    "mapped",
    [
      37226
    ]
  ],
  [
    [
      63770,
      63770
    ],
    "mapped",
    [
      39409
    ]
  ],
  [
    [
      63771,
      63771
    ],
    "mapped",
    [
      20098
    ]
  ],
  [
    [
      63772,
      63772
    ],
    "mapped",
    [
      21365
    ]
  ],
  [
    [
      63773,
      63773
    ],
    "mapped",
    [
      27396
    ]
  ],
  [
    [
      63774,
      63774
    ],
    "mapped",
    [
      29211
    ]
  ],
  [
    [
      63775,
      63775
    ],
    "mapped",
    [
      34349
    ]
  ],
  [
    [
      63776,
      63776
    ],
    "mapped",
    [
      40478
    ]
  ],
  [
    [
      63777,
      63777
    ],
    "mapped",
    [
      23888
    ]
  ],
  [
    [
      63778,
      63778
    ],
    "mapped",
    [
      28651
    ]
  ],
  [
    [
      63779,
      63779
    ],
    "mapped",
    [
      34253
    ]
  ],
  [
    [
      63780,
      63780
    ],
    "mapped",
    [
      35172
    ]
  ],
  [
    [
      63781,
      63781
    ],
    "mapped",
    [
      25289
    ]
  ],
  [
    [
      63782,
      63782
    ],
    "mapped",
    [
      33240
    ]
  ],
  [
    [
      63783,
      63783
    ],
    "mapped",
    [
      34847
    ]
  ],
  [
    [
      63784,
      63784
    ],
    "mapped",
    [
      24266
    ]
  ],
  [
    [
      63785,
      63785
    ],
    "mapped",
    [
      26391
    ]
  ],
  [
    [
      63786,
      63786
    ],
    "mapped",
    [
      28010
    ]
  ],
  [
    [
      63787,
      63787
    ],
    "mapped",
    [
      29436
    ]
  ],
  [
    [
      63788,
      63788
    ],
    "mapped",
    [
      37070
    ]
  ],
  [
    [
      63789,
      63789
    ],
    "mapped",
    [
      20358
    ]
  ],
  [
    [
      63790,
      63790
    ],
    "mapped",
    [
      20919
    ]
  ],
  [
    [
      63791,
      63791
    ],
    "mapped",
    [
      21214
    ]
  ],
  [
    [
      63792,
      63792
    ],
    "mapped",
    [
      25796
    ]
  ],
  [
    [
      63793,
      63793
    ],
    "mapped",
    [
      27347
    ]
  ],
  [
    [
      63794,
      63794
    ],
    "mapped",
    [
      29200
    ]
  ],
  [
    [
      63795,
      63795
    ],
    "mapped",
    [
      30439
    ]
  ],
  [
    [
      63796,
      63796
    ],
    "mapped",
    [
      32769
    ]
  ],
  [
    [
      63797,
      63797
    ],
    "mapped",
    [
      34310
    ]
  ],
  [
    [
      63798,
      63798
    ],
    "mapped",
    [
      34396
    ]
  ],
  [
    [
      63799,
      63799
    ],
    "mapped",
    [
      36335
    ]
  ],
  [
    [
      63800,
      63800
    ],
    "mapped",
    [
      38706
    ]
  ],
  [
    [
      63801,
      63801
    ],
    "mapped",
    [
      39791
    ]
  ],
  [
    [
      63802,
      63802
    ],
    "mapped",
    [
      40442
    ]
  ],
  [
    [
      63803,
      63803
    ],
    "mapped",
    [
      30860
    ]
  ],
  [
    [
      63804,
      63804
    ],
    "mapped",
    [
      31103
    ]
  ],
  [
    [
      63805,
      63805
    ],
    "mapped",
    [
      32160
    ]
  ],
  [
    [
      63806,
      63806
    ],
    "mapped",
    [
      33737
    ]
  ],
  [
    [
      63807,
      63807
    ],
    "mapped",
    [
      37636
    ]
  ],
  [
    [
      63808,
      63808
    ],
    "mapped",
    [
      40575
    ]
  ],
  [
    [
      63809,
      63809
    ],
    "mapped",
    [
      35542
    ]
  ],
  [
    [
      63810,
      63810
    ],
    "mapped",
    [
      22751
    ]
  ],
  [
    [
      63811,
      63811
    ],
    "mapped",
    [
      24324
    ]
  ],
  [
    [
      63812,
      63812
    ],
    "mapped",
    [
      31840
    ]
  ],
  [
    [
      63813,
      63813
    ],
    "mapped",
    [
      32894
    ]
  ],
  [
    [
      63814,
      63814
    ],
    "mapped",
    [
      29282
    ]
  ],
  [
    [
      63815,
      63815
    ],
    "mapped",
    [
      30922
    ]
  ],
  [
    [
      63816,
      63816
    ],
    "mapped",
    [
      36034
    ]
  ],
  [
    [
      63817,
      63817
    ],
    "mapped",
    [
      38647
    ]
  ],
  [
    [
      63818,
      63818
    ],
    "mapped",
    [
      22744
    ]
  ],
  [
    [
      63819,
      63819
    ],
    "mapped",
    [
      23650
    ]
  ],
  [
    [
      63820,
      63820
    ],
    "mapped",
    [
      27155
    ]
  ],
  [
    [
      63821,
      63821
    ],
    "mapped",
    [
      28122
    ]
  ],
  [
    [
      63822,
      63822
    ],
    "mapped",
    [
      28431
    ]
  ],
  [
    [
      63823,
      63823
    ],
    "mapped",
    [
      32047
    ]
  ],
  [
    [
      63824,
      63824
    ],
    "mapped",
    [
      32311
    ]
  ],
  [
    [
      63825,
      63825
    ],
    "mapped",
    [
      38475
    ]
  ],
  [
    [
      63826,
      63826
    ],
    "mapped",
    [
      21202
    ]
  ],
  [
    [
      63827,
      63827
    ],
    "mapped",
    [
      32907
    ]
  ],
  [
    [
      63828,
      63828
    ],
    "mapped",
    [
      20956
    ]
  ],
  [
    [
      63829,
      63829
    ],
    "mapped",
    [
      20940
    ]
  ],
  [
    [
      63830,
      63830
    ],
    "mapped",
    [
      31260
    ]
  ],
  [
    [
      63831,
      63831
    ],
    "mapped",
    [
      32190
    ]
  ],
  [
    [
      63832,
      63832
    ],
    "mapped",
    [
      33777
    ]
  ],
  [
    [
      63833,
      63833
    ],
    "mapped",
    [
      38517
    ]
  ],
  [
    [
      63834,
      63834
    ],
    "mapped",
    [
      35712
    ]
  ],
  [
    [
      63835,
      63835
    ],
    "mapped",
    [
      25295
    ]
  ],
  [
    [
      63836,
      63836
    ],
    "mapped",
    [
      27138
    ]
  ],
  [
    [
      63837,
      63837
    ],
    "mapped",
    [
      35582
    ]
  ],
  [
    [
      63838,
      63838
    ],
    "mapped",
    [
      20025
    ]
  ],
  [
    [
      63839,
      63839
    ],
    "mapped",
    [
      23527
    ]
  ],
  [
    [
      63840,
      63840
    ],
    "mapped",
    [
      24594
    ]
  ],
  [
    [
      63841,
      63841
    ],
    "mapped",
    [
      29575
    ]
  ],
  [
    [
      63842,
      63842
    ],
    "mapped",
    [
      30064
    ]
  ],
  [
    [
      63843,
      63843
    ],
    "mapped",
    [
      21271
    ]
  ],
  [
    [
      63844,
      63844
    ],
    "mapped",
    [
      30971
    ]
  ],
  [
    [
      63845,
      63845
    ],
    "mapped",
    [
      20415
    ]
  ],
  [
    [
      63846,
      63846
    ],
    "mapped",
    [
      24489
    ]
  ],
  [
    [
      63847,
      63847
    ],
    "mapped",
    [
      19981
    ]
  ],
  [
    [
      63848,
      63848
    ],
    "mapped",
    [
      27852
    ]
  ],
  [
    [
      63849,
      63849
    ],
    "mapped",
    [
      25976
    ]
  ],
  [
    [
      63850,
      63850
    ],
    "mapped",
    [
      32034
    ]
  ],
  [
    [
      63851,
      63851
    ],
    "mapped",
    [
      21443
    ]
  ],
  [
    [
      63852,
      63852
    ],
    "mapped",
    [
      22622
    ]
  ],
  [
    [
      63853,
      63853
    ],
    "mapped",
    [
      30465
    ]
  ],
  [
    [
      63854,
      63854
    ],
    "mapped",
    [
      33865
    ]
  ],
  [
    [
      63855,
      63855
    ],
    "mapped",
    [
      35498
    ]
  ],
  [
    [
      63856,
      63856
    ],
    "mapped",
    [
      27578
    ]
  ],
  [
    [
      63857,
      63857
    ],
    "mapped",
    [
      36784
    ]
  ],
  [
    [
      63858,
      63858
    ],
    "mapped",
    [
      27784
    ]
  ],
  [
    [
      63859,
      63859
    ],
    "mapped",
    [
      25342
    ]
  ],
  [
    [
      63860,
      63860
    ],
    "mapped",
    [
      33509
    ]
  ],
  [
    [
      63861,
      63861
    ],
    "mapped",
    [
      25504
    ]
  ],
  [
    [
      63862,
      63862
    ],
    "mapped",
    [
      30053
    ]
  ],
  [
    [
      63863,
      63863
    ],
    "mapped",
    [
      20142
    ]
  ],
  [
    [
      63864,
      63864
    ],
    "mapped",
    [
      20841
    ]
  ],
  [
    [
      63865,
      63865
    ],
    "mapped",
    [
      20937
    ]
  ],
  [
    [
      63866,
      63866
    ],
    "mapped",
    [
      26753
    ]
  ],
  [
    [
      63867,
      63867
    ],
    "mapped",
    [
      31975
    ]
  ],
  [
    [
      63868,
      63868
    ],
    "mapped",
    [
      33391
    ]
  ],
  [
    [
      63869,
      63869
    ],
    "mapped",
    [
      35538
    ]
  ],
  [
    [
      63870,
      63870
    ],
    "mapped",
    [
      37327
    ]
  ],
  [
    [
      63871,
      63871
    ],
    "mapped",
    [
      21237
    ]
  ],
  [
    [
      63872,
      63872
    ],
    "mapped",
    [
      21570
    ]
  ],
  [
    [
      63873,
      63873
    ],
    "mapped",
    [
      22899
    ]
  ],
  [
    [
      63874,
      63874
    ],
    "mapped",
    [
      24300
    ]
  ],
  [
    [
      63875,
      63875
    ],
    "mapped",
    [
      26053
    ]
  ],
  [
    [
      63876,
      63876
    ],
    "mapped",
    [
      28670
    ]
  ],
  [
    [
      63877,
      63877
    ],
    "mapped",
    [
      31018
    ]
  ],
  [
    [
      63878,
      63878
    ],
    "mapped",
    [
      38317
    ]
  ],
  [
    [
      63879,
      63879
    ],
    "mapped",
    [
      39530
    ]
  ],
  [
    [
      63880,
      63880
    ],
    "mapped",
    [
      40599
    ]
  ],
  [
    [
      63881,
      63881
    ],
    "mapped",
    [
      40654
    ]
  ],
  [
    [
      63882,
      63882
    ],
    "mapped",
    [
      21147
    ]
  ],
  [
    [
      63883,
      63883
    ],
    "mapped",
    [
      26310
    ]
  ],
  [
    [
      63884,
      63884
    ],
    "mapped",
    [
      27511
    ]
  ],
  [
    [
      63885,
      63885
    ],
    "mapped",
    [
      36706
    ]
  ],
  [
    [
      63886,
      63886
    ],
    "mapped",
    [
      24180
    ]
  ],
  [
    [
      63887,
      63887
    ],
    "mapped",
    [
      24976
    ]
  ],
  [
    [
      63888,
      63888
    ],
    "mapped",
    [
      25088
    ]
  ],
  [
    [
      63889,
      63889
    ],
    "mapped",
    [
      25754
    ]
  ],
  [
    [
      63890,
      63890
    ],
    "mapped",
    [
      28451
    ]
  ],
  [
    [
      63891,
      63891
    ],
    "mapped",
    [
      29001
    ]
  ],
  [
    [
      63892,
      63892
    ],
    "mapped",
    [
      29833
    ]
  ],
  [
    [
      63893,
      63893
    ],
    "mapped",
    [
      31178
    ]
  ],
  [
    [
      63894,
      63894
    ],
    "mapped",
    [
      32244
    ]
  ],
  [
    [
      63895,
      63895
    ],
    "mapped",
    [
      32879
    ]
  ],
  [
    [
      63896,
      63896
    ],
    "mapped",
    [
      36646
    ]
  ],
  [
    [
      63897,
      63897
    ],
    "mapped",
    [
      34030
    ]
  ],
  [
    [
      63898,
      63898
    ],
    "mapped",
    [
      36899
    ]
  ],
  [
    [
      63899,
      63899
    ],
    "mapped",
    [
      37706
    ]
  ],
  [
    [
      63900,
      63900
    ],
    "mapped",
    [
      21015
    ]
  ],
  [
    [
      63901,
      63901
    ],
    "mapped",
    [
      21155
    ]
  ],
  [
    [
      63902,
      63902
    ],
    "mapped",
    [
      21693
    ]
  ],
  [
    [
      63903,
      63903
    ],
    "mapped",
    [
      28872
    ]
  ],
  [
    [
      63904,
      63904
    ],
    "mapped",
    [
      35010
    ]
  ],
  [
    [
      63905,
      63905
    ],
    "mapped",
    [
      35498
    ]
  ],
  [
    [
      63906,
      63906
    ],
    "mapped",
    [
      24265
    ]
  ],
  [
    [
      63907,
      63907
    ],
    "mapped",
    [
      24565
    ]
  ],
  [
    [
      63908,
      63908
    ],
    "mapped",
    [
      25467
    ]
  ],
  [
    [
      63909,
      63909
    ],
    "mapped",
    [
      27566
    ]
  ],
  [
    [
      63910,
      63910
    ],
    "mapped",
    [
      31806
    ]
  ],
  [
    [
      63911,
      63911
    ],
    "mapped",
    [
      29557
    ]
  ],
  [
    [
      63912,
      63912
    ],
    "mapped",
    [
      20196
    ]
  ],
  [
    [
      63913,
      63913
    ],
    "mapped",
    [
      22265
    ]
  ],
  [
    [
      63914,
      63914
    ],
    "mapped",
    [
      23527
    ]
  ],
  [
    [
      63915,
      63915
    ],
    "mapped",
    [
      23994
    ]
  ],
  [
    [
      63916,
      63916
    ],
    "mapped",
    [
      24604
    ]
  ],
  [
    [
      63917,
      63917
    ],
    "mapped",
    [
      29618
    ]
  ],
  [
    [
      63918,
      63918
    ],
    "mapped",
    [
      29801
    ]
  ],
  [
    [
      63919,
      63919
    ],
    "mapped",
    [
      32666
    ]
  ],
  [
    [
      63920,
      63920
    ],
    "mapped",
    [
      32838
    ]
  ],
  [
    [
      63921,
      63921
    ],
    "mapped",
    [
      37428
    ]
  ],
  [
    [
      63922,
      63922
    ],
    "mapped",
    [
      38646
    ]
  ],
  [
    [
      63923,
      63923
    ],
    "mapped",
    [
      38728
    ]
  ],
  [
    [
      63924,
      63924
    ],
    "mapped",
    [
      38936
    ]
  ],
  [
    [
      63925,
      63925
    ],
    "mapped",
    [
      20363
    ]
  ],
  [
    [
      63926,
      63926
    ],
    "mapped",
    [
      31150
    ]
  ],
  [
    [
      63927,
      63927
    ],
    "mapped",
    [
      37300
    ]
  ],
  [
    [
      63928,
      63928
    ],
    "mapped",
    [
      38584
    ]
  ],
  [
    [
      63929,
      63929
    ],
    "mapped",
    [
      24801
    ]
  ],
  [
    [
      63930,
      63930
    ],
    "mapped",
    [
      20102
    ]
  ],
  [
    [
      63931,
      63931
    ],
    "mapped",
    [
      20698
    ]
  ],
  [
    [
      63932,
      63932
    ],
    "mapped",
    [
      23534
    ]
  ],
  [
    [
      63933,
      63933
    ],
    "mapped",
    [
      23615
    ]
  ],
  [
    [
      63934,
      63934
    ],
    "mapped",
    [
      26009
    ]
  ],
  [
    [
      63935,
      63935
    ],
    "mapped",
    [
      27138
    ]
  ],
  [
    [
      63936,
      63936
    ],
    "mapped",
    [
      29134
    ]
  ],
  [
    [
      63937,
      63937
    ],
    "mapped",
    [
      30274
    ]
  ],
  [
    [
      63938,
      63938
    ],
    "mapped",
    [
      34044
    ]
  ],
  [
    [
      63939,
      63939
    ],
    "mapped",
    [
      36988
    ]
  ],
  [
    [
      63940,
      63940
    ],
    "mapped",
    [
      40845
    ]
  ],
  [
    [
      63941,
      63941
    ],
    "mapped",
    [
      26248
    ]
  ],
  [
    [
      63942,
      63942
    ],
    "mapped",
    [
      38446
    ]
  ],
  [
    [
      63943,
      63943
    ],
    "mapped",
    [
      21129
    ]
  ],
  [
    [
      63944,
      63944
    ],
    "mapped",
    [
      26491
    ]
  ],
  [
    [
      63945,
      63945
    ],
    "mapped",
    [
      26611
    ]
  ],
  [
    [
      63946,
      63946
    ],
    "mapped",
    [
      27969
    ]
  ],
  [
    [
      63947,
      63947
    ],
    "mapped",
    [
      28316
    ]
  ],
  [
    [
      63948,
      63948
    ],
    "mapped",
    [
      29705
    ]
  ],
  [
    [
      63949,
      63949
    ],
    "mapped",
    [
      30041
    ]
  ],
  [
    [
      63950,
      63950
    ],
    "mapped",
    [
      30827
    ]
  ],
  [
    [
      63951,
      63951
    ],
    "mapped",
    [
      32016
    ]
  ],
  [
    [
      63952,
      63952
    ],
    "mapped",
    [
      39006
    ]
  ],
  [
    [
      63953,
      63953
    ],
    "mapped",
    [
      20845
    ]
  ],
  [
    [
      63954,
      63954
    ],
    "mapped",
    [
      25134
    ]
  ],
  [
    [
      63955,
      63955
    ],
    "mapped",
    [
      38520
    ]
  ],
  [
    [
      63956,
      63956
    ],
    "mapped",
    [
      20523
    ]
  ],
  [
    [
      63957,
      63957
    ],
    "mapped",
    [
      23833
    ]
  ],
  [
    [
      63958,
      63958
    ],
    "mapped",
    [
      28138
    ]
  ],
  [
    [
      63959,
      63959
    ],
    "mapped",
    [
      36650
    ]
  ],
  [
    [
      63960,
      63960
    ],
    "mapped",
    [
      24459
    ]
  ],
  [
    [
      63961,
      63961
    ],
    "mapped",
    [
      24900
    ]
  ],
  [
    [
      63962,
      63962
    ],
    "mapped",
    [
      26647
    ]
  ],
  [
    [
      63963,
      63963
    ],
    "mapped",
    [
      29575
    ]
  ],
  [
    [
      63964,
      63964
    ],
    "mapped",
    [
      38534
    ]
  ],
  [
    [
      63965,
      63965
    ],
    "mapped",
    [
      21033
    ]
  ],
  [
    [
      63966,
      63966
    ],
    "mapped",
    [
      21519
    ]
  ],
  [
    [
      63967,
      63967
    ],
    "mapped",
    [
      23653
    ]
  ],
  [
    [
      63968,
      63968
    ],
    "mapped",
    [
      26131
    ]
  ],
  [
    [
      63969,
      63969
    ],
    "mapped",
    [
      26446
    ]
  ],
  [
    [
      63970,
      63970
    ],
    "mapped",
    [
      26792
    ]
  ],
  [
    [
      63971,
      63971
    ],
    "mapped",
    [
      27877
    ]
  ],
  [
    [
      63972,
      63972
    ],
    "mapped",
    [
      29702
    ]
  ],
  [
    [
      63973,
      63973
    ],
    "mapped",
    [
      30178
    ]
  ],
  [
    [
      63974,
      63974
    ],
    "mapped",
    [
      32633
    ]
  ],
  [
    [
      63975,
      63975
    ],
    "mapped",
    [
      35023
    ]
  ],
  [
    [
      63976,
      63976
    ],
    "mapped",
    [
      35041
    ]
  ],
  [
    [
      63977,
      63977
    ],
    "mapped",
    [
      37324
    ]
  ],
  [
    [
      63978,
      63978
    ],
    "mapped",
    [
      38626
    ]
  ],
  [
    [
      63979,
      63979
    ],
    "mapped",
    [
      21311
    ]
  ],
  [
    [
      63980,
      63980
    ],
    "mapped",
    [
      28346
    ]
  ],
  [
    [
      63981,
      63981
    ],
    "mapped",
    [
      21533
    ]
  ],
  [
    [
      63982,
      63982
    ],
    "mapped",
    [
      29136
    ]
  ],
  [
    [
      63983,
      63983
    ],
    "mapped",
    [
      29848
    ]
  ],
  [
    [
      63984,
      63984
    ],
    "mapped",
    [
      34298
    ]
  ],
  [
    [
      63985,
      63985
    ],
    "mapped",
    [
      38563
    ]
  ],
  [
    [
      63986,
      63986
    ],
    "mapped",
    [
      40023
    ]
  ],
  [
    [
      63987,
      63987
    ],
    "mapped",
    [
      40607
    ]
  ],
  [
    [
      63988,
      63988
    ],
    "mapped",
    [
      26519
    ]
  ],
  [
    [
      63989,
      63989
    ],
    "mapped",
    [
      28107
    ]
  ],
  [
    [
      63990,
      63990
    ],
    "mapped",
    [
      33256
    ]
  ],
  [
    [
      63991,
      63991
    ],
    "mapped",
    [
      31435
    ]
  ],
  [
    [
      63992,
      63992
    ],
    "mapped",
    [
      31520
    ]
  ],
  [
    [
      63993,
      63993
    ],
    "mapped",
    [
      31890
    ]
  ],
  [
    [
      63994,
      63994
    ],
    "mapped",
    [
      29376
    ]
  ],
  [
    [
      63995,
      63995
    ],
    "mapped",
    [
      28825
    ]
  ],
  [
    [
      63996,
      63996
    ],
    "mapped",
    [
      35672
    ]
  ],
  [
    [
      63997,
      63997
    ],
    "mapped",
    [
      20160
    ]
  ],
  [
    [
      63998,
      63998
    ],
    "mapped",
    [
      33590
    ]
  ],
  [
    [
      63999,
      63999
    ],
    "mapped",
    [
      21050
    ]
  ],
  [
    [
      64e3,
      64e3
    ],
    "mapped",
    [
      20999
    ]
  ],
  [
    [
      64001,
      64001
    ],
    "mapped",
    [
      24230
    ]
  ],
  [
    [
      64002,
      64002
    ],
    "mapped",
    [
      25299
    ]
  ],
  [
    [
      64003,
      64003
    ],
    "mapped",
    [
      31958
    ]
  ],
  [
    [
      64004,
      64004
    ],
    "mapped",
    [
      23429
    ]
  ],
  [
    [
      64005,
      64005
    ],
    "mapped",
    [
      27934
    ]
  ],
  [
    [
      64006,
      64006
    ],
    "mapped",
    [
      26292
    ]
  ],
  [
    [
      64007,
      64007
    ],
    "mapped",
    [
      36667
    ]
  ],
  [
    [
      64008,
      64008
    ],
    "mapped",
    [
      34892
    ]
  ],
  [
    [
      64009,
      64009
    ],
    "mapped",
    [
      38477
    ]
  ],
  [
    [
      64010,
      64010
    ],
    "mapped",
    [
      35211
    ]
  ],
  [
    [
      64011,
      64011
    ],
    "mapped",
    [
      24275
    ]
  ],
  [
    [
      64012,
      64012
    ],
    "mapped",
    [
      20800
    ]
  ],
  [
    [
      64013,
      64013
    ],
    "mapped",
    [
      21952
    ]
  ],
  [
    [
      64014,
      64015
    ],
    "valid"
  ],
  [
    [
      64016,
      64016
    ],
    "mapped",
    [
      22618
    ]
  ],
  [
    [
      64017,
      64017
    ],
    "valid"
  ],
  [
    [
      64018,
      64018
    ],
    "mapped",
    [
      26228
    ]
  ],
  [
    [
      64019,
      64020
    ],
    "valid"
  ],
  [
    [
      64021,
      64021
    ],
    "mapped",
    [
      20958
    ]
  ],
  [
    [
      64022,
      64022
    ],
    "mapped",
    [
      29482
    ]
  ],
  [
    [
      64023,
      64023
    ],
    "mapped",
    [
      30410
    ]
  ],
  [
    [
      64024,
      64024
    ],
    "mapped",
    [
      31036
    ]
  ],
  [
    [
      64025,
      64025
    ],
    "mapped",
    [
      31070
    ]
  ],
  [
    [
      64026,
      64026
    ],
    "mapped",
    [
      31077
    ]
  ],
  [
    [
      64027,
      64027
    ],
    "mapped",
    [
      31119
    ]
  ],
  [
    [
      64028,
      64028
    ],
    "mapped",
    [
      38742
    ]
  ],
  [
    [
      64029,
      64029
    ],
    "mapped",
    [
      31934
    ]
  ],
  [
    [
      64030,
      64030
    ],
    "mapped",
    [
      32701
    ]
  ],
  [
    [
      64031,
      64031
    ],
    "valid"
  ],
  [
    [
      64032,
      64032
    ],
    "mapped",
    [
      34322
    ]
  ],
  [
    [
      64033,
      64033
    ],
    "valid"
  ],
  [
    [
      64034,
      64034
    ],
    "mapped",
    [
      35576
    ]
  ],
  [
    [
      64035,
      64036
    ],
    "valid"
  ],
  [
    [
      64037,
      64037
    ],
    "mapped",
    [
      36920
    ]
  ],
  [
    [
      64038,
      64038
    ],
    "mapped",
    [
      37117
    ]
  ],
  [
    [
      64039,
      64041
    ],
    "valid"
  ],
  [
    [
      64042,
      64042
    ],
    "mapped",
    [
      39151
    ]
  ],
  [
    [
      64043,
      64043
    ],
    "mapped",
    [
      39164
    ]
  ],
  [
    [
      64044,
      64044
    ],
    "mapped",
    [
      39208
    ]
  ],
  [
    [
      64045,
      64045
    ],
    "mapped",
    [
      40372
    ]
  ],
  [
    [
      64046,
      64046
    ],
    "mapped",
    [
      37086
    ]
  ],
  [
    [
      64047,
      64047
    ],
    "mapped",
    [
      38583
    ]
  ],
  [
    [
      64048,
      64048
    ],
    "mapped",
    [
      20398
    ]
  ],
  [
    [
      64049,
      64049
    ],
    "mapped",
    [
      20711
    ]
  ],
  [
    [
      64050,
      64050
    ],
    "mapped",
    [
      20813
    ]
  ],
  [
    [
      64051,
      64051
    ],
    "mapped",
    [
      21193
    ]
  ],
  [
    [
      64052,
      64052
    ],
    "mapped",
    [
      21220
    ]
  ],
  [
    [
      64053,
      64053
    ],
    "mapped",
    [
      21329
    ]
  ],
  [
    [
      64054,
      64054
    ],
    "mapped",
    [
      21917
    ]
  ],
  [
    [
      64055,
      64055
    ],
    "mapped",
    [
      22022
    ]
  ],
  [
    [
      64056,
      64056
    ],
    "mapped",
    [
      22120
    ]
  ],
  [
    [
      64057,
      64057
    ],
    "mapped",
    [
      22592
    ]
  ],
  [
    [
      64058,
      64058
    ],
    "mapped",
    [
      22696
    ]
  ],
  [
    [
      64059,
      64059
    ],
    "mapped",
    [
      23652
    ]
  ],
  [
    [
      64060,
      64060
    ],
    "mapped",
    [
      23662
    ]
  ],
  [
    [
      64061,
      64061
    ],
    "mapped",
    [
      24724
    ]
  ],
  [
    [
      64062,
      64062
    ],
    "mapped",
    [
      24936
    ]
  ],
  [
    [
      64063,
      64063
    ],
    "mapped",
    [
      24974
    ]
  ],
  [
    [
      64064,
      64064
    ],
    "mapped",
    [
      25074
    ]
  ],
  [
    [
      64065,
      64065
    ],
    "mapped",
    [
      25935
    ]
  ],
  [
    [
      64066,
      64066
    ],
    "mapped",
    [
      26082
    ]
  ],
  [
    [
      64067,
      64067
    ],
    "mapped",
    [
      26257
    ]
  ],
  [
    [
      64068,
      64068
    ],
    "mapped",
    [
      26757
    ]
  ],
  [
    [
      64069,
      64069
    ],
    "mapped",
    [
      28023
    ]
  ],
  [
    [
      64070,
      64070
    ],
    "mapped",
    [
      28186
    ]
  ],
  [
    [
      64071,
      64071
    ],
    "mapped",
    [
      28450
    ]
  ],
  [
    [
      64072,
      64072
    ],
    "mapped",
    [
      29038
    ]
  ],
  [
    [
      64073,
      64073
    ],
    "mapped",
    [
      29227
    ]
  ],
  [
    [
      64074,
      64074
    ],
    "mapped",
    [
      29730
    ]
  ],
  [
    [
      64075,
      64075
    ],
    "mapped",
    [
      30865
    ]
  ],
  [
    [
      64076,
      64076
    ],
    "mapped",
    [
      31038
    ]
  ],
  [
    [
      64077,
      64077
    ],
    "mapped",
    [
      31049
    ]
  ],
  [
    [
      64078,
      64078
    ],
    "mapped",
    [
      31048
    ]
  ],
  [
    [
      64079,
      64079
    ],
    "mapped",
    [
      31056
    ]
  ],
  [
    [
      64080,
      64080
    ],
    "mapped",
    [
      31062
    ]
  ],
  [
    [
      64081,
      64081
    ],
    "mapped",
    [
      31069
    ]
  ],
  [
    [
      64082,
      64082
    ],
    "mapped",
    [
      31117
    ]
  ],
  [
    [
      64083,
      64083
    ],
    "mapped",
    [
      31118
    ]
  ],
  [
    [
      64084,
      64084
    ],
    "mapped",
    [
      31296
    ]
  ],
  [
    [
      64085,
      64085
    ],
    "mapped",
    [
      31361
    ]
  ],
  [
    [
      64086,
      64086
    ],
    "mapped",
    [
      31680
    ]
  ],
  [
    [
      64087,
      64087
    ],
    "mapped",
    [
      32244
    ]
  ],
  [
    [
      64088,
      64088
    ],
    "mapped",
    [
      32265
    ]
  ],
  [
    [
      64089,
      64089
    ],
    "mapped",
    [
      32321
    ]
  ],
  [
    [
      64090,
      64090
    ],
    "mapped",
    [
      32626
    ]
  ],
  [
    [
      64091,
      64091
    ],
    "mapped",
    [
      32773
    ]
  ],
  [
    [
      64092,
      64092
    ],
    "mapped",
    [
      33261
    ]
  ],
  [
    [
      64093,
      64094
    ],
    "mapped",
    [
      33401
    ]
  ],
  [
    [
      64095,
      64095
    ],
    "mapped",
    [
      33879
    ]
  ],
  [
    [
      64096,
      64096
    ],
    "mapped",
    [
      35088
    ]
  ],
  [
    [
      64097,
      64097
    ],
    "mapped",
    [
      35222
    ]
  ],
  [
    [
      64098,
      64098
    ],
    "mapped",
    [
      35585
    ]
  ],
  [
    [
      64099,
      64099
    ],
    "mapped",
    [
      35641
    ]
  ],
  [
    [
      64100,
      64100
    ],
    "mapped",
    [
      36051
    ]
  ],
  [
    [
      64101,
      64101
    ],
    "mapped",
    [
      36104
    ]
  ],
  [
    [
      64102,
      64102
    ],
    "mapped",
    [
      36790
    ]
  ],
  [
    [
      64103,
      64103
    ],
    "mapped",
    [
      36920
    ]
  ],
  [
    [
      64104,
      64104
    ],
    "mapped",
    [
      38627
    ]
  ],
  [
    [
      64105,
      64105
    ],
    "mapped",
    [
      38911
    ]
  ],
  [
    [
      64106,
      64106
    ],
    "mapped",
    [
      38971
    ]
  ],
  [
    [
      64107,
      64107
    ],
    "mapped",
    [
      24693
    ]
  ],
  [
    [
      64108,
      64108
    ],
    "mapped",
    [
      148206
    ]
  ],
  [
    [
      64109,
      64109
    ],
    "mapped",
    [
      33304
    ]
  ],
  [
    [
      64110,
      64111
    ],
    "disallowed"
  ],
  [
    [
      64112,
      64112
    ],
    "mapped",
    [
      20006
    ]
  ],
  [
    [
      64113,
      64113
    ],
    "mapped",
    [
      20917
    ]
  ],
  [
    [
      64114,
      64114
    ],
    "mapped",
    [
      20840
    ]
  ],
  [
    [
      64115,
      64115
    ],
    "mapped",
    [
      20352
    ]
  ],
  [
    [
      64116,
      64116
    ],
    "mapped",
    [
      20805
    ]
  ],
  [
    [
      64117,
      64117
    ],
    "mapped",
    [
      20864
    ]
  ],
  [
    [
      64118,
      64118
    ],
    "mapped",
    [
      21191
    ]
  ],
  [
    [
      64119,
      64119
    ],
    "mapped",
    [
      21242
    ]
  ],
  [
    [
      64120,
      64120
    ],
    "mapped",
    [
      21917
    ]
  ],
  [
    [
      64121,
      64121
    ],
    "mapped",
    [
      21845
    ]
  ],
  [
    [
      64122,
      64122
    ],
    "mapped",
    [
      21913
    ]
  ],
  [
    [
      64123,
      64123
    ],
    "mapped",
    [
      21986
    ]
  ],
  [
    [
      64124,
      64124
    ],
    "mapped",
    [
      22618
    ]
  ],
  [
    [
      64125,
      64125
    ],
    "mapped",
    [
      22707
    ]
  ],
  [
    [
      64126,
      64126
    ],
    "mapped",
    [
      22852
    ]
  ],
  [
    [
      64127,
      64127
    ],
    "mapped",
    [
      22868
    ]
  ],
  [
    [
      64128,
      64128
    ],
    "mapped",
    [
      23138
    ]
  ],
  [
    [
      64129,
      64129
    ],
    "mapped",
    [
      23336
    ]
  ],
  [
    [
      64130,
      64130
    ],
    "mapped",
    [
      24274
    ]
  ],
  [
    [
      64131,
      64131
    ],
    "mapped",
    [
      24281
    ]
  ],
  [
    [
      64132,
      64132
    ],
    "mapped",
    [
      24425
    ]
  ],
  [
    [
      64133,
      64133
    ],
    "mapped",
    [
      24493
    ]
  ],
  [
    [
      64134,
      64134
    ],
    "mapped",
    [
      24792
    ]
  ],
  [
    [
      64135,
      64135
    ],
    "mapped",
    [
      24910
    ]
  ],
  [
    [
      64136,
      64136
    ],
    "mapped",
    [
      24840
    ]
  ],
  [
    [
      64137,
      64137
    ],
    "mapped",
    [
      24974
    ]
  ],
  [
    [
      64138,
      64138
    ],
    "mapped",
    [
      24928
    ]
  ],
  [
    [
      64139,
      64139
    ],
    "mapped",
    [
      25074
    ]
  ],
  [
    [
      64140,
      64140
    ],
    "mapped",
    [
      25140
    ]
  ],
  [
    [
      64141,
      64141
    ],
    "mapped",
    [
      25540
    ]
  ],
  [
    [
      64142,
      64142
    ],
    "mapped",
    [
      25628
    ]
  ],
  [
    [
      64143,
      64143
    ],
    "mapped",
    [
      25682
    ]
  ],
  [
    [
      64144,
      64144
    ],
    "mapped",
    [
      25942
    ]
  ],
  [
    [
      64145,
      64145
    ],
    "mapped",
    [
      26228
    ]
  ],
  [
    [
      64146,
      64146
    ],
    "mapped",
    [
      26391
    ]
  ],
  [
    [
      64147,
      64147
    ],
    "mapped",
    [
      26395
    ]
  ],
  [
    [
      64148,
      64148
    ],
    "mapped",
    [
      26454
    ]
  ],
  [
    [
      64149,
      64149
    ],
    "mapped",
    [
      27513
    ]
  ],
  [
    [
      64150,
      64150
    ],
    "mapped",
    [
      27578
    ]
  ],
  [
    [
      64151,
      64151
    ],
    "mapped",
    [
      27969
    ]
  ],
  [
    [
      64152,
      64152
    ],
    "mapped",
    [
      28379
    ]
  ],
  [
    [
      64153,
      64153
    ],
    "mapped",
    [
      28363
    ]
  ],
  [
    [
      64154,
      64154
    ],
    "mapped",
    [
      28450
    ]
  ],
  [
    [
      64155,
      64155
    ],
    "mapped",
    [
      28702
    ]
  ],
  [
    [
      64156,
      64156
    ],
    "mapped",
    [
      29038
    ]
  ],
  [
    [
      64157,
      64157
    ],
    "mapped",
    [
      30631
    ]
  ],
  [
    [
      64158,
      64158
    ],
    "mapped",
    [
      29237
    ]
  ],
  [
    [
      64159,
      64159
    ],
    "mapped",
    [
      29359
    ]
  ],
  [
    [
      64160,
      64160
    ],
    "mapped",
    [
      29482
    ]
  ],
  [
    [
      64161,
      64161
    ],
    "mapped",
    [
      29809
    ]
  ],
  [
    [
      64162,
      64162
    ],
    "mapped",
    [
      29958
    ]
  ],
  [
    [
      64163,
      64163
    ],
    "mapped",
    [
      30011
    ]
  ],
  [
    [
      64164,
      64164
    ],
    "mapped",
    [
      30237
    ]
  ],
  [
    [
      64165,
      64165
    ],
    "mapped",
    [
      30239
    ]
  ],
  [
    [
      64166,
      64166
    ],
    "mapped",
    [
      30410
    ]
  ],
  [
    [
      64167,
      64167
    ],
    "mapped",
    [
      30427
    ]
  ],
  [
    [
      64168,
      64168
    ],
    "mapped",
    [
      30452
    ]
  ],
  [
    [
      64169,
      64169
    ],
    "mapped",
    [
      30538
    ]
  ],
  [
    [
      64170,
      64170
    ],
    "mapped",
    [
      30528
    ]
  ],
  [
    [
      64171,
      64171
    ],
    "mapped",
    [
      30924
    ]
  ],
  [
    [
      64172,
      64172
    ],
    "mapped",
    [
      31409
    ]
  ],
  [
    [
      64173,
      64173
    ],
    "mapped",
    [
      31680
    ]
  ],
  [
    [
      64174,
      64174
    ],
    "mapped",
    [
      31867
    ]
  ],
  [
    [
      64175,
      64175
    ],
    "mapped",
    [
      32091
    ]
  ],
  [
    [
      64176,
      64176
    ],
    "mapped",
    [
      32244
    ]
  ],
  [
    [
      64177,
      64177
    ],
    "mapped",
    [
      32574
    ]
  ],
  [
    [
      64178,
      64178
    ],
    "mapped",
    [
      32773
    ]
  ],
  [
    [
      64179,
      64179
    ],
    "mapped",
    [
      33618
    ]
  ],
  [
    [
      64180,
      64180
    ],
    "mapped",
    [
      33775
    ]
  ],
  [
    [
      64181,
      64181
    ],
    "mapped",
    [
      34681
    ]
  ],
  [
    [
      64182,
      64182
    ],
    "mapped",
    [
      35137
    ]
  ],
  [
    [
      64183,
      64183
    ],
    "mapped",
    [
      35206
    ]
  ],
  [
    [
      64184,
      64184
    ],
    "mapped",
    [
      35222
    ]
  ],
  [
    [
      64185,
      64185
    ],
    "mapped",
    [
      35519
    ]
  ],
  [
    [
      64186,
      64186
    ],
    "mapped",
    [
      35576
    ]
  ],
  [
    [
      64187,
      64187
    ],
    "mapped",
    [
      35531
    ]
  ],
  [
    [
      64188,
      64188
    ],
    "mapped",
    [
      35585
    ]
  ],
  [
    [
      64189,
      64189
    ],
    "mapped",
    [
      35582
    ]
  ],
  [
    [
      64190,
      64190
    ],
    "mapped",
    [
      35565
    ]
  ],
  [
    [
      64191,
      64191
    ],
    "mapped",
    [
      35641
    ]
  ],
  [
    [
      64192,
      64192
    ],
    "mapped",
    [
      35722
    ]
  ],
  [
    [
      64193,
      64193
    ],
    "mapped",
    [
      36104
    ]
  ],
  [
    [
      64194,
      64194
    ],
    "mapped",
    [
      36664
    ]
  ],
  [
    [
      64195,
      64195
    ],
    "mapped",
    [
      36978
    ]
  ],
  [
    [
      64196,
      64196
    ],
    "mapped",
    [
      37273
    ]
  ],
  [
    [
      64197,
      64197
    ],
    "mapped",
    [
      37494
    ]
  ],
  [
    [
      64198,
      64198
    ],
    "mapped",
    [
      38524
    ]
  ],
  [
    [
      64199,
      64199
    ],
    "mapped",
    [
      38627
    ]
  ],
  [
    [
      64200,
      64200
    ],
    "mapped",
    [
      38742
    ]
  ],
  [
    [
      64201,
      64201
    ],
    "mapped",
    [
      38875
    ]
  ],
  [
    [
      64202,
      64202
    ],
    "mapped",
    [
      38911
    ]
  ],
  [
    [
      64203,
      64203
    ],
    "mapped",
    [
      38923
    ]
  ],
  [
    [
      64204,
      64204
    ],
    "mapped",
    [
      38971
    ]
  ],
  [
    [
      64205,
      64205
    ],
    "mapped",
    [
      39698
    ]
  ],
  [
    [
      64206,
      64206
    ],
    "mapped",
    [
      40860
    ]
  ],
  [
    [
      64207,
      64207
    ],
    "mapped",
    [
      141386
    ]
  ],
  [
    [
      64208,
      64208
    ],
    "mapped",
    [
      141380
    ]
  ],
  [
    [
      64209,
      64209
    ],
    "mapped",
    [
      144341
    ]
  ],
  [
    [
      64210,
      64210
    ],
    "mapped",
    [
      15261
    ]
  ],
  [
    [
      64211,
      64211
    ],
    "mapped",
    [
      16408
    ]
  ],
  [
    [
      64212,
      64212
    ],
    "mapped",
    [
      16441
    ]
  ],
  [
    [
      64213,
      64213
    ],
    "mapped",
    [
      152137
    ]
  ],
  [
    [
      64214,
      64214
    ],
    "mapped",
    [
      154832
    ]
  ],
  [
    [
      64215,
      64215
    ],
    "mapped",
    [
      163539
    ]
  ],
  [
    [
      64216,
      64216
    ],
    "mapped",
    [
      40771
    ]
  ],
  [
    [
      64217,
      64217
    ],
    "mapped",
    [
      40846
    ]
  ],
  [
    [
      64218,
      64255
    ],
    "disallowed"
  ],
  [
    [
      64256,
      64256
    ],
    "mapped",
    [
      102,
      102
    ]
  ],
  [
    [
      64257,
      64257
    ],
    "mapped",
    [
      102,
      105
    ]
  ],
  [
    [
      64258,
      64258
    ],
    "mapped",
    [
      102,
      108
    ]
  ],
  [
    [
      64259,
      64259
    ],
    "mapped",
    [
      102,
      102,
      105
    ]
  ],
  [
    [
      64260,
      64260
    ],
    "mapped",
    [
      102,
      102,
      108
    ]
  ],
  [
    [
      64261,
      64262
    ],
    "mapped",
    [
      115,
      116
    ]
  ],
  [
    [
      64263,
      64274
    ],
    "disallowed"
  ],
  [
    [
      64275,
      64275
    ],
    "mapped",
    [
      1396,
      1398
    ]
  ],
  [
    [
      64276,
      64276
    ],
    "mapped",
    [
      1396,
      1381
    ]
  ],
  [
    [
      64277,
      64277
    ],
    "mapped",
    [
      1396,
      1387
    ]
  ],
  [
    [
      64278,
      64278
    ],
    "mapped",
    [
      1406,
      1398
    ]
  ],
  [
    [
      64279,
      64279
    ],
    "mapped",
    [
      1396,
      1389
    ]
  ],
  [
    [
      64280,
      64284
    ],
    "disallowed"
  ],
  [
    [
      64285,
      64285
    ],
    "mapped",
    [
      1497,
      1460
    ]
  ],
  [
    [
      64286,
      64286
    ],
    "valid"
  ],
  [
    [
      64287,
      64287
    ],
    "mapped",
    [
      1522,
      1463
    ]
  ],
  [
    [
      64288,
      64288
    ],
    "mapped",
    [
      1506
    ]
  ],
  [
    [
      64289,
      64289
    ],
    "mapped",
    [
      1488
    ]
  ],
  [
    [
      64290,
      64290
    ],
    "mapped",
    [
      1491
    ]
  ],
  [
    [
      64291,
      64291
    ],
    "mapped",
    [
      1492
    ]
  ],
  [
    [
      64292,
      64292
    ],
    "mapped",
    [
      1499
    ]
  ],
  [
    [
      64293,
      64293
    ],
    "mapped",
    [
      1500
    ]
  ],
  [
    [
      64294,
      64294
    ],
    "mapped",
    [
      1501
    ]
  ],
  [
    [
      64295,
      64295
    ],
    "mapped",
    [
      1512
    ]
  ],
  [
    [
      64296,
      64296
    ],
    "mapped",
    [
      1514
    ]
  ],
  [
    [
      64297,
      64297
    ],
    "disallowed_STD3_mapped",
    [
      43
    ]
  ],
  [
    [
      64298,
      64298
    ],
    "mapped",
    [
      1513,
      1473
    ]
  ],
  [
    [
      64299,
      64299
    ],
    "mapped",
    [
      1513,
      1474
    ]
  ],
  [
    [
      64300,
      64300
    ],
    "mapped",
    [
      1513,
      1468,
      1473
    ]
  ],
  [
    [
      64301,
      64301
    ],
    "mapped",
    [
      1513,
      1468,
      1474
    ]
  ],
  [
    [
      64302,
      64302
    ],
    "mapped",
    [
      1488,
      1463
    ]
  ],
  [
    [
      64303,
      64303
    ],
    "mapped",
    [
      1488,
      1464
    ]
  ],
  [
    [
      64304,
      64304
    ],
    "mapped",
    [
      1488,
      1468
    ]
  ],
  [
    [
      64305,
      64305
    ],
    "mapped",
    [
      1489,
      1468
    ]
  ],
  [
    [
      64306,
      64306
    ],
    "mapped",
    [
      1490,
      1468
    ]
  ],
  [
    [
      64307,
      64307
    ],
    "mapped",
    [
      1491,
      1468
    ]
  ],
  [
    [
      64308,
      64308
    ],
    "mapped",
    [
      1492,
      1468
    ]
  ],
  [
    [
      64309,
      64309
    ],
    "mapped",
    [
      1493,
      1468
    ]
  ],
  [
    [
      64310,
      64310
    ],
    "mapped",
    [
      1494,
      1468
    ]
  ],
  [
    [
      64311,
      64311
    ],
    "disallowed"
  ],
  [
    [
      64312,
      64312
    ],
    "mapped",
    [
      1496,
      1468
    ]
  ],
  [
    [
      64313,
      64313
    ],
    "mapped",
    [
      1497,
      1468
    ]
  ],
  [
    [
      64314,
      64314
    ],
    "mapped",
    [
      1498,
      1468
    ]
  ],
  [
    [
      64315,
      64315
    ],
    "mapped",
    [
      1499,
      1468
    ]
  ],
  [
    [
      64316,
      64316
    ],
    "mapped",
    [
      1500,
      1468
    ]
  ],
  [
    [
      64317,
      64317
    ],
    "disallowed"
  ],
  [
    [
      64318,
      64318
    ],
    "mapped",
    [
      1502,
      1468
    ]
  ],
  [
    [
      64319,
      64319
    ],
    "disallowed"
  ],
  [
    [
      64320,
      64320
    ],
    "mapped",
    [
      1504,
      1468
    ]
  ],
  [
    [
      64321,
      64321
    ],
    "mapped",
    [
      1505,
      1468
    ]
  ],
  [
    [
      64322,
      64322
    ],
    "disallowed"
  ],
  [
    [
      64323,
      64323
    ],
    "mapped",
    [
      1507,
      1468
    ]
  ],
  [
    [
      64324,
      64324
    ],
    "mapped",
    [
      1508,
      1468
    ]
  ],
  [
    [
      64325,
      64325
    ],
    "disallowed"
  ],
  [
    [
      64326,
      64326
    ],
    "mapped",
    [
      1510,
      1468
    ]
  ],
  [
    [
      64327,
      64327
    ],
    "mapped",
    [
      1511,
      1468
    ]
  ],
  [
    [
      64328,
      64328
    ],
    "mapped",
    [
      1512,
      1468
    ]
  ],
  [
    [
      64329,
      64329
    ],
    "mapped",
    [
      1513,
      1468
    ]
  ],
  [
    [
      64330,
      64330
    ],
    "mapped",
    [
      1514,
      1468
    ]
  ],
  [
    [
      64331,
      64331
    ],
    "mapped",
    [
      1493,
      1465
    ]
  ],
  [
    [
      64332,
      64332
    ],
    "mapped",
    [
      1489,
      1471
    ]
  ],
  [
    [
      64333,
      64333
    ],
    "mapped",
    [
      1499,
      1471
    ]
  ],
  [
    [
      64334,
      64334
    ],
    "mapped",
    [
      1508,
      1471
    ]
  ],
  [
    [
      64335,
      64335
    ],
    "mapped",
    [
      1488,
      1500
    ]
  ],
  [
    [
      64336,
      64337
    ],
    "mapped",
    [
      1649
    ]
  ],
  [
    [
      64338,
      64341
    ],
    "mapped",
    [
      1659
    ]
  ],
  [
    [
      64342,
      64345
    ],
    "mapped",
    [
      1662
    ]
  ],
  [
    [
      64346,
      64349
    ],
    "mapped",
    [
      1664
    ]
  ],
  [
    [
      64350,
      64353
    ],
    "mapped",
    [
      1658
    ]
  ],
  [
    [
      64354,
      64357
    ],
    "mapped",
    [
      1663
    ]
  ],
  [
    [
      64358,
      64361
    ],
    "mapped",
    [
      1657
    ]
  ],
  [
    [
      64362,
      64365
    ],
    "mapped",
    [
      1700
    ]
  ],
  [
    [
      64366,
      64369
    ],
    "mapped",
    [
      1702
    ]
  ],
  [
    [
      64370,
      64373
    ],
    "mapped",
    [
      1668
    ]
  ],
  [
    [
      64374,
      64377
    ],
    "mapped",
    [
      1667
    ]
  ],
  [
    [
      64378,
      64381
    ],
    "mapped",
    [
      1670
    ]
  ],
  [
    [
      64382,
      64385
    ],
    "mapped",
    [
      1671
    ]
  ],
  [
    [
      64386,
      64387
    ],
    "mapped",
    [
      1677
    ]
  ],
  [
    [
      64388,
      64389
    ],
    "mapped",
    [
      1676
    ]
  ],
  [
    [
      64390,
      64391
    ],
    "mapped",
    [
      1678
    ]
  ],
  [
    [
      64392,
      64393
    ],
    "mapped",
    [
      1672
    ]
  ],
  [
    [
      64394,
      64395
    ],
    "mapped",
    [
      1688
    ]
  ],
  [
    [
      64396,
      64397
    ],
    "mapped",
    [
      1681
    ]
  ],
  [
    [
      64398,
      64401
    ],
    "mapped",
    [
      1705
    ]
  ],
  [
    [
      64402,
      64405
    ],
    "mapped",
    [
      1711
    ]
  ],
  [
    [
      64406,
      64409
    ],
    "mapped",
    [
      1715
    ]
  ],
  [
    [
      64410,
      64413
    ],
    "mapped",
    [
      1713
    ]
  ],
  [
    [
      64414,
      64415
    ],
    "mapped",
    [
      1722
    ]
  ],
  [
    [
      64416,
      64419
    ],
    "mapped",
    [
      1723
    ]
  ],
  [
    [
      64420,
      64421
    ],
    "mapped",
    [
      1728
    ]
  ],
  [
    [
      64422,
      64425
    ],
    "mapped",
    [
      1729
    ]
  ],
  [
    [
      64426,
      64429
    ],
    "mapped",
    [
      1726
    ]
  ],
  [
    [
      64430,
      64431
    ],
    "mapped",
    [
      1746
    ]
  ],
  [
    [
      64432,
      64433
    ],
    "mapped",
    [
      1747
    ]
  ],
  [
    [
      64434,
      64449
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      64450,
      64466
    ],
    "disallowed"
  ],
  [
    [
      64467,
      64470
    ],
    "mapped",
    [
      1709
    ]
  ],
  [
    [
      64471,
      64472
    ],
    "mapped",
    [
      1735
    ]
  ],
  [
    [
      64473,
      64474
    ],
    "mapped",
    [
      1734
    ]
  ],
  [
    [
      64475,
      64476
    ],
    "mapped",
    [
      1736
    ]
  ],
  [
    [
      64477,
      64477
    ],
    "mapped",
    [
      1735,
      1652
    ]
  ],
  [
    [
      64478,
      64479
    ],
    "mapped",
    [
      1739
    ]
  ],
  [
    [
      64480,
      64481
    ],
    "mapped",
    [
      1733
    ]
  ],
  [
    [
      64482,
      64483
    ],
    "mapped",
    [
      1737
    ]
  ],
  [
    [
      64484,
      64487
    ],
    "mapped",
    [
      1744
    ]
  ],
  [
    [
      64488,
      64489
    ],
    "mapped",
    [
      1609
    ]
  ],
  [
    [
      64490,
      64491
    ],
    "mapped",
    [
      1574,
      1575
    ]
  ],
  [
    [
      64492,
      64493
    ],
    "mapped",
    [
      1574,
      1749
    ]
  ],
  [
    [
      64494,
      64495
    ],
    "mapped",
    [
      1574,
      1608
    ]
  ],
  [
    [
      64496,
      64497
    ],
    "mapped",
    [
      1574,
      1735
    ]
  ],
  [
    [
      64498,
      64499
    ],
    "mapped",
    [
      1574,
      1734
    ]
  ],
  [
    [
      64500,
      64501
    ],
    "mapped",
    [
      1574,
      1736
    ]
  ],
  [
    [
      64502,
      64504
    ],
    "mapped",
    [
      1574,
      1744
    ]
  ],
  [
    [
      64505,
      64507
    ],
    "mapped",
    [
      1574,
      1609
    ]
  ],
  [
    [
      64508,
      64511
    ],
    "mapped",
    [
      1740
    ]
  ],
  [
    [
      64512,
      64512
    ],
    "mapped",
    [
      1574,
      1580
    ]
  ],
  [
    [
      64513,
      64513
    ],
    "mapped",
    [
      1574,
      1581
    ]
  ],
  [
    [
      64514,
      64514
    ],
    "mapped",
    [
      1574,
      1605
    ]
  ],
  [
    [
      64515,
      64515
    ],
    "mapped",
    [
      1574,
      1609
    ]
  ],
  [
    [
      64516,
      64516
    ],
    "mapped",
    [
      1574,
      1610
    ]
  ],
  [
    [
      64517,
      64517
    ],
    "mapped",
    [
      1576,
      1580
    ]
  ],
  [
    [
      64518,
      64518
    ],
    "mapped",
    [
      1576,
      1581
    ]
  ],
  [
    [
      64519,
      64519
    ],
    "mapped",
    [
      1576,
      1582
    ]
  ],
  [
    [
      64520,
      64520
    ],
    "mapped",
    [
      1576,
      1605
    ]
  ],
  [
    [
      64521,
      64521
    ],
    "mapped",
    [
      1576,
      1609
    ]
  ],
  [
    [
      64522,
      64522
    ],
    "mapped",
    [
      1576,
      1610
    ]
  ],
  [
    [
      64523,
      64523
    ],
    "mapped",
    [
      1578,
      1580
    ]
  ],
  [
    [
      64524,
      64524
    ],
    "mapped",
    [
      1578,
      1581
    ]
  ],
  [
    [
      64525,
      64525
    ],
    "mapped",
    [
      1578,
      1582
    ]
  ],
  [
    [
      64526,
      64526
    ],
    "mapped",
    [
      1578,
      1605
    ]
  ],
  [
    [
      64527,
      64527
    ],
    "mapped",
    [
      1578,
      1609
    ]
  ],
  [
    [
      64528,
      64528
    ],
    "mapped",
    [
      1578,
      1610
    ]
  ],
  [
    [
      64529,
      64529
    ],
    "mapped",
    [
      1579,
      1580
    ]
  ],
  [
    [
      64530,
      64530
    ],
    "mapped",
    [
      1579,
      1605
    ]
  ],
  [
    [
      64531,
      64531
    ],
    "mapped",
    [
      1579,
      1609
    ]
  ],
  [
    [
      64532,
      64532
    ],
    "mapped",
    [
      1579,
      1610
    ]
  ],
  [
    [
      64533,
      64533
    ],
    "mapped",
    [
      1580,
      1581
    ]
  ],
  [
    [
      64534,
      64534
    ],
    "mapped",
    [
      1580,
      1605
    ]
  ],
  [
    [
      64535,
      64535
    ],
    "mapped",
    [
      1581,
      1580
    ]
  ],
  [
    [
      64536,
      64536
    ],
    "mapped",
    [
      1581,
      1605
    ]
  ],
  [
    [
      64537,
      64537
    ],
    "mapped",
    [
      1582,
      1580
    ]
  ],
  [
    [
      64538,
      64538
    ],
    "mapped",
    [
      1582,
      1581
    ]
  ],
  [
    [
      64539,
      64539
    ],
    "mapped",
    [
      1582,
      1605
    ]
  ],
  [
    [
      64540,
      64540
    ],
    "mapped",
    [
      1587,
      1580
    ]
  ],
  [
    [
      64541,
      64541
    ],
    "mapped",
    [
      1587,
      1581
    ]
  ],
  [
    [
      64542,
      64542
    ],
    "mapped",
    [
      1587,
      1582
    ]
  ],
  [
    [
      64543,
      64543
    ],
    "mapped",
    [
      1587,
      1605
    ]
  ],
  [
    [
      64544,
      64544
    ],
    "mapped",
    [
      1589,
      1581
    ]
  ],
  [
    [
      64545,
      64545
    ],
    "mapped",
    [
      1589,
      1605
    ]
  ],
  [
    [
      64546,
      64546
    ],
    "mapped",
    [
      1590,
      1580
    ]
  ],
  [
    [
      64547,
      64547
    ],
    "mapped",
    [
      1590,
      1581
    ]
  ],
  [
    [
      64548,
      64548
    ],
    "mapped",
    [
      1590,
      1582
    ]
  ],
  [
    [
      64549,
      64549
    ],
    "mapped",
    [
      1590,
      1605
    ]
  ],
  [
    [
      64550,
      64550
    ],
    "mapped",
    [
      1591,
      1581
    ]
  ],
  [
    [
      64551,
      64551
    ],
    "mapped",
    [
      1591,
      1605
    ]
  ],
  [
    [
      64552,
      64552
    ],
    "mapped",
    [
      1592,
      1605
    ]
  ],
  [
    [
      64553,
      64553
    ],
    "mapped",
    [
      1593,
      1580
    ]
  ],
  [
    [
      64554,
      64554
    ],
    "mapped",
    [
      1593,
      1605
    ]
  ],
  [
    [
      64555,
      64555
    ],
    "mapped",
    [
      1594,
      1580
    ]
  ],
  [
    [
      64556,
      64556
    ],
    "mapped",
    [
      1594,
      1605
    ]
  ],
  [
    [
      64557,
      64557
    ],
    "mapped",
    [
      1601,
      1580
    ]
  ],
  [
    [
      64558,
      64558
    ],
    "mapped",
    [
      1601,
      1581
    ]
  ],
  [
    [
      64559,
      64559
    ],
    "mapped",
    [
      1601,
      1582
    ]
  ],
  [
    [
      64560,
      64560
    ],
    "mapped",
    [
      1601,
      1605
    ]
  ],
  [
    [
      64561,
      64561
    ],
    "mapped",
    [
      1601,
      1609
    ]
  ],
  [
    [
      64562,
      64562
    ],
    "mapped",
    [
      1601,
      1610
    ]
  ],
  [
    [
      64563,
      64563
    ],
    "mapped",
    [
      1602,
      1581
    ]
  ],
  [
    [
      64564,
      64564
    ],
    "mapped",
    [
      1602,
      1605
    ]
  ],
  [
    [
      64565,
      64565
    ],
    "mapped",
    [
      1602,
      1609
    ]
  ],
  [
    [
      64566,
      64566
    ],
    "mapped",
    [
      1602,
      1610
    ]
  ],
  [
    [
      64567,
      64567
    ],
    "mapped",
    [
      1603,
      1575
    ]
  ],
  [
    [
      64568,
      64568
    ],
    "mapped",
    [
      1603,
      1580
    ]
  ],
  [
    [
      64569,
      64569
    ],
    "mapped",
    [
      1603,
      1581
    ]
  ],
  [
    [
      64570,
      64570
    ],
    "mapped",
    [
      1603,
      1582
    ]
  ],
  [
    [
      64571,
      64571
    ],
    "mapped",
    [
      1603,
      1604
    ]
  ],
  [
    [
      64572,
      64572
    ],
    "mapped",
    [
      1603,
      1605
    ]
  ],
  [
    [
      64573,
      64573
    ],
    "mapped",
    [
      1603,
      1609
    ]
  ],
  [
    [
      64574,
      64574
    ],
    "mapped",
    [
      1603,
      1610
    ]
  ],
  [
    [
      64575,
      64575
    ],
    "mapped",
    [
      1604,
      1580
    ]
  ],
  [
    [
      64576,
      64576
    ],
    "mapped",
    [
      1604,
      1581
    ]
  ],
  [
    [
      64577,
      64577
    ],
    "mapped",
    [
      1604,
      1582
    ]
  ],
  [
    [
      64578,
      64578
    ],
    "mapped",
    [
      1604,
      1605
    ]
  ],
  [
    [
      64579,
      64579
    ],
    "mapped",
    [
      1604,
      1609
    ]
  ],
  [
    [
      64580,
      64580
    ],
    "mapped",
    [
      1604,
      1610
    ]
  ],
  [
    [
      64581,
      64581
    ],
    "mapped",
    [
      1605,
      1580
    ]
  ],
  [
    [
      64582,
      64582
    ],
    "mapped",
    [
      1605,
      1581
    ]
  ],
  [
    [
      64583,
      64583
    ],
    "mapped",
    [
      1605,
      1582
    ]
  ],
  [
    [
      64584,
      64584
    ],
    "mapped",
    [
      1605,
      1605
    ]
  ],
  [
    [
      64585,
      64585
    ],
    "mapped",
    [
      1605,
      1609
    ]
  ],
  [
    [
      64586,
      64586
    ],
    "mapped",
    [
      1605,
      1610
    ]
  ],
  [
    [
      64587,
      64587
    ],
    "mapped",
    [
      1606,
      1580
    ]
  ],
  [
    [
      64588,
      64588
    ],
    "mapped",
    [
      1606,
      1581
    ]
  ],
  [
    [
      64589,
      64589
    ],
    "mapped",
    [
      1606,
      1582
    ]
  ],
  [
    [
      64590,
      64590
    ],
    "mapped",
    [
      1606,
      1605
    ]
  ],
  [
    [
      64591,
      64591
    ],
    "mapped",
    [
      1606,
      1609
    ]
  ],
  [
    [
      64592,
      64592
    ],
    "mapped",
    [
      1606,
      1610
    ]
  ],
  [
    [
      64593,
      64593
    ],
    "mapped",
    [
      1607,
      1580
    ]
  ],
  [
    [
      64594,
      64594
    ],
    "mapped",
    [
      1607,
      1605
    ]
  ],
  [
    [
      64595,
      64595
    ],
    "mapped",
    [
      1607,
      1609
    ]
  ],
  [
    [
      64596,
      64596
    ],
    "mapped",
    [
      1607,
      1610
    ]
  ],
  [
    [
      64597,
      64597
    ],
    "mapped",
    [
      1610,
      1580
    ]
  ],
  [
    [
      64598,
      64598
    ],
    "mapped",
    [
      1610,
      1581
    ]
  ],
  [
    [
      64599,
      64599
    ],
    "mapped",
    [
      1610,
      1582
    ]
  ],
  [
    [
      64600,
      64600
    ],
    "mapped",
    [
      1610,
      1605
    ]
  ],
  [
    [
      64601,
      64601
    ],
    "mapped",
    [
      1610,
      1609
    ]
  ],
  [
    [
      64602,
      64602
    ],
    "mapped",
    [
      1610,
      1610
    ]
  ],
  [
    [
      64603,
      64603
    ],
    "mapped",
    [
      1584,
      1648
    ]
  ],
  [
    [
      64604,
      64604
    ],
    "mapped",
    [
      1585,
      1648
    ]
  ],
  [
    [
      64605,
      64605
    ],
    "mapped",
    [
      1609,
      1648
    ]
  ],
  [
    [
      64606,
      64606
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1612,
      1617
    ]
  ],
  [
    [
      64607,
      64607
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1613,
      1617
    ]
  ],
  [
    [
      64608,
      64608
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1614,
      1617
    ]
  ],
  [
    [
      64609,
      64609
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1615,
      1617
    ]
  ],
  [
    [
      64610,
      64610
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1616,
      1617
    ]
  ],
  [
    [
      64611,
      64611
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1617,
      1648
    ]
  ],
  [
    [
      64612,
      64612
    ],
    "mapped",
    [
      1574,
      1585
    ]
  ],
  [
    [
      64613,
      64613
    ],
    "mapped",
    [
      1574,
      1586
    ]
  ],
  [
    [
      64614,
      64614
    ],
    "mapped",
    [
      1574,
      1605
    ]
  ],
  [
    [
      64615,
      64615
    ],
    "mapped",
    [
      1574,
      1606
    ]
  ],
  [
    [
      64616,
      64616
    ],
    "mapped",
    [
      1574,
      1609
    ]
  ],
  [
    [
      64617,
      64617
    ],
    "mapped",
    [
      1574,
      1610
    ]
  ],
  [
    [
      64618,
      64618
    ],
    "mapped",
    [
      1576,
      1585
    ]
  ],
  [
    [
      64619,
      64619
    ],
    "mapped",
    [
      1576,
      1586
    ]
  ],
  [
    [
      64620,
      64620
    ],
    "mapped",
    [
      1576,
      1605
    ]
  ],
  [
    [
      64621,
      64621
    ],
    "mapped",
    [
      1576,
      1606
    ]
  ],
  [
    [
      64622,
      64622
    ],
    "mapped",
    [
      1576,
      1609
    ]
  ],
  [
    [
      64623,
      64623
    ],
    "mapped",
    [
      1576,
      1610
    ]
  ],
  [
    [
      64624,
      64624
    ],
    "mapped",
    [
      1578,
      1585
    ]
  ],
  [
    [
      64625,
      64625
    ],
    "mapped",
    [
      1578,
      1586
    ]
  ],
  [
    [
      64626,
      64626
    ],
    "mapped",
    [
      1578,
      1605
    ]
  ],
  [
    [
      64627,
      64627
    ],
    "mapped",
    [
      1578,
      1606
    ]
  ],
  [
    [
      64628,
      64628
    ],
    "mapped",
    [
      1578,
      1609
    ]
  ],
  [
    [
      64629,
      64629
    ],
    "mapped",
    [
      1578,
      1610
    ]
  ],
  [
    [
      64630,
      64630
    ],
    "mapped",
    [
      1579,
      1585
    ]
  ],
  [
    [
      64631,
      64631
    ],
    "mapped",
    [
      1579,
      1586
    ]
  ],
  [
    [
      64632,
      64632
    ],
    "mapped",
    [
      1579,
      1605
    ]
  ],
  [
    [
      64633,
      64633
    ],
    "mapped",
    [
      1579,
      1606
    ]
  ],
  [
    [
      64634,
      64634
    ],
    "mapped",
    [
      1579,
      1609
    ]
  ],
  [
    [
      64635,
      64635
    ],
    "mapped",
    [
      1579,
      1610
    ]
  ],
  [
    [
      64636,
      64636
    ],
    "mapped",
    [
      1601,
      1609
    ]
  ],
  [
    [
      64637,
      64637
    ],
    "mapped",
    [
      1601,
      1610
    ]
  ],
  [
    [
      64638,
      64638
    ],
    "mapped",
    [
      1602,
      1609
    ]
  ],
  [
    [
      64639,
      64639
    ],
    "mapped",
    [
      1602,
      1610
    ]
  ],
  [
    [
      64640,
      64640
    ],
    "mapped",
    [
      1603,
      1575
    ]
  ],
  [
    [
      64641,
      64641
    ],
    "mapped",
    [
      1603,
      1604
    ]
  ],
  [
    [
      64642,
      64642
    ],
    "mapped",
    [
      1603,
      1605
    ]
  ],
  [
    [
      64643,
      64643
    ],
    "mapped",
    [
      1603,
      1609
    ]
  ],
  [
    [
      64644,
      64644
    ],
    "mapped",
    [
      1603,
      1610
    ]
  ],
  [
    [
      64645,
      64645
    ],
    "mapped",
    [
      1604,
      1605
    ]
  ],
  [
    [
      64646,
      64646
    ],
    "mapped",
    [
      1604,
      1609
    ]
  ],
  [
    [
      64647,
      64647
    ],
    "mapped",
    [
      1604,
      1610
    ]
  ],
  [
    [
      64648,
      64648
    ],
    "mapped",
    [
      1605,
      1575
    ]
  ],
  [
    [
      64649,
      64649
    ],
    "mapped",
    [
      1605,
      1605
    ]
  ],
  [
    [
      64650,
      64650
    ],
    "mapped",
    [
      1606,
      1585
    ]
  ],
  [
    [
      64651,
      64651
    ],
    "mapped",
    [
      1606,
      1586
    ]
  ],
  [
    [
      64652,
      64652
    ],
    "mapped",
    [
      1606,
      1605
    ]
  ],
  [
    [
      64653,
      64653
    ],
    "mapped",
    [
      1606,
      1606
    ]
  ],
  [
    [
      64654,
      64654
    ],
    "mapped",
    [
      1606,
      1609
    ]
  ],
  [
    [
      64655,
      64655
    ],
    "mapped",
    [
      1606,
      1610
    ]
  ],
  [
    [
      64656,
      64656
    ],
    "mapped",
    [
      1609,
      1648
    ]
  ],
  [
    [
      64657,
      64657
    ],
    "mapped",
    [
      1610,
      1585
    ]
  ],
  [
    [
      64658,
      64658
    ],
    "mapped",
    [
      1610,
      1586
    ]
  ],
  [
    [
      64659,
      64659
    ],
    "mapped",
    [
      1610,
      1605
    ]
  ],
  [
    [
      64660,
      64660
    ],
    "mapped",
    [
      1610,
      1606
    ]
  ],
  [
    [
      64661,
      64661
    ],
    "mapped",
    [
      1610,
      1609
    ]
  ],
  [
    [
      64662,
      64662
    ],
    "mapped",
    [
      1610,
      1610
    ]
  ],
  [
    [
      64663,
      64663
    ],
    "mapped",
    [
      1574,
      1580
    ]
  ],
  [
    [
      64664,
      64664
    ],
    "mapped",
    [
      1574,
      1581
    ]
  ],
  [
    [
      64665,
      64665
    ],
    "mapped",
    [
      1574,
      1582
    ]
  ],
  [
    [
      64666,
      64666
    ],
    "mapped",
    [
      1574,
      1605
    ]
  ],
  [
    [
      64667,
      64667
    ],
    "mapped",
    [
      1574,
      1607
    ]
  ],
  [
    [
      64668,
      64668
    ],
    "mapped",
    [
      1576,
      1580
    ]
  ],
  [
    [
      64669,
      64669
    ],
    "mapped",
    [
      1576,
      1581
    ]
  ],
  [
    [
      64670,
      64670
    ],
    "mapped",
    [
      1576,
      1582
    ]
  ],
  [
    [
      64671,
      64671
    ],
    "mapped",
    [
      1576,
      1605
    ]
  ],
  [
    [
      64672,
      64672
    ],
    "mapped",
    [
      1576,
      1607
    ]
  ],
  [
    [
      64673,
      64673
    ],
    "mapped",
    [
      1578,
      1580
    ]
  ],
  [
    [
      64674,
      64674
    ],
    "mapped",
    [
      1578,
      1581
    ]
  ],
  [
    [
      64675,
      64675
    ],
    "mapped",
    [
      1578,
      1582
    ]
  ],
  [
    [
      64676,
      64676
    ],
    "mapped",
    [
      1578,
      1605
    ]
  ],
  [
    [
      64677,
      64677
    ],
    "mapped",
    [
      1578,
      1607
    ]
  ],
  [
    [
      64678,
      64678
    ],
    "mapped",
    [
      1579,
      1605
    ]
  ],
  [
    [
      64679,
      64679
    ],
    "mapped",
    [
      1580,
      1581
    ]
  ],
  [
    [
      64680,
      64680
    ],
    "mapped",
    [
      1580,
      1605
    ]
  ],
  [
    [
      64681,
      64681
    ],
    "mapped",
    [
      1581,
      1580
    ]
  ],
  [
    [
      64682,
      64682
    ],
    "mapped",
    [
      1581,
      1605
    ]
  ],
  [
    [
      64683,
      64683
    ],
    "mapped",
    [
      1582,
      1580
    ]
  ],
  [
    [
      64684,
      64684
    ],
    "mapped",
    [
      1582,
      1605
    ]
  ],
  [
    [
      64685,
      64685
    ],
    "mapped",
    [
      1587,
      1580
    ]
  ],
  [
    [
      64686,
      64686
    ],
    "mapped",
    [
      1587,
      1581
    ]
  ],
  [
    [
      64687,
      64687
    ],
    "mapped",
    [
      1587,
      1582
    ]
  ],
  [
    [
      64688,
      64688
    ],
    "mapped",
    [
      1587,
      1605
    ]
  ],
  [
    [
      64689,
      64689
    ],
    "mapped",
    [
      1589,
      1581
    ]
  ],
  [
    [
      64690,
      64690
    ],
    "mapped",
    [
      1589,
      1582
    ]
  ],
  [
    [
      64691,
      64691
    ],
    "mapped",
    [
      1589,
      1605
    ]
  ],
  [
    [
      64692,
      64692
    ],
    "mapped",
    [
      1590,
      1580
    ]
  ],
  [
    [
      64693,
      64693
    ],
    "mapped",
    [
      1590,
      1581
    ]
  ],
  [
    [
      64694,
      64694
    ],
    "mapped",
    [
      1590,
      1582
    ]
  ],
  [
    [
      64695,
      64695
    ],
    "mapped",
    [
      1590,
      1605
    ]
  ],
  [
    [
      64696,
      64696
    ],
    "mapped",
    [
      1591,
      1581
    ]
  ],
  [
    [
      64697,
      64697
    ],
    "mapped",
    [
      1592,
      1605
    ]
  ],
  [
    [
      64698,
      64698
    ],
    "mapped",
    [
      1593,
      1580
    ]
  ],
  [
    [
      64699,
      64699
    ],
    "mapped",
    [
      1593,
      1605
    ]
  ],
  [
    [
      64700,
      64700
    ],
    "mapped",
    [
      1594,
      1580
    ]
  ],
  [
    [
      64701,
      64701
    ],
    "mapped",
    [
      1594,
      1605
    ]
  ],
  [
    [
      64702,
      64702
    ],
    "mapped",
    [
      1601,
      1580
    ]
  ],
  [
    [
      64703,
      64703
    ],
    "mapped",
    [
      1601,
      1581
    ]
  ],
  [
    [
      64704,
      64704
    ],
    "mapped",
    [
      1601,
      1582
    ]
  ],
  [
    [
      64705,
      64705
    ],
    "mapped",
    [
      1601,
      1605
    ]
  ],
  [
    [
      64706,
      64706
    ],
    "mapped",
    [
      1602,
      1581
    ]
  ],
  [
    [
      64707,
      64707
    ],
    "mapped",
    [
      1602,
      1605
    ]
  ],
  [
    [
      64708,
      64708
    ],
    "mapped",
    [
      1603,
      1580
    ]
  ],
  [
    [
      64709,
      64709
    ],
    "mapped",
    [
      1603,
      1581
    ]
  ],
  [
    [
      64710,
      64710
    ],
    "mapped",
    [
      1603,
      1582
    ]
  ],
  [
    [
      64711,
      64711
    ],
    "mapped",
    [
      1603,
      1604
    ]
  ],
  [
    [
      64712,
      64712
    ],
    "mapped",
    [
      1603,
      1605
    ]
  ],
  [
    [
      64713,
      64713
    ],
    "mapped",
    [
      1604,
      1580
    ]
  ],
  [
    [
      64714,
      64714
    ],
    "mapped",
    [
      1604,
      1581
    ]
  ],
  [
    [
      64715,
      64715
    ],
    "mapped",
    [
      1604,
      1582
    ]
  ],
  [
    [
      64716,
      64716
    ],
    "mapped",
    [
      1604,
      1605
    ]
  ],
  [
    [
      64717,
      64717
    ],
    "mapped",
    [
      1604,
      1607
    ]
  ],
  [
    [
      64718,
      64718
    ],
    "mapped",
    [
      1605,
      1580
    ]
  ],
  [
    [
      64719,
      64719
    ],
    "mapped",
    [
      1605,
      1581
    ]
  ],
  [
    [
      64720,
      64720
    ],
    "mapped",
    [
      1605,
      1582
    ]
  ],
  [
    [
      64721,
      64721
    ],
    "mapped",
    [
      1605,
      1605
    ]
  ],
  [
    [
      64722,
      64722
    ],
    "mapped",
    [
      1606,
      1580
    ]
  ],
  [
    [
      64723,
      64723
    ],
    "mapped",
    [
      1606,
      1581
    ]
  ],
  [
    [
      64724,
      64724
    ],
    "mapped",
    [
      1606,
      1582
    ]
  ],
  [
    [
      64725,
      64725
    ],
    "mapped",
    [
      1606,
      1605
    ]
  ],
  [
    [
      64726,
      64726
    ],
    "mapped",
    [
      1606,
      1607
    ]
  ],
  [
    [
      64727,
      64727
    ],
    "mapped",
    [
      1607,
      1580
    ]
  ],
  [
    [
      64728,
      64728
    ],
    "mapped",
    [
      1607,
      1605
    ]
  ],
  [
    [
      64729,
      64729
    ],
    "mapped",
    [
      1607,
      1648
    ]
  ],
  [
    [
      64730,
      64730
    ],
    "mapped",
    [
      1610,
      1580
    ]
  ],
  [
    [
      64731,
      64731
    ],
    "mapped",
    [
      1610,
      1581
    ]
  ],
  [
    [
      64732,
      64732
    ],
    "mapped",
    [
      1610,
      1582
    ]
  ],
  [
    [
      64733,
      64733
    ],
    "mapped",
    [
      1610,
      1605
    ]
  ],
  [
    [
      64734,
      64734
    ],
    "mapped",
    [
      1610,
      1607
    ]
  ],
  [
    [
      64735,
      64735
    ],
    "mapped",
    [
      1574,
      1605
    ]
  ],
  [
    [
      64736,
      64736
    ],
    "mapped",
    [
      1574,
      1607
    ]
  ],
  [
    [
      64737,
      64737
    ],
    "mapped",
    [
      1576,
      1605
    ]
  ],
  [
    [
      64738,
      64738
    ],
    "mapped",
    [
      1576,
      1607
    ]
  ],
  [
    [
      64739,
      64739
    ],
    "mapped",
    [
      1578,
      1605
    ]
  ],
  [
    [
      64740,
      64740
    ],
    "mapped",
    [
      1578,
      1607
    ]
  ],
  [
    [
      64741,
      64741
    ],
    "mapped",
    [
      1579,
      1605
    ]
  ],
  [
    [
      64742,
      64742
    ],
    "mapped",
    [
      1579,
      1607
    ]
  ],
  [
    [
      64743,
      64743
    ],
    "mapped",
    [
      1587,
      1605
    ]
  ],
  [
    [
      64744,
      64744
    ],
    "mapped",
    [
      1587,
      1607
    ]
  ],
  [
    [
      64745,
      64745
    ],
    "mapped",
    [
      1588,
      1605
    ]
  ],
  [
    [
      64746,
      64746
    ],
    "mapped",
    [
      1588,
      1607
    ]
  ],
  [
    [
      64747,
      64747
    ],
    "mapped",
    [
      1603,
      1604
    ]
  ],
  [
    [
      64748,
      64748
    ],
    "mapped",
    [
      1603,
      1605
    ]
  ],
  [
    [
      64749,
      64749
    ],
    "mapped",
    [
      1604,
      1605
    ]
  ],
  [
    [
      64750,
      64750
    ],
    "mapped",
    [
      1606,
      1605
    ]
  ],
  [
    [
      64751,
      64751
    ],
    "mapped",
    [
      1606,
      1607
    ]
  ],
  [
    [
      64752,
      64752
    ],
    "mapped",
    [
      1610,
      1605
    ]
  ],
  [
    [
      64753,
      64753
    ],
    "mapped",
    [
      1610,
      1607
    ]
  ],
  [
    [
      64754,
      64754
    ],
    "mapped",
    [
      1600,
      1614,
      1617
    ]
  ],
  [
    [
      64755,
      64755
    ],
    "mapped",
    [
      1600,
      1615,
      1617
    ]
  ],
  [
    [
      64756,
      64756
    ],
    "mapped",
    [
      1600,
      1616,
      1617
    ]
  ],
  [
    [
      64757,
      64757
    ],
    "mapped",
    [
      1591,
      1609
    ]
  ],
  [
    [
      64758,
      64758
    ],
    "mapped",
    [
      1591,
      1610
    ]
  ],
  [
    [
      64759,
      64759
    ],
    "mapped",
    [
      1593,
      1609
    ]
  ],
  [
    [
      64760,
      64760
    ],
    "mapped",
    [
      1593,
      1610
    ]
  ],
  [
    [
      64761,
      64761
    ],
    "mapped",
    [
      1594,
      1609
    ]
  ],
  [
    [
      64762,
      64762
    ],
    "mapped",
    [
      1594,
      1610
    ]
  ],
  [
    [
      64763,
      64763
    ],
    "mapped",
    [
      1587,
      1609
    ]
  ],
  [
    [
      64764,
      64764
    ],
    "mapped",
    [
      1587,
      1610
    ]
  ],
  [
    [
      64765,
      64765
    ],
    "mapped",
    [
      1588,
      1609
    ]
  ],
  [
    [
      64766,
      64766
    ],
    "mapped",
    [
      1588,
      1610
    ]
  ],
  [
    [
      64767,
      64767
    ],
    "mapped",
    [
      1581,
      1609
    ]
  ],
  [
    [
      64768,
      64768
    ],
    "mapped",
    [
      1581,
      1610
    ]
  ],
  [
    [
      64769,
      64769
    ],
    "mapped",
    [
      1580,
      1609
    ]
  ],
  [
    [
      64770,
      64770
    ],
    "mapped",
    [
      1580,
      1610
    ]
  ],
  [
    [
      64771,
      64771
    ],
    "mapped",
    [
      1582,
      1609
    ]
  ],
  [
    [
      64772,
      64772
    ],
    "mapped",
    [
      1582,
      1610
    ]
  ],
  [
    [
      64773,
      64773
    ],
    "mapped",
    [
      1589,
      1609
    ]
  ],
  [
    [
      64774,
      64774
    ],
    "mapped",
    [
      1589,
      1610
    ]
  ],
  [
    [
      64775,
      64775
    ],
    "mapped",
    [
      1590,
      1609
    ]
  ],
  [
    [
      64776,
      64776
    ],
    "mapped",
    [
      1590,
      1610
    ]
  ],
  [
    [
      64777,
      64777
    ],
    "mapped",
    [
      1588,
      1580
    ]
  ],
  [
    [
      64778,
      64778
    ],
    "mapped",
    [
      1588,
      1581
    ]
  ],
  [
    [
      64779,
      64779
    ],
    "mapped",
    [
      1588,
      1582
    ]
  ],
  [
    [
      64780,
      64780
    ],
    "mapped",
    [
      1588,
      1605
    ]
  ],
  [
    [
      64781,
      64781
    ],
    "mapped",
    [
      1588,
      1585
    ]
  ],
  [
    [
      64782,
      64782
    ],
    "mapped",
    [
      1587,
      1585
    ]
  ],
  [
    [
      64783,
      64783
    ],
    "mapped",
    [
      1589,
      1585
    ]
  ],
  [
    [
      64784,
      64784
    ],
    "mapped",
    [
      1590,
      1585
    ]
  ],
  [
    [
      64785,
      64785
    ],
    "mapped",
    [
      1591,
      1609
    ]
  ],
  [
    [
      64786,
      64786
    ],
    "mapped",
    [
      1591,
      1610
    ]
  ],
  [
    [
      64787,
      64787
    ],
    "mapped",
    [
      1593,
      1609
    ]
  ],
  [
    [
      64788,
      64788
    ],
    "mapped",
    [
      1593,
      1610
    ]
  ],
  [
    [
      64789,
      64789
    ],
    "mapped",
    [
      1594,
      1609
    ]
  ],
  [
    [
      64790,
      64790
    ],
    "mapped",
    [
      1594,
      1610
    ]
  ],
  [
    [
      64791,
      64791
    ],
    "mapped",
    [
      1587,
      1609
    ]
  ],
  [
    [
      64792,
      64792
    ],
    "mapped",
    [
      1587,
      1610
    ]
  ],
  [
    [
      64793,
      64793
    ],
    "mapped",
    [
      1588,
      1609
    ]
  ],
  [
    [
      64794,
      64794
    ],
    "mapped",
    [
      1588,
      1610
    ]
  ],
  [
    [
      64795,
      64795
    ],
    "mapped",
    [
      1581,
      1609
    ]
  ],
  [
    [
      64796,
      64796
    ],
    "mapped",
    [
      1581,
      1610
    ]
  ],
  [
    [
      64797,
      64797
    ],
    "mapped",
    [
      1580,
      1609
    ]
  ],
  [
    [
      64798,
      64798
    ],
    "mapped",
    [
      1580,
      1610
    ]
  ],
  [
    [
      64799,
      64799
    ],
    "mapped",
    [
      1582,
      1609
    ]
  ],
  [
    [
      64800,
      64800
    ],
    "mapped",
    [
      1582,
      1610
    ]
  ],
  [
    [
      64801,
      64801
    ],
    "mapped",
    [
      1589,
      1609
    ]
  ],
  [
    [
      64802,
      64802
    ],
    "mapped",
    [
      1589,
      1610
    ]
  ],
  [
    [
      64803,
      64803
    ],
    "mapped",
    [
      1590,
      1609
    ]
  ],
  [
    [
      64804,
      64804
    ],
    "mapped",
    [
      1590,
      1610
    ]
  ],
  [
    [
      64805,
      64805
    ],
    "mapped",
    [
      1588,
      1580
    ]
  ],
  [
    [
      64806,
      64806
    ],
    "mapped",
    [
      1588,
      1581
    ]
  ],
  [
    [
      64807,
      64807
    ],
    "mapped",
    [
      1588,
      1582
    ]
  ],
  [
    [
      64808,
      64808
    ],
    "mapped",
    [
      1588,
      1605
    ]
  ],
  [
    [
      64809,
      64809
    ],
    "mapped",
    [
      1588,
      1585
    ]
  ],
  [
    [
      64810,
      64810
    ],
    "mapped",
    [
      1587,
      1585
    ]
  ],
  [
    [
      64811,
      64811
    ],
    "mapped",
    [
      1589,
      1585
    ]
  ],
  [
    [
      64812,
      64812
    ],
    "mapped",
    [
      1590,
      1585
    ]
  ],
  [
    [
      64813,
      64813
    ],
    "mapped",
    [
      1588,
      1580
    ]
  ],
  [
    [
      64814,
      64814
    ],
    "mapped",
    [
      1588,
      1581
    ]
  ],
  [
    [
      64815,
      64815
    ],
    "mapped",
    [
      1588,
      1582
    ]
  ],
  [
    [
      64816,
      64816
    ],
    "mapped",
    [
      1588,
      1605
    ]
  ],
  [
    [
      64817,
      64817
    ],
    "mapped",
    [
      1587,
      1607
    ]
  ],
  [
    [
      64818,
      64818
    ],
    "mapped",
    [
      1588,
      1607
    ]
  ],
  [
    [
      64819,
      64819
    ],
    "mapped",
    [
      1591,
      1605
    ]
  ],
  [
    [
      64820,
      64820
    ],
    "mapped",
    [
      1587,
      1580
    ]
  ],
  [
    [
      64821,
      64821
    ],
    "mapped",
    [
      1587,
      1581
    ]
  ],
  [
    [
      64822,
      64822
    ],
    "mapped",
    [
      1587,
      1582
    ]
  ],
  [
    [
      64823,
      64823
    ],
    "mapped",
    [
      1588,
      1580
    ]
  ],
  [
    [
      64824,
      64824
    ],
    "mapped",
    [
      1588,
      1581
    ]
  ],
  [
    [
      64825,
      64825
    ],
    "mapped",
    [
      1588,
      1582
    ]
  ],
  [
    [
      64826,
      64826
    ],
    "mapped",
    [
      1591,
      1605
    ]
  ],
  [
    [
      64827,
      64827
    ],
    "mapped",
    [
      1592,
      1605
    ]
  ],
  [
    [
      64828,
      64829
    ],
    "mapped",
    [
      1575,
      1611
    ]
  ],
  [
    [
      64830,
      64831
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      64832,
      64847
    ],
    "disallowed"
  ],
  [
    [
      64848,
      64848
    ],
    "mapped",
    [
      1578,
      1580,
      1605
    ]
  ],
  [
    [
      64849,
      64850
    ],
    "mapped",
    [
      1578,
      1581,
      1580
    ]
  ],
  [
    [
      64851,
      64851
    ],
    "mapped",
    [
      1578,
      1581,
      1605
    ]
  ],
  [
    [
      64852,
      64852
    ],
    "mapped",
    [
      1578,
      1582,
      1605
    ]
  ],
  [
    [
      64853,
      64853
    ],
    "mapped",
    [
      1578,
      1605,
      1580
    ]
  ],
  [
    [
      64854,
      64854
    ],
    "mapped",
    [
      1578,
      1605,
      1581
    ]
  ],
  [
    [
      64855,
      64855
    ],
    "mapped",
    [
      1578,
      1605,
      1582
    ]
  ],
  [
    [
      64856,
      64857
    ],
    "mapped",
    [
      1580,
      1605,
      1581
    ]
  ],
  [
    [
      64858,
      64858
    ],
    "mapped",
    [
      1581,
      1605,
      1610
    ]
  ],
  [
    [
      64859,
      64859
    ],
    "mapped",
    [
      1581,
      1605,
      1609
    ]
  ],
  [
    [
      64860,
      64860
    ],
    "mapped",
    [
      1587,
      1581,
      1580
    ]
  ],
  [
    [
      64861,
      64861
    ],
    "mapped",
    [
      1587,
      1580,
      1581
    ]
  ],
  [
    [
      64862,
      64862
    ],
    "mapped",
    [
      1587,
      1580,
      1609
    ]
  ],
  [
    [
      64863,
      64864
    ],
    "mapped",
    [
      1587,
      1605,
      1581
    ]
  ],
  [
    [
      64865,
      64865
    ],
    "mapped",
    [
      1587,
      1605,
      1580
    ]
  ],
  [
    [
      64866,
      64867
    ],
    "mapped",
    [
      1587,
      1605,
      1605
    ]
  ],
  [
    [
      64868,
      64869
    ],
    "mapped",
    [
      1589,
      1581,
      1581
    ]
  ],
  [
    [
      64870,
      64870
    ],
    "mapped",
    [
      1589,
      1605,
      1605
    ]
  ],
  [
    [
      64871,
      64872
    ],
    "mapped",
    [
      1588,
      1581,
      1605
    ]
  ],
  [
    [
      64873,
      64873
    ],
    "mapped",
    [
      1588,
      1580,
      1610
    ]
  ],
  [
    [
      64874,
      64875
    ],
    "mapped",
    [
      1588,
      1605,
      1582
    ]
  ],
  [
    [
      64876,
      64877
    ],
    "mapped",
    [
      1588,
      1605,
      1605
    ]
  ],
  [
    [
      64878,
      64878
    ],
    "mapped",
    [
      1590,
      1581,
      1609
    ]
  ],
  [
    [
      64879,
      64880
    ],
    "mapped",
    [
      1590,
      1582,
      1605
    ]
  ],
  [
    [
      64881,
      64882
    ],
    "mapped",
    [
      1591,
      1605,
      1581
    ]
  ],
  [
    [
      64883,
      64883
    ],
    "mapped",
    [
      1591,
      1605,
      1605
    ]
  ],
  [
    [
      64884,
      64884
    ],
    "mapped",
    [
      1591,
      1605,
      1610
    ]
  ],
  [
    [
      64885,
      64885
    ],
    "mapped",
    [
      1593,
      1580,
      1605
    ]
  ],
  [
    [
      64886,
      64887
    ],
    "mapped",
    [
      1593,
      1605,
      1605
    ]
  ],
  [
    [
      64888,
      64888
    ],
    "mapped",
    [
      1593,
      1605,
      1609
    ]
  ],
  [
    [
      64889,
      64889
    ],
    "mapped",
    [
      1594,
      1605,
      1605
    ]
  ],
  [
    [
      64890,
      64890
    ],
    "mapped",
    [
      1594,
      1605,
      1610
    ]
  ],
  [
    [
      64891,
      64891
    ],
    "mapped",
    [
      1594,
      1605,
      1609
    ]
  ],
  [
    [
      64892,
      64893
    ],
    "mapped",
    [
      1601,
      1582,
      1605
    ]
  ],
  [
    [
      64894,
      64894
    ],
    "mapped",
    [
      1602,
      1605,
      1581
    ]
  ],
  [
    [
      64895,
      64895
    ],
    "mapped",
    [
      1602,
      1605,
      1605
    ]
  ],
  [
    [
      64896,
      64896
    ],
    "mapped",
    [
      1604,
      1581,
      1605
    ]
  ],
  [
    [
      64897,
      64897
    ],
    "mapped",
    [
      1604,
      1581,
      1610
    ]
  ],
  [
    [
      64898,
      64898
    ],
    "mapped",
    [
      1604,
      1581,
      1609
    ]
  ],
  [
    [
      64899,
      64900
    ],
    "mapped",
    [
      1604,
      1580,
      1580
    ]
  ],
  [
    [
      64901,
      64902
    ],
    "mapped",
    [
      1604,
      1582,
      1605
    ]
  ],
  [
    [
      64903,
      64904
    ],
    "mapped",
    [
      1604,
      1605,
      1581
    ]
  ],
  [
    [
      64905,
      64905
    ],
    "mapped",
    [
      1605,
      1581,
      1580
    ]
  ],
  [
    [
      64906,
      64906
    ],
    "mapped",
    [
      1605,
      1581,
      1605
    ]
  ],
  [
    [
      64907,
      64907
    ],
    "mapped",
    [
      1605,
      1581,
      1610
    ]
  ],
  [
    [
      64908,
      64908
    ],
    "mapped",
    [
      1605,
      1580,
      1581
    ]
  ],
  [
    [
      64909,
      64909
    ],
    "mapped",
    [
      1605,
      1580,
      1605
    ]
  ],
  [
    [
      64910,
      64910
    ],
    "mapped",
    [
      1605,
      1582,
      1580
    ]
  ],
  [
    [
      64911,
      64911
    ],
    "mapped",
    [
      1605,
      1582,
      1605
    ]
  ],
  [
    [
      64912,
      64913
    ],
    "disallowed"
  ],
  [
    [
      64914,
      64914
    ],
    "mapped",
    [
      1605,
      1580,
      1582
    ]
  ],
  [
    [
      64915,
      64915
    ],
    "mapped",
    [
      1607,
      1605,
      1580
    ]
  ],
  [
    [
      64916,
      64916
    ],
    "mapped",
    [
      1607,
      1605,
      1605
    ]
  ],
  [
    [
      64917,
      64917
    ],
    "mapped",
    [
      1606,
      1581,
      1605
    ]
  ],
  [
    [
      64918,
      64918
    ],
    "mapped",
    [
      1606,
      1581,
      1609
    ]
  ],
  [
    [
      64919,
      64920
    ],
    "mapped",
    [
      1606,
      1580,
      1605
    ]
  ],
  [
    [
      64921,
      64921
    ],
    "mapped",
    [
      1606,
      1580,
      1609
    ]
  ],
  [
    [
      64922,
      64922
    ],
    "mapped",
    [
      1606,
      1605,
      1610
    ]
  ],
  [
    [
      64923,
      64923
    ],
    "mapped",
    [
      1606,
      1605,
      1609
    ]
  ],
  [
    [
      64924,
      64925
    ],
    "mapped",
    [
      1610,
      1605,
      1605
    ]
  ],
  [
    [
      64926,
      64926
    ],
    "mapped",
    [
      1576,
      1582,
      1610
    ]
  ],
  [
    [
      64927,
      64927
    ],
    "mapped",
    [
      1578,
      1580,
      1610
    ]
  ],
  [
    [
      64928,
      64928
    ],
    "mapped",
    [
      1578,
      1580,
      1609
    ]
  ],
  [
    [
      64929,
      64929
    ],
    "mapped",
    [
      1578,
      1582,
      1610
    ]
  ],
  [
    [
      64930,
      64930
    ],
    "mapped",
    [
      1578,
      1582,
      1609
    ]
  ],
  [
    [
      64931,
      64931
    ],
    "mapped",
    [
      1578,
      1605,
      1610
    ]
  ],
  [
    [
      64932,
      64932
    ],
    "mapped",
    [
      1578,
      1605,
      1609
    ]
  ],
  [
    [
      64933,
      64933
    ],
    "mapped",
    [
      1580,
      1605,
      1610
    ]
  ],
  [
    [
      64934,
      64934
    ],
    "mapped",
    [
      1580,
      1581,
      1609
    ]
  ],
  [
    [
      64935,
      64935
    ],
    "mapped",
    [
      1580,
      1605,
      1609
    ]
  ],
  [
    [
      64936,
      64936
    ],
    "mapped",
    [
      1587,
      1582,
      1609
    ]
  ],
  [
    [
      64937,
      64937
    ],
    "mapped",
    [
      1589,
      1581,
      1610
    ]
  ],
  [
    [
      64938,
      64938
    ],
    "mapped",
    [
      1588,
      1581,
      1610
    ]
  ],
  [
    [
      64939,
      64939
    ],
    "mapped",
    [
      1590,
      1581,
      1610
    ]
  ],
  [
    [
      64940,
      64940
    ],
    "mapped",
    [
      1604,
      1580,
      1610
    ]
  ],
  [
    [
      64941,
      64941
    ],
    "mapped",
    [
      1604,
      1605,
      1610
    ]
  ],
  [
    [
      64942,
      64942
    ],
    "mapped",
    [
      1610,
      1581,
      1610
    ]
  ],
  [
    [
      64943,
      64943
    ],
    "mapped",
    [
      1610,
      1580,
      1610
    ]
  ],
  [
    [
      64944,
      64944
    ],
    "mapped",
    [
      1610,
      1605,
      1610
    ]
  ],
  [
    [
      64945,
      64945
    ],
    "mapped",
    [
      1605,
      1605,
      1610
    ]
  ],
  [
    [
      64946,
      64946
    ],
    "mapped",
    [
      1602,
      1605,
      1610
    ]
  ],
  [
    [
      64947,
      64947
    ],
    "mapped",
    [
      1606,
      1581,
      1610
    ]
  ],
  [
    [
      64948,
      64948
    ],
    "mapped",
    [
      1602,
      1605,
      1581
    ]
  ],
  [
    [
      64949,
      64949
    ],
    "mapped",
    [
      1604,
      1581,
      1605
    ]
  ],
  [
    [
      64950,
      64950
    ],
    "mapped",
    [
      1593,
      1605,
      1610
    ]
  ],
  [
    [
      64951,
      64951
    ],
    "mapped",
    [
      1603,
      1605,
      1610
    ]
  ],
  [
    [
      64952,
      64952
    ],
    "mapped",
    [
      1606,
      1580,
      1581
    ]
  ],
  [
    [
      64953,
      64953
    ],
    "mapped",
    [
      1605,
      1582,
      1610
    ]
  ],
  [
    [
      64954,
      64954
    ],
    "mapped",
    [
      1604,
      1580,
      1605
    ]
  ],
  [
    [
      64955,
      64955
    ],
    "mapped",
    [
      1603,
      1605,
      1605
    ]
  ],
  [
    [
      64956,
      64956
    ],
    "mapped",
    [
      1604,
      1580,
      1605
    ]
  ],
  [
    [
      64957,
      64957
    ],
    "mapped",
    [
      1606,
      1580,
      1581
    ]
  ],
  [
    [
      64958,
      64958
    ],
    "mapped",
    [
      1580,
      1581,
      1610
    ]
  ],
  [
    [
      64959,
      64959
    ],
    "mapped",
    [
      1581,
      1580,
      1610
    ]
  ],
  [
    [
      64960,
      64960
    ],
    "mapped",
    [
      1605,
      1580,
      1610
    ]
  ],
  [
    [
      64961,
      64961
    ],
    "mapped",
    [
      1601,
      1605,
      1610
    ]
  ],
  [
    [
      64962,
      64962
    ],
    "mapped",
    [
      1576,
      1581,
      1610
    ]
  ],
  [
    [
      64963,
      64963
    ],
    "mapped",
    [
      1603,
      1605,
      1605
    ]
  ],
  [
    [
      64964,
      64964
    ],
    "mapped",
    [
      1593,
      1580,
      1605
    ]
  ],
  [
    [
      64965,
      64965
    ],
    "mapped",
    [
      1589,
      1605,
      1605
    ]
  ],
  [
    [
      64966,
      64966
    ],
    "mapped",
    [
      1587,
      1582,
      1610
    ]
  ],
  [
    [
      64967,
      64967
    ],
    "mapped",
    [
      1606,
      1580,
      1610
    ]
  ],
  [
    [
      64968,
      64975
    ],
    "disallowed"
  ],
  [
    [
      64976,
      65007
    ],
    "disallowed"
  ],
  [
    [
      65008,
      65008
    ],
    "mapped",
    [
      1589,
      1604,
      1746
    ]
  ],
  [
    [
      65009,
      65009
    ],
    "mapped",
    [
      1602,
      1604,
      1746
    ]
  ],
  [
    [
      65010,
      65010
    ],
    "mapped",
    [
      1575,
      1604,
      1604,
      1607
    ]
  ],
  [
    [
      65011,
      65011
    ],
    "mapped",
    [
      1575,
      1603,
      1576,
      1585
    ]
  ],
  [
    [
      65012,
      65012
    ],
    "mapped",
    [
      1605,
      1581,
      1605,
      1583
    ]
  ],
  [
    [
      65013,
      65013
    ],
    "mapped",
    [
      1589,
      1604,
      1593,
      1605
    ]
  ],
  [
    [
      65014,
      65014
    ],
    "mapped",
    [
      1585,
      1587,
      1608,
      1604
    ]
  ],
  [
    [
      65015,
      65015
    ],
    "mapped",
    [
      1593,
      1604,
      1610,
      1607
    ]
  ],
  [
    [
      65016,
      65016
    ],
    "mapped",
    [
      1608,
      1587,
      1604,
      1605
    ]
  ],
  [
    [
      65017,
      65017
    ],
    "mapped",
    [
      1589,
      1604,
      1609
    ]
  ],
  [
    [
      65018,
      65018
    ],
    "disallowed_STD3_mapped",
    [
      1589,
      1604,
      1609,
      32,
      1575,
      1604,
      1604,
      1607,
      32,
      1593,
      1604,
      1610,
      1607,
      32,
      1608,
      1587,
      1604,
      1605
    ]
  ],
  [
    [
      65019,
      65019
    ],
    "disallowed_STD3_mapped",
    [
      1580,
      1604,
      32,
      1580,
      1604,
      1575,
      1604,
      1607
    ]
  ],
  [
    [
      65020,
      65020
    ],
    "mapped",
    [
      1585,
      1740,
      1575,
      1604
    ]
  ],
  [
    [
      65021,
      65021
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65022,
      65023
    ],
    "disallowed"
  ],
  [
    [
      65024,
      65039
    ],
    "ignored"
  ],
  [
    [
      65040,
      65040
    ],
    "disallowed_STD3_mapped",
    [
      44
    ]
  ],
  [
    [
      65041,
      65041
    ],
    "mapped",
    [
      12289
    ]
  ],
  [
    [
      65042,
      65042
    ],
    "disallowed"
  ],
  [
    [
      65043,
      65043
    ],
    "disallowed_STD3_mapped",
    [
      58
    ]
  ],
  [
    [
      65044,
      65044
    ],
    "disallowed_STD3_mapped",
    [
      59
    ]
  ],
  [
    [
      65045,
      65045
    ],
    "disallowed_STD3_mapped",
    [
      33
    ]
  ],
  [
    [
      65046,
      65046
    ],
    "disallowed_STD3_mapped",
    [
      63
    ]
  ],
  [
    [
      65047,
      65047
    ],
    "mapped",
    [
      12310
    ]
  ],
  [
    [
      65048,
      65048
    ],
    "mapped",
    [
      12311
    ]
  ],
  [
    [
      65049,
      65049
    ],
    "disallowed"
  ],
  [
    [
      65050,
      65055
    ],
    "disallowed"
  ],
  [
    [
      65056,
      65059
    ],
    "valid"
  ],
  [
    [
      65060,
      65062
    ],
    "valid"
  ],
  [
    [
      65063,
      65069
    ],
    "valid"
  ],
  [
    [
      65070,
      65071
    ],
    "valid"
  ],
  [
    [
      65072,
      65072
    ],
    "disallowed"
  ],
  [
    [
      65073,
      65073
    ],
    "mapped",
    [
      8212
    ]
  ],
  [
    [
      65074,
      65074
    ],
    "mapped",
    [
      8211
    ]
  ],
  [
    [
      65075,
      65076
    ],
    "disallowed_STD3_mapped",
    [
      95
    ]
  ],
  [
    [
      65077,
      65077
    ],
    "disallowed_STD3_mapped",
    [
      40
    ]
  ],
  [
    [
      65078,
      65078
    ],
    "disallowed_STD3_mapped",
    [
      41
    ]
  ],
  [
    [
      65079,
      65079
    ],
    "disallowed_STD3_mapped",
    [
      123
    ]
  ],
  [
    [
      65080,
      65080
    ],
    "disallowed_STD3_mapped",
    [
      125
    ]
  ],
  [
    [
      65081,
      65081
    ],
    "mapped",
    [
      12308
    ]
  ],
  [
    [
      65082,
      65082
    ],
    "mapped",
    [
      12309
    ]
  ],
  [
    [
      65083,
      65083
    ],
    "mapped",
    [
      12304
    ]
  ],
  [
    [
      65084,
      65084
    ],
    "mapped",
    [
      12305
    ]
  ],
  [
    [
      65085,
      65085
    ],
    "mapped",
    [
      12298
    ]
  ],
  [
    [
      65086,
      65086
    ],
    "mapped",
    [
      12299
    ]
  ],
  [
    [
      65087,
      65087
    ],
    "mapped",
    [
      12296
    ]
  ],
  [
    [
      65088,
      65088
    ],
    "mapped",
    [
      12297
    ]
  ],
  [
    [
      65089,
      65089
    ],
    "mapped",
    [
      12300
    ]
  ],
  [
    [
      65090,
      65090
    ],
    "mapped",
    [
      12301
    ]
  ],
  [
    [
      65091,
      65091
    ],
    "mapped",
    [
      12302
    ]
  ],
  [
    [
      65092,
      65092
    ],
    "mapped",
    [
      12303
    ]
  ],
  [
    [
      65093,
      65094
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65095,
      65095
    ],
    "disallowed_STD3_mapped",
    [
      91
    ]
  ],
  [
    [
      65096,
      65096
    ],
    "disallowed_STD3_mapped",
    [
      93
    ]
  ],
  [
    [
      65097,
      65100
    ],
    "disallowed_STD3_mapped",
    [
      32,
      773
    ]
  ],
  [
    [
      65101,
      65103
    ],
    "disallowed_STD3_mapped",
    [
      95
    ]
  ],
  [
    [
      65104,
      65104
    ],
    "disallowed_STD3_mapped",
    [
      44
    ]
  ],
  [
    [
      65105,
      65105
    ],
    "mapped",
    [
      12289
    ]
  ],
  [
    [
      65106,
      65106
    ],
    "disallowed"
  ],
  [
    [
      65107,
      65107
    ],
    "disallowed"
  ],
  [
    [
      65108,
      65108
    ],
    "disallowed_STD3_mapped",
    [
      59
    ]
  ],
  [
    [
      65109,
      65109
    ],
    "disallowed_STD3_mapped",
    [
      58
    ]
  ],
  [
    [
      65110,
      65110
    ],
    "disallowed_STD3_mapped",
    [
      63
    ]
  ],
  [
    [
      65111,
      65111
    ],
    "disallowed_STD3_mapped",
    [
      33
    ]
  ],
  [
    [
      65112,
      65112
    ],
    "mapped",
    [
      8212
    ]
  ],
  [
    [
      65113,
      65113
    ],
    "disallowed_STD3_mapped",
    [
      40
    ]
  ],
  [
    [
      65114,
      65114
    ],
    "disallowed_STD3_mapped",
    [
      41
    ]
  ],
  [
    [
      65115,
      65115
    ],
    "disallowed_STD3_mapped",
    [
      123
    ]
  ],
  [
    [
      65116,
      65116
    ],
    "disallowed_STD3_mapped",
    [
      125
    ]
  ],
  [
    [
      65117,
      65117
    ],
    "mapped",
    [
      12308
    ]
  ],
  [
    [
      65118,
      65118
    ],
    "mapped",
    [
      12309
    ]
  ],
  [
    [
      65119,
      65119
    ],
    "disallowed_STD3_mapped",
    [
      35
    ]
  ],
  [
    [
      65120,
      65120
    ],
    "disallowed_STD3_mapped",
    [
      38
    ]
  ],
  [
    [
      65121,
      65121
    ],
    "disallowed_STD3_mapped",
    [
      42
    ]
  ],
  [
    [
      65122,
      65122
    ],
    "disallowed_STD3_mapped",
    [
      43
    ]
  ],
  [
    [
      65123,
      65123
    ],
    "mapped",
    [
      45
    ]
  ],
  [
    [
      65124,
      65124
    ],
    "disallowed_STD3_mapped",
    [
      60
    ]
  ],
  [
    [
      65125,
      65125
    ],
    "disallowed_STD3_mapped",
    [
      62
    ]
  ],
  [
    [
      65126,
      65126
    ],
    "disallowed_STD3_mapped",
    [
      61
    ]
  ],
  [
    [
      65127,
      65127
    ],
    "disallowed"
  ],
  [
    [
      65128,
      65128
    ],
    "disallowed_STD3_mapped",
    [
      92
    ]
  ],
  [
    [
      65129,
      65129
    ],
    "disallowed_STD3_mapped",
    [
      36
    ]
  ],
  [
    [
      65130,
      65130
    ],
    "disallowed_STD3_mapped",
    [
      37
    ]
  ],
  [
    [
      65131,
      65131
    ],
    "disallowed_STD3_mapped",
    [
      64
    ]
  ],
  [
    [
      65132,
      65135
    ],
    "disallowed"
  ],
  [
    [
      65136,
      65136
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1611
    ]
  ],
  [
    [
      65137,
      65137
    ],
    "mapped",
    [
      1600,
      1611
    ]
  ],
  [
    [
      65138,
      65138
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1612
    ]
  ],
  [
    [
      65139,
      65139
    ],
    "valid"
  ],
  [
    [
      65140,
      65140
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1613
    ]
  ],
  [
    [
      65141,
      65141
    ],
    "disallowed"
  ],
  [
    [
      65142,
      65142
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1614
    ]
  ],
  [
    [
      65143,
      65143
    ],
    "mapped",
    [
      1600,
      1614
    ]
  ],
  [
    [
      65144,
      65144
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1615
    ]
  ],
  [
    [
      65145,
      65145
    ],
    "mapped",
    [
      1600,
      1615
    ]
  ],
  [
    [
      65146,
      65146
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1616
    ]
  ],
  [
    [
      65147,
      65147
    ],
    "mapped",
    [
      1600,
      1616
    ]
  ],
  [
    [
      65148,
      65148
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1617
    ]
  ],
  [
    [
      65149,
      65149
    ],
    "mapped",
    [
      1600,
      1617
    ]
  ],
  [
    [
      65150,
      65150
    ],
    "disallowed_STD3_mapped",
    [
      32,
      1618
    ]
  ],
  [
    [
      65151,
      65151
    ],
    "mapped",
    [
      1600,
      1618
    ]
  ],
  [
    [
      65152,
      65152
    ],
    "mapped",
    [
      1569
    ]
  ],
  [
    [
      65153,
      65154
    ],
    "mapped",
    [
      1570
    ]
  ],
  [
    [
      65155,
      65156
    ],
    "mapped",
    [
      1571
    ]
  ],
  [
    [
      65157,
      65158
    ],
    "mapped",
    [
      1572
    ]
  ],
  [
    [
      65159,
      65160
    ],
    "mapped",
    [
      1573
    ]
  ],
  [
    [
      65161,
      65164
    ],
    "mapped",
    [
      1574
    ]
  ],
  [
    [
      65165,
      65166
    ],
    "mapped",
    [
      1575
    ]
  ],
  [
    [
      65167,
      65170
    ],
    "mapped",
    [
      1576
    ]
  ],
  [
    [
      65171,
      65172
    ],
    "mapped",
    [
      1577
    ]
  ],
  [
    [
      65173,
      65176
    ],
    "mapped",
    [
      1578
    ]
  ],
  [
    [
      65177,
      65180
    ],
    "mapped",
    [
      1579
    ]
  ],
  [
    [
      65181,
      65184
    ],
    "mapped",
    [
      1580
    ]
  ],
  [
    [
      65185,
      65188
    ],
    "mapped",
    [
      1581
    ]
  ],
  [
    [
      65189,
      65192
    ],
    "mapped",
    [
      1582
    ]
  ],
  [
    [
      65193,
      65194
    ],
    "mapped",
    [
      1583
    ]
  ],
  [
    [
      65195,
      65196
    ],
    "mapped",
    [
      1584
    ]
  ],
  [
    [
      65197,
      65198
    ],
    "mapped",
    [
      1585
    ]
  ],
  [
    [
      65199,
      65200
    ],
    "mapped",
    [
      1586
    ]
  ],
  [
    [
      65201,
      65204
    ],
    "mapped",
    [
      1587
    ]
  ],
  [
    [
      65205,
      65208
    ],
    "mapped",
    [
      1588
    ]
  ],
  [
    [
      65209,
      65212
    ],
    "mapped",
    [
      1589
    ]
  ],
  [
    [
      65213,
      65216
    ],
    "mapped",
    [
      1590
    ]
  ],
  [
    [
      65217,
      65220
    ],
    "mapped",
    [
      1591
    ]
  ],
  [
    [
      65221,
      65224
    ],
    "mapped",
    [
      1592
    ]
  ],
  [
    [
      65225,
      65228
    ],
    "mapped",
    [
      1593
    ]
  ],
  [
    [
      65229,
      65232
    ],
    "mapped",
    [
      1594
    ]
  ],
  [
    [
      65233,
      65236
    ],
    "mapped",
    [
      1601
    ]
  ],
  [
    [
      65237,
      65240
    ],
    "mapped",
    [
      1602
    ]
  ],
  [
    [
      65241,
      65244
    ],
    "mapped",
    [
      1603
    ]
  ],
  [
    [
      65245,
      65248
    ],
    "mapped",
    [
      1604
    ]
  ],
  [
    [
      65249,
      65252
    ],
    "mapped",
    [
      1605
    ]
  ],
  [
    [
      65253,
      65256
    ],
    "mapped",
    [
      1606
    ]
  ],
  [
    [
      65257,
      65260
    ],
    "mapped",
    [
      1607
    ]
  ],
  [
    [
      65261,
      65262
    ],
    "mapped",
    [
      1608
    ]
  ],
  [
    [
      65263,
      65264
    ],
    "mapped",
    [
      1609
    ]
  ],
  [
    [
      65265,
      65268
    ],
    "mapped",
    [
      1610
    ]
  ],
  [
    [
      65269,
      65270
    ],
    "mapped",
    [
      1604,
      1570
    ]
  ],
  [
    [
      65271,
      65272
    ],
    "mapped",
    [
      1604,
      1571
    ]
  ],
  [
    [
      65273,
      65274
    ],
    "mapped",
    [
      1604,
      1573
    ]
  ],
  [
    [
      65275,
      65276
    ],
    "mapped",
    [
      1604,
      1575
    ]
  ],
  [
    [
      65277,
      65278
    ],
    "disallowed"
  ],
  [
    [
      65279,
      65279
    ],
    "ignored"
  ],
  [
    [
      65280,
      65280
    ],
    "disallowed"
  ],
  [
    [
      65281,
      65281
    ],
    "disallowed_STD3_mapped",
    [
      33
    ]
  ],
  [
    [
      65282,
      65282
    ],
    "disallowed_STD3_mapped",
    [
      34
    ]
  ],
  [
    [
      65283,
      65283
    ],
    "disallowed_STD3_mapped",
    [
      35
    ]
  ],
  [
    [
      65284,
      65284
    ],
    "disallowed_STD3_mapped",
    [
      36
    ]
  ],
  [
    [
      65285,
      65285
    ],
    "disallowed_STD3_mapped",
    [
      37
    ]
  ],
  [
    [
      65286,
      65286
    ],
    "disallowed_STD3_mapped",
    [
      38
    ]
  ],
  [
    [
      65287,
      65287
    ],
    "disallowed_STD3_mapped",
    [
      39
    ]
  ],
  [
    [
      65288,
      65288
    ],
    "disallowed_STD3_mapped",
    [
      40
    ]
  ],
  [
    [
      65289,
      65289
    ],
    "disallowed_STD3_mapped",
    [
      41
    ]
  ],
  [
    [
      65290,
      65290
    ],
    "disallowed_STD3_mapped",
    [
      42
    ]
  ],
  [
    [
      65291,
      65291
    ],
    "disallowed_STD3_mapped",
    [
      43
    ]
  ],
  [
    [
      65292,
      65292
    ],
    "disallowed_STD3_mapped",
    [
      44
    ]
  ],
  [
    [
      65293,
      65293
    ],
    "mapped",
    [
      45
    ]
  ],
  [
    [
      65294,
      65294
    ],
    "mapped",
    [
      46
    ]
  ],
  [
    [
      65295,
      65295
    ],
    "disallowed_STD3_mapped",
    [
      47
    ]
  ],
  [
    [
      65296,
      65296
    ],
    "mapped",
    [
      48
    ]
  ],
  [
    [
      65297,
      65297
    ],
    "mapped",
    [
      49
    ]
  ],
  [
    [
      65298,
      65298
    ],
    "mapped",
    [
      50
    ]
  ],
  [
    [
      65299,
      65299
    ],
    "mapped",
    [
      51
    ]
  ],
  [
    [
      65300,
      65300
    ],
    "mapped",
    [
      52
    ]
  ],
  [
    [
      65301,
      65301
    ],
    "mapped",
    [
      53
    ]
  ],
  [
    [
      65302,
      65302
    ],
    "mapped",
    [
      54
    ]
  ],
  [
    [
      65303,
      65303
    ],
    "mapped",
    [
      55
    ]
  ],
  [
    [
      65304,
      65304
    ],
    "mapped",
    [
      56
    ]
  ],
  [
    [
      65305,
      65305
    ],
    "mapped",
    [
      57
    ]
  ],
  [
    [
      65306,
      65306
    ],
    "disallowed_STD3_mapped",
    [
      58
    ]
  ],
  [
    [
      65307,
      65307
    ],
    "disallowed_STD3_mapped",
    [
      59
    ]
  ],
  [
    [
      65308,
      65308
    ],
    "disallowed_STD3_mapped",
    [
      60
    ]
  ],
  [
    [
      65309,
      65309
    ],
    "disallowed_STD3_mapped",
    [
      61
    ]
  ],
  [
    [
      65310,
      65310
    ],
    "disallowed_STD3_mapped",
    [
      62
    ]
  ],
  [
    [
      65311,
      65311
    ],
    "disallowed_STD3_mapped",
    [
      63
    ]
  ],
  [
    [
      65312,
      65312
    ],
    "disallowed_STD3_mapped",
    [
      64
    ]
  ],
  [
    [
      65313,
      65313
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      65314,
      65314
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      65315,
      65315
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      65316,
      65316
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      65317,
      65317
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      65318,
      65318
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      65319,
      65319
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      65320,
      65320
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      65321,
      65321
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      65322,
      65322
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      65323,
      65323
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      65324,
      65324
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      65325,
      65325
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      65326,
      65326
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      65327,
      65327
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      65328,
      65328
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      65329,
      65329
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      65330,
      65330
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      65331,
      65331
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      65332,
      65332
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      65333,
      65333
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      65334,
      65334
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      65335,
      65335
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      65336,
      65336
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      65337,
      65337
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      65338,
      65338
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      65339,
      65339
    ],
    "disallowed_STD3_mapped",
    [
      91
    ]
  ],
  [
    [
      65340,
      65340
    ],
    "disallowed_STD3_mapped",
    [
      92
    ]
  ],
  [
    [
      65341,
      65341
    ],
    "disallowed_STD3_mapped",
    [
      93
    ]
  ],
  [
    [
      65342,
      65342
    ],
    "disallowed_STD3_mapped",
    [
      94
    ]
  ],
  [
    [
      65343,
      65343
    ],
    "disallowed_STD3_mapped",
    [
      95
    ]
  ],
  [
    [
      65344,
      65344
    ],
    "disallowed_STD3_mapped",
    [
      96
    ]
  ],
  [
    [
      65345,
      65345
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      65346,
      65346
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      65347,
      65347
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      65348,
      65348
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      65349,
      65349
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      65350,
      65350
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      65351,
      65351
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      65352,
      65352
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      65353,
      65353
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      65354,
      65354
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      65355,
      65355
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      65356,
      65356
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      65357,
      65357
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      65358,
      65358
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      65359,
      65359
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      65360,
      65360
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      65361,
      65361
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      65362,
      65362
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      65363,
      65363
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      65364,
      65364
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      65365,
      65365
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      65366,
      65366
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      65367,
      65367
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      65368,
      65368
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      65369,
      65369
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      65370,
      65370
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      65371,
      65371
    ],
    "disallowed_STD3_mapped",
    [
      123
    ]
  ],
  [
    [
      65372,
      65372
    ],
    "disallowed_STD3_mapped",
    [
      124
    ]
  ],
  [
    [
      65373,
      65373
    ],
    "disallowed_STD3_mapped",
    [
      125
    ]
  ],
  [
    [
      65374,
      65374
    ],
    "disallowed_STD3_mapped",
    [
      126
    ]
  ],
  [
    [
      65375,
      65375
    ],
    "mapped",
    [
      10629
    ]
  ],
  [
    [
      65376,
      65376
    ],
    "mapped",
    [
      10630
    ]
  ],
  [
    [
      65377,
      65377
    ],
    "mapped",
    [
      46
    ]
  ],
  [
    [
      65378,
      65378
    ],
    "mapped",
    [
      12300
    ]
  ],
  [
    [
      65379,
      65379
    ],
    "mapped",
    [
      12301
    ]
  ],
  [
    [
      65380,
      65380
    ],
    "mapped",
    [
      12289
    ]
  ],
  [
    [
      65381,
      65381
    ],
    "mapped",
    [
      12539
    ]
  ],
  [
    [
      65382,
      65382
    ],
    "mapped",
    [
      12530
    ]
  ],
  [
    [
      65383,
      65383
    ],
    "mapped",
    [
      12449
    ]
  ],
  [
    [
      65384,
      65384
    ],
    "mapped",
    [
      12451
    ]
  ],
  [
    [
      65385,
      65385
    ],
    "mapped",
    [
      12453
    ]
  ],
  [
    [
      65386,
      65386
    ],
    "mapped",
    [
      12455
    ]
  ],
  [
    [
      65387,
      65387
    ],
    "mapped",
    [
      12457
    ]
  ],
  [
    [
      65388,
      65388
    ],
    "mapped",
    [
      12515
    ]
  ],
  [
    [
      65389,
      65389
    ],
    "mapped",
    [
      12517
    ]
  ],
  [
    [
      65390,
      65390
    ],
    "mapped",
    [
      12519
    ]
  ],
  [
    [
      65391,
      65391
    ],
    "mapped",
    [
      12483
    ]
  ],
  [
    [
      65392,
      65392
    ],
    "mapped",
    [
      12540
    ]
  ],
  [
    [
      65393,
      65393
    ],
    "mapped",
    [
      12450
    ]
  ],
  [
    [
      65394,
      65394
    ],
    "mapped",
    [
      12452
    ]
  ],
  [
    [
      65395,
      65395
    ],
    "mapped",
    [
      12454
    ]
  ],
  [
    [
      65396,
      65396
    ],
    "mapped",
    [
      12456
    ]
  ],
  [
    [
      65397,
      65397
    ],
    "mapped",
    [
      12458
    ]
  ],
  [
    [
      65398,
      65398
    ],
    "mapped",
    [
      12459
    ]
  ],
  [
    [
      65399,
      65399
    ],
    "mapped",
    [
      12461
    ]
  ],
  [
    [
      65400,
      65400
    ],
    "mapped",
    [
      12463
    ]
  ],
  [
    [
      65401,
      65401
    ],
    "mapped",
    [
      12465
    ]
  ],
  [
    [
      65402,
      65402
    ],
    "mapped",
    [
      12467
    ]
  ],
  [
    [
      65403,
      65403
    ],
    "mapped",
    [
      12469
    ]
  ],
  [
    [
      65404,
      65404
    ],
    "mapped",
    [
      12471
    ]
  ],
  [
    [
      65405,
      65405
    ],
    "mapped",
    [
      12473
    ]
  ],
  [
    [
      65406,
      65406
    ],
    "mapped",
    [
      12475
    ]
  ],
  [
    [
      65407,
      65407
    ],
    "mapped",
    [
      12477
    ]
  ],
  [
    [
      65408,
      65408
    ],
    "mapped",
    [
      12479
    ]
  ],
  [
    [
      65409,
      65409
    ],
    "mapped",
    [
      12481
    ]
  ],
  [
    [
      65410,
      65410
    ],
    "mapped",
    [
      12484
    ]
  ],
  [
    [
      65411,
      65411
    ],
    "mapped",
    [
      12486
    ]
  ],
  [
    [
      65412,
      65412
    ],
    "mapped",
    [
      12488
    ]
  ],
  [
    [
      65413,
      65413
    ],
    "mapped",
    [
      12490
    ]
  ],
  [
    [
      65414,
      65414
    ],
    "mapped",
    [
      12491
    ]
  ],
  [
    [
      65415,
      65415
    ],
    "mapped",
    [
      12492
    ]
  ],
  [
    [
      65416,
      65416
    ],
    "mapped",
    [
      12493
    ]
  ],
  [
    [
      65417,
      65417
    ],
    "mapped",
    [
      12494
    ]
  ],
  [
    [
      65418,
      65418
    ],
    "mapped",
    [
      12495
    ]
  ],
  [
    [
      65419,
      65419
    ],
    "mapped",
    [
      12498
    ]
  ],
  [
    [
      65420,
      65420
    ],
    "mapped",
    [
      12501
    ]
  ],
  [
    [
      65421,
      65421
    ],
    "mapped",
    [
      12504
    ]
  ],
  [
    [
      65422,
      65422
    ],
    "mapped",
    [
      12507
    ]
  ],
  [
    [
      65423,
      65423
    ],
    "mapped",
    [
      12510
    ]
  ],
  [
    [
      65424,
      65424
    ],
    "mapped",
    [
      12511
    ]
  ],
  [
    [
      65425,
      65425
    ],
    "mapped",
    [
      12512
    ]
  ],
  [
    [
      65426,
      65426
    ],
    "mapped",
    [
      12513
    ]
  ],
  [
    [
      65427,
      65427
    ],
    "mapped",
    [
      12514
    ]
  ],
  [
    [
      65428,
      65428
    ],
    "mapped",
    [
      12516
    ]
  ],
  [
    [
      65429,
      65429
    ],
    "mapped",
    [
      12518
    ]
  ],
  [
    [
      65430,
      65430
    ],
    "mapped",
    [
      12520
    ]
  ],
  [
    [
      65431,
      65431
    ],
    "mapped",
    [
      12521
    ]
  ],
  [
    [
      65432,
      65432
    ],
    "mapped",
    [
      12522
    ]
  ],
  [
    [
      65433,
      65433
    ],
    "mapped",
    [
      12523
    ]
  ],
  [
    [
      65434,
      65434
    ],
    "mapped",
    [
      12524
    ]
  ],
  [
    [
      65435,
      65435
    ],
    "mapped",
    [
      12525
    ]
  ],
  [
    [
      65436,
      65436
    ],
    "mapped",
    [
      12527
    ]
  ],
  [
    [
      65437,
      65437
    ],
    "mapped",
    [
      12531
    ]
  ],
  [
    [
      65438,
      65438
    ],
    "mapped",
    [
      12441
    ]
  ],
  [
    [
      65439,
      65439
    ],
    "mapped",
    [
      12442
    ]
  ],
  [
    [
      65440,
      65440
    ],
    "disallowed"
  ],
  [
    [
      65441,
      65441
    ],
    "mapped",
    [
      4352
    ]
  ],
  [
    [
      65442,
      65442
    ],
    "mapped",
    [
      4353
    ]
  ],
  [
    [
      65443,
      65443
    ],
    "mapped",
    [
      4522
    ]
  ],
  [
    [
      65444,
      65444
    ],
    "mapped",
    [
      4354
    ]
  ],
  [
    [
      65445,
      65445
    ],
    "mapped",
    [
      4524
    ]
  ],
  [
    [
      65446,
      65446
    ],
    "mapped",
    [
      4525
    ]
  ],
  [
    [
      65447,
      65447
    ],
    "mapped",
    [
      4355
    ]
  ],
  [
    [
      65448,
      65448
    ],
    "mapped",
    [
      4356
    ]
  ],
  [
    [
      65449,
      65449
    ],
    "mapped",
    [
      4357
    ]
  ],
  [
    [
      65450,
      65450
    ],
    "mapped",
    [
      4528
    ]
  ],
  [
    [
      65451,
      65451
    ],
    "mapped",
    [
      4529
    ]
  ],
  [
    [
      65452,
      65452
    ],
    "mapped",
    [
      4530
    ]
  ],
  [
    [
      65453,
      65453
    ],
    "mapped",
    [
      4531
    ]
  ],
  [
    [
      65454,
      65454
    ],
    "mapped",
    [
      4532
    ]
  ],
  [
    [
      65455,
      65455
    ],
    "mapped",
    [
      4533
    ]
  ],
  [
    [
      65456,
      65456
    ],
    "mapped",
    [
      4378
    ]
  ],
  [
    [
      65457,
      65457
    ],
    "mapped",
    [
      4358
    ]
  ],
  [
    [
      65458,
      65458
    ],
    "mapped",
    [
      4359
    ]
  ],
  [
    [
      65459,
      65459
    ],
    "mapped",
    [
      4360
    ]
  ],
  [
    [
      65460,
      65460
    ],
    "mapped",
    [
      4385
    ]
  ],
  [
    [
      65461,
      65461
    ],
    "mapped",
    [
      4361
    ]
  ],
  [
    [
      65462,
      65462
    ],
    "mapped",
    [
      4362
    ]
  ],
  [
    [
      65463,
      65463
    ],
    "mapped",
    [
      4363
    ]
  ],
  [
    [
      65464,
      65464
    ],
    "mapped",
    [
      4364
    ]
  ],
  [
    [
      65465,
      65465
    ],
    "mapped",
    [
      4365
    ]
  ],
  [
    [
      65466,
      65466
    ],
    "mapped",
    [
      4366
    ]
  ],
  [
    [
      65467,
      65467
    ],
    "mapped",
    [
      4367
    ]
  ],
  [
    [
      65468,
      65468
    ],
    "mapped",
    [
      4368
    ]
  ],
  [
    [
      65469,
      65469
    ],
    "mapped",
    [
      4369
    ]
  ],
  [
    [
      65470,
      65470
    ],
    "mapped",
    [
      4370
    ]
  ],
  [
    [
      65471,
      65473
    ],
    "disallowed"
  ],
  [
    [
      65474,
      65474
    ],
    "mapped",
    [
      4449
    ]
  ],
  [
    [
      65475,
      65475
    ],
    "mapped",
    [
      4450
    ]
  ],
  [
    [
      65476,
      65476
    ],
    "mapped",
    [
      4451
    ]
  ],
  [
    [
      65477,
      65477
    ],
    "mapped",
    [
      4452
    ]
  ],
  [
    [
      65478,
      65478
    ],
    "mapped",
    [
      4453
    ]
  ],
  [
    [
      65479,
      65479
    ],
    "mapped",
    [
      4454
    ]
  ],
  [
    [
      65480,
      65481
    ],
    "disallowed"
  ],
  [
    [
      65482,
      65482
    ],
    "mapped",
    [
      4455
    ]
  ],
  [
    [
      65483,
      65483
    ],
    "mapped",
    [
      4456
    ]
  ],
  [
    [
      65484,
      65484
    ],
    "mapped",
    [
      4457
    ]
  ],
  [
    [
      65485,
      65485
    ],
    "mapped",
    [
      4458
    ]
  ],
  [
    [
      65486,
      65486
    ],
    "mapped",
    [
      4459
    ]
  ],
  [
    [
      65487,
      65487
    ],
    "mapped",
    [
      4460
    ]
  ],
  [
    [
      65488,
      65489
    ],
    "disallowed"
  ],
  [
    [
      65490,
      65490
    ],
    "mapped",
    [
      4461
    ]
  ],
  [
    [
      65491,
      65491
    ],
    "mapped",
    [
      4462
    ]
  ],
  [
    [
      65492,
      65492
    ],
    "mapped",
    [
      4463
    ]
  ],
  [
    [
      65493,
      65493
    ],
    "mapped",
    [
      4464
    ]
  ],
  [
    [
      65494,
      65494
    ],
    "mapped",
    [
      4465
    ]
  ],
  [
    [
      65495,
      65495
    ],
    "mapped",
    [
      4466
    ]
  ],
  [
    [
      65496,
      65497
    ],
    "disallowed"
  ],
  [
    [
      65498,
      65498
    ],
    "mapped",
    [
      4467
    ]
  ],
  [
    [
      65499,
      65499
    ],
    "mapped",
    [
      4468
    ]
  ],
  [
    [
      65500,
      65500
    ],
    "mapped",
    [
      4469
    ]
  ],
  [
    [
      65501,
      65503
    ],
    "disallowed"
  ],
  [
    [
      65504,
      65504
    ],
    "mapped",
    [
      162
    ]
  ],
  [
    [
      65505,
      65505
    ],
    "mapped",
    [
      163
    ]
  ],
  [
    [
      65506,
      65506
    ],
    "mapped",
    [
      172
    ]
  ],
  [
    [
      65507,
      65507
    ],
    "disallowed_STD3_mapped",
    [
      32,
      772
    ]
  ],
  [
    [
      65508,
      65508
    ],
    "mapped",
    [
      166
    ]
  ],
  [
    [
      65509,
      65509
    ],
    "mapped",
    [
      165
    ]
  ],
  [
    [
      65510,
      65510
    ],
    "mapped",
    [
      8361
    ]
  ],
  [
    [
      65511,
      65511
    ],
    "disallowed"
  ],
  [
    [
      65512,
      65512
    ],
    "mapped",
    [
      9474
    ]
  ],
  [
    [
      65513,
      65513
    ],
    "mapped",
    [
      8592
    ]
  ],
  [
    [
      65514,
      65514
    ],
    "mapped",
    [
      8593
    ]
  ],
  [
    [
      65515,
      65515
    ],
    "mapped",
    [
      8594
    ]
  ],
  [
    [
      65516,
      65516
    ],
    "mapped",
    [
      8595
    ]
  ],
  [
    [
      65517,
      65517
    ],
    "mapped",
    [
      9632
    ]
  ],
  [
    [
      65518,
      65518
    ],
    "mapped",
    [
      9675
    ]
  ],
  [
    [
      65519,
      65528
    ],
    "disallowed"
  ],
  [
    [
      65529,
      65531
    ],
    "disallowed"
  ],
  [
    [
      65532,
      65532
    ],
    "disallowed"
  ],
  [
    [
      65533,
      65533
    ],
    "disallowed"
  ],
  [
    [
      65534,
      65535
    ],
    "disallowed"
  ],
  [
    [
      65536,
      65547
    ],
    "valid"
  ],
  [
    [
      65548,
      65548
    ],
    "disallowed"
  ],
  [
    [
      65549,
      65574
    ],
    "valid"
  ],
  [
    [
      65575,
      65575
    ],
    "disallowed"
  ],
  [
    [
      65576,
      65594
    ],
    "valid"
  ],
  [
    [
      65595,
      65595
    ],
    "disallowed"
  ],
  [
    [
      65596,
      65597
    ],
    "valid"
  ],
  [
    [
      65598,
      65598
    ],
    "disallowed"
  ],
  [
    [
      65599,
      65613
    ],
    "valid"
  ],
  [
    [
      65614,
      65615
    ],
    "disallowed"
  ],
  [
    [
      65616,
      65629
    ],
    "valid"
  ],
  [
    [
      65630,
      65663
    ],
    "disallowed"
  ],
  [
    [
      65664,
      65786
    ],
    "valid"
  ],
  [
    [
      65787,
      65791
    ],
    "disallowed"
  ],
  [
    [
      65792,
      65794
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65795,
      65798
    ],
    "disallowed"
  ],
  [
    [
      65799,
      65843
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65844,
      65846
    ],
    "disallowed"
  ],
  [
    [
      65847,
      65855
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65856,
      65930
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65931,
      65932
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65933,
      65935
    ],
    "disallowed"
  ],
  [
    [
      65936,
      65947
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65948,
      65951
    ],
    "disallowed"
  ],
  [
    [
      65952,
      65952
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      65953,
      65999
    ],
    "disallowed"
  ],
  [
    [
      66e3,
      66044
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66045,
      66045
    ],
    "valid"
  ],
  [
    [
      66046,
      66175
    ],
    "disallowed"
  ],
  [
    [
      66176,
      66204
    ],
    "valid"
  ],
  [
    [
      66205,
      66207
    ],
    "disallowed"
  ],
  [
    [
      66208,
      66256
    ],
    "valid"
  ],
  [
    [
      66257,
      66271
    ],
    "disallowed"
  ],
  [
    [
      66272,
      66272
    ],
    "valid"
  ],
  [
    [
      66273,
      66299
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66300,
      66303
    ],
    "disallowed"
  ],
  [
    [
      66304,
      66334
    ],
    "valid"
  ],
  [
    [
      66335,
      66335
    ],
    "valid"
  ],
  [
    [
      66336,
      66339
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66340,
      66351
    ],
    "disallowed"
  ],
  [
    [
      66352,
      66368
    ],
    "valid"
  ],
  [
    [
      66369,
      66369
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66370,
      66377
    ],
    "valid"
  ],
  [
    [
      66378,
      66378
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66379,
      66383
    ],
    "disallowed"
  ],
  [
    [
      66384,
      66426
    ],
    "valid"
  ],
  [
    [
      66427,
      66431
    ],
    "disallowed"
  ],
  [
    [
      66432,
      66461
    ],
    "valid"
  ],
  [
    [
      66462,
      66462
    ],
    "disallowed"
  ],
  [
    [
      66463,
      66463
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66464,
      66499
    ],
    "valid"
  ],
  [
    [
      66500,
      66503
    ],
    "disallowed"
  ],
  [
    [
      66504,
      66511
    ],
    "valid"
  ],
  [
    [
      66512,
      66517
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66518,
      66559
    ],
    "disallowed"
  ],
  [
    [
      66560,
      66560
    ],
    "mapped",
    [
      66600
    ]
  ],
  [
    [
      66561,
      66561
    ],
    "mapped",
    [
      66601
    ]
  ],
  [
    [
      66562,
      66562
    ],
    "mapped",
    [
      66602
    ]
  ],
  [
    [
      66563,
      66563
    ],
    "mapped",
    [
      66603
    ]
  ],
  [
    [
      66564,
      66564
    ],
    "mapped",
    [
      66604
    ]
  ],
  [
    [
      66565,
      66565
    ],
    "mapped",
    [
      66605
    ]
  ],
  [
    [
      66566,
      66566
    ],
    "mapped",
    [
      66606
    ]
  ],
  [
    [
      66567,
      66567
    ],
    "mapped",
    [
      66607
    ]
  ],
  [
    [
      66568,
      66568
    ],
    "mapped",
    [
      66608
    ]
  ],
  [
    [
      66569,
      66569
    ],
    "mapped",
    [
      66609
    ]
  ],
  [
    [
      66570,
      66570
    ],
    "mapped",
    [
      66610
    ]
  ],
  [
    [
      66571,
      66571
    ],
    "mapped",
    [
      66611
    ]
  ],
  [
    [
      66572,
      66572
    ],
    "mapped",
    [
      66612
    ]
  ],
  [
    [
      66573,
      66573
    ],
    "mapped",
    [
      66613
    ]
  ],
  [
    [
      66574,
      66574
    ],
    "mapped",
    [
      66614
    ]
  ],
  [
    [
      66575,
      66575
    ],
    "mapped",
    [
      66615
    ]
  ],
  [
    [
      66576,
      66576
    ],
    "mapped",
    [
      66616
    ]
  ],
  [
    [
      66577,
      66577
    ],
    "mapped",
    [
      66617
    ]
  ],
  [
    [
      66578,
      66578
    ],
    "mapped",
    [
      66618
    ]
  ],
  [
    [
      66579,
      66579
    ],
    "mapped",
    [
      66619
    ]
  ],
  [
    [
      66580,
      66580
    ],
    "mapped",
    [
      66620
    ]
  ],
  [
    [
      66581,
      66581
    ],
    "mapped",
    [
      66621
    ]
  ],
  [
    [
      66582,
      66582
    ],
    "mapped",
    [
      66622
    ]
  ],
  [
    [
      66583,
      66583
    ],
    "mapped",
    [
      66623
    ]
  ],
  [
    [
      66584,
      66584
    ],
    "mapped",
    [
      66624
    ]
  ],
  [
    [
      66585,
      66585
    ],
    "mapped",
    [
      66625
    ]
  ],
  [
    [
      66586,
      66586
    ],
    "mapped",
    [
      66626
    ]
  ],
  [
    [
      66587,
      66587
    ],
    "mapped",
    [
      66627
    ]
  ],
  [
    [
      66588,
      66588
    ],
    "mapped",
    [
      66628
    ]
  ],
  [
    [
      66589,
      66589
    ],
    "mapped",
    [
      66629
    ]
  ],
  [
    [
      66590,
      66590
    ],
    "mapped",
    [
      66630
    ]
  ],
  [
    [
      66591,
      66591
    ],
    "mapped",
    [
      66631
    ]
  ],
  [
    [
      66592,
      66592
    ],
    "mapped",
    [
      66632
    ]
  ],
  [
    [
      66593,
      66593
    ],
    "mapped",
    [
      66633
    ]
  ],
  [
    [
      66594,
      66594
    ],
    "mapped",
    [
      66634
    ]
  ],
  [
    [
      66595,
      66595
    ],
    "mapped",
    [
      66635
    ]
  ],
  [
    [
      66596,
      66596
    ],
    "mapped",
    [
      66636
    ]
  ],
  [
    [
      66597,
      66597
    ],
    "mapped",
    [
      66637
    ]
  ],
  [
    [
      66598,
      66598
    ],
    "mapped",
    [
      66638
    ]
  ],
  [
    [
      66599,
      66599
    ],
    "mapped",
    [
      66639
    ]
  ],
  [
    [
      66600,
      66637
    ],
    "valid"
  ],
  [
    [
      66638,
      66717
    ],
    "valid"
  ],
  [
    [
      66718,
      66719
    ],
    "disallowed"
  ],
  [
    [
      66720,
      66729
    ],
    "valid"
  ],
  [
    [
      66730,
      66815
    ],
    "disallowed"
  ],
  [
    [
      66816,
      66855
    ],
    "valid"
  ],
  [
    [
      66856,
      66863
    ],
    "disallowed"
  ],
  [
    [
      66864,
      66915
    ],
    "valid"
  ],
  [
    [
      66916,
      66926
    ],
    "disallowed"
  ],
  [
    [
      66927,
      66927
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      66928,
      67071
    ],
    "disallowed"
  ],
  [
    [
      67072,
      67382
    ],
    "valid"
  ],
  [
    [
      67383,
      67391
    ],
    "disallowed"
  ],
  [
    [
      67392,
      67413
    ],
    "valid"
  ],
  [
    [
      67414,
      67423
    ],
    "disallowed"
  ],
  [
    [
      67424,
      67431
    ],
    "valid"
  ],
  [
    [
      67432,
      67583
    ],
    "disallowed"
  ],
  [
    [
      67584,
      67589
    ],
    "valid"
  ],
  [
    [
      67590,
      67591
    ],
    "disallowed"
  ],
  [
    [
      67592,
      67592
    ],
    "valid"
  ],
  [
    [
      67593,
      67593
    ],
    "disallowed"
  ],
  [
    [
      67594,
      67637
    ],
    "valid"
  ],
  [
    [
      67638,
      67638
    ],
    "disallowed"
  ],
  [
    [
      67639,
      67640
    ],
    "valid"
  ],
  [
    [
      67641,
      67643
    ],
    "disallowed"
  ],
  [
    [
      67644,
      67644
    ],
    "valid"
  ],
  [
    [
      67645,
      67646
    ],
    "disallowed"
  ],
  [
    [
      67647,
      67647
    ],
    "valid"
  ],
  [
    [
      67648,
      67669
    ],
    "valid"
  ],
  [
    [
      67670,
      67670
    ],
    "disallowed"
  ],
  [
    [
      67671,
      67679
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67680,
      67702
    ],
    "valid"
  ],
  [
    [
      67703,
      67711
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67712,
      67742
    ],
    "valid"
  ],
  [
    [
      67743,
      67750
    ],
    "disallowed"
  ],
  [
    [
      67751,
      67759
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67760,
      67807
    ],
    "disallowed"
  ],
  [
    [
      67808,
      67826
    ],
    "valid"
  ],
  [
    [
      67827,
      67827
    ],
    "disallowed"
  ],
  [
    [
      67828,
      67829
    ],
    "valid"
  ],
  [
    [
      67830,
      67834
    ],
    "disallowed"
  ],
  [
    [
      67835,
      67839
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67840,
      67861
    ],
    "valid"
  ],
  [
    [
      67862,
      67865
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67866,
      67867
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67868,
      67870
    ],
    "disallowed"
  ],
  [
    [
      67871,
      67871
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67872,
      67897
    ],
    "valid"
  ],
  [
    [
      67898,
      67902
    ],
    "disallowed"
  ],
  [
    [
      67903,
      67903
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      67904,
      67967
    ],
    "disallowed"
  ],
  [
    [
      67968,
      68023
    ],
    "valid"
  ],
  [
    [
      68024,
      68027
    ],
    "disallowed"
  ],
  [
    [
      68028,
      68029
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68030,
      68031
    ],
    "valid"
  ],
  [
    [
      68032,
      68047
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68048,
      68049
    ],
    "disallowed"
  ],
  [
    [
      68050,
      68095
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68096,
      68099
    ],
    "valid"
  ],
  [
    [
      68100,
      68100
    ],
    "disallowed"
  ],
  [
    [
      68101,
      68102
    ],
    "valid"
  ],
  [
    [
      68103,
      68107
    ],
    "disallowed"
  ],
  [
    [
      68108,
      68115
    ],
    "valid"
  ],
  [
    [
      68116,
      68116
    ],
    "disallowed"
  ],
  [
    [
      68117,
      68119
    ],
    "valid"
  ],
  [
    [
      68120,
      68120
    ],
    "disallowed"
  ],
  [
    [
      68121,
      68147
    ],
    "valid"
  ],
  [
    [
      68148,
      68151
    ],
    "disallowed"
  ],
  [
    [
      68152,
      68154
    ],
    "valid"
  ],
  [
    [
      68155,
      68158
    ],
    "disallowed"
  ],
  [
    [
      68159,
      68159
    ],
    "valid"
  ],
  [
    [
      68160,
      68167
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68168,
      68175
    ],
    "disallowed"
  ],
  [
    [
      68176,
      68184
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68185,
      68191
    ],
    "disallowed"
  ],
  [
    [
      68192,
      68220
    ],
    "valid"
  ],
  [
    [
      68221,
      68223
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68224,
      68252
    ],
    "valid"
  ],
  [
    [
      68253,
      68255
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68256,
      68287
    ],
    "disallowed"
  ],
  [
    [
      68288,
      68295
    ],
    "valid"
  ],
  [
    [
      68296,
      68296
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68297,
      68326
    ],
    "valid"
  ],
  [
    [
      68327,
      68330
    ],
    "disallowed"
  ],
  [
    [
      68331,
      68342
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68343,
      68351
    ],
    "disallowed"
  ],
  [
    [
      68352,
      68405
    ],
    "valid"
  ],
  [
    [
      68406,
      68408
    ],
    "disallowed"
  ],
  [
    [
      68409,
      68415
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68416,
      68437
    ],
    "valid"
  ],
  [
    [
      68438,
      68439
    ],
    "disallowed"
  ],
  [
    [
      68440,
      68447
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68448,
      68466
    ],
    "valid"
  ],
  [
    [
      68467,
      68471
    ],
    "disallowed"
  ],
  [
    [
      68472,
      68479
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68480,
      68497
    ],
    "valid"
  ],
  [
    [
      68498,
      68504
    ],
    "disallowed"
  ],
  [
    [
      68505,
      68508
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68509,
      68520
    ],
    "disallowed"
  ],
  [
    [
      68521,
      68527
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68528,
      68607
    ],
    "disallowed"
  ],
  [
    [
      68608,
      68680
    ],
    "valid"
  ],
  [
    [
      68681,
      68735
    ],
    "disallowed"
  ],
  [
    [
      68736,
      68736
    ],
    "mapped",
    [
      68800
    ]
  ],
  [
    [
      68737,
      68737
    ],
    "mapped",
    [
      68801
    ]
  ],
  [
    [
      68738,
      68738
    ],
    "mapped",
    [
      68802
    ]
  ],
  [
    [
      68739,
      68739
    ],
    "mapped",
    [
      68803
    ]
  ],
  [
    [
      68740,
      68740
    ],
    "mapped",
    [
      68804
    ]
  ],
  [
    [
      68741,
      68741
    ],
    "mapped",
    [
      68805
    ]
  ],
  [
    [
      68742,
      68742
    ],
    "mapped",
    [
      68806
    ]
  ],
  [
    [
      68743,
      68743
    ],
    "mapped",
    [
      68807
    ]
  ],
  [
    [
      68744,
      68744
    ],
    "mapped",
    [
      68808
    ]
  ],
  [
    [
      68745,
      68745
    ],
    "mapped",
    [
      68809
    ]
  ],
  [
    [
      68746,
      68746
    ],
    "mapped",
    [
      68810
    ]
  ],
  [
    [
      68747,
      68747
    ],
    "mapped",
    [
      68811
    ]
  ],
  [
    [
      68748,
      68748
    ],
    "mapped",
    [
      68812
    ]
  ],
  [
    [
      68749,
      68749
    ],
    "mapped",
    [
      68813
    ]
  ],
  [
    [
      68750,
      68750
    ],
    "mapped",
    [
      68814
    ]
  ],
  [
    [
      68751,
      68751
    ],
    "mapped",
    [
      68815
    ]
  ],
  [
    [
      68752,
      68752
    ],
    "mapped",
    [
      68816
    ]
  ],
  [
    [
      68753,
      68753
    ],
    "mapped",
    [
      68817
    ]
  ],
  [
    [
      68754,
      68754
    ],
    "mapped",
    [
      68818
    ]
  ],
  [
    [
      68755,
      68755
    ],
    "mapped",
    [
      68819
    ]
  ],
  [
    [
      68756,
      68756
    ],
    "mapped",
    [
      68820
    ]
  ],
  [
    [
      68757,
      68757
    ],
    "mapped",
    [
      68821
    ]
  ],
  [
    [
      68758,
      68758
    ],
    "mapped",
    [
      68822
    ]
  ],
  [
    [
      68759,
      68759
    ],
    "mapped",
    [
      68823
    ]
  ],
  [
    [
      68760,
      68760
    ],
    "mapped",
    [
      68824
    ]
  ],
  [
    [
      68761,
      68761
    ],
    "mapped",
    [
      68825
    ]
  ],
  [
    [
      68762,
      68762
    ],
    "mapped",
    [
      68826
    ]
  ],
  [
    [
      68763,
      68763
    ],
    "mapped",
    [
      68827
    ]
  ],
  [
    [
      68764,
      68764
    ],
    "mapped",
    [
      68828
    ]
  ],
  [
    [
      68765,
      68765
    ],
    "mapped",
    [
      68829
    ]
  ],
  [
    [
      68766,
      68766
    ],
    "mapped",
    [
      68830
    ]
  ],
  [
    [
      68767,
      68767
    ],
    "mapped",
    [
      68831
    ]
  ],
  [
    [
      68768,
      68768
    ],
    "mapped",
    [
      68832
    ]
  ],
  [
    [
      68769,
      68769
    ],
    "mapped",
    [
      68833
    ]
  ],
  [
    [
      68770,
      68770
    ],
    "mapped",
    [
      68834
    ]
  ],
  [
    [
      68771,
      68771
    ],
    "mapped",
    [
      68835
    ]
  ],
  [
    [
      68772,
      68772
    ],
    "mapped",
    [
      68836
    ]
  ],
  [
    [
      68773,
      68773
    ],
    "mapped",
    [
      68837
    ]
  ],
  [
    [
      68774,
      68774
    ],
    "mapped",
    [
      68838
    ]
  ],
  [
    [
      68775,
      68775
    ],
    "mapped",
    [
      68839
    ]
  ],
  [
    [
      68776,
      68776
    ],
    "mapped",
    [
      68840
    ]
  ],
  [
    [
      68777,
      68777
    ],
    "mapped",
    [
      68841
    ]
  ],
  [
    [
      68778,
      68778
    ],
    "mapped",
    [
      68842
    ]
  ],
  [
    [
      68779,
      68779
    ],
    "mapped",
    [
      68843
    ]
  ],
  [
    [
      68780,
      68780
    ],
    "mapped",
    [
      68844
    ]
  ],
  [
    [
      68781,
      68781
    ],
    "mapped",
    [
      68845
    ]
  ],
  [
    [
      68782,
      68782
    ],
    "mapped",
    [
      68846
    ]
  ],
  [
    [
      68783,
      68783
    ],
    "mapped",
    [
      68847
    ]
  ],
  [
    [
      68784,
      68784
    ],
    "mapped",
    [
      68848
    ]
  ],
  [
    [
      68785,
      68785
    ],
    "mapped",
    [
      68849
    ]
  ],
  [
    [
      68786,
      68786
    ],
    "mapped",
    [
      68850
    ]
  ],
  [
    [
      68787,
      68799
    ],
    "disallowed"
  ],
  [
    [
      68800,
      68850
    ],
    "valid"
  ],
  [
    [
      68851,
      68857
    ],
    "disallowed"
  ],
  [
    [
      68858,
      68863
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      68864,
      69215
    ],
    "disallowed"
  ],
  [
    [
      69216,
      69246
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      69247,
      69631
    ],
    "disallowed"
  ],
  [
    [
      69632,
      69702
    ],
    "valid"
  ],
  [
    [
      69703,
      69709
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      69710,
      69713
    ],
    "disallowed"
  ],
  [
    [
      69714,
      69733
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      69734,
      69743
    ],
    "valid"
  ],
  [
    [
      69744,
      69758
    ],
    "disallowed"
  ],
  [
    [
      69759,
      69759
    ],
    "valid"
  ],
  [
    [
      69760,
      69818
    ],
    "valid"
  ],
  [
    [
      69819,
      69820
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      69821,
      69821
    ],
    "disallowed"
  ],
  [
    [
      69822,
      69825
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      69826,
      69839
    ],
    "disallowed"
  ],
  [
    [
      69840,
      69864
    ],
    "valid"
  ],
  [
    [
      69865,
      69871
    ],
    "disallowed"
  ],
  [
    [
      69872,
      69881
    ],
    "valid"
  ],
  [
    [
      69882,
      69887
    ],
    "disallowed"
  ],
  [
    [
      69888,
      69940
    ],
    "valid"
  ],
  [
    [
      69941,
      69941
    ],
    "disallowed"
  ],
  [
    [
      69942,
      69951
    ],
    "valid"
  ],
  [
    [
      69952,
      69955
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      69956,
      69967
    ],
    "disallowed"
  ],
  [
    [
      69968,
      70003
    ],
    "valid"
  ],
  [
    [
      70004,
      70005
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70006,
      70006
    ],
    "valid"
  ],
  [
    [
      70007,
      70015
    ],
    "disallowed"
  ],
  [
    [
      70016,
      70084
    ],
    "valid"
  ],
  [
    [
      70085,
      70088
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70089,
      70089
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70090,
      70092
    ],
    "valid"
  ],
  [
    [
      70093,
      70093
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70094,
      70095
    ],
    "disallowed"
  ],
  [
    [
      70096,
      70105
    ],
    "valid"
  ],
  [
    [
      70106,
      70106
    ],
    "valid"
  ],
  [
    [
      70107,
      70107
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70108,
      70108
    ],
    "valid"
  ],
  [
    [
      70109,
      70111
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70112,
      70112
    ],
    "disallowed"
  ],
  [
    [
      70113,
      70132
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70133,
      70143
    ],
    "disallowed"
  ],
  [
    [
      70144,
      70161
    ],
    "valid"
  ],
  [
    [
      70162,
      70162
    ],
    "disallowed"
  ],
  [
    [
      70163,
      70199
    ],
    "valid"
  ],
  [
    [
      70200,
      70205
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70206,
      70271
    ],
    "disallowed"
  ],
  [
    [
      70272,
      70278
    ],
    "valid"
  ],
  [
    [
      70279,
      70279
    ],
    "disallowed"
  ],
  [
    [
      70280,
      70280
    ],
    "valid"
  ],
  [
    [
      70281,
      70281
    ],
    "disallowed"
  ],
  [
    [
      70282,
      70285
    ],
    "valid"
  ],
  [
    [
      70286,
      70286
    ],
    "disallowed"
  ],
  [
    [
      70287,
      70301
    ],
    "valid"
  ],
  [
    [
      70302,
      70302
    ],
    "disallowed"
  ],
  [
    [
      70303,
      70312
    ],
    "valid"
  ],
  [
    [
      70313,
      70313
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70314,
      70319
    ],
    "disallowed"
  ],
  [
    [
      70320,
      70378
    ],
    "valid"
  ],
  [
    [
      70379,
      70383
    ],
    "disallowed"
  ],
  [
    [
      70384,
      70393
    ],
    "valid"
  ],
  [
    [
      70394,
      70399
    ],
    "disallowed"
  ],
  [
    [
      70400,
      70400
    ],
    "valid"
  ],
  [
    [
      70401,
      70403
    ],
    "valid"
  ],
  [
    [
      70404,
      70404
    ],
    "disallowed"
  ],
  [
    [
      70405,
      70412
    ],
    "valid"
  ],
  [
    [
      70413,
      70414
    ],
    "disallowed"
  ],
  [
    [
      70415,
      70416
    ],
    "valid"
  ],
  [
    [
      70417,
      70418
    ],
    "disallowed"
  ],
  [
    [
      70419,
      70440
    ],
    "valid"
  ],
  [
    [
      70441,
      70441
    ],
    "disallowed"
  ],
  [
    [
      70442,
      70448
    ],
    "valid"
  ],
  [
    [
      70449,
      70449
    ],
    "disallowed"
  ],
  [
    [
      70450,
      70451
    ],
    "valid"
  ],
  [
    [
      70452,
      70452
    ],
    "disallowed"
  ],
  [
    [
      70453,
      70457
    ],
    "valid"
  ],
  [
    [
      70458,
      70459
    ],
    "disallowed"
  ],
  [
    [
      70460,
      70468
    ],
    "valid"
  ],
  [
    [
      70469,
      70470
    ],
    "disallowed"
  ],
  [
    [
      70471,
      70472
    ],
    "valid"
  ],
  [
    [
      70473,
      70474
    ],
    "disallowed"
  ],
  [
    [
      70475,
      70477
    ],
    "valid"
  ],
  [
    [
      70478,
      70479
    ],
    "disallowed"
  ],
  [
    [
      70480,
      70480
    ],
    "valid"
  ],
  [
    [
      70481,
      70486
    ],
    "disallowed"
  ],
  [
    [
      70487,
      70487
    ],
    "valid"
  ],
  [
    [
      70488,
      70492
    ],
    "disallowed"
  ],
  [
    [
      70493,
      70499
    ],
    "valid"
  ],
  [
    [
      70500,
      70501
    ],
    "disallowed"
  ],
  [
    [
      70502,
      70508
    ],
    "valid"
  ],
  [
    [
      70509,
      70511
    ],
    "disallowed"
  ],
  [
    [
      70512,
      70516
    ],
    "valid"
  ],
  [
    [
      70517,
      70783
    ],
    "disallowed"
  ],
  [
    [
      70784,
      70853
    ],
    "valid"
  ],
  [
    [
      70854,
      70854
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      70855,
      70855
    ],
    "valid"
  ],
  [
    [
      70856,
      70863
    ],
    "disallowed"
  ],
  [
    [
      70864,
      70873
    ],
    "valid"
  ],
  [
    [
      70874,
      71039
    ],
    "disallowed"
  ],
  [
    [
      71040,
      71093
    ],
    "valid"
  ],
  [
    [
      71094,
      71095
    ],
    "disallowed"
  ],
  [
    [
      71096,
      71104
    ],
    "valid"
  ],
  [
    [
      71105,
      71113
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      71114,
      71127
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      71128,
      71133
    ],
    "valid"
  ],
  [
    [
      71134,
      71167
    ],
    "disallowed"
  ],
  [
    [
      71168,
      71232
    ],
    "valid"
  ],
  [
    [
      71233,
      71235
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      71236,
      71236
    ],
    "valid"
  ],
  [
    [
      71237,
      71247
    ],
    "disallowed"
  ],
  [
    [
      71248,
      71257
    ],
    "valid"
  ],
  [
    [
      71258,
      71295
    ],
    "disallowed"
  ],
  [
    [
      71296,
      71351
    ],
    "valid"
  ],
  [
    [
      71352,
      71359
    ],
    "disallowed"
  ],
  [
    [
      71360,
      71369
    ],
    "valid"
  ],
  [
    [
      71370,
      71423
    ],
    "disallowed"
  ],
  [
    [
      71424,
      71449
    ],
    "valid"
  ],
  [
    [
      71450,
      71452
    ],
    "disallowed"
  ],
  [
    [
      71453,
      71467
    ],
    "valid"
  ],
  [
    [
      71468,
      71471
    ],
    "disallowed"
  ],
  [
    [
      71472,
      71481
    ],
    "valid"
  ],
  [
    [
      71482,
      71487
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      71488,
      71839
    ],
    "disallowed"
  ],
  [
    [
      71840,
      71840
    ],
    "mapped",
    [
      71872
    ]
  ],
  [
    [
      71841,
      71841
    ],
    "mapped",
    [
      71873
    ]
  ],
  [
    [
      71842,
      71842
    ],
    "mapped",
    [
      71874
    ]
  ],
  [
    [
      71843,
      71843
    ],
    "mapped",
    [
      71875
    ]
  ],
  [
    [
      71844,
      71844
    ],
    "mapped",
    [
      71876
    ]
  ],
  [
    [
      71845,
      71845
    ],
    "mapped",
    [
      71877
    ]
  ],
  [
    [
      71846,
      71846
    ],
    "mapped",
    [
      71878
    ]
  ],
  [
    [
      71847,
      71847
    ],
    "mapped",
    [
      71879
    ]
  ],
  [
    [
      71848,
      71848
    ],
    "mapped",
    [
      71880
    ]
  ],
  [
    [
      71849,
      71849
    ],
    "mapped",
    [
      71881
    ]
  ],
  [
    [
      71850,
      71850
    ],
    "mapped",
    [
      71882
    ]
  ],
  [
    [
      71851,
      71851
    ],
    "mapped",
    [
      71883
    ]
  ],
  [
    [
      71852,
      71852
    ],
    "mapped",
    [
      71884
    ]
  ],
  [
    [
      71853,
      71853
    ],
    "mapped",
    [
      71885
    ]
  ],
  [
    [
      71854,
      71854
    ],
    "mapped",
    [
      71886
    ]
  ],
  [
    [
      71855,
      71855
    ],
    "mapped",
    [
      71887
    ]
  ],
  [
    [
      71856,
      71856
    ],
    "mapped",
    [
      71888
    ]
  ],
  [
    [
      71857,
      71857
    ],
    "mapped",
    [
      71889
    ]
  ],
  [
    [
      71858,
      71858
    ],
    "mapped",
    [
      71890
    ]
  ],
  [
    [
      71859,
      71859
    ],
    "mapped",
    [
      71891
    ]
  ],
  [
    [
      71860,
      71860
    ],
    "mapped",
    [
      71892
    ]
  ],
  [
    [
      71861,
      71861
    ],
    "mapped",
    [
      71893
    ]
  ],
  [
    [
      71862,
      71862
    ],
    "mapped",
    [
      71894
    ]
  ],
  [
    [
      71863,
      71863
    ],
    "mapped",
    [
      71895
    ]
  ],
  [
    [
      71864,
      71864
    ],
    "mapped",
    [
      71896
    ]
  ],
  [
    [
      71865,
      71865
    ],
    "mapped",
    [
      71897
    ]
  ],
  [
    [
      71866,
      71866
    ],
    "mapped",
    [
      71898
    ]
  ],
  [
    [
      71867,
      71867
    ],
    "mapped",
    [
      71899
    ]
  ],
  [
    [
      71868,
      71868
    ],
    "mapped",
    [
      71900
    ]
  ],
  [
    [
      71869,
      71869
    ],
    "mapped",
    [
      71901
    ]
  ],
  [
    [
      71870,
      71870
    ],
    "mapped",
    [
      71902
    ]
  ],
  [
    [
      71871,
      71871
    ],
    "mapped",
    [
      71903
    ]
  ],
  [
    [
      71872,
      71913
    ],
    "valid"
  ],
  [
    [
      71914,
      71922
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      71923,
      71934
    ],
    "disallowed"
  ],
  [
    [
      71935,
      71935
    ],
    "valid"
  ],
  [
    [
      71936,
      72383
    ],
    "disallowed"
  ],
  [
    [
      72384,
      72440
    ],
    "valid"
  ],
  [
    [
      72441,
      73727
    ],
    "disallowed"
  ],
  [
    [
      73728,
      74606
    ],
    "valid"
  ],
  [
    [
      74607,
      74648
    ],
    "valid"
  ],
  [
    [
      74649,
      74649
    ],
    "valid"
  ],
  [
    [
      74650,
      74751
    ],
    "disallowed"
  ],
  [
    [
      74752,
      74850
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      74851,
      74862
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      74863,
      74863
    ],
    "disallowed"
  ],
  [
    [
      74864,
      74867
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      74868,
      74868
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      74869,
      74879
    ],
    "disallowed"
  ],
  [
    [
      74880,
      75075
    ],
    "valid"
  ],
  [
    [
      75076,
      77823
    ],
    "disallowed"
  ],
  [
    [
      77824,
      78894
    ],
    "valid"
  ],
  [
    [
      78895,
      82943
    ],
    "disallowed"
  ],
  [
    [
      82944,
      83526
    ],
    "valid"
  ],
  [
    [
      83527,
      92159
    ],
    "disallowed"
  ],
  [
    [
      92160,
      92728
    ],
    "valid"
  ],
  [
    [
      92729,
      92735
    ],
    "disallowed"
  ],
  [
    [
      92736,
      92766
    ],
    "valid"
  ],
  [
    [
      92767,
      92767
    ],
    "disallowed"
  ],
  [
    [
      92768,
      92777
    ],
    "valid"
  ],
  [
    [
      92778,
      92781
    ],
    "disallowed"
  ],
  [
    [
      92782,
      92783
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      92784,
      92879
    ],
    "disallowed"
  ],
  [
    [
      92880,
      92909
    ],
    "valid"
  ],
  [
    [
      92910,
      92911
    ],
    "disallowed"
  ],
  [
    [
      92912,
      92916
    ],
    "valid"
  ],
  [
    [
      92917,
      92917
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      92918,
      92927
    ],
    "disallowed"
  ],
  [
    [
      92928,
      92982
    ],
    "valid"
  ],
  [
    [
      92983,
      92991
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      92992,
      92995
    ],
    "valid"
  ],
  [
    [
      92996,
      92997
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      92998,
      93007
    ],
    "disallowed"
  ],
  [
    [
      93008,
      93017
    ],
    "valid"
  ],
  [
    [
      93018,
      93018
    ],
    "disallowed"
  ],
  [
    [
      93019,
      93025
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      93026,
      93026
    ],
    "disallowed"
  ],
  [
    [
      93027,
      93047
    ],
    "valid"
  ],
  [
    [
      93048,
      93052
    ],
    "disallowed"
  ],
  [
    [
      93053,
      93071
    ],
    "valid"
  ],
  [
    [
      93072,
      93951
    ],
    "disallowed"
  ],
  [
    [
      93952,
      94020
    ],
    "valid"
  ],
  [
    [
      94021,
      94031
    ],
    "disallowed"
  ],
  [
    [
      94032,
      94078
    ],
    "valid"
  ],
  [
    [
      94079,
      94094
    ],
    "disallowed"
  ],
  [
    [
      94095,
      94111
    ],
    "valid"
  ],
  [
    [
      94112,
      110591
    ],
    "disallowed"
  ],
  [
    [
      110592,
      110593
    ],
    "valid"
  ],
  [
    [
      110594,
      113663
    ],
    "disallowed"
  ],
  [
    [
      113664,
      113770
    ],
    "valid"
  ],
  [
    [
      113771,
      113775
    ],
    "disallowed"
  ],
  [
    [
      113776,
      113788
    ],
    "valid"
  ],
  [
    [
      113789,
      113791
    ],
    "disallowed"
  ],
  [
    [
      113792,
      113800
    ],
    "valid"
  ],
  [
    [
      113801,
      113807
    ],
    "disallowed"
  ],
  [
    [
      113808,
      113817
    ],
    "valid"
  ],
  [
    [
      113818,
      113819
    ],
    "disallowed"
  ],
  [
    [
      113820,
      113820
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      113821,
      113822
    ],
    "valid"
  ],
  [
    [
      113823,
      113823
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      113824,
      113827
    ],
    "ignored"
  ],
  [
    [
      113828,
      118783
    ],
    "disallowed"
  ],
  [
    [
      118784,
      119029
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119030,
      119039
    ],
    "disallowed"
  ],
  [
    [
      119040,
      119078
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119079,
      119080
    ],
    "disallowed"
  ],
  [
    [
      119081,
      119081
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119082,
      119133
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119134,
      119134
    ],
    "mapped",
    [
      119127,
      119141
    ]
  ],
  [
    [
      119135,
      119135
    ],
    "mapped",
    [
      119128,
      119141
    ]
  ],
  [
    [
      119136,
      119136
    ],
    "mapped",
    [
      119128,
      119141,
      119150
    ]
  ],
  [
    [
      119137,
      119137
    ],
    "mapped",
    [
      119128,
      119141,
      119151
    ]
  ],
  [
    [
      119138,
      119138
    ],
    "mapped",
    [
      119128,
      119141,
      119152
    ]
  ],
  [
    [
      119139,
      119139
    ],
    "mapped",
    [
      119128,
      119141,
      119153
    ]
  ],
  [
    [
      119140,
      119140
    ],
    "mapped",
    [
      119128,
      119141,
      119154
    ]
  ],
  [
    [
      119141,
      119154
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119155,
      119162
    ],
    "disallowed"
  ],
  [
    [
      119163,
      119226
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119227,
      119227
    ],
    "mapped",
    [
      119225,
      119141
    ]
  ],
  [
    [
      119228,
      119228
    ],
    "mapped",
    [
      119226,
      119141
    ]
  ],
  [
    [
      119229,
      119229
    ],
    "mapped",
    [
      119225,
      119141,
      119150
    ]
  ],
  [
    [
      119230,
      119230
    ],
    "mapped",
    [
      119226,
      119141,
      119150
    ]
  ],
  [
    [
      119231,
      119231
    ],
    "mapped",
    [
      119225,
      119141,
      119151
    ]
  ],
  [
    [
      119232,
      119232
    ],
    "mapped",
    [
      119226,
      119141,
      119151
    ]
  ],
  [
    [
      119233,
      119261
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119262,
      119272
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119273,
      119295
    ],
    "disallowed"
  ],
  [
    [
      119296,
      119365
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119366,
      119551
    ],
    "disallowed"
  ],
  [
    [
      119552,
      119638
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119639,
      119647
    ],
    "disallowed"
  ],
  [
    [
      119648,
      119665
    ],
    "valid",
    [],
    "NV8"
  ],
  [
    [
      119666,
      119807
    ],
    "disallowed"
  ],
  [
    [
      119808,
      119808
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119809,
      119809
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      119810,
      119810
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119811,
      119811
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119812,
      119812
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      119813,
      119813
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      119814,
      119814
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      119815,
      119815
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      119816,
      119816
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      119817,
      119817
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      119818,
      119818
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      119819,
      119819
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      119820,
      119820
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      119821,
      119821
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      119822,
      119822
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      119823,
      119823
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      119824,
      119824
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      119825,
      119825
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      119826,
      119826
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      119827,
      119827
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      119828,
      119828
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      119829,
      119829
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      119830,
      119830
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      119831,
      119831
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      119832,
      119832
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      119833,
      119833
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      119834,
      119834
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119835,
      119835
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      119836,
      119836
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119837,
      119837
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119838,
      119838
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      119839,
      119839
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      119840,
      119840
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      119841,
      119841
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      119842,
      119842
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      119843,
      119843
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      119844,
      119844
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      119845,
      119845
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      119846,
      119846
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      119847,
      119847
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      119848,
      119848
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      119849,
      119849
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      119850,
      119850
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      119851,
      119851
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      119852,
      119852
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      119853,
      119853
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      119854,
      119854
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      119855,
      119855
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      119856,
      119856
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      119857,
      119857
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      119858,
      119858
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      119859,
      119859
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      119860,
      119860
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119861,
      119861
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      119862,
      119862
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119863,
      119863
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119864,
      119864
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      119865,
      119865
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      119866,
      119866
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      119867,
      119867
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      119868,
      119868
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      119869,
      119869
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      119870,
      119870
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      119871,
      119871
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      119872,
      119872
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      119873,
      119873
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      119874,
      119874
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      119875,
      119875
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      119876,
      119876
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      119877,
      119877
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      119878,
      119878
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      119879,
      119879
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      119880,
      119880
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      119881,
      119881
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      119882,
      119882
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      119883,
      119883
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      119884,
      119884
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      119885,
      119885
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      119886,
      119886
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119887,
      119887
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      119888,
      119888
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119889,
      119889
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119890,
      119890
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      119891,
      119891
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      119892,
      119892
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      119893,
      119893
    ],
    "disallowed"
  ],
  [
    [
      119894,
      119894
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      119895,
      119895
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      119896,
      119896
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      119897,
      119897
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      119898,
      119898
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      119899,
      119899
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      119900,
      119900
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      119901,
      119901
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      119902,
      119902
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      119903,
      119903
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      119904,
      119904
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      119905,
      119905
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      119906,
      119906
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      119907,
      119907
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      119908,
      119908
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      119909,
      119909
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      119910,
      119910
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      119911,
      119911
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      119912,
      119912
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119913,
      119913
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      119914,
      119914
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119915,
      119915
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119916,
      119916
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      119917,
      119917
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      119918,
      119918
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      119919,
      119919
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      119920,
      119920
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      119921,
      119921
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      119922,
      119922
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      119923,
      119923
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      119924,
      119924
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      119925,
      119925
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      119926,
      119926
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      119927,
      119927
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      119928,
      119928
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      119929,
      119929
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      119930,
      119930
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      119931,
      119931
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      119932,
      119932
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      119933,
      119933
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      119934,
      119934
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      119935,
      119935
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      119936,
      119936
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      119937,
      119937
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      119938,
      119938
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119939,
      119939
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      119940,
      119940
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119941,
      119941
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119942,
      119942
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      119943,
      119943
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      119944,
      119944
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      119945,
      119945
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      119946,
      119946
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      119947,
      119947
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      119948,
      119948
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      119949,
      119949
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      119950,
      119950
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      119951,
      119951
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      119952,
      119952
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      119953,
      119953
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      119954,
      119954
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      119955,
      119955
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      119956,
      119956
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      119957,
      119957
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      119958,
      119958
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      119959,
      119959
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      119960,
      119960
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      119961,
      119961
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      119962,
      119962
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      119963,
      119963
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      119964,
      119964
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119965,
      119965
    ],
    "disallowed"
  ],
  [
    [
      119966,
      119966
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119967,
      119967
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119968,
      119969
    ],
    "disallowed"
  ],
  [
    [
      119970,
      119970
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      119971,
      119972
    ],
    "disallowed"
  ],
  [
    [
      119973,
      119973
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      119974,
      119974
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      119975,
      119976
    ],
    "disallowed"
  ],
  [
    [
      119977,
      119977
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      119978,
      119978
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      119979,
      119979
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      119980,
      119980
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      119981,
      119981
    ],
    "disallowed"
  ],
  [
    [
      119982,
      119982
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      119983,
      119983
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      119984,
      119984
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      119985,
      119985
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      119986,
      119986
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      119987,
      119987
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      119988,
      119988
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      119989,
      119989
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      119990,
      119990
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      119991,
      119991
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      119992,
      119992
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      119993,
      119993
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      119994,
      119994
    ],
    "disallowed"
  ],
  [
    [
      119995,
      119995
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      119996,
      119996
    ],
    "disallowed"
  ],
  [
    [
      119997,
      119997
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      119998,
      119998
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      119999,
      119999
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      12e4,
      12e4
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120001,
      120001
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120002,
      120002
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120003,
      120003
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120004,
      120004
    ],
    "disallowed"
  ],
  [
    [
      120005,
      120005
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120006,
      120006
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120007,
      120007
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120008,
      120008
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120009,
      120009
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120010,
      120010
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120011,
      120011
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120012,
      120012
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120013,
      120013
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120014,
      120014
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120015,
      120015
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120016,
      120016
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120017,
      120017
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120018,
      120018
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120019,
      120019
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120020,
      120020
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120021,
      120021
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120022,
      120022
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120023,
      120023
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120024,
      120024
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120025,
      120025
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120026,
      120026
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120027,
      120027
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120028,
      120028
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120029,
      120029
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120030,
      120030
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120031,
      120031
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120032,
      120032
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120033,
      120033
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120034,
      120034
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120035,
      120035
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120036,
      120036
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120037,
      120037
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120038,
      120038
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120039,
      120039
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120040,
      120040
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120041,
      120041
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120042,
      120042
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120043,
      120043
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120044,
      120044
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120045,
      120045
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120046,
      120046
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120047,
      120047
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120048,
      120048
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120049,
      120049
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120050,
      120050
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120051,
      120051
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120052,
      120052
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120053,
      120053
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120054,
      120054
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120055,
      120055
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120056,
      120056
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120057,
      120057
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120058,
      120058
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120059,
      120059
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120060,
      120060
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120061,
      120061
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120062,
      120062
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120063,
      120063
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120064,
      120064
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120065,
      120065
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120066,
      120066
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120067,
      120067
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120068,
      120068
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120069,
      120069
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120070,
      120070
    ],
    "disallowed"
  ],
  [
    [
      120071,
      120071
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120072,
      120072
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120073,
      120073
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120074,
      120074
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120075,
      120076
    ],
    "disallowed"
  ],
  [
    [
      120077,
      120077
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120078,
      120078
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120079,
      120079
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120080,
      120080
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120081,
      120081
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120082,
      120082
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120083,
      120083
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120084,
      120084
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120085,
      120085
    ],
    "disallowed"
  ],
  [
    [
      120086,
      120086
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120087,
      120087
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120088,
      120088
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120089,
      120089
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120090,
      120090
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120091,
      120091
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120092,
      120092
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120093,
      120093
    ],
    "disallowed"
  ],
  [
    [
      120094,
      120094
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120095,
      120095
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120096,
      120096
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120097,
      120097
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120098,
      120098
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120099,
      120099
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120100,
      120100
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120101,
      120101
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120102,
      120102
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120103,
      120103
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120104,
      120104
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120105,
      120105
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120106,
      120106
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120107,
      120107
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120108,
      120108
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120109,
      120109
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120110,
      120110
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120111,
      120111
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120112,
      120112
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120113,
      120113
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120114,
      120114
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120115,
      120115
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120116,
      120116
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120117,
      120117
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120118,
      120118
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120119,
      120119
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120120,
      120120
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120121,
      120121
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120122,
      120122
    ],
    "disallowed"
  ],
  [
    [
      120123,
      120123
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120124,
      120124
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120125,
      120125
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120126,
      120126
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120127,
      120127
    ],
    "disallowed"
  ],
  [
    [
      120128,
      120128
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120129,
      120129
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120130,
      120130
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120131,
      120131
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120132,
      120132
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120133,
      120133
    ],
    "disallowed"
  ],
  [
    [
      120134,
      120134
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120135,
      120137
    ],
    "disallowed"
  ],
  [
    [
      120138,
      120138
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120139,
      120139
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120140,
      120140
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120141,
      120141
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120142,
      120142
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120143,
      120143
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120144,
      120144
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120145,
      120145
    ],
    "disallowed"
  ],
  [
    [
      120146,
      120146
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120147,
      120147
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120148,
      120148
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120149,
      120149
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120150,
      120150
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120151,
      120151
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120152,
      120152
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120153,
      120153
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120154,
      120154
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120155,
      120155
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120156,
      120156
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120157,
      120157
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120158,
      120158
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120159,
      120159
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120160,
      120160
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120161,
      120161
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120162,
      120162
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120163,
      120163
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120164,
      120164
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120165,
      120165
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120166,
      120166
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120167,
      120167
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120168,
      120168
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120169,
      120169
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120170,
      120170
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120171,
      120171
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120172,
      120172
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120173,
      120173
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120174,
      120174
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120175,
      120175
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120176,
      120176
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120177,
      120177
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120178,
      120178
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120179,
      120179
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120180,
      120180
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120181,
      120181
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120182,
      120182
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120183,
      120183
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120184,
      120184
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120185,
      120185
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120186,
      120186
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120187,
      120187
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120188,
      120188
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120189,
      120189
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120190,
      120190
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120191,
      120191
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120192,
      120192
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120193,
      120193
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120194,
      120194
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120195,
      120195
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120196,
      120196
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120197,
      120197
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120198,
      120198
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120199,
      120199
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120200,
      120200
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120201,
      120201
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120202,
      120202
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120203,
      120203
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120204,
      120204
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120205,
      120205
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120206,
      120206
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120207,
      120207
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120208,
      120208
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120209,
      120209
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120210,
      120210
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120211,
      120211
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120212,
      120212
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120213,
      120213
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120214,
      120214
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120215,
      120215
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120216,
      120216
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120217,
      120217
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120218,
      120218
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120219,
      120219
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120220,
      120220
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120221,
      120221
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120222,
      120222
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120223,
      120223
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120224,
      120224
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120225,
      120225
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120226,
      120226
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120227,
      120227
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120228,
      120228
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120229,
      120229
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120230,
      120230
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120231,
      120231
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120232,
      120232
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120233,
      120233
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120234,
      120234
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120235,
      120235
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120236,
      120236
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120237,
      120237
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120238,
      120238
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120239,
      120239
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120240,
      120240
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120241,
      120241
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120242,
      120242
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120243,
      120243
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120244,
      120244
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120245,
      120245
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120246,
      120246
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120247,
      120247
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120248,
      120248
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120249,
      120249
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120250,
      120250
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120251,
      120251
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120252,
      120252
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120253,
      120253
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120254,
      120254
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120255,
      120255
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120256,
      120256
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120257,
      120257
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120258,
      120258
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120259,
      120259
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120260,
      120260
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120261,
      120261
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120262,
      120262
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120263,
      120263
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120264,
      120264
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120265,
      120265
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120266,
      120266
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120267,
      120267
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120268,
      120268
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120269,
      120269
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120270,
      120270
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120271,
      120271
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120272,
      120272
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120273,
      120273
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120274,
      120274
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120275,
      120275
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120276,
      120276
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120277,
      120277
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120278,
      120278
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120279,
      120279
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120280,
      120280
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120281,
      120281
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120282,
      120282
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120283,
      120283
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120284,
      120284
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120285,
      120285
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120286,
      120286
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120287,
      120287
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120288,
      120288
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120289,
      120289
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120290,
      120290
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120291,
      120291
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120292,
      120292
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120293,
      120293
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120294,
      120294
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120295,
      120295
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120296,
      120296
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120297,
      120297
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120298,
      120298
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120299,
      120299
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120300,
      120300
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120301,
      120301
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120302,
      120302
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120303,
      120303
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120304,
      120304
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120305,
      120305
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120306,
      120306
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120307,
      120307
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120308,
      120308
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120309,
      120309
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120310,
      120310
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120311,
      120311
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120312,
      120312
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120313,
      120313
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120314,
      120314
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120315,
      120315
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120316,
      120316
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120317,
      120317
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120318,
      120318
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120319,
      120319
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120320,
      120320
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120321,
      120321
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120322,
      120322
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120323,
      120323
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120324,
      120324
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120325,
      120325
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120326,
      120326
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120327,
      120327
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120328,
      120328
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120329,
      120329
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120330,
      120330
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120331,
      120331
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120332,
      120332
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120333,
      120333
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120334,
      120334
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120335,
      120335
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120336,
      120336
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120337,
      120337
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120338,
      120338
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120339,
      120339
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120340,
      120340
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120341,
      120341
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120342,
      120342
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120343,
      120343
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120344,
      120344
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120345,
      120345
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120346,
      120346
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120347,
      120347
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120348,
      120348
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120349,
      120349
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120350,
      120350
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120351,
      120351
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120352,
      120352
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120353,
      120353
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120354,
      120354
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120355,
      120355
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120356,
      120356
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120357,
      120357
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120358,
      120358
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120359,
      120359
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120360,
      120360
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120361,
      120361
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120362,
      120362
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120363,
      120363
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120364,
      120364
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120365,
      120365
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120366,
      120366
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120367,
      120367
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120368,
      120368
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120369,
      120369
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120370,
      120370
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120371,
      120371
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120372,
      120372
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120373,
      120373
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120374,
      120374
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120375,
      120375
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120376,
      120376
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120377,
      120377
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120378,
      120378
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120379,
      120379
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120380,
      120380
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120381,
      120381
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120382,
      120382
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120383,
      120383
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120384,
      120384
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120385,
      120385
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120386,
      120386
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120387,
      120387
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120388,
      120388
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120389,
      120389
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120390,
      120390
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120391,
      120391
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120392,
      120392
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120393,
      120393
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120394,
      120394
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120395,
      120395
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120396,
      120396
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120397,
      120397
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120398,
      120398
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120399,
      120399
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120400,
      120400
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120401,
      120401
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120402,
      120402
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120403,
      120403
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120404,
      120404
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120405,
      120405
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120406,
      120406
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120407,
      120407
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120408,
      120408
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120409,
      120409
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120410,
      120410
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120411,
      120411
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120412,
      120412
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120413,
      120413
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120414,
      120414
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120415,
      120415
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120416,
      120416
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120417,
      120417
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120418,
      120418
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120419,
      120419
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120420,
      120420
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120421,
      120421
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120422,
      120422
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120423,
      120423
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120424,
      120424
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120425,
      120425
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120426,
      120426
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120427,
      120427
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120428,
      120428
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120429,
      120429
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120430,
      120430
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120431,
      120431
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120432,
      120432
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120433,
      120433
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120434,
      120434
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120435,
      120435
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120436,
      120436
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120437,
      120437
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120438,
      120438
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120439,
      120439
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120440,
      120440
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120441,
      120441
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120442,
      120442
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120443,
      120443
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120444,
      120444
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120445,
      120445
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120446,
      120446
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120447,
      120447
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120448,
      120448
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120449,
      120449
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120450,
      120450
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120451,
      120451
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120452,
      120452
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120453,
      120453
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120454,
      120454
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120455,
      120455
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120456,
      120456
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120457,
      120457
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120458,
      120458
    ],
    "mapped",
    [
      97
    ]
  ],
  [
    [
      120459,
      120459
    ],
    "mapped",
    [
      98
    ]
  ],
  [
    [
      120460,
      120460
    ],
    "mapped",
    [
      99
    ]
  ],
  [
    [
      120461,
      120461
    ],
    "mapped",
    [
      100
    ]
  ],
  [
    [
      120462,
      120462
    ],
    "mapped",
    [
      101
    ]
  ],
  [
    [
      120463,
      120463
    ],
    "mapped",
    [
      102
    ]
  ],
  [
    [
      120464,
      120464
    ],
    "mapped",
    [
      103
    ]
  ],
  [
    [
      120465,
      120465
    ],
    "mapped",
    [
      104
    ]
  ],
  [
    [
      120466,
      120466
    ],
    "mapped",
    [
      105
    ]
  ],
  [
    [
      120467,
      120467
    ],
    "mapped",
    [
      106
    ]
  ],
  [
    [
      120468,
      120468
    ],
    "mapped",
    [
      107
    ]
  ],
  [
    [
      120469,
      120469
    ],
    "mapped",
    [
      108
    ]
  ],
  [
    [
      120470,
      120470
    ],
    "mapped",
    [
      109
    ]
  ],
  [
    [
      120471,
      120471
    ],
    "mapped",
    [
      110
    ]
  ],
  [
    [
      120472,
      120472
    ],
    "mapped",
    [
      111
    ]
  ],
  [
    [
      120473,
      120473
    ],
    "mapped",
    [
      112
    ]
  ],
  [
    [
      120474,
      120474
    ],
    "mapped",
    [
      113
    ]
  ],
  [
    [
      120475,
      120475
    ],
    "mapped",
    [
      114
    ]
  ],
  [
    [
      120476,
      120476
    ],
    "mapped",
    [
      115
    ]
  ],
  [
    [
      120477,
      120477
    ],
    "mapped",
    [
      116
    ]
  ],
  [
    [
      120478,
      120478
    ],
    "mapped",
    [
      117
    ]
  ],
  [
    [
      120479,
      120479
    ],
    "mapped",
    [
      118
    ]
  ],
  [
    [
      120480,
      120480
    ],
    "mapped",
    [
      119
    ]
  ],
  [
    [
      120481,
      120481
    ],
    "mapped",
    [
      120
    ]
  ],
  [
    [
      120482,
      120482
    ],
    "mapped",
    [
      121
    ]
  ],
  [
    [
      120483,
      120483
    ],
    "mapped",
    [
      122
    ]
  ],
  [
    [
      120484,
      120484
    ],
    "mapped",
    [
      305
    ]
  ],
  [
    [
      120485,
      120485
    ],
    "mapped",
    [
      567
    ]
  ],
  [
    [
      120486,
      120487
    ],
    "disallowed"
  ],
  [
    [
      120488,
      120488
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120489,
      120489
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120490,
      120490
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120491,
      120491
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120492,
      120492
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120493,
      120493
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120494,
      120494
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120495,
      120495
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120496,
      120496
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120497,
      120497
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120498,
      120498
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120499,
      120499
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120500,
      120500
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120501,
      120501
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120502,
      120502
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120503,
      120503
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120504,
      120504
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120505,
      120505
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120506,
      120506
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120507,
      120507
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120508,
      120508
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120509,
      120509
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120510,
      120510
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120511,
      120511
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120512,
      120512
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120513,
      120513
    ],
    "mapped",
    [
      8711
    ]
  ],
  [
    [
      120514,
      120514
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120515,
      120515
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120516,
      120516
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120517,
      120517
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120518,
      120518
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120519,
      120519
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120520,
      120520
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120521,
      120521
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120522,
      120522
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120523,
      120523
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120524,
      120524
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120525,
      120525
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120526,
      120526
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120527,
      120527
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120528,
      120528
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120529,
      120529
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120530,
      120530
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120531,
      120532
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120533,
      120533
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120534,
      120534
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120535,
      120535
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120536,
      120536
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120537,
      120537
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120538,
      120538
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120539,
      120539
    ],
    "mapped",
    [
      8706
    ]
  ],
  [
    [
      120540,
      120540
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120541,
      120541
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120542,
      120542
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120543,
      120543
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120544,
      120544
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120545,
      120545
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120546,
      120546
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120547,
      120547
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120548,
      120548
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120549,
      120549
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120550,
      120550
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120551,
      120551
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120552,
      120552
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120553,
      120553
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120554,
      120554
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120555,
      120555
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120556,
      120556
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120557,
      120557
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120558,
      120558
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120559,
      120559
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120560,
      120560
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120561,
      120561
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120562,
      120562
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120563,
      120563
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120564,
      120564
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120565,
      120565
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120566,
      120566
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120567,
      120567
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120568,
      120568
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120569,
      120569
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120570,
      120570
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120571,
      120571
    ],
    "mapped",
    [
      8711
    ]
  ],
  [
    [
      120572,
      120572
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120573,
      120573
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120574,
      120574
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120575,
      120575
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120576,
      120576
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120577,
      120577
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120578,
      120578
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120579,
      120579
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120580,
      120580
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120581,
      120581
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120582,
      120582
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120583,
      120583
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120584,
      120584
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120585,
      120585
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120586,
      120586
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120587,
      120587
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120588,
      120588
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120589,
      120590
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120591,
      120591
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120592,
      120592
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120593,
      120593
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120594,
      120594
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120595,
      120595
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120596,
      120596
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120597,
      120597
    ],
    "mapped",
    [
      8706
    ]
  ],
  [
    [
      120598,
      120598
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120599,
      120599
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120600,
      120600
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120601,
      120601
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120602,
      120602
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120603,
      120603
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120604,
      120604
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120605,
      120605
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120606,
      120606
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120607,
      120607
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120608,
      120608
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120609,
      120609
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120610,
      120610
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120611,
      120611
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120612,
      120612
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120613,
      120613
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120614,
      120614
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120615,
      120615
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120616,
      120616
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120617,
      120617
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120618,
      120618
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120619,
      120619
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120620,
      120620
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120621,
      120621
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120622,
      120622
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120623,
      120623
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120624,
      120624
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120625,
      120625
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120626,
      120626
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120627,
      120627
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120628,
      120628
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120629,
      120629
    ],
    "mapped",
    [
      8711
    ]
  ],
  [
    [
      120630,
      120630
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120631,
      120631
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120632,
      120632
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120633,
      120633
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120634,
      120634
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120635,
      120635
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120636,
      120636
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120637,
      120637
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120638,
      120638
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120639,
      120639
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120640,
      120640
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120641,
      120641
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120642,
      120642
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120643,
      120643
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120644,
      120644
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120645,
      120645
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120646,
      120646
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120647,
      120648
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120649,
      120649
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120650,
      120650
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120651,
      120651
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120652,
      120652
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120653,
      120653
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120654,
      120654
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120655,
      120655
    ],
    "mapped",
    [
      8706
    ]
  ],
  [
    [
      120656,
      120656
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120657,
      120657
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120658,
      120658
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120659,
      120659
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120660,
      120660
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120661,
      120661
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120662,
      120662
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120663,
      120663
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120664,
      120664
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120665,
      120665
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120666,
      120666
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120667,
      120667
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120668,
      120668
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120669,
      120669
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120670,
      120670
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120671,
      120671
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120672,
      120672
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120673,
      120673
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120674,
      120674
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120675,
      120675
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120676,
      120676
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120677,
      120677
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120678,
      120678
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120679,
      120679
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120680,
      120680
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120681,
      120681
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120682,
      120682
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120683,
      120683
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120684,
      120684
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120685,
      120685
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120686,
      120686
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120687,
      120687
    ],
    "mapped",
    [
      8711
    ]
  ],
  [
    [
      120688,
      120688
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120689,
      120689
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120690,
      120690
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120691,
      120691
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120692,
      120692
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120693,
      120693
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120694,
      120694
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120695,
      120695
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120696,
      120696
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120697,
      120697
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120698,
      120698
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120699,
      120699
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120700,
      120700
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120701,
      120701
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120702,
      120702
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120703,
      120703
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120704,
      120704
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120705,
      120706
    ],
    "mapped",
    [
      963
    ]
  ],
  [
    [
      120707,
      120707
    ],
    "mapped",
    [
      964
    ]
  ],
  [
    [
      120708,
      120708
    ],
    "mapped",
    [
      965
    ]
  ],
  [
    [
      120709,
      120709
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120710,
      120710
    ],
    "mapped",
    [
      967
    ]
  ],
  [
    [
      120711,
      120711
    ],
    "mapped",
    [
      968
    ]
  ],
  [
    [
      120712,
      120712
    ],
    "mapped",
    [
      969
    ]
  ],
  [
    [
      120713,
      120713
    ],
    "mapped",
    [
      8706
    ]
  ],
  [
    [
      120714,
      120714
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120715,
      120715
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120716,
      120716
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120717,
      120717
    ],
    "mapped",
    [
      966
    ]
  ],
  [
    [
      120718,
      120718
    ],
    "mapped",
    [
      961
    ]
  ],
  [
    [
      120719,
      120719
    ],
    "mapped",
    [
      960
    ]
  ],
  [
    [
      120720,
      120720
    ],
    "mapped",
    [
      945
    ]
  ],
  [
    [
      120721,
      120721
    ],
    "mapped",
    [
      946
    ]
  ],
  [
    [
      120722,
      120722
    ],
    "mapped",
    [
      947
    ]
  ],
  [
    [
      120723,
      120723
    ],
    "mapped",
    [
      948
    ]
  ],
  [
    [
      120724,
      120724
    ],
    "mapped",
    [
      949
    ]
  ],
  [
    [
      120725,
      120725
    ],
    "mapped",
    [
      950
    ]
  ],
  [
    [
      120726,
      120726
    ],
    "mapped",
    [
      951
    ]
  ],
  [
    [
      120727,
      120727
    ],
    "mapped",
    [
      952
    ]
  ],
  [
    [
      120728,
      120728
    ],
    "mapped",
    [
      953
    ]
  ],
  [
    [
      120729,
      120729
    ],
    "mapped",
    [
      954
    ]
  ],
  [
    [
      120730,
      120730
    ],
    "mapped",
    [
      955
    ]
  ],
  [
    [
      120731,
      120731
    ],
    "mapped",
    [
      956
    ]
  ],
  [
    [
      120732,
      120732
    ],
    "mapped",
    [
      957
    ]
  ],
  [
    [
      120733,
      120733
    ],
    "mapped",
    [
      958
    ]
  ],
  [
    [
      120734,
      120734
    ],
    "mapped",
    [
      959
    ]
  ],
  [
    [
      120735,
      120735
    ],
    "mapped",
    [
      960
    ]