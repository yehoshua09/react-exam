import React, {useState} from 'react';

const DisplayResult = (props) =>{
    const [qty, useQty] = useState(0);
    const {
        id,
        name,
        cost,
    } = props

    const onChange = (e) => {
        useQty(e.target.value)
    }

        return(
            <div>
                <label>
                    Product ID:
                    {id}
                </label>
                <label>
                    Product Name:
                    {name}
                </label>
                <label>
                    Cost:
                    {cost}
                </label>
                <label>
                    Quantity:
                    <input onChange={onChange} type='number'></input>
                </label>
                <button>Add to cart</button>
            </div>
        );

}

export default DisplayResult