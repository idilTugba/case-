import React from 'react'
import Box from './box'
import {UseSlider} from "./../../context/slider";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/splide/css';

export default function index() {
    const {data} = UseSlider();
    
    const style = {
        button1 : "bttn__secondary--pink",
        button2 : "bttn__secondary--red"
    }

    return (
        <div className="slider row position-relative">
            <Splide hasTrack={ false } options={ {
                rewind: true, 
                gap   : '1.5rem', 
                type   : 'slide',
                perPage: 3, 
                perMove: 1, 
                trimSpace: false,
                breakpoints: {
                    1200: {
                        perPage: 2,
                    },
                    767: {
                        perPage: 1,
                    }
                },} }>

                <SplideTrack>
                        {data.map((item, index)=>{
                            return(
                                <SplideSlide key={index}>
                                    <Box style={style} data={item}/>
                                </SplideSlide>
                            )
                        })}
                </SplideTrack>
                
                <div className="splide__progress">
                    <div className="splide__progress__bar" /></div>
                <div className="splide__arrows" />
            </Splide>
        </div>
    )
}
