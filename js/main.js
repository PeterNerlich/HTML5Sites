// Win Phone viewport fix
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
        document.createTextNode(
            "@-ms-viewport{width:auto!important}"
        )
    );
    document.getElementsByTagName("head")[0].
        appendChild(msViewportStyle);
}

// Accessify
AccessifyHTML5({
	header:"body header",
	footer:"body footer"
});

document.addEventListener('DOMContentLoaded', function(event) {
cookieChoices.showCookieConsentBar('By using our website you agree to the placement of cookies on your computer.',
  'Close', 'Learn more...', 'https://www.iubenda.com/privacy-policy/388465');
});
