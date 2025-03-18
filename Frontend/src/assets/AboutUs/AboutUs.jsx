import React from "react";
import "./AboutUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import back3 from "../Image/back3.jpg"

function AboutUs(){
    return(
        <div>
            <Header/>
            <section>
                <div class="div6">
                <h1>About Us</h1>
                <p>
                Welcome to Belizzi Fashion, where style meets elegance!
                At Belizzi Fashion, we believe clothing is more than just fabric; its a statement, a story, and a reflection of your personality. Founded with a passion for creativity and individuality, we’re dedicated to bringing you the latest trends, timeless classics, and unique designs that empower you to express yourself effortlessly.
                From chic everyday wear to stunning pieces for special occasions, our collections are thoughtfully curated to ensure theres something for everyone. We take pride in using high-quality materials, exquisite craftsmanship, and attention to detail to deliver pieces that not only look good but also feel amazing to wear.
                Our mission is simple: to inspire confidence and celebrate individuality through fashion. At Belizzi Fashion, your style journey matters to us, and we’re here to help you embrace your true self, one outfit at a time.
                Thank you for choosing Belizzi Fashion. Together, lets make every moment a fashionable one.
                </p>
                <div>
                    <td><img src={back3} alt="back3" /></td>
                </div>
                </div>

                
                
                
            </section>

            <Footer/>
        </div>

    );
};

export default AboutUs;
