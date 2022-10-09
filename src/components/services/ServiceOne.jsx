import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/1.png',
        title: "Research & Innovation",
        description: "We carry out extensive research with well defined objectives to develop new products in the area of Food, Energy and Fuel to combat rapidly increasing Climate Challenges.",
    },
    {
        icon: 'assets/img/services/2.png',
        title: "Market & Economy",
        description: "We are building new financial products and investment tools that incentivises investment into climate action which will also significantly increase the awareness amongst general public.",
    },
    {
        icon: 'assets/img/services/3.png',
        title: "Carbon Footprint",
        description: "From tracking your emissions, to business optimization and making processes smarter, we reduce your carbon footprint. Furthermore, Our CO"+ String.fromCharCode(8322) + " Capture solutions can accelerate your journey to net Zero.",
    },
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                            <span className='icon mb-20'>
                                <LazyImg src={item.icon} alt={item.title}/>
                            </span>
                        <h4 className='title-block mb-20'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne