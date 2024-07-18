
export default function ReasonsToWork(props) {
    return (
        <section className="flex flex-col justify-center items-center w-full min-h-[1080px] mt-[160px] ">
            <div className="w-8/12 mb-2 text-[28px] border-b-4 text-center border-black">
                <h2 className="text-[107px] font-semibold mb-4 capitalize ">Why to work with me</h2>
                <ul className="mb-[50px] text-[28px] text-center max-h-24 overflow-y-scroll ">
                    <li className="animate-scroll-me [animation-timeline:scroll()]">Your needs are what my workflow is built around.</li>
                    <li className="animate-scroll-me [animation-timeline:scroll()] h-full">My approach is based on collaboration and professionalism.</li>
                    <li className="animate-scroll-me [animation-timeline:scroll()]">Team-player ready to join your team.</li>
                    <li className="animate-scroll-me [animation-timeline:scroll()]">Emotionally stable and capable of hard work.</li>
                    <li className="animate-scroll-me [animation-timeline:scroll()]">Successfully launched many projects across the globe.</li>
                    <li className="animate-scroll-me [animation-timeline:scroll()]">Great communication and on-time delivery.</li>
                </ul>
            </div>
        </section>
    );
};