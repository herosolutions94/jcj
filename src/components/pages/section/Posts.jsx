import React from "react";
import BlogBlock from "../../common/BlogBlock";
import Button from "../../common/Button";

function Posts(props) {
	const { Data } = props;
	const block = [
		{
			id: 1,
			title: Data.post_01.title,
			date: Data.post_01.date,
			src: Data.post_01.img_src,
			link: Data.post_01.link,
		},
		{
			id: 2,
			title: Data.post_02.title,
			date: Data.post_02.date,
			src: Data.post_02.img_src,
			link: Data.post_02.link,
		},
	];
	return (
		<>
			<section id="posts">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="title text-right">
								<h1 className="fancy">{Data.heading}</h1>
								<div className="btn_blk">
									<Button className="blank stroke round" text={Data.btn} size="lg"></Button>
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="in_col">
								<div className="flex_row sub_row">
									{block.map((val) => {
										return (
											<div className="col" key={val.id}>
												<BlogBlock postData={val} />
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Posts;
