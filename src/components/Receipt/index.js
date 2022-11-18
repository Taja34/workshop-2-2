import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

const Receipt = () => {
    const {burgerArray}=useSelector((store)=> store)
    const total = burgerArray.reduce(
        (sum, price) => price + sum
    , 0);

    return (
        <div className="container receipt">
            {burgerArray.map( (price, key) =>
                <h2 className="receipt-row" key={key}>{`Burger ${key + 1} x $ ${price}`}</h2>
            )}
        <h1>{`Total: $${total}`}</h1>
        <Link to="/">
          <div className="button">Return to builder</div>
        </Link>
        </div>
    )
}

const mapStateToProps = state => ({
    burgersArray: state,
});

export default connect(mapStateToProps)(Receipt);