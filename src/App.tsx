import React, { useState } from "react";
import { IndexPageContainer, IndexPageContent } from "./styles/styled";
import Logo from "./components/Logo";
import SideMenu from "./components/Nav";

const App = () => {
  return (
    <IndexPageContainer>
      <IndexPageContent>
        <SideMenu />
      </IndexPageContent>
    </IndexPageContainer>
  );
};

export default App;
