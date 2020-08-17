$(() => {
    let namelock = false;
    let passlock = false;
    let codelock = false;
    let obj = {};
    // 账号
    $("#name").blur(function () {
        let name = $("#name").val();
        if (name == "") {
            $("#hint").html("账号不能为空!");
            return;
        }
        let reg = /^[a-zA-z]\d{6,9}$/;
        if (!reg.test(name)) {
            $("#hint").html("账号格式不正确!");
            return;
        } else {
            $("#hint").html("格式正确!");
        }
        obj.name = name;
        $.ajax({
            type: "get",
            dataType: "json",
            url: "../server/checkuser.php",
            data: obj,
            success(data) {
                if (!data.error) {
                    $("#hint-z").html(data.msg);
                    namelock = true;
                } else {
                    $("#hint-z").html(data.msg)
                }
            }
        })
    })
    // 密码
    $("#pass").blur(function () {
        let pass = $("#pass").val();
        if (pass == "") {
            $("#hint-b").html("密码不能为空!");
            return;
        }
        let reg = /^[a-zA-z]{3,4}\d{6,9}$/;
        if (!reg.test(pass)) {
            $("#hint-b").html("密码格式不正确!");
            return;
        } else {
            $("#hint-b").html("密码格式正确!");
        }
        obj.pass = pass;
        pass = "";
    })

    // 验证密码
    $("#passone").blur(function () {
        let passone = $("#passone").val();
        if (passone == "") {
            $("#hint-c").html("请重新输入密码！");
            return;
        }
        if (passone == obj.pass) {
            $("#hint-c").html("密码验证成功");
        } else {
            $("#hint-c").html("两次输入不一致")
        }
        passlock = true;
        passon = "";
    })
    // 验证码
    let code = $("#codes");
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

    $("#code").blur(function () {
        let code = $("#code").val();
        let codes = $("#codes").html();
        if ($.trim(code.toUpperCase()) === $.trim(codes.toUpperCase())) {
            $("#hint-e").html("验证完成");
        } else {
            $("#hint-e").html("验证错误！");
            shang();
            return;
        }
        codelock = true;
    })
    $("#regbtn").click(function () {
        if (namelock == true && passlock == true && codelock == true) {
            $.ajax({
                type: "post",
                dataType: "json",
                url: "../server/register.php",
                data: obj,
                success(data) {
                    console.log(data)
                    if (data.error == 0) {
                        alert(data.msg);
                        $("#name").val("");
                        $("#pass").val("");
                        $("#passone").val("");
                        $("#code").val("")
                        shang();
                    } else if (data.error == 1) {
                        alert(data.msg);
                    }
                }
            })
        } else {
            alert("请输入正确的信息")
        }
    })
})