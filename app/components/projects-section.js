"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import estifyPicture from "../../public/portfolio/estify_desktop.jpg"
import gocrispPicture from "../../public/portfolio/gocrisp_mobile.jpg"
import numeratorPicture from "../../public/portfolio/numerator_desktop.jpg"
import mbatradingPicture from "../../public/portfolio/mbatrading_mobile.jpg"
import honkfrohelpPicture from "../../public/portfolio/honkfrohelp_desktop.jpg"
import partstraderPicture from "../../public/portfolio/partstrader_mobile.jpg"

// console.log(estifyPicture);

export default function Projects(props) {
    const projects = [{
        ind: 1,
        name: "Estify",
        button: "More info",
        image: estifyPicture,
        link: "/"
    },
    {
        ind: 2,
        name: "Crisp",
        button: "More info",
        image: gocrispPicture,
        link: "/"
    },
    {
        ind: 3,
        name: "Numerator",
        button: "More info",
        image: numeratorPicture,
        link: "/"
    },
    {
        ind: 4,
        name: "MBA Trading",
        button: "More info",
        image: mbatradingPicture,
        link: "/"
    },
    {
        ind: 5,
        name: "HONK",
        button: "More info",
        image: honkfrohelpPicture,
        link: "/"
    },
    {
        ind: 6,
        name: "PartsTrader",
        button: "More info",
        image: partstraderPicture,
        link: "/"
    },
    ];

    const [slideNum, setSlideNum] = useState(1);
    const [opacityElm, setOpacityElm] = useState("opacity-100");
    const [needRedraw, setNeedRedraw] = useState(false);
    const [snapClass, setSnapClass] = useState("snap-x");
    const refSlide = useRef(null);
    const refScrollContainer = useRef(null);
    let startTouchPos = useRef(0);

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

    // const handleScrollOnPointerNew = (e) => {
    //     e.preventDefault();

    //     if (e.pointerType == "touch") {
    //         const currentSlide = refSlide.current;
    //         console.log("At START ", needRedraw, currentSlide.id);

    //         if (e.type == "pointerdown") {
    //             // needRedraw != false ? (setNeedRedraw(false), console.log("No need | pointerdown")) : null;
    //             console.log("from state", needRedraw);
    //             setOpacityElm("opacity-85");
    //             changeSlideNum();
    //         }

    //         if (e.type == "pointermove") {
    //             // needRedraw != false ? (setNeedRedraw(false), console.log("Not needed")) : null;
    //             console.log("-- onPointerMove", refScrollContainer.current.scrollLeft);
    //             // changeSlideNum();
    //         }

    //         if (e.type == "pointerup") {
    //             needRedraw != false ? (setNeedRedraw(false), console.log("Not sure | pointerup")) : null;
    //             setOpacityElm("opacity-100");
    //             changeSlideNum();
    //         }

    //         if (e.type == "pointercancel") {
    //             needRedraw != true ? (setNeedRedraw(true), console.log("!!!!! ---->> Need REDRAW | pointercancel")) : null;
    //             setOpacityElm("opacity-100");
    //             changeSlideNum();
    //         }
    //     }
    // }

    const handleScrollOnPointer = (e) => {
        e.preventDefault();
        const thresholdToSwitchSlide = 1 / 4;

        if (e.pointerType == "touch") {
            const scrollContainer = refScrollContainer.current;
            const currentSlide = refSlide.current;
            let currentContOffset = ((slideNum - 1) * (currentSlide.scrollWidth + 20));

            scrollContainer.setPointerCapture(e.pointerId);

            if (currentContOffset > (scrollContainer.scrollWidth - scrollContainer.offsetWidth)) {
                currentContOffset = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
            }

            // console.log("|| -- >> currentOffset", currentContOffset, "desiredOffset", (slideNum - 1) * (currentSlide.scrollWidth + 20));

            e.type == "pointerdown" ? startTouchPos.current = e.clientX : null;
            if (e.type == "pointerdown") {
                setSnapClass("snap-none");
                startTouchPos.current = e.clientX;
                // console.log("from state", startTouchPos.current, e.clientX);
                setOpacityElm("opacity-85");
                // setNeedRedraw(true);
            }

            if (e.type == "pointermove") {
                setSnapClass("snap-none");
                // console.log("start - clientX ", (startTouchPos.current - e.clientX));
                if (((currentContOffset + (startTouchPos.current - e.clientX)) >= 0) && (currentContOffset + (startTouchPos.current - e.clientX)) <= (scrollContainer.scrollWidth - scrollContainer.offsetWidth)) {
                    scrollContainer.scrollLeft = currentContOffset + (startTouchPos.current - e.clientX);
                    // console.log("TOUCH ACTION: IN RANGE", scrollContainer.scrollLeft);
                } else {
                    // scrollContainer.scrollLeft = currentContOffset;
                    // console.log("______________________TOUCH ACTION: OUT OF RANGE", currentContOffset + (startTouchPos.current - e.clientX));
                    (slideNum == 1 || slideNum == projects.length) && (startTouchPos.current = e.clientX);

                }
            }
            if (e.type == "pointerup" || e.type == "pointercancel") {
                setOpacityElm("opacity-100");
                // console.log("AFTER scrollLeft of cont", scrollContainer.scrollLeft, currentSlide.style.width);
                // console.log("--> slide width ", currentSlide.scrollWidth);
                console.log("Expected slideNUM ", Math.round((scrollContainer.scrollLeft) / currentSlide.scrollWidth) + 1, scrollContainer.scrollLeft, currentSlide.scrollWidth);
                if ((startTouchPos.current - e.clientX) > (currentSlide.scrollWidth * thresholdToSwitchSlide)) {
                    console.log("__T__H__R__E__SH NEXT");
                    // setSlideNum(Math.round((scrollContainer.scrollLeft) / currentSlide.scrollWidth) + 1);
                    next();
                } else if ((e.clientX - startTouchPos.current) > (currentSlide.scrollWidth * thresholdToSwitchSlide)) {
                    console.log("__T__H__R__E__SH PREV");
                    // setSlideNum(Math.round((scrollContainer.scrollLeft) / currentSlide.scrollWidth) + 1);
                    prev();
                }
                setNeedRedraw(true);
            }
        }
    }

    useEffect(() => {
        //Actual scroll width should be increased by flex gap in 20px
        const scrollWidth = refSlide.current ? refSlide.current.scrollWidth + 20 : 0,
            containerScrollWidth = refScrollContainer.current.scrollWidth,
            timeStart = document.timeline.currentTime,
            curElmPos = refScrollContainer.current.scrollLeft;

        let targetScrollLeft = (scrollWidth * (slideNum - 1)) > (containerScrollWidth - scrollWidth) ? containerScrollWidth : scrollWidth * (slideNum - 1);

        targetScrollLeft = targetScrollLeft <= (containerScrollWidth - refSlide.current.scrollWidth) ? targetScrollLeft : containerScrollWidth - refSlide.current.scrollWidth;

        // console.log("||-->> From useEffect | scrollLeft - slideNum - targetScrollLeft |", curElmPos, slideNum, targetScrollLeft);

        console.log("|-> RAF duration ratio ", Math.max(Math.min(Math.abs(targetScrollLeft - curElmPos) / (scrollWidth / 2), 1), 0.3));

        function scrollThis(timeStamp) {
            let curScrollPos, easyRatio;

            const transitionDuration = 650 * Math.max(Math.min(Math.abs(targetScrollLeft - curElmPos) / (scrollWidth / 2), 1), 0.3),
                timePassed = Math.round(timeStamp - timeStart);

            // if (timePassed <= duration) {
            if (curElmPos != targetScrollLeft) {
                setSnapClass("snap-none");
                easyRatio = timePassed / transitionDuration;
                // console.log("Time At START", timePassed, duration, timePassed < duration, easyRatio);
                // easyRatio = +(easyRatio < 0.5 ? 12 * Math.pow(easyRatio, 5) : 1 + 12 * Math.pow(easyRatio - 1, 5)).toFixed(3);
                easyRatio = 1 - Math.pow(1 - easyRatio, 5);

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

                refScrollContainer.current.scrollLeft = curScrollPos;
                // console.log(easyRatio.toFixed(2), `${timePassed}ms`, (scrollWidth * easyRatio).toFixed(2), curScrollPos);
            } else {
                console.log("Stop scrollThis function");
                setSnapClass("snap-x");
            }
            // console.log(refSlide.current.parentElement.scrollLeft, curElmPos, easyRatio);
        }

        setNeedRedraw(false);

        if (targetScrollLeft != refScrollContainer.current.scrollLeft) {
            requestAnimationFrame(scrollThis);
        } else {
            console.log("NO SCROLL FIRED");
        }

        return () => {
            console.log("Return worked", refSlide.current?.parentElement.scrollLeft, slideNum);
        }

    }, [slideNum, needRedraw])

    return (
        <section id="projects" className="flex flex-col justify-start w-full pl-[30px] sm:pl-[50px] lg:pl-[80px] overflow-hidden " >
            <h2 className="text-[22px] lg:text-[44px] font-semibold mt-[80px] lg:mt-[130px] ">Selected Projects & Work</h2>
            <div className="relative h-fit ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={80} height={80} viewBox="0 0 80 80" onClick={slideNum == 1 ? null : prev} className={`block [@media(pointer:coarse)]:hidden backdrop-blur-[4px] rounded-full absolute z-10 rotate-180 cursor-pointer top-[calc(50%-100px/2+10px)] md:top-[calc(50%-100px/2-2px)] left-0 size-[60px] md:size-[80px] ml-[20px] transition-all duration-500 ${slideNum == 1 ? "opacity-0 invisible" : "opacity-100 visible"}`}>
                    <circle cx={40} cy={40} r={40} fill="white" fillOpacity="0.3" />
                    <path d="M55.7071 40.7071C56.0976 40.3166 56.0976 39.6834 55.7071 39.2929L49.3431 32.9289C48.9526 32.5384 48.3195 32.5384 47.9289 32.9289C47.5384 33.3195 47.5384 33.9526 47.9289 34.3431L53.5858 40L47.9289 45.6569C47.5384 46.0474 47.5384 46.6805 47.9289 47.0711C48.3195 47.4616 48.9526 47.4616 49.3431 47.0711L55.7071 40.7071ZM25 41L55 41L55 39L25 39L25 41Z" fill="black" />
                </svg>
                <div ref={refScrollContainer} tabIndex={0} id="DOMScrollContainer" className={`flex flex-row gap-[20px] overflow-x-clip overflow-y-hidden [scrollbar-width:none] scroll-py-[20px] snap-always ${snapClass} snap-mandatory transition touch-none `}
                    // after:min-w-[300px] sm:after:min-w-[440px] lg:after:min-w-[870px]
                    onPointerDown={handleScrollOnPointer}
                    onPointerMove={handleScrollOnPointer}
                    onPointerUp={handleScrollOnPointer}
                    onPointerCancel={handleScrollOnPointer}
                >
                    {projects.map(it => {
                        if (it.ind == slideNum) {
                            return SingleProject({ ...it, slideNum, refSlide, opacityElm })
                        } else {
                            return SingleProject({ ...it, slideNum, opacityElm })
                        }
                    })}
                </div>
                <svg onClick={slideNum == projects.length ? null : next} className={`block [@media(pointer:coarse)]:hidden backdrop-blur-[4px] rounded-full absolute z-10 cursor-pointer top-[calc(50%-100px/2+10px)] md:top-[calc(50%-100px/2-2px)] right-0 size-[60px] md:size-[80px] mr-[20px] transition-all duration-500 ${slideNum == projects.length ? "opacity-0 invisible" : "opacity-100 visible"} `} width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={40} cy={40} r={40} transform="rotate(-90 40 40)" fill="white" fillOpacity="0.3" />
                    <path d="M55.7071 40.7071C56.0976 40.3166 56.0976 39.6834 55.7071 39.2929L49.3431 32.9289C48.9526 32.5384 48.3195 32.5384 47.9289 32.9289C47.5384 33.3195 47.5384 33.9526 47.9289 34.3431L53.5858 40L47.9289 45.6569C47.5384 46.0474 47.5384 46.6805 47.9289 47.0711C48.3195 47.4616 48.9526 47.4616 49.3431 47.0711L55.7071 40.7071ZM25 41L55 41L55 39L25 39L25 41Z" fill="black" />
                </svg>
            </div>
        </ section >
    );
};

function SingleProject(props) {

    return (
        <div id={`Item-${props.ind}`} key={props.ind * 13} ref={props.refSlide} className={`snap-start ${props.ind == props.slideNum ? props.opacityElm : "opacity-100"} `} >
            <div className={`relative flex flex-row justify-center items-center w-[300px] sm:w-[440px] lg:w-[870px] sm:min-h-[340px] lg:min-h-[550px] min-h-[189px]  mt-[30px] bg-cover `} >
                <Image
                    className="object-cover hover:opacity-50 bg-myblue"
                    src={props.image}
                    alt={`${props.name} portfolio example case`}
                    quality={60}
                    placeholder="blur"
                    width={872}
                    height={654}
                />
                <button className="peer absolute z-[2] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-row justify-center items-center gap-[5px] lg:gap-[15px] text-white text-[12px] lg:text-[22px] font-semibold rounded-full bg-myblue/80 w-[103px] h-[30px] lg:w-[181px] lg:h-[50px] hover:bg-myblue/100 active:bg-myblue/100 hover:outline-[#14C6B7] focus:outline-[#14C6B7] "
                    onClick={() => window.location.assign(`/portfolio/${props.name.replace(" ", "_").toLowerCase()}`)}
                >
                    <svg className="size-[10px] lg:size-[22px] " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" className="stroke-white stroke-[2px] lg:stroke-[3px]" strokeDasharray="2 2" strokeWidth="" /><circle cx="12" cy="12" r="5" className="fill-white" /></svg>
                    {props.button}
                </button>
                <div className="absolute z-[1] top-0 left-0 size-full hover:bg-my-grad-acc focus:bg-my-grad-acc hover:opacity-30 peer-hover:bg-my-grad-acc peer-hover:opacity-30" />
            </div>
            <div className="flex">
                <Link href={`/portfolio/${props.name.replace(" ", "_").toLowerCase()}`}>
                    <p className="min-h-[21px] lg:min-h-[32px] text-[18px] lg:text-[28px] font-semibold mt-[20px] cursor-pointer hover:text-[#14C6B7] leading-none">{props.name}</p>
                </Link>
            </div>
        </div >
    )
}