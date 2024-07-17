import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactMe(props) {
    return (
        <section className="w-full bg-mygray px-[80px] h-[880px]">
            <div className="flex flex-row justify-start items-start align-top w-full mt-[130px]">
                <div className="w-1/2">
                    <h2 className="text-[107px] font-semibold mb-4">Get in touch</h2>
                    <p className="text-gray-700 mb-4 text-balance">Get an instant reply in the AI-powered messenger {'->'}</p>
                </div>
                <div className="w-1/2 ">
                    <div class="mb-4 w-full">
                        <label for="ab295e28-dd7d-4989-b96c-24623acc4606"></label>
                        <input placeholder="Your name" type="text" id="ab295e28-dd7d-4989-b96c-24623acc4606" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none" />
                    </div>


                    <div class="mb-4 w-full">
                        <label for="efe24321-346e-407b-a485-8dbc18d653f5"></label>
                        <input placeholder="Your email address" type="email" id="efe24321-346e-407b-a485-8dbc18d653f5" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none" />
                    </div>


                    <div class="mb-4 w-full">
                        <label for="9ec0bbc6-a7b8-45dd-ad4c-9b71761c31e6"></label>
                        <input placeholder="Your name" type="text" id="9ec0bbc6-a7b8-45dd-ad4c-9b71761c31e6" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none" />
                    </div>


                    <div class="mb-4 w-full">
                        <label for="1776f05f-c63f-4e02-b395-0b65a1f63ca8"></label>
                        <textarea placeholder="Your message" type="password" id="1776f05f-c63f-4e02-b395-0b65a1f63ca8" rows="4" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"></textarea>
                    </div>


                    <button type="submit" class="block mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Submit</button>
                </div>
            </div>
        </section>
    );
};