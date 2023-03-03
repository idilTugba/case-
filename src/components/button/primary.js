
export default function ButtonPrimary({value, type, style}) {
    if(!type) type = "button"

    return (
        <button className={"bttn bttn__primary "+ (style ? style : "")} type={type}>
            {value}
        </button>
    )
}
