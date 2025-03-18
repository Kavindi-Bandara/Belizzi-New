import "./Men.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import img1 from "../Image/men/image1.jpg";
import img2 from "../Image/men/image2.jpg";
import img3 from "../Image/men/image3.jpg";
import img4 from "../Image/men/image4.jpg";
import img5 from "../Image/men/image5.jpg";
import img6 from "../Image/men/image6.jpg";
import img7 from "../Image/men/image7.jpg";
import img8 from "../Image/men/image8.jpg";
import img9 from "../Image/men/image9.jpg";
import img10 from "../Image/men/image10.jpg";
import img11 from "../Image/men/image11.jpg";
import img12 from "../Image/men/image12.jpg";
import img13 from "../Image/men/image13.jpg";
import img14 from "../Image/men/image14.jpg";
import img15 from "../Image/men/image15.jpg";
import img16 from "../Image/men/image16.jpg";

const clothingItems = [
    { img: img1, name: "Full kit", price: 5500 },
    { img: img3, name: "Shirt", price: 4000 },
    { img: img4, name: "Check Shirt", price: 3220 },
    { img: img12, name: "Linen Shirt", price: 4000 },
    { img: img7, name: "Jercy", price: 5000 },
    { img: img2, name: "Office Trouser", price: 4400 },
    { img: img6, name: "Green Shirt", price: 3500 },
    { img: img8, name: "Short", price: 4300 },
    { img: img9, name: "Denim", price: 4000 },
    { img: img10, name: "Dark Blue Shirt", price: 5320 },
    { img: img11, name: "T-Shirt", price: 2000 },
    { img: img5, name: "Full Kit", price: 4550 },
    { img: img13, name: "Blue T-Shirt", price: 2450 },
    { img: img14, name: "Slim Fit", price: 3600 },
    { img: img15, name: "Cargo Pant", price: 3050 },
    { img: img16, name: "Green Down Shirt", price: 5550 },
];

function Men() {
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]); // Store cart items

    const filteredItems = clothingItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addToCart = async (item) => {
        try {
            const token = localStorage.getItem('token'); // Get the JWT token from local storage
            if (!token) {
                alert('You need to log in to add items to the cart.');
                return;
            }
    
            const response = await fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    item_id: item.id, // Ensure the item has an `id` field
                    quantity: 1, // Default quantity is 1
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }
    
            const data = await response.json();
            alert(`${item.name} added to cart!`);
            setCart([...cart, item]); // Update the local cart state
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart. Please try again.');
        }
    };

    return (
        <div>
            <Header />
            <section>
                <div className="div4"><br />
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search for item..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-bar"
                        />
                    </div>
                    <h1 id="font12">MEN</h1>
                    <p id="font13"><b><i>Explore the latest trends in men’s fashion at Bilizzi FASHION.</i></b></p>
                    <p id="font13"><b><i>From casual wear to formal wear, our men’s clothing collection offers something for every occasion.</i></b></p>
                    <p id="font13"><b><i>Shop trendy accessories, innerwear, sportwear, and more. Discover quality fashion at unbeatable prices.</i></b></p>

                    {filteredItems.map((item, index) => (
                        <div key={index} className="card">
                            <img className="card-image" src={item.img} alt="clothes" />
                            <p id="font14">{item.name}</p>
                            <p id="font14">RS. {item.price}</p>
                            <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Men;
