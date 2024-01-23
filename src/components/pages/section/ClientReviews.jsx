import React from "react";
import ReviewBlk from "../../common/ReviewBlk";

function ClientReviews({ data }) {
	return (
		<>
			<section id="reviews">
				<div className="contain">
					<h2 className="heading fancy text-center">
						{data.heading} <strong>{data.heading_ex}</strong>
					</h2>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<ReviewBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default ClientReviews;
