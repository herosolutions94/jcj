import React from "react";

function VideoPopup(props) {
	return (
		<>
			<section className="popup lg" style={{ display: "block" }}>
				<div className="table_dv">
					<div className="table_cell">
						<div className="contain">
							<div className="_inner">
								<button type="button" className="x_btn" onClick={props.close}></button>
								<h4>Lorem ipsum dolor sit amet consectetur.</h4>
								<div id="vid_blk" className="vid_blk">
									<iframe src="https://www.youtube.com/embed/X_zf0n0PC-w?autoplay=1&loop=1&rel=0&wmode=transparent&modestbranding=1" allow="autoplay;" frameBorder="0" wmode="Opaque" title="Video"></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default VideoPopup;
