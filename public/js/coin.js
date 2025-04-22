
let btn = document.querySelector("button");//Selecting button

btn.addEventListener('click', () => {
    let num = Math.floor(Math.random() * 2) + 1;//random number generating
    let h3 = document.querySelector("h3");
    if(num==1){
        h3.innerText="Head";
    }
    else{
        h3.innerText="Tail"; 
    }
});
