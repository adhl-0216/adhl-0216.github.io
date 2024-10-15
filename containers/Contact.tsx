'use client'
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

export default function ContactContainer() {
    const form = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            // emailjs.sendForm(
            //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            //     form.current,
            //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            // )
            //     .then(
            //         (result) => {
            //             console.log('Email sent successfully!', result.text);
            //             alert('Message sent successfully!');
            //         },
            //         (error) => {
            //             console.log('Failed to send email:', error.text);
            //             alert('Failed to send message. Please try again.');
            //         }
            //     );
            console.log(form.current)
        }
    };

    return (
        <div className="px-6 flex justify-center items-center h-dvh" id="contact-container">
            <form ref={form} onSubmit={handleSubmit} className="gap-6 flex flex-col">
                <h2 className="text-5xl font-bold leading-10">Contact Me For Anything!</h2>
                <Input
                    label="Email"
                    placeholder="stranger@mail.com"
                    name="user_email"
                />
                <Input
                    label="Subject"
                    placeholder="Collaboration Opportunity"
                    name="subject"
                />
                <TextArea
                    label="Message"
                    placeholder="Dear Adrian, ..."
                    name="message"
                />
                <Button type="submit">Send</Button>
            </form>
        </div>
    );
}
