import React from "react";
import { short_text } from "../../../helpers/api";
import ContactForm from "../../common/ContactForm";
import Image from "../../common/Image";

function ContactUs({ data }) {
	return (
		<>
			<section id="contact">
				<div className="contain sm">
					<div className="content text-center">
						<h3 className="heading fancy">
							{data.heading_01} <strong>{data.heading_ex_01}</strong>
						</h3>
					</div>
					<div className="info_row flex_row text-center">
						{data.info_blk.map((val, index) => {
							return (
								<div className="col" key={val.id}>
									<div className="inner">
										<div className="icon">
											<Image src={val.icon} alt={short_text(val.text)} />
										</div>
										<div className="txt">
											<h6>{val.title}</h6>
											<a href={(index == 0 ? (('tel:' + val.text)) : ((index == 1) ? 'mailto:' + val.text : 'javascript:void(0)'))}>{val.text}</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="br"></div>
					<div className="br"></div>
					<ContactForm formData={data.form} />
				</div>
			</section>
		</>
	);
}

export default ContactUs;
