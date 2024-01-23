import React from "react";

function Assets(props) {
	const { data } = props;
	return (
		<>
			<section id="assets" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_blk">
						<div className="content text-center">
							<p>{data.para}</p>
							<h1 className="heading fancy">{data.heading}</h1>
							<button type="button" className="play_btn" onClick={props.show}>
								<img src={data.btn_img_src} alt={data.heading} />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Assets;
