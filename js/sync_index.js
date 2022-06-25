// INTRODUCE text output
(function () {
    let req = new XMLHttpRequest();
    req.open("GET", "./assets_docs/introduce.txt", true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
          const desc01 = document.getElementById("desc01");
          desc01.innerHTML = req.responseText.replace(/\r?\n/g, '<br>');
        }
    }
})();


// smooth scroll
(function () {
    const scrllTarget = document.querySelectorAll('a[href^="#"]');
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
})();