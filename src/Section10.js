import './css/section10.css'
import button from './button.json'
import grillkurs from './photos/grillkurs.png'
import stars from './photos/zvezdice.png'
import znak from './photos/znak.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

const Section9 = () => {

    return (
        <section className="section10">
            <p className="empf">Empfehlungs</p>
            <p className="leute">Was die Leute über uns sagen</p>
            <div className="comments">
                <Swiper
                    className='swiper2'
                    modules={[Navigation, Pagination]}
                    navigation
                    initialSlide={1}
                >
                    <div className="swiper-wrapper">

                        <SwiperSlide className="swiper-slide">
                            <div className="comment3">
                                <div className="iznad">
                                    <img src={grillkurs} className="grillkurs" alt="img" />
                                    <img src={stars} className="stars" alt="img" />
                                </div>
                                <p>Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor
                                    in
                                    reprehenderit
                                    Guten Tag mollit anim Stuttgart.</p>
                                <p className="comment_name2">Maria Kartofeln</p>
                                <img src={znak} className="znak" alt="img" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="comment1">
                                <div className="iznad">
                                    <img src={grillkurs} className="grillkurs" alt="img" />
                                    <img src={stars} className="stars" alt="img" />
                                </div>
                                <p>Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut
                                    labore
                                    et
                                    dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .</p>
                                <p className="comment_name">Halling Tobias</p>
                                <p className="comment_name3">Koch</p>
                                <img src={znak} className="znak" alt="img" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="comment2">
                                <div className="iznad">
                                    <img src={grillkurs} className="grillkurs" alt="img" />
                                    <img src={stars} className="stars" alt="img" />
                                </div>
                                <p>Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id.
                                    Ohrwurm expetenda
                                    nam an, his ei Reise euismod assentior.</p>
                                <p className="comment_name2">Rene Weinstein</p>
                                <img src={znak} className="znak" alt="img" />
                            </div>
                        </SwiperSlide>
                        
                    </div>
                </Swiper>
            </div>

            <div className="dugmad">
                {button.filter(btn => btn.id === 7).map(btn => (
                    <button className='alle' key={btn.id}>
                        <p>{btn.text}</p>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Section9;