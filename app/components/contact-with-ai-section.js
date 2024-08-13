import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactWithAI(props) {
    return (
        <section className="w-full min-h-[890px] pl-[80px] mt-[160px] mb-[40px] ">
            <div className="flex flex-row justify-between flex-wrap ">
                <div className="basis-1/2 min-w-[340px] shrink grid grid-cols-6 grid-rows-1 gap-x-[20px] mt-[130px]">
                    <div className="col-start-2 col-span-5 ">
                        <h2 className="text-[69px] leading-tight font-semibold mb-6">Want To Know More?</h2>
                        <p className="text-[28px] leading-2 text-balance">Get An Instant Reply In The AI-Powered Messenger.</p>
                    </div>
                </div>
                <div className="basis-1/2 min-w-[340px] shrink grid grid-cols-6 grid-rows-1 gap-x-[20px] mt-[130px]">
                    <div className="col-start-2 col-span-5 h-[550px]">
                        <AiChat />
                    </div>
                </div>
            </div>
        </section >
    );
};