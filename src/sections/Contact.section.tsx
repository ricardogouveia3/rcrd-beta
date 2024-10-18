import { useState } from "react";
import Card from "../components/Card/Card";
import { useBreakpoint } from "../hooks/useBreakpoint";

const inputStyles =
  "block w-full text-sm text-gray-900 bg-gray-50 rounded-lg p-2.5 dark:bg-quartz-d70 dark:placeholder-gray-400 dark:text-white border border-quartz-l80 hover:border-quartz-l70 dark:border-quartz-d10 dark:hover:border-quartz-d30";

const labelStyles =
  "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300";

export default function Contact() {
  const [isHuman, setIsHuman] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { isAboveLg } = useBreakpoint("lg");
  const textAreaLines = isAboveLg ? 10 : 5;

  const handleCheckboxChange = () => {
    setIsHuman((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "subject") setSubject(value);
    if (id === "message") setMessage(value);
  };

  const isFormValid = email && subject && message && isHuman;

  return (
    <Card classNames="lg:col-start-8 lg:col-span-5 lg:row-start-6 rounded-lg">
      <h3 className="text-lg/7 mb-4 font-medium text-gray-950 dark:text-white">
        Leave a message:
      </h3>
      <form action="#" className="flex h-full flex-col justify-between gap-2">
        <div>
          <label htmlFor="email" className={labelStyles}>
            Your email
          </label>
          <input
            type="email"
            id="email"
            className={inputStyles}
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className={labelStyles}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className={`${inputStyles} p-3`}
            value={subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className={`${labelStyles} dark:text-gray-400`}>
            Your message
          </label>
          <textarea
            id="message"
            rows={textAreaLines}
            className={inputStyles}
            value={message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center ps-4 border rounded border-quartz-l80 dark:border-quartz-d10">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            name="bordered-checkbox"
            checked={isHuman}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I'm a human
          </label>
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-quartz-l10 w-full hover:bg-quartz dark:bg-quartz-d70 dark:hover:bg-quartz-d80 border border-quartz-l80 hover:border-quartz-l70 dark:border-quartz-d10 dark:hover:border-quartz-d30 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Send message
        </button>
      </form>
    </Card>
  );
}
