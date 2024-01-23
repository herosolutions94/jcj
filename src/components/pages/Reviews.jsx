import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import ClientReviews from "./section/ClientReviews";

function Reviews() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("reviews-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				reviews: data.reviews,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;
	const reviews = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
		},
		review: {
			heading: content.section1_heading,
			heading_ex: content.section1_heading_ex,
			block: state.reviews,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={reviews.cover} />
			<ClientReviews data={reviews.review} />
		</>
	);
}

export default Reviews;
