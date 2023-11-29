import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-blue-500 hover:scale-105 hover:opacity-90 transition-all  text-white px-4 py-2 rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
