import type { AnimationVariant } from '@/components/elements/FadeInAdvanced';

export interface BlogPost {
    id: number;
    slug: string;
    image: string;
    boxImg1: string;
    boxImg2: string;
    dateDay: string;
    dateMonth: string;
    author: string;
    comments: number;
    readTime: string;
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    intro: string;
    intro2: string;
    quote: string;
    section2Title: string;
    section2Body: string;
    points: string[];
    animation: AnimationVariant;
    animationDelay: number;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: '5-signs-your-brakes-need-immediate-attention',
        image: '/assets/images/blog/blog1.jpeg',
        boxImg1: '/assets/images/blog/blog1-1.jpeg',
        boxImg2: '/assets/images/blog/blog1-2.jpeg',
        dateDay: '12',
        dateMonth: 'Oct',
        author: 'Admin',
        comments: 5,
        readTime: '4 Min Read',
        title: '5 Signs Your Brakes Need Immediate Attention',
        excerpt: 'Squealing, grinding, or pulling to one side are warning signs you should never ignore. Here\'s what to look for before it becomes a safety emergency.',
        category: 'Brake Repair',
        tags: ['Brakes', 'Safety', 'Maintenance'],
        intro: 'Your brakes are the single most important safety system on your vehicle. But because brake wear happens gradually, it\'s easy to overlook the early warning signs until the problem becomes serious — and expensive. At Birchmount Auto Repair in Scarborough, our certified technicians see brake-related issues every day that could have been caught much sooner.',
        intro2: 'Knowing what to listen and feel for can save you from a dangerous situation on the road. Here are five warning signs that your brakes need immediate attention.',
        quote: 'Never ignore brake warning signs. What starts as a small squeal can quickly become a grinding, costly repair — or worse, a safety emergency. Get it checked early.',
        section2Title: 'What to Do When You Notice These Signs',
        section2Body: 'If you notice any of the above signs, do not delay. Worn brakes don\'t just put your safety at risk — they can cause damage to rotors, calipers, and other components, turning a straightforward pad replacement into a much more expensive repair. Book an inspection at Birchmount Auto Repair and we\'ll assess your entire brake system at no extra charge.',
        points: [
            'Squealing or screeching sounds when you apply the brakes',
            'Grinding or metal-on-metal noise indicating worn pads',
            'Soft, spongy, or low brake pedal feel',
            'Vehicle pulling to one side when braking',
            'Steering wheel vibration or shaking when you brake',
        ],
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        slug: 'how-often-should-you-change-your-oil',
        image: '/assets/images/blog/blog2.jpeg',
        boxImg1: '/assets/images/blog/blog2-1.jpeg',
        boxImg2: '/assets/images/blog/blog2-2.jpeg',
        dateDay: '05',
        dateMonth: 'Nov',
        author: 'Admin',
        comments: 7,
        readTime: '5 Min Read',
        title: 'How Often Should You Change Your Oil?',
        excerpt: 'Modern vehicles and synthetic oils have changed the rules. Learn the right oil change interval for your car and driving habits in the Scarborough area.',
        category: 'Oil Change',
        tags: ['Oil Change', 'Engine', 'Maintenance'],
        intro: 'For decades, the rule of thumb was simple: change your oil every 5,000 kilometres or three months. But modern engines, improved oil formulations, and new vehicle technology have changed that equation. At Birchmount Auto Repair, we get asked about oil change intervals every day — and the honest answer depends on your vehicle and how you drive.',
        intro2: 'Skipping or delaying oil changes is one of the most common and costly mistakes vehicle owners make. Engine oil lubricates, cools, and cleans your engine. As it breaks down, it loses its ability to protect — leading to accelerated wear, overheating, and eventually engine damage.',
        quote: 'The cheapest maintenance you can do for your engine is a regular oil change. It\'s a small investment that protects one of your vehicle\'s most expensive components.',
        section2Title: 'What Type of Oil Does Your Car Need?',
        section2Body: 'Using the right oil is just as important as changing it on schedule. Conventional oil suits most standard engines and older vehicles. Synthetic blend offers a middle ground for moderate driving conditions. Full synthetic provides the best protection for high-performance engines, extreme temperatures, and high-mileage vehicles. Our technicians will recommend the right oil for your specific make and model.',
        points: [
            'Conventional oil: change every 5,000–8,000 km',
            'Synthetic blend: change every 8,000–10,000 km',
            'Full synthetic: change every 10,000–15,000 km',
            'Always check your owner\'s manual for the manufacturer\'s recommendation',
            'More frequent changes recommended for city driving, towing, or extreme temperatures',
        ],
        animation: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
        slug: 'what-does-the-check-engine-light-mean',
        image: '/assets/images/blog/blog3.jpeg',
        boxImg1: '/assets/images/blog/blog3-1.jpeg',
        boxImg2: '/assets/images/blog/blog3-2.jpeg',
        dateDay: '18',
        dateMonth: 'Sep',
        author: 'Admin',
        comments: 4,
        readTime: '4 Min Read',
        title: 'What Does the Check Engine Light Mean?',
        excerpt: 'That amber light on your dashboard could mean anything from a loose gas cap to a serious engine fault. Here\'s how to tell the difference — and what to do next.',
        category: 'Engine Diagnostics',
        tags: ['Engine', 'Diagnostics', 'Warning Light'],
        intro: 'The check engine light is one of the most misunderstood warning indicators in modern vehicles. For some drivers, it triggers immediate panic. For others, it gets ignored for weeks or months. Neither reaction is ideal. Understanding what the light actually signals — and how urgently you need to act — can save you time, money, and frustration.',
        intro2: 'Modern vehicles are equipped with an onboard diagnostic system (OBD-II) that continuously monitors hundreds of engine and emissions-related parameters. When something falls outside the normal range, it stores a fault code and illuminates the check engine light. A professional diagnostic scan reads that code and helps identify the root cause.',
        quote: 'Don\'t ignore the check engine light — but don\'t panic either. Get a proper diagnostic scan and let the data tell you what\'s actually going on with your vehicle.',
        section2Title: 'When Should You Pull Over Immediately?',
        section2Body: 'If the check engine light is solid and your vehicle is running normally, you can typically drive to a shop within a day or two. However, if the light is flashing or accompanied by rough running, loss of power, unusual smells, or other warning lights, pull over safely and call for assistance. A flashing check engine light usually means a severe misfire that can damage your catalytic converter.',
        points: [
            'Loose or missing fuel cap — the most common and simplest cause',
            'Oxygen sensor failure affecting fuel efficiency and emissions',
            'Catalytic converter issues causing emissions test failures',
            'Mass air flow sensor faults affecting engine performance',
            'Spark plug or ignition coil misfires causing rough running',
        ],
        animation: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 4,
        slug: 'winter-car-care-tips-for-scarborough-drivers',
        image: '/assets/images/blog/blog4.jpeg',
        boxImg1: '/assets/images/blog/blog4-1.jpeg',
        boxImg2: '/assets/images/blog/blog4-2.jpeg',
        dateDay: '20',
        dateMonth: 'Mar',
        author: 'Admin',
        comments: 6,
        readTime: '5 Min Read',
        title: 'Winter Car Care Tips for Scarborough Drivers',
        excerpt: 'Cold starts, icy roads, and road salt take a toll on your vehicle. Follow this checklist to keep your car running strong all winter long in the GTA.',
        category: 'Seasonal Tips',
        tags: ['Winter', 'Tires', 'Battery', 'Scarborough'],
        intro: 'Canadian winters are tough on vehicles. In Scarborough and the broader GTA, drivers face freezing temperatures, heavy snowfall, and road salt that accelerates corrosion on everything from your undercarriage to your brake lines. A little preparation before the cold sets in goes a long way toward keeping your vehicle reliable and safe all season.',
        intro2: 'At Birchmount Auto Repair, we recommend a pre-winter inspection every year. Our technicians will check all the critical systems affected by cold weather and flag anything that needs attention before you\'re stranded on a cold morning.',
        quote: 'Winter in the GTA is no joke. Preparing your vehicle before the cold hits is the best way to avoid breakdowns, costly repairs, and dangerous situations on icy roads.',
        section2Title: 'Don\'t Forget Your Vehicle\'s Undercarriage',
        section2Body: 'Road salt is one of the most damaging substances your vehicle encounters. It accelerates rust on your frame, suspension components, brake lines, and exhaust system. After heavy snowfalls or salting events, try to rinse the underside of your vehicle when temperatures allow. A pre-winter undercarriage inspection can catch early rust before it becomes structural damage.',
        points: [
            'Switch to winter tires — all-seasons lose effectiveness below 7°C',
            'Test your battery — cold weather reduces battery capacity significantly',
            'Check your coolant mixture to handle extreme cold temperatures',
            'Inspect your brakes before winter driving conditions arrive',
            'Top up windshield washer fluid with a winter-rated formula',
        ],
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 5,
        slug: 'warning-signs-your-transmission-needs-service',
        image: '/assets/images/blog/blog5.jpeg',
        boxImg1: '/assets/images/blog/blog5-1.jpeg',
        boxImg2: '/assets/images/blog/blog5-2.jpeg',
        dateDay: '14',
        dateMonth: 'Aug',
        author: 'Admin',
        comments: 8,
        readTime: '4 Min Read',
        title: 'Warning Signs Your Transmission Needs Service',
        excerpt: 'Slipping gears, rough shifts, and fluid leaks are your transmission\'s way of asking for help. Don\'t wait — transmission repairs caught early cost a fraction of a full replacement.',
        category: 'Transmission',
        tags: ['Transmission', 'Gears', 'Fluid'],
        intro: 'Your transmission is one of the most complex and expensive components in your vehicle. It\'s responsible for transferring engine power to the wheels and managing gear changes — whether you drive an automatic, manual, or CVT vehicle. When it starts to fail, it rarely gives you a lot of warning before things become serious.',
        intro2: 'The good news is that transmission problems almost always show early warning signs. Catching them early can be the difference between an affordable repair and a full transmission rebuild or replacement. At Birchmount Auto Repair, we diagnose and service transmissions for all vehicle makes and models.',
        quote: 'A transmission repair caught early can cost a few hundred dollars. Left too long, that same problem can turn into a full rebuild costing thousands. Don\'t ignore the warning signs.',
        section2Title: 'How Often Should Transmission Fluid Be Changed?',
        section2Body: 'Transmission fluid lubricates and cools the transmission\'s internal components. Over time, it breaks down and becomes contaminated. Most manufacturers recommend a fluid change every 50,000 to 100,000 kilometres, though this varies by vehicle and driving conditions. If you tow, drive in stop-and-go traffic, or live in an extreme climate, more frequent changes may be needed.',
        points: [
            'Delayed or rough gear shifts — hesitation between changes',
            'Slipping gears — engine revs but the vehicle doesn\'t accelerate properly',
            'Burning smell — overheated or degraded transmission fluid',
            'Transmission warning light illuminated on the dashboard',
            'Fluid leaks — red or brownish fluid under your vehicle',
        ],
        animation: 'fadeInUp',
        animationDelay: 300,
    },
];

export const categories = [
    { label: 'Brake Repair', count: 1 },
    { label: 'Oil Change', count: 1 },
    { label: 'Engine Diagnostics', count: 1 },
    { label: 'Seasonal Tips', count: 1 },
    { label: 'Transmission', count: 1 },
];

export const blogOnePosts = blogPosts.slice(0, 3);

export const blogTwoPosts = blogPosts.slice(2, 5).map((p, i) => ({
    ...p,
    image: ['/assets/images/blog/blog2.jpeg', '/assets/images/blog/blog3.jpeg', '/assets/images/blog/blog4.jpeg'][i],
}));
