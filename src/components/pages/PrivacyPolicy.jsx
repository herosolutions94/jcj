import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import PrivacyPolicyBlk from "./section/PrivacyPolicyBlk";

function PrivacyPolicy() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("privacy-policy-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;
	const privacy = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.heading,

		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={privacy.cover} />
			<PrivacyPolicyBlk data={content.detail} />
		</>
	);
}

export default PrivacyPolicy;
