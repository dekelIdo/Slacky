import React from "react";
import styled from "styled-components";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




import {db}  from '../firebase' 


function SideBarOption({ Icon, title, addChannelOption }) {
  const addChannel = (channel) => {
    const ChannelName = prompt("please enter a name for the channel");
    if (ChannelName) {
      db.collection("rooms").add({
        name: ChannelName,
      });
    }
  };

  const selectChannel = (channel) => {};

  return (
    <SideBarOptionContainer
    //   onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="large" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 2px;
  font-size: 12px;

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
`;

const SideBarOptionChannel = styled.div``;