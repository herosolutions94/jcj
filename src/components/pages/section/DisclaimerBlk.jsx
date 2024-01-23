import React from "react";

function DisclaimerBlk(data) {
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

export default DisclaimerBlk;
