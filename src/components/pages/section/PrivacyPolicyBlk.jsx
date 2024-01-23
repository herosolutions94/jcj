import React from "react";

function PrivacyPolicyBlk(data) {
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

export default PrivacyPolicyBlk;
