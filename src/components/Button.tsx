import React from "react";

interface MyButtonProps {
  text: string | number;
  onClick?: () => void;
}

const Button: React.FC<MyButtonProps> = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default Button;
