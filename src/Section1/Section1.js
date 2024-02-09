import './section1.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image from '../photos/image 14.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import React from 'react';

const Section1 = () => {

    return (
        <div className='slider'>

            <Swiper
                className='swiper1'
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide><img src={image} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={image} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={image} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={image} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={image} alt="img" /></SwiperSlide>

            </Swiper>

            <div className="info-slider">
                <div className="sliderr">
                    <p className="naslov">Heiko Brath Metzgermeister</p>
                    <p className="opis-naslov">Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
                        argumentum
                        ius an. Pfannkuchen
                        lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</p>
                </div>
            </div>
        </div>
    );
}

export default Section1;