$(() => {
    let goodsArr = [];
    let nvgoodShow = document.querySelector(".nvgoodShow");
    let str = "";
    var url = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../server/nvgoodShow.php",
    }).then((data) => {
        if (!data.error) {
            data = JSON.parse(data)
            goodsArr = data.msg;
            console.log(data.msg)
            let p = new Pagination(nvgoodShow, data.msg, 0, 20);
            p.display(function (arr) {
                arr.forEach(item => {
                    str = ` <ul  style="width:100%" class="row">`;
                    // 循环12条li出来
                    arr.forEach(item => {
                        str += `
                        <li class="nvlist" border: none">
                        <div class="nvgood-item">
                            <a href="../client/goodslist.html?id=${item.id}">
                                <div class="nvitem-img">
                                <img src="${item.img}">
                                    <div class="logo"> <img src="${item.logo}"></div>
                                    <div class="cornet"></div>
                                </div>
                                <div class="item-bootom">
                                    <div class="item-priver">
                                        <div class="label">
                                            <span>${item.text}</span >
                                        </div >
                                <div class="priver">
                                <span>${item.price}</span>
                             </div>
                                <div class="del">
                                <del>${item.del}</del>
                                </div>
                                <div class="discount">
                                <span>${item.discount}</span>
                             </div>
                                    </div >
                                <div class="text">
                                <span>${item.name}</span>
                                </div>
                                </div >
                            </a >
                        </div >
                        </li>
                        `;
                    });
                    str += `</ul>`;
                    return str;
                });
                return str;
            });
        } else {
            throw new Error("请求失败");
        }
    })
        .catch((err) => {
            console.log(err)
        })



})