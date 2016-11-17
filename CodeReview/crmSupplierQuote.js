/*
  又到了小朋们最喜爱的 CodeReview 环节😂

*/

/*
  crmSupplierQuote-list.html 页面
*/

/*
  remove 去掉在执行 add() 后插入的对应 id 的 tr
  这里按理来说应该添加 break ，提升代码效率
  只要不像测试时候，重置 is_delete 标记，前后多次添加同个产品报价
  同个供应商每条报价对应唯一的产品
*/
function removeHtml(_id) {
  $("#tr_prod" + _id).remove();
  for(var i = 0; i < prod_has_list.length; i++ ) {
    if(prod_has_list[i] == _id) {
      prod_has_list.splice(i, 1);
      break;
    }
  }
}

/*
  关于批量删除，在下面列举所有情况
  A.length = 0 {
    B.length = 0 {
      提示：请先勾选...
    } else ( B.length > 0 ) {

    }
  }
*/

/*
  crmSupplierQuote-add-modal.html 页面
*/

/*
  在执行 page (分页)加载时，需要调用下列该函数：
  根据全局数组 add_checked_list 判断之前是否有勾选产品
  若有，设置 "checked" 伪类与 "checked" 属性，让其显示 "checked" 勾选状态

  后记：
      review时候发现一个错误
      勾选显示有问题，console.log 下数组 add_checked_list 没有问题
      原因是 add_checked_list 格式被改过了
      解决办法就是将 add_checked_list[j] 改为👉 add_checked_list[j].id
*/

function add_checked_judge() {
  var list = $('input[name="prod_choosen"]');
  for(var i = 0; i < list.length; i++) {
    for(var j = 0; j < add_checked_list.length; j++) {
      if(parseInt($(list[i]).val()) == add_checked_list[j].id) {
        $(list[i]).attr("checked", "checked");
        // 设置DOM的伪类pseudo-class
        $(list[i]).toggleClass("checked");
        break;
      }
    }
  }
}

/*
  也是在执行 page (分页)加载时，需要调用下列语句：
  $("#cqpIds").val(get_prod_has_str());
  其中 get_prod_has_str() 会去遍历数组 prod_has_list
  成生并返回一个形如 "13, 16, 18" 包含产品id的字符串
  用来在 Dao 中筛除相应 id 的产品
*/