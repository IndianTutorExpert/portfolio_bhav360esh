import React, { useState } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // ========== Email Validation start here ==============
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    // ========== Email Validation end here ================
    let form = document.querySelector("form");

    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setSuccessMsg("")
            setErrMsg("Username is required!");
        } else if (phoneNumber === "") {
            setSuccessMsg("")
            setErrMsg("Phone number is required!");
        } else if (email === "") {
            setSuccessMsg("")
            setErrMsg("Please give your Email!");
        } else if (!emailValidation(email)) {
            setSuccessMsg("")
            setErrMsg("Give a valid Email!");
        } else if (subject === "") {
            setSuccessMsg("")
            setErrMsg("Plese give your Subject!");
        } else if (message === "") {
            setSuccessMsg("")
            setErrMsg("Message is required!");
        } else {
            let data = new FormData(form);
      // The FormData() method creates a new FormData object that contains the values of all the form fields.
      fetch('https://script.google.com/macros/s/AKfycbz1jW45BaI3xUilWqs4nlDpkIr78Z_3eiJkz3wZ8GpXa7tgzVLbhI8b0J91Y-T-V2L1/exec', {
        method: "POST",
        body: data,
        mode: 'no-cors'
      })
        // The fetch() method is used to make a request to the server and retrieve data.
        // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
        .then(res => res.text())
        // The .then() method is used to handle the response from the server.
        // The response is converted to text using the res.text() method.
        
            setSuccessMsg(
                `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }

    };
    return (
        <section
            id="contact"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="CONTACT" des="Contact With Me" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                    <ContactLeft />
                    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                        <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" method='POST' action="" name="contact-form">
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}
                            <div className="w-full flex flex-col lgl:flex-row gap-10">
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        Your name
                                    </p>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        className={`${errMsg === "Username is required!" &&
                                            "outline-designColor"
                                            } contactInput`}
                                        type="text"
                                        name='username'
                                    />
                                </div>
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        Phone Number
                                    </p>
                                    <input
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        className={`${errMsg === "Phone number is required!" &&
                                            "outline-designColor"
                                            } contactInput`}
                                        type="text"
                                        name='phoneNumber'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Email
                                </p>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`${errMsg === "Please give your Email!" &&
                                        "outline-designColor"
                                        } contactInput`}
                                    type="email"
                                    name='email'
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Subject
                                </p>
                                <input
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    className={`${errMsg === "Plese give your Subject!" &&
                                        "outline-designColor"
                                        } contactInput`}
                                    type="text"
                                    name='subject'
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Message
                                </p>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    className={`${errMsg === "Message is required!" && "outline-designColor"
                                        } contactTextArea`}
                                    cols="30"
                                    rows="8"
                                    name='message'
                                ></textarea>
                            </div>
                            <div className="w-full">
                                <button
                                    onClick={handleSend}
                                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                                >
                                    Send Message
                                </button>
                            </div>
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact