import { useState } from "react";
import Card from "../components/Card/Card";
import ContactForm from "../components/Form/ContactForm";
import gridClassNames from "@layout/grid";
import {useTranslation} from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "subject") setSubject(value);
    if (id === "message") setMessage(value);
  };

  const isFormValid = !!(email && subject && message);


  return (
    <Card classNames={gridClassNames.contact} contentClassnames="flex flex-col p-4 lg:p-6 h-full justify-between">
      <h3 className="text-lg/7 mb-4 font-medium text-gray-950 dark:text-white">
        {t('contact.title')}
      </h3>
      <ContactForm
        email={email}
        subject={subject}
        message={message}
        handleInputChange={handleInputChange}
        isFormValid={isFormValid}
      />
    </Card>
  );
}
