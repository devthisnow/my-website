"use client"
import { useRef, useState } from "react";

function debounce(timerFunc, timersState, timerKey, timerValue, htmlElm, htmlProp, timeout = 1500) {
    // let timer;
    // return function () {
    clearTimeout(timersState[timerKey]);
    // console.log("Cleared in DEBOUNCE ", timerKey, timersState[timerKey]);
    timerValue = setTimeout(() => {
        htmlElm.setCustomValidity(htmlProp);
    }, timeout);
    timerFunc({ ...timersState, [timerKey]: timerValue });
    // console.log(">>>from DEBOUNCE... ", timerValue, timersState[timerKey], htmlProp, { ...timersState, [timerKey]: timerValue });
    // }
}

export default function ContactMe(props) {
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    return (
        <section id="contact-me" className="w-full bg-myblack px-[30px] sm:px-[80px] scroll-smooth ">
            {!isFormSubmitted && <SectionBeforeSubmit uponSubmit={() => setFormSubmitted(true)} />}
            {isFormSubmitted && <SectionAfterSubmit />}
        </section>
    )
}

function SectionBeforeSubmit(props) {
    const formRef = useRef(null);

    const [budget, setBudget] = useState({
        range: "mid",
        low: "< $1500",
        mid: "~ $1500-$5000",
        hi: "> $5000",
    });

    const [formInfo, setFormInfo] = useState({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: true,
        email: true,
        subject: true,
        budget: true,
        message: true,
    });

    const [timers, setTimerState] = useState({
        name: undefined,
        email: undefined,
        subject: undefined,
        budget: undefined,
        message: undefined,
    });

    const [formWarning, setFormWarning] = useState({
        isEmpty: true,
        isShown: false,
    });

    const regexObj = {
        name: /(\w{2,70}\s?)+/g,
        email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        subject: /(\w{4,140}\s?)+/g,
        message: /(\w+\s\w+)+/g,
        spaces: /\s{2,}/g,
    };

    const handleSetState = (e) => {
        setFormWarning({ ...formWarning, isShown: false });
        let newState = e.target.value;
        // console.log(typeof (e.target.name));
        newState = newState.trimStart();
        newState = newState.replace(regexObj.spaces, " ");
        // e.target.setCustomValidity("");
        if (!regexObj[e.target.name].test(newState) && newState != "") {
            // console.log("invalid");
            setErrors({ ...errors, [e.target.name]: true });
            debounce(setTimerState, timers, e.target.name, timers[e.target.name], e.target, "invalid");
            // console.log("IF from state", timers[e.target.name], errors);
        } else {
            // console.log("valid");
            setErrors({ ...errors, [e.target.name]: false });
            debounce(setTimerState, timers, e.target.name, timers[e.target.name], e.target, "", 10);
            // console.log("ELSE from state", timers[e.target.name], errors);
        }
        // console.log(e.target.name);
        setFormInfo({ ...formInfo, [e.target.name]: newState });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (Object.values(errors).every(item => item == false)) {
            console.log("NoErrors!");
            try {
                // let formData = Object.fromEntries((new FormData(e.target)).entries())
                // let formData = new FormData(formRef);
                console.log("Form submitted...", formInfo);
                // console.log(...formData);
                // fetch(
                //     "https://script.google.com/macros/s/AKfycbxOmMPgfTy3eWryaVkHfVXsqzGQ_g0xHtyb4DxL8cH6vQhr5OAEz4p8IT-BQiInkhg/exec",
                //     {
                //         redirect: "follow", // don't remove this
                //         method: "POST",
                //         body: formData,
                //     }
                // )
                //     .then(res => res.json())
                //     .then(data => console.log(data))
                //     .catch(err => console.log("Error from FETCH:", err));
                props.uponSubmit();
            } catch (error) {
                console.log("Error from catch block:", error);
            }

            // formRef.current.reset();

        } else {
            if (Object.values(formInfo).every(item => item == "")) {
                setFormWarning({ isEmpty: true, isShown: true })
            } else setFormWarning({ isEmpty: false, isShown: true });
            () => setTimeout(() => setFormWarning({ ...formWarning, isShown: false }), 2000)

            console.log("Errors in FORM", errors, formInfo.budget);
        }
    }

    const validateThis = (type) => {
        console.log(type);
    }

    return (
        <form ref={formRef} method="post" onSubmit={handleSubmitForm} noValidate >
            <div className="flex flex-col sm:flex-row justify-start items-start w-full my-[80px] sm:mt-[108px] text-mywhite">
                <div className="sm:w-1/2 flex flex-row items-start ">
                    <h3 className="text-[44px] sm:text-[107px] font-semibold capitalize sm:h-[200px] leading-[0.8em] ">
                        Get in touch</h3>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-y-[0px] sm:gap-y-[32px] pt-[50px] sm:p-0 ">
                    <div className="flex flex-col sm:flex-row grow sm:gap-[20px] min-h-[84px] sm:min-h-[98px] sm:max-h-[98px] sm:mb-[16px]">
                        <div className="flex flex-col justify-start mb-[40px] w-full min-h-[84px] sm:min-h-[98px] max-h-[84px] sm:max-h-[98px] ">
                            <label htmlFor="name"></label>
                            <input name="name" placeholder="Name" type="text" id="name" className="order-2 peer w-full block rounded-none bg-transparent border-b-[2px] sm:border-b-[3px] border-mywhite border-opacity-20 py-[20px] sm:px-0 text-[22px] sm:text-[28px] leading-none h-[58px] sm:h-[72px]
                                placeholder:text-mywhite placeholder:opacity-40 
                                focus:border-opacity-60
                                invalid:border-b-myerror
                                focus:outline-none"
                                // required
                                // pattern="(\w{2,70}\s?)+"
                                value={formInfo.name}
                                onChange={(e) => handleSetState(e)}
                            // onBlur={(e) => handleSetName(e)}
                            />
                            <p className="order-1 text-[12px] font-normal
                                peer-placeholder-shown:opacity-0
                                peer-placeholder-shown:translate-y-[6px]
                                translate-y-0
                                opacity-40
                                leading-none transition duration-200"
                            >Name (required)</p>
                            <p className={`order-3 text-[12px] font-normal
                                text-myerror text-right pt-[10px]
                                leading-none transition duration-200
                                -translate-y-[6px] opacity-0
                                peer-invalid:translate-y-0
                                peer-invalid:opacity-100
                                `}
                            >Please use at least 2 English letters</p>
                        </div>
                        <div className="flex flex-col justify-start mb-[40px] w-full min-h-[84px] sm:min-h-[98px] ">
                            <label htmlFor="email"></label>
                            <input name="email" placeholder="Email" type="text" id="email" className="order-2 peer w-full block rounded-none bg-transparent border-b-[2px] sm:border-b-[3px] border-mywhite border-opacity-20 py-[20px] sm:px-0 pr-4 text-[22px] sm:text-[28px] leading-none h-[58px] sm:h-[72px]
                                placeholder:text-mywhite placeholder:opacity-40
                                focus:border-opacity-60
                                invalid:border-b-myerror
                                focus:outline-none "
                                value={formInfo.email}
                                onChange={(e) => handleSetState(e)}
                            />
                            <p className="order-1 text-[12px] font-normal
                                peer-placeholder-shown:opacity-0
                                peer-placeholder-shown:translate-y-[6px]
                                translate-y-0
                                opacity-40
                                leading-none transition duration-200">Email (required)</p>
                            <p className={`order-3 text-[12px] font-normal
                                text-myerror text-right pt-[10px]
                                leading-none transition duration-200
                                -translate-y-[6px] opacity-0
                                peer-invalid:translate-y-0
                                peer-invalid:opacity-100
                                `}
                            >Please check the email address</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start mb-[40px] w-full min-h-[84px] sm:min-h-[98px] max-h-[84px] sm:max-h-[98px]">
                        <label htmlFor="subject"></label>
                        <input name="subject" placeholder="Subject" type="text" id="subject" className="order-2 peer w-full block rounded-none h-[58px] sm:h-[72px] bg-transparent border-b-[2px] sm:border-b-[3px] border-mywhite border-opacity-20 py-[20px] pr-4 sm:px-0 text-[22px] sm:text-[28px]
                            placeholder:text-mywhite placeholder:opacity-40
                            focus:border-opacity-60
                            focus:outline-none "
                            value={formInfo.subject}
                            onChange={(e) => handleSetState(e)}
                        />
                        <p className="order-1 text-[12px] font-normal
                                peer-placeholder-shown:opacity-0
                                peer-placeholder-shown:translate-y-[6px]
                                translate-y-0
                                opacity-40
                                leading-none transition duration-200">Subject</p>
                        <p className={`order-3 text-[12px] font-normal
                                text-mywhite text-right pt-[10px]
                                leading-none transition duration-200 
                                -translate-y-[6px] opacity-0
                                peer-invalid:translate-y-0
                                peer-invalid:opacity-40
                                `}
                        >Please use at least 4 English letters</p>
                    </div>
                    <div className="flex flex-col justify-start mb-[40px] w-full max-w-full min-h-[100px] max-h-full sm:min-h-[260px] sm:max-h-[390px]">
                        <label htmlFor="message"></label>
                        <div data-val={formInfo.message} className="order-2 peer grid w-full sm:max-w-[calc(50dvw-89px)] rounded-none text-[22px] sm:text-[28px] text-mywhite max-h-[390px]
                        after:content-[attr(data-val)'_']
                        after:whitespace-pre-wrap
                        after:invisible
                        after:w-full
                        after:max-h-[390px]
                        after:row-start-1
                        after:col-start-1
                        after:row-end-2
                        after:col-end-2
                        after:max-w-[calc(100dvw-60px)]
                        after:sm:max-w-[calc(50dvw-89px)]
                        after:break-all
                        
                        ">
                            <textarea name="message" placeholder="Message" type="text" id="message" className="w-full min-h-[58px] sm:min-h-[240px] max-h-auto block rounded-none bg-transparent border-b-[2px] sm:border-b-[3px] border-mywhite border-opacity-20 resize-none overflow-auto sm:overflow-auto sm:px-0 sm:max-w-[calc(50dvw-89px)] 
                            max-w-[calc(100dvw-60px)] break-words
                            row-start-1
                            col-start-1
                            row-end-2
                            col-end-2 
                            placeholder:text-mywhite placeholder:opacity-40
                            focus:border-opacity-60
                            invalid:border-b-myerror
                            focus:outline-none "
                                value={formInfo.message}
                                maxLength="250"
                                rows={1}
                                onChange={(e) => handleSetState(e)}
                            />
                        </div>
                        <div className="order-1 flex flex-row justify-between pb-[20px]
                                peer-has-[:placeholder-shown]:opacity-0
                                peer-has-[:placeholder-shown]:translate-y-[6px]
                                translate-y-0
                                opacity-100
                                transition duration-200">
                            <p className="text-[12px] font-normal
                                leading-none opacity-40">
                                Message (required)</p>
                            <p className="text-[12px] text-mywhite font-normal
                                leading-none">
                                {formInfo.message.length}/250</p>
                        </div>
                        <p className="order-3 text-[12px] font-normal
                                text-myerror text-right pt-[10px]
                                leading-none transition duration-200 
                                -translate-y-[6px] opacity-0
                                peer-has-[:invalid]:translate-y-0
                                peer-has-[:invalid]:opacity-100">
                            Please use at least 2 English words</p>
                    </div>
                    <div className="flex flex-col justify-start w-full">
                        <p className="text-[12px] font-normal
                                peer-placeholder-shown:opacity-0
                                peer-placeholder-shown:translate-y-[6px]
                                translate-y-0
                                opacity-40
                                leading-none transition duration-200">
                            Estimated budget</p>
                        <div className="flex flex-col sm:flex-row gap-x-[14px] gap-y-[30px] sm:gap-y-0 justify-between items-start sm:items-center py-[30px] select-none">
                            <div className="flex flex-row items-center w-full sm:w-fit gap-x-[6px] cursor-pointer ">
                                <input placeholder="Budget" name="budget" type="radio" id="budgetLow" className="peer grid place-content-center rounded-full bg-transparent border-[1px] border-mygray h-[20px] w-[20px] sm:px-0 cursor-pointer
                                before:content-['']
                                before:rounded-full
                                before:h-[18px]
                                before:w-[18px]
                                before:border-[4px]
                                before:border-myblack
                                checked:bg-my-grad-acc
                                appearance-none focus:outline-none focus:ring-0"
                                    value={budget.low}
                                    onChange={(e) => {
                                        setFormInfo({ ...formInfo, budget: e.target.value });
                                        errors.budget ? setErrors({ ...errors, budget: false }) : null;
                                        setFormWarning({ ...formWarning, isShown: false });
                                    }}
                                />
                                <label htmlFor="budgetLow" className="w-full sm:w-auto pt-[1px] leading-3 cursor-pointer text-[22px] sm:text-[28px]">{budget.low}</label>
                            </div>
                            <div className="flex flex-row items-center w-full sm:w-fit gap-x-[6px] cursor-pointer ">
                                <input placeholder="Budget" name="budget" type="radio" id="budgetMid" className="peer grid place-content-center rounded-full bg-transparent border-[1px] border-mygray h-[20px] w-[20px] sm:px-0 cursor-pointer
                                before:content-['']
                                before:rounded-full
                                before:h-[18px]
                                before:w-[18px]
                                before:border-[4px]
                                before:border-myblack
                                checked:bg-my-grad-acc
                                appearance-none focus:outline-none focus:ring-0"
                                    value={formInfo.budget}
                                    onChange={(e) => {
                                        setFormInfo({ ...formInfo, budget: e.target.value });
                                        errors.budget ? setErrors({ ...errors, budget: false }) : null;
                                        setFormWarning({ ...formWarning, isShown: false });
                                    }}
                                />
                                <label htmlFor="budgetMid" className="w-full sm:w-auto pt-[1px] leading-3 cursor-pointer text-[22px] sm:text-[28px]">{budget.mid}</label>
                            </div>
                            <div className="flex flex-row items-center w-full sm:w-fit gap-x-[6px] cursor-pointer ">
                                <input placeholder="Budget" name="budget" type="radio" id="budgetHi" className="peer grid place-content-center rounded-full bg-transparent border-[1px] border-mygray h-[20px] w-[20px] sm:px-0 cursor-pointer
                                before:content-['']
                                before:rounded-full
                                before:h-[18px]
                                before:w-[18px]
                                before:border-[4px]
                                before:border-myblack
                                checked:bg-my-grad-acc
                                appearance-none focus:outline-none focus:ring-0"
                                    value={budget.hi}
                                    onChange={(e) => {
                                        setFormInfo({ ...formInfo, budget: e.target.value });
                                        errors.budget ? setErrors({ ...errors, budget: false }) : null;
                                        setFormWarning({ ...formWarning, isShown: false });
                                    }}
                                />
                                <label htmlFor="budgetHi" className="w-full sm:w-auto pt-[1px] leading-3 cursor-pointer text-[22px] sm:text-[28px]">{budget.hi}</label>
                            </div>
                        </div>
                    </div>
                    <div className="self-center sm:self-start w-full sm:max-w-[210px] pt-[10px] sm:p-0 ">
                        <p className={`text-[12px] text-center font-normal text-myerror leading-none transition duration-200
                            ${formWarning.isShown ? "translate-y-0 opacity-1" : "translate-y-[8px] opacity-0"}
                            `}>{
                                formWarning.isEmpty ? "Please fill out the form" : "Please check the missing data"
                            }</p>
                    </div>
                    <button type="submit" className="block self-center sm:self-start grow mb-[10px] sm:mb-0 mt-[18px] w-full sm:w-[210px] max-w-[300px] h-[50px] sm:h-[74px] rounded-full p-[2px] sm:p-[3px] text-[14px] sm:text-[28px] leading-none transition duration-150 ease-in-out text-myaccent border-[2px] sm:border-[3px]
                            bg-my-grad-acc border-none [background-size:200%]
                            hover:[background-size:100%] hover:text-myaccent focus:bg-black focus:text-myaccent active:bg-black active:scale-[0.98]
                            focus:outline-none focus:ring-0 "
                        onClick={handleSubmitForm}>
                        <p className="flex flex-row justify-center items-center w-full h-full rounded-full bg-myblack">Submit</p>
                    </button>

                </div>
            </div>
            {/* <div data-val={formInfo.message} className="grid w-full rounded-none text-[22px] sm:text-[28px] text-mywhite
                        after:content-[attr(data-val)'_']
                        after:whitespace-pre-wrap
                        after:visible
                        after:row-start-1
                        after:col-start-1
                        after:row-end-2
                        after:col-end-2
                        ">
                <textarea name="message" placeholder="Message" type="text" id="message" className="w-full rounded-none bg-transparent  resize-none overflow-hidden
                            row-start-1
                            col-start-1
                            row-end-2
                            col-end-2 "
                    value={formInfo.message}
                    maxLength="250"
                    onChange={(e) => handleSetState(e)}
                />
            </div> */}
        </form>
    );
};

function SectionAfterSubmit(props) {
    return (
        <div className="grid place-content-center min-h-[85dvh] text-mywhite animate-fade-in leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" fill="none"><rect width="98" height="78" x="1" y="1" stroke="#EBEBEB" strokeWidth="2" rx="4" /><path stroke="#EBEBEB" strokeWidth="2" d="M2 2c1.135 1.554 27.95 26.916 44.492 43.465a5.026 5.026 0 0 0 7.072.045L98 2" /><circle cx="50" cy="48" r="9" fill="#020804" stroke="#EBEBEB" strokeWidth="2" /></svg>
            <p className="text-[44px] font-semibold pt-[50px]">Thank You!</p>
            <div className="text-[18px] pt-[30px] leading-normal whitespace-break-spaces">
                <p>Your form has been submitted.</p>
                <p>I will contact you shortly.</p>
            </div>
        </div >
    )
}