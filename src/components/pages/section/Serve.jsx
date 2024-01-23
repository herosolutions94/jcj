import React from "react";

function Choose({ data }) {
	return (
		<>
			{
				data.block.length > 0 ?

					<section id="serve">
						<div className="contain text-center">
							<div className="content">
								<h1>
									{data.heading}
									{/* <strong>{data.heading_ex}</strong> */}
								</h1>
							</div>
							<div className="flex_row">
								{data.block.map((val) => {
									return (
										<div className="col" key={val.id}>
											<div className="serve_blk">
												<div className="fig">
													<img src={val.src} alt={val.title} />
												</div>
												<div className="txt">
													<h4>{val.title}</h4>
													<p>{val.para}</p>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>
					:
					""
			}
		</>
	);
}

export default Choose;
