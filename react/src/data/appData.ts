import { assets } from "../assets/assets";
import type { ContactUs, Info, MoreInfo, NavItems, States, Titles } from "../utils/interfaces";

export const navItems: Readonly<NavItems[]> = [
    { path: '/', label: 'HOME' },
    { path: '/eat', label: 'EAT' },
    { path: '/play', label: 'PLAY' },
    { path: '/relax', label: 'RELAX' },
    { path: '/about', label: 'ABOUT' },
]

export const titles: Titles = {
    hero: 'LOSE | YOURSELF, DISCOVER | YOURSELF',
    eat: '"AN OUNCE OF SAUCE COVERS A MULTITUDE OF SINS."',
    play: '"YOU HAVE TO GET LOST BEFORE YOU CAN BE FOUND."',
    relax: '"ONCE A YEAR, GO SOMEPLACE YOU\'VE NEVER BEEN BEFORE."',
    about: '"I HAVEN\'T BEEN EVERY WHERE BUT IT\'S ON MY LIST".'
};

export const aboutInfo: string[] = [
    "We have the best Guide of the World, they tell you about the history of the place where you wanna visit. come with us and have experience them.",
    "We have the best Summer camps of the World, where you play many activities and make your vacations better. come with us and have experience them.",
    "We have the best tour plans of the World, they help you to see the place what you wanna see. come with us and have experience them."
];

export const contactUs: ContactUs = {
    title: 'CONTACT US',
    text: 'For any kind of queries, You may contact us.',
    address: '31 St, Saba Aevenue, DHA, KHI, Pakistan.',
    phone: '+1 (800) 000 000',
    email: 'info@yolo.com'
};

export const states: States[] = [
    {
        icon: assets.iconEatC, 
        text: 'EAT',
        iconNoColor: assets.iconEatNC
    },
    { 
        icon: assets.iconPlayC, 
        text: 'PLAY',
        iconNoColor: assets.iconPlayNC
    },
    { 
        icon: assets.iconRelaxC, 
        text: 'RELAX',
        iconNoColor: assets.iconRelaxNC
    }
];

export const info: Info[] = [
    { 
        image: assets.guide, 
        title: 'The Expert\'s', 
        tagline: 'Guide to the Rocky Mountains', 
        desc: 'We have the best Guide of the World, they tell you about the history of the place where you wanna visit. come with us and have experience them.' 
    },
    { 
        image: assets.camps, 
        title: 'Trend Alert:', 
        tagline: 'Summer Camps for All', 
        desc: 'We have the best Summer camps of the World, where you play many activities and make your vacations better. come with us and have experience them.' 
    },
    { 
        image: assets.about, 
        title: 'New Tours', 
        tagline: 'In the Wide Country', 
        desc: 'We have the best tour plans of the World, they help you to see the place what you wanna see. come with us and have experience them.'
    },
];

export const moreInfo: MoreInfo = {
    title: 'INFO PAGE',
    text: 'Here\'s the best tour pakeges, So come and enjoy your vacations.',
    schedule: 'Our all schedules are started on vacations times Summer & Winter, and others plans are made whole year, whenever you wanna go we provide you great paln.',
    dontForget : 'Don\'t forget our best services, we give all the best things to our clients for making their Holidays better and better.',
    tips: 'It\'s our free tip for all, If you wanna make your holidays better, Come and join us.'
};