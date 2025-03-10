"use client";
import Logo from "@/src/components/Logo";
import NavItems from "@/src/components/NavItems";
import { useRef, useState, useEffect } from "react";

export default function Header() {
    const navItemsRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const [showHeader, setShowHeader] = useState(true);
    const isNavOpen = useRef(false);
    const lastScrollY = useRef(0);

    function toggleNavItems() {
        const header = headerRef.current!;
        if (isNavOpen.current) {
            header.classList.remove("bg-primary-900");
            header.classList.add("bg-primary-950");
        } else {
            header.classList.remove("bg-primary-950");
            header.classList.add("bg-primary-900");
        }

        navItemsRef.current!.classList.toggle("hidden");
        isNavOpen.current = !isNavOpen.current;
    }

    function handleCollapseNav(event: MouseEvent | TouchEvent) {
        if (
            navItemsRef.current &&
            !navItemsRef.current.contains(event.target as Node) &&
            !headerRef.current?.contains(event.target as Node)
        ) {
            if (!navItemsRef.current.classList.contains("hidden")) {
                toggleNavItems();
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setShowHeader(false);
                if (isNavOpen.current) {
                    toggleNavItems();
                }
            } else {
                setShowHeader(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleCollapseNav);
        document.addEventListener("touchstart", handleCollapseNav);

        return () => {
            document.removeEventListener("mousedown", handleCollapseNav);
            document.removeEventListener("touchstart", handleCollapseNav);
        };
    });

    return (
        <nav>
            <div
                ref={headerRef}
                className={`fixed top-0 left-0 right-0 w-full flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4  bg-primary-950 text-primary-100  transform transition-transform duration-300 z-50 ${showHeader ? "translate-y-0" : "-translate-y-full"
                    } md:px-8 md:py-6`}
            >
                <Logo />
                <button
                    onClick={toggleNavItems}
                    type="button"
                    className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-expanded="false"
                >
                    <svg
                        className="w-24 h-24"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    ref={navItemsRef}
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <NavItems className="flex flex-col md:flex-row mt-6 md:mt-0 p-2 rounded-md gap-8 text-2xl " />
                </div>
            </div>
        </nav>
    );
}
