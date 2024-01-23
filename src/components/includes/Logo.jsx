import React from "react";
import { Link } from "react-router-dom";

function Logo(src, site_name) {
	return (
		<>
			<div className="logo">
				<Link to="/">
					<img src={src.src} alt={src.site_name} />
				</Link>
			</div>
		</>
	);
}

export default Logo;
