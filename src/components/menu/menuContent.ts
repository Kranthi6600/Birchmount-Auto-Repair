
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
    { id: 1, menuItem: "Team", menuLink: "/team" },
    { id: 2, menuItem: "Team Details", menuLink: "/team-details" },
    { id: 3, menuItem: "Projects", menuLink: "/projects" },
    { id: 4, menuItem: "Project Details", menuLink: "/project-details" },
    { id: 5, menuItem: "Testimonials", menuLink: "/testimonials" },
    { id: 6, menuItem: "Pricing", menuLink: "/pricing" },
    { id: 7, menuItem: "FAQs", menuLink: "/faqs" },
    { id: 8, menuItem: "404 Error", menuLink: "/404" },
];
export const servicesList: MenuItem[] = [
    { id: 1, menuItem: "Brake Repair & Service", menuLink: "/services" },
    { id: 2, menuItem: "Oil Change & Lube", menuLink: "/services" },
    { id: 3, menuItem: "Engine Diagnostics", menuLink: "/services" },
    { id: 4, menuItem: "Transmission Service", menuLink: "/services" },
    { id: 5, menuItem: "Electrical Repair", menuLink: "/services" },
];
export const shopList: MenuItem[] = [
    { id: 1, menuItem: "Products", menuLink: "/products" },
    { id: 2, menuItem: "Product Details", menuLink: "/product-details" },
    { id: 3, menuItem: "Cart", menuLink: "/cart" },
    { id: 4, menuItem: "Checkout", menuLink: "/checkout" },
    { id: 5, menuItem: "Sign Up", menuLink: "/sign-up" },
    { id: 6, menuItem: "Login", menuLink: "/login" },
];
