
export type MenuItem = {
    id: number,
    menuItem: string,
    menuLink: string
}

export interface ServiceCategory {
    id: number;
    title: string;
    services: MenuItem[];
}
export const homeList: MenuItem[] = [
    { id: 1, menuItem: "Home One", menuLink: "/" },
    { id: 2, menuItem: "Home Two", menuLink: "/home-two" },
    { id: 3, menuItem: "Home Three", menuLink: "/home-three" },
    { id: 4, menuItem: "Home One Single Page", menuLink: "/single-page-home-one" },
    { id: 5, menuItem: "Home Two Single Page", menuLink: "/single-page-home-two" },
    { id: 6, menuItem: "Home Three Single Page", menuLink: "/single-page-home-three" },
]
export const pagesList: MenuItem[] = [
    { id: 1, menuItem: "FAQs", menuLink: "/faqs" },
    { id: 2, menuItem: "404 Error", menuLink: "/404" },
];
export const servicesList: MenuItem[] = [
    { id: 1, menuItem: "Complete Auto Body Repair",       menuLink: "/complete-auto-body-repair" },
    { id: 2, menuItem: "Collision Repairs",               menuLink: "/collision-repair" },
    { id: 3, menuItem: "Mechanical Repair",               menuLink: "/mechanical-repair" },
    { id: 4, menuItem: "Towing & Roadside Assistance",    menuLink: "/towing-roadside-assistance" },
    { id: 5, menuItem: "Insurance",                       menuLink: "/insurance" },
    { id: 6, menuItem: "Rentals",                         menuLink: "/rentals" },
];
export const serviceCategories: ServiceCategory[] = [
    {
        id: 1,
        title: "Repair Services",
        services: [
            { id: 1, menuItem: "Complete Auto Body Repair", menuLink: "/complete-auto-body-repair" },
            { id: 2, menuItem: "Collision Repairs",         menuLink: "/collision-repair" },
            { id: 3, menuItem: "Mechanical Repair",         menuLink: "/mechanical-repair" },
        ],
    },
    {
        id: 2,
        title: "Assistance & More",
        services: [
            { id: 4, menuItem: "Towing & Roadside Assistance", menuLink: "/towing-roadside-assistance" },
            { id: 5, menuItem: "Insurance",                    menuLink: "/insurance" },
            { id: 6, menuItem: "Rentals",                      menuLink: "/rentals" },
        ],
    },
];

export const shopList: MenuItem[] = [
    { id: 1, menuItem: "Products", menuLink: "/products" },
    { id: 2, menuItem: "Cart", menuLink: "/cart" },
    { id: 3, menuItem: "Checkout", menuLink: "/checkout" },
    { id: 4, menuItem: "Sign Up", menuLink: "/sign-up" },
    { id: 5, menuItem: "Login", menuLink: "/login" },
];
