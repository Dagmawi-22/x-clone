import React from "react";
import { Badge, BadgeNumber, Menu, Navbar } from "../styles/styled";
import Logo from "./Logo";
import PostButton from "./PostButton";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";

const SideMenu = () => {
  return (
    <Navbar>
      <Logo />
      <Menu>
        <Badge>
          <IoMdHome />
          <BadgeNumber>.</BadgeNumber>
        </Badge>
        Home
      </Menu>
      <Menu>
        <FaSearch />
        Explore
      </Menu>
      <Menu>
        <Badge>
          <IoNotificationsOutline />
          <BadgeNumber>42</BadgeNumber>
        </Badge>
        Notifications
      </Menu>
      <Menu>
        <MdOutlineEmail />
        Messages
      </Menu>
      <Menu>
        <FaRegListAlt />
        Lists
      </Menu>
      <Menu>
        <FaRegBookmark />
        Bookmarks
      </Menu>
      <Menu>
        <RiGroupLine />
        Communities
      </Menu>
      <Menu>
        <CiUser />
        Profile
      </Menu>
      <Menu>
        <CiCircleMore />
        More
      </Menu>
      <PostButton>
        <>Post</>
      </PostButton>
    </Navbar>
  );
};

export default SideMenu;
