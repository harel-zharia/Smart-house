import React, {useState} from 'react';
import AddProductCss from '../CssComponents/AddProduct.css';

export default function AddProduct({addNewProduct, roomType}) {

    const [productName, setProductName] = useState('');


    const addingProducts = (e) => {
        e.preventDefault();
        addNewProduct({name: productName, color: 'red'});
    }

    return (

        <div>
            <form onSubmit={addingProducts}>
                <select className='AddProductSelect' onChange={(e) => setProductName(e.target.value)}>
                    <option value="">--please select a product--</option>
                    <option value="Air conditioner">Air conditioner</option>
                    <option value="Lamp">Lamp</option>
                    <option value="Stereo system">Stereo system</option>
                    {roomType == "bathroom" ? <option value="Boiler">Boiler</option> : null}
                </select><br></br>
                <button type='submit' className='AddProductButton'>Add the product/s to your selected room</button>
            </form>
        </div>
    )

}
