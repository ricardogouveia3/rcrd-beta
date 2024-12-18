import React from "react";

type CaptchaCheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  labelClassName?: string;
};

const CaptchaCheckbox: React.FC<CaptchaCheckboxProps> = ({
  id,
  checked,
  onChange,
  label,
  className = "w-4 h-4 text-blue-600 bg-quartz-900 border-quartz-800 rounded dark:ring-offset-quartz-400 focus:ring-2",
  labelClassName = "w-full py-4 ms-2 text-sm font-medium default-text-color",
}) => (
  <div className="flex items-center ps-4 border rounded default-border">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={className}
    />
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
  </div>
);

export default CaptchaCheckbox;
