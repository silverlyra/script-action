import "node:fs";
import "node:path";
import { F as k, a as U } from "./index-787186d0.js";
import "fs/promises";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "crypto";
import "os";
import "fs";
import "path";
import "http";
import "https";
import "net";
import "tls";
import "events";
import "assert";
import "util";
import "stream";
import "url";
import "perf_hooks";
import "zlib";
import "string_decoder";
import "child_process";
import "timers";
let f = 0;
const t = {
  START_BOUNDARY: f++,
  HEADER_FIELD_START: f++,
  HEADER_FIELD: f++,
  HEADER_VALUE_START: f++,
  HEADER_VALUE: f++,
  HEADER_VALUE_ALMOST_DONE: f++,
  HEADERS_ALMOST_DONE: f++,
  PART_DATA_START: f++,
  PART_DATA: f++,
  END: f++
};
let F = 1;
const _ = {
  PART_BOUNDARY: F,
  LAST_BOUNDARY: F *= 2
}, O = 10, g = 13, w = 32, P = 45, B = 58, V = 97, Y = 122, x = (p) => p | 32, R = () => {
};
class C {
  /**
   * @param {string} boundary
   */
  constructor(i) {
    this.index = 0, this.flags = 0, this.onHeaderEnd = R, this.onHeaderField = R, this.onHeadersEnd = R, this.onHeaderValue = R, this.onPartBegin = R, this.onPartData = R, this.onPartEnd = R, this.boundaryChars = {}, i = `\r
--` + i;
    const n = new Uint8Array(i.length);
    for (let r = 0; r < i.length; r++)
      n[r] = i.charCodeAt(r), this.boundaryChars[n[r]] = !0;
    this.boundary = n, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = t.START_BOUNDARY;
  }
  /**
   * @param {Uint8Array} data
   */
  write(i) {
    let n = 0;
    const r = i.length;
    let E = this.index, { lookbehind: l, boundary: d, boundaryChars: m, index: e, state: a, flags: A } = this;
    const u = this.boundary.length, S = u - 1, N = i.length;
    let o, b;
    const h = (c) => {
      this[c + "Mark"] = n;
    }, s = (c) => {
      delete this[c + "Mark"];
    }, D = (c, L, T, y) => {
      (L === void 0 || L !== T) && this[c](y && y.subarray(L, T));
    }, H = (c, L) => {
      const T = c + "Mark";
      T in this && (L ? (D(c, this[T], n, i), delete this[T]) : (D(c, this[T], i.length, i), this[T] = 0));
    };
    for (n = 0; n < r; n++)
      switch (o = i[n], a) {
        case t.START_BOUNDARY:
          if (e === d.length - 2) {
            if (o === P)
              A |= _.LAST_BOUNDARY;
            else if (o !== g)
              return;
            e++;
            break;
          } else if (e - 1 === d.length - 2) {
            if (A & _.LAST_BOUNDARY && o === P)
              a = t.END, A = 0;
            else if (!(A & _.LAST_BOUNDARY) && o === O)
              e = 0, D("onPartBegin"), a = t.HEADER_FIELD_START;
            else
              return;
            break;
          }
          o !== d[e + 2] && (e = -2), o === d[e + 2] && e++;
          break;
        case t.HEADER_FIELD_START:
          a = t.HEADER_FIELD, h("onHeaderField"), e = 0;
        case t.HEADER_FIELD:
          if (o === g) {
            s("onHeaderField"), a = t.HEADERS_ALMOST_DONE;
            break;
          }
          if (e++, o === P)
            break;
          if (o === B) {
            if (e === 1)
              return;
            H("onHeaderField", !0), a = t.HEADER_VALUE_START;
            break;
          }
          if (b = x(o), b < V || b > Y)
            return;
          break;
        case t.HEADER_VALUE_START:
          if (o === w)
            break;
          h("onHeaderValue"), a = t.HEADER_VALUE;
        case t.HEADER_VALUE:
          o === g && (H("onHeaderValue", !0), D("onHeaderEnd"), a = t.HEADER_VALUE_ALMOST_DONE);
          break;
        case t.HEADER_VALUE_ALMOST_DONE:
          if (o !== O)
            return;
          a = t.HEADER_FIELD_START;
          break;
        case t.HEADERS_ALMOST_DONE:
          if (o !== O)
            return;
          D("onHeadersEnd"), a = t.PART_DATA_START;
          break;
        case t.PART_DATA_START:
          a = t.PART_DATA, h("onPartData");
        case t.PART_DATA:
          if (E = e, e === 0) {
            for (n += S; n < N && !(i[n] in m); )
              n += u;
            n -= S, o = i[n];
          }
          if (e < d.length)
            d[e] === o ? (e === 0 && H("onPartData", !0), e++) : e = 0;
          else if (e === d.length)
            e++, o === g ? A |= _.PART_BOUNDARY : o === P ? A |= _.LAST_BOUNDARY : e = 0;
          else if (e - 1 === d.length)
            if (A & _.PART_BOUNDARY) {
              if (e = 0, o === O) {
                A &= ~_.PART_BOUNDARY, D("onPartEnd"), D("onPartBegin"), a = t.HEADER_FIELD_START;
                break;
              }
            } else
              A & _.LAST_BOUNDARY && o === P ? (D("onPartEnd"), a = t.END, A = 0) : e = 0;
          if (e > 0)
            l[e - 1] = o;
          else if (E > 0) {
            const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
            D("onPartData", 0, E, c), E = 0, h("onPartData"), n--;
          }
          break;
        case t.END:
          break;
        default:
          throw new Error(`Unexpected state entered: ${a}`);
      }
    H("onHeaderField"), H("onHeaderValue"), H("onPartData"), this.index = e, this.state = a, this.flags = A;
  }
  end() {
    if (this.state === t.HEADER_FIELD_START && this.index === 0 || this.state === t.PART_DATA && this.index === this.boundary.length)
      this.onPartEnd();
    else if (this.state !== t.END)
      throw new Error("MultipartParser.end(): stream ended unexpectedly");
  }
}
function I(p) {
  const i = p.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!i)
    return;
  const n = i[2] || i[3] || "";
  let r = n.slice(n.lastIndexOf("\\") + 1);
  return r = r.replace(/%22/g, '"'), r = r.replace(/&#(\d{4});/g, (E, l) => String.fromCharCode(l)), r;
}
async function _e(p, i) {
  if (!/multipart/i.test(i))
    throw new TypeError("Failed to fetch");
  const n = i.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!n)
    throw new TypeError("no or bad content-type header, no multipart boundary");
  const r = new C(n[1] || n[2]);
  let E, l, d, m, e, a;
  const A = [], u = new k(), S = (s) => {
    d += h.decode(s, { stream: !0 });
  }, N = (s) => {
    A.push(s);
  }, o = () => {
    const s = new U(A, a, { type: e });
    u.append(m, s);
  }, b = () => {
    u.append(m, d);
  }, h = new TextDecoder("utf-8");
  h.decode(), r.onPartBegin = function() {
    r.onPartData = S, r.onPartEnd = b, E = "", l = "", d = "", m = "", e = "", a = null, A.length = 0;
  }, r.onHeaderField = function(s) {
    E += h.decode(s, { stream: !0 });
  }, r.onHeaderValue = function(s) {
    l += h.decode(s, { stream: !0 });
  }, r.onHeaderEnd = function() {
    if (l += h.decode(), E = E.toLowerCase(), E === "content-disposition") {
      const s = l.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      s && (m = s[2] || s[3] || ""), a = I(l), a && (r.onPartData = N, r.onPartEnd = o);
    } else
      E === "content-type" && (e = l);
    l = "", E = "";
  };
  for await (const s of p)
    r.write(s);
  return r.end(), u;
}
export {
  _e as toFormData
};
//# sourceMappingURL=multipart-parser-1a341c82.js.map
