import React from "react";

type TextAreaProps = {
  id: string;
  label: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
  inputStyles?: string;
  labelStyles?: string;
};

const inputDefaultStyles =
  "block w-full text-sm default-text-color rounded-lg p-2.5 dark:placeholder-quartz-750 bg-transparent border default-border";

const labelDefaultStyles =
  "block mb-2 text-sm font-medium default-text-color";

const TextArea = ({ id, label, value, name, onChange, rows = 5, required = false, inputStyles = inputDefaultStyles, labelStyles = labelDefaultStyles }: TextAreaProps) => (
  <div>
    <label htmlFor={id} className={labelStyles}>
      {label}
    </label>
    <textarea
      id={id}
      rows={rows}
      className={inputStyles}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);

export default TextArea;
