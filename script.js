
window.addEventListener('scroll', () => {

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrolled);
    console.log(scrollable);

    if (Math.ceil(scrolled) > 360) {
        alert("alert!")
    }
})