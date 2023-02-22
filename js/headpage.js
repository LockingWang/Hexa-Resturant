// 變數專區
let token = "";
let pageNow = "head";
let shop_cart_number = 0;
const content = document.querySelector('.content');

function checkPage(){
    if(pageNow == "head"){
        content.innerHTML = `<div class="head_content">
        <div class="firstPart" id="firstPart">
            <div class="headWord">
                <div class="baseLine"></div>
                <div class="words-between">
                    <h2>客人總是在詢問<br/>這麼好吃的秘訣是什麼</h2>
                </div>
                <div class="baseLine"></div>
            </div>
            <ul class="keys">
                <li>
                    <img src="images/feature_1.png" alt="onion picture">
                    <h2>台灣本土蔬菜</h2>
                    <p>
                        In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.
                    </p>
                </li>
                <li>
                    <img src="images/feature_2.png" alt="chef picture">
                    <h2>專業米其林廚師</h2>
                    <p>
                        Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.
                    </p>
                </li>
                <li>
                    <img src="images/feature_3.png" alt="kitchen picture">
                    <h2>對於專業不能退讓</h2>
                    <p>
                        Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.
                    </p>
                </li>
            </ul>
        </div>
        <div class="secondPart" id="secondPart">
            <img src="images/main_chef_brown.png" alt="main_chef picture">
            <div class="text">
                <h2>今日主廚：帕金森、梅在帕</h2>
                <p>Tody Chef: Plum in Shock</p>
                <p class="chef_story">
                    Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.
                </p>
            </div>
        </div>
        <div class="thirdPart" id="thirdPart">
            <h2>聽聽別人的感想</h2>
            <ul class="comments">
                <li>
                    <img src="images/avatar_1.png" alt="consumer_picture">
                    <div class="commentText">
                        <h3>高雄一口吃</h3>
                        <p>
                            自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                        </p>
                        <p class="occupation"> -- 產品經理</p>
                    </div>
                </li>
                <li>
                    <img src="images/avatar_2.png" alt="consumer_picture">
                    <div class="commentText">
                        <h3>廟口小霸王</h3>
                        <p>
                            自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                        </p>
                        <p class="occupation"> -- 金身道士</p>
                    </div>
                </li>
                <li>
                    <img src="images/avatar_3.png" alt="consumer_picture">
                    <div class="commentText">
                        <h3>春天也來了</h3>
                        <p>
                            自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                        </p>
                        <p  class="occupation"> -- 美麗萬分</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="fourthPart" id="fourthPart">
            <h2>我們的位置不太夠坐<br/>要不要先訂位呢？</h2>
            <div class="booking">
                <img src="images/Map.png" alt="map">
                <form class="pure-form pure-form-stacked" action="#">
                    <fieldset>
                        <label for="booking-name">姓名</label>
                        <input type="text" id="booking-name" placeholder="六角講師吃尾牙" />
                        <label for="booking-phoneNumber">電話</label>
                        <input type="text" id="booking-phoneNumber" placeholder="02-1234567" />
                        <label for="booking-email">Email</label>
                        <input type="email" id="booking-email" placeholder="test@gmail.com" />
                        <label for="booking-number">人數</label>
                        <input type="number" id="booking-number" />
                        
                        <label for="has-vegetarian" class="pure-checkbox">是否需要素食</label>
                        <label class="choice">是<input type="radio" id="has-vegetarian" name="has-vegetarian" class="has-vegetarian" value="yes" /></label>
                        <label class="choice">否<input type="radio" id="has-vegetarian" name="has-vegetarian" class="has-vegetarian" value="no" /></label>
                        
                        <div class="btnGroup">
                            <button class="pure-button pure-button-primary cancel-btn">取消</button>
                            <button class="pure-button pure-button-primary submit-btn" type="submit" >送出</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>`;
    }else if(pageNow == "shop"){
        content.innerHTML = `<div class="shop_content">
        <div class="sidebar">
            <h1><i class="fa-solid fa-leaf"></i>線上訂購美食</h1>
            <ul>
                <li><a href="#">全部(23)</a></li>
                <li><a href="#">只愛吃薯條(18)</a></li>
                <li><a href="#">加熱就可食(1)</a></li>
                <li><a href="#">不敗漢堡系列(4)</a></li>
            </ul>
        </div>
        <div class="shop">
            <div class="functions">
                <div class="search">
                    <input type="text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="shop_cart">
                    <a href="#">結帳去</a>
                    <div class="cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div class="number">${shop_cart_number}</div>
                    </div>
                </div>
            </div>
            <ul class="items">
                <li>
                    <img src="images/shop_item1.jpg" alt="Classic Hamburger Package">
                    <h2>經典漢堡套餐</h2>
                    <p>Classic Hamburger Package</p>
                    <div class="baseLine"></div>
                    <p class="price">$120 </p>
                    <a class="add_btn" href="#"><i class="fa-solid fa-cart-shopping"></i>加入購物車</a>
                    <i class="fa-regular fa-heart heart"></i>
                    <p class="pro_text">熱銷美食</p>
                    <p class="decoration"></p>
                </li>
                <li>
                    <img src="images/shop_item3.jpg" alt="Handsome Sausage">
                    <h2>英俊香腸</h2>
                    <p>Handsome Sausage</p>
                    <div class="baseLine"></div>
                    <p class="price">$1,024 </p>
                    <a class="add_btn" href="#"><i class="fa-solid fa-cart-shopping"></i>加入購物車</a>
                    <i class="fa-regular fa-heart heart"></i>
                </li>
                <li>
                    <img src="images/shop_item2.jpg" alt="Hamburg Brothers">
                    <h2>漢堡兄弟</h2>
                    <p>Hamburg Brothers</p>
                    <div class="baseLine"></div>
                    <p class="price">$792 </p>
                    <a class="add_btn" href="#"><i class="fa-solid fa-cart-shopping"></i>加入購物車</a>
                    <i class="fa-regular fa-heart heart"></i>
                </li>
                <li>
                    <img src="images/shop_item4.jpeg" alt="Dragon Ball Package">
                    <h2>完美願望</h2>
                    <p>Dragon Ball Package</p>
                    <div class="baseLine"></div>
                    <p class="price">$999,999</p>
                    <a class="add_btn" href="#"><i class="fa-solid fa-cart-shopping"></i>加入購物車</a>
                    <i class="fa-regular fa-heart heart"></i>
                </li>
            </ul>
        </div>
    </div>`;
    }else if(pageNow == "login"){
        content.innerHTML=`<div class="login_content">
        <img class="logo" src="images/logo_l@svg.svg" alt="logo">
        <h2>享受美食好味道</h3>
        <div class="loginBox">
            <h2>LOGIN</h2>
            <label>
                Email Address*
                <i class="fa-regular fa-envelope"></i>
                <input class="email" type="email">
            </label>
            <label class="password_block">
                Password*
                <i class="fa-solid fa-lock"></i>
                <input class="password" type="password">
            </label>
            <a class="forget" href="#">忘記密碼？</a>
            <div class="btn_group">
                <button class="regist_btn">註冊</button>
                <button class="login_btn">登入</button>
            </div>
        </div>
    </div>`;
    }else if(pageNow == "regist"){
        content.innerHTML = `<div class="regist_content">
        <img class="logo" src="images/logo_l@svg.svg" alt="logo">
        <h2>享受美食好味道</h2>
        <div class="regist_block">
            <h2>REGISTER</h2>
            <div class="inner_box">
                <div class="law">
                    <h3>就是這樣條款：</h3>
                    <p>
                        Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien...
                    </p>
                </div>
                <div class="regist_info">
                    <label>
                        Email Address*
                        <i class="fa-regular fa-envelope"></i>
                        <input class="email" type="email">
                    </label>
                    <label class="password_block">
                        Password*
                        <i class="fa-solid fa-lock"></i>
                        <input class="password" type="password">
                    </label>
                    <label class="password_block password_check">
                        Double Check*
                        <i class="fa-solid fa-lock"></i>
                        <input class="password" type="password">
                    </label>
                    <a class="ready_has" href="#">已經有帳號了？</a>
                    <button class="send_regist">註冊</button>
                </div>
            </div>
        </div>
    </div>`;
    }
}

$(document).ready(function () {
    // header 功能區
    $('.scrollTop').click(function(e){
        e.preventDefault();
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({scrollTop: targetPos}, 1000);
      });
    
    $('.mobile-menuBTN').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('change');
        $('.navbar').toggleClass('show');
    });
    $('.heart').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('red_heart');
    });
    $('.shop_link').click(function (e) { 
        e.preventDefault();
        pageNow = "shop";
        checkPage();
    });
    $('.member_link').click(function (e) { 
        e.preventDefault();
        pageNow = "login";
        checkPage();
    });

    // Content 功能區
        // Head
    $('.cancel-btn').on("click", function (e) {
        e.preventDefault();
        const name = document.getElementById('booking-name');
        const phoneNumber = document.getElementById('booking-phoneNumber');
        const email = document.getElementById('booking-email');
        const number = document.getElementById('booking-number');
        name.value = "";
        phoneNumber.value = "";
        email.value = "";
        number.value = "";
    });
    $('.submit-btn').on("click", function (e) {
        e.preventDefault();
        const name = document.getElementById('booking-name');
        const phoneNumber = document.getElementById('booking-phoneNumber');
        const number = document.getElementById('booking-number');
        if (name.value =="" || phoneNumber.value =="" || number.value ==""){
            alert("請確實填寫姓名、電話以及預訂人數，方便我們與您聯繫，謝謝。")
        }else{
            axios.post("URL",{物件})
            .then(res => {
                alert("資料傳送成功!!!")
            })
            .catch(error => {
                alert("系統出現問題，請改用電話預訂。");
            })
        }
    });
        // Shop
    $('.content').on("click", function (e) {
        if (e.target.getAttribute('class') == "add_btn"){
            e.preventDefault();
            shop_cart_number++;

            const number = document.querySelector('.number');
            number.innerHTML = `${shop_cart_number}`;
        }
    });

        // Login
        $('.content').on("click", function (e) {
            if (e.target.getAttribute('class') == "regist_btn"){
                pageNow = "regist";
                checkPage();
            }else if(e.target.getAttribute('class') == "login_btn"){
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
            }else if(e.target.getAttribute('class') == "forget"){
                alert('請與我們聯繫，電話07-1234-567。')
            }else if(e.target.getAttribute('class').includes('fa-magnifying-glass') == true){
                // 搜尋功能
            }
        });
    
        // Regist
        $('.content').on("click", function (e) {
            if(e.target.getAttribute('class') == "send_regist"){
                const email = document.querySelector('.email');
                const password1 = document.querySelector('.password_block .password');
                const password2 = document.querySelector('.password_check .password');

                if(email.value == "" || password1.value == "" || password2.value == ""){
                    alert("請確實填寫資料。");
                }else if(password1.value != password2.value){
                    alert("密碼不一致。");
                }else {
                    axios.post("URL",{物件})
                    .then(res => {
                        alert("註冊成功!!!")
                    })
                    .catch(error => {
                        alert("註冊失敗，請與我們聯繫(電話:07-1234-567)。");
                    })
                }
            }else if (e.target.getAttribute('class') == "ready_has"){
                pageNow = "login";
                checkPage();
            }
        });
});