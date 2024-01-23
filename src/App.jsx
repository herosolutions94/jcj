import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ServiceDetail from "./components/pages/ServiceDetail";
import Reviews from "./components/pages/Reviews";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Disclaimer from "./components/pages/Disclaimer";
import TermsConditions from "./components/pages/TermsConditions";
import Error from "./components/pages/Error";

import VideoPopup from "./components/pages/popup/Video";

function App() {
	const [state, setState] = useState({
		VideoPopup: false,
	});
	const showVideoPopup = () => {
		setState({ ...state, VideoPopup: true });
	};
	const closeVideoPopup = () => {
		setState({ ...state, VideoPopup: false });
	};
	const PageLayout = () => (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route element={<PageLayout />}>
						<Route exact path="/" element={<Home popup={showVideoPopup} />} />
						<Route exact path="/home" element={<Home popup={showVideoPopup} />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/service/:number/:slug" element={<ServiceDetail />} />
						<Route exact path="/reviews" element={<Reviews />} />
						<Route exact path="/contact" element={<Contact />} />
						{/* <Route exact path="/faq" element={<Faq />} /> */}
						<Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
						{/* <Route exact path="/disclaimer" element={<Disclaimer />} /> */}
						{/* <Route exact path="/terms-conditions" element={<TermsConditions />} /> */}
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
				{state.VideoPopup === true ? <VideoPopup close={closeVideoPopup} /> : ""}
			</BrowserRouter>
		</>
	);
}

export default App;
