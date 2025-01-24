
export class Stringutils{
    static add(a: string, b: string): string{
        return a+b
    }
    
    static subtract(a: string, b: string): string{
        return a.replace(b, "")
    }
}