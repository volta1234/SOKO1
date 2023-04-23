import React from "react";
import "./navbar.css"

export default function Navbar() {
    return (
        <ul>
            <li><a href="/" class="active">sOkO</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/marketplace">MarketPlace</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="#">Cart</a></li>
            <li><a  className="signup3" href="/signup">Signup</a></li>
            <li><a  className="signup3" href="/login">Login</a></li>
        </ul>
    )
}