import React, { useState } from "react";
import { postData, checkPattern, getSiteImages } from '../../helpers/api';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import Button from "./Button";

function ContactForm({ formData }) {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		comments: ''
	});
	function onSubmit() {

		if (contact.name_error === true || contact.name === '') {
			setContact({ ...contact, name_error: true, name_msg: "Required" });
		}
		else if (contact.phone_error === true || contact.phone === '') {
			setContact({ ...contact, phone_error: true, phone_msg: "Enter a valid phone number" });
		}
		else if (contact.subject_error === true || contact.subject === '') {
			setContact({ ...contact, subject_error: true, subject_msg: "Required" });
		}
		else if (contact.email_error === true || contact.email === '') {
			setContact({ ...contact, email_error: true, email_error_msg: "Enter a valid email address" });
		}

		else if (contact.comment_error === true || contact.comments === '') {
			setContact({ ...contact, comment_error: true, comment_msg: "Required" });
		}

		else {
			setContact({ ...contact, btn_loading: true });
			var form_data = new FormData();

			for (var key in contact) {
				form_data.append(key, contact[key]);
			}
			postData("contact", form_data).then((data) => {
				if (data.status == 1) {
					// document.getElementById("frmContact").reset();
					setContact({ ...contact, btn_loading: false, email: "", name: '', phone: '', comments: '', subject: '' });
					toast.success(`${data.msg}`, {
						position: "top-right",
						autoClose: 1000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
				else {
					setContact({ ...contact, btn_loading: false });
					toast.error(`${data.msg}`, {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			});
		}
	}
	function handleContactChange(e) {
		if (e.target.name === 'name') {
			if (e.target.value === "") {
				setContact({ ...contact, [e.target.name]: e.target.value, name_error: true, name_msg: "Required" });
			}
			else {
				setContact({ ...contact, [e.target.name]: e.target.value, name_error: false, name_msg: "" });
			}
		}
		if (e.target.name === 'subject') {
			if (e.target.value === "") {
				setContact({ ...contact, [e.target.name]: e.target.value, subject_error: true, subject_msg: "Required" });
			}
			else {
				setContact({ ...contact, [e.target.name]: e.target.value, subject_error: false, subject_msg: "" });
			}
		}
		if (e.target.name === 'phone') {
			if (e.target.value === "") {
				setContact({ ...contact, [e.target.name]: e.target.value, phone_error: true, phone_msg: "Required" });
			}
			else {
				if (e.target.value != null || e.target.value != 'null') {
					let mobile_chk = checkPattern(e.target.value, /^[0-9-]+$/);
					if (mobile_chk === false) {
						setContact({ ...contact, [e.target.name]: e.target.value, phone_error: true, phone_msg: "Invalid phone number" });
					}
					else {
						setContact({ ...contact, [e.target.name]: e.target.value, phone_error: false, phone_msg: "" });
					}
				}

			}
		}
		if (e.target.name === 'email') {

			let email_chk = checkPattern(e.target.value, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);

			if (email_chk === false) {
				if (e.target.value === '') {
					setContact({ ...contact, email_error: false });
				}
				else {
					setContact({ ...contact, [e.target.name]: e.target.value, email_error: true, email_error_msg: "Invalid e-mail address" });
				}

			}
			else {
				setContact({ ...contact, [e.target.name]: e.target.value, email_error: false, email_error_msg: "" });
			}

		}
		if (e.target.name === 'comments') {
			if (e.target.value === "") {
				setContact({ ...contact, [e.target.name]: e.target.value, comment_error: true, comment_msg: "Required" });
			}
			else {
				setContact({ ...contact, [e.target.name]: e.target.value, comment_error: false, comment_msg: "" });
			}
		}
	}

	return (
		<>
			<ToastContainer />
			<form method="post" onSubmit={handleSubmit(onSubmit)}>
				<h3 className="heading fancy text-center">{formData.heading}</h3>
				<div className="form_row row">
					<div className="col-sm-6">
						<h6 className="require">Name</h6>
						<div className="form_blk">
							<input type="text" name="name" id="name" defaultValue={contact.name} onChange={handleContactChange} className="input" />
							{
								(contact.name_error === true) ?
									<div className="error">
										<img src={getSiteImages('/images/warning.png')} alt="warning" /> {contact.name_msg}
									</div>
									:
									""

							}
						</div>
					</div>
					<div className="col-sm-6">
						<h6>Phone</h6>
						<div className="form_blk">
							<input type="text" name="phone" id="phone" defaultValue={contact.phone} onChange={handleContactChange} className="input" />
							{
								(contact.phone_error === true) ?
									<div className="error">
										<img src={getSiteImages('/images/warning.png')} alt="warning" /> {contact.phone_msg}
									</div>
									:
									""

							}

						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Subject</h6>
						<div className="form_blk">
							<input type="text" name="subject" id="subject" defaultValue={contact.subject} onChange={handleContactChange} className="input" />
							{
								(contact.subject_error === true) ?
									<div className="error">
										<img src={getSiteImages('/images/warning.png')} alt="warning" /> {contact.subject_msg}
									</div>
									:
									""

							}
						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Email Address</h6>
						<div className="form_blk">
							<input type="text" name="email" id="email" defaultValue={contact.email} onChange={handleContactChange} className="input" />
							{
								(contact.email_error === true) ?
									<div className="error">
										<img src={getSiteImages('/images/warning.png')} alt="warning" /> {contact.email_error_msg}
									</div>
									:
									""

							}
						</div>
					</div>
					<div className="col-sm-12">
						<h6>Please describe your situation</h6>
						<div className="form_blk">
							<textarea name="comments" id="comments" defaultValue={contact.comments} onChange={handleContactChange} className="input" placeholder="Type something here"></textarea>
							{
								(contact.comment_error === true) ?
									<div className="error">
										<img src={getSiteImages('/images/warning.png')} alt="warning" /> {contact.comment_msg}
									</div>
									:
									""

							}
						</div>
					</div>
				</div>
				<div className="btn_blk form_btn text-center">
					<Button className="long" text={contact?.btn_loading ? <i className="spinner"></i> : formData.btn} size="lg" type="submit" disabled={(contact.btn_loading === true) ? 'disabled' : ''}></Button>
				</div>
			</form>
		</>
	);
}

export default ContactForm;
