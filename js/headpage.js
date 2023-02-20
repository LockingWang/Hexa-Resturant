// 變數專區

let token = "";
let pageNow = "head";
const content = document.querySelector(".content");

$(document).ready(function () {
    $('.mobile-menuBTN').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('change');
        $('.navbar').toggleClass('show');
    });
    $('.heart').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('red_heart');
    });
    $('.regist_btn').click(function (e) { 
        e.preventDefault();
        // 前往註冊頁功能未完成
    });
    $('.login_btn').click(function (e) { 
        e.preventDefault();
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;
        if (email == "" || password==""){
            alert("請確實填寫帳號或密碼。")
        }else{
            axios.post("URL",{物件})
            .then(res => {
                alert("登入成功!!!")
                axios.defaults.headers.common['Authorization'] = res.headers.authorization;
                // 此段為使全域的axios都套用上授權的token。
                token = res.headers.authorization;
            })
            .catch(error => {
                alert("帳號或密碼錯誤請重新輸入!");
                email.value = "";
                password.value = "";
            })
        }
        // 尚未測試是否正常
    });
});