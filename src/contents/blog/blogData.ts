import { StaticImageData } from 'next/image';
import blogImg1 from '@/assets/images/blog/blog-1-1.jpg';
import blogImg2 from '@/assets/images/blog/blog-1-2.jpg';
import blogImg7 from '@/assets/images/blog/blog-1-4.jpg';
import blogImg8 from '@/assets/images/blog/blog-1-5.jpg';
import blogImg9 from '@/assets/images/blog/blog-1-6.jpg';
import blogImg10 from '@/assets/images/blog/blog-1-7.jpg';
import blogImg11 from '@/assets/images/blog/blog-1-8.jpg';

import blogImg4 from '@/assets/images/blog/blog-2-1.jpg';
import blogImg5 from '@/assets/images/blog/blog-2-2.jpg';
import blogImg6 from '@/assets/images/blog/blog-2-3.jpg';

import BlogList11 from '@/assets/images/blog/blog-list-1-1.jpg';
import BlogList12 from '@/assets/images/blog/blog-list-1-2.jpg';
import BlogList13 from '@/assets/images/blog/blog-list-1-3.jpg';

import type { AnimationVariant } from '@/components/elements/FadeInAdvanced';


interface BlogPost {
    id: number;
    image: string | StaticImageData;
    dateDay: string;
    dateMonth: string;
    author: string;
    comments: string;
    title: string;
    text?: string
    to: string
    animation: AnimationVariant;
    animationDelay: number;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: blogImg1,
        dateDay: '12',
        dateMonth: 'Oct',
        author: 'By Admin',
        comments: '05 Comments',
        title: '5 Signs Your Brakes Need Immediate Attention',
        text: 'Squealing, grinding, or pulling to one side are warning signs you shouldn\'t ignore. Here\'s what to look for before it becomes an emergency.',
        to: '/blog-details',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        image: blogImg2,
        dateDay: '05',
        dateMonth: 'Nov',
        author: 'By Admin',
        comments: '07 Comments',
        title: 'Winter Car Care Tips for Scarborough Drivers',
        text: 'Cold starts, icy roads, and road salt take a toll on your vehicle. Follow these steps to keep your car running strong all winter long.',
        to: '/blog-details',
        animation: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
        image: blogImg9,
        dateDay: '18',
        dateMonth: 'Sep',
        author: 'By Admin',
        comments: '04 Comments',
        title: 'How Often Should You Really Change Your Oil?',
        text: 'Modern vehicles and synthetic oils have changed the rules. Learn what interval is right for your car and driving habits in the Scarborough area.',
        to: '/blog-details',
        animation: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 4,
        image: blogImg10,
        dateDay: '20',
        dateMonth: 'Mar',
        author: 'By Admin',
        comments: '07 Comments',
        title: 'Top 5 Warning Signs Your Car Needs Immediate Service',
        text: 'Unusual noises, warning lights, or handling changes are your car\'s way of asking for help. Don\'t wait — early repairs save you money.',
        to: '/blog-details',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 5,
        image: blogImg11,
        dateDay: '10',
        dateMonth: 'Oct',
        author: 'By Admin',
        comments: '06 Comments',
        title: 'How to Prepare Your Car for a Canadian Winter',
        text: 'From battery health to winter tires, here\'s a practical checklist every Scarborough driver should run through before the cold hits.',
        to: '/blog-details',
        animation: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 6,
        image: blogImg10,
        dateDay: '14',
        dateMonth: 'Aug',
        author: 'By Admin',
        comments: '08 Comments',
        title: 'What Happens During a Full Vehicle Inspection?',
        text: 'Our certified technicians check over 50 points on your vehicle. Here\'s exactly what we look for — and why it matters.',
        to: '/blog-details',
        animation: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 7,
        image: blogImg1,
        dateDay: '12',
        dateMonth: 'Nov',
        author: 'By Admin',
        comments: '05 Comments',
        title: 'Elase They Endures Pains to Avoid The Worse Pains Taken',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 8,
        image: blogImg2,
        dateDay: '24',
        dateMonth: 'Aug',
        author: 'By Admin',
        comments: '07 Comments',
        title: 'What Is The Best Affordable Android Phone In 2023?',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 9,
        image: blogImg8,
        dateDay: '09',
        dateMonth: 'Jan',
        author: 'By Admin',
        comments: '04 Comments',
        title: 'Water leakage can be due to a clogged drain line',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 10,
        image: blogImg10,
        dateDay: '12',
        dateMonth: 'Nov',
        author: 'By Admin',
        comments: '07 Comments',
        title: 'Elapse They Endures Pains to Avoid Taken To Clean',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 11,
        image: blogImg1,
        dateDay: '12',
        dateMonth: 'Nov',
        author: 'By Admin',
        comments: '05 Comments',
        title: 'Elase They Endures Pains to Avoid The Worse Pains Taken',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 12,
        image: blogImg2,
        dateDay: '24',
        dateMonth: 'Aug',
        author: 'By Admin',
        comments: '07 Comments',
        title: 'What Is The Best Affordable Android Phone In 2023?',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 13,
        image: blogImg7,
        dateDay: '09',
        dateMonth: 'Jan',
        author: 'By Admin',
        comments: '04 Comments',
        title: 'Water leakage can be due to a clogged drain line',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 14,
        image: blogImg11,
        dateDay: '12',
        dateMonth: 'Nov',
        author: 'By Admin',
        comments: '07 Comments',
        title: 'Elapse They Endures Pains to Avoid Taken To Clean',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 15,
        image: blogImg10,
        dateDay: '25',
        dateMonth: 'Dec',
        author: 'By Admin',
        comments: '06 Comments',
        title: 'The Selection Point Erase in Certain Circumstances And Owing',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInUp',
        animationDelay: 300,
    },
];





export interface BlogStandardPost {
    id: number;
    image: string | StaticImageData; // Or string if using paths
    day: string;
    month: string;
    author: string;
    commentsCount: number;
    readTime: string;
    title: string;
    text: string;
    link: string;
}

// Create the array
export const blogStandardData: BlogStandardPost[] = [
    {
        id: 1,
        image: BlogList11,
        day: "12",
        month: "Nov",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "We Ensures That Best Quality Logistic Services Provides.",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 2,
        image: BlogList12,
        day: "15",
        month: "Aug",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "The Advantages of a Digital Supply Strategy",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 3,
        image: BlogList13,
        day: "22",
        month: "Feb",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "Logistics Announces Launch of The Safe Greenhouse Gas",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 4,
        image: BlogList11,
        day: "12",
        month: "Nov",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "We Ensures That Best Quality Logistic Services Provides.",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 5,
        image: BlogList12,
        day: "15",
        month: "Aug",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "The Advantages of a Digital Supply Strategy",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
];























export const blogOnePosts = blogPosts.slice(0, 3);
export const blogTwoPosts: BlogPost[] = [
    {
        id: 4,
        image: blogImg4,
        dateDay: '12',
        dateMonth: 'Nov',
        author: 'By Admin',
        comments: '07 Comments',
        title: 'Elapse They Endures Pains to Avoid Taken To Clean',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 5,
        image: blogImg5,
        dateDay: '25',
        dateMonth: 'Dec',
        author: 'By Admin',
        comments: '06 Comments',
        title: 'The Selection Point Erase in Certain Circumstances And Owing',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 6,
        image: blogImg6,
        dateDay: '23',
        dateMonth: 'Aug',
        author: 'By Admin',
        comments: '08 Comments',
        title: 'Secure to Other Greater Pleasures, or The Selection Point.',
        text: 'Secure to other greater pleasures, or the selection point. But in certain circumstances',
        to: '/blog-details',
        animation: 'fadeInRight',
        animationDelay: 500,
    },
];







