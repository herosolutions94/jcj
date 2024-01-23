import React from "react";

function TermsConditionsBlk(data) {
	return (
		<>
			<section id="terms">
				<div className="contain sm">
					<div className="blk ck_editor">
						<div dangerouslySetInnerHTML={{ __html: data.data }} />
					</div>
				</div>
			</section>
		</>
	);
}

export default TermsConditionsBlk;
