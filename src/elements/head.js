const { html } = require('uhtml-ssr');

module.exports = (pageTitle, pageDescription) => {
	pageTitle = pageTitle ?? process.env.APP_NAME;
	pageDescription = pageDescription ?? process.env.APP_DESCRIPTION;
	
	return html`<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>${pageTitle}</title>
		<meta name="description" content="${pageDescription}">
		<meta name="keywords" content="conlanging, dictionary, dictionaries, lexicon, conlangs, constructed languages, glossopoeia, builder, app, tool">

		<meta property="og:url" content="https://${process.env.APP_DOMAIN}/">
		<meta property="og:type" content="website">
		<meta property="og:title" content="${pageTitle}">
		<meta property="og:description" content="${pageDescription}">
		<meta property="og:image" content="images/social.jpg">

		<meta name="twitter:card" content="summary">
		<meta name="twitter:image:alt" content="${process.env.APP_NAME} logo">

		<link rel="icon" href="images/favicon.png" type="image/x-icon">

		<link rel="manifest" href="manifest.webmanifest">
		<meta name="theme-color" content="#000000">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="apple-mobile-web-app-title" content="${process.env.APP_NAME}">
		<link rel="apple-touch-icon" href="images/icon-152.png">

		<link rel="stylesheet" href="styles.css">
		<!-- {{imported_from_http}} -->
		<script src="lexiconga.js"></script>
	</head>`;
};
