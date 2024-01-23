import React, { useState } from "react";

function Newsletter() {
	const [formValue, setFormValue] = useState({
		email: "",
	});
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormValue({ ...formValue, [name]: value });
	};
	return (
		<>
			<div className="subscribe">
				<span className="fancy">Subscribe to keep update on new products, offers and more.</span>
				<form action="" method="POST" onSubmit={handleInput}>
					<input type="text" name="email" id="email" value={formValue.email} onChange={handleInput} className="input" placeholder="Enter Email Address" />
					<button type="submit">
						<img src="/images/icon-send.svg" alt="" />
					</button>
				</form>
			</div>
		</>
	);
}

export default Newsletter;
