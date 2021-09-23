$(function() {


    $(".log-right>li").mouseover(function() {
        $(this).find(".item-nav").show()
    })
    $(".log-right>li").mouseout(function() {
        $(this).find(".item-nav").hide()
    })
    $(".lists>li").mouseover(function() {
        $(this).find("div").show()
    })
    $(".lists>li").mouseout(function() {
        $(this).find("div").hide()
    })
    $(".subject-ul>li").mouseover(function() {
        $(this).addClass("subject-li")
        $(this).siblings("li").removeClass("subject-li")
    })
    $(".dians").mouseover(function() {
        $(this).parents("h2").siblings(".row2").find('#row-list-box').removeClass("blak")
        $(this).parents("h2").siblings(".row2").find('#row-list-box').siblings(".row-list2").addClass("blak")
            // $('#row-list-box').removeClass("blak")
            // $('#row-list-box').siblings(".row-list2").addClass("blak")
    })
    $(".reim").mouseover(function() {
        // $('#row-list-box').addClass("blak")
        // $('#row-list-box').siblings(".row-list2").removeClass("blak")
        $(this).parents("h2").siblings(".row2").find('#row-list-box').addClass("blak")
        $(this).parents("h2").siblings(".row2").find('#row-list-box').siblings(".row-list2").removeClass("blak")
    })
    $(".video-list>li>img").mouseover(function() {
        $(this).siblings("i").css({ 'backgroundColor': '#ff6700' })
    })
    $(".video-list>li>img").mouseout(function() {
        $(this).siblings("i").css({ 'backgroundColor': 'rgba(0, 0, 0, .6)' })
    })
    $(".video-list>li>i").mouseover(function() {
        $(this).css({ 'backgroundColor': '#ff6700' })
    })

    // $("#hid").click(function() {
    //     $(".shiping").hide()
    //     $(this).siblings("video").muted()
    // })
    var myVid = document.getElementById("video1");
    var hid = document.getElementById("hid")

    hid.addEventListener("click", function() {

        myVid.pause();
        this.parentNode.parentNode.parentNode.style.display = 'none';
    })

    $(".video-list>li").click(function() {
        // alert("aa")
        $(".shiping").show()
    })

    $(window).scroll(function() {
        // console.log(11);

        if ($(document).scrollTop() >= 950) {
            $(".right-nav").stop().css({
                bottom: 150
            });
            $(".right-nav-li").show()

        } else {
            $(".right-nav-li").hide()
            $(".right-nav").stop().css({
                bottom: 50
            });
        }
    });
    // 返回顶部
    $(".right-nav-li").click(function() {
        // $(document).scrollTop(0);
        $("body, html").stop().scrollTop(0)

    })
})