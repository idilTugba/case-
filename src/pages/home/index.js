import React from 'react'
import Slider from './../../components/slider/';
import { SliderProvider } from "./../../context/slider";
import styles from './styles.module.css';

export default function Home() {
    return (
        <div>
            <div className={styles.home_p1 + " d-flex flex-column justify-content-center align-items-center text-white"}>
                <p className="pb-2 mb-4">Nothing can stop <span class="clear"></span> you</p>
                <div>
                    <button type="button" className="bttn bttn_primary">FIND OUT MORE</button>
                </div>
            </div>
            <div className={styles.home_p2+" pt-4 pb-5"}>
                <div className="container my-3 my-sm-5">
                    <h2 className="mb-4 mb-sm-5">Featured Products</h2>
                    <SliderProvider>
                        <Slider/>
                    </SliderProvider>
                </div>
            </div>
            <div className={styles.home_p3}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row pb-3 mb-2 mb-sm-4">
                        <h2 className="text-white">Feel the excellent wet braking with Driveways!</h2>
                        <button className="bttn bttn_primary">Watch All Videos</button>
                    </div>
                    <div className={styles.video_content}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i7YvS_O6sz4" title="DriveWays" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
