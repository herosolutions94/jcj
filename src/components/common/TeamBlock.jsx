import React from "react";
import Image from "../common/Image";
import SocialLinks from "../includes/SocialLinks";

function AreaBlock({ blockData }) {
	return (
		<>
			<div className="team_blk">
				<figure>
					<Image src={blockData.src} alt={blockData.title} />
				</figure>
				<div className="txt">
					<h5>{blockData.title} </h5>
					<p>{blockData.subtitle} </p>
					<SocialLinks />
				</div>
			</div>
		</>
	);
}

export default AreaBlock;
