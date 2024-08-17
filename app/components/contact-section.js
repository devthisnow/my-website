import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactMe(props) {
    return (
        <section className="w-full bg-mygray px-[80px] h-[880px] ">
            <div className="flex flex-row justify-start items-start w-full mt-[108px]">
                <div className="w-1/2 flex flex-row items-start ">
                    <h3 className="text-[107px] font-semibold capitalize h-[200px] leading-[0.8em] ">Get in touch</h3>
                </div>
                <div className="w-1/2 flex flex-col gap-y-[32px] ">
                    <div className="flex flex-row grow gap-5">
                        <div className="mb-4 w-full">
                            <label htmlFor="ab295e28-dd7d-4989-b96c-24623acc4606"></label>
                            <input placeholder="First name" type="text" id="ab295e28-dd7d-4989-b96c-24623acc4606" className="w-full block bg-transparent border-b-[3px] border-black border-opacity-30 py-[20px] px-2 text-[28px] focus:border-b-blue-400 focus:outline-none" />
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="efe24321-346e-407b-a485-8dbc18d653f5"></label>
                            <input placeholder="Last name" type="text" id="efe24321-346e-407b-a485-8dbc18d653f5" className="w-full block bg-transparent border-b-[3px] border-black border-opacity-30 py-[20px] px-3 pr-4 text-[28px] focus:border-b-blue-400 focus:outline-none" />
                        </div>
                    </div>

                    <div className="mb-4 w-full">
                        <label htmlFor="9ec0bbc6-a7b8-45dd-ad4c-9b71761c31e6"></label>
                        <input placeholder="Email" type="email" id="9ec0bbc6-a7b8-45dd-ad4c-9b71761c31e6" className="w-full block bg-transparent border-b-[3px] border-black border-opacity-30 py-[20px] px-2 text-[28px] focus:border-b-blue-400 focus:outline-none" />
                    </div>


                    <div className="mb-4 w-full">
                        <label htmlFor="1776f05f-c63f-4e02-b395-0b65a1f63ca8"></label>
                        <textarea placeholder="Message" type="password" id="1776f05f-c63f-4e02-b395-0b65a1f63ca8" rows="4" className="w-full block bg-transparent border-b-[3px] border-black border-opacity-30 py-[20px] px-2 text-[28px] focus:border-b-blue-400 focus:outline-none"></textarea>
                    </div>


                    <button type="submit" className="block mb-4 w-[271px] max-w-100% h-[74px] rounded-full border-black border-[3px] hover:bg-black hover:text-white focus:bg-black focus:text-white active:bg-black active:text-white px-6 pb-2 pt-2.5 text-[28px] uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 mt-[28px] ">Submit</button>
                </div>
            </div>
        </section>
    );
};