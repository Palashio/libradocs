load = null;

$(function(){
     function load_function(id){
         $("#content").empty();
        $("#content").load(id + ".html"); 
     }
       
    load = load_function;
    load("about"); //default
});

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
    for(index = 0; index< navTabs.length; index++){ //add animate to given dropdowns and nav-tabs
        navTabs[index].classList.add("selected");
    }
    
    load(id);
}

function bar(path){
    document.getElementById("nav-bar").innerHTML = path;
}