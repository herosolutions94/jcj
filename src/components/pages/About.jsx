import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import Intro from "./section/Intro";
import Affiliate from "./section/Affiliate";
import Team from "./section/Team";

function About() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("about-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				team: data.team,
				support_blocks: data.support_blocks,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;
	const about = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
			para: content.banner_detail,
			btn: content.banner_link_text,
			btn_link: content.banner_link_url,
		},
		intro: {
			heading: content.section1_heading,
			// heading_ex: "our dealings",
			para: content.section1_detail,

			btn: content.section1_link_text,
			btn_link: content.section1_link_url,
			src: getServerImage('uploads/images/', content.image2, 'thumb_'),
		},
		affiliate: {
			heading: content.section2_heading,
			heading_ex: content.section2_heading_ex,
			block: state.support_blocks,
		},
		team: {
			heading: content.section3_heading,
			block: state.team,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={about.cover} btn={true} />
			<Intro data={about.intro} />
			<Affiliate data={about.affiliate} />
			{/* <Team data={about.team} /> */}
		</>
	);
}

export default About;
