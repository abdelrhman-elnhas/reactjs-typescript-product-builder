import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

function Button({ className, children, ...rest }: IProps) {
  return (
    <button
      className={`text-amber-100 font-medium p-2 rounded-md transition duration-300 cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
