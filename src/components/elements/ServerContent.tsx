import React from 'react';

interface ServerContentProps {
    html: string;
    className?: string;
}

const SCOPED_STYLES = `
.server-rich-content h1, .server-rich-content h2, .server-rich-content h3,
.server-rich-content h4, .server-rich-content h5, .server-rich-content h6 {
    font-size: 1.5rem; font-weight: 700; color: #1a1a1a;
    margin-top: 2rem; margin-bottom: 1rem; line-height: 1.3;
}
.server-rich-content p {
    font-size: 1rem; line-height: 1.8; color: #444; margin-bottom: 1.25rem;
}
.server-rich-content ul {
    padding-left: 1.5rem; margin-bottom: 1.5rem; list-style: disc;
}
.server-rich-content li {
    font-size: 1rem; line-height: 1.8; color: #444;
    margin-bottom: 0.5rem; padding-left: 0.5rem;
}
.server-rich-content strong, .server-rich-content b {
    color: #1a1a1a; font-weight: 700;
}
.server-rich-content img { display: none; }
`;

const ServerContent: React.FC<ServerContentProps> = ({ html, className }) => {
    if (!html) return null;
    return (
        <div className={`server-rich-content ${className || ''}`}>
            <style dangerouslySetInnerHTML={{ __html: SCOPED_STYLES }} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default ServerContent;
