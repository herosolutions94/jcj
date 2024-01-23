import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import DisclaimerBlk from "./section/DisclaimerBlk";

function Disclaimer() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("disclaimer-page").then((data) => {
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
	const disclaimer = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.heading,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={disclaimer.cover} />
			<DisclaimerBlk data={content.detail} />
		</>
	);
}

export default Disclaimer;
