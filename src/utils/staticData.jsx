import Logo from '../assets/logo.png';
import BreadCrumbImg from '../assets/images/breadcrumb-bg.jpg';
import profileImg from '../assets/images/info.jpg';

import slideBg1 from '../assets/hero-bg/hero-bg-1.jpg';
import slideBg2 from '../assets/hero-bg/hero-bg-2.jpg';
import slideBg3 from '../assets/hero-bg/hero-bg-3.jpg';
import slideBg4 from '../assets/hero-bg/hero-bg-4.jpg';
import slideBg5 from '../assets/hero-bg/hero-bg-5.jpg';

import collect1 from '../assets/icons/spinning-64.png';
import collect2 from '../assets/icons/apple-juice.png';
import collect3 from '../assets/icons/barbell-64.png';
import collect4 from '../assets/icons/heartbeat.png';

import trainer1 from '../assets/images/trainer-1.jpg';
import trainer2 from '../assets/images/trainer-2.jpg';
import trainer3 from '../assets/images/trainer-3.jpg';
import trainer4 from '../assets/images/trainer-4.jpg';
import trainer5 from '../assets/images/trainer-5.jpg';
import trainer6 from '../assets/images/trainer-6.jpg';

import testimonial1 from '../assets/images/testimonial/testimonial-1.jpg';
import testimonial2 from '../assets/images/testimonial/testimonial-2.jpg';
import testimonial3 from '../assets/images/testimonial/testimonial-3.jpg';
import testimonial4 from '../assets/images/testimonial/testimonial-4.jpg';
import testimonial5 from '../assets/images/testimonial/testimonial-5.jpg';
import testimonial6 from '../assets/images/testimonial/testimonial-6.jpg';

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail, MdLocationPin } from 'react-icons/md';


import gif1 from '../assets/gif/1.gif';
import gif2 from '../assets/gif/2.gif';
import gif3 from '../assets/gif/3.gif';
import gif4 from '../assets/gif/4.gif';
import gif5 from '../assets/gif/5.gif';

export const logo = Logo;

export const breadcrumb = BreadCrumbImg;

export const profile = profileImg;


export const exercise1 = gif1;
const exercise2 = gif2;
const exercise3 = gif3;
const exercise4 = gif4;
const exercise5 = gif5;

export const navigation = [
    { id: 1, name: 'home', path: '/' },
    { id: 2, name: 'about', path: '/about' },
    { id: 3, name: 'classes', path: '/classes' },
    { id: 4, name: 'our team', path: '/team' },
    { id: 5, name: 'contact', path: '/contact' },
];

export const heroSlider = [
    { id: 1, imgUrl: slideBg1 },
    { id: 2, imgUrl: slideBg2 },
    { id: 3, imgUrl: slideBg3 },
    { id: 4, imgUrl: slideBg4 },
    { id: 5, imgUrl: slideBg5 },
];


export const collections = [
    { 
        id: 1,
        icon: collect1,
        title: 'Modern equipment',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
    },
    { 
        id: 2,
        icon: collect2,
        title: 'Healthy nutrition plan',
        text: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    { 
        id: 3,
        icon: collect3,
        title: 'Proffesponal training plan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
    },
    { 
        id: 4,
        icon: collect4,
        title: 'Unique to your needs',
        text: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
];

export const socials = [
    { id: 1, icon: <FaFacebook />, path: '/' },
    { id: 2, icon: <FaTwitter />, path: '/' },
    { id: 3, icon: <FaYoutube />, path: '/' },
    { id: 4, icon: <FaInstagram />, path: '/' },
    { id: 5, icon: <AiOutlineMail />, path: '/' },
];

export const footerContact = [
    { id: 1, icon: <MdLocationPin />, text1: '#295,st.182.Toul Kok, Phnom Penh, Cambodia', text2: '' },
    { id: 2, icon: <BsFillTelephoneFill />, text1: '+855 012 888 899', text2: '+855 010 888 899' },
    { id: 3, icon: <MdMail />, text1: 'info@gymate.com', text2: 'services@gymate.com' },
];

export const aboutSlider = [
    { id: 1, imgUrl: trainer1, name: 'veasna' },
    { id: 2, imgUrl: trainer2, name: 'pisey' },
    { id: 3, imgUrl: trainer3, name: 'rithy' },
    { id: 4, imgUrl: trainer4, name: 'monika' },
    { id: 5, imgUrl: trainer5, name: 'john' },
    { id: 6, imgUrl: trainer6, name: 'lina' },
];

export const testimonialSlider = [
    { 
        id: 1, 
        name: 'Jimmy', 
        imgUrl: testimonial1, 
        text: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
    },
    { 
        id: 2, 
        name: 'kesha', 
        imgUrl: testimonial2, 
        text: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
    },
    { 
        id: 3, 
        name: 'nikki', 
        imgUrl: testimonial3, 
        text: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
    },
    { 
        id: 4, 
        name: 'olin', 
        imgUrl: testimonial4, 
        text: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
    },
    { 
        id: 5, 
        name: 'bob', 
        imgUrl: testimonial5, 
        text: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
    },
    { 
        id: 6, 
        name: 'angelina', 
        imgUrl: testimonial6, 
        text: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
    },
];

export const pricingPlan = [
    {
        id: 1,
        title: 'Class drop-in',
        price: 39.0,
        text1: 'Free riding',
        text2: 'Unlimited equipments',
        text3: 'Personal trainer',
        text4: 'Weight losing classes',
        text5: 'Month to mouth',
        text6: 'No time restriction',
    },
    {
        id: 2,
        title: '12 Month unlimited',
        price: 99.0,
        text1: 'Free riding',
        text2: 'Unlimited equipments',
        text3: 'Personal trainer',
        text4: 'Weight losing classes',
        text5: 'Month to mouth',
        text6: 'No time restriction',
    },
    {
        id: 3,
        title: '6 Month unlimited',
        price: 59.0,
        text1: 'Free riding',
        text2: 'Unlimited equipments',
        text3: 'Personal trainer',
        text4: 'Weight losing classes',
        text5: 'Month to mouth',
        text6: 'No time restriction',
    },
];

export const ourTeam = [
    { id: 1, imgUrl: trainer1, name: 'veasna' },
    { id: 2, imgUrl: trainer2, name: 'pisey' },
    { id: 3, imgUrl: trainer3, name: 'rithy' },
    { id: 4, imgUrl: trainer4, name: 'monika' },
    { id: 5, imgUrl: trainer5, name: 'john' },
    { id: 6, imgUrl: trainer6, name: 'lina' },
];

export const exerciseGif = [
    { id: 1, imgUrl: exercise1, title: "Push up 24h a day" },
    { id: 2, imgUrl: exercise2, title: "Build and Deploy a Modern React 18 Fitness Exercises App" },
    { id: 3, imgUrl: exercise3, title: "Push up 24h a day" },
    { id: 4, imgUrl: exercise4, title: "Build and Deploy a Modern React 18 Fitness Exercises App" },
    { id: 5, imgUrl: exercise5, title: "Push up 24h a day" },
    { id: 6, imgUrl: exercise1, title: "Push up 24h a day" },
    { id: 7, imgUrl: exercise2, title: "Build and Deploy a Modern React 18 Fitness Exercises App" },
    { id: 8, imgUrl: exercise3, title: "Push up 24h a day" },
];

export const alternateSlider = [
    { id: 1, imgUrl: slideBg1, title: "How to: Biceps workout at home to get ripped", author: 'sting red' },
    { id: 2, imgUrl: slideBg2, title: "How to: Biceps workout at home to get ripped", author: 'sting yellow' },
    { id: 3, imgUrl: slideBg3, title: "How to: Biceps workout at home to get ripped", author: 'sting green' },
    { id: 4, imgUrl: slideBg2, title: "How to: Biceps workout at home to get ripped", author: 'sting blue' },
];