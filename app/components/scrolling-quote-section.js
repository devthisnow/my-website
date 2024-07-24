
export default function ScrollingQuote(props) {
    return (
        <section className="flex justify-center items-center w-full bg-mygray min-h-[1080px]">
            <div className="leading-none overflow-hidden max-h-[150px] pl-[80px] ">
                <h4 className="text-[168px] font-semibold text-right max-w-screen text-nowrap uppercase transition duration-[8s] ease-linear hover:-translate-x-[5500px] ">Great web design without functionality is like a sports car with no engine.</h4>
            </div>
        </section>
    );
};