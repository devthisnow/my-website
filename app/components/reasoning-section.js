export default function ReasonsToWork(props) {

    return (
        <section id="soft-skills" className="flex flex-col sm:justify-start items-start w-full px-[30px] sm:px-[80px] sm:pt-[50px] pt-[80px]">
            <h2 className="text-[44px] sm:text-[69px] font-semibold mb-[50px] sm:mb-[160px] capitalize sm:mt-[160px] leading-tight sm:leading-none">Why work with me</h2>
            <div className="flex flex-col gap-y-[50px] sm:gap-0 sm:flex-row mb-[65px] sm:mb-[170px] w-full" >
                <div className="border-l-[3px] border-black border-opacity-10 pl-[30px] sm:pl-[50px] sm:pr-[8px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:animate-pulse w-[80px] h-[80px]" viewBox="0 0 130 130" width="130" height="130" fill="none"><circle cx="65" cy="65" r="63.5" stroke="#EBEBEB" strokeWidth="3" /><path stroke="#EBEBEB" strokeWidth="3" d="M128.5 65c0 10.33-6.81 19.921-18.324 27.007C98.686 99.077 82.717 103.5 65 103.5c-17.717 0-33.686-4.422-45.176-11.493C8.31 84.92 1.5 75.33 1.5 65c0-10.33 6.81-19.921 18.324-27.007C31.314 30.923 47.283 26.5 65 26.5c17.717 0 33.686 4.422 45.176 11.493C121.69 45.08 128.5 54.67 128.5 65Z" /><path stroke="#EBEBEB" strokeWidth="3" d="M65 1.5c10.33 0 19.921 6.81 27.007 18.324C99.077 31.314 103.5 47.283 103.5 65c0 17.717-4.422 33.686-11.493 45.176C84.92 121.69 75.33 128.5 65 128.5c-10.33 0-19.921-6.81-27.007-18.324C30.923 98.686 26.5 82.717 26.5 65c0-17.717 4.422-33.686 11.493-45.176C45.08 8.31 54.67 1.5 65 1.5ZM0 63.5h130M63.5 130V0" /></svg>
                    <h5 className="text-[22px] sm:text-[44px] font-semibold pt-[30px] sm:pt-[80px] hover:text-myblue transition duration-300 leading-none">Productivity</h5>
                    <h6 className="text-[18px] sm:text-[30px] pt-[30px] leading-tight">Experienced in successfully launching projects worldwide</h6>
                </div>
                <div className="border-l-[3px] border-black border-opacity-10 pl-[30px] sm:pl-[50px] sm:pr-[8px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:animate-pulse w-[80px] h-[80px]" viewBox="0 0 160 130" width="160" height="130" fill="none"><path stroke="#EBEBEB" strokeWidth="3" d="M48.5 70c0-7.456 6.044-13.5 13.5-13.5h36c7.456 0 13.5 6.044 13.5 13.5v58.5h-63V70ZM111.5 82.5H145c7.456 0 13.5 6.044 13.5 13.5v32.5h-47v-46ZM1.5 96c0-7.456 6.044-13.5 13.5-13.5h33.5v46h-47V96Z" /><circle cx="80" cy="25" r="23.5" stroke="#EBEBEB" strokeWidth="3" /><circle cx="134" cy="62" r="13.5" stroke="#EBEBEB" strokeWidth="3" /><circle cx="25" cy="62" r="13.5" stroke="#EBEBEB" strokeWidth="3" /></svg>
                    <h5 className="text-[22px] sm:text-[44px] font-semibold pt-[30px] sm:pt-[80px] hover:text-myblue transition duration-300 leading-none">Collaboration</h5>
                    <h6 className="text-[18px] sm:text-[30px] pt-[30px] leading-tight">Highly motivated and cooperative team player</h6>
                </div>
                <div className="border-l-[3px] border-black border-opacity-10 pl-[30px] sm:pl-[50px] sm:pr-[8px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:animate-pulse w-[80px] h-[80px]" viewBox="0 0 160 131" width="160" height="131" fill="none"><circle cx="30" cy="25" r="23.5" stroke="#EBEBEB" strokeWidth="3" /><circle cx="130" cy="25" r="23.5" stroke="#EBEBEB" strokeWidth="3" /><rect width="157" height="23" x="1.5" y="56.5" stroke="#EBEBEB" strokeWidth="3" rx="3.5" /><path stroke="#EBEBEB" strokeWidth="3" d="m82.934 84.26 25.423 39.081c1.515 2.329-.156 5.409-2.934 5.409H54.577c-2.778 0-4.449-3.08-2.934-5.409l25.423-39.08c1.38-2.122 4.487-2.122 5.868 0Z" /></svg>
                    <h5 className="text-[22px] sm:text-[44px] font-semibold pt-[30px] sm:pt-[80px] hover:text-myblue transition duration-300 leading-none">Result</h5>
                    <h6 className="text-[18px] sm:text-[30px] pt-[30px] leading-tight">Emotionally stable and capable of hard work</h6>
                </div>
            </div>
        </section>
    );
};