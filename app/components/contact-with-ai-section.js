import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactWithAI(props) {
    return (
        <section className="w-full sm:min-h-[890px] px-[30px] sm:pl-[80px] mt-[80px] sm:mt-[160px] mb-[80px] sm:mb-[40px] ">
            <div className="flex flex-col sm:flex-row justify-between sm:flex-wrap ">
                <div className="basis-1/2 min-w-[340px] shrink sm:grid grid-cols-6 grid-rows-1 sm:gap-x-[20px] mt-[130px]">
                    <div className="col-start-2 col-span-5 ">
                        <h2 className="text-[44px] sm:text-[69px] leading-tight font-semibold mb-6">Want To Know More?</h2>
                        <p className="text-[18px] sm:text-[28px] leading-2 text-balance">Get An Instant Reply In The AI-Powered Messenger.</p>
                    </div>
                </div>
                <div className="basis-1/2 sm:min-w-[340px] shrink sm:grid grid-cols-6 grid-rows-1 gap-x-[20px] mt-[50px] sm:mt-[130px] ">
                    <div className="col-start-2 col-span-5 max-w-[557px] h-[550px]">
                        <AiChat />
                    </div>
                </div>
            </div>
        </section >
    );
};