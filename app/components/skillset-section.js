import Image from "next/image";


export default function Skillset(props) {
    return (
        <section id="skillset" className="sm:grid sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-[20px] w-full px-[30px] sm:px-[50px] lg:px-[80px] pb-[80px] lg:pb-[210px] overflow-hidden ">
            <h2 className="col-span-3 sm:col-span-12 text-[44px] lg:text-[107px] font-semibold leading-none pb-[50px] xl:p-0 mt-[80px] lg:mt-[235px]">
                Skillset
            </h2>
            <div className="xl:col-span-7 xl:col-start-6 sm:col-span-12 sm:col-start-1 row-start-2 w-full min-h-full h-auto ">
                <div className="flex flex-row justify-start items-center border-t-[2px] lg:border-t-[3px] max-h-[800px] border-black lg:px-[30px] lg:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details open name="reqs" className="h-auto peer group w-full open:py-[15px] py-0 transition-all duration-500 ease-out">
                            <summary className="text-[22px] lg:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center list-none min-h-[44px] lg:min-h-[99px]">
                                <span className="grow">
                                    Hard Skills
                                </span>
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
                        <ul className="transition-all duration-700 ease-out  overflow-hidden max-h-0 text-[18px] lg:text-[22px] mb-[0px] text-pretty list-disc list-outside *:leading-tight *:pb-[8px] pl-[20px] marker:text-[16px] *:pl-[10px]
                        peer-open:max-h-[800px]
                        peer-open:mb-[29px]
                        peer-open:transition-all
                        peer-open:duration-[1s]
                        peer-open:easy-out
                        ">
                            <li>React.js <span className="hidden sm:inline-block">(hooks, classes, JSX)</span></li>
                            <li>JavaScript (TypeScript)</li>
                            <li>CSS <span className="hidden sm:inline-block">(SASS/SCSS, PostCSS, Bootstrap, Tailwind)</span></li>
                            <li>HTML</li>
                            <li>Redux<span className="hidden sm:inline-block"> (Toolkit, thunk)</span>, MobX</li>
                            <li>Next.js <span className="hidden sm:inline-block">(routing, CSR, SSR)</span></li>
                            <li>React Router, <span className="hidden sm:inline-block">React Query, </span>RTK Query</li>
                            <li>REST API, WebSockets<span className="hidden sm:inline-block">, Long Polling</span></li>
                            <li>Formik, React Hook Form, Yup</li>
                            <li>Webpack, Vite, ESLint, Prettier</li>
                            <li>Node.js (npm)</li>
                            <li>Jest, <span className="hidden sm:inline-block">React Testing Library, </span>Mocha, Vitest</li>
                            <li>MVC, BEM, Feature-Sliced Design<span className="hidden sm:inline-block">, Accessibility</span></li>
                            <li>Styled-Components, Material UI<span className="hidden sm:inline-block">, Ant Design of React</span></li>
                            <li>Agile, Waterfall, SCRUM</li>
                            <li>Git (GitHub, GitLab, BitBucket)</li>
                            <li>Figma, Adobe XD, Photoshop</li>
                        </ul>
                    </div>
                </div >

                <div className="flex flex-row justify-start items-center border-t-[2px] lg:border-t-[3px] max-h-[800px] border-black lg:px-[30px] lg:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full open:py-[15px] py-0 transition-all duration-500 ease-out">
                            <summary className="text-[22px] lg:text-[28px] font-semibold cursor-pointer flex flex-row justify-start items-center min-h-[44px] lg:min-h-[99px]"><span className="grow">
                                Soft Skills
                            </span>
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
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] lg:text-[22px] mb-[0px] text-pretty list-disc list-outside *:leading-tight *:pb-[8px] pl-[20px] marker:text-[16px] *:pl-[10px]
                        peer-open:max-h-[800px]
                        peer-open:mb-[29px]
                        peer-open:transition-all
                        peer-open:duration-[1s]
                        peer-open:easy-out
                        ">
                            <li>Effective and professional communication skills</li>
                            <li>Responsible time management approach</li>
                            <li>Adherence to the required style code</li>
                            <li>Problem-solving mindset</li>
                            <li>Flexibility and adaptability in thinking</li>
                            <li>Collaborative and respectful team player</li>
                            <li>Attention to detail</li>
                            <li>Vast experience in remote work</li>
                            <li>Proactive attitude</li>
                            <li>High level of self-motivation</li>
                            <li>Continuous improvement of skills</li>
                            <li>Emotional stability</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center border-y-[2px] lg:border-y-[3px] max-h-[800px] border-black lg:px-[30px] lg:min-h-[129px] py-[15px]">
                    <div className="flex flex-col grow justify-center items-start has-[[open]]:bg-none ">
                        <details name="reqs" className="h-auto peer group w-full open:py-[15px] py-0 transition-all duration-500 ease-out">
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
                        <ul className="transition-all duration-700 ease-out overflow-hidden max-h-0 text-[18px] lg:text-[22px] mb-[0px] text-pretty list-disc list-outside *:leading-tight *:pb-[8px] pl-[20px] marker:text-[16px] *:pl-[10px] 
                        peer-open:max-h-[800px]
                        peer-open:mb-[29px]
                        peer-open:transition-all
                        peer-open:duration-[1s]
                        peer-open:easy-out
                        ">
                            <li>PHP, Docker, Python, C++</li>
                            <li>Photoshop, Illustrator, InDesign</li>
                            <li>After Effects, Premiere Pro</li>
                            <li>Cinema 4D, Figma, Adobe XD</li>
                            <li>Windows, Mac</li>
                            <li>Asana</li>
                            <li>Jira</li>
                            <li>Basecamp</li>
                            <li>Trello</li>
                            <li>Hive</li>
                        </ul>
                    </div>
                </div>
            </div >
            <p className="lg:col-span-6 lg:col-start-2 sm:col-span-8 sm:col-start-5 row-start-3 font-semibold text-[18px] lg:text-[28px] leading-[1.55] sm:pr-0 mt-[80px] lg:mt-[210px] bg-my-grad-acc bg-clip-text text-transparent text-pretty">Leveraging my expertise in handling the complexities and challenges of the space industry, I bring a unique approach to the world of online platforms. I meticulously build websites that are not only aesthetically pleasing and user-friendly, but also highly efficient, scalable, and customized to meet the specific requirements of diverse clientele.</p>
        </section >
    );
};