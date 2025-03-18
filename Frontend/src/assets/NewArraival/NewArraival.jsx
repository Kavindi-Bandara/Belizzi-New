/*import React from 'react';*/
import "./NewArraival.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

/*Images of Tops*/
import T1 from "../Image/newarraival/image1.jpg";
import T2 from "../Image/newarraival/image2.jpg";
import T3 from "../Image/newarraival/image3.jpg";
import T4 from "../Image/newarraival/image4.jpg";
import T5 from "../Image/newarraival/image5.jpg";
import T6 from "../Image/newarraival/image6.jpg";
import T7 from "../Image/newarraival/image7.jpg";
import T8 from "../Image/newarraival/image8.jpeg";
import T9 from "../Image/newarraival/image9.jpeg";
import T10 from "../Image/newarraival/image10.jpeg";
import T11 from "../Image/newarraival/image11.jpeg";
import T12 from "../Image/newarraival/image12.jpeg";

/*Images of Dresses*/
import D1 from "../Image/newarraival/image13.jpg";
import D2 from "../Image/newarraival/image14.jpg";
import D3 from "../Image/newarraival/image15.jpg";
import D4 from "../Image/newarraival/image16.jpg";
import D5 from "../Image/newarraival/image17.jpg";
import D6 from "../Image/newarraival/image18.jpg";
import D7 from "../Image/newarraival/image19.jpg";
import D8 from "../Image/newarraival/image20.jpeg";
import D9 from "../Image/newarraival/image21.jpeg";
import D10 from "../Image/newarraival/image22.jpg";

/*Images of Shirt*/
import S1 from "../Image/newarraival/image23.jpg";
import S2 from "../Image/newarraival/image24.jpg";
import S3 from "../Image/newarraival/image25.jpg";
import S4 from "../Image/newarraival/image26.jpg";
import S5 from "../Image/newarraival/image27.jpg";
import S6 from "../Image/newarraival/image28.jpeg";
import S7 from "../Image/newarraival/image29.jpeg";
import S8 from "../Image/newarraival/image30.jpeg";

/*Images of TShirt*/
import TS1 from "../Image/newarraival/image31.jpg";
import TS2 from "../Image/newarraival/image32.jpeg";
import TS3 from "../Image/newarraival/image33.jpeg";
import TS4 from "../Image/newarraival/image34.jpeg";
import TS5 from "../Image/newarraival/image35.jpeg";
import TS6 from "../Image/newarraival/image36.jpeg";

/*import { Link } from "React-router-dom";*/

function NewArraival(){

    const menuItems = [
        /*Top Section*/
        {
            name:'Mini Printed Top',
            image:T1,
            Price:'LKR 2100',
        },
        {
            name:'Strap Bow Sleeveless Top-Red',
            image:T2,
            Price:'LKR 2500',
        },
        {
            name:'Sleeveless Satin Vneck Top',
            image:T3,
            Price:'LKR 2990',
        },
        {
            name:'Short Sleeve Classic Collar Printed Top',
            image:T4,
            Price:'LKR 3250',
        },
        {
            name:'Arm Cut Rib Crop Top',
            image:T5,
            Price:'LKR 1100',
        },
        {
            name:'Camy Top',
            image:T6,
            Price:'LKR 1000',
        },
        {
            name:'Collared Crop Top',
            image:T7,
            Price:'LKR 1600',
        },
        {
            name:'Long Sleeved O Cut Top',
            image:T8,
            Price:'LKR 2000',
        },
        {
            name:'Double Pocket Top',
            image:T9,
            Price:'LKR 2500',
        },
        {
            name:'Barcelona Top',
            image:T10,
            Price:'LKR 1700',
        },
        {
            name:'Cropped Cami Top',
            image:T11,
            Price:'LKR 1400',
        },
        {
            name:'Bow Tie Up Top',
            image:T12,
            Price:'LKR 2700',
        },
        

        /*Dresses Section*/
        {
            name:'Bra Cut Detailed Bodycon Barbie Dress',
            image:D1,
            Price:'LKR 2100',
        },
        {
            name:'Women Party Dress',
            image:D2,
            Price:'LKR 3500',
        },
        {
            name:'Sleeveless Maxi Wrap Dress',
            image:D3,
            Price:'LKR 2990',
        },
        {
            name:'Round Neck Dress With Front Gathers',
            image:D4,
            Price:'LKR 3250',
        },
        {
            name:'Sleeveless Maxi Wrap Dress',
            image:D5,
            Price:'LKR 1100',
        },
        {
            name:'Denim Dresses',
            image:D6,
            Price:'LKR 3000',
        },
        {
            name:'Printed Long Kaftan Dress',
            image:D7,
            Price:'LKR 5600',
        },
        {
            name:'Side Rushed Bodycon Dress',
            image:D8,
            Price:'LKR 2000',
        },
        {
            name:'Box Pleated Strappy Mini Frock',
            image:D9,
            Price:'LKR 2450',
        },
        {
            name:'Floral Printed Dress',
            image:D10,
            Price:'LKR 4600',
        },


         /*Shirt Section*/
        {
            name:'Vintage Combat Overshirt',
            image:S1,
            Price:'LKR 2100',
        },
        {
            name:'Casual Wear Stripe Linen Shirt',
            image:S2,
            Price:'LKR 2500',
        },
        {
            name:'Casual Wear Check Shirt',
            image:S3,
            Price:'LKR 2990',
        },
        {
            name:'Casual Wear Printed Cuban Collar Shirt',
            image:S4,
            Price:'LKR 3250',
        },
        {
            name:'Deep Purple Party Wear Shirt',
            image:S5,
            Price:'LKR 3100',
        },
        {
            name:'Short Sleeve Shirt',
            image:S6,
            Price:'LKR 2000',
        },
        {
            name:'Embossed Oversized Shirt',
            image:S7,
            Price:'LKR 2800',
        },
        {
            name:'Oversized Double Pocket Shirt',
            image:S8,
            Price:'LKR 4000',
        },

        /*TShirt Section*/
        {
            name:'Race Themed Unisex T-Shirt',
            image:TS1,
            Price:'LKR 2100',
        },
        {
            name:'Unisex Oversized Tee',
            image:TS2,
            Price:'LKR 2500',
        },
        {
            name:'SKCO Arm Cut Tshirt',
            image:TS3,
            Price:'LKR 2990',
        },
        {
            name:'Buttoned Shoulder T-Shirt',
            image:TS4,
            Price:'LKR 3250',
        },
        {
            name:'Rounded Neck Embossed T-Shirt',
            image:TS5,
            Price:'LKR 1100',
        },
        {
            name:'O Lock Oversized Tshirt',
            image:TS6,
            Price:'LKR 1000',
        },
    
    ];

    const Tops = menuItems.slice(0,12);
    const Dresses=menuItems.slice(12,22);
    const Shirt=menuItems.slice(22,30);
    const TShirt=menuItems.slice(30,36);

    return(
        <div>
            <Header/>
            
            {/*Top section*/}
            <div>
                <div class="menu-container">
                <h1>TOPS</h1>
                <div class="menu-grid">
                {Tops.map((item, index) => (
                   <div class="menu-item" key={index}>
                   <img src={item.image} alt={item.name} />
                   <h3 id="font17">{item.name}</h3>
                   <p id="font17">{item.Price}</p>
                   {/*<Link to="/order-now" className="order-button">Order Now</Link>*/}
                   </div>
                ))}
                </div>
                </div>
            </div>

            {/*Dresses section*/}
            <div>
                <div class="menu-container">
                <h1>DRESSES</h1>
                <div class="menu-grid">
                {Dresses.map((item, index) => (
                   <div class="menu-item" key={index}>
                   <img src={item.image} alt={item.name} />
                   <h3 id="font17">{item.name}</h3>
                   <p id="font17">{item.Price}</p>
                   </div>
                ))}
                </div>
                </div>
            </div>

            {/*Shirt section*/}
            <div>
                <div class="menu-container">
                <h1>SHIRT</h1>
                <div class="menu-grid">
                {Shirt.map((item, index) => (
                   <div class="menu-item" key={index}>
                   <img src={item.image} alt={item.name} />
                   <h3 id="font17">{item.name}</h3>
                   <p id="font17">{item.Price}</p>
                   </div>
                ))}
                </div>
                </div>
            </div>

            {/*TShirt section*/}
            <div>
                <div class="menu-container">
                <h1>T-SHIRT</h1>
                <div class="menu-grid">
                {TShirt.map((item, index) => (
                   <div class="menu-item" key={index}>
                   <img src={item.image} alt={item.name} />
                   <h3 id="font17">{item.name}</h3>
                   <p id="font17">{item.Price}</p>
                   </div>
                ))}
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default NewArraival;






