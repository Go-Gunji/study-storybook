import { FC } from "react";
import "./button.css";

type Color = "primary" | "default" | "danger";

type Size = "base" | "sm" | "lg";

type Props = {
  children: React.ReactNode;
  color?: Color;
  size?: Size;
  onClick: () => void;
};

export const Button: FC<Props> = ({
  children,
  color = "default",
  size = "base",
  onClick,
}) => {
  return (
    <button className={`${color} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
