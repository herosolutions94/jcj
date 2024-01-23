import React from "react";
import Error404 from "../common/Error404";

function Error() {
	const error = {
		num: "404",
		title: "Page not found",
		para: "Let's pretend ..... !! You never saw that. Go back to the Homepage to find out more.",
		btn: "Back to the website",
		btn_link: "/",
	};
	return (
		<>
			<Error404 data={error} />
		</>
	);
}

export default Error;
