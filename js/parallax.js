const elem = document.querySelector("#wallpaper"); // IMG:wallpaper

const allHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const elemHeight = elem.offsetHeight;
const maxScrollVolume = elemHeight - window.innerHeight;
console.log(maxScrollVolume);
    document.addEventListener("scroll", function(){
        const currentScrollVolume = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollVolume >= maxScrollVolume) {
            // elem.style.top = (currentScrollVolume - maxScrollVolume) + "px";
            elem.style.display = "none";
            document.body.style.backgroundImage = "url(./lib/wallpaper.jpg)";
        } else if (currentScrollVolume < maxScrollVolume) {
            elem.style.display = "block";
            document.body.style.backgroundImage = "";
        }
    });

// document.addEventListener("scroll", function(){
//     console.log(elem.offsetHeight);
// });