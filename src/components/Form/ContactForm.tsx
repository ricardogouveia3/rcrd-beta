import { useState } from "react";
import InputField from "./Input";
import TextArea from "./TextArea";
import CaptchaCheckbox from "./CaptchaCheckbox";
import Button from "../Buttons/Button";
import { useBreakpoint } from "../../hooks/useBreakpoint";

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
  const { isAboveLg } = useBreakpoint("lg");
  const [textAreaLines] = useState(isAboveLg ? 10 : 5);

  return (
    <form action="#" className="flex h-full flex-col justify-between gap-2">
      <InputField
        type="email"
        id="email"
        label="Your email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <InputField
        type="text"
        id="subject"
        label="Subject"
        value={subject}
        onChange={handleInputChange}
        required
      />
      <TextArea
        id="message"
        label="Your message"
        rows={textAreaLines}
        value={message}
        onChange={handleInputChange}
        required
      />
      <CaptchaCheckbox
        id="bordered-checkbox-1"
        checked={isHuman}
        onChange={handleCheckboxChange}
        label="I'm a human"
      />
      <Button type="submit" disabled={!isFormValid}>Send message</Button>
    </form>
  );
};

export default ContactForm;
