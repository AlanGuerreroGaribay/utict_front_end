import { ButtonProps } from "../../utils/types/button.type";

export const Button = ({ text, className, handler }: ButtonProps) => {
  return (
    <button onClick={handler} className={className}>
      {text}
    </button>
  );
};
