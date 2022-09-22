import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/JSXComponents/Title";
import Homepage from './Components/JSXComponents/Homepage';
import AddRoom from './Components/JSXComponents/AddRoom';
import Room from "./Components/JSXComponents/Room";

function App() {

  const [rooms, setRooms] = useState([]);

  return (

    <div className="App">
      <Title></Title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage rooms={rooms} />} />
          <Route path="/AddRoom" element={<AddRoom rooms={rooms} setRooms={setRooms} />} />
          <Route path="/Room" element={<Room rooms={rooms} setRooms={setRooms} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;