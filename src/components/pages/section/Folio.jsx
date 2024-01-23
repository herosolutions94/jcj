import React from "react";
import OwlFolio from "../../common/OwlFolio";

function Folio({ data }) {
	return (
		<>
			<section id="folio">
				<div className="contain">
					<div className="flex_row">
						<div className="col col1">
							<div className="content">
								<h1 className="heading">
									{data.heading} <strong>{data.heading_ex}</strong>
								</h1>
								<div dangerouslySetInnerHTML={{ __html: data.para }} />
							</div>
						</div>
						<div className="col col2">
							<div className="in_col">
								<OwlFolio owlData={data.block} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Folio;
