"use client"

import { useState, useRef, useEffect } from "react";

export default function ReasonsToWork(props) {
    const [blockVisible, setBlockVisible] = useState(false);
    const blockRef = useRef(null);

    const scrollingBlock = (elm) => {
        const viewHeight = document.documentElement.clientHeight / 2,
            blockScroll = elm.parentElement.parentElement.offsetTop,
            fraction = 0.25;

        // console.log(blockScroll, viewHeight);

        if (blockScroll > viewHeight * fraction * 2) {
            // console.log("This is ONE", yPos / 15);
            elm.style.transform = `translateY(-200%)`
        }

        if (blockScroll <= viewHeight * fraction * 2 && blockScroll >= (viewHeight * fraction)) {
            // console.log("This is TWO");
            elm.style.transform = `translateY(-100%)`
        }

        if (blockScroll < (viewHeight * fraction)) {
            // console.log("This is THREE");
            elm.style.transform = `translateY(-0%)`
        }

        // console.log(elm.clientHeight);
    }

    const ioCallbackFn = (entries) => {
        const [entry] = entries;
        setBlockVisible(entry.isIntersecting);
    }

    const options = {
        root: null,
        rootMargin: "-10% 0%",
        threshold: 0.05,
    }

    useEffect(() => {
        scrollingBlock(blockRef.current);

        const handleBlockScroll = () => {
            scrollingBlock(blockRef.current)
        }

        const observer = new IntersectionObserver(ioCallbackFn, options);
        if (blockRef.current.parentElement) {
            observer.observe(blockRef.current.parentElement);
            // blockVisible ? setQuoteClass("opacity-100 blur-none") : setQuoteClass("opacity-50 blur-sm");
        }

        if (blockVisible) {
            window.addEventListener("scroll", handleBlockScroll);
        }

        return () => {
            console.log("-->> RS return cleanup function worked...");
            if (blockRef.current) observer.unobserve(blockRef.current.parentElement);
            window.removeEventListener("scroll", handleBlockScroll);
        }

    }, [blockVisible, options])

    return (
        <section className="relative flex justify-start w-full min-h-[150dvh] ">
            <div className="sticky top-0 flex flex-col justify-center items-center w-full h-[100vh] ">
                <h2 className="text-[107px] font-semibold mb-4 capitalize mt-[160px]">Why work with me</h2>
                <div className="w-full mb-[50px] min-h-[42px] max-h-[42px] overflow-hidden " >
                    <ul ref={blockRef} className="h-full text-[28px] text-center snap-y snap-mandatory transition duration-500 ">
                        <li className="snap-start ">Successfully launched many projects across the globe.</li>
                        <li className="snap-start ">Emotionally stable and capable of hard work.</li>
                        <li className="snap-start ">Team-player ready to join your crew.</li>
                        {/* <li className="snap-start animate-scroll-me [animation-timeline:view()]">Your needs are what my workflow is built around.</li>
                        <li className="snap-start animate-scroll-me [animation-timeline:view()] h-full">My approach is based on collaboration and professionalism.</li>
                        <li className="snap-start animate-scroll-me [animation-timeline:view()]">Great communication and on-time delivery.</li> */}
                    </ul>
                </div>
                <div className="w-8/12 mb-[230px] text-[28px] border-b-4 text-center border-black"></div>
            </div>
        </section>
    );
};