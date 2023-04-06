import React from "react";

interface MyComponentProps {
  text: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return <div>{text}</div>;
};
