$(function(){
    login_frame = '<div id="login_frame"><p id="image_logo">代理商管理</p><form><p><label class="label_input">商品名称</label><input type="text" id="username" class="text_field form1" /></p><p><label class="label_input">代理商名称</label><input type="text" id="password" class="text_field form2" /></p><p><label class="label_input">联系方式</label><input type="text" id="username" class="text_field form3" /></p><p><label class="label_input">数量</label><input type="text" id="username" class="text_field form4" /></p><p><label class="label_input">商品价值</label><input type="text" id="username" class="text_field form5" /></p><p><label class="label_input">出库时间</label><input type="text" id="username" class="text_field form6" /></p><div id="login_control"><div class="btn_login" id="submit">提交</div><div class="btn_login cancel">取消</div></div></form></div>';

    $('#add_form').click(function(){
        $("#login").html(login_frame);
        $(".cancel").click(function(){
            $("#login_frame").remove();
        });
        $("#submit").click(function(){
            $("#table").append('<tbody><tr class="tr"></tr></tbody>');
            $(".tr").append('<td class="0"></td><td class="1"></td><td class="2"></td><td class="3"></td><td class="4"></td><td class="5"></td><td class="6"></td><td class="7"></td>');
            var forms = $("#table").children(':last-child').children(".tr");
            forms.children(".0").append('<input type="checkbox"></input>');
            forms.children(".1").append('<a href="#"></a>');
            forms.children(".2").append('<a href="#"></a>');
            forms.children(".3").append('<a href="#"></a>');
            forms.children(".5").append('<a href="#"></a>');
            forms.children(".6").append('<a href="#"></a>');
            forms.children(".7").append('<div class="am-btn-toolbar" id="am-btn-toolbar"></div>');
            forms.children(".7").children().append('<div class="am-btn-group am-btn-group-xs id="am-btn-group"></div>');
            forms.children(".7").children().children().append('<div class="am-btn am-btn-default am-btn-xs am-text-secondary alter"><span class="am-icon-pencil-square-o"></span> 编辑</div><div class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete"><span class="am-icon-trash-o"></span> 删除</div>');
            forms.children(".1").children().text($('.form1').val());
            forms.children(".2").children().text($('.form2').val());
            forms.children(".3").children().text($('.form3').val());
            forms.children(".4").text($('.form4').val());
            forms.children(".5").children().text($('.form5').val());
            forms.children(".6").children().text($('.form6').val());
            $("#login_frame").remove();
            click_bind();
        });
    });

    function click_bind(){
        $(".alter").on('click',function(e){
            $("#login").html(login_frame);
            $(".cancel").click(function(){
                $("#login_frame").remove();
            });
            var a = $(e.target).parent().parent().parent().parent();
            var b = a.children(".1").children().text();
            var c = a.children(".2").children().text();
            var d = a.children(".3").children().text();
            var f = a.children(".4").text();
            var g = a.children(".5").children().text();
            var h = a.children(".6").children().text();
            $('.form1').val(b);
            $('.form2').val(c);
            $('.form3').val(d);
            $('.form4').val(f);
            $('.form5').val(g);
            $('.form6').val(h);
            $("#submit").click(function(){
                a.children(".1").children().text('1');
                a.children(".2").children().text($('.form2').val());
                a.children(".3").children().text($('.form3').val());
                a.children(".4").text($('.form4').val());
                a.children(".5").children().text($('.form5').val());
                a.children(".6").children().text($('.form6').val());
                $("#login_frame").remove();
            });
        });
        $(".delete").on('click', function(e){
            var command0 = confirm("请确认是否删除");
            if(command0) {
                $(e.target).parent().parent().parent().parent().parent().remove();
            }
        });
    }
    click_bind();

    var printf_information = $("#table");

    $('#form_print').click(function(){
        var command = confirm("请确认是否打印");
        if(command) {
            window.print(printf_information);
        }
    });
});



