import React from 'react'

// Importing the CSS
import './style.scss'

import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

// Component
import {Col, Row} from 'react-bootstrap';
import ParallaxImage from "../parallax-image/ParallaxImage";
import {dsnCN} from "../../hooks/helper";

const HeroContent = {
    title: "Sustainable path, with \nImproved Efficiency",
    description: `Founded in 2021, We have built solutions which aims to support you in accelerating on a path towards Sustainable Development, managing Carbon Footprint, optimising processes, cutting down cost and improving business efficiency. \nOur experience of rapid prototyping and Research enables us to deliver customised solution to your needs.`,
    authorTitle: "Climate Action",
    authorJob: "Starts Now",
    experienceNumber: "7",
    experienceDescription: `YEARS OF \nResearch EXPERIENCE`,
    heroImage: '/assets/img/about.jpeg'
};


function HeroSection({className, ...restProps}) {


    return (
        <section className={dsnCN('hero-section', className)} {...restProps}>
            <Row>
                <Col lg={4}>
                    <div className='box-text '>
                        <MoveTrigger from={{y: 0}} to={{y: -30}} tablet={false} mobile={false}>
                            {(ref) => <h2 className='title-section mb-30 pre-line' ref={ref}>{HeroContent.title}</h2>}
                        </MoveTrigger>
                        <FadeUpTrigger>
                            {(ref) => <>
                                <p ref={ref}>{HeroContent.description}</p>
                                <h5 className='sm-title-block mt-30' ref={ref}>{HeroContent.authorTitle}</h5>
                                <span className="auth-position mt-10" ref={ref}>{HeroContent.authorJob}</span>
                                <div className='experience mt-30'>
                                    <span className='number' ref={ref}>{HeroContent.experienceNumber}</span>
                                    <p className="color-heading pre-line"
                                       ref={ref}>{HeroContent.experienceDescription}</p>
                                </div>
                            </>}
                        </FadeUpTrigger>

                    </div>
                </Col>
                <Col className="mt-30" lg={8}>
                    <div className='box-img background-section box-padding'>
                        <ParallaxImage src={HeroContent.heroImage}  height="100%"/>
                    </div>
                </Col>
            </Row>
        </section>
    )
}


export default HeroSection