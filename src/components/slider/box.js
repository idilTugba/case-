import styles from './styles.module.css'

export default function Box(data) {
    
    return (
        <div className={styles.box + " px-2 pt-2 pb-2"}>
            <div className={styles.box_top+" px-3 pt-3"}>
                <h3 className="pb-3">{data.children.title}</h3>
                <p className="pb-4">{data.children.text}</p>
            </div>
            <div className="d-flex">
                <button className="bttn bttn_secondary bttn_secondary_pink col">{data.children.button1}</button>
                <button className="bttn bttn_secondary bttn_secondary_red col">{data.children.button2}</button>
            </div>
        </div>
    )
}
