import styles from "./styles.module.css"
import logo from "./logo.png"
import {Link} from "react-router-dom";

export default function Header() {

    const links = [
        {
            name : 'Show All Tyres',
            path:  '/allTyres',
        },
        {
            name : 'Find a Dealer',
            path:  '/dealer',
        },
        {
            name : 'Guides & Videos',
            path:  '/guides',
        },
        {
            name : 'Go with',
            path:  '/goWith',
        },
        {
            name : 'Service & Help',
            path:  '/service',
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container container-fluid">
                <Link to="/"><img src={logo} className="mx-2" alt="Alca Digital"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map( link => {
                            return(
                                <li key={link.name} className="nav-item">
                                    <Link className={styles.link + " nav-link"} to={link.path}> {link.name.toUpperCase()}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
