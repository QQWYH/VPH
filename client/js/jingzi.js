$(() => {
    $(".showlist").mouseenter(function () {
        $(".boxshow").css("display", "block", "display", "absolute")
        $(".maxshow").css("display", "block");
        console.log($(".boxshow"), $(".maxshow"))
    });
    $(".showlist").mouseleave(function () {
        $(".boxshow").css("display", "none");
        $(".maxshow").css("display", "none");
    });
    $(".showlist").mousemove(function (e) {
        // 鼠标位置
        let pageX = e.pageX;
        let pageY = e.pageY;
        // 图片
        let offsetX = $(".showlist").offset().left;
        let offsetY = $(".showlist").offset().top;
        // 鼠标在图中的位置
        let relatveX = pageX - offsetX;
        let relatveY = pageY - offsetY;
        // 鼠标处于放大镜中心
        let magoffsetX = $(".boxshow").width() / 2;
        let magoffsetY = $(".boxshow").height() / 2;
        $(".boxshow").css({
            left: relatveX - magoffsetX + 'px',
            top: relatveY - magoffsetY + 'px'
        });
        let magX = $(".boxshow").position().left;
        let magY = $(".boxshow").position().top;
        // 边界处理
        var maxMagX = $(".showlist").width() - $(".boxshow").width()
        var maxMagY = $(".showlist").height() - $(".boxshow").height()
        // 左边界
        if (magX <= 0) { $(".boxshow").css('left', '0px'); }
        // 右边界
        if (magX >= maxMagX) { $(".boxshow").css('left', maxMagX + 'px'); }
        // 上边界
        if (magY <= 0) { $(".boxshow").css('top', '0px'); }
        // 下边界
        if (magY >= maxMagY) { $(".boxshow").css('top', maxMagY + 'px'); }

        let originX = magX * 2.6;
        let originY = magY * 2.6;
        $('.maxshow img').css({ left: -originX + 'px', top: -originY + 'px' });
    })


})