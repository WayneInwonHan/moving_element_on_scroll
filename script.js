
window.addEventListener('scroll', () => {

    let ele = document.querySelector("#hero-button");
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) > 150) {
        changeFlt()
        move_out()
        
    }
    if (Math.ceil(scrolled) < 150) {
        changeBtn()
        move_in()
    }
})

function changeFlt() {
    let ele = document.querySelector("#hero-button");
    let txt = document.querySelector("#btn-text");
    let icon = document.querySelector("#git-icon");

    ele.style.left='92.5%';
    ele.style.top='85%';
    ele.style.width='75px';
    ele.style.height='75px';
    ele.style.backgroundColor="rgb(228, 228, 228)";
    ele.style.borderRadius='50%';
    ele.style.position='fixed';
    txt.style.display="none";
    icon.style.display="inline";
}

function changeBtn() {
    let ele = document.querySelector("#hero-button");
    let txt = document.querySelector("#btn-text");
    let icon = document.querySelector("#git-icon");

    ele.style.left='43.25%';
    ele.style.top='50.00%';
    ele.style.width='200px';
    ele.style.height='50px';
    ele.style.backgroundColor="black";
    ele.style.borderRadius='25px';
    txt.style.display="inline";
    icon.style.display="none";
}

function move_in() {
    let left_curtain = document.querySelector("#curtain-left");
    let right_curtain = document.querySelector("#curtain-right");

    left_curtain.style.left='20%';
    right_curtain.style.right='20%';
}

function move_out() {
    let left_curtain = document.querySelector("#curtain-left");
    let right_curtain = document.querySelector("#curtain-right");

    left_curtain.style.left='0%';
    right_curtain.style.right='0%';
}