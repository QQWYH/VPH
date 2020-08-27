$(() => {
    let url = location.search.split('=')[1];
    $.ajax({
        type: "get",
        data: { url },
        url: "../server/listdatil.php",
        dataType: "json",
        success(data) {
            let html = data.map(item => {
                return `
                <div class="show">
                <div class="f-show">
                    <div class="showlist">
                        <img src="${item.img}" alt="">
                        <div class="boxshow"></div>
                    </div>
                    <div class="maxshow">
                        <img src="${item.img}" alt="">
                    </div>
                </div>
                <div class=" showtext">
                    <div class="pib-title">
                        <a href="#"><img src="${item.logo}"></a>
                        <p class="pib-title-data">
                           ${item.name}
                        </p>
                    </div>
                    <div class="pib-priver">
                        <div class="pib-privertxt">

                            <span class="text">${item.price}</span>

                            <del>${item.del}</del>
                            <span>${item.discount}</span>
                        </div>
                    </div>
                    <div class="pib-freight">
                        <span>运费：</span>
                        <span>新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</span>
                    </div>
                    <div class="pib-count">
                        <span>数量：</span>
                        <span class="count">
                            <button>-</button>
                            <div class="count-n"><input type="text" value="1"></div>
                            <button>+</button>
                        </span>
                    </div>
                    <button class="carbtn">加入购物车</button>

                </div>
            </div>                                                            
                `;
            }).join("");
            $("#listshow").html(html)
            $(".carbtn").on("click", function () {
                let id = url;
                let username = localStorage.getItem("username");
                console.log(id, username)
            })

        }
    })


})
