import "./Women.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import img1 from "../Image/women/image1.jpg";
import img2 from "../Image/women/image2.jpg";
import img3 from "../Image/women/image3.jpg";
import img4 from "../Image/women/image4.jpg";
import img5 from "../Image/women/image5.jpg";
import img6 from "../Image/women/image6.jpg";
import img7 from "../Image/women/image7.jpg";
import img8 from "../Image/women/image8.jpg";
import img9 from "../Image/women/image9.jpg";
import img10 from "../Image/women/image10.jpg";
import img11 from "../Image/women/image11.jpg";
import img12 from "../Image/women/image12.jpg";
import img18 from "../Image/women/image18.jpg";
import img13 from "../Image/women/image13.jpg";
import img19 from "../Image/women/image19.jpg";
import img20 from "../Image/women/image20.jpg";

const clothingItems = [
    { name: "Full kit", price: "RS. 5500", image: img1 },
    { name: "Frock", price: "RS. 3400", image: img5 },
    { name: "Office pant", price: "RS. 4000", image: img11 },
    { name: "Linen Frock", price: "RS. 3220", image: img9 },
    { name: "Long Skirt", price: "RS. 4000", image: img7 },
    { name: "Printed top", price: "RS. 3500", image: img3 },
    { name: "Full Green Kit", price: "RS. 5000", image: img4 },
    { name: "Linen Top", price: "RS. 5000", image: img10 },
    { name: "Short Frock", price: "RS. 4550", image: img2 },
    { name: "Queen Blouse", price: "RS. 5320", image: img8 },
    { name: "Printed Frock", price: "RS. 4300", image: img6 },
    { name: "Linen Trouser", price: "RS. 5200", image: img12 },
    { name: "Silk Top", price: "RS. 2000", image: img18 },
    { name: "Frock", price: "RS. 4990", image: img13 },
    { name: "Printed Frock", price: "RS. 3900", image: img19 },
    { name: "Fit Skirt", price: "RS. 4000", image: img20 },
];

function Women() {
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]);

    const filteredItems = clothingItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addToCart = (item) => {
        setCart([...cart, item]); // Add item to cart
        alert(`${item.name} added to cart!`);
    };

    return (
        <div>
            <Header />
            <section>
                <div className="div3"><br></br>
                    <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for item..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-bar"
                    /></div>
                    <h1 id="font8">WOMEN</h1>
                    <p id="font9"><b><i>Explore Bilizzi FASHION’s extensive collection of women’s clothing and accessories.</i></b></p>
                    <p id="font9"><b><i>From elegant dresses to casual wear and everything in between, find stylish and high-quality pieces to enhance your wardrobe.</i></b></p>

                   
                    <div className="items-container">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <div className="card" key={index}>
                                    <img className="card-image" src={item.image} alt="cloths" />
                                    <p id="font10">{item.name}</p>
                                    <p id="font10">Rs. {item.price}</p>
                                    <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
                                </div>
                            ))
                        ) : (
                            <p>No items found.</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Women;
