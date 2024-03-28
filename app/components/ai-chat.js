'use client'
import { useState, useRef, useEffect } from "react";

const msgs = ["First proident consectetur eiusmod eu amet id enim culpa dolor eiusmod pariatur", "Second laboris amet cillum fugiat", "Veniam velit qui ad laborum", "Last message pariatur esse aliquip exercitation quis incididunt ad amet aliquip ad duis est anim", "Latest one deserunt est commodo laboris Lorem pariatur dolor culpa anim aute ea."];

export default function AiChat(props) {
    const [inputValue, setInputValue] = useState("");
    const scrollToMsg = useRef(null);
    // const msgs = [];
    useEffect(() => {
        // console.log("useEffect worked now");
        scrollToMsg.current.scrollTop = scrollToMsg.current.scrollHeight;
    }, [inputValue]);

    const handleChange = () => {
        // const msg = (
        //     <div>
        //         <p>{inputValue}</p>
        //     </div>
        // );

        msgs.push(inputValue);
        scrollToMsg.current.scrollTop = scrollToMsg.current.scrollHeight;

        // document.getElementById("chat-mid").append(msg);
        // console.log(inputValue, msgs, scrollToMsg);
        setInputValue("");
        // return (
        //     <div>
        //         <br />
        //         <p>{inputValue}</p>
        //     </div>
        // )
    }

    return (
        <div className="flex flex-col border-2 border-slate-300 h-full rounded-lg m-0">
            <section id="chat-header" className="flex items-center justify-center min-h-10 bg-slate-300">
                <p className="text-sm">AI Messenger</p>
            </section>
            <div id="chat-mid" ref={scrollToMsg} className="flex flex-col overflow-y-auto h-full bg-white p-3">
                <Messages />
            </div>
            <div id="chat-send" className="flex min-h-12 bg-slate-300">
                <form className="flex items-center justify-between w-full" action="submit">
                    <input
                        id="inputMessage"
                        className="bg-white grow border-none rounded-full py-1 px-2 placeholder-slate-400 ml-2 pl-4 text-xs min-h-9 focus:outline-none"
                        type="text"
                        placeholder="Put your text here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="w-9 h-9 rounded-full mx-2 bg-slate-100 text-center disabled:opacity-65" onClick={() => handleChange()} disabled={inputValue.trim() == "" ? true : false}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 m-auto stroke-slate-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div >
    )
}

const Messages = () => {

    return msgs.map((it, i) => {
        return (
            <div key={i} className="bg-slate-200 px-2 py-1 ml-3 text-sm mb-2 rounded-l-md w-auto rounded-tr-md">
                <p className="text-pretty break-words">{it}</p>
            </div>
        )
    })
}