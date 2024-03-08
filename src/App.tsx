import React, { useState } from "react";
import {
  FlexVertical,
  HorizontalLine,
  IndexPageContainer,
  IndexPageContent,
} from "./styles/styled";
import Logo from "./components/Logo";
import SideMenu from "./components/Nav";
import HeaderTab from "./components/HeaderTab";
import Mid from "./components/MidSection";
import WhatsUp from "./components/WhatsUp";

const App = () => {
  return (
    <IndexPageContainer>
      <IndexPageContent>
        <SideMenu />
        <Mid>
          {/* <FlexVertical> */}
          <HeaderTab />
          <WhatsUp />
          {/* </FlexVertical> */}
        </Mid>
      </IndexPageContent>
    </IndexPageContainer>
  );
};

export default App;
