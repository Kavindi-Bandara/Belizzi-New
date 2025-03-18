import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import homepic1 from "../Image/Homepic1.jpg";
import homepic2 from "../Image/Homepic2.jpg";
import homepic3 from "../Image/Homepic 3.png";
import women from "../Image/WOMEN.jpg";
import men from "../Image/MEN.jpg";
import kids from "../Image/KIDS.jpg";
import top1 from "../Image/top1.jpg";
import top2 from "../Image/top2.jpg";
import top3 from "../Image/top3.jpg";
import top4 from "../Image/top4.jpg";
import dresses1 from "../Image/dresses1.jpg";
import dresses2 from "../Image/dresses2.jpg";
import dresses3 from "../Image/dresses3.png";
import dresses4 from "../Image/dresses4.jpg";
import shirt1 from "../Image/shirt1.jpg";
import shirt2 from "../Image/shirt2.jpg";
import shirt3 from "../Image/shirt3.jpg";
import shirt4 from "../Image/shirt4.jpg";
import tshirt1 from "../Image/tshirt1.jpg";
import tshirt2 from "../Image/tshirt2.jpg";
import tshirt3 from "../Image/tshirt3.jpg";
import tshirt4 from "../Image/tshirt4.jpg";
import brand1 from "../Image/Brand1.png";
import brand2 from "../Image/Brand2.png";
import brand3 from "../Image/Brand3.png";
import brand4 from "../Image/Brand4.png";

import { GiCash } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";

function Home()
{
    return(
        
        <div>
        <Header/>
            
            <div>
                <img id="img1" src={homepic1}/>
            </div>

            <section class="section1">
                <table>
                    <tr>
                        <td> <GiCash class="icon5"/></td>
                        <td id="font5">CASH ON DELIVERY</td>

                        <td><GiClothes class="icon6"/></td>
                        <td id="font5">UNLIMITED UNIQUE DESIGN</td>

                        <td><MdOutlinePayment class="icon7" /></td>
                        <td id="font5">SECURE PAYMENTS</td>

                        <td><GrDeliver class="icon8"/></td>
                        <td id="font5">ISLAND-WIDE DELIVERY</td>
                    </tr>
                </table>
            </section>

            
            <section class="shop">
            <table>
                <tr>
                <td class="category1">
                <Link to="/Women">
                 <img src={women} alt="Women" />
                 <h2>Women</h2>
                </Link>
                </td> 

                <td class="category2">
                <Link to="/Men">
                 <img src={men} alt="Men" />
                 <h2>Men</h2>
                </Link>
                </td>
                
                <td class="category3">
                <Link to="/Kids">
                 <img src={kids} alt="Kids" />
                 <h2>Kids</h2>
                </Link>
                </td>
                </tr>
            </table>     
            </section>
        
            <div class="newarraival">
                <br></br>
                <br></br>
                <h1>NEW ARRIVALS</h1>
                <p><b><i>We are excited to bring you fresh and innovative products that combine style, functionality, and quality. Here’s a sneak peek at what’s new</i></b></p>
                <hr></hr>
            </div>

            {/*TOPS*/}
            <section class="TOPS">
                <div>
                    <Link to="/NewArraival">
                    <td id="font6">TOPS</td>
                    </Link>
                </div>
                <div class="cato">
                    <td><img src={top1} alt="top1" /></td>
                    <td><img src={top2} alt="top2" /></td>
                    <td><img src={top3} alt="top3" /></td>
                    <td><img src={top4} alt="top4" /></td>
                </div>

                <div class="price">
                    <td class="D1">Crop Top<br></br>
                        Rs. 2500</td>
                    <td class="D2">Sleeveless Top<br></br>
                         Rs. 2990</td>
                    <td class="D3">Singlet Top<br></br>
                         Rs. 3000</td>
                    <td class="D4">Shell Top<br></br>
                        Rs. 3850</td>
                </div>
            </section>

            <div class="div2"></div>

            {/*DRESSES*/}
            <section class="DRESSES">
                <div>
                    <Link to="/NewArraival">
                    <td id="font6">DRESSES</td>
                    </Link>
                </div>
                <div class="cato">
                    <td><img src={dresses1} alt="dresses1" /></td>
                    <td><img src={dresses2} alt="dresses2" /></td>
                    <td><img src={dresses3} alt="dresses3" /></td>
                    <td><img src={dresses4} alt="dresses4" /></td>
                </div>

                <div class="price">
                    <td class="D1">Sun Frock<br></br>
                        Rs. 3800</td>
                    <td class="D2">Jumper Frock<br></br>
                        Rs. 2500</td>
                    <td class="D3"> Bodycorn Frock<br></br>
                        Rs. 3500</td>
                    <td class="D4">Babydoll Frock<br></br>
                        Rs. 2560</td>
                </div>
            </section>

            <div class="div2"></div>
            
            {/*SHIRT*/}
            <section class="SHIRT">
                <div>
                    <Link to="/NewArraival">
                    <td id="font6">SHIRT</td>
                    </Link>
                </div>
                <div class="cato">
                    <td><img src={shirt1} alt="shirt1" /></td>
                    <td><img src={shirt2} alt="shirt2" /></td>
                    <td><img src={shirt3} alt="shirt3" /></td>
                    <td><img src={shirt4} alt="shirt4" /></td>  
                </div>

                <div class="price">
                    <td class="D1">Yellow Shirt<br></br>
                        Rs.4550</td>
                    <td class="D2">White Shirt<br></br>
                        Rs.3500</td>
                    <td class="D3">Blue Shirt<br></br>
                        Rs.4000</td>
                    <td class="D4">Printed Shirt<br></br>
                        Rs. 2500</td>
                </div>
            </section>
 
            <div class="div2"></div>

            {/*T-SHIRT*/}
            <section class="TSHIRT">
                <div>
                    <Link to="/NewArraival">
                    <td id="font6">T-SHIRT</td>
                    </Link>
                </div>
                <div class="cato">
                    <td><img src={tshirt1} alt="tshirt1" /></td>
                    <td><img src={tshirt2} alt="tshirt2" /></td>
                    <td><img src={tshirt3} alt="tshirt3" /></td>
                    <td><img src={tshirt4} alt="tshirt4" /></td>  
                </div>

                <div class="price">
                    <td class="D1">Green TShirt<br></br>
                        Rs. 2500</td>
                    <td class="D2">Collar TShirt<br></br>
                        Rs. 3000</td>
                    <td class="D3">Round Neck<br></br>
                        Rs. 2560</td>
                    <td class="D4">White TShirt<br></br>
                        Rs. 4060</td>
                </div>
            </section>

            <div class="div2">
            <form>
                <Link to="/NewArraival">
                <input class="button" type="Shop New Arraival" value="Shop New Arraival"></input>
                </Link>
            </form>
            </div>

            <section class="brand">
                <hr></hr>
                <div><td id="font7">OUR BRAND</td></div>
                <br></br>
                <div>
                     <td><img id="img2" src={brand1} alt="brand1"/></td>
                     <td><img id="img3" src={brand2} alt="brand2"/></td>
                     <td><img id="img4" src={brand3} alt="brand3"/></td>
                     <td><img id="img5" src={brand4} alt="brand4"/></td>
                </div>
            </section>  
        
        <Footer/>
        </div>
    );

};

export default Home;