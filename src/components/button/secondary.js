
export default function ButtonSecondary({value, type, style}) {
    if(!type) type = "button"
    
    return (
        <button className={"bttn bttn__secondary " + (style? style : "")} type={type}>
            {value}
        </button>
    )
}
