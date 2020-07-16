import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css"

interface AppHeaderProps {
  screenName?: string,
}
export const AppHeader: React.SFC<AppHeaderProps> = (props) => {
return (
<div className="Main-header-container">
	<div className="Title">eCommerce Site {props.screenName !==""? "|" :""} {props.screenName}</div>
	<div className="Header-section">
	  <Link to="/home"><span>Home</span></Link><span> | </span>
		<Link to="/myorders"><span>My Orders</span></Link><span> | </span>
		<Link to="/cart"><span>Cart</span></Link>
	</div>
</div>
)
}

AppHeader.defaultProps ={
	screenName: ""
}