import React from "react";
import styled from "styled-components";
import { IoMdGlobe } from "react-icons/io";
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Container = styled.div`
  background-color: transparent;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-top: 20px;
  width: 500px;
`;

const Icon = styled.span`
  color: #1da1f2;
  cursor: pointer;
`;

const Post = styled.span`
  background-color: #1da1f2;
  color: #fff;
  padding: 6px 15px;
  border-radius: 18px;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: -50px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FlexHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Input = styled.textarea`
  flex: 1;
  margin-left: 12px;
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-size: 16px;
  resize: none; /* Disable resizing */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 16px;
`;

export const PublicIcon = styled(IoMdGlobe)`
  color: #1da1f2;
  font-size: 20px;
  margin-left: 40px;
  margin-top: -20px;
`;

export const PublicText = styled.span`
  color: #1da1f2;
  font-size: 15px;
  margin-left: 7px;
  margin-top: -20px;
`;

const HorizontalSpaceBetwwen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
`;

const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

const WhatsUp = () => {
  return (
    <Container>
      <InputWrapper>
        <Avatar
          src="https://avatars.githubusercontent.com/u/109204719?v=4"
          alt="User Avatar"
        />
        <Input placeholder="What is happening?!" rows={4} />
      </InputWrapper>

      <div>
        <FlexHorizontal>
          <PublicIcon />
          <PublicText>Everyone can reply</PublicText>
        </FlexHorizontal>
      </div>

      <div>
        <HorizontalSpaceBetwwen>
          <FlexHorizontal style={{ marginLeft: "40px" }}>
            <Icon>
              <FaImage />
            </Icon>
            <Icon>
              <MdOutlineGifBox />
            </Icon>
            <Icon>
              <CiSliderHorizontal />
            </Icon>
            <Icon>
              <BsEmojiSmile />
            </Icon>
            <Icon>
              <AiOutlineSchedule />
            </Icon>
            <Icon>
              <IoLocationOutline />
            </Icon>
          </FlexHorizontal>
          <Post>Post</Post>
        </HorizontalSpaceBetwwen>
      </div>
    </Container>
  );
};

export default WhatsUp;
