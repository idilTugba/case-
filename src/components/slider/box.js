import ButtonSecondary from './../button/secondary'

export default function Box({data,style}) {
    
    return (
        <div className="box">
            <div className="box__top">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
            </div>
            <div className="d-flex">
                <ButtonSecondary value={data.button1} style={style.button1}/>
                <ButtonSecondary value={data.button2} style={style.button2}/>
            </div>
        </div>
    )
}
