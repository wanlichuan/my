// JavaScript Document
function prompt_fun(a) {
    $(a).after("<div id='Layer1'></div>");
    if ($('body').height() > $(window).height()) {
        $('#Layer1').height($('body').height());
    } else {
        $('#Layer1').height($(window).height());
    }
    $('#Layer1').width($('body').width());
    $(a).css({
        left: ($('body').width() - $(a).width()) / 2,
        top: $(window).scrollTop() + ($(window).height() - $(a).height()) / 2
    });
    $('#Layer1').fadeTo("fast", 0.8);
    $(a).show();
    //$(a).fadeIn("slow"); 
    $('#Layer1').click(function() {
        close_prompt_fun(a);
    })
}
function close_prompt_fun(a) {
    //$(a).fadeOut("fast"); 
    $(a).hide();
    $('#Layer1').fadeOut("slow", function() {
        $('#Layer1').remove();
    });
}
function Vertical_scrollFun(a) {
    a.jscroll({
        W: "7px",
        BgUrl: "url(/images/scroll.gif)"//,Bg:"#eee"
        ,
        Bar: {
            Bd: {
                Out: "#373737",
                Hover: "#373737"
            },
            Bg: {
                Out: "-7px center repeat-y",
                Hover: "-7px center repeat-y",
                Focus: "-7px center repeat-y"
            }
        },
        Btn: {
            btn: false,
            uBg: {
                Out: "-0px center repeat-y",
                Hover: "-0px center repeat-y",
                Focus: "-0px center repeat-y"
            },
            dBg: {
                Out: "none",
                Hover: "none",
                Focus: "none"
            }
        },
        Fn: function() {}
    });
}
