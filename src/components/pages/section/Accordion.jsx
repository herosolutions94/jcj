import React from "react";
import FaqBlk from "../../common/FaqBlk";

function Accordion({ data }) {
	return (
		<>
			<section id="faq">
				<div className="contain">
					<h6>{data.heading_01}</h6>
					<div className="faq_lst">
						{data.block_01.map((val) => {
							// const { id } = val;
							return <FaqBlk key={val.id} {...val} />;
						})}
					</div>
					<h6>{data.heading_02}</h6>
					<div className="faq_lst">
						{data.block_02.map((val) => {
							// const { id } = val;
							return <FaqBlk key={val.id} {...val} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Accordion;
