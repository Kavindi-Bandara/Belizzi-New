import "../Footer/Footer.css";
import {Link} from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

function Footer()
{
    return(
        <footer>
           <table class="T3">
            <tr>
                <td><p id="font3">CUSTOMER SERVICE</p></td>
                <td><p id="font3">DISCOVER</p></td>
                <td><p id="font3">CONTACT US</p></td>
                <td><p id="font3">FOLLOWS US ON</p></td>
            </tr>

            <tr >
                <td>
                    <p><a href="#" id="font4">Privacy Policy</a></p>
                    <p><a href="#" id="font4">Delivery</a></p>
                    <p><a href="#" id="font4">Fashionable Feedback</a></p>
                </td>

                <td>
                    <p><Link to="/AboutUs"><a id="font4">About Us</a></Link></p>
                </td>

                <td>
                    <p id="font4">Address:28 Church Street, Colombo 7. </p>
                    <p id="font4">bilizzifashion@gmail.com</p>
                    <p id="font4">+94701178723</p>
                </td>
                    <div class="div1">
                    <a href="#"><FaWhatsapp class="icon4" /></a>
                    <a href="#"><FaInstagram class="icon4"/></a>
                    <a href="#"><CiFacebook class="icon4"/></a>
                    <a href="#"><FaYoutube class="icon4"/></a>
                    </div>
                <td>
                    

                </td>

                <td rowspan="6" class="logo2">
                <div>
                     <span class="logo-main2">Belizzi</span> 
                     <span class="logo-sub2">FASHION</span>
                </div>
                </td>
            </tr>
           </table>
        </footer>
    );
}

export default Footer;