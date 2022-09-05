AOS.init();

let body = document.getElementsByClassName("body")[0];
let button = document.getElementsByClassName("menu")[0];
console.log(button.checked);
button.onclick = (event) => {
    if (button.checked == true) {
        body.style = "overflow: hidden;";
    } else if (button.checked == false) {
        body.style = "overflow: scroll;";
    }
};
