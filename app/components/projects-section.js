"use client"

import { useState, useRef, useEffect } from "react";

export default function Projects(props) {
    const projects = [{
        ind: 1,
        name: "Next JS Example",
        button: "More soon",
        image: "//img.png",
        link: "/"
    },
    {
        ind: 2,
        name: "React JS Example",
        button: "More soon",
        image: "//img.png",
        link: "/"
    },
    {
        ind: 3,
        name: "SPA Example",
        button: "More soon",
        image: "//img.png",
        link: "/"
    },
    {
        ind: 4,
        name: "JavaScript Example",
        button: "More soon",
        image: "//img.png",
        link: "/"
    },
    {
        ind: 5,
        name: "See More Examples",
        button: "More soon",
        image: "//img.png",
        link: "/"
    }];

    const [slideNum, setSlideNum] = useState(1);
    const [startTouchPos, setStartTouchPos] = useState(0);
    const [endTouchPos, setEndTouchPos] = useState(0);
    const [snapClass, setSnapClass] = useState("snap-x");
    const refSlide = useRef(null);

    const next = () => {
        setSlideNum(
            slideNum + 1 <= projects.length ? slideNum + 1 : projects.length
        )
    }

    const prev = () => {
        setSlideNum(
            slideNum - 1 > 0 ? slideNum - 1 : 1
        )
    }

    const handleScrollOnTouch = (e) => {
        const scrollWidth = e.target.parentElement.parentElement.scrollWidth + 20,
            shiftAmount = 10;
        // const shiftValue = e.target.scrollWidth + 20;
        // e.type == "touchstart" ? console.log(e.touches[0].clientX) : null;
        e.type == "touchstart" ? setStartTouchPos(e.touches[0].clientX) : null;
        if (e.type == "touchstart") {
            e.target.parentElement.style.opacity = 0.85;
        }
        // e.type == "touchmove" ? console.log(e.touches[0].clientX) : null;
        e.type == "touchmove" ? setEndTouchPos(e.touches[0].clientX) : null;
        // if (e.type == "touchmove") {
        //     // setSnapClass("snap-none");
        //     e.target.parentElement.parentElement.scrollLeft = (endTouchPos - startTouchPos < 0 ? scrollWidth * (slideNum - 1) + shiftAmount : scrollWidth * (slideNum - 1) - shiftAmount);
        //     // - (endTouchPos - startTouchPos) / 1;
        //     // e.target.parentElement.parentElement.style.cssText = `width: 4000px; transform: translateX(${endTouchPos - startTouchPos < 0 ? "50px" : "-50px"})`;
        //     console.log(e.target.parentElement.parentElement.style.width);
        // };
        e.type == "touchend" ? (console.log(e.target.parentElement.parentElement.scrollWidth, endTouchPos, endTouchPos - startTouchPos), e.target.parentElement.style.opacity = 1) : null;
        if (e.type == "touchend" && endTouchPos != 0) {
            e.target.parentElement.style.opacity = 1;
            endTouchPos - startTouchPos < 0 ? next() : prev();
            // setSnapClass("snap-x");
            setEndTouchPos(0);
        }

    }

    useEffect(() => {
        //Actual scroll width should be increased by flex gap in 20px
        const scrollWidth = refSlide.current.scrollWidth + 20,
            containerScrollWidth = refSlide.current.parentElement.scrollWidth,
            timeStart = document.timeline.currentTime,
            curElmPos = refSlide.current.parentElement.scrollLeft;

        let targetScrollLeft = scrollWidth * (slideNum - 1);

        targetScrollLeft = targetScrollLeft <= (containerScrollWidth - refSlide.current.parentElement.offsetWidth) ? targetScrollLeft : containerScrollWidth - refSlide.current.parentElement.offsetWidth;

        // refSlide.current.parentElement.scrollTo({
        //     left: scrollWidth * (slideNum - 1),
        //     behavior: 'smooth',
        // });
        // console.log("-->> TARGET", containerScrollWidth, targetScrollLeft, refSlide.current.parentElement.offsetWidth, targetScrollLeft <= (containerScrollWidth - refSlide.current.offsetWidth));

        function scrollThis(timeStamp) {
            let curScrollPos, easyRatio;

            const transitionDuration = 1250,
                timePassed = Math.round(timeStamp - timeStart);

            // if (timePassed <= duration) {
            if (curElmPos != targetScrollLeft) {
                setSnapClass("snap-none");
                easyRatio = timePassed / transitionDuration;
                // console.log("Time At START", timePassed, duration, timePassed < duration, easyRatio);
                easyRatio = +(easyRatio < 0.5 ? 16 * Math.pow(easyRatio, 5) : 1 + 16 * Math.pow(easyRatio - 1, 5)).toFixed(3);

                if (curElmPos <= targetScrollLeft) {
                    // console.log("FWD");
                    curScrollPos = Math.min(curElmPos + (targetScrollLeft - curElmPos) * easyRatio, targetScrollLeft);
                    if (curScrollPos < targetScrollLeft) {
                        requestAnimationFrame((tS) => scrollThis(tS));
                    } else {
                        console.log("Stop FWD rAF")
                        setSnapClass("snap-x");
                    }
                } else {
                    // console.log("RVS");
                    curScrollPos = Math.max(curElmPos - (curElmPos - targetScrollLeft) * easyRatio, targetScrollLeft);
                    if (curScrollPos > targetScrollLeft) {
                        requestAnimationFrame((tS) => scrollThis(tS));
                    } else {
                        console.log("Stop BWD rAF");
                        setSnapClass("snap-x");
                    }
                }

                refSlide.current.parentElement.scrollLeft = curScrollPos;
                // console.log(easyRatio.toFixed(2), `${timePassed}ms`, (scrollWidth * easyRatio).toFixed(2), curScrollPos);
            } else {
                console.log("Stop scrollThis function");
                setSnapClass("snap-x");
            }
            // console.log(refSlide.current.parentElement.scrollLeft, curElmPos, easyRatio);
        }

        requestAnimationFrame(scrollThis);

        return () => {
            console.log("Return worked", refSlide.current?.parentElement.scrollLeft, slideNum);
        }

    }, [slideNum])

    return (
        <section id="projects" className="flex flex-col justify-start w-full pl-[30px] sm:pl-[80px] " >
            <h2 className="text-[22px] sm:text-[44px] font-semibold mt-[80px] sm:mt-[130px] ">Selected Projects & Work</h2>
            <div className="relative m-0 h-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" onClick={slideNum == 1 ? null : prev} className={`hidden sm:block absolute cursor-pointer top-[calc(50%-100px/2-20px)] left-0 size-[100px] ml-[20px] transition-all duration-500 ${slideNum == 1 ? "opacity-0 invisible" : "opacity-100 visible"}`}>
                    <path strokeLinecap="round" fill="#D9D9D9" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className={`flex flex-row gap-[20px] overflow-hidden ${snapClass} snap-mandatory transition after:none `} onTouchStart={handleScrollOnTouch} onTouchMove={handleScrollOnTouch} onTouchEnd={handleScrollOnTouch}>
                    {projects.map(it => {
                        if (it.ind == slideNum) {
                            return SingleProject({ ...it, slideNum, refSlide })
                        } else {
                            return SingleProject({ ...it, slideNum })
                        }
                    })}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" onClick={slideNum == projects.length ? null : next} className={`hidden sm:block absolute cursor-pointer top-[calc(50%-100px/2-20px)] right-0 size-[100px] mr-[20px] transition-all duration-500 ${slideNum == projects.length ? "opacity-0 invisible" : "opacity-100 visible"} `} >
                    <path strokeLinecap="round" fill="#D9D9D9" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </ section >
    );
};

function SingleProject(props) {
    // const classForScroll = props.slideNum == props.ind ? "-translate-x-[50%] " : null;

    return (
        <div id={props.ind} key={props.ind * 13} ref={props.refSlide} className="snap-always snap-start" >
            {/* translate-x-[${(props.ind - props.slideNum) * 100}%]`}> */}
            <div className="flex flex-row justify-center items-center w-[300px] sm:w-[870px] min-h-[189px] sm:min-h-[550px] bg-mygray mt-[30px] ">
                <button className="flex flex-row justify-center items-center gap-0 sm:gap-3 text-[12px] sm:text-[22px] font-semibold rounded-full outline outline-3 w-[103px] h-[30px] sm:w-[181px] sm:h-[44px] hover:bg-transparent hover:outline-[#14C6B7] focus:outline-[#14C6B7] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="animate-pulse scale-50">
                        <g stroke="#000">
                            <circle cx="12" cy="12" r="5"></circle>
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                strokeDasharray="2.2"
                                strokeWidth="3"
                            ></circle>
                        </g>
                    </svg>
                    {props.button}
                </button>
            </div>
            <div className="flex">
                <p className="text-[22px] sm:text-[28px] font-semibold mt-[30px] cursor-pointer hover:text-[#14C6B7] leading-none">{props.name}</p>
            </div>
        </div>
    )
}