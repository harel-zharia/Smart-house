import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import AddProduct from './AddProduct';
import RoomCss from '../CssComponents/Room.css';

export default function Room(props) {

    const location = useLocation();
    const {rooms,roomIndex} = location.state;
    const setRooms = props.setRooms;

    const onAddNewProduct = (product) => {
        if(rooms[roomIndex].products.length >= 5){
            alert("You can have a maxmium of 5 products");
            return;
        }
        else if(product.name == "Stereo system"){
            for (const product of rooms[roomIndex].products){
                if(product.name == "Stereo system"){
                     alert("You can have only one stereo system.")
                     return;
                }
            }
        }
        else if(product.name == ""){
                alert('please select a product');
                return;
        }
        const tempRooms = [...rooms];
        tempRooms[roomIndex].products.push(product);
        setRooms(tempRooms);
    }


    const [flag, setFlag] = useState(false);

    const showProducts = () => {
        setFlag(!flag)
    }

    const handleProductClick = (productIndex) =>{
        const tempRooms = [...rooms];
        const color = tempRooms[roomIndex].products[productIndex].color;
        if (color === "red") {
            tempRooms[roomIndex].products[productIndex].color = "green";
        }
        else{
            tempRooms[roomIndex].products[productIndex].color = "red";
        }
        setRooms(tempRooms);
    }

    console.log(rooms)

    return (

        <div>
            <div className='roomNameAndType'>
                name: {rooms[roomIndex].name}
            </div>
            <div className='roomNameAndType'>
                type: {rooms[roomIndex].type}
            </div>
            <div>
                {rooms[roomIndex].products.map((product, productIndex) => {
                    return <div className='productFrame' onClick={()=>handleProductClick(productIndex)} key={productIndex} style={{backgroundColor:product.color == "red"?"red":"green"}}>{product.name}</div>
                })}
            </div>
            <button className='ToggleButton' onClick={showProducts}>Add products to your room</button>
            {flag ? (<AddProduct addNewProduct={onAddNewProduct} roomType={rooms[roomIndex].type}/>) : ''}
        </div>
    )
}
