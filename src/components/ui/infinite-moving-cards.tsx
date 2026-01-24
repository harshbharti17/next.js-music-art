"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    const addAnimation = () => {
        if (!containerRef.current || !scrollerRef.current) return;

        const children = Array.from(scrollerRef.current.children);

        children.forEach((item) => {
            scrollerRef.current!.appendChild(item.cloneNode(true));
        });

        setDirection();
        setSpeed();
        setStart(true);
    };

    const setDirection = () => {
        containerRef.current?.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
        );
    };

    const setSpeed = () => {
        const duration =
            speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

        containerRef.current?.style.setProperty(
            "--animation-duration",
            duration
        );
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                className
            )}
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
            }}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        key={item.name}
                        className="relative max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-111 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                    >
                        <blockquote>
                            <span className="relative z-20 text-sm leading-relaxed text-neutral-800 dark:text-gray-100">
                                {item.quote}
                            </span>

                            <div className="relative z-20 mt-6">
                                <p className="text-sm text-neutral-500 dark:text-gray-400">
                                    {item.name}
                                </p>
                                <p className="text-sm text-neutral-500 dark:text-gray-400">
                                    {item.title}
                                </p>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
