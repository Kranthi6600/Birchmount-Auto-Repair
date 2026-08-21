/**
 * Generic privacy policy content.
 *
 * The structure is intentionally reusable so the same component can render
 * terms-of-service or other legal pages by supplying a different data file.
 *
 * NOTE: This is generic boilerplate. Review with a qualified professional
 * before relying on it for legal compliance (PIPEDA, GDPR, CCPA, etc.).
 */

export interface LegalSubPoint {
    text: string;
}

export interface LegalSection {
    /** Stable id used for anchor links / table of contents. */
    id: string;
    title: string;
    /** Optional lead paragraph rendered before the body list. */
    intro?: string;
    /** Body paragraphs / list items. */
    body: string[];
    /** Optional nested bullet points under the section. */
    points?: LegalSubPoint[];
}

export interface LegalDocument {
    title: string;
    /** Short summary shown under the page banner. */
    summary: string;
    /** ISO date string of the last revision. */
    lastUpdated: string;
    sections: LegalSection[];
}

export const privacyPolicyData: LegalDocument = {
    title: 'Privacy Policy',
    summary:
        'This Privacy Policy explains how Birchmount Auto Repair collects, uses, and protects your information when you visit our website or use our services.',
    lastUpdated: '2026-08-21',
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction',
            intro:
                'Birchmount Auto Repair ("we", "us", or "our") operates the website birchmountautorepair.com (the "Site"). This Privacy Policy describes the types of information we collect and how we use, disclose, and safeguard that information.',
            body: [
                'By accessing or using our Site and services, you consent to the collection, use, and disclosure of your information as described in this Policy.',
                'This Policy applies only to information collected through our Site and does not cover practices of third parties that we do not own or control.',
            ],
        },
        {
            id: 'information-we-collect',
            title: '2. Information We Collect',
            intro:
                'We may collect the following categories of information when you interact with our Site or services:',
            body: [
                'Personal Information: name, email address, phone number, postal address, and vehicle details you provide when requesting a quote, booking an appointment, or contacting us.',
                'Usage Information: pages visited, referring URLs, browser type, device information, and approximate location derived from IP address.',
                'Communication Records: the content of messages, emails, or forms you send to us.',
            ],
        },
        {
            id: 'how-we-use-information',
            title: '3. How We Use Your Information',
            intro: 'We use the information we collect for the following purposes:',
            body: [
                'To provide, operate, and maintain our services and to respond to quote requests and appointments.',
                'To communicate with you about your service, promotions, updates, and customer support.',
                'To improve our Site, services, and customer experience.',
                'To detect, prevent, and address technical issues, fraud, or other unlawful activity.',
                'To comply with applicable legal, accounting, and reporting obligations.',
            ],
        },
        {
            id: 'cookies',
            title: '4. Cookies and Tracking Technologies',
            intro:
                'We and our service providers may use cookies, web beacons, and similar technologies to recognize your browser and remember your preferences.',
            body: [
                'Essential cookies enable core Site functionality and cannot be disabled.',
                'Analytics cookies help us understand how visitors use our Site so we can improve it.',
                'Marketing cookies may be used to measure the effectiveness of advertising campaigns.',
                'You can control cookies through your browser settings, but disabling them may limit some Site features.',
            ],
        },
        {
            id: 'sharing',
            title: '5. Sharing Your Information',
            intro:
                'We do not sell your personal information. We may share information with:',
            body: [
                'Service Providers: trusted third parties that perform services on our behalf (e.g., hosting, analytics, marketing, payment processing).',
                'Business Partners: with your consent, to coordinate services such as towing, rentals, or insurance claims.',
                'Legal Authorities: when required by law, court order, or to protect our rights, safety, or property.',
            ],
            points: [
                { text: 'Recipients are bound by confidentiality obligations and may only use your data for the purposes for which it was shared.' },
            ],
        },
        {
            id: 'data-retention',
            title: '6. Data Retention',
            intro:
                'We retain personal information only for as long as necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce our agreements.',
            body: [
                'Service records and related contact details are typically retained for the duration of the customer relationship plus the period required by applicable law.',
                'Usage data is generally retained for a shorter period unless needed for security or legal reasons.',
            ],
        },
        {
            id: 'security',
            title: '7. Data Security',
            intro:
                'We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information.',
            body: [
                'However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.',
                'In the event of a data breach affecting your personal information, we will notify you and applicable authorities as required by law.',
            ],
        },
        {
            id: 'your-rights',
            title: '8. Your Privacy Rights',
            intro:
                'Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information. To exercise any of these rights:',
            body: [
                'Contact us using the details provided in the "Contact Us" section below.',
                'We will respond to your request within a reasonable timeframe and in accordance with applicable law.',
                'You may also opt out of marketing communications at any time by following the unsubscribe link in our emails or by contacting us directly.',
            ],
        },
        {
            id: 'third-party-links',
            title: '9. Third-Party Links',
            intro:
                'Our Site may contain links to third-party websites or services that we do not control.',
            body: [
                'We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.',
            ],
        },
        {
            id: 'childrens-privacy',
            title: "10. Children's Privacy",
            intro:
                'Our Site and services are not directed to individuals under the age of 16.',
            body: [
                'We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can delete it.',
            ],
        },
        {
            id: 'changes',
            title: '11. Changes to This Privacy Policy',
            intro:
                'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs.',
            body: [
                'We will post the updated Policy on this page and revise the "Last Updated" date at the top.',
                'Material changes will be communicated through a prominent notice on the Site or via email where appropriate.',
                'Your continued use of the Site after changes take effect constitutes acceptance of the revised Policy.',
            ],
        },
        {
            id: 'contact',
            title: '12. Contact Us',
            intro: 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us:',
            body: [
                'Birchmount Auto Repair',
                'Address: 1064 Birchmount Rd, Scarborough, ON M1K 1S4, Canada',
                'Phone: (416) 757-8368',
                'Email: birchmountautorepair@gmail.com',
            ],
        },
    ],
};
