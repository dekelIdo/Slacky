import React from "react";
import styled from "styled-components";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {db}  from '../firebase' 
// import { useCollection } from "react-firebase-hooks";
// import {useAuthState} from 'react-firebase-hooks';
// import {useCollectionData} from 'react-firebase-hooks/firestore';

function SideBarOption({ Icon, title, addChannelOption }) {

    // const [ channels, loading, error] = useCollection(db.collection('rooms'))


  const addChannel = (channel) => {
    const channelName = prompt("please enter a name for the channel");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = (channel) => {};

  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
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

const SideBarOptionChannel = styled.h3`
font-weight: 300;
padding: 10px 0;

`;
