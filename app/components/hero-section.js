import Link from 'next/link'
import Image from "next/image";
import myPic from "../../public/main-picture.jpg";
import { TopMenu } from './top-menu-n-footer';


export default function HeroSection(props) {

    return (
        <section id="hero-section" className="flex flex-col sm:flex-row justify-center w-full 
        pl-[0px]
        md:h-[550px] 
        md:min-h-[550px]
        sm:pl-[50px]
        lg:h-[100dvh] 
        lg:min-h-[700px]
        lg:pl-[80px]
        bg-myblack text-mywhite overflow-hidden">
            <div className="flex flex-col justify-between sm:w-1/2 grow h-auto overflow-hidden pl-[30px] sm:pl-0">
                {/* <TopMenu name="Menu for desktop and tablets" /> */}
                <div name="dummyBlankSpace" className="h-auto sm:pt-[50px]" />
                <div className="h-auto w-full">
                    <h2 className="text-[44px] lg:text-[107px] font-semibold mb-[30px] lg:mb-[30px] pt-[50px] sm:p-0 sm:pr-[30px] leading-none ">
                        Ilia Kalugin
                    </h2>
                    <p className="text-[22px] lg:text-[28px] w-[80dvw] sm:w-[40dvw] pb-[50px] sm:p-0 leading-normal tracking-normal">
                        Certified Front-End Developer<br /> With An Advanced Skillset
                    </p>
                </div>
                <Link href="#point-of-difference">
                    <button className="hidden sm:block mb-[50px] ml-[3px] w-fit h-fit hover:bg-transparent hover:outline-black focus:outline-none animate-bounce ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox='0 0 80 80 ' className='sm:size-[50px] lg:size-[80px]'><path fill="url(#a)" d="M38.94 56.06a1.5 1.5 0 0 0 2.12 0l9.547-9.545a1.5 1.5 0 1 0-2.122-2.122L40 52.88l-8.485-8.486a1.5 1.5 0 1 0-2.122 2.122l9.546 9.546ZM38.5 25v30h3V25h-3Z" /><circle cx="40" cy="40" r="38.5" stroke="url(#b)" strokeWidth="3" /><defs><linearGradient id="a" x1="39.5" x2="39.5" y1="25" y2="55" gradientUnits="userSpaceOnUse"><stop stopColor="#008299" /><stop offset="1" stopColor="#00D8FF" /></linearGradient><linearGradient id="b" x1="40" x2="40" y1="0" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#008299" /><stop offset="1" stopColor="#00D8FF" /></linearGradient></defs></svg>
                    </button>
                </Link>
            </div>
            <div className="sm:w-1/2 grow min-h-[516px] md:min-w-[374px] sm:h-auto">
                <Image
                    className="object-cover w-full h-full"
                    src={myPic}
                    alt="Ilya Kalugin profile picture"
                    quality={85}
                    placeholder="blur"
                    // style={{ objectFit: "cover" }}
                    // height={"100%"}
                    priority
                />
            </div>
        </section>
    );
};