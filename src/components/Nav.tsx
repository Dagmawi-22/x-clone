import React from "react";
import { Menu, Navbar } from "../styles/styled";
import Logo from "./Logo";
import PostButton from "./PostButton";

const SideMenu = () => {
  return (
    <Navbar>
      <Logo />
      <Menu>Home</Menu>
      <Menu>Explore</Menu>
      <Menu>Notifications</Menu>
      <Menu>Messages</Menu>
      <Menu>Lists</Menu>
      <Menu>Bookmarks</Menu>
      <Menu>Communities</Menu>
      <Menu>Profile</Menu>
      <Menu>More</Menu>
      <PostButton>
        <>Post</>
      </PostButton>
    </Navbar>
  );
};

export default SideMenu;
