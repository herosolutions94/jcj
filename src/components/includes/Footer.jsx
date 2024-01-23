import React, { useState, useEffect } from 'react'
import { getServerImage, getData } from "../../helpers/api";
import { Link } from "react-router-dom";
// import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";
let currentTime = new Date()
function Footer() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {

		getData("site-settings").then((data) => {
			setState({
				...state,
				site_settings: data.site_settings
			});
			setLoading(true);
		});

	}, []);
	if (loading === false) return '';
	const data = {
		block_01: {
			title: "Explore",
			list: [
				{
					id: 1,
					text: "About us",
					link: "/about",
				},
				{
					id: 2,
					text: "Reviews",
					link: "/reviews",
				},
				{
					id: 3,
					text: "Contact us",
					link: "/contact",
				},
			],
		},
		block_02: {
			title: "Contact",
			list: [
				{
					id: 1,
					text: state.site_settings.site_phone,
					link: "tel:" + state.site_settings.site_phone,
				},
				{
					id: 2,
					text: state.site_settings.site_email,
					link: "mailto:" + state.site_settings.site_phone,
				},
			],
		},
		block_03: {
			// title: "Support",
			list: [
				// {
				// 	id: 1,
				// 	text: "FAQ's",
				// 	link: "/faq",
				// },
				// {
				// 	id: 1,
				// 	text: "Privacy Policy",
				// 	link: "/privacy-policy",
				// },
				// {
				// 	id: 3,
				// 	text: "Terms & conditions",
				// 	link: "/terms-conditions",
				// },
				// {
				// 	id: 4,
				// 	text: "Disclaimer",
				// 	link: "/disclaimer",
				// },
			],
		},
	};
	return (
		<>
			<footer>
				<div className="contain">
					{/* <Newsletter /> */}
					<div className="flex_row main_row">
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_01.title}</h5>
								<ul className="list">
									{data.block_01.list.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_02.title}</h5>
								<ul className="list">
									{data.block_02.list.map((val) => {
										return (
											<li key={val.id}>
												<a href={val.link}>{val.text}</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_03.title}</h5>
								<ul className="list">
									{data.block_03.list.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col text-end">
								<SocialLinks site_settings={state.site_settings} />
								<p className="copyright">
									Copyright © {currentTime.getFullYear()} <Link to="/">{state.site_settings.site_name}.</Link> {state.site_settings.site_copyright}
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
