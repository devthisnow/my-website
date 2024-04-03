'use client'
import { useState, useRef, useEffect } from "react";
import { answersArray, questionsArray } from "./ai-chat-array";

// const msgs = [{ q: "First proident consectetur eiusmod eu amet id enim culpa dolor eiusmod pariatur" }, { q: "Second laboris amet cillum fugiat" }, { a: "Veniam velit qui ad laborum" }, { q: "Last message pariatur esse aliquip exercitation quis incididunt ad amet aliquip ad duis est anim" }, { q: "Latest one deserunt est commodo laboris Lorem pariatur dolor culpa anim aute ea." }];
const msgs = [];

export default function AiChat(props) {

    const [inputValue, setInputValue] = useState("");
    const [hintsMarkup, setHintsMarkup] = useState([]);
    const [chatMessages, setChatMessages] = useState([{ a: "Please start typing and use AI hint for a question." }]);
    const scrollToMsg = useRef(null);

    let hints = [];
    let cpxHints = [];

    useEffect(() => {
        scrollToMsg.current.scrollTop = scrollToMsg.current.scrollHeight;
    }, [inputValue]);

    const searchHints = () => {
        setHintsMarkup([]);
        const request = inputValue.replaceAll(/\s\s+/g, " ").split(" ");
        // console.log(request.length);

        if (inputValue.trim() != "") {
            questionsArray.forEach((qtn, i) => {
                if (qtn["qa" + (i + 1)].toLowerCase().includes(request[0].toLowerCase())) {
                    hints.push([qtn["qa" + (i + 1)], "qa" + (i + 1), i.toString()]);
                }
            });

            // console.log(hints.length);
            if (request.length > 1) {
                cpxHints = hints.filter((hint, ind) => {
                    // console.log(hint[0]);
                    return hint[0].toLowerCase().includes(request[1].toLowerCase());
                    // return true
                });
                hints = [];
                hints.push(...cpxHints);
                // console.log(cpxHints, request, hints);
            }
        }


        if (inputValue != "") {
            for (let i = 0; i < hints.length && i < 4; i++) {
                setHintsMarkup((hintsMarkup) => [...hintsMarkup,
                <div key={"kndx" + i} id={hints[i][1] + "-" + hints[i][2] + "-" + i.toString()} onClick={(e) => sendQuestion(e)} className="flex justify-start flex-row items-end gap-0.5 px-3 py-1 border border-slate-600 rounded-full hover:bg-slate-200 hover:cursor-pointer" >
                    <p className="text-pretty text-xs break-words">{hints[i][0]}</p>
                </div >
                ])
            };
        } else {
            setHintsMarkup([]);
            return;
        }
        // console.log(hintsMarkup, hints, answerKey);
    }

    useEffect(() => {
        searchHints();
    }, [inputValue]);

    const sendQuestion = (e) => {
        const hintIndex = e.currentTarget.id.split("-")[2];
        const qaIndex = e.currentTarget.id.split("-")[1];
        const qaId = e.currentTarget.id.split("-")[0];
        // console.log("ID: ", qaId, ", index: ", qaIndex);
        setChatMessages((chatMessages) => [...chatMessages, { q: hints[hintIndex][0] }]);
        setChatMessages((chatMessages) => [...chatMessages, { a: answersArray[qaIndex][qaId] }]);
        // console.log(hints[hintIndex][0], answersArray[qaIndex][qaId]);
        // console.log(chatMessages);
        setInputValue("");
    }

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        setChatMessages((chatMessages) => [...chatMessages, { q: inputValue }]);
        scrollToMsg.current.scrollTop = scrollToMsg.current.scrollHeight;
        // console.log(inputValue, chatMessages, scrollToMsg);
        getAnswer();
        setInputValue("");
    }

    const getAnswer = () => {
        const answer = [];
        const request = inputValue.replaceAll(/\s\s+/g, " ").split(" ");
        // console.log(request);
        answersArray.some((asw, i) => {
            if (asw["qa" + (i + 1)].toLowerCase().includes(inputValue.toLowerCase())) {
                answer.push(asw["qa" + (i + 1)]);
                setChatMessages((chatMessages) => [...chatMessages, { q: `Showing answer for: \ n"${questionsArray[i]["qa" + (i + 1)]}"` }]);
                setChatMessages((chatMessages) => [...chatMessages, { a: answersArray[i]["qa" + (i + 1)] }]);
                return;
            }
        });
        if (answer.length == 0) {
            questionsArray.some((asw, i) => {
                if (asw["qa" + (i + 1)].toLowerCase().includes(inputValue.toLowerCase())) {
                    answer.push(asw["qa" + (i + 1)]);
                    setChatMessages((chatMessages) => [...chatMessages, { q: `Showing answer for: \n"${questionsArray[i]["qa" + (i + 1)]}"` }]);
                    setChatMessages((chatMessages) => [...chatMessages, { a: answersArray[i]["qa" + (i + 1)] }]);
                    return;
                }
            });
        }
        // console.log(answer);
        answer.length > 0 ? null : setChatMessages((chatMessages) => [...chatMessages, { a: "I'm sorry, I need to take a minute to find an answer for you..." }]);
        // console.log(answers[0]);
        // return answers;
    }

    return (
        <div className="flex flex-col border-2 border-slate-300 h-full rounded-lg m-0 shadow-md">
            <section id="chat-header" className="flex items-center justify-center min-h-10 bg-slate-300">
                <p className="text-sm">AI Messenger</p>
            </section>
            <div id="chat-mid" ref={scrollToMsg} className="flex flex-col overflow-y-auto h-full bg-white p-2">
                {
                    chatMessages.map((it, i) => {
                        if (Object.keys(it)[0] == "q")
                            return (
                                <div className="flex flex-row justify-end items-end gap-0.5 ml-4 ">
                                    <div key={"kndx" + i * 13} className="bg-slate-200 px-2 py-1 text-sm mb-3 rounded-l-md w-11/12 rounded-tr-md">
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
                                <div key={"kndx" + i * 17} className="flex justify-start flex-row items-end gap-0.5 mr-4">
                                    <img src="../favicon.ico" alt="" className="w-3 h-3 mb-3 rounded-l-md rounded-tr-md bg-slate-200" />
                                    <div className="bg-slate-700 px-2 py-1 mr-4 text-sm mb-3 rounded-r-md w-11/12 rounded-tl-md">
                                        <p className="text-pretty text-white break-words">{it.a}</p>
                                    </div>
                                </div>
                            );
                    })
                }
            </div>
            {inputValue.trim() != "" &&
                <div id="chat-tips" className={"flex flex-col bg-slate-300 p-2 transition-height duration-1000 ease-in-out"}>
                    <section id="chat-header" className="flex flex-col items-start justify-start gap-1 bg-slate-300 mx-2">
                        <p className="text-xs mb-1">Popular related questions:</p>
                        {/* <QuickHints mrup={hintsMarkup} /> */}
                        {hintsMarkup.map(it => it)}
                    </section>
                </div>
            }
            <div id="chat-send" className="flex min-h-12 bg-slate-300">
                <form className="flex items-center justify-between w-full" action="submit" onSubmit={(e) => handleChange(e)} >
                    <input
                        id="inputMessage"
                        className="bg-white grow border-none rounded-full py-1 px-2 placeholder-slate-400 ml-2 pl-4 text-xs min-h-9 focus:outline-none"
                        type="text"
                        placeholder="Put your text here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="w-9 h-9 rounded-full mx-2 bg-slate-100 text-center disabled:opacity-65 disabled:rotate-90 transition-all" disabled={inputValue.trim() == "" ? true : false}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-auto stroke-slate-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div >
    )
}