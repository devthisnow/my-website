import Image from "next/image";


export default function TechStack(props) {
    return (
        <section className="w-11/12 bg-white p-8 rounded-lg shadow-md m-6">
            <p className="text-gray-700 mb-4">Tech stack is HTML, CSS, React JS, Next JS, JavaScript, TypeScript, TailWind, SASS</p>
            <div className="flex gap-2">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/HTML.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/CSS.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/JavaScript.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/TypeScript.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/React_JS.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/Next_JS.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/Sass.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/icons/Tailwind.svg"
                    alt="HTML5 icon"
                    width={48}
                    height={48}
                    priority
                />
            </div>
        </section>
    );
};