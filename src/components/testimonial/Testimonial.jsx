import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import MoveTrigger from "../../animation/MoveTrigger";
import {Pagination, SwiperOptions} from "swiper";
import {dsnCN} from "../../hooks/helper";


const TestimonialDetails = [
    {
        name: "Harish Sharma",
        label: "Business Owner, Chaat Chaupati",
        src: "assets/img/avatar/1.png",
        description: `"Kitchens are one of the most Carbon Generating retail business, so for our ethical concerns we partnered with CarboSeize for offsetting our production. To our surprise when word got out, our sales went up. Lot of people came forward to support our business who believed in the cause."`
    },
    {
        name: "Bhuvnesh",
        label: "CEO, Verdant Motors",
        src: "assets/img/avatar/2.jpg",
        description: `"We are into producing electric Vehicles, some customers have concern about Carbon neutrality based on electricity sources to charge their vehicles. By partnering up with CarboSeize we offer them subscription along with vehicle sale for even cleaner transition."`
    },
    {
        name: "VK Mohan",
        label: "CEO, RoboSilicon",
        src: "assets/img/avatar/3.png",
        description: `"We are into innovative mining which provides ideal substitute for river sand. Our main emphasis lie in enviroment friendly way of Mining, partnering up with CarboSeize has further enhanced our progress towards enviromently solutions in our offerings."`
    },
    {
        name: "Mridula Chehtri",
        label: "Director, inMovidu",
        src: "assets/img/avatar/4.png",
        description: `"We are into e-learning and education, practising what we preach is of high importance to us hence services offered by carboseize allow us to achieve our ethical objectives"`
    },

]


function Testimonial({className, title, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial background-section testimonial-one', className)}>
            <div className="testimonial-inner ">
                <div className="title-box">
                    {title &&
                    <MoveTrigger from={{y: 0, opacity: 0}} to={{y: -60, opacity: 1}} mobile={false}>
                        {(ref) => <h2 className='title-section p-relative z-index-1' ref={ref}>
                            {title}
                        </h2>}
                    </MoveTrigger>
                    }

                </div>
                <div className='content-box'>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true, el: '.swiper-pagination'}}
                        slidesPerView={1}
                        {...restProps}
                    >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            src={item.src} authorName={item.name} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>

                                );
                            }
                        )}

                        <div className="swiper-pagination"/>

                    </Swiper>
                </div>

            </div>
        </section>

    )
}


export default Testimonial;