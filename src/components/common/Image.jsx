import React from "react";

const Image = (props) => {
	const { id, className, src, alt } = props;
	const altr = `${`${alt && ` ${alt}`}`}`;

	return <img id={id} className={className} src={src} alt={altr} />;
};

export default Image;
