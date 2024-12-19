'use client'
import Image from "next/image";
import LoaderDots from "@/public/loader-dots.svg";
import avatarPicture from "@/public/avatarPicture.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { answersArray, questionsArray } from "./ai-chat-array";

export default function AiChat(props) {

    const [inputValue, setInputValue] = useState("");
    const [hintlgarkup, setHintlgarkup] = useState([]);
    // const [answerNotFound, setAnswerNotFound] = useState(true);
    const [chatMessages, setChatMessages] = useState([{ a: "Please start typing and use AI hint for a question." }]);
    const scrollToMsg = useRef(null);

    let hints = [];
    let definedHints = [];


    useEffect(() => {
        scrollToMsg.current.scrollTop = scrollToMsg.current.scrollHeight;
    }, [inputValue, hintlgarkup, chatMessages]);

    const searchHints = () => {
        const request = inputValue.replaceAll(/\s\s+/g, " ").split(" ");
        setHintlgarkup(hintlgarkup => hintlgarkup >= 4 ? hintlgarkup.splice(0, 4) : []);

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
                setHintlgarkup((hintlgarkup) => [...hintlgarkup,
                <div key={hints[i][1] + "-" + hints[i][2] + "-" + i.toString()} id={hints[i][1] + "-" + hints[i][2] + "-" + i.toString()} onClick={(e) => sendQuestion(e)} className={"flex justify-start flex-row items-end gap-0.5 px-3 py-1 border border-slate-600 rounded-full hover:bg-slate-200 hover:cursor-pointer " + animationsArray[i]} >
                    <p className="text-pretty text-xs break-words">{hints[i][0]}</p>
                </div >
                ])
            };
        } else {
            setHintlgarkup([]);
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
        if (hintlgarkup.length > 0) {
            // console.log("I'm here", hintlgarkup[0].props.children.props.children);
            // setChatMessages((chatMessages) => [...chatMessages, { q: hintlgarkup[0].props.children.props.children }]);
            getAnswer(hintlgarkup[0].props.children.props.children);
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
        <div id="AI-chat" className="flex flex-col bg-mylightgray h-full rounded-[20px] lg:rounded-[34px] max-w-[574px] lg:shadow-[2px_2px_8px_#E9EAE9]">
            <div id="chat-header" className="flex items-center justify-start min-h-[51px] lg:min-h-[120px] bg-none border-b-[3px] border-mygray pl-[20px] pt-[2px] gap-x-[10px] lg:gap-x-[20px]">
                <div className="relative h-full w-full max-w-[30px] max-h-[30px] lg:max-w-[50px] lg:max-h-[50px]">
                    <Image className="absolute top-0 left-0 z-0 h-full w-full" src={avatarPicture} alt="Chat avatar icon" />
                    <div className="absolute top-0 right-0 h-[10px] w-[10px] lg:size-[15px] bg-mychatonline rounded-full z-10" />
                </div>
                <p className="font-semibold text-[12px] lg:text-[28px] tracking-tight">
                    Let&apos;s chat
                </p>
            </div>
            <div id="chat-mid" ref={scrollToMsg} className="flex flex-col gap-y-[15px] overflow-y-auto h-full text-[12px] lg:text-[18px] font-normal lg:font-medium bg-none px-[20px] pt-[30px]">
                {
                    chatMessages.map((it, i) => {
                        if (Object.keys(it)[0] == "q")
                            return (
                                <div key={"lndx" + i * 13} className="flex flex-row justify-end items-end ">
                                    <div className="bg-mychatqst rounded-l-[8px] w-10/12 rounded-tr-[8px]">
                                        <p className="text-pretty p-[15px] break-words leading-tight">{it.q}</p>
                                    </div>
                                </div>
                            );
                        else if (Object.keys(it)[0] == "a")
                            return (
                                <div key={"mndx" + i * 17} className="flex justify-start flex-row items-end ">
                                    <div className="bg-mychatasw rounded-r-[8px] w-10/12 rounded-tl-[8px]">
                                        <p className="text-pretty p-[15px] text-myblack break-words leading-tight">{it.a}</p>
                                    </div>
                                </div>
                            );
                    })
                }
            </div>
            {
                // Hints rendering
                <div id="chat-tips" className={"grid mb-[15px] bg-mylightgray px-[20px] transition-all duration-300 ease-in-out " + (inputValue.trim() == "" ? "grid-rows-animate-height-closed" : "grid-rows-animate-height-open py-[5px] ")}>
                    <div id="tips-header" className="flex flex-col items-start justify-start gap-1 overflow-hidden">
                        <p className="text-[12px] mb-[5px]">
                            Popular related questions:
                        </p>
                        {
                            hintlgarkup.length == 0 && inputValue != "" ?
                                <div className="w-10">
                                    <Image src={LoaderDots} alt="Loader icon" />
                                </div>
                                : hintlgarkup.map(it => it)
                        }
                    </div>
                </div>
            }
            <div id="chat-send" className="flex min-h-[70px] bg-mylightgray rounded-b-[20px] lg:rounded-b-[30px]">
                <form className="flex items-end justify-between w-full " action="submit" onSubmit={(e) => handleChange(e)} >
                    <div className="flex flex-row items-center justify-between bg-mygray grow mx-[20px] mb-[20px] rounded-full" >
                        <input
                            id="inputMessage"
                            className="bg-transparent grow pl-[15px] lg:pl-[20px] text-[16px] lg:text-[18px]
                            placeholder-myblack
                            placeholder-opacity-60
                            placeholder:text-[12px]
                            placeholder:lg:text-[18px]
                            focus:outline-none"
                            type="text"
                            placeholder="Ask your question here..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] m-[5px] rounded-full bg-my-grad-acc text-center disabled:opacity-65 enabled:-rotate-90 transition-all duration-200 ease-in-out" disabled={inputValue.trim() == "" ? true : false}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-[12px] lg:h-[15px] " width="9" height="15" viewBox="0 0 9 15" fill="none"><path fill="#fff" fillRule="evenodd" d="M1.739.298 8.22 6.78a1.018 1.018 0 0 1 0 1.44L1.74 14.702a1.019 1.019 0 0 1-1.44-1.44L6.058 7.5.3 1.739a1.018 1.018 0 1 1 1.44-1.44Z" clipRule="evenodd" /></svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-auto stroke-slate-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                            </svg> */}
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}