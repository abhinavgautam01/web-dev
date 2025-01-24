"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stringutils = void 0;
class Stringutils {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a.replace(b, "");
    }
}
exports.Stringutils = Stringutils;
