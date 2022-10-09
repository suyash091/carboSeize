import React from 'react';
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../button/button-default/ButtonDefault";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import BoxRight from "../box-right/BoxRight";
import {ParallaxImageProps} from "../parallax-image/ParallaxImage";

const heroContent = {
    title: "Is it already \nlate now?",
    src: '/assets/img/project/project9/hurricane.jpg',
    description: `2022, have witnessed one of the worst year ever in terms of climate consequences. The world was hit by varying implications from global warming from high temperatures, avalanches, continental glaciers disappearing to heavy rainfall, floods and landslides. Simply reducing our emissions to net zero is not enough, we need to be doing lot more than switching our energy sources.`,
    to: "portfolio/bastian-bux",
    textButton: "LEARN MORE",
    icon : faAngleRight
};

function HeroSectionTow({...restProps}: ParallaxImageProps) {
    return (
        <BoxRight  {...restProps} src={heroContent.src}>
            <FadeUpTrigger>
                <h2 className="pre-line">{heroContent.title}</h2>

                <p className="mt-30 m-w750 dsn-auto">{heroContent.description}</p>
                <ButtonDefault className="mt-30" icon={heroContent.icon} text={heroContent.textButton}
                               to={heroContent.to}/>
            </FadeUpTrigger>
        </BoxRight>
    );
}

export default HeroSectionTow;