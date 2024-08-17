import Image from "next/image";


export default function Skillset(props) {
    return (
        <section className="grid grid-cols-12 grid-rows-1 gap-x-[20px] w-full px-[80px] mt-[160px] overflow-hidden ">
            <h2 className="col-span-3 text-[107px] font-semibold leading-none ">Skillset</h2>
            <div className="col-span-7 col-start-6 row-start-2 w-full min-h-full h-auto ">
                <div className="flex flex-row justify-start items-center border-t-[3px] max-h-[800px] border-black px-[30px] min-h-[130px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:none ">
                        <details open name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[28px] font-semibold cursor-pointer list-none flex flex-row justify-start items-center "><span className="grow">Languages</span>
                                <div className="size-[100px] transition-all duration-500 ease-out
                                group-open:-rotate-45
                                group-open:scale-75
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-[100px] ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[22px] mb-[0px] list-inside list-disc
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

                <div className="flex flex-row justify-start items-center border-t-[3px] max-h-[800px] border-black px-[30px] min-h-[130px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[28px] font-semibold cursor-pointer list-none flex flex-row justify-start items-center "><span className="grow">Frameworks / Libraries / Others</span>
                                <div className="size-[100px] transition-all duration-500 ease-out
                                group-open:-rotate-45
                                group-open:scale-75
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-[100px] ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[22px] mb-[0px] list-inside list-disc
                        peer-open:max-h-[800px]
                        peer-open:mb-[29px]
                        peer-open:transition-all
                        peer-open:duration-[1s]
                        peer-open:easy-out
                        ">
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>React Query</li>
                            <li>Next.js </li>
                            <li>Express.js</li>
                            <li>React Testing Library</li>
                            <li>Web3</li>
                            <li>Redux</li>
                            <li>Tailwind CSS</li>
                            <li>Lottie</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center border-y-[3px] max-h-[800px] border-black px-[30px] min-h-[130px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full">
                            <summary className="text-[28px] font-semibold cursor-pointer list-none flex flex-row justify-start items-center "><span className="grow">Other</span>
                                <div className="size-[100px] transition-all duration-500 ease-out
                                group-open:-rotate-45
                                group-open:scale-75
                                group-open:transition-all
                                group-open:duration-500
                                group-open:easy-out>
                                ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-[100px] ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                            </summary>
                        </details>
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[22px] mb-[0px] list-inside list-disc
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
                            <li>My approach is based on collaboration and professionalism.</li>
                            <li>Team-player ready to join your team.</li>
                        </ul>
                    </div>
                </div>
            </div >
            <p className="col-span-6 col-start-2 row-start-3 font-semibold text-[28px] leading-2 pr-10 mt-[210px]">Leveraging my experience in navigating the constraints and demands of the space industry, I now bring a unique perspective to the world of online platforms, meticulously crafting websites that are not only visually stunning and user-friendly but also highly efficient, scalable, and tailored to the specific needs of diverse clientele.</p>
        </section >
    );
};