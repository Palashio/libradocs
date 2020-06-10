function load(){
    document.documentElement.style.setProperty("--screen-width", window.innerWidth); //code originally written on a 1920x969 monitor
    document.documentElement.style.setProperty("--screen-height", window.innerHeight);
}

window.addEventListener("scroll", function(e){
    document.documentElement.style.setProperty("--anim-del", -window.pageYOffset/((5000/969 * window.innerHeight )-window.innerHeight+20) + 's');
});