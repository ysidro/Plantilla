/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-axehome': '&#xe600;',
		'icon-axepencil': '&#xe601;',
		'icon-axenewspaper': '&#xe602;',
		'icon-axeplay': '&#xe603;',
		'icon-axeimage': '&#xe604;',
		'icon-axebooks': '&#xe605;',
		'icon-axetags': '&#xe606;',
		'icon-axecredit': '&#xe607;',
		'icon-axephone': '&#xe608;',
		'icon-axeaddress-book': '&#xe609;',
		'icon-axelocation': '&#xe60a;',
		'icon-axeclock': '&#xe60b;',
		'icon-axealarm': '&#xe60c;',
		'icon-axecog': '&#xe60d;',
		'icon-axeattachment': '&#xe60e;',
		'icon-axewarning': '&#xe60f;',
		'icon-axehtml5': '&#xe610;',
		'icon-axecss3': '&#xe611;',
		'icon-axechrome': '&#xe612;',
		'icon-axefirefox': '&#xe613;',
		'icon-axeIE': '&#xe614;',
		'icon-axeopera': '&#xe615;',
		'icon-axesafari': '&#xe616;',
		'icon-axenotification': '&#xe617;',
		'icon-axecancel-circle': '&#xe618;',
		'icon-axecheckmark-circle': '&#xe619;',
		'icon-axespam': '&#xe61a;',
		'icon-axeenvelope': '&#xe61b;',
		'icon-axelocation2': '&#xe61c;',
		'icon-axecoin': '&#xe61d;',
		'icon-axebook': '&#xe61e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-axe[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
