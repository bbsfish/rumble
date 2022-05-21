const file_desc01 = "../assets_docs/introduce.txt";
const file_gal01 = "../assets_docs/gallery-part.xml";

function desc01() {
    let req = new XMLHttpRequest();
    req.open("GET", file_desc01, true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            const desc01 = document.getElementById("desc01");
            desc01.innerHTML = req.responseText;
        }
    }
}

function gal() {
    let req = new XMLHttpRequest();
    req.open("GET", file_gal01, true);
    req.send();
    req.onreadystatechange = function () {
        const gal = document.getElementById("gal");
        if (req.readyState == 4 && req.status == 200) {
            let docElem = req.responseXML.documentElement;
            let data_nodes = docElem.getElementsByTagName("data");
            let file_nodes = docElem.getElementsByTagName("file");
            let desc_nodes = docElem.getElementsByTagName("desc");
            for (i = 0; i < data_nodes.length; i++) {
                let new_li = document.createElement('li');
                let new_a = document.createElement('a');
                let new_img = document.createElement('img');
                    new_img.src = "./assets/" + file_nodes[i].textContent;
                    new_a.appendChild(new_img);
                    new_li.appendChild(new_a);
                let new_p = document.createElement('p');
                let desc_text = desc_nodes[i].textContent;
                    new_p.innerHTML = desc_text.replace(/\r?\n/g, '<br>');
                    new_li.appendChild(new_p);
                gal.appendChild(new_li);
            }
            if (window.innerWidth > 1400 && data_nodes.length % 2 == 1) {
                // 要素数が奇数のとき、最終行に空欄追加
                let new_li = document.createElement('li');
                let new_img = document.createElement('img');
                let new_a = document.createElement('a');
                    new_a.appendChild(new_img);
                    new_li.appendChild(new_a);
                let new_p = document.createElement('p');
                    new_p.innerHTML = "Don't miss it.";
                    new_li.appendChild(new_p);
                gal.appendChild(new_li);
            }
        }
    }
}

(function () {
    const btn = document.getElementById("readmore_button");
    btn.onclick = function () {
        
    }
})();