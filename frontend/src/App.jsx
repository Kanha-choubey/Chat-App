import { Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/chats" Component={ChatPage} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
