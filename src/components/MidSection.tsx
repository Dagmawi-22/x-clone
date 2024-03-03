import React, { ReactNode } from "react";
import { MidContent } from "../styles/styled";

interface MidProps {
  children: ReactNode;
}

const Mid: React.FC<MidProps> = ({ children }) => {
  return <MidContent>{children}</MidContent>;
};

export default Mid;
