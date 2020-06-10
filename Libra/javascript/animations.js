function navAnimate(id){
    var navTabs = document.getElementsByClassName("nav-tab"); //remove animate from other nav-tabs
    var index;
    for(index = 0; index< navTabs.length; index++){
        navTabs[index].classList.remove("selected");
    }
    
    navTabs = document.getElementsByClassName("dropdown-item"); //remove animate from other dropdown items
    for(index = 0; index< navTabs.length; index++){
        navTabs[index].classList.remove("selected");
    }
    
    navTabs = document.getElementsByClassName(id);
    for(index = 0; index< navTabs.length; index++){ //add animate to given dropdowns
        navTabs[index].classList.add("selected");
    }
}
