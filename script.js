document.body.onscroll = function() {
    let scrollY = window.scrollY;
    let viewHeight = window.innerHeight;
    document.querySelector("#varY").innerText = scrollY;

    if (scrollY >= 0 && scrollY <= 240) {
        document.querySelector(".big-receipt").dataset.scene = 1
    } else if ((scrollY >= 240 && scrollY <= 480)) {
        document.querySelector(".big-receipt").dataset.scene = 2
    } else if ((scrollY >= 480 && scrollY <= 720)) {
        document.querySelector(".big-receipt").dataset.scene = 3
    } else if ((scrollY >= 720 && scrollY <= 940)) {
        document.querySelector(".big-receipt").dataset.scene = 4
    }
}