
import tournament from "../assets/tournament.png"
import eclypse from "../assets/eclypse.png"
import task from "../assets/task.png"
export const projects = [
        {
            title: "E-sports Tournament Registration Page",
            label: "E-sports Tournament Registration Page",
            image  : `${tournament}`,
            description:
                "Designed to handle seamless participant registration with robust security and payment features. The platform integrates Razorpay for secure payment processing and uses Nodemailer to deliver OTP-based email verification and confirmation emails upon successful registration. It features responsive UI components, real-time form validation, and secure backend APIs to ensure a smooth user experience for players signing up for tournaments.",
            techStack: ["React", "Express", "MongoDB", "Node.js","Razorpay","Nodemailer"],
        },
        {
            title: "Eclypse-> Landing Page",
            label: "test",
            image: `${eclypse}`,
            description:
                "Built a responsive landing page for a clothing product, focusing on clean UI, strong visual hierarchy, and conversion-driven design. The page highlights product features, pricing, customer testimonials, and a compelling call-to-action, all tailored to attract and engage potential buyers.",
            techStack: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
            title: "Task Management App",
            label: "test",
            image: `${task}`,
            description:
                "Built a responsive landing page for a clothing product, focusing on clean UI, strong visual hierarchy, and conversion-driven design. The page highlights product features, pricing, customer testimonials, and a compelling call-to-action, all tailored to attract and engage potential buyers.",
            techStack: ["React", "TypeScript", "Tailwind CSS"],
        }
    ];