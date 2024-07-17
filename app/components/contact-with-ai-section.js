import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactWithAI(props) {
    return (
        <section className="w-full min-h-[890px] max-h-[890px] pl-[80px] mt-[160px]">
            <div className="grid grid-cols-12 grid-rows-1 gap-x-[20px] mt-[130px]">
                <div className="col-start-2 col-span-5 min-w-1/2">
                    <h2 className="text-[69px] leading-tight font-semibold mb-6">Want To Know More?</h2>
                    <p className="text-[28px] leading-2 text-balance">Get An Instant Reply In The AI-Powered Messenger.</p>
                </div>
                <div className="col-start-8 col-span-4 min-w-72 w-full h-[550px]">
                    <AiChat />
                </div>
            </div>
        </section>
    );
};