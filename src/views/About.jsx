import React from 'react';

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";

import HeaderNormal from "../components/header/HeaderNormal";
import BoxRight from "../components/box-right/BoxRight";
import TitleSection from "../components/heading/TitleSection";
import ServiceTow from "../components/services/ServiceTow";
import Team from "../components/team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import TestimonialTow from "../components/testimonial/TestimonialTow";
import {Helmet} from "react-helmet";


const headerContent = {
    title: 'THE ART OF LUXURY APPAREL',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis mollitia libero quis odio unde ab
                officia est dolor.`
}

function About() {


    return (
        <React.Fragment>
            <Helmet>
                <title>Droow - About Us </title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormal className="background-section" description={headerContent.description}>
                {headerContent.title}
            </HeaderNormal>

            {/*Start Box Right Info*/}
            <BoxRight className="mb-section text-center" src="/assets/img/pexels.jpg"
                      parallaxFrom={{scale: 1.2}} parallax={{scale: 1}} overlay={4}
            >
                <FadeUpTrigger>
                    <h3>Hello we are, <br/> Dsn Grid.</h3>
                    <p className="mt-30 m-w750 dsn-auto">
                        Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest. Blue money
                        going forward, but deploy to production. C-suite. First-order optimal strategies build on a
                        culture of contribution and inclusion so those options
                    </p>
                </FadeUpTrigger>
            </BoxRight>
            {/*End Box Right Info*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Our Services">
                    New Branding Agency
                </TitleSection>
                <ServiceTow col={2} colMobile={1}/>
            </Container>
            {/*End Service Section*/}

            {/*Start Team*/}
            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <TitleSection description="our team">
                        The best team ever!
                    </TitleSection>
                    <Team loop grabCursor/>
                </Container>
            </section>
            {/*End Team*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Client see">
                    Feedback from our clients.
                </TitleSection>
                <TestimonialTow grabCursor loop/>
            </Container>
            {/*End Service Section*/}

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description="Our clients">
                    Your successful, our <br/> reputation
                </TitleSection>
                <BrandClient
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}

            <NextPageContent className="section-margin"/>
            <Footer/>


        </React.Fragment>
    );
}

export default About;