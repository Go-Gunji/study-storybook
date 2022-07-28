import { FC } from "react";
import "./button.css";

type Props = {
  children: React.ReactNode;
  color?: string;
  size?: string;
};

export const Button: FC<Props> = ({
  children,
  color = "default",
  size = "base",
}) => {
  return <button className={`${color} ${size}`}>{children}</button>;
};

export default Button;
