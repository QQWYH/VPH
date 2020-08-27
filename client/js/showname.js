$(() => {
    let name = window.localStorage.getItem("username") || [];
    if (name == "") {
        alert("请登录");
        window.location.href = "../client/login.html";
    }
    if (name != "") {
        $("#n-bgbox").text(name);
        $("#logout").css("display", "block");
        $("#t-name").text(name).css("color", "#000");
    }
    $("#logout").click(function () {
        localStorage.removeItem("username");
        window.location.href = "../client/login.html";
        $("#logout").css("display", "none");
    })

})