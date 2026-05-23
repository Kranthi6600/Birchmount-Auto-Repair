
export type MenuItem = {
    id: number,
    menuItem: string,
    menuLink: string
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
    { id: 1, menuItem: "Brake Repair & Service", menuLink: "/brake-repair" },
    { id: 2, menuItem: "Oil Change & Lube", menuLink: "/oil-change" },
    { id: 3, menuItem: "Engine Diagnostics", menuLink: "/engine-diagnostics" },
    { id: 4, menuItem: "Transmission Service", menuLink: "/transmission-service" },
    { id: 5, menuItem: "Electrical Repair", menuLink: "/electrical-repair" },
];
export const shopList: MenuItem[] = [
    { id: 1, menuItem: "Products", menuLink: "/products" },
    { id: 2, menuItem: "Cart", menuLink: "/cart" },
    { id: 3, menuItem: "Checkout", menuLink: "/checkout" },
    { id: 4, menuItem: "Sign Up", menuLink: "/sign-up" },
    { id: 5, menuItem: "Login", menuLink: "/login" },
];
