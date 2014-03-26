$(document).ready(function(){

	var e='<div id="bg-arlert-pop-up-ie"><div id="pop-arlert-pop-up-ie"><div id="cont-arlert-pop-up-ie"><div id="cerrar-arlert-pop-up-ie"><a href="#">X</a></div><h2>Importante</h2><p><b>La versi&oacute;n de su navegador de Internet no est&aacute; actualizada.</b><br>Para tener una mejor experiencia recomendamos actualizarlo a la versi&oacute;n m&aacute;s reciente, presionando el enlace del navegador de su preferencia:</p><div id="menu-update-arlert-pop-up-ie"><a id="update-arlert-pop-up-ie" class="ie" title="internet Explorer" href="http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/"></a><a id="update-arlert-pop-up-ie" class="ch" title="Google Chrome" href="https://www.google.com/intl/en/chrome/browser/"></a><a id="update-arlert-pop-up-ie" class="mz" title="Firefox" href="http://www.mozilla.org/es/firefox/new/"></a></div></div></div></div>';
		$("body").prepend(e);
		$("#bg-arlert-pop-up-ie").hide();
		$("#cerrar-arlert-pop-up-ie").click(function(){
		$("#bg-arlert-pop-up-ie").fadeOut("slow")});
		var d=navigator.userAgent.toLowerCase();

		jQuery.browser={version:(d.match(/.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/)||[])[1],
			chrome:/chrome/.test(d),
			safari:/webkit/.test(d)&&!/chrome/.test(d),
			opera:/opera/.test(d),
			msie:/msie/.test(d)&&!/opera/.test(d),
			mozilla:/mozilla/.test(d)&&!/(compatible|webkit)/.test(d)
		};

		jQuery.each(jQuery.browser,function(b,a){
			if(b=="msie"&&jQuery.browser.version.substr(0,3)=="8.0"){f(); cont();}
			if(b=="msie"&&jQuery.browser.version.substr(0,3)=="7.0"){f(); cont();}if(b=="msie"&&jQuery.browser.version.substr(0,3)=="6.0"){f()}
		});

		function f(){$("#bg-arlert-pop-up-ie").fadeIn("slow")}
 		function cont(){
 			var i = 0;
  			$("body").click(function(){i++; if(i == 8){
  				f()
  				i = 0;
  			}});
 		}
 	});
		