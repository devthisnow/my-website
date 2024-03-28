import Image from "next/image";
import myPic from "../../public/main-picture.png";


export default function HeroSection(props) {
    return (
        <section className="w-11/12 bg-white p-8 rounded-lg shadow-md m-6">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-2"
                src={myPic}
                alt="Ilya Kalugin profile picture"
                quality={85}
                placeholder="blur"
                width={280}
                priority
            />
            <h2 className="text-xl font-bold text-gray-700 mb-4">Get your web needs developed</h2>
            <p className="text-gray-700 mb-4">Certified front-end developer with an advanced skillset.</p>
            <button className="px-4 py-2 rounded-md bg-gray-300 text-neutral-700 hover:bg-gray-700 hover:text-gray-100 focus:outline-none">Get in touch</button>
        </section>
    );
};