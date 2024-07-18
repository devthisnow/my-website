
export default function ReasonsToWork(props) {
    return (
        <section className="flex flex-col justify-center items-center w-full min-h-[1080px] mt-[160px] ">
            <div className="w-8/12 mb-2 text-[28px] border-b-4 text-center border-black">
                <h2 className="text-[107px] font-semibold mb-4 capitalize ">Why to work with me</h2>
                <ul className="mb-[50px] text-[28px] text-center max-h-10 overflow-y-scroll snap-y snap-mandatory ">
                    <li className="snap-start animate-scroll-me [animation-timeline:view()]">Your needs are what my workflow is built around.</li>
                    <li className="snap-start animate-scroll-me [animation-timeline:view()] h-full">My approach is based on collaboration and professionalism.</li>
                    <li className="snap-start animate-scroll-me [animation-timeline:view()]">Team-player ready to join your team.</li>
                    <li className="snap-start animate-scroll-me [animation-timeline:view()]">Emotionally stable and capable of hard work.</li>
                    <li className="snap-start animate-scroll-me [animation-timeline:view()]">Successfully launched many projects across the globe.</li>
                    <li className="snap-start animate-scroll-me [animation-timeline:view()]">Great communication and on-time delivery.</li>
                </ul>
            </div>
        </section>
    );
};