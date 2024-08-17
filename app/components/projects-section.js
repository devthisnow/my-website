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
    const refSlide = useRef(null);

    const next = () => {
        setSlideNum(
            slideNum + 1 <= projects.length ? slideNum + 1 : 1
        )
    }

    const prev = () => {
        setSlideNum(
            slideNum - 1 > 0 ? slideNum - 1 : projects.length
        )
    }

    useEffect(() => {
        const scrollWidth = refSlide.current.scrollWidth + 20;

        refSlide.current.parentElement.scrollTo({
            left: scrollWidth * (slideNum - 1),
            behavior: 'smooth',
        });

        // console.log(refSlide.current.parentElement.scrollLeft, slideNum);

        // return () => {
        //     console.log("Return worked", refSlide.current.parentElement.scrollLeft, slideNum);
        // }

    }, [slideNum])

    return (
        <section className="flex flex-col justify-start w-full min-h-[890px] max-h-[890px] pl-[80px] " >
            <h2 className="text-[44px] font-semibold mt-[130px] ">Selected Projects & Work</h2>
            <div className="relative m-0 h-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" onClick={prev} className={`absolute cursor-pointer top-[calc(50%-100px/2-20px)] left-0 size-[100px] ml-[20px] transition-all duration-500 ${slideNum == 1 ? "opacity-0 invisible" : "opacity-90 visible"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className="flex flex-row gap-[20px] overflow-hidden snap-x snap-mandatory transition ">
                    {projects.map(it => {
                        if (it.ind == slideNum) {
                            return SingleProject({ ...it, slideNum, refSlide })
                        } else {
                            return SingleProject({ ...it, slideNum })
                        }
                    })}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" onClick={next} className={`absolute cursor-pointer top-[calc(50%-100px/2-20px)] right-0 size-[100px] mr-[20px] transition-all duration-500 ${slideNum == projects.length ? "opacity-0 invisible" : "opacity-90 visible"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
            <div className="flex flex-row justify-center items-center w-[870px] min-h-[550px] bg-mygray mt-[30px] ">
                <button className="flex flex-row justify-center items-center gap-3 text-[22px] font-semibold rounded-full outline outline-3 w-[181px] h-[44px] hover:bg-transparent hover:outline-[#14C6B7] focus:outline-[#14C6B7] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="animate-pulse">
                        <g stroke="#000">
                            <circle cx="12" cy="12" r="5"></circle>
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                strokeDasharray="2,2"
                                strokeWidth="3"
                            ></circle>
                        </g>
                    </svg>
                    {props.button}
                </button>
            </div>
            <div className="flex">
                <p className="text-[28px] font-semibold mt-[30px] cursor-pointer hover:text-[#14C6B7] ">{props.name}</p>
            </div>
        </div>
    )
}