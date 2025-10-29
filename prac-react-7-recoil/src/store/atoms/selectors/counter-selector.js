import { selector } from "recoil"
import { counterAtom } from "../counter";

export const isEvenSelector = selector({
    key: "is_even_selector",
    get: ({get})=>{
        const current_count = get(counterAtom);
        const isEven = (current_count % 2 == 0);
        return isEven;
    }
})