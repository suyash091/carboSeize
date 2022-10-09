import React from 'react'
import './style.scss'


import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import BlogItem from "./BlogItem";
import {Pagination , SwiperOptions} from "swiper";



const BlogDetails = [
    
    {
        title: "Climate Change: Have we run out of time?",
        category: ["Climate Change", "Future"],
        img : "/assets/img/blog/time.jpg",
        description: "According to UN estimates by 2050, we need to be removing 10gigatons of CO"+ String.fromCharCode(8322) +" by year 2050 or else...",
    },
    {
        title: "Climate Consequences: An year in review (2022)",
        category: ["Climate Change", "Future","Impact"],
        img : "/assets/img/blog/storm.jpg",
        description: "Year 2022, has been marked as one of the worst year in terms of climate impact by man made activities, from extreme heat to flooding and storms climate topography has been changing",

    },
    {
        title: "Can planting trees be a solution to Climate Change?",
        category: ["Climate Change" , "Problem Statement", "Nature"],
        img : "/assets/img/blog/plant.jpg",
        description: "We have been cutting down a lot of trees over the period of last century, we certainly need to make up for that. But will it be enough?",
    },
    {
        title: "Everything you need to know about Carbon Credits",
        category: ["Economy","Finance", "Tax"],
        img : "/assets/img/blog/carbon.jpg",
        description: "To combat Climate Change goverments are coming up with differnt tools to enforce climate responsibility from Corporates to individuals. So, Let's us explore how these ever changing dynamics and policy shifts like Carbon Tax and Carbon Credits can impact you.",

    },
    {
        title: "What does living in a truly sustainable world looks like?",
        category: ["Future", "Solution", "Climate"],
        img : "/assets/img/blog/future.jpg",
        description: "Einstein famously said: 'Imagination is more important than knowledge. For knowledge is limited to all we know and understand, while imagination embraces the entire world, and all there ever will be to know and understand'. So let us take you on a journey of future that we have envisioned",

    },
    {
        title: "Can hydrogen be the fuel of future?",
        category: ["Fuel", "Energy", "Future"],
        img : "/assets/img/blog/plane.jpg",
        description: "A single return flight from New York to London produces 425 tonnes of CO"+ String.fromCharCode(8322) +" on an average, which is equal to amount of Carbon removed by 20,000 fully mature trees over the period of 12 months. So current sources of fuel are inefficient when...",

    },
    {
        title: "Major Challenges lying ahead of us in this Century",
        category: ["Problem Statement", "Challenges"],
        img : "/assets/img/blog/futureDark.jpg",
        description: "Since Industrial revolution, Mankind has been relentlessly moving on the path of unsustainability and not just in climate purview but in all other domains such as Food Security, Income inequalities...",

    },
    {
        title: "How does CarboSeize stands out amongst other DAC Companies?",
        category: ["Technology", "Innovation", "Climate Action"],
        img : "/assets/img/blog/airCapture.jpg",
        description: "We need large scale Direct Air Capture plants all around the world to combat climate change, but very few number of start-ups are actively trying to solve this problem. But are they even doing it right?",

    },
    {
        title: "Pros and Cons of vertical Farming",
        category: ["Technology", "Innovation"],
        img : "/assets/img/blog/vertical.jpg",
        description: "Vertical Farming comes with their own benefits and caveats, but does downside of Vertical Farming outweighs the benefits? and how can it be improvised given all the technological advancement?",

    },
]

const BlogSwiper = ({desktop, mobile, tablet, ...restProps} :SwiperOptions) => {

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30} slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            {...restProps}
        >
        {
            BlogDetails.map((item, index) =>
              <SwiperSlide key={index}>
                  <BlogItem
                      src={item.img} title={item.title} category={item.category} description={item.description} to="/blog-details" />
              </SwiperSlide>)
        }
            <div className="swiper-pagination"/>
      </Swiper>

    );
}

BlogSwiper.defaultProps = {
    desktop: {
        slidesPerView: 2.5
    },
    tablet: {
        slidesPerView: 1.5
    },
    mobile: {
        slidesPerView: 1.5
    }
}

export default BlogSwiper