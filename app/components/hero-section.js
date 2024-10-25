import Link from 'next/link'
import Image from "next/image";
import myPic from "../../public/main-picture.png";
import { TopMenu } from './top-menu-n-footer';


export default function HeroSection(props) {
    return (
        <section className="flex flex-col sm:flex-row justify-center w-full sm:min-h-[890px] sm:bg-mygray sm:pl-[80px] scroll-smooth">
            <div className="flex flex-col justify-between sm:w-1/2 grow h-auto overflow-hidden pl-[30px] sm:pl-0">
                <TopMenu name="Menu for desktop and tablets" />
                <div className="h-auto">
                    <h2 className="text-[44px] sm:text-[107px] font-semibold text-black mb-2 pt-[50px] sm:p-0">Ilia Kalugin</h2>
                    <p className="text-black text-[22px] sm:text-[28px] w-3/4 sm:w-3/6 pb-[50px] sm:p-0">Certified Front-End Developer With an Advanced Skillset</p>
                </div>
                <button className="hidden sm:block px-4 py-2 mb-[50px] ml-[3px] rounded-full outline outline-3 w-[77px] h-[77px] hover:bg-transparent hover:outline-black focus:outline-black animate-bounce ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className='m-auto' height={30} width={30}>
                        <path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="sm:w-1/2 grow min-h-[516px] sm:h-auto">
                <Image
                    className="object-cover h-full"
                    src={myPic}
                    alt="Ilya Kalugin profile picture"
                    quality={85}
                    placeholder="blur"
                    // width={"100%"}
                    // style={{ objectFit: "cover" }}
                    // height={"100%"}
                    priority
                />
            </div>
        </section>
    );
};