{
    // 使用言語選択
    const userlang = navigator.language;
    console.log(userlang);
    setUseLang(userlang);

    // 必要JSファイル読み込み
    // const document_head = document.getElementsByTagName("head");
    // let new_script = document.createElement("script");
    //     new_script.src = "./js/menu.js";
    // document_head[0].appendChild(new_script);
}

// 言語設定
function setUseLang(lang) {
    const ja_span = document.getElementsByClassName("lang_ja");
    const en_span = document.getElementsByClassName("lang_en");
    if (ja_span.length == 0) { return; }
    if (ja_span.length == 0) { return; }
    switch (lang) {
        case "ja":
            for (let i = 0; i < ja_span.length; i++) {
                ja_span[i].classList.remove("invisible");
                en_span[i].classList.add("invisible");
            }
            break;
            
        case "en":
        default:
            for (let i = 0; i < ja_span.length; i++) {
                ja_span[i].classList.add("invisible");
                en_span[i].classList.remove("invisible");
            }
            break;
    }
}



// スムーズ スクロール
{
    const scrllTarget = document.querySelectorAll('a[href*="#"]');
    scrllTarget.forEach(element => {
        console.log(element.innerHTML);
    });
    scrllTarget.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            // get value of linked index
            let href = element.getAttribute('href');
            let linked_id = document.getElementById(href.replace('#', ''));

            // get target position
            const rect = linked_id.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const position = rect + offset;
            window.scrollTo({
                top: position,
                behavior: 'smooth',
            });
        });
    });
}

// メニュー
const bargerBtn = document.getElementById("barger-menu-btn");
const bargerList = document.getElementById("barger-menu-list");

{
    document.addEventListener('click', (event) => {
        event.preventDefault();
        if(!event.target.closest('.barger-menu-list') && !event.target.closest('.barger-menu-btn')) {
            // barger-menu-list, barger-menu-btn外をクリック
            if (bargerBtn.className.split(" ").includes("active")) {
            // barger-menu-btn = activeのとき
            bargerBtn.classList.remove("active");
            bargerList.classList.remove("panelactive");
            }
        } else {
            console.log(event);
            // window.location.href = event.target;
        }
    }, false);

    // btnクリックでtoggle
    bargerBtn.onclick = () => {
    // barger-menu-btn クリック
    bargerBtn.classList.toggle("active");
    bargerList.classList.toggle("panelactive");
    }

    // リンクをクリックしたら閉じる
    const listItems = document.getElementsByClassName("h-nav-list-item");
    for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i].lastElementChild;
    element.addEventListener("click", () => {
        // barger-menu-btn クリック
        bargerBtn.classList.remove("active");
        bargerList.classList.remove("panelactive");
        // 強制遷移
        let href = element.getAttribute('href');
        window.location.href = href; 
    });
    };
}