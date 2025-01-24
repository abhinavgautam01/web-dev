import AddOutput from "./AddOutput.interface.js"
import { CommonUtils } from "./common-utils.js"
export class Mathutils{
    static add(a: number, b: number): AddOutput{
        CommonUtils.log(`Adding ${a} and ${b}`)
        return {sum: a+b, class: "Mathutils"}
    }
    static subtract(a: number, b: number): number{
        return a-b
    }
}
