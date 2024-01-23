import React from "react";

function Intro({ data }) {
	return (
		<>
			<section id="service">
				<div className="contain">
					<div className="flex_row">
						<div className="col col1">
							<div className="in_col">
								<div className="img">
									<img src={data.src} alt={data.heading} />
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="content">
								<h3 className="heading">{data.heading}</h3>
								<h6>{data.subtitle}</h6>
								<div dangerouslySetInnerHTML={{ __html: data.para }} />

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Intro;
