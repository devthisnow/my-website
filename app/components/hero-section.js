import Link from 'next/link'
import Image from "next/image";
import myPic from "../../public/main-picture.png";


export default function HeroSection(props) {
    return (
        <section className="flex flex-row justify-center w-full min-h-[890px] max-h-[890px] bg-mygray pl-[80px]">
            <div className="flex flex-col justify-between w-1/2 grow h-auto">
                <nav className="flex justify-between font-normal text-[18px] w-5/6 items-center self-start pt-[50px]">
                    <button className="hover:text-[#14C6B7] focus:outline-none">
                        <Link href="/about">Projects & Work</Link>
                    </button>
                    <button className="hover:text-[#14C6B7] focus:outline-none">
                        <Link href="/">Hard Skills</Link>
                    </button>
                    <button className="hover:text-[#14C6B7] focus:outline-none">
                        <Link href="/about">Soft Skills</Link>
                    </button>
                    <button className="hover:text-[#14C6B7] focus:outline-none">
                        <Link href="/about">Contact me</Link>
                    </button>
                </nav>
                <div className="">
                    <h2 className="text-[107px] font-semibold text-black mb-2">Ilia Kalugin</h2>
                    <p className="text-black text-[28px] w-3/6">Certified Front-End Developer With an Advanced Skillset</p>
                </div>
                <button className="px-4 py-2 mb-[50px] rounded-full outline outline-3 w-[77px] h-[77px] hover:bg-transparent hover:outline-black focus:outline-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className='m-auto' height={30}>
                        <path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="w-1/2 grow">
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