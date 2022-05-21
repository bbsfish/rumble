$(document).click(function(event) {
  if(!$(event.target).closest('#barger-menu-list').length && !$(event.target).closest('#barger-menu-btn').length) {
    // barger-menu-list, barger-menu-btn外をクリック
    if($("#barger-menu-btn").hasClass('active')) {
      // barger-menu-btn = active のとき
      $("#barger-menu-btn").removeClass('active');
      $("#barger-menu-list").removeClass('panelactive');
    }
  }
});

$("#barger-menu-btn").click(function () {
  // barger-menu-btn onClick
  $(this).toggleClass('active');
    $("#barger-menu-list").toggleClass('panelactive');
});

$("#barger-menu-list li a").click(function () {
  // ナビゲーションリンク onClick
  $("#barger-menu-btn").removeClass('active');
  $("#barger-menu-list").removeClass('panelactive');
});

$(function(){
  $('a[href^=#]').click(function() {
  var speed = 500; // スクロール速度(ミリ秒)
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
});