import React from "react";
import { Button } from "./button";

export default function ButtonIcon({ icon, altText, href }: { icon: React.ReactNode, altText: string, href: string }) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
            <Button variant="outline" size="icon" style={{ cursor: "pointer" }} >
                {icon}
                < span className="sr-only" >{altText}</span >
            </Button >
        </a>
    )
}