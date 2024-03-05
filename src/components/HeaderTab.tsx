import React, { useState } from "react";
import { BlueBorderBottom, HeaderTop, White } from "../styles/styled";
import { IoSettingsOutline } from "react-icons/io5";

const HeaderTab = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("forYou");

  // Function to handle tab click
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <HeaderTop>
      <White>
        <BlueBorderBottom
          onClick={() => handleTabClick("forYou")}
          style={{
            borderBottom: activeTab === "forYou" ? "2px solid blue" : "none",
          }}
        >
          For you
        </BlueBorderBottom>
        <BlueBorderBottom
          onClick={() => handleTabClick("following")}
          style={{
            borderBottom: activeTab === "following" ? "2px solid blue" : "none",
          }}
        >
          Following
        </BlueBorderBottom>
        <IoSettingsOutline style={{ cursor: "pointer" }} />
      </White>
    </HeaderTop>
  );
};

export default HeaderTab;
