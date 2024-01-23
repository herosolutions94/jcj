import React, { useState, useEffect } from 'react'
import { getServerImage, getData } from "../../helpers/api";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
	const [toggle, setToggle] = useState(false);
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	const ToggleActive = () => {
		setToggle(!toggle);
	};
	function handleHideMenu() {
		setToggle(false);
	}
	useEffect(() => {

		getData("site-settings").then((data) => {
			setState({
				...state,
				site_settings: data.site_settings,
				services: data.services,
			});
			setLoading(true);
		});

	}, []);
	if (loading === false) return '';

	return (
		<>
			<header>
				<div className="contain">
					<Logo src={getServerImage('uploads/images/', state.site_settings.site_logo)} site_name={state.site_settings.site_name} />
					<button type="button" className={!toggle ? "toggle" : "toggle active"} onClick={() => ToggleActive(!toggle)}>
						<span></span>
					</button>
					<Navigation active={toggle} services={state.services} handleHideMenu={handleHideMenu} />
					<div className="clearfix"></div>
				</div>
			</header>
		</>
	);
}

export default Header;
