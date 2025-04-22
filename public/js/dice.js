
let btn = document.querySelector("button");

btn.addEventListener('click', () => {
    let num = Math.floor(Math.random() * 6) + 1;
    let h3 = document.querySelector("h3");
    h3.innerText = num;
    let h4 = document.querySelector("#h4");
    if (num == 6) {
        h4.innerText = "Congratulations!! You got six!!!"
    }
    else {
        h4.innerText = "";
    }
});
