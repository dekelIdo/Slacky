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
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
