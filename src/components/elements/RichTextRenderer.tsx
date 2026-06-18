"use client";

import React from "react";
import parse, { domToReact, Element, type HTMLReactParserOptions, type DOMNode } from "html-react-parser";

interface RichTextRendererProps {
    html: string;
    className?: string;
}

const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
        if (domNode instanceof Element) {
            if (domNode.name === "img") return null;
            if (/^h[1-6]$/.test(domNode.name)) {
                return React.createElement(
                    domNode.name,
                    {
                        style: {
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "#1a1a1a",
                            marginTop: "2rem",
                            marginBottom: "1rem",
                            lineHeight: 1.3,
                        },
                    },
                    domToReact(domNode.children as DOMNode[], options)
                );
            }
            if (domNode.name === "p") {
                return (
                    <p
                        style={{
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            color: "#444",
                            marginBottom: "1.25rem",
                        }}
                    >
                        {domToReact(domNode.children as DOMNode[], options)}
                    </p>
                );
            }
            if (domNode.name === "ul") {
                return (
                    <ul
                        style={{
                            paddingLeft: "1.5rem",
                            marginBottom: "1.5rem",
                            listStyle: "disc",
                        }}
                    >
                        {domToReact(domNode.children as DOMNode[], options)}
                    </ul>
                );
            }
            if (domNode.name === "li") {
                return (
                    <li
                        style={{
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            color: "#444",
                            marginBottom: "0.5rem",
                            paddingLeft: "0.5rem",
                        }}
                    >
                        {domToReact(domNode.children as DOMNode[], options)}
                    </li>
                );
            }
            if (domNode.name === "strong" || domNode.name === "b") {
                return (
                    <strong style={{ color: "#1a1a1a", fontWeight: 700 }}>
                        {domToReact(domNode.children as DOMNode[], options)}
                    </strong>
                );
            }
        }
    },
};

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ html, className }) => {
    if (!html) return null;
    return <div className={className}>{parse(html, options)}</div>;
};

export default RichTextRenderer;
