$(() => {
    $.ajax({
        type: "get",
        url: "../server/index.php",
        dataType: "json",
        success(data) {
            console.log(data, data.msg)
            let html = data.msg.map(item => {
                return `
                <div class="conter-item">
                <div class="img">
                    <img src="${item.img}">
                </div>
                <div class="item-txt">
                    <h3>${item.name}</h3>
                    <h4>${item.num}折</h4>
                </div>
            </div>
                `
            }).join("");
            $("#conter-list").html(html);
        }
    })





})