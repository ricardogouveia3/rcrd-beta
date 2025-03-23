import React, {useEffect, useState} from "react";
import InputField from "./Input";
import TextArea from "./TextArea";
import CaptchaCheckbox from "./CaptchaCheckbox";
import Button from "../Buttons/Button";
import { useBreakpoint } from "@hooks/useBreakpoint.ts";
import {useTranslation} from "react-i18next";

type ContactFormProps = {
    isHuman: boolean;
    email: string;
    subject: string;
    message: string;
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isFormValid: boolean;
};

const ContactForm = ({ isHuman, email, subject, message, handleCheckboxChange, handleInputChange, isFormValid }: ContactFormProps) => {
    const { t } = useTranslation();
    const { isAboveLg } = useBreakpoint("lg");
    const [textAreaLines] = useState(isAboveLg ? 10 : 5);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [buttonText, setButtonText] = useState(t("contact.button.send"));

    useEffect(() => {
        setButtonText(t("contact.button.send"))
    }, [t]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isFormValid) return;

        setIsSubmitting(true);
        setButtonText(t("contact.button.sending"));

        const formData = {
            email,
            subject,
            message,
        };

        try {
            const response = await fetch("https://formspree.io/f/mgveegny", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setButtonText(t("contact.button.sendSuccess"));
                setTimeout(() => setButtonText(t("contact.button.send")), 3000);
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error(error);
            setButtonText(t("contact.button.sendError"));
            setTimeout(() => setButtonText(t("contact.button.send")), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex h-full flex-col justify-between gap-2">
            <InputField
                type="email"
                id="email"
                label={t("contact.email")}
                name="email"
                value={email}
                onChange={handleInputChange}
                required
            />
            <InputField
                type="text"
                id="subject"
                label={t("contact.subject")}
                name="subject"
                value={subject}
                onChange={handleInputChange}
                required
            />
            <TextArea
                id="message"
                label={t("contact.message")}
                name="message"
                rows={textAreaLines}
                value={message}
                onChange={handleInputChange}
                required
            />
            <CaptchaCheckbox
                id="bordered-checkbox-1"
                checked={isHuman}
                onChange={handleCheckboxChange}
                label={t("contact.captcha")}
            />
            <Button type="submit" disabled={!isFormValid || isSubmitting}>
                {buttonText}
            </Button>
        </form>
    );
};

export default ContactForm;
