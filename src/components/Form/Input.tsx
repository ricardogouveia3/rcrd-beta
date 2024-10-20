type InputProps = {
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  inputStyles?: string;
  labelStyles?: string;
};

const inputDefaultStyles =
  "block w-full text-sm text-quartz-300 rounded-lg p-2.5 dark:placeholder-quartz-750 dark:text-white bg-transparent border border-quartz-900 dark:border-quartz-450";

const labelDefaultStyles =
  "block mb-2 text-sm font-medium text-quartz-300 dark:text-quartz-800";

const InputField = ({ type, id, label, value, onChange, required = false, inputStyles = inputDefaultStyles, labelStyles = labelDefaultStyles }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={inputStyles}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>)
};

export default InputField;
