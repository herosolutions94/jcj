import React, { Component, useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';

import Banner from "./section/Banner";
import Intro from "./section/Intro";
import Serve from "./section/Serve";
import Choose from "./section/Choose";
// import Assets from "./section/Assets";
import Folio from "./section/Folio";

function Home(props) {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("home-page").then((data) => {
			// console.log(data);
			setState({
				...state,
				site_settings: data.site_settings,
				content: data.content,
				metatags: data.metatags,
				testimonials: data.testimonials,
				services: data.services,
				residential_blocks: data.residential_blocks,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	let site_settings = state?.site_settings;

	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;

	const home = {
		banner: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
			para: content.banner_short_heading,
			btn_01: content.banner_link_text,
			btn_link_01: content.banner_link_url,
			btn_02: content.banner_link_text1,
			btn_link_02: content.banner_link_url1,
			btn_03: "Call: " + site_settings?.site_phone,
			btn_link_03: site_settings?.site_phone,
		},
		intro: {
			heading: content.section1_heading,
			heading_ex: content.section1_heading_ex,
			para: content.section1_detail,

			btn: content.section1_link_text,
			btn_link: content.section1_link_url,
			src: getServerImage('uploads/images/', content.image2, 'thumb_'),
		},
		serve: {
			heading: content.section2_heading,
			heading_ex: content.section2_heading_ex,
			block: state.services,
		},
		choose: {
			heading: content.section3_heading,
			heading_ex: content.section3_heading_ex,
			block: state.residential_blocks,
		},
		assets: {
			sec_bg: "/images/box01-bg-desktop.jpg",
			heading: "We are qualified and experienced in providing a range of electric services.",
			para: "A video is worth 1.8 million words.",
			btn_img_src: "/images/play_icon.svg",
		},
		folio: {
			heading: content.section4_heading,
			heading_ex: content.section4_heading_ex,
			para: content.section4_detail,
			block: state.testimonials,
		},
	};
	// console.log(home)

	return (
		<>
			{metaTags(state.metatags)}
			<Banner data={home.banner} />
			<Intro data={home.intro} />
			<Serve data={home.serve} />
			<Choose data={home.choose} />
			{/* <Assets data={home.assets} show={props.popup} /> */}
			<Folio data={home.folio} />
		</>
	);
}

export default Home;
