import React from "react";
import ReactStars from "react-rating-stars-component";

function ReviewBlk({ dp, name, para, ratings }) {
	// const { dp, name, para, date } = val;
	return (
		<>
			<div className="review">
				<div className="ico fill">
					<img src={dp} alt={name} />
				</div>
				<div className="txt">
					<div className="ico_txt">
						<div className="title">
							<h6>{name}</h6>
							<div className="rating">
								{/* <i className="star"></i>
								<i className="star"></i>
								<i className="star"></i>
								<i className="star"></i>
								<i className="star"></i> */}
								<ReactStars
									count={5}
									value={parseFloat(ratings)}
									size={14}
									activeColor="#ffd700"
									edit={false}
								/>
							</div>
						</div>
						{/* <div className="date">{date}</div> */}
					</div>
					<div dangerouslySetInnerHTML={{ __html: para }} />
				</div>
			</div>
		</>
	);
}

export default ReviewBlk;
