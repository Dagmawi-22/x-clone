import React from "react";
import { HeaderTop, White } from "../styles/styled";
import { IoSettingsOutline } from "react-icons/io5";

const HeaderTab = () => {
  return (
    <HeaderTop>
      <White>
        <a>For you</a>
        <a>Following</a>
        <IoSettingsOutline />
      </White>
    </HeaderTop>
  );
};

export default HeaderTab;
