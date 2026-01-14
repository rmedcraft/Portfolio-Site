"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export interface TextCarouselProps {
    text: string[]
    className: string
}

// classes for each state in the queue. 
const visibleClass = "scale-100 translate-y-0"
const invisibleClass = "scale-0"
const nextClass = "scale-0 translate-y-5"

export default function TextCarousel(props: TextCarouselProps) {
    const { text, className } = props
    const [activeIndex, setActiveIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex) => ((activeIndex + 1) % text.length))
        }, 6000)

        return () => clearInterval(interval)
    })

    return (
        <div className={cn("", className)}>
            {text.map((s, index) => {
                return <span key={index} className={`absolute transition-all duration-200 ${index === activeIndex ? visibleClass : (index === (activeIndex + 1) % text.length ? nextClass : invisibleClass)}`}>{s}</span>
            })}
        </div>
    )
}