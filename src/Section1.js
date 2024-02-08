import './css/section1.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image from './photos/image 14.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import React from 'react';

const Section1 = ({ isMenuOpen }) => {

    return (
        <div className='slider'>
            <div className={`drop_menu ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="#">Die Metzgerei</a></li>
                <li><a href="#">Dry aged</a></li>
                <li><a href="#">Fleischversand</a></li>
                <li><a href="#">Events/Kurse</a></li>
                <li><a href="#">Partyservice</a></li>
                <li><a href="#">Tagesessen</a></li>
                <li><a href="#">Impressum</a></li>
                <li><a href="#">Kontakt</a></li>
            </div>

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