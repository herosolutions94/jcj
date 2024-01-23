import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import Service from "./section/Service";
import Serve from "./section/Serve";

function ServiceDetail() {
	let location = useLocation();
	let pathname = location.pathname;
	let url_arr = pathname.split("/");
	let ser_id = url_arr['2'];
	let ser_slug = url_arr['3'];
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {

		getData("service-details", ser_id + "/" + ser_slug).then((data) => {
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
	const detail = {
		cover: {
			sec_bg: getServerImage('uploads/services/', content.banner, 'thumb_'),
			heading: content.title,
		},
		service: {
			heading: content.title,
			para: content.details,

			src: getServerImage('uploads/services/', content.image, 'thumb_'),
		},
		serve: {
			heading: content.heading,
			block: content.sub_services,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={detail.cover} />
			<Service data={detail.service} />
			<Serve data={detail.serve} />
		</>
	);
}

export default ServiceDetail;
