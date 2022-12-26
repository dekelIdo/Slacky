import { FiberManualRecord } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function SideBarCmp() {
  return (
    <SideBarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Mu Dekl</h2>
          <h3>
            <FiberManualRecord />
            sabonil
          </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SideBarContainer>
  );
}

export default SideBarCmp;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px #49274b solid;
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
