"use client"

import { useState, useRef, useEffect } from "react";

export default function ReasonsToWork(props) {
    const [blockVisible, setBlockVisible] = useState(false);
    const blockRef = useRef(null);

    const scrollingBlock = (elm) => {
        const viewHeight = document.documentElement.clientHeight / 2,
            blockScroll = elm.parentElement.parentElement.offsetTop,
            fraction = 0.25,
            divHeight = elm.parentElement.parentElement.scrollHeight,
            sectionHeight = elm.parentElement.parentElement.parentElement.scrollHeight,
            scrollRatio = blockScroll / (sectionHeight - divHeight),
            quoteScrollPos = (elm.scrollHeight - elm.firstChild.scrollHeight) * scrollRatio;

        // console.log(quoteScrollPos);

        // if (blockScroll > viewHeight * fraction * 2) {
        //     // console.log("This is ONE", yPos / 15);
        //     elm.style.transform = `translateY(-200%)`
        // }

        // if (blockScroll <= viewHeight * fraction * 2 && blockScroll >= (viewHeight * fraction)) {
        //     // console.log("This is TWO");
        //     elm.style.transform = `translateY(-100%)`
        // }

        // if (blockScroll < (viewHeight * fraction)) {
        //     // console.log("This is THREE");
        //     elm.style.transform = `translateY(-0%)`
        // }

        requestAnimationFrame(() => {
            elm.parentElement.scroll({
                top: quoteScrollPos,
            });
        })

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
        <section id="soft-skills" className="relative my-[280px] sm:my-[360px] flex sm:justify-start w-full min-h-[150dvh] px-[30px] sm:p-0 ">
            <div className="sticky top-0 flex flex-col justify-center items-center w-full h-[100vh] ">
                <h2 className="text-[44px] sm:text-[107px] font-semibold mb-4 capitalize sm:mt-[160px] text-center leading-tight sm:leading-normal">Why work with me</h2>
                <div className="w-full mb-[50px] min-h-[30px] sm:min-h-[42px] max-h-[30px] overflow-hidden snap-y snap-mandatory" >
                    <ul ref={blockRef} className="h-full text-[18px] sm:text-[28px] text-center leading-tight transition duration-200 ">
                        <li className="pb-[15px] ">Successfully launched many projects across the globe.</li>
                        <li className="pb-[15px] ">Emotionally stable and capable of hard work.</li>
                        <li className=" ">Team-player ready to join your crew.</li>
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