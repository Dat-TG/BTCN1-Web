var wrongColor="#FFB1B8";
var rightColor="#BDFDB0";
$(function () {
    $("#email").on("blur input change paste ",function () {
        var ok = checkEmail($(this).val());
        if (ok == 1) {
            console.log("Email không hợp lệ");
            $(this).css("background-color",wrongColor);
        }
        else {
            $(this).css("background-color",rightColor);
        }
    });
    $("#phone").on("blur input change paste ",function () {
        var ok = checkPhoneNumber($(this).val());
        if (ok == 1) {
            console.log("Số điện thoại không hợp lệ");
            $(this).css("background-color",wrongColor);
        }
        else {
            $(this).css("background-color",rightColor);
        }
    });
    $("#name").on("blur input change paste ", function() {
        var ok=checkNameAndAddress($(this).val());
        if (ok==1) {
            console.log("Tên không hợp lệ");
            $(this).css("background-color",wrongColor);
        }
        else {
            $(this).css("background-color",rightColor);
        }
    })
    $("#address").on("blur input change paste ", function() {
        var ok=checkNameAndAddress($(this).val());
        if (ok==1) {
            console.log("Địa chỉ không hợp lệ");
            $(this).css("background-color",wrongColor);
        }
        else {
            $(this).css("background-color",rightColor);
        }
    })
    $("#MSSV").on("blur input change paste ", function() {
        var ok=checkID($(this).val());
        if (ok==1) {
            console.log("MSSV không hợp lệ");
            $(this).css("background-color",wrongColor);
        }
        else {
            $(this).css("background-color",rightColor);
        }
    })
    /*$("form").submit(function (event) {
        var ok = checkUserName($("#username").val()) || checkUpperCase($("#name").val()) || checkEmail($("#email").val()) || checkAge($("#birth").val()) || checkPhoneNumber($("#phone").val()) || checkPassWord($("#pass").val()) || checkPassWordReype($("#pass_retype").val());
        if (ok) {
            event.preventDefault();
        }
    });*/
})



function checkEmail(email) {
    if (email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return 0;
    }
    else {
        return 1;
    }
}

function checkPhoneNumber(phone) {
    if (phone.match(/^0[0-9]{9}$/)) {
        return 0;
    }
    else {
        return 1;
    }
}

function checkNameAndAddress(stringVal) {
    var cnt=0;
    if (stringVal.length==0) {
        return 1;
    }
    if (stringVal[0]!=' ' && stringVal[0].match(/[a-z]/i)) {
        cnt++;
    }
    for (var i=1;i<stringVal.length;i++) {
        if (stringVal[i]!=' ' && stringVal[i-1]==' ' && stringVal[i].match(/[a-z]/i)) {
            cnt++;
        }
    }
    if (cnt>=2) {
        return 0;
    }
    else {
        return 1;
    }
}

function checkID(ID) {
    if (ID.length!=8) {
        return 1;
    }
    if (ID[0]=='1') {
        if (ID[1]=='7' || ID[1]=='8' || ID[1]=='9') {
            return 0;
        }
    }
    if (ID[0]=='2') {
        if (ID[1]=='0' || ID[1]=='1' || ID[1]=='2') {
            return 0;
        }
    }
    return 1;
}