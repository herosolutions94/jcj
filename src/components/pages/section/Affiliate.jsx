import React from "react";
import Image from "../../common/Image";

function Affiliate({ data }) {
	return (
		<>
			<section id="affiliate" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="content text-center">
						<h1 className="fancy">
							{data.heading} <strong>{data.heading_ex}</strong>
						</h1>
					</div>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<div className="aff_blk">
										<div className="icon">
											<Image src={val.icon} alt={val.title} />
										</div>
										<div className="txt">
											<h5>{val.title}</h5>
											<p>{val.para}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Affiliate;
