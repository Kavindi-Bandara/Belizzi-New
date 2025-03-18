import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import "./Cart.css";

function Cart() {
    // Get cart items from localStorage or state (if passing data through props/context)
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(storedCart);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1); // Remove the item at the specified index
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    };

    return (
        <div>
            <Header />
            <div className="Div">
                <table className="table">
                    <thead>
                        <tr>
                            <th><h2>ID</h2></th>
                            <th><h2>Item Name</h2></th>
                            <th><h2>Price</h2></th>
                            <th><h2>Action</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length === 0 ? (
                            <tr>
                                <td colSpan="4">Your cart is empty!</td>
                            </tr>
                        ) : (
                            cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>RS. {item.price}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(index)} className="remove-btn">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
