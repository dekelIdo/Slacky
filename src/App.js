import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import styled from "styled-components";
import SideBarCmp from "./components/side-bar";

function App() {
  return (
    <div className="app">
      <Router>
        <>
        <Header/>
        <AppBody>
          <SideBarCmp/>
            <Routes>
              <Route path="/" element={<h1>Route</h1>}>
             
              </Route>
            </Routes>
        </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;

// const SideBarCmp = styled.div`
// `