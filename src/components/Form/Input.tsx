import React from "react";

type InputProps = {
    type: string,
    id: string,
    label: string,
    value: string,
    name?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    required?: boolean,
    inputStyles?: string,
    labelStyles?: string,
};

const inputDefaultStyles =
    "block w-full text-sm smooth-text-color rounded-lg p-2.5 dark:placeholder-quartz-750  bg-transparent border default-border";

const labelDefaultStyles =
    "block mb-2 text-sm font-medium default-text-color";

const InputField = ({
                        type,
                        id,
                        label,
                        value,
                        onChange,
                        name,
                        required = false,
                        inputStyles = inputDefaultStyles,
                        labelStyles = labelDefaultStyles,

                    }: InputProps) => {
    return (
        <div>
            <label htmlFor={id} className={labelStyles}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                className={inputStyles}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>)
};

export default InputField;
