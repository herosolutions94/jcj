import React, { useState } from "react";
import { websiteUrl } from "../../helpers/api";
import { NavLink, Link } from "react-router-dom";

function Navigation(props) {

	let active = props.active;
	const [show, setShow] = useState(false);
	const SubNav = () => {
		setShow(!show);
	};

	return (
		<>
			<nav className="ease">
				<div id="nav" className={active ? "active" : ""}>
					<ul id="lst">
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={props.handleHideMenu}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={props.handleHideMenu}>
								About
							</NavLink>
						</li>
						{
							(props.services != undefined && props.services.length > 0) ?

								<li className="drop">
									<a onClick={() => SubNav(show)}>Services</a>
									<ul className={show ? "sub active" : "sub"}>

										{props.services.map((service) => {
											return (
												<li key={service.id}>
													<a href={websiteUrl() + "/service/" + service.id + "/" + service.slug}>{service.title}</a>
												</li>
											);
										})}
									</ul>
								</li>
								:
								''
						}
						<li>
							<NavLink to="/reviews" className={({ isActive }) => (isActive ? "active" : "")} onClick={props.handleHideMenu}>
								Reviews
							</NavLink>
						</li>
					</ul>
					<ul id="cta">
						<li>
							<Link to="/contact" className="site_btn long round" onClick={props.handleHideMenu}>
								Contact us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
