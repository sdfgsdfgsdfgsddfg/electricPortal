function openNav(){
    const aside = document.querySelector("aside");
    const w = window.innerWidth;
    if(aside.style.display == "none"){
        aside.style.display = "";
    }
    setTimeout(function(){
        if(aside.dir == ""){
            if(aside.style.left == "-100%"){
                if(w <= 600){
                    document.querySelector(".nd").style.display="block";
                    document.querySelector(".nd").style.backgroundColor="rgb(0,0,0,.5)";
                }
                document.querySelector("main").removeAttribute("style");
                document.querySelector("aside").style.left="0";
            }else{
                if(w <= 600){
                    document.querySelector(".nd").removeAttribute("style");
                }
                document.querySelector("main").style.left="0";
                document.querySelector("aside").style.left="-100%";
            }
        }else{
            if(aside.style.right == "-100%"){
                if(w <= 600){
                    document.querySelector(".nd").style.display="block";
                    document.querySelector(".nd").style.backgroundColor="rgb(0,0,0,.5)";
                }
                document.querySelector("main").removeAttribute("style");
                document.querySelector("aside").style.right="0";
            }else{
                if(w <= 600){
                    document.querySelector(".nd").removeAttribute("style");
                }
                document.querySelector("main").style.right="0";
                document.querySelector("aside").style.right="-100%";
            }
        }
    },.01);
}

$(document).on("click","#menu",function(){
    openNav();
});
const w = window.innerWidth;
if(w <= 600){
    const aside = document.querySelector("aside");
    aside.style.display = "none";
    if(aside.dir == ""){
        if(aside.style.left == "-100%"){
            document.querySelector("aside").style.left="0";
        }else{
            document.querySelector("aside").style.left="-100%";
        }
    }else{
        if(aside.style.right == "-100%"){
            document.querySelector("aside").style.right="0";
        }else{
            document.querySelector("aside").style.right="-100%";
        }
    }
}
$(document).on("click","aside ,.nd",function(){
    winWidth = $(window).width();
    if(winWidth <= 600){
        openNav();
    }
});


// function viewLoading(){
//     setTimeout(function(){
//         document.querySelector(".progress").style.transform = "scaleY(1)";
//         document.querySelector(".content").style.opacity = "0";
//     },.2);
// }

$(document).on("click","#addAssay",function(){
    closeAssayViewer();
    closeSettings();
    addAssay = document.querySelector("#addAssayForm");
    addAssay.style.display="block";
    setTimeout(function(){
        addAssay.style.marginBottom="0";
        addAssay.style.opacity="1";
        addAssay.style.transform="scale(1)";
    }, 200);
    document.querySelector(".selected").classList.remove("selected");
    document.getElementById("addAssay").classList.add("selected");
});
$(document).on("click",".list button",function(){
    closeAssayForm();
    closeSettings();
    viewAssay = document.querySelector("#assayForm");
    viewAssay.style.display="block";
    setTimeout(function(){
        viewAssay.style.marginBottom="0";
        viewAssay.style.opacity="1";
        viewAssay.style.transform="scale(1)";
    }, 200);
    document.querySelector(".selected").classList.remove("selected");
    document.getElementById("home").classList.add("selected");
});
function closeAssayForm(){
    addAssay = document.querySelector("#addAssayForm");
    addAssay.style.marginBottom="-120px";
    addAssay.style.opacity="0";
    addAssay.style.transform="scale(.7)";
    setTimeout(function(){
        addAssay.style.display="none";
    }, 200);
    document.querySelector(".selected").classList.remove("selected");
    document.getElementById("home").classList.add("selected");
}
function closeAssayViewer(){
    viewAssay = document.querySelector("#assayForm");
    viewAssay.style.marginBottom="-120px";
    viewAssay.style.opacity="0";
    viewAssay.style.transform="scale(.7)";
    setTimeout(function(){
        viewAssay.style.display="none";
    }, 200);
    document.querySelector(".selected").classList.remove("selected");
    document.getElementById("home").classList.add("selected");
}
function closeSettings(){
    settings = document.querySelector("#settingsForm");
    settings.style.marginBottom="-120px";
    settings.style.opacity="0";
    settings.style.transform="scale(.7)";
    setTimeout(function(){
        settings.style.display="none";
    }, 200);
    document.querySelector(".selected").classList.remove("selected");
    document.getElementById("home").classList.add("selected");
}
$(document).on("click",".back-btn,#home",function(){
    closeAssayForm();
    closeAssayViewer();
    closeSettings();
});

$(document).on("click","#settings",function(){
    closeAssayForm();
    closeAssayViewer();
    settings = document.querySelector("#settingsForm");
    settings.style.display="block";
    setTimeout(function(){
        settings.style.marginBottom="0";
        settings.style.opacity="1";
        settings.style.transform="scale(1)";
    }, 200);
    document.querySelector(".selected").classList.remove("selected");
    document.getElementById("settings").classList.add("selected");
});


$(document).on("click","#searchBtn",function(){
    document.getElementById("searchInput").value = "";
    document.querySelector(".search-group").style.display="block";
    document.querySelector(".search-box").classList.add("show-sb");
    document.getElementById("searchInput").focus();
});
$(document).on("click",".close-search",function(){
    document.querySelector(".search-group").removeAttribute("style");
    document.querySelector(".search-box").classList.remove("show-sb");
});