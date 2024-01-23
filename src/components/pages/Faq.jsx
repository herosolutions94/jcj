import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import Accordion from "./section/Accordion";

function Faq() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("faq-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				general_faqs: data.general_faqs,
				most_asked_faqs: data.most_asked_faqs,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;
	const faq = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
		},
		faqs: {
			heading_01: content.section1_heading,
			heading_02: content.section1_heading2,
			block_01: state.general_faqs,
			block_02: state.most_asked_faqs,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={faq.cover} />
			<Accordion data={faq.faqs} />
		</>
	);
}

export default Faq;
