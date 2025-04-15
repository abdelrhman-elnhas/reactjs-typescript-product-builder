import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...rest }: IProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600" htmlFor="title">
        {label}
      </label>
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
        {...rest}
      />
    </div>
  );
};

export default Input;
