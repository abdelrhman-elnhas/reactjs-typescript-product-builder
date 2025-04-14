import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...rest }: IProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600" htmlFor="title">
        {label}
      </label>
      <input
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-900"
        {...rest}
      />
    </div>
  );
};

export default Input;
