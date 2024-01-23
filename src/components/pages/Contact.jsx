import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import ContactUs from "./section/ContactUs";

function Contact() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});

	useEffect(() => {
		window.scrollTo(0, 3)
		getData("contact-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				contact_blocks: data.contact_blocks,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;
	const contact = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
			para: content.banner_detail,
		},
		contact: {
			heading_01: content.section1_heading,
			heading_ex_01: content.section1_heading_ex,
			info_blk: state.contact_blocks,
			form: {
				heading: content.section2_heading,
				btn: "Submit",
			},
		},
	};
	return (
		<>

			{metaTags(state.metatags)}
			<Cover data={contact.cover} />
			<ContactUs data={contact.contact} />
		</>
	);
}

export default Contact;
