var wrongColor = "#FFB1B8";
var rightColor = "#BDFDB0";
$(function () {
    $("#email").on("blur input change paste", function () {
        var ok = checkEmail($(this).val());
        if (ok == 1) {
            $("#email").get(0).setCustomValidity("Email không hợp lệ");
            $("#email").get(0).reportValidity();
            $(this).css("background-color", wrongColor);
        }
        else {
            $("#email").get(0).setCustomValidity("");
            $(this).css("background-color", rightColor);
        }
    });
    $("#phone").on("blur input change paste", function () {
        var ok = checkPhoneNumber($(this).val());
        if (ok == 1) {
            $("#phone").get(0).setCustomValidity("Số điện thoại không hợp lệ");
            $("#phone").get(0).reportValidity();
            $(this).css("background-color", wrongColor);
        }
        else {
            $("#phone").get(0).setCustomValidity("");
            $(this).css("background-color", rightColor);
        }
    });
    $("#name").on("blur input change paste", function () {
        var ok = checkNameAndAddress($(this).val());
        if (ok == 1) {
            $("#name").get(0).setCustomValidity("Tên không hợp lệ");
            $("#name").get(0).reportValidity();
            $(this).css("background-color", wrongColor);
        }
        else {
            $("#name").get(0).setCustomValidity("");
            $(this).css("background-color", rightColor);
        }
    })
    $("#address").on("blur input change paste", function () {
        var ok = checkNameAndAddress($(this).val());
        if (ok == 1) {
            $("#address").get(0).setCustomValidity("Địa chỉ không hợp lệ");
            $("#address").get(0).reportValidity();
            $(this).css("background-color", wrongColor);
        }
        else {
            $("#address").get(0).setCustomValidity("");
            $(this).css("background-color", rightColor);
        }
    })
    $("#MSSV").on("blur input change paste", function () {
        var ok = checkID($(this).val());
        if (ok == 1) {
            $("#MSSV").get(0).setCustomValidity("MSSV không hợp lệ");
            $("#MSSV").get(0).reportValidity();
            $(this).css("background-color", wrongColor);
        }
        else {
            $("#MSSV").get(0).setCustomValidity("");
            $(this).css("background-color", rightColor);
        }
    })
    $("#dk").on("click", function (event) {
        var ok1 = checkEmail($("#email").val()), ok2 = checkID($("#MSSV").val()), ok3 = checkNameAndAddress($("#name").val()), ok4 = checkNameAndAddress($("#address").val()), ok5 = checkPhoneNumber($("#phone").val());
        if (ok1) {
            $("#email").css("background-color", wrongColor);
        }
        else {
            $("#email").css("background-color", rightColor);
        }
        if (ok2) {
            $("#MSSV").css("background-color", wrongColor);
        }
        else {
            $("#MSSV").css("background-color", rightColor);
        }
        if (ok3) {
            $("#name").css("background-color", wrongColor);
        }
        else {
            $("#name").css("background-color", rightColor);
        }
        if (ok4) {
            $("#address").css("background-color", wrongColor);
        }
        else {
            $("#address").css("background-color", rightColor);
        }
        if (ok5) {
            $("#phone").css("background-color", wrongColor);
        }
        else {
            $("#phone").css("background-color", rightColor);
        }
        if (!(ok1 || ok2 || ok3 || ok4 || ok5)) {
            var alertString="Các môn đã chọn: \n";
            var arr = $(".daChon").children();
            for (var i=0;i<arr.length;i++) {
                if (arr[i].innerHTML!="") {
                    alertString=alertString+"\n"+arr[i].innerHTML;
                }
            }
            window.alert(alertString);
            var newStudentString="<tr>";
            newStudentString+="<td>"+$("#MSSV").val()+"</td>";
            newStudentString+="<td>"+$("#name").val()+"</td>";
            if($('#female').is(':checked')) {
                newStudentString+="<td>"+$("#female").val()+"</td>";
            }
            if($('#male').is(':checked')) {
                newStudentString+="<td>"+$("#male").val()+"</td>";
            }
            var dt=new Date($("#birth").val());
            newStudentString+="<td>"+(dt.getMonth() + 1) + "/" + dt.getDate()+ "/"+dt.getFullYear() +"</td>";
            newStudentString+="</tr>";
            $("#Table tbody").append(newStudentString);
            return true;
        }
        else {
            event.preventDefault();
        }
    });
    $("#delAll").on("click", function () {
        $("#email").val("");
        $("#email").css("background-color", "#ffffff");
        $("#name").val("");
        $("#name").css("background-color", "#ffffff");
        $("#phone").val("");
        $("#phone").css("background-color", "#ffffff");
        $("#MSSV").val("");
        $("#MSSV").css("background-color", "#ffffff");
        $("#male").prop("checked", false);
        $("#female").prop("checked", false);
        $("#birth").val("");
        $("#address").val("");
        $("#address").css("background-color", "#ffffff");
        var arr = $(".daChon").children();
        var cnt = 0;
        var arr1 = [];
        var cnt=0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].innerHTML!="") {
                cnt++;
                arr1.push(arr[i]);
            }
        }
        var arr2 = $(".chuaChon").children();
        var j=0;
        for (var i = 0; i < arr2.length && j<cnt; i++) {
            if (arr2[i].innerHTML == "") {
                arr2[i].style.visibility = "visible";
                arr2[i].style.display="flex";
                arr2[i].innerHTML = arr1[j].innerHTML;
                arr1[j].innerHTML = "";
                arr2[i].style.color = "black";
                arr2[i].style.backgroundColor = "white";
                j++;
            }
        }
        for (var i=0;i<arr.length;i++) {
            arr[i].style.visibility="hidden";
            arr[i].style.display="flex";
        }
    });
    $(".daChon").css('visibility', 'hidden');
    $(".chuaChon").children().on("click", function () {
        console.log($(this).css("background-color"));
        if ($(this).css("background-color") == "#ffffff" || $(this).css("background-color") == "rgb(255, 255, 255)") {
            $(this).css("background-color", "#FFA207");
            $(this).css("color", "white");
        }
        else {
            $(this).css("background-color", "#ffffff");
            $(this).css("color", "black");
        }
    });
    $("#add1").on("click", function () {
        var arr = $(".chuaChon").children();
        var cnt = 0;
        var arr1 = [];
        var cnt_chuachon=0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].innerHTML!="") {
                cnt_chuachon++;
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].style.color == "rgb(255, 255, 255)" && arr[i].innerHTML!="") {
                arr[i].style.display = "none";
                cnt++;
                cnt_chuachon--;
                arr1.push(arr[i]);
            }
        }
        var arr2 = $(".daChon").children();
        var j=0;
        for (var i = 0; i < arr2.length && j<cnt; i++) {
            if (arr2[i].innerHTML == "") {
                arr2[i].style.display="flex";
                arr2[i].style.visibility="visible";
                arr2[i].innerHTML = arr1[j].innerHTML;
                arr1[j].innerHTML = "";
                arr2[i].style.color = "black";
                arr2[i].style.backgroundColor = "#FFE2B1";
                j++;
            }
        }
        if (cnt_chuachon<=0) {
            arr = $(".chuaChon").children();
            arr[0].style.display="flex";
            arr[0].style.visibility="hidden";
        }
    });
    $("#addAll").on("click", function() {
        var arr = $(".chuaChon").children();
        var cnt = 0;
        var arr1 = [];
        var cnt=0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].innerHTML!="") {
                cnt++;
                arr1.push(arr[i]);
            }
        }
        var arr2 = $(".daChon").children();
        var j=0;
        for (var i = 0; i < arr2.length && j<cnt; i++) {
            if (arr2[i].innerHTML == "") {
                arr2[i].style.visibility = "visible";
                arr2[i].innerHTML = arr1[j].innerHTML;
                arr1[j].innerHTML = "";
                arr2[i].style.color = "black";
                arr2[i].style.backgroundColor = "#FFE2B1";
                j++;
            }
        }
        for (var i=0;i<arr.length;i++) {
            arr[i].style.visibility="hidden";
            arr[i].style.display="flex";
        }
    });
    $(".daChon").children().on("click", function () {
        console.log($(this).css("color"));
        if ($(this).css("color")=="rgb(0, 0, 0)") {
            $(this).css("background-color", "#FFA207");
            $(this).css("color", "white");
        }
        else {
            $(this).css("background-color", "#FFE2B1");
            $(this).css("color", "black");
        }
    });
    $("#xoa1").on("click", function() {
        var arr = $(".daChon").children();
        var cnt = 0;
        var arr1 = [];
        var cnt_chuachon=0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].innerHTML!="") {
                cnt_chuachon++;
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].style.color == "rgb(255, 255, 255)" && arr[i].innerHTML!="") {
                arr[i].style.display = "none";
                cnt++;
                cnt_chuachon--;
                arr1.push(arr[i]);
            }
        }
        var arr2 = $(".chuaChon").children();
        var j=0;
        for (var i = 0; i < arr2.length && j<cnt; i++) {
            if (arr2[i].innerHTML == "") {
                arr2[i].style.visibility = "visible";
                arr2[i].style.display="flex";
                arr2[i].innerHTML = arr1[j].innerHTML;
                arr1[j].innerHTML = "";
                arr2[i].style.color = "black";
                arr2[i].style.backgroundColor = "white";
                j++;
            }
        }
        if (cnt_chuachon<=0) {
            arr = $(".daChon").children();
            arr[0].style.display="flex";
            arr[0].style.visibility="hidden";
        }
    });
    $("#xoaAll").on("click",function() {
        var arr = $(".daChon").children();
        var cnt = 0;
        var arr1 = [];
        var cnt=0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].innerHTML!="") {
                cnt++;
                arr1.push(arr[i]);
            }
        }
        var arr2 = $(".chuaChon").children();
        var j=0;
        for (var i = 0; i < arr2.length && j<cnt; i++) {
            if (arr2[i].innerHTML == "") {
                arr2[i].style.visibility = "visible";
                arr2[i].style.display="flex";
                arr2[i].innerHTML = arr1[j].innerHTML;
                arr1[j].innerHTML = "";
                arr2[i].style.color = "black";
                arr2[i].style.backgroundColor = "white";
                j++;
            }
        }
        for (var i=0;i<arr.length;i++) {
            arr[i].style.visibility="hidden";
            arr[i].style.display="flex";
        }
    });
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
    var cnt = 0;
    if (stringVal.length == 0) {
        return 1;
    }
    if (stringVal[0] != ' ' && stringVal[0].match(/[a-z]/i)) {
        cnt++;
    }
    for (var i = 1; i < stringVal.length; i++) {
        if (stringVal[i] != ' ' && stringVal[i - 1] == ' ' && stringVal[i].match(/[a-z]/i)) {
            cnt++;
        }
    }
    if (cnt >= 2) {
        return 0;
    }
    else {
        return 1;
    }
}

function checkID(ID) {
    if (ID.length != 8) {
        return 1;
    }
    if (ID[0] == '1') {
        if (ID[1] == '7' || ID[1] == '8' || ID[1] == '9') {
            return 0;
        }
    }
    if (ID[0] == '2') {
        if (ID[1] == '0' || ID[1] == '1' || ID[1] == '2') {
            return 0;
        }
    }
    return 1;
}