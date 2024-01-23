import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/Heading";

function Banner({ data }) {
	return (
		<>
			<section id="banner" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_blk">
						<div className="content text-center">
							<p>{data.para}</p>
							<Heading className="fancy" size={1} text={data.heading} />
							<div className="btn_blk">
								<Link to={data.btn_link_01} className="site_btn lg simple round block_sm">
									{data.btn_01}
								</Link>
								<Link to={data.btn_link_02} className="site_btn lg round block_sm">
									{data.btn_02}
								</Link>
							</div>
							<div className="btn_blk text-center phone_btn">
								<a href={"tel: " + data.btn_link_03} className="site_btn lg simple round block_sm">
									{data.btn_03}
								</a>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Banner;
