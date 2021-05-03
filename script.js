
window.addEventListener('scroll', () => {

    let ele = document.querySelector("#hero-button");
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) > 150) {
        changeFlt()
        
    }
    if (Math.ceil(scrolled) < 150) {
        changeBtn()
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