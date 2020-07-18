import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css"

const screenNames ={
	home:"Home",
	myorders: "My Orders",
	cart: "Cart",
	bookdetails: "Book Details"
}

export const AppHeader= () => {
	let screenName = window.location.pathname.replace("/","")
	return (
	<div className="Main-header-container">
		<div className="Title">eCommerce Site {screenName !==""? "|" :""} {screenName}</div>
		<div className="Header-section">
		<Link to="/home"><span>Home</span></Link><span> | </span>
			<Link to="/myorders"><span>My Orders</span></Link><span> | </span>
			<Link to="/cart"><span>Cart</span></Link>
		</div>
	</div>
)
}