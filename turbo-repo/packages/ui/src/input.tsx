type PropType = {
    placeholder: string,
    size: "big" | "small",
}

export function InputBox({
    placeholder,
    size,
}: PropType){
    return <input placeholder={placeholder} style={{
        padding: size === "big" ? 20 : 10,
        margin: size === "big" ? 20 : 10,
        borderColor: "black",
        borderRadius: 20, 
        borderWidth: 1 
    }} />
}