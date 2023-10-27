$(document).ready(function() {
  var showChar = 150;
  var ellipsestext = "...";
  var moretext = "Ver Mais";
  var lesstext = "Ver Menos";


  $('.sinopse p').each(function() {
      var content = $(this).html();
      var $legenda = $(this).siblings(":last")
      if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
          var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent" style="display: none;"><span>' + h + '<br></br>' + $legenda.html() + '</span></span>';
          var button = '<br><a href="#" class="morelink">' + moretext + '</a>';
          $(this).html(html + button);
      }
  });

  $(".morelink").click(function() {
      var $content = $(this).prev().prev();
      var $ellipses = $('.moreellipses')
      if ($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
      }
      $content.toggle();
      $(this).siblings()[0].classList.toggle("d-none")



      return false;
  });
});
