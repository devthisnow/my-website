"use client"

import { useState, useRef, useEffect } from "react";

export default function ScrollingQuote(props) {
    const [quoteVisible, setQuoteVisible] = useState(false);
    const [quoteClass, setQuoteClass] = useState("");

    const quoteRef = useRef(null);

    const ioOffset = 30;

    const scrollingQuote = (elm) => {
        const viewHeight = document.documentElement.clientHeight,
            viewWidth = document.documentElement.clientWidth,
            scrollWidth = elm.scrollWidth,
            yPos = elm.getBoundingClientRect().y,
            switcher = { state: true, value: 1 },
            enterPoint = +(viewHeight * ioOffset / 100 - elm.getBoundingClientRect().height * (1 - options.threshold)).toFixed(1),
            exitPoint = +(viewHeight - viewHeight * ioOffset / 100 - elm.getBoundingClientRect().height * options.threshold).toFixed(1);

        // console.log("Switcher", switcher);

        // if (switcher.state == true) {
        //     if (yPos > viewHeight / 2) {
        //         switcher.value = 1;
        //         switcher.state = false;
        //     }
        // }

        let scrollAmount = (switcher.value + (1 - switcher.value * 2) * Math.min(Math.max((Math.round(yPos) - enterPoint), 0) / (exitPoint - enterPoint), 1)) * (scrollWidth - viewWidth);

        // console.log("||||-->> scrolled from the top", ((elm.getBoundingClientRect().y + window.scrollY) - document.documentElement.scrollTop) / viewHeight);

        // document.documentElement.style.setProperty("--scroll-quote", (((elm.getBoundingClientRect().y + window.scrollY) - document.documentElement.scrollTop) / viewHeight) * 100);

        requestAnimationFrame(() => {

            quoteRef.current.scroll({
                left: scrollAmount,
                behavior: "auto",
            });
            // quoteRef.current.firstChild.style.transform = `translateX(${-scrollAmount / 1}px)`
            // console.log("rAF is working here...", scrollAmount.toFixed(2));
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
        }

        if (quoteVisible) {
            window.addEventListener("scroll", handleQuoteScroll);
            // console.log("||| main IF run");
            // console.log(">>> Entered at ", quoteRef.current.getBoundingClientRect().y);
        } else {
            // console.log("--->>> Left at ", quoteRef.current.getBoundingClientRect().y);
        }

        return () => {
            // console.log("-->> Return cleanup function worked...");
            if (quoteRef.current) observer.unobserve(quoteRef.current);
            window.removeEventListener("scroll", handleQuoteScroll);
        }

    }, [quoteVisible, options])

    return (
        <section className="flex justify-center items-center w-full bg-mygray min-h-[100vh]">
            <div ref={quoteRef} className=" leading-none overflow-hidden max-h-[150px] pl-[80px]">
                <h4 className={`text-[168px] font-semibold text-right max-w-screen text-nowrap uppercase transition-all duration-750 ease-linear opacity-0 ${quoteClass} `}>Everyone&apos;s Favourite Webdev.</h4>
            </div>
        </section>
    );
};