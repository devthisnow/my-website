import Image from "next/image";


export default function Skillset(props) {
    return (
        <section className="grid grid-cols-12 grid-rows-1 gap-x-[20px] w-full px-[80px] mt-[160px] ">
            <h2 className="col-span-3 text-[107px] font-semibold leading-none ">Skillset</h2>
            <div className="col-span-7 col-start-6 row-start-2 w-full min-h-full ">
                <div className="flex flex-row justify-start items-center h-[130px] border-t-[3px] max-h-[800px] border-black px-[30px]">
                    <details name="reqs" className="grow open:max-h-[800px] open:[transition: max-height 400ms ease-out] ">
                        <summary className="text-[28px] font-semibold cursor-pointer list-none ">Languages</summary>
                        <ul className="[transition: max-height 400ms ease-out]">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                            <li>C++</li>
                        </ul>
                    </details>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-[100px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className="flex flex-row justify-start items-center h-[130px] border-t-[3px] max-h-[800px] border-black px-[30px]">
                    <details name="reqs" className="grow open:max-h-[800px] open:[transition: max-height 400ms ease-out] ">
                        <summary className="text-[28px] font-semibold cursor-pointer list-none">Frameworks / Libraries / Others</summary>
                        <ul>
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
                    </details>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-[100px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className="flex flex-row justify-start items-center h-[130px] border-y-[3px] max-h-[800px] border-black px-[30px]">
                    <details name="reqs" className="grow open:max-h-[800px] open:[transition: max-height 400ms ease-out] ">
                        <summary className="text-[28px] font-semibold cursor-pointer list-none">Others</summary>
                        <ul>
                            <li>Adobe XD</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe AfterEffects</li>
                            <li>Adobe PremierePro</li>
                            <li>Cinema 4D</li>
                            <li>My approach is based on collaboration and professionalism.</li>
                            <li>Team-player ready to join your team.</li>
                        </ul>
                    </details>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-[100px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div >
            <p className="col-span-6 col-start-2 row-start-3 font-semibold text-[28px] leading-2 pr-10 mt-[210px]">Leveraging my experience in navigating the constraints and demands of the space industry, I now bring a unique perspective to the world of online platforms, meticulously crafting websites that are not only visually stunning and user-friendly but also highly efficient, scalable, and tailored to the specific needs of diverse clientele.</p>
        </section >
    );
};