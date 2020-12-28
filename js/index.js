/*首页轮播图*/
new Swiper('#homeBanner', {
  pagination         : '#homeBannerPagination',
  // autoplay           : 5000,
  paginationClickable: false,
  loop               : false
});

tabs($('.tab-btns > a'), $('.tab-content >div'), 'active');

//预约看房日期选择
var calendar = new LCalendar();
calendar.init({
  'trigger': '#dateTime',//标签id
  'type'   : 'date',//date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择
  // 'minDate': new Date().toLocaleDateString().replace(/\//g, '-'),//最小日期 注意：该值会覆盖标签内定义的日期范围
});

function tabs($btns, $contents, activeClass){
  $btns.click(clickFn);
  $btns.eq(0).click();
  
  function clickFn(){
    $btns.removeClass(activeClass);
    $contents.hide();
    $contents.eq($(this).addClass(activeClass).index()).show();
  }
}