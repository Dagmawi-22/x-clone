import React from "react";
import styled from "styled-components";
import { IoMdGlobe } from "react-icons/io";

const Container = styled.div`
  background-color: transparent;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-top: 20px;
  width: 500px;
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
      <FlexHorizontal>
        <PublicIcon />
        <PublicText>Everyone can reply</PublicText>
      </FlexHorizontal>
    </Container>
  );
};

export default WhatsUp;
