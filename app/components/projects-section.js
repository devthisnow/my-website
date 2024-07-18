
export default function Projects(props) {
    return (
        <section className="flex flex-col justify-start w-full min-h-[890px] max-h-[890px] pl-[80px]">
            <h2 className="text-[44px] font-semibold mt-[130px] ">Selected Projects & Work</h2>
            <div className="flex flex-row gap-6 ">
                <div className=" ">
                    <div className="flex flex-row justify-center items-center w-[880px] min-h-[550px] bg-mygray mt-[30px] ">
                        <button className="flex flex-row justify-center items-center gap-3 text-[22px] font-semibold rounded-full outline outline-3 w-[181px] h-[44px] hover:bg-transparent hover:outline-[#14C6B7] focus:outline-[#14C6B7] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="animate-pulse">
                                <g stroke="#000">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        fill="none"
                                        strokeDasharray="2,2"
                                        strokeWidth="3"
                                    ></circle>
                                </g>
                            </svg>
                            More soon
                        </button>
                    </div>
                    <p className="text-[28px] font-semibold mt-[30px] ">Next JS Example</p>
                </div>
                <div className="m-auto ">
                    <div className="flex flex-row justify-center items-center w-[880px] min-h-[550px] bg-mygray mt-[30px] ">
                        <button className="flex flex-row justify-center items-center gap-3 text-[22px] font-semibold rounded-full outline outline-3 w-[187px] h-[44px] hover:bg-transparent hover:outline-black focus:outline-black ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="animate-pulse">
                                <g stroke="#000">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <circle cx="12" cy="12" r="10" fill="none" strokeDasharray="2,2" strokeWidth="3" ></circle>
                                </g>
                            </svg>
                            More soon
                        </button>
                    </div>
                    <p className="text-[28px] font-semibold mt-[30px] ">React JS Example</p>
                </div>
            </div>
        </section>
    );
};