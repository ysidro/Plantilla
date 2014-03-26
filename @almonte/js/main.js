
/*Template Version-0.1.4 ||||\\\|////|||| 5-Mar-2014 by @almonte_y For www.axesadigital.com/ */


//Cambiar a False cuando sea un WS1
var eventShow = true;
var map = 'tu mapa';/* colocar iframe aqui */
var gallery =  gallery();

  function map(){
    $("#mapa").empty().prepend(map)
  }
  function show(){
     
      var nav = $(".nav li a");
      $("#pag-1").fadeIn();
      
      nav.click(function(){
          var a = $(this);
          activeNav(a);
          navPage(a.attr("href"));
      });

      function activeNav(a){
          $(a).parent()
              .addClass("active")
              .siblings()
              .removeClass("active");
      }

      function navPage(a){
          $(a).fadeIn("slow")
              .siblings("div.tap-panel")
              .hide();
      }
        //end event click
        gallery
  }
//Funcion de la galeria
function gallery(){
  $(function(){
        $('#gallery a').lightBox({ 
          imageLoading:         'img/lightbox/lightbox-ico-loading.gif', 
          imageBtnPrev:         'img/lightbox/lightbox-btn-prev.gif',  
          imageBtnNext:         'img/lightbox/lightbox-btn-next.gif',    
          imageBtnClose:        'img/lightbox/lightbox-btn-close.gif', 
          imageBlank:           'img/lightbox/lightbox-blank.gif',    
          fixedNavigation:      false,   
          containerResizeSpeed: 400, 
          overlayBgColor:       "#999999",
          overlayOpacity:       .6, 
          txtImage:             'Image',
          txtOf:                'of'
        });
      });
}
//Function para que el "placeholder" functione en exploradores viejos
(function($) {
  $.fn.placeholder = function() {
    if(typeof document.createElement("input").placeholder == 'undefined') {
      $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
        }
      }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
      })
    });
  }
}
})(jQuery);
//Fin de la funcion

  if(eventShow){
    show();
  }else{
    $("div#home").fadeIn("slow");
      gallery;
  }
