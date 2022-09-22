import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomepageCss from '../CssComponents/Homepage.css';
import Background from '../CssComponents/Background.css';

export default function Homepage(props) {

  const nav = useNavigate();

  const rooms =props.rooms;
  console.log(rooms);

  const navigateToAddRoom = ()=>{
  nav('/addRoom',{state:{rooms:rooms}});
  }

  return (

  <div className='homepage'>
    <div style={{display:'flex',flexDirection:'row'}}>
   {rooms.map((room,index)=>{
    return <div onClick={() => {nav('/Room',{state:{rooms:rooms,roomIndex:index}})}} className='rooms'
    key={index} style={{backgroundColor:room.color,color:`${room.color=='black'?'white':'black'}`}}>
    {room.name}
    </div>
  }
  )}
  </div>

  <button onClick={() => navigateToAddRoom()} className='addToHompage'>Add your rooms here</button>
  </div>
  )
}
