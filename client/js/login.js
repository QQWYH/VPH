$(() => {
    let obj = {};
    let codeslock = false;
    let code = $("#s-code");
    function shang() {
        var arrays = new Array(
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        );
        codes = " ";
        for (var i = 0; i < 4; i++) {

            var r = parseInt(Math.random() * arrays.length);

            codes += arrays[r];

        }
        code.html(codes);
    }

    shang();
    code.click(function () {
        shang();
    })

    $("#s-text").blur(function () {
        let code = $("#s-text").val();
        let codes = $("#s-code").html();
        if ($.trim(code.toUpperCase()) === $.trim(codes.toUpperCase())) {
            $("#hint-s").html("验证完成");
        } else {
            $("#hint-s").html("验证错误！");
            shang();
            return;
        }
        codeslock = true;
    })

    $("#submit").click(function () {
        if ($("#username").val() == "") {
            $("#hint-user").html("账号不能空！")
            return;
        }
        obj.username = $("#username").val();
        if ($("#password").val() == "") {
            $("#hint-pass").html("密码不能空！")
            return
        }
        obj.password = $("#password").val();
        console.log(obj)
        if (!codeslock) {
            return;
        }
        $.ajax({
            type: "post",
            dataType: "json",
            url: "../server/login.php",
            data: obj,
            success(data) {
                if (data.error == 0) {
                    alert(data.msg);
                    localStorage.username = obj.username;
                    window.location.href = "../client/index.html";
                    $("#username").val("");
                    $("#password").val("");
                } else {
                    alert(data.msg);
                }
            }
        })
    })
})