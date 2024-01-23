import React from "react";
import { Link } from "react-router-dom";
import Logo from "../includes/Logo";

function Error404({ data }) {
	return (
		<>
			<section id="oops">
				<div className="table_dv">
					<div className="table_cell">
						<Logo />
						<div className="contain text-center">
							<div className="icon">{data.num}</div>
							<div className="inner">
								<h4>{data.title}</h4>
								<p>{data.para}</p>
								<div className="btn_blk">
									<Link to={data.btn_link} className="site_btn">
										{data.btn}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Error404;
