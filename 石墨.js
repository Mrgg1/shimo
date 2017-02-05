$(function() {
    $(".home-nav-link.dow"). bind({
        mouseover: function() {
            $(".home-nav-download"). css("opacity", "1");
            $(".home-nav-download"). bind({
                mouseover: function() {
                    $(".home-nav-download"). css("opacity", "1");
                },
                mouseleave: function() {
                    $(".home-nav-download"). css("opacity", "0");
                }
            })
        },
        mouseleave: function() {
            $(".home-nav-download"). css("opacity", "0");
        }
    })
    $(".home-nav-download"). hover(function() {
        $(".home-nav-download"). unbind("mouseover");
    })

    // $(".home-nav-link.dow"). hover(function() {
    //     bind({
    //         mouseover: function() {
    //         $(".home-nav-download"). css("opacity", "1");
    //     }
    //     })
    // },function() {
    //     bind({
    //     mouseleave: function() {
    //         $(".home-nav-download"). css("opacity", "0");
    //     }
    //     })
    // }) 

    


//视频控制
    $(".home-index-video #video"). get(0). pause();
    $(".home-index-close"). click( function() {
        $(".home-index-video #video"). get(0). pause();
        $(".home-video-container"). css("display","none");
    })
    $(".home-show-item-img2"). click( function() {
        $(".home-index-video #video"). get(0). play();
        $(".home-video-container"). css("display","block");
    })


    //文档切换
    $(".home-do-pm") .hover( function() {
        $(this). css ("background-position", "-348px -100px");
        $(".home-do-media"). css ("background-position", "-453px -100px");
        $(".home-do-market"). css ("background-position", "-613px -100px");
        $(".home-do-content-pm").css ("opacity", "1");
        $(".home-do-content-media").css ("opacity", "0");
        $(".home-do-content-market").css ("opacity", "0");
    })
    $(".home-do-media") .hover(function() {
        $(this). css ("background-position", "-533px -100px");
        $(".home-do-pm"). css ("background-position", "-248px -100px");
        $(".home-do-market"). css ("background-position", "-613px -100px");
        $(".home-do-content-media").css ("opacity", "1");
        $(".home-do-content-pm").css ("opacity", "0");
        $(".home-do-content-market").css ("opacity", "0");
    })
    $(".home-do-market") .hover( function() {
        $(this). css ("background-position", "-713px -100px");
        $(".home-do-pm"). css ("background-position", "-248px -100px");
        $(".home-do-media"). css ("background-position", "-453px -100px");
        $(".home-do-content-market").css ("opacity", "1");
        $(".home-do-content-pm").css ("opacity", "0");
        $(".home-do-content-media").css ("opacity", "0");
    })



    // 评论切换
    $(".home-comment-autor1") .hover( function() {
        $(this) .css ("opacity", "1");
        $(".home-comment-autor2") .css ("opacity", "0.4");
        $(".home-comment-autor3") .css ("opacity", "0.4");
        $(".home-comment-content-1") .css ("opacity", "1");
        $(".home-comment-content-2") .css ("opacity", "0");
        $(".home-comment-content-3") .css ("opacity", "0");
    })
    $(".home-comment-autor2") .hover( function() {
        $(this) .css ("opacity", "1");
        $(".home-comment-autor1") .css ("opacity", "0.4");
        $(".home-comment-autor3") .css ("opacity", "0.4");
        $(".home-comment-content-2") .css ("opacity", "1");
        $(".home-comment-content-1") .css ("opacity", "0");
        $(".home-comment-content-3") .css ("opacity", "0");
    })
    $(".home-comment-autor3") .hover( function() {
        $(this) .css ("opacity", "1");
        $(".home-comment-autor2") .css ("opacity", "0.4");
        $(".home-comment-autor1") .css ("opacity", "0.4");
        $(".home-comment-content-3") .css ("opacity", "1");
        $(".home-comment-content-1") .css ("opacity", "0");
        $(".home-comment-content-2") .css ("opacity", "0");
    })

    //商标切换
    $(".home-contact-circle.first") . hover( function() {
        $(this). css("color", "#41464b");
        $(".home-contact-circle.second") .css("color", "#aaa");
        $(".home-contact-table.first") .css("left", "0");
        $(".home-contact-table.second") .css("left", "864px");
    })
    $(".home-contact-circle.second") . hover( function() {
        $(this). css("color", "#41464b");
        $(".home-contact-circle.first") .css("color", "#aaa");
        $(".home-contact-table.second") .css("left", "0");
        $(".home-contact-table.first") .css("left", "864px");
    })



    //其他特效
    //悬浮效果
    $(".home-show-item-img") . hover( function() {
        $(this). css("box-shadow", "0 0 3px #888888");
    }, function() {
        $(this). css("box-shadow", "none");
    })


    $(".back") .hover(function() {
        $(".back-btn-show"). css("color", "#000");
    }, function() {
        $(".back-btn-show"). css("color", "#666");
    })


    $(".foot-item.safe") .hover(function() {
        $(this) .css("background-position", "-69.5px -14px");
    }, function() {
        $(this) .css("background-position", "-141px -14px");
    })

})