import React,{ useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddRoomCss from '../CssComponents/AddRoom.css';

export default function AddRoom(props) {

  const location = useLocation();
  const nav = useNavigate();

  console.log(location);

  const [roomName,setRoomName] = useState('');
  const [roomColor,setRoomColor] = useState('');
  const [roomType,setRoomType] = useState('');

  const rooms = props.rooms;
  const setRooms = props.setRooms;

  const createdRoom = {};

  const handlerOnSubmit = (event) =>{
  event.preventDefault();
  if(roomName.length <= 0 || roomName.length>5){
      alert('not a valid name');
      nav(-1);
  }
  if(roomType == ''){
  alert('please pick a room type');
  }
  else if (roomName.length >0 && roomName.length <=5){
    createdRoom.name=roomName;
    createdRoom.color=roomColor;
    createdRoom.type=roomType;
    createdRoom.products=[];
    const tempRooms = [...rooms];
    tempRooms.push(createdRoom);
    setRooms(tempRooms);
    nav(-1,{state:{rooms:rooms}})
  }
  }

  return (
    
<form className='addroom' onSubmit={handlerOnSubmit}>
<select className="content" onChange={(e)=>{setRoomType(e.target.value)}}>
  <option value="">--please select a room--</option>
  <option value='bathroom'>Bathroom</option>
  <option value='bedroom'>Bedroom</option>
  <option value='kitchen'>Kitchen</option>
</select>

<input  type="text" onChange={(e)=>{setRoomName(e.target.value)}} placeholder='Pick the room name'/>
<input className='color' type='text' onChange={(e)=>{setRoomColor(e.target.value)}} placeholder='Pick the room color' />
  <button className='AddRoomButton'>Add the room</button>
 </form>
  )
}
