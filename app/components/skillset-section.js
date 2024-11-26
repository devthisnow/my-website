import Image from "next/image";


export default function Skillset(props) {
    return (
        <section id="hard-skills" className="sm:grid sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-[20px] w-full px-[30px] sm:px-[80px] pb-[80px] sm:pb-[210px] overflow-hidden ">
            <h2 className="col-span-3 text-[44px] sm:text-[107px] font-semibold leading-none pb-[50px] sm:p-0 mt-[80px] sm:mt-[235px]">Skillset</h2>
            <div className="col-span-7 col-start-6 row-start-2 w-full min-h-full h-auto ">
                <div className="flex flex-row justify-start items-center border-t-[3px] max-h-[800px] border-black sm:px-[30px] sm:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details open name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[22px] sm:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center list-none min-h-[44px] sm:min-h-[99px]">
                                <span className="grow">Languages</span>
                                <div className="mr-[9px] sm:mr-[25px] transition-all duration-500 ease-out stroke-myblue
                                group-open:-rotate-45
                                group-open:stroke-black
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
                                        <path strokeWidth="3" d="M15 0v30M0 15h30" />
                                    </svg>
                                    <svg className="block sm:hidden" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path strokeWidth={2} d="M6 .375v11.25M.375 6h11.25" /></svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] sm:text-[22px] mb-[0px]
                        peer-open:max-h-[800px]
                        peer-open:mb-[29px]
                        peer-open:transition-all
                        peer-open:duration-[1s]
                        peer-open:easy-out
                        ">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                            <li>C++</li>
                        </ul>
                    </div>
                </div >

                <div className="flex flex-row justify-start items-center border-t-[3px] max-h-[800px] border-black sm:px-[30px] sm:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[22px] sm:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center leading-none min-h-[44px] sm:min-h-[99px]"><span className="grow">Frameworks / Techs</span>
                                <div className="mr-[9px] sm:mr-[25px] transition-all duration-500 ease-out stroke-myblue
                                group-open:-rotate-45
                                group-open:stroke-black
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
                                        <path strokeWidth="3" d="M15 0v30M0 15h30" />
                                    </svg>
                                    <svg className="block sm:hidden" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path strokeWidth={2} d="M6 .375v11.25M.375 6h11.25" /></svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] sm:text-[22px] mb-[0px]
                        peer-open:max-h-[800px]
                        peer-open:mb-[29px]
                        peer-open:transition-all
                        peer-open:duration-[1s]
                        peer-open:easy-out
                        ">
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Next.js </li>
                            <li>React Query</li>
                            <li>React Testing Library</li>
                            <li>Redux</li>
                            <li>Tailwind CSS</li>
                            <li>Express.js</li>
                            <li>Lottie</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center border-y-[3px] max-h-[800px] border-black sm:px-[30px] sm:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[22px] sm:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center min-h-[43px] sm:min-h-[98px]"><span className="grow">Other</span>
                                <div className="mr-[9px] sm:mr-[25px] transition-all duration-500 ease-out stroke-myblue
                                group-open:-rotate-45
                                group-open:stroke-black
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
                                        <path strokeWidth="3" d="M15 0v30M0 15h30" />
                                    </svg>
                                    <svg className="block sm:hidden" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path strokeWidth={2} d="M6 .375v11.25M.375 6h11.25" /></svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] sm:text-[22px] mb-[0px] 
                        peer-open:max-h-[800px]
                        peer-open:mb-[29px]
                        peer-open:transition-all
                        peer-open:duration-[1s]
                        peer-open:easy-out
                        ">
                            <li>Adobe XD</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe AfterEffects</li>
                            <li>Adobe PremierePro</li>
                            <li>Cinema 4D</li>
                            <li>My approach is based on collaboration and professionalism</li>
                            <li>Team-player ready to join your team</li>
                        </ul>
                    </div>
                </div>
            </div >
            <p className="col-span-6 col-start-2 row-start-3 font-semibold text-[18px] sm:text-[28px] leading-[1.55] sm:pr-0 mt-[80px] sm:mt-[210px] bg-my-grad-acc bg-clip-text text-transparent text-pretty">Leveraging my experience in navigating the constraints and demands of the space industry, I now bring a unique perspective to the world of online platforms, meticulously crafting websites that are not only visually stunning and user-friendly but also highly efficient, scalable, and tailored to the specific needs of diverse clientele.</p>
        </section >
    );
};