'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import TextArea from "@/src/components/TextArea";
import Modal from "@/src/components/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ContactSection() {
    const form = useRef<HTMLFormElement | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);
            const user_email = formData.get('user_email') as string;
            const subject = formData.get('subject') as string;
            const message = formData.get('message') as string;

            setIsSubmitting(true);  // Disable the button and show spinner

            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

            emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, {
                from_email: user_email,
                subject: subject,
                message: message,
            })
                .then(() => {
                    setModalMessage('Message sent successfully!');
                    setModalVisible(true);
                    form.current!.reset();
                })
                .catch(() => {
                    setModalMessage('Failed to send message. Please try again.');
                    setModalVisible(true);
                })
                .finally(() => {
                    setIsSubmitting(false);  // Re-enable the button and hide spinner
                });
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <section id="contact" className="flex justify-center items-center md:h-fit" >
            <form ref={form} onSubmit={handleSubmit} className="gap-4 flex flex-col">
                <h2 className="text-4xl md:text-5xl font-bold leading-10">Contact Me For Anything!</h2>
                <Input
                    label="Email"
                    placeholder="stranger@mail.com"
                    name="user_email"
                    type="email"
                    required
                />
                <Input
                    label="Subject"
                    placeholder="Collaboration Opportunity"
                    name="subject"
                    required
                />
                <TextArea
                    label="Message"
                    placeholder="Dear Adrian, ..."
                    name="message"
                    required
                />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Send'}
                </Button>
            </form>
            {modalVisible && <Modal message={modalMessage} onClose={closeModal} />}
        </section>
    );
}
