import { render } from "react-dom";
import React from "react";
import HomePage from "./HomePage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room"
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

export default function App(){
    const myStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }

    return(
        <div className="center-element" style={myStyle}>
            <BrowserRouter>
                <Routes>
                    <Route index exact path="/" element={<HomePage />} />
                    <Route path="/join" element={<RoomJoinPage />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/room/:roomCode" element={<Room />} />
                </Routes>
            </BrowserRouter>
        </div>     
    ) 
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);