import React from "react";
import { getSiteImages } from "../../helpers/api";
// import { Link } from "react-router-dom";

function SocialLinks(site_settings) {
	return (
		<>
			<ul className="social_links">
				{
					site_settings.site_settings.site_facebook != '' ?
						<li>
							<a href={site_settings.site_settings.site_facebook} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-facebook.svg")} alt={site_settings.site_settings.site_facebook} />
							</a>
						</li>
						:
						""
				}
				{
					site_settings.site_settings.site_instagram != '' ?
						<li>
							<a href={site_settings.site_settings.site_instagram} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-instagram.svg")} alt={site_settings.site_settings.site_instagram} />
							</a>
						</li>
						:
						""
				}
				{
					site_settings.site_settings.site_youtube != '' ?
						<li>
							<a href={site_settings.site_settings.site_youtube} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-youtube.svg")} alt={site_settings.site_settings.site_youtube} />
							</a>
						</li>
						:
						""
				}
				{
					site_settings.site_settings.site_twitter != '' ?
						<li>
							<a href={site_settings.site_settings.site_twitter} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-twitter.svg")} alt={site_settings.site_settings.site_twitter} />
							</a>
						</li>
						:
						""
				}
			</ul>
		</>
	);
}

export default SocialLinks;
