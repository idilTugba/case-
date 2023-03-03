import {Link} from 'react-router-dom'
import Slider from './../../components/slider/';
import { SliderProvider } from "./../../context/slider";
import ButtonPrimary from './../../components/button/primary';

export default function Home() {
    return (
        <div>
            <div className="home__p1">
                <p className="pb-2 mb-4">Nothing can stop <span className="clear"></span> you</p>
                <div>
                    <ButtonPrimary value={'FIND OUT MORE'}/>
                </div>
            </div>
            <div className="home__p2 pt-4 pb-5">
                <div className="container my-3 my-sm-5">
                    <h2 className="mb-4 mb-sm-5">Featured Products</h2>
                    <SliderProvider>
                        <Slider/>
                    </SliderProvider>
                </div>
            </div>
            <div className="home__p3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row pb-3 mb-2 mb-sm-4">
                        <h2 className="text-white">Feel the excellent wet braking with Driveways!</h2>
                        <Link to="/guides">
                            <ButtonPrimary value={'Watch All Videos'}/>
                        </Link>
                    </div>
                    <div className="video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i7YvS_O6sz4" title="DriveWays" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
