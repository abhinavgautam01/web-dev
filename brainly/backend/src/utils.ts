export function random(len: number){
    let string = "hasfdhskajshf312489u1238yrfasjdhsakjf";
    let length = string.length;
    let ans = ""
    for(let i = 0; i<len; i++){
        ans += string[Math.floor(Math.random() * length)]
    }

    return ans
}