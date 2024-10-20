import React from "react";

type TextAreaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
  inputStyles?: string;
  labelStyles?: string;
};

const inputDefaultStyles =
  "block w-full text-sm text-quartz-300 rounded-lg p-2.5 dark:placeholder-quartz-750 dark:text-white bg-transparent border border-quartz-900 dark:border-quartz-450";

const labelDefaultStyles =
  "block mb-2 text-sm font-medium text-quartz-300 dark:text-quartz-800";

const TextArea = ({ id, label, value, onChange, rows = 5, required = false, inputStyles = inputDefaultStyles, labelStyles = labelDefaultStyles }: TextAreaProps) => (
  <div>
    <label htmlFor={id} className={labelStyles}>
      {label}
    </label>
    <textarea
      id={id}
      rows={rows}
      className={inputStyles}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);

export default TextArea;
