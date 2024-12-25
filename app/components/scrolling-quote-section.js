"use client"

import { useState, useRef, useEffect } from "react";

export default function ScrollingQuote(props) {
    const [quoteVisible, setQuoteVisible] = useState(false);
    const [quoteClass, setQuoteClass] = useState("");
    const [sectionClass, setSectionClass] = useState("");
    // const [initScrollAmount, setInitScrollAmount] = useState(0);

    const quoteRef = useRef(null);

    const ioOffset = 25;

    const scrollingQuote = (elm) => {
        const viewHeight = document.documentElement.clientHeight,
            viewWidth = document.documentElement.clientWidth,
            scrollWidth = elm.scrollWidth;

        let scrollRatio = elm.parentElement.offsetTop / viewHeight;

        // Scrolling 'easeInOutQuint' function implementation
        const t1 = scrollRatio - 1;
        // scrollRatio = scrollRatio < 0.5 ? 16 * Math.pow(scrollRatio, 5) : 1 + 16 * Math.pow(t1, 5);

        let scrollAmount = Math.round((scrollRatio) * (scrollWidth - viewWidth));

        requestAnimationFrame(() => {

            elm.scroll({
                left: scrollAmount,
                behavior: "auto",
            });
        })

    }

    const obsCallbackFn = (entries) => {
        const [entry] = entries;
        setQuoteVisible(entry.isIntersecting);
        // console.log("||--> io range values:", entry.rootBounds.top, entry.rootBounds.bottom);
    }

    const options = {
        root: null,
        rootMargin: `-${ioOffset}% 0%`,
        threshold: 0.05,
    }

    useEffect(() => {
        // console.log("Use Effect Worked...");
        scrollingQuote(quoteRef.current);
        const handleQuoteScroll = () => {
            // console.log(quoteVisible, 'handleQuoteScroll worked!');
            // console.log(quoteRef.current.firstChild);

            scrollingQuote(quoteRef.current)

        }

        const observer = new IntersectionObserver(obsCallbackFn, options);
        if (quoteRef.current) {
            observer.observe(quoteRef.current);
            // console.log(quoteVisible ? "Observed" : "NOT Observed");
            quoteVisible ? setQuoteClass("opacity-100 blur-none") : setQuoteClass("opacity-50 blur-sm");
            // quoteVisible ? setSectionClass("") : setSectionClass("");
        }

        if (quoteVisible) {
            // setInitScrollAmount(window.scrollY);
            window.addEventListener("scroll", handleQuoteScroll);
            // console.log("||| main IF run");
            // console.log(">>> Entered at ", quoteRef.current.getBoundingClientRect().y);
        } else {
            // console.log("--->>> Left at ", quoteRef.current.getBoundingClientRect().y);
        }

        return () => {
            console.log("-->> SQS return cleanup function worked...");
            if (quoteRef.current) observer.unobserve(quoteRef.current);
            window.removeEventListener("scroll", handleQuoteScroll);
        }

    }, [quoteVisible, options])

    return (
        <section id="promo-quote" className="relative flex justify-start w-full min-h-[200vh] bg-gradient-to-b from-black from-50% to-gray-800 to-100% overflow-clip ">
            <div className={`flex justify-center items-center w-full h-[100vh] sticky top-0 ${sectionClass}`}>
                <div ref={quoteRef} className={`leading-none overflow-hidden max-h-[150px] `}>
                    <div className="px-[30dvw] w-fit">
                        <h4 className={`w-fit text-[55px] sm:text-[69px] lg:text-[168px] text-white font-semibold text-right whitespace-nowrap uppercase transition-all duration-750 ease-linear opacity-0 ${quoteClass} `}>THE ULTIMATE WEB DEVELOPER</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};