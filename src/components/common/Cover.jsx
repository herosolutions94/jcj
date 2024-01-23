import React from "react";
import { Link } from "react-router-dom";

function Cover({ data, btn }) {
	return (
		<>
			<section id="cover" className={data.ex_class} style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_box">
						<div className="content">
							<h1 className="fancy">{data.heading}</h1>
							<p>{data.para}</p>
							{btn && (
								<div className="btn_blk form_btn text-center">
									<Link to={data.btn_link} className="site_btn lg round">
										{data.btn}
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Cover;
