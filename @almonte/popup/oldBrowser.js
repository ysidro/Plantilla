//   var URL = '<link href="css/popup.css" rel="stylesheet" type="text/css" />'
// $("head script:eq(0)").before(URL)


// $(document).ready(function(){

var html='<div id="bg-arlert-pop-up-ie">\
                <div id="pop-arlert-pop-up-ie">\
                  <div id="cont-arlert-pop-up-ie">\
                     <div id="cerrar-arlert-pop-up-ie"><a href="#"><img src="popup/images/x.png"></a></div>\
                       <h2>Importante</h2><p> La versi&oacute;n de su navegador de Internet no est&aacute; actualizada.<br>  Para tener una mejor experiencia de navegaci&oacute;n recomendamos actualizarlo a una versi&oacute;n m&aacute;s reciente, presionando el siguiente enlace:</p> <a id="update-arlert-pop-up-ie" href="http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/"><img  src="popup/images/btn.png" align="center"></a>\
                    </div>\
                </div>\
            </div>';


$("body").prepend(html)


   
   //Esconder el popup
   $("#bg-arlert-pop-up-ie").hide();


    //temporizador, para que no aparezca de golpe
   	// setTimeout("mostrar()",1500);

	//Función para cerrar el popup
   $("#cerrar-arlert-pop-up-ie").click(function (){
      $("#bg-arlert-pop-up-ie").fadeOut('slow');
   });

   var userAgent = navigator.userAgent.toLowerCase();
	jQuery.browser = {
    version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
    chrome: /chrome/.test( userAgent ),
    safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
    opera: /opera/.test( userAgent ),
    msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
    mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
	};

	jQuery.each(jQuery.browser, function(i, val) {
       
            if(i=="msie" && jQuery.browser.version.substr(0,3)=="9.0"){
            	mostrar();
            } 

            if(i=="msie" && jQuery.browser.version.substr(0,3)=="8.0"){
            	mostrar();
            } 
       
            if(i=="msie" && jQuery.browser.version.substr(0,3)=="7.0"){
            	mostrar();
            }
      
            if(i=="msie" && jQuery.browser.version.substr(0,3)=="6.0"){
            	mostrar();
            }
      
           
    });


    function mostrar() {
    
      $("#bg-arlert-pop-up-ie").fadeIn('slow');
    
    } //checkHover


// });