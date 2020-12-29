//手机号正则
var phoneReg    = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
//姓名正则
var nameReg     = /^[\u4E00-\u9FA5]{2,4}$/;
//时间正则
var dateReg     = /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/;

window.siteId   = parseInt("25");
window.siteName = "湛江-鼎龙湾";
//获取底价
function goDijia() {
  openDialog('咨询成交底价', '一键查询售楼处最新成底价', '(查询结果将以短信形式发送至手机)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 咨询成交底价'}, null, true);
  });
}

//发送定位
function goLocation() {
  openDialog('获取定位', '', '(楼盘详细位置将以短信发送至手机，请注意查收)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 发送定位'}, null, true);
  });
}

//免费专车接送看房
function goZhuanche() {
  openDialog('免费专车接送看房', '', '(查询结果将以短信形式发送至手机)', '立即申请', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 免费专车接送看房'}, null, true);
  });
}

//获取实时房源
function goSource() {
  openDialog('获取实时房源', '', '(查询结果将以短信形式发送至手机)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 获取实时房源'}, null, true);
  });
}

/**
 * 在线计价
 * @param data 房源数据
 */
function goCompute(data = {}) {
  openDialog('在线计价', '', '(查询结果将以短信形式发送至手机)', '立即计算', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 在线计价'}, null, true);
  });
}

//特价房源
function goTejia() {
  openDialog('特价房源', '', '(查询结果将以短信形式发送至手机)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 特价房源'}, null, true);
  });
}

//申请远程看房
function goLiveRoom() {
  openDialog('申请远程看房', '', '(查询结果将以短信形式发送至手机)', '立即申请', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 申请远程看房'}, null, true);
  });
}

//获取电子楼书及发送报价
function goBook() {
  openDialog('获取电子楼书及发送报价', '', '(查询结果将以短信形式发送至手机)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 获取电子楼书及发送报价'}, null, true);
  });
}

//立即预约看房
function goYuyue() {
  var $form = $('#yuyue');
  
  if (!phoneReg.test($form[0]['phone'].value)) {
    alert('请输入格式正确的手机号码');
    return false;
  }
  else if (!dateReg.test($form[0]['date'].value)) {
    alert('请输入格式正确的日期');
    return false;
  }
  else {
    //todo 立即预约看房
    submitForm({entrance: window.siteName + ' 立即预约看房'}, 'yuyue', true);
  }
}

//百问百答
function goAsk() {
  var $form = $('#ask');
  
  if (!phoneReg.test($form[0]['phone'].value)) {
    alert('请输入格式正确的手机号码');
    return false;
  }
  else if ($form[0]['consult'].value == '') {
    alert('请输入问题');
    return false;
  }
  else {
    //todo 百问百答接口
    submitForm({entrance: window.siteName + ' 百问百答'}, 'ask', true);
  }
}

//查看更多动态
function goNews() {
  openDialog('查看更多动态', '', '(查询结果将以短信形式发送至手机)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 查看更多动态'}, null, true);
  });
}
//一键订阅
function goDescribe() {
  openDialog('一键订阅', '', '(查询结果将以短信形式发送至手机)', '立即订阅', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 一键订阅'}, null, true);
  });
}
//业主论坛查看全部
function goFornumAll() {
  openDialog('查看全部', '', '(查询结果将以短信形式发送至手机)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 业主论坛查看全部'}, null, true);
  });
}
//业主论坛评论
function goFornumComment() {
  openLayerComment('我要评论', '立即评论', function (phone, comment) {
    //todo 调用业主论坛评论接口
    submitForm({ phone: phone, entrance: window.siteName + ' 业主论坛立即评论', consult: comment}, null);
  });
}
//业主微信群
function goJoin() {
  openDialog('加入业主微信群', '', '(查询结果将以短信形式发送至手机)', '立即加入', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 加入业主微信群'}, null, true);
  });
}

//楼盘证书
function goZhenshu() {
  openDialog('查看项目五证高清图片', '', '(查询结果将以短信形式发送至手机)', '立即获取', function (phone) {
    submitForm({phone: phone, entrance: window.siteName + ' 查看楼盘证书'}, null, true);
  });
}
if ("undefined" !== typeof window.sessionStorage) {
  if (null === window.sessionStorage.getItem('referrer_' + window.siteId)) {
    window.sessionStorage.setItem('referrer_' + window.siteId, window.document.referrer);
  }
}

function getReferrer() {
  if ("undefined" !== typeof window.sessionStorage) {
    if (null !== window.sessionStorage.getItem('referrer_' + window.siteId)) {
      window.sessionStorage.getItem('referrer_' + window.siteId);
    }
  }
  return window.document.referrer;
}
function submitForm(baseForm, formId, slient) {
  
  var callbackAfterAjax = $(this).attr('callback');
  var hideAfterAjax     = $(this).attr('hideAfterAjax');
  
  var json = Object.assign({
    siteId   : window.siteId,
    userAgent: window.navigator.userAgent,
    referrer : getReferrer(),
  }, baseForm);
  
  if (formId) {
    var f = $('#' + formId);
    
    f.serializeArray().map(function (obj, index) {
      var key   = obj.name;
      var value = obj.value;
      if (json[key] !== undefined) {
        if (!json[key].push) { //如果不是数组对象,就构造成数组对象
          json[key] = [json[key]];
        }
        json[key].push(value);
      }
      else {
        json[key] = value;
      }
    });
  }
  
  /*特殊注入:*/
  if (json['phone'] !== undefined) {
    /*大陆1开头,港澳00853,00852,澳门7,8,香港8位数*/
    if (json['phone'] === '') {
      alert("手机号不能为空！");
      return false;
    }
    if (!/^[1][3-9]\d{9}$|^[0][0][8][5][2|3][6|9]\d{6,7}$/.test(json['phone'])) {
      alert("手机号格式错误！");
      return false;
    }
  }
  json = JSON.stringify(json);
  
  $.ajax({
    url        : 'https://www.zhgoufang.cn/v2/form/addPhone',
    type       : 'POST',
    async      : true,
    cache      : false,
    contentType: 'application/json',
    context    : document.body,
    data       : json,
    traditional: false,//do not use jQuery.param function
    dataType   : 'json',//server response type
    error      : function (xhr, msg, err) {
      if (xhr.responseJSON && xhr.responseJSON.msg) {
        alert(xhr.responseJSON.msg);
      }
      else {
        alert('错误, 请重试');
      }
      hideAfterAjax && $('#' + hideAfterAjax).hide();
      window[callbackAfterAjax] && window[callbackAfterAjax]();
    },
    success    : function (res, statusCode) {
      if (!slient) {
        alert(res.msg);
      }
      hideAfterAjax && $('#' + hideAfterAjax).hide();
      window[callbackAfterAjax] && window[callbackAfterAjax]();
    }
  });
  
}

/**
 * 手机号录入弹出层
 * @param t1 弹出框标题1
 * @param t2 弹出框标题2
 * @param t3 弹出框标题3
 * @param btnText 弹出框按钮文本
 * @param callback 弹出框回掉方法(正确填写手机号码后触发)
 */
function openDialog(t1, t2, t3, btnText, callback) {
  var tmp = $('#dialogContent').html().replace('{{t1}}', t1).replace('{{t2}}', t2).replace('{{t3}}', t3);
  layer.open({
    content: tmp,
    btn    : [btnText, '关闭'],
    success: function () {
      $('input[name=layerPhone]')[0].focus();
    },
    cancel : function (index) {
      layer.close(index);
    },
    yes    : function (index) {
      var phone = $('input[name=layerPhone]').val();
      if (!phoneReg.test(phone)) {
        alert('手机号码格式不正确！');
      }
      //正确填写手机号码
      else {
        callback(phone);
        layer.close(index);
      }
    }
  });
}

/**
 * 评论弹出层
 * @param title 弹出框标题
 * @param btnText 弹出框按钮文本
 * @param callback 弹出框回掉方法
 */
function openLayerComment(title, btnText, callback) {
  layer.open({
    title  : title,
    content: '<form style="font-size: .3rem;"><input type="tel" id="layerCommentPhone" name="layerCommentPhone" style="width: 100%;height: .6rem;resize: none;margin-bottom: 5px" placeholder="请输入手机号码"><textarea id="layerComment" name="layerComment" style="width: 100%; height: 1.4rem; resize: none; margin-top: .2rem;" placeholder="请输入评论"></textarea></form>',
    btn    : [btnText, '关闭'],
    cancel : function (index) {
      layer.close(index);
    },
    success: function () {
      $('input[name=layerCommentPhone]')[0].focus();
    },
    yes    : function (index) {
      var layerCommentPhone = $('#layerCommentPhone').val();
      if (layerCommentPhone == '') {
        alert('请填写手机号码');
        return false;
      }
      var layerComment = $('#layerComment').val();
      // if (layerComment == '') {
      //   alert('请填写评论！');
      // }
      //正确填写手机号码
      callback(layerCommentPhone, layerComment);
      layer.close(index);
      
    }
  });
}

function openQRDialog(imgSrc) {
  layer.open({
    content: '<img width="100%" src="' + imgSrc + '" />',
    btn    : ['关闭'],
    cancel : function (index) {
      layer.close(index);
    },
  });
}