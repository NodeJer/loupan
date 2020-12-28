/*首页轮播图*/
new Swiper('#homeBanner', {
  pagination         : '#homeBannerPagination',
  // autoplay           : 5000,
  paginationClickable: false,
  loop               : false
});

tabs($('.tab-btns > a'), $('.tab-content >div'), 'active');

function tabs($btns, $contents, activeClass){
  $btns.click(clickFn);
  $btns.eq(0).click();
  
  function clickFn(){
    $btns.removeClass(activeClass);
    $contents.hide();
    $contents.eq($(this).addClass(activeClass).index()).show();
  }
}