import Image from "next/image";


export default function Skillset(props) {
    return (
        <section id="hard-skills" className="sm:grid sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-[20px] w-full px-[30px] sm:px-[50px] lg:px-[80px] pb-[80px] lg:pb-[210px] overflow-hidden ">
            <h2 className="col-span-3 sm:col-span-12 text-[44px] lg:text-[107px] font-semibold leading-none pb-[50px] xl:p-0 mt-[80px] lg:mt-[235px]">
                Skillset
            </h2>
            <div className="xl:col-span-7 xl:col-start-6 sm:col-span-12 sm:col-start-1 row-start-2 w-full min-h-full h-auto ">
                <div className="flex flex-row justify-start items-center border-t-[2px] lg:border-t-[3px] max-h-[800px] border-black lg:px-[30px] lg:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details open name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[22px] lg:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center list-none min-h-[44px] lg:min-h-[99px]">
                                <span className="grow">Languages</span>
                                <div className="mr-[9px] lg:mr-[25px] transition-all duration-500 ease-out stroke-myblue
                                group-open:-rotate-45
                                group-open:stroke-black
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg className="size-[12px] lg:size-[30px] stroke-[2px] lg:stroke-[3px]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path strokeWidth="" d="M15 0v30M0 15h30" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] lg:text-[22px] mb-[0px]
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

                <div className="flex flex-row justify-start items-center border-t-[2px] lg:border-t-[3px] max-h-[800px] border-black lg:px-[30px] lg:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[22px] lg:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center leading-none min-h-[44px] lg:min-h-[99px]"><span className="grow">Frameworks / Techs</span>
                                <div className="mr-[9px] lg:mr-[25px] transition-all duration-500 ease-out stroke-myblue
                                group-open:-rotate-45
                                group-open:stroke-black
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg className="size-[12px] lg:size-[30px] stroke-[2px] lg:stroke-[3px]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path strokeWidth="" d="M15 0v30M0 15h30" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] lg:text-[22px] mb-[0px]
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

                <div className="flex flex-row justify-start items-center border-y-[2px] lg:border-y-[3px] max-h-[800px] border-black lg:px-[30px] lg:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[22px] lg:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center min-h-[43px] lg:min-h-[98px]"><span className="grow">Other</span>
                                <div className="mr-[9px] lg:mr-[25px] transition-all duration-500 ease-out stroke-myblue
                                group-open:-rotate-45
                                group-open:stroke-black
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg className="size-[12px] lg:size-[30px] stroke-[2px] lg:stroke-[3px]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path strokeWidth="" d="M15 0v30M0 15h30" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] lg:text-[22px] mb-[0px] 
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
            <p className="lg:col-span-6 lg:col-start-2 sm:col-span-8 sm:col-start-5 row-start-3 font-semibold text-[18px] lg:text-[28px] leading-[1.55] sm:pr-0 mt-[80px] lg:mt-[210px] bg-my-grad-acc bg-clip-text text-transparent text-pretty">Leveraging my experience in navigating the constraints and demands of the space industry, I now bring a unique perspective to the world of online platforms, meticulously crafting websites that are not only visually stunning and user-friendly but also highly efficient, scalable, and tailored to the specific needs of diverse clientele.</p>
        </section >
    );
};