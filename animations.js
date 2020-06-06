function navAnimate(id){
    var navTabs = document.getElementsByClassName("dropdown-item"); //remove animate from other dropdown items
    var index;
    for(index = 0; index< navTabs.length; index++){
        navTabs[index].classList.remove("selected");
    }
    
    var navTabs = document.getElementsByClassName(id);
    for(index = 0; index< navTabs.length; index++){ //add animate to given dropdowns
        navTabs[index].classList.add("selected");
    }
}
