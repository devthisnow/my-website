import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactMe(props) {
    return (
        <section id="contact-me" className="w-full bg-mygray px-[30px] sm:px-[80px] sm:h-[880px] scroll-smooth">
            <div className="flex flex-col sm:flex-row justify-start items-start w-full my-[80px] sm:mt-[108px]">
                <div className="sm:w-1/2 flex flex-row items-start ">
                    <h3 className="text-[44px] sm:text-[107px] font-semibold capitalize sm:h-[200px] leading-[0.8em] ">Get in touch</h3>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-y-[20px] sm:gap-y-[32px] pt-[80px] sm:p-0 ">
                    <div className="flex flex-col sm:flex-row grow gap-5 ">
                        <div className="flex flex-col justify-start mb-4 w-full">
                            <label htmlFor="name"></label>
                            <input placeholder="Name" type="text" id="name" className="peer w-full block bg-transparent border-b-[2px] sm:border-b-[3px] border-black border-opacity-30 py-[20px] sm:px-0 text-[22px] sm:text-[28px] focus:border-b-blue-400 focus:outline-none order-2" />
                            <p className="text-[12px] font-normal
                            peer-placeholder-shown:opacity-0
                            peer-placeholder-shown:translate-y-[6px]
                            translate-y-0
                            opacity-40
                            order-1 leading-none transition duration-200">Name</p>
                        </div>
                        <div className="flex flex-col justify-start mb-4 w-full">
                            <label htmlFor="email"></label>
                            <input placeholder="Email" type="email" id="email" className="peer w-full block bg-transparent border-b-[2px] sm:border-b-[3px] border-black border-opacity-30 py-[20px] sm:px-0 pr-4 text-[22px] sm:text-[28px] focus:border-b-blue-400 focus:outline-none order-2" />
                            <p className="text-[12px] font-normal
                            peer-placeholder-shown:opacity-0
                            peer-placeholder-shown:translate-y-[6px]
                            translate-y-0
                            opacity-40
                            order-1 leading-none transition duration-200">Email</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start mb-4 w-full">
                        <label htmlFor="subject"></label>
                        <input placeholder="Subject" type="text" id="subject" className="peer w-full block bg-transparent border-b-[2px] sm:border-b-[3px] border-black border-opacity-30 py-[20px] sm:px-0 text-[22px] sm:text-[28px] focus:border-b-blue-400 focus:outline-none order-2" />
                        <p className="text-[12px] font-normal
                            peer-placeholder-shown:opacity-0
                            peer-placeholder-shown:translate-y-[6px]
                            translate-y-0
                            opacity-40
                            order-1 leading-none transition duration-200">Subject</p>
                    </div>


                    <div className="flex flex-col justify-start mb-4 w-full">
                        <label htmlFor="message"></label>
                        <textarea placeholder="Message" type="text" id="message" rows="4" className="peer w-full block bg-transparent border-b-[2px] sm:border-b-[3px] border-black border-opacity-30 py-[20px] sm:px-0 text-[22px] sm:text-[28px] focus:border-b-blue-400 focus:outline-none order-2"></textarea>
                        <p className="text-[12px] font-normal
                            peer-placeholder-shown:opacity-0
                            peer-placeholder-shown:translate-y-[6px]
                            translate-y-0
                            opacity-40
                            order-1 leading-none transition duration-200">Message</p>
                    </div>


                    <button type="submit" className="block mb-4 sm:w-[271px] max-w-100% h-[50px] sm:h-[74px] rounded-full border-black border-[2px] sm:border-[3px] hover:bg-black hover:text-white focus:bg-black focus:text-white active:bg-black active:text-white px-6 pb-2 pt-2.5 text-[14px] sm:text-[28px] uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 mt-[28px] ">Submit</button>
                </div>
            </div>
        </section>
    );
};