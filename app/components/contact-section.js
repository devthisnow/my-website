import Image from "next/image";
import AiChat from "./ai-chat";

export default function ContactMe(props) {
    return (
        <section className="w-11/12 bg-white p-8 rounded-lg shadow-md m-6">
            <div className="flex justify-between">
                <div className="min-w-fit">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Contact me</h2>
                    <p className="text-gray-700 mb-4">Get an instant reply in the AI-powered messenger {'->'}</p>
                    <ul>
                        <li>
                            <div className="flex items-center text-gray-700 mb-4">
                                <Image
                                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src="/icons/Email.svg"
                                    alt="Email icon"
                                    width={38}
                                    height={38}
                                    priority
                                /><text className="ml-2">Email</text>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center text-gray-700 mb-4">
                                <Image
                                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src="/icons/Linkedin.svg"
                                    alt="LinkedIn icon"
                                    width={38}
                                    height={38}
                                    priority
                                /><text className="ml-2">LinkedIn</text>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center text-gray-700 mb-4">
                                <Image
                                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src="/icons/X_Twitter_icon.svg"
                                    alt="X icon"
                                    width={38}
                                    height={38}
                                    priority
                                /><text className="ml-2">X (Twitter)</text>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center text-gray-700 mb-4">
                                <Image
                                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src="/icons/Facebook.svg"
                                    alt="Facebook icon"
                                    width={38}
                                    height={38}
                                    priority
                                /><text className="ml-2">Facebook</text>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center text-gray-700 mb-4">
                                <Image
                                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src="/icons/Telegram.svg"
                                    alt="Telegram icon"
                                    width={38}
                                    height={38}
                                    priority
                                /><text className="ml-2">Telegram</text>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center text-gray-700 mb-4">
                                <Image
                                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src="/icons/instagram.svg"
                                    alt="LinkedIn icon"
                                    width={38}
                                    height={38}
                                    priority
                                /><text className="ml-2">Instagram</text>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-3/12 min-w-72 max-w-96 h-[400px]">
                    <AiChat />
                </div>
            </div>
        </section>
    );
};