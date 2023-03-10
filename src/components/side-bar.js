import {
  FiberManualRecord,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOption from "./sideBarOption";

function SideBarCmp() {
  return (
    <SideBarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Juniors IL</h2>
          <h3>
            <FiberManualRecord />
            Dekel Ido
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & reactions" />
      <SideBarOption Icon={Drafts} title="Saved items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People & User groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />
        <hr/>
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr/>
    <SideBarOption Icon={Add} title="Add Channel" addChannelOption />


    </SideBarContainer>
  );
}

export default SideBarCmp;

const SideBarContainer = styled.div`
 > hr {
    border: 1px #49274b solid;
    margin-bottom: 10px;
    margin-top: 10px;
 }
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px #49274b solid;
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px #49274b solid;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 26px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    border-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
