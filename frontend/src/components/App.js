import { render } from "react-dom";
import React from "react";
import HomePage from "./HomePage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index exact path="/" element={<HomePage />} />
                <Route path="/join" element={<RoomJoinPage />} />
                <Route path="/create" element={<CreateRoomPage />} />
            </Routes>
        </BrowserRouter>
        
    ) 
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);