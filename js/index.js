$(function () {
  
  /*首页轮播图*/
  new Swiper('#homeBanner', {
    pagination         : '#homeBannerPagination',
    // autoplay           : 5000,
    paginationClickable: false,
    loop               : false
  });
  /*电子证书轮播图*/
  new Swiper('#bookSwiper', {
    pagination         : '#bookSwiperPagination',
    // autoplay           : 5000,
    paginationClickable: false,
    loop               : false
  });
  
  tabs($('.tab-btns > a'), $('.tab-content >div'), 'active');
  scrollToggleNav($('#menu a'), 'actived');
  //预约看房日期选择
  var calendar = new LCalendar();
  calendar.init({
    'trigger': '#dateTime',//标签id
    'type'   : 'date',//date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择
    // 'minDate': new Date().toLocaleDateString().replace(/\//g, '-'),//最小日期 注意：该值会覆盖标签内定义的日期范围
  });
  
  //获取预约记录
  $.get('https://hd.zdb.im/v2/view/randUserList', function (response) {
    var $userHistoryNode     = $('.yuyue .user-history');
    var $userHistoryListNode = $userHistoryNode.children()[0];
    
    response.data.forEach(function (item) {
      var random = parseInt(Math.random() * 24) + 1;
      $userHistoryListNode.innerHTML += '<p>\n' +
        '          <span>' + item.true_name + '**' + '</span>\n' +
        '          <span>' + item.mobile + '</span>\n' +
        '          <span>'+random+'小时前</span>\n' +
        '        </p>';
    });
    scroll($userHistoryNode[0], $userHistoryListNode.children[0].offsetHeight);
  });
  
});

function tabs($btns, $contents, activeClass) {
  $btns.click(clickFn);
  $btns.eq(0).click();
  
  function clickFn() {
    $btns.removeClass(activeClass);
    $contents.hide();
    $contents.eq($(this).addClass(activeClass).index()).show();
  }
}

//文字滚动
function scroll(node, lineHeight) {
  if (node.scrollHeight > node.clientHeight) {
    node.appendChild(node.children[0].cloneNode(true));
  }
  
  var lineHeight = lineHeight || parseInt(window.getComputedStyle(node, null).lineHeight);
  // var tid        = null;
  var stop       = true;
  
  function step(timestamp) {
    var tid = requestAnimationFrame(step);
    if (node.scrollHeight <= node.clientHeight) {
      return false;
    }
    var scrollSpace = node.scrollHeight / 2;
    var st          = node.scrollTop;
    if (st + 2 >= scrollSpace) {
      node.appendChild(node.children[0]);
      node.scrollTop = 0;
    }
    else {
      if (st % lineHeight == 0 && st != 0) {
        cancelAnimationFrame(tid);
        
        setTimeout(function () {
          node.scrollTop = st + 1;
          step();
        }, 3000);
        
      }
      else {
        node.scrollTop = st + 1;
      }
    }
  }
  
  requestAnimationFrame(step);
}

function scrollToggleNav($links, activeClass) {
  $links.click(function () {
    $links.removeClass(activeClass);
    $(this).addClass(activeClass);
  });
  
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    
    for (var i = $links.length - 1; i > -1; i--) {
      var $currentLink = $links.eq(i);
      var href         = $currentLink.attr('href');
      if (scrollTop + 50 >= $(href)[0].offsetTop) {
        if (i > 0) {
          $currentLink.parent().css({display: 'flex'});
        }
        else {
          $currentLink.parent().hide();
        }
        if (!$currentLink.hasClass(activeClass)) {
          var offsetLeft = $currentLink.click()[0].offsetLeft;
          // console.log(position)
          $currentLink.parent().scrollLeft(offsetLeft);
        }
        break;
      }
    }
  });
}