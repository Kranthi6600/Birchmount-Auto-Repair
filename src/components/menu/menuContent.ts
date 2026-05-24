
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
    { id: 1,  menuItem: "Auto Body Repair",        menuLink: "/auto-body-repair" },
    { id: 2,  menuItem: "Collision Repair",         menuLink: "/collision-repair" },
    { id: 3,  menuItem: "Mechanical Repair",        menuLink: "/mechanical-repair" },
    { id: 4,  menuItem: "Certified Auto Repair",    menuLink: "/certified-auto-repair" },
    { id: 5,  menuItem: "Insurance Claim Repairs",  menuLink: "/insurance-claim-repairs" },
    { id: 6,  menuItem: "Paint & Dent Repair",      menuLink: "/paint-dent-repair" },
    { id: 7,  menuItem: "Frame Straightening",      menuLink: "/frame-straightening" },
    { id: 8,  menuItem: "Bumper Repair",            menuLink: "/bumper-repair" },
    { id: 9,  menuItem: "Scratch & Dent Removal",   menuLink: "/scratch-dent-removal" },
    { id: 10, menuItem: "Wheel Alignment",          menuLink: "/wheel-alignment" },
    { id: 11, menuItem: "Suspension Repair",        menuLink: "/suspension-repair" },
    { id: 12, menuItem: "Brake Service",            menuLink: "/brake-service" },
    { id: 13, menuItem: "Engine Diagnostics",       menuLink: "/engine-diagnostics" },
    { id: 14, menuItem: "Transmission Repair",      menuLink: "/transmission-repair" },
    { id: 15, menuItem: "Hybrid Vehicle Repair",    menuLink: "/hybrid-vehicle-repair" },
    { id: 16, menuItem: "Car Accident Repair",      menuLink: "/car-accident-repair" },
    { id: 17, menuItem: "Windshield Replacement",   menuLink: "/windshield-replacement" },
    { id: 18, menuItem: "Towing & Recovery",        menuLink: "/towing-recovery" },
    { id: 19, menuItem: "OEM Parts Repair",         menuLink: "/oem-parts-repair" },
    { id: 20, menuItem: "Complete Auto Care",       menuLink: "/complete-auto-care" },
    { id: 21, menuItem: "Vehicle Maintenance",      menuLink: "/vehicle-maintenance" },
    { id: 22, menuItem: "Car Paint Services",       menuLink: "/car-paint-services" },
    { id: 23, menuItem: "Dent Removal",             menuLink: "/dent-removal" },
    { id: 24, menuItem: "Auto Refinishing",         menuLink: "/auto-refinishing" },
    { id: 25, menuItem: "Computer Diagnostics",     menuLink: "/computer-diagnostics" },
    { id: 26, menuItem: "Full Service Garage",      menuLink: "/full-service-garage" },
];
export const shopList: MenuItem[] = [
    { id: 1, menuItem: "Products", menuLink: "/products" },
    { id: 2, menuItem: "Cart", menuLink: "/cart" },
    { id: 3, menuItem: "Checkout", menuLink: "/checkout" },
    { id: 4, menuItem: "Sign Up", menuLink: "/sign-up" },
    { id: 5, menuItem: "Login", menuLink: "/login" },
];
