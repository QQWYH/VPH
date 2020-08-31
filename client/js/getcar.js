$(() => {
    let url = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../server/getcar.php",
        dataType: "json",
        data: { url },
        success(data) {
            let html = data.map(item => {
                return `
                <div class="car-list">
                <div class="car-listbox">
                    <div class="car-img">
                    <img src="${item.img}">
                    </div>
                    <div class="car-text">${item.goodsname}</div>
                </div>
                <div class="car-list-prive">
               
                    <span>￥</span>
                   <span id="price">${item.price}</span>
                   </span>
                </div>
                <div class="car-list-count">
                    <div class="count">
                        <button class="leftbtn">-</button>
                        <div class="c-num">
                            <input id="s-count" type="text" value="${item.count}">
                        </div>
                        <button class="rightbtn">+</button>
                    </div>
                </div>
                <div class="car-list-caozuo">
                    <span>删除</span>
                </div>
            </div>
                
                `
            }).join("");
            $(".car-show").html(html);
        }
    })


})