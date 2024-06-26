
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
export default {
	title: "Homostellaris notes",
	description: "The digital garden of Daniel Metcalfe (aka Homostellaris)",
	author: "Daniel Tariq Metcalfe",
	domain: "https://homostellaris.io/",
	showSidebar: true,
	analyticsConfig: {
		plausibleAnalytics: {
			plausibleDataDomain: "notes.homostellaris.io",
		}
	},
  navLinks: [
    { href: "/about", name: "About" },
    { href: "/blog", name: "Blog" },
    { href: "/_all", name: "All" }
  ],
};
