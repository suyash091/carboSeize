import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";

const data = [
    {
        id: 1,
        title: "CarboSeize",
        slug: 'time-tag-watch',
        category: ['Mission'],
        description: 'Join the revolution and be a part of economy around climate action',
        src: '/assets/img/project/project1/iceberg.jpg',
        srcSlider: '/assets/img/project/project1/iceberg.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "CarboSeize",
        slug: 'under-armour',
        src: '/assets/img/project/project2/abstract.jpg',
        srcSlider: '/assets/img/project/project2/abstract.jpg',
        category: ['Mission'],
        description: 'We aim to incentivize investment in solving Environmental Problems with Research and Innovation around Carbon',
        overlay: 2,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 3,
        title: "Carbon Capture",
        slug: 're-styling',
        src: '/assets/img/project/project3/industry.jpg',
        srcSlider: '/assets/img/project/project3/industry.jpg',
        category: ['Products'],
        description: "Asia's first Direct Air Capture plant in making, which seperates Carbon Di Oxide directly from Ambeint air",
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: "Emission Reduction",
        slug: 'toast-2019-reel',
        category: ['Products'],
        src: 'https://theme.dsngrid.com/video/droow.mp4',
        video: {
            poster: '/assets/img/project/project4/1.png',
            loop: true
        },
        description: "We offer smart tools to track and manage your emissions. Be it Offices, residential buildings or any idustry, our solution can help you optimise your day to day processes and support you in your journey towards sustainable growth.",
        overlay: 2,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 5,
        title: "Carbon Storage",
        slug: 'what-if-gold',
        src: '/assets/img/project/project5/bioreactor.jpeg',
        srcSlider: '/assets/img/project/project5/bioreactor.jpeg',
        category: ['Products'],
        description: 'Our innovative AI powered Algal Bio reactor harnesses Carbon and transform it into variety of useful products. This offers investors a stake in real world value added products like Bio Deisel, Bio Plastics, Cosmetics, Health Supplements and lot more.',
        overlay: 2,
        component: (props) => <WhatIfGold {...props}/>
    },
    {
        id: 6,
        title: "Green VertHouse",
        slug: 'nile-kabutha',
        category: ["Products","Research"],
        src: '/assets/img/project/project6/GreenHouse.jpg',
        srcSlider: '/assets/img/project/project6/GreenHouse.jpg',
        description: 'Fusion of Vertical Farming, Green House and our In-House AI managed Controlled Enviroment supported by Direct Air Capture output allows to increase yields with Virus and contagion free produce, while keeping the cost low.',
        overlay: 2,
        component: (props) => <NileKabutha {...props}/>
    },
    {
        id: 7,
        title: "CSP and CPV",
        slug: 'sleep-walker',
        category: ['Research'],
        src: '/assets/img/project/project7/csp.jpeg',
        srcSlider: '/assets/img/project/project7/csp.jpeg',
        description: 'We aim to improve existing state of technology in the area of harnessing Solar Energy, our objective is to improve upon the efficiency of Solar Energy capture systems and leverage it into maximising Carbon Capture and Food Production.',
        overlay: 2,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 8,
        title: "H"+ String.fromCharCode(8322) +" Production, Capture & Storage",
        slug: 'novara-conic',
        src: '/assets/img/project/project8/hydrogen.jpeg',
        srcSlider: '/assets/img/project/project8/hydrogen.jpeg',
        category: ['Research'],
        description: 'This is one of the most important research objective to us. RnD on cleaner and cheaper methods to produce hydrogen is underway, in future we aim to expand into Hydrogen Capture and Storage which have potential to become a technological disruption.',
        overlay: 2,
        component: (props) => <NovaraConic {...props}/>
    },
    {
        id: 9,
        title: "Carbo chain",
        slug: 'bastian-bux',
        category: ['Products'],
        description: 'Transparent, Secure and reliable carbon trading platform built on top of a blockchain, backed by stakes in the end-product which is stored in a smart contract. The investment products around Carbon Capture will change how general public view this challenge and help in spreading awareness with rewards.',
        src: '/assets/img/project/project5/blockchain.png',
        srcSlider: '/assets/img/project/project5/blockchain.png',
        overlay: 2,
        component: (props) => <BastianBux {...props}/>
    },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};