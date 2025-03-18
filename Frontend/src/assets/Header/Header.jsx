import "../Header/Header.css";
import {Link} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Header(){

    return(
        <header>
            <table class="T1">
            <tr>
                <td class="logo1" colspan="5">
                <div>
                     <span class="logo-main1">Belizzi</span> 
                     <span class="logo-sub1">FASHION</span>
                </div>
                </td>

                <td>
                <div class="search-bar">
                    <input type="text" placeholder="Searching here" class="search-input"/>
                    <button class="search-button">
                    <FaSearch class="icon1"/>
                    </button>
                </div>
                </td>

                <td>
                    <nav class="nav1">
                        <Link to="/" id="font1">
                        <FaHome class="icon2"/>
                         Home
                        </Link>
                        
                        <Link to="/cart" id="font1">
                        <FaShoppingCart class="icon3"/>
                        Cart
                        </Link>
                        
                    </nav>
                </td>

            </tr>
            </table>
            <table class="T2">
            <tr>
                <td>
                <nav class="nav2">
                        <Link to="/Men" id="font2">
                         Men
                        </Link>
                        <Link to="/Women" id="font2">
                         Women
                        </Link>
                        <Link to="/Kids" id="font2">
                         Kids
                        </Link>

                        <Link to="/Signup" class="btn1">
                        <button type="submit">Sign Up</button>
                        </Link>

                        <Link to="/LogIn">
                        <button type="submit">Log In</button>
                        </Link>
                </nav>
                </td>
            </tr>
            </table>
            
        </header>
       
    );

}

export default Header;