import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactWithAI(props) {
    return (
        <section id="AI-chat" className="w-full px-[30px] sm:px-[50px] lg:pl-[80px] mt-[130px] lg:mt-[170px] mb-[80px] sm:mb-[130px] lg:mb-[210px] overflow-hidden ">
            <div className="flex flex-col sm:flex-row justify-between lg:flex-wrap ">
                <div className="basis-1/2 min-w-[340px] shrink lg:grid grid-cols-6 grid-rows-1 sm:gap-x-[20px] mt-0 sm:mt-[80px]">
                    <div className="col-start-1 col-span-5 lg:mt-[150px]">
                        <h2 className="text-[44px] lg:text-[69px] leading-tight font-semibold mb-6">
                            Want To Know More?
                        </h2>
                        <p className="text-[18px] lg:text-[28px] leading-2 text-balance">
                            Get An Instant Reply In <br className="inline-block min-[1841px]:hidden " /> The AI-Powered Messenger.
                        </p>
                    </div>
                </div>
                <div className="relative basis-1/2 sm:min-w-[340px] shrink lg:grid grid-cols-6 grid-rows-1 gap-x-[20px] mt-[50px] sm:mt-0 lg:mt-[130px] ">
                    <div className="overflow-auto col-start-2 col-span-5 max-w-[557px] h-[550px] lg:h-[660px] ">
                        <AiChat />
                    </div>
                </div>
            </div>
        </section >
    );
};