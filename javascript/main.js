AOS.init();

let body = document.getElementsByTagName("body")[0];
let menuButton = document.getElementsByTagName("label")[0];

menuButton.addEventListener("click", myFunction);

function myFunction() {
    $("body").css(
        "overflow",
        $("body").css("overflow") == "hidden" ? "auto" : "hidden"
    );
}
