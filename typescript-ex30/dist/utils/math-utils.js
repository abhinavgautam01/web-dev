"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mathutils = void 0;
const common_utils_js_1 = require("./common-utils.js");
class Mathutils {
    static add(a, b) {
        common_utils_js_1.CommonUtils.log(`Adding ${a} and ${b}`);
        return { sum: a + b, class: "Mathutils" };
    }
    static subtract(a, b) {
        return a - b;
    }
}
exports.Mathutils = Mathutils;
