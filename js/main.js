window.onload = function () {
    // 使用言語選択
    const userlang = navigator.language;
    setUseLang(userlang);

    // 必要JSファイル読み込み
    const document_head = document.getElementsByTagName("head");
    let new_script = document.createElement("script");
        new_script.src = "./js/menu.js";
    document_head[0].appendChild(new_script);
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