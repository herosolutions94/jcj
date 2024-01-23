import React from "react";

const Heading = (props) => {
	const { id, className, size, text } = props;
	switch (size) {
		case 1:
			return (
				<h1 id={id} className={className}>
					{text}
					{props.children}
				</h1>
			);
		case 2:
			return (
				<h2 id={id} className={className}>
					{text}
					{props.children}
				</h2>
			);
		case 3:
			return (
				<h3 id={id} className={className}>
					{text}
					{props.children}
				</h3>
			);
		case 4:
			return (
				<h4 id={id} className={className}>
					{text}
					{props.children}
				</h4>
			);
		case 5:
			return (
				<h5 id={id} className={className}>
					{text}
					{props.children}
				</h5>
			);
		case 6:
			return (
				<h6 id={id} className={className}>
					{text}
					{props.children}
				</h6>
			);
		default:
			return null;
	}
};

export default Heading;
