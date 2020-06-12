function load(){
    document.documentElement.style.setProperty("--screen-width",window.innerWidth); //code originally written on a 1920x969 monitor
    document.documentElement.style.setProperty("--screen-height", window.innerHeight);
    slideshow(0);
}

var prevSlide=5;

function slideshow(slide){
//    graphic
    document.getElementById("g" + prevSlide).classList.remove("float");
    document.getElementById("g" + prevSlide).classList.add("drop");
    
//    description
    document.getElementById("d" + prevSlide).classList.remove("slideIn");
    
//    tab
    document.getElementById("t" + prevSlide).classList.remove("active");
    
    prevSlide=slide;
    
//    graphic
    document.getElementById("g" + slide).classList.remove("drop");
    document.getElementById("g" + slide).classList.add("lift");
    
//    description
    document.getElementById("d" + slide).classList.add("slideIn");
    
//    tab
    document.getElementById("t" + slide).classList.add("active");
    
    setTimeout(() => {
        document.getElementById("g" + slide).classList.remove("lift");
        document.getElementById("g" + slide).classList.add("float");
    }, 500);
}