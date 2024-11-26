'use client'
import Image from "next/image";
import LoaderDots from "@/public/loader-dots.svg";
import avatarPicture from "@/public/avatarPicture.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { answersArray, questionsArray } from "./ai-chat-array";

export default function AiChat(props) {

    const [inputValue, setInputValue] = useState("");
    const [hintsMarkup, setHintsMarkup] = useState([]);
    // const [answerNotFound, setAnswerNotFound] = useState(true);
    const [chatMessages, setChatMessages] = useState([{ a: "Please start typing and use AI hint for a question." }]);
    const scrollToMsg = useRef(null);

    let hints = [];
    let definedHints = [];


    useEffect(() => {
        scrollToMsg.current.scrollTop = scrollToMsg.current.scrollHeight;
    }, [inputValue, hintsMarkup, chatMessages]);

    const searchHints = () => {
        const request = inputValue.replaceAll(/\s\s+/g, " ").split(" ");
        setHintsMarkup(hintsMarkup => hintsMarkup >= 4 ? hintsMarkup.splice(0, 4) : []);

        for (let k = 0; k < request.length; k++) {
            // console.log("I'm here and k =", k);
            // console.log("<--Out of loop ", request[k]);
            if (request[k].trim() != "") {
                questionsArray.forEach((qtn, i) => {
                    if (qtn["qa" + (i + 1)].toLowerCase().includes(request[k].toLowerCase())) {
                        hints.length < 4 ? hints.push([qtn["qa" + (i + 1)], "qa" + (i + 1), i.toString()]) : null;
                    }
                });

                // console.log("... out of loop hints: ", hints.length);

                for (let j = k + 1; j < request.length; j++) {
                    if (request.length > j) {
                        definedHints = hints.filter(hint => {
                            request[j] == "" ? request[j] = request[j - 1] : null;
                            // console.log("-->inside loop ", request[j]);
                            // console.log(request);
                            return hint[0].toLowerCase().includes(request[j].toLowerCase());
                        });
                    }
                    hints = [];
                    hints.push(...definedHints);
                }
            }
            hints.length > 0 ? k = request.length + 1 : null;
            // console.log("Current request array is ", request, " hints: ", hints.length);
        }
        const animationsArray = ['animate-fade-in', 'animate-fade-in-50', 'animate-fade-in-100', 'animate-fade-in-150',];

        if (inputValue != "") {
            for (let i = 0; i < hints.length && i < 4; i++) {
                setHintsMarkup((hintsMarkup) => [...hintsMarkup,
                <div key={hints[i][1] + "-" + hints[i][2] + "-" + i.toString()} id={hints[i][1] + "-" + hints[i][2] + "-" + i.toString()} onClick={(e) => sendQuestion(e)} className={"flex justify-start flex-row items-end gap-0.5 px-3 py-1 border border-slate-600 rounded-full hover:bg-slate-200 hover:cursor-pointer " + animationsArray[i]} >
                    <p className="text-pretty text-xs break-words">{hints[i][0]}</p>
                </div >
                ])
            };
        } else {
            setHintsMarkup([]);
            return;
        }
    }

    useEffect(
        () => {
            // Debouncing the request to optimal performance
            const dbTimeoutId = setTimeout(() => {
                searchHints();
            }, 250);
            return () => clearTimeout(dbTimeoutId);
        },
        [inputValue]);

    const sendQuestion = (e) => {
        const hintIndex = e.currentTarget.id.split("-")[2];
        const qaIndex = e.currentTarget.id.split("-")[1];
        const qaId = e.currentTarget.id.split("-")[0];
        setChatMessages((chatMessages) => [...chatMessages, { q: hints[hintIndex][0] }]);
        setChatMessages((chatMessages) => [...chatMessages, { a: answersArray[qaIndex][qaId] }]);
        setInputValue("");
    }

    const handleChange = (e) => {
        e.preventDefault();
        if (hintsMarkup.length > 0) {
            // console.log("I'm here", hintsMarkup[0].props.children.props.children);
            // setChatMessages((chatMessages) => [...chatMessages, { q: hintsMarkup[0].props.children.props.children }]);
            getAnswer(hintsMarkup[0].props.children.props.children);
        } else {
            // console.log("Now here");
            setChatMessages((chatMessages) => [...chatMessages, { q: inputValue }]);
            scrollToMsg.current.scrollTop = scrollToMsg.current.scrollHeight;
            getAnswer(inputValue);
        }
        setInputValue("");
    }

    const getAnswer = (query) => {
        const answer = [];
        answersArray.some((asw, i) => {
            // console.log("Search in answers...");
            if (asw["qa" + (i + 1)].toLowerCase().includes(query.toLowerCase())) {
                if (answer.length === 0) {
                    answer.push(asw["qa" + (i + 1)]);
                    setChatMessages((chatMessages) => [...chatMessages, { q: `Showing answer for: \n"${questionsArray[i]["qa" + (i + 1)]}"` }]);
                    setChatMessages((chatMessages) => [...chatMessages, { a: answersArray[i]["qa" + (i + 1)] }]);
                }
            }
        });
        if (answer.length == 0) {
            // console.log("...search in questions");
            questionsArray.some((asw, i) => {
                if (asw["qa" + (i + 1)].toLowerCase().includes(query.toLowerCase())) {
                    if (answer.length === 0) {
                        answer.push(asw["qa" + (i + 1)]);
                        setChatMessages((chatMessages) => [...chatMessages, { q: `Showing answer for: \n"${questionsArray[i]["qa" + (i + 1)]}"` }]);
                        setChatMessages((chatMessages) => [...chatMessages, { a: answersArray[i]["qa" + (i + 1)] }]);
                    }
                }
            });
        }
        answer.length > 0 ? null : setChatMessages((chatMessages) => [...chatMessages, { a: `Please try again with a different query or send me a message...` }]);
    }

    return (
        <div className="flex flex-col bg-mylightgray h-full rounded-[20px] sm:rounded-[34px] m-0">
            <div id="chat-header" className="flex items-center justify-start min-h-[50px] bg-none border-b-[3px] border-mygray pl-[20px] gap-x-[10px]">
                <Image src={avatarPicture} alt="Chat avatar icon" />
                <p className="font-semibold text-[12px]">Let&apos;s chat</p>
            </div>
            <div id="chat-mid" ref={scrollToMsg} className="flex flex-col overflow-y-auto h-full bg-none px-[20px] py-[30px]">
                {
                    chatMessages.map((it, i) => {
                        if (Object.keys(it)[0] == "q")
                            return (
                                <div key={"lndx" + i * 13} className="flex flex-row justify-end items-end gap-0.5 ml-4 ">
                                    <div className="bg-slate-200 px-2 py-1 text-sm mb-3 rounded-l-md w-11/12 rounded-tr-md">
                                        <p className="text-pretty break-words">{it.q}</p>
                                    </div>
                                    <div className="flex items-center justify-center min-w-3 min-h-3 mb-3 bg-slate-200 rounded-r-md rounded-tl-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-2 h-2 stroke-slate-700">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                </div>
                            );
                        else if (Object.keys(it)[0] == "a")
                            return (
                                <div key={"mndx" + i * 17} className="flex justify-start flex-row items-end gap-0.5 mr-4">
                                    <Image width={0} height={0} src="/favicon.ico" alt="" className="w-3 h-3 mb-3 rounded-l-md rounded-tr-md bg-slate-200" />
                                    <div className="bg-slate-700 px-2 py-1 mr-4 text-sm mb-3 rounded-r-md w-11/12 rounded-tl-md">
                                        <p className="text-pretty text-white break-words">{it.a}</p>
                                    </div>
                                </div>
                            );
                    })
                }
            </div>
            {
                // Hints rendering
                <div id="chat-tips" className={"grid bg-slate-300 px-2 transition-all duration-300 ease-in-out " + (inputValue.trim() == "" ? "grid-rows-animate-height-closed" : "grid-rows-animate-height-open py-2")}>
                    <div id="tips-header" className="flex flex-col items-start justify-start gap-1  bg-slate-300 mx-2 overflow-hidden">
                        <p className="text-xs mb-1">Popular related questions:</p>
                        {hintsMarkup.length == 0 && inputValue != "" ? <div className="w-10"><Image src={LoaderDots} alt="Loader icon" /></div> : hintsMarkup.map(it => it)}
                    </div>
                </div>
            }
            <div id="chat-send" className="flex min-h-12 bg-none">
                <form className="flex items-center justify-between w-full" action="submit" onSubmit={(e) => handleChange(e)} >
                    <input
                        id="inputMessage"
                        className="bg-mygray grow border-none rounded-full py-1 px-2 placeholder-myblack placeholder-opacity-60 ml-[20px] mb-[20px] pl-4 text-[12px] min-h-9 focus:outline-none"
                        type="text"
                        placeholder="Ask your question here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="w-9 h-9 rounded-full mx-[20px] mb-[20px] bg-my-grad-acc text-center disabled:opacity-65 enabled:-rotate-90 transition-all duration-200 ease-in-out" disabled={inputValue.trim() == "" ? true : false}>
                        <svg className="m-auto" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.85355 4.35355C5.04882 4.15829 5.04882 3.84171 4.85355 3.64645L1.67157 0.464469C1.47631 0.269207 1.15972 0.269208 0.964461 0.46447C0.7692 0.659733 0.7692 0.976315 0.964462 1.17158L3.79289 4L0.96447 6.82843C0.769208 7.02369 0.769208 7.34028 0.964471 7.53554C1.15973 7.7308 1.47632 7.7308 1.67158 7.53554L4.85355 4.35355ZM4 4.5L4.5 4.5L4.5 3.5L4 3.5L4 4.5Z" fill="white" />
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-auto stroke-slate-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                        </svg> */}
                    </button>
                </form>
            </div>
        </div >
    )
}