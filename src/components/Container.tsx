import React, { FC } from "react";

type PropsType = {
    children: React.ReactNode
}

const Container: FC<PropsType> = ({ children }) => {
  return (
    <div className="flex align-bottom justify-center">
      <div className="w-container pl-6 pr-6">{children}</div>
    </div>
  );
};

export default Container;
