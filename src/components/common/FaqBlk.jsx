import React, { useState } from "react";

function FaqBlk({ question, answer }) {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className={show ? "faq_blk active" : "faq_blk"}>
				<h5 className="fancy" onClick={() => setShow(!show)}>
					{question}
				</h5>
				{show && (
					<div className="txt">
						<div dangerouslySetInnerHTML={{ __html: answer }} />
					</div>
				)}
			</div>
		</>
	);
}

export default FaqBlk;
