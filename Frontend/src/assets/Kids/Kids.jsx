import "./Kids.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

import img1 from "../Image/kids/image1.jpg";
import img2 from "../Image/kids/image2.jpg";
import img3 from "../Image/kids/image3.jpg";
import img4 from "../Image/kids/image4.jpg";
import img5 from "../Image/kids/image5.jpg";
import img6 from "../Image/kids/image6.jpg";
import img7 from "../Image/kids/image7.jpg";
import img8 from "../Image/kids/image8.jpg";
import img9 from "../Image/kids/image9.jpg";
import img10 from "../Image/kids/image10.jpg";
import img11 from "../Image/kids/image11.jpg";
import img12 from "../Image/kids/image12.jpg";
import img13 from "../Image/kids/image13.jpg";
import img14 from "../Image/kids/image14.jpg";
import img15 from "../Image/kids/image15.jpg";
import img16 from "../Image/kids/image16.jpg";

const clothingItems = [
    { img: img1, name: "Full kit", price: 5500 },
    { img: img2, name: "Shirt", price: 4000 },
    { img: img3, name: "Linen Full Kit", price: 3220 },
    { img: img4, name: "Cute Frock", price: 4000 },
    { img: img5, name: "Full Kit", price: 5000 },
    { img: img6, name: "Couple Kit", price: 4400 },
    { img: img7, name: "Jercy", price: 3500 },
    { img: img8, name: "Shirt", price: 4300 },
    { img: img9, name: "Linen Frock", price: 4000 },
    { img: img10, name: "Frock", price: 5320 },
    { img: img11, name: "Night Kit", price: 2000 },
    { img: img12, name: "Skirt", price: 4550 },
    { img: img13, name: "Printed Frock", price: 2450 },
    { img: img14, name: "T-Shirt", price: 3600 },
    { img: img15, name: "Denim Frock", price: 3050 },
    { img: img16, name: "Short", price: 5550 },    
];

function Kids(){
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]);
    
        const filteredItems = clothingItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const addToCart = (item) => {
            setCart([...cart, item]); // Add item to cart
            alert(`${item.name} added to cart!`);
        };

    return(
        <div>
            <Header/>
            <section>
            <div class="div5" >
            <div className="search-container">
                 <input
                    type="text"
                    placeholder="Search for item..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
            </div>
            <h1 id="font15">KIDS</h1>

            <p id="font16"><b><i>Explore Bilizzi FASHION’s vibrant collection of kids' clothing, designed for comfort and style. </i></b> </p>
            <p id="font16"><b><i>From playful outfits to everyday essentials, our kids' range features trendy and durable apparel for boys and girls.</i></b></p>
            <p id="font16"><b><i>Discover everything from t-shirts, dresses, jeans, and more, perfect for keeping your little ones stylish and comfortable.</i></b></p>

            {filteredItems.map((item, index) => (
                        <div key={index} className="card">
                            <img className="card-image" src={item.img} alt="clothes" />
                            <p id="font17">{item.name}</p>
                            <p id="font17">RS. {item.price}</p>
                            <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
           

            </div>
            </section>

            
            <Footer/>
        </div>

    );
}

export default Kids;