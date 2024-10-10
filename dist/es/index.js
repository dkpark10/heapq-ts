(function (e, h) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = h())
    : typeof define == 'function' && define.amd
    ? define(h)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.heapqTs = h()));
})(this, function () {
  'use strict';
  const e = (o) => (typeof o == 'object' && o !== null) || Array.isArray(o);
  class h {
    constructor(i) {
      (this.list = []), (this.comparator = i ?? { max: !0 });
    }
    swap(i, t) {
      [this.list[i], this.list[t]] = [this.list[t], this.list[i]];
    }
    compare(i, t) {
      if (typeof this.comparator == 'function') return this.comparator(i, t) < 1;
      if (this.comparator.min === !0 && this.comparator.max === !0) throw new Error('');
      return this.comparator.min === !0 ? i < t : i > t;
    }
    push(i) {
      if (e(i) && typeof this.comparator != 'function')
        throw new Error('When the data type is an object, a comparator function must be registered.');
      this.list.push(i);
      let t = this.list.length - 1,
        s = Math.ceil(t / 2) - 1;
      if (this.list.length !== 1)
        for (; t > 0 && this.compare(i, this.list[s]); )
          this.swap(t, s), (t = Math.ceil(t / 2) - 1), (s = Math.ceil(t / 2) - 1);
    }
    pop() {
      if (this.isEmpty()) throw new Error('Empty Queue');
      const i = this.list[0];
      (this.list[0] = this.list.slice(-1)[0]), this.list.pop();
      let t = 0;
      for (; t * 2 < this.list.length - 1; ) {
        const s = t * 2 + 1,
          r = t * 2 + 2;
        if (this.list[s] === void 0) break;
        if (this.list[r] === void 0) {
          this.compare(this.list[t], this.list[s]) || this.swap(t, s);
          break;
        }
        if (this.compare(this.list[t], this.list[s]) && this.compare(this.list[t], this.list[r])) break;
        this.compare(this.list[s], this.list[r]) ? (this.swap(t, s), (t = s)) : (this.swap(t, r), (t = r));
      }
      return i;
    }
    size() {
      return this.list.length;
    }
    isEmpty() {
      return this.list.length <= 0;
    }
    top() {
      if (this.isEmpty()) throw new Error('Empty Queue');
      return this.list[0];
    }
    clear() {
      this.list = [];
    }
  }
  return h;
});
