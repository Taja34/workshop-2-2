import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../redux/actions/receipAction';


//Redux actions

const Receipt = () => {
    const { arrayBurgers } = useSelector((store) => store.recibo)

    const total = arrayBurgers.reduce(
        (sum, price) => price + sum
        , 0);
    const dispatch = useDispatch()
    const handleReset = () => {
        dispatch(reset([]))
    }

    return (
        <div className="container receipt">
            {arrayBurgers.map((price, key) =>
                <h2 className="receipt-row" key={key}>{`Burger ${key + 1} x $ ${price}`}</h2>
            )}
            <h1>{`Total: $${total}`}</h1>
            <Link to="/">
                <div className="button">Return to builder</div>
            </Link>
            <Link to="/">
                <div className="button" onClick={handleReset}>Reset</div>
            </Link>
        </div>
    )
}
export default Receipt