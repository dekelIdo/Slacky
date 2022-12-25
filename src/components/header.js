import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline } from "@material-ui/icons";
import { ReactComponent as SearchIcon } from "../style/images/icons8-search.svg";
// import { SearchIcon } from "@material-ui/icons";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        // onClick={}
          />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search a friend" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>

    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  flex: 0.3;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  background-color: #421f44;
  display: flex;
  flex: 0.4;
  text-align: center;
  border-radius: 6px;
  opacity: 1;
  padding: 0 50px;
  color: gray;
  border-radius: 1px gray solid;
  > input {
    background-color: transparent;
    text-align: center;
    border: none;
    color: white;
    min-width: 30vw;
    outline: 0;
  }
`;

const HeaderRight = styled.div`
display: flex;
align-items: flex-end;
flex: 0.3;

> .MuiSvgIcon-root {
  margin-left: auto;
  margin-right: 20px;
}
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
