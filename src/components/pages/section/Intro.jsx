import React from "react";
import { Link } from "react-router-dom";

function Intro({ data }) {
	return (
		<>
			<section id="intro">
				<div className="contain">
					<div className="flex_row">
						<div className="col col1">
							<div className="content">
								<h1 className="heading">
									{data.heading}
									<strong> {data.heading_ex} </strong>
								</h1>
								<div dangerouslySetInnerHTML={{ __html: data.para }} />

								<div className="btn_blk">
									<Link to={data.btn_link} className="site_btn lg round">
										{data.btn}
									</Link>
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="in_col">
								<div className="img">
									<img src={data.src} alt={data.heading} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Intro;
