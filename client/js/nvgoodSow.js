$(() => {
    $(".nv-left").on("click", "li", function () {
        let idx = $(this).index();
        console.log(this, idx);
        if (idx == 0) {
            console.log(idx)
            $(this).parent().siblings().children().eq(0).css("margin-top", 0);
        } else {

            $(this).parent().siblings().children().eq(idx).css("margin-top", (idx * 304) + "px");
            $(this).parent().siblings().children().eq(idx - 1).css("margin-top", (-idx * 304 - 304) + "px");

        }

    })
    let obj = {
        num: 12,
    }
    $.ajax({
        type: "get",
        url: "../server/nvgoodSow.php",
        dataType: "json",
        data: obj,
        success(data) {
            let html = data.msg.map(item => {
                return `
                <a href="../client/nvgooodslist.html">
                    <div class="right-item">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="txt">${item.name}</div>
                </a>
                `;
            }).join("");
            $("#nv-text").html(html);
        }
    })
    let lock = true;
    $("#sbtn").click(function () {
        let data = {
            data: 13
        }
        if (lock == true) {
            $.ajax({
                type: "get",
                url: "../server/nvgoodsLists.php",
                dataType: "json",
                data: data,
                success(data) {
                    let html = data.msg.map(item => {
                        return `
                    <a href="../nvgooodslist.html">
                        <div class="right-item">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="txt">${item.name}</div>
                    </a>
                    `
                    }).join("");
                    $("#nv-texta").html(html);
                }
            })
            lock = false;
        } else {
            return;
            // lock = true;
        }

    })

})