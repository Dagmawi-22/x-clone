import React, { useState } from "react";
import {
  HorizontalLine,
  IndexPageContainer,
  IndexPageContent,
} from "./styles/styled";
import Logo from "./components/Logo";
import SideMenu from "./components/Nav";
import HeaderTab from "./components/HeaderTab";
import Mid from "./components/MidSection";

const App = () => {
  return (
    <IndexPageContainer>
      <IndexPageContent>
        <SideMenu />
        <Mid>
          <HeaderTab />
          <HorizontalLine></HorizontalLine>
        </Mid>
      </IndexPageContent>
    </IndexPageContainer>
  );
};

export default App;
