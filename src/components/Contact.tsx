import { useRef, useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setStatus("sending");
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "b0b18751-971e-479f-b42a-f914a4bf24ac");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setStatus("sent");
            if (formRef.current) {
                formRef.current.reset();
            }
            setTimeout(() => {
                setStatus("idle");
            }, 4000);
        }
    };

    return (
        <div id="contact" className="flex flex-col gap-4 w-full mt-24 h-lvh scroll-mt-16">
            <div className="flex  py-4 text-3xl md:text-4xl font-bold justify-center">
                Let's Build Together
            </div>
            <div className="flex justify-center  ">
                <p className="text-sm  text-center w-6/10 ">
                    <span className="font-bold text-red-500 font-">
                        Warning:
                    </span>{" "}
                    Clicking this button may cause cool conversations, collabs,
                    and career upgrades. Proceed only if you're ready to level
                    up
                </p>
            </div>
            <div>
                <form
                    ref={formRef}
                    className="flex flex-col justify-center items-center w-full"
                    onSubmit={onSubmit}
                >
                    <input
                        type="text"
                        name="Email"
                        placeholder="Enter Your Email "
                        className="border-2 rounded border-orange-400 focus:border-orange-600 hover:border-orange-500 p-2 mx-2 w-8/10 lg:w-1/2 md:mt-8 focus:outline-none"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name "
                        className="border-2 rounded border-orange-400 focus:border-orange-600 hover:border-orange-500 p-2 mx-2 w-8/10 lg:w-1/2 mt-4 focus:outline-none"
                    />
                    <textarea
                        name="Message"
                        id=""
                        placeholder="Enter Your Message"
                        className="border-2 rounded border-orange-400 focus:border-orange-600 hover:border-orange-500 p-2 mx-2 w-8/10 lg:w-1/2 mt-4  focus:outline-none h-50 scrollbar-hide"
                    ></textarea>
                    <button
                        type="submit"
                        className="flex shrink grow justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-2 text-xs rounded-md transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 min-w-0 w-1/2 mt-4 hover:cursor-pointer"
                    >
                        {status === "idle"
                            ? "Contact Me"
                            : status === "sending"
                            ? "Sending Message..."
                            : "Sent!"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
