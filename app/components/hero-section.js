import Link from 'next/link'
import Image from "next/image";
import myPic from "../../public/main-picture.png";


export default function HeroSection(props) {
    return (
        <section className="flex flex-row justify-center w-screen min-h-[890px] max-h-[890px] basis-full bg-mygray mb-6 pl-[80px]">
            <div className="flex flex-col justify-between w-1/2 grow h-auto">
                <nav className="flex justify-between text-[18px] w-5/6 items-center self-start text-white pt-[80px]">
                    <button className="px-4 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none">
                        <Link href="/about">Projects & Work</Link>
                    </button>
                    <button className="px-4 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none">
                        <Link href="/">Hard Skills</Link>
                    </button>
                    <button className="px-4 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none">
                        <Link href="/about">Soft Skills</Link>
                    </button>
                    <button className="px-4 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none">
                        <Link href="/about">Contact me</Link>
                    </button>
                </nav>
                <div className="">
                    <h2 className="text-[107px] font-semibold text-black mb-4">Ilia Kalugin</h2>
                    <p className="text-black text-[28px] w-3/5">Certified Front-End Developer With an Advanced Skillset.</p>
                </div>
                <button className="px-4 py-2 mb-[80px] rounded-full outline outline-2 w-[80px] h-[80px] hover:bg-transparent hover:outline-black focus:outline-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} className='m-auto' color={"#000000"} fill={"none"}>
                        <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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