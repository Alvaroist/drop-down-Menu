var blog = document.getElementById("blog");
var services=document.getElementById("services");
var about=document.getElementById("about");
var spreadmenu = false;
var spreadSubMenu=true;
var idMenu;
var idSubMenu;

var subblog1;
var subblog2;
var subblog3;
var subtitle1b;
var subtitle2b;
var subtitle3b;

var subservice1;
var subservice2;
var subservice3;
var subtitle1s;
var subtitle2s;
var subtitle3s;

var subabout1;
var subabout2;
var subabout3;
var subtitle1a;
var subtitle2a;
var subtitle3a;

var opblog1;
var textblog1;
var opblog2;
var textblog2;

document.addEventListener("click",menuSelector);

function menuSelector(event){
    console.log(event);
    switch(event.target.id){
        case "blog":
            if(spreadmenu==false){
                spreadMenu(event.target.id);
                break;
            }
            else if(idMenu==event.target.id){
                removeMenu(event.target.id);
                break;
            }
            else{
                removeMenu(idMenu);
                spreadMenu(event.target.id);
                break;
            }
        case "services":
            if(spreadmenu==false){
                spreadMenu(event.target.id);
                break;
            }
            else if(idMenu==event.target.id){
                removeMenu(event.target.id);
                break;
            }
            else{
                removeMenu(idMenu);
                spreadMenu(event.target.id);
                break;
            }
        case "about":
            if(spreadmenu==false){
                spreadMenu(event.target.id);
                break;
            }
            else if(idMenu==event.target.id){
                removeMenu(event.target.id);
                break;
            }
            else{
                removeMenu(idMenu);
                spreadMenu(event.target.id);
                break;
            }
        default:
            subMenuSelector(event);
    }
}

const subMenuSelector=subevent=> {
    if(spreadSubMenu==true && subevent.target.textContent=="sublog1"){
        spreadMenu(subevent.target.textContent);
    }
    else{
        removeMenu(idSubMenu);
    }
}

/*function subMenuSelector(subevent){
    console.log(subevent);
    if(spreadSubMenu==true && subevent.target.textContent=="sublog1"){
        spreadMenu(subevent.target.textContent);
    }
    else{
        removeMenu(idSubMenu);
    }
}*/

function spreadMenu(menu) {
    if (menu == "blog") {
        subblog1 = document.createElement("div");
        subtitle1b = document.createTextNode("sublog1");
        subblog1.appendChild(subtitle1b);
        blog.appendChild(subblog1);

        subblog2 = document.createElement("div");
        subtitle2b = document.createTextNode("sublog2");
        subblog2.appendChild(subtitle2b);
        blog.appendChild(subblog2);

        subblog3 = document.createElement("div");
        subtitle3b = document.createTextNode("sublog3");
        subblog3.appendChild(subtitle3b);
        blog.appendChild(subblog3);
        spreadmenu = true;
        idMenu = menu;
    }

    if (menu == "services") {
        subservice1 = document.createElement("div");
        subtitle1s = document.createTextNode("STUV");
        subservice1.appendChild(subtitle1s);
        services.appendChild(subservice1);

        subservice2 = document.createElement("div");
        subtitle2s = document.createTextNode("XWERT");
        subservice2.appendChild(subtitle2s);
        services.appendChild(subservice2);

        subservice3 = document.createElement("div");
        subtitle3s = document.createTextNode("NMKIO");
        subservice3.appendChild(subtitle3s);
        services.appendChild(subservice3);
        spreadmenu = true;
        idMenu = menu;
    }

    if (menu == "about") {
        subabout1 = document.createElement("div");
        subtitle1a = document.createTextNode("STUV");
        subabout1.appendChild(subtitle1a);
        about.appendChild(subabout1);

        subabout2 = document.createElement("div");
        subtitle2a = document.createTextNode("XWERT");
        subabout2.appendChild(subtitle2a);
        about.appendChild(subabout2);

        subabout3 = document.createElement("div");
        subtitle3a = document.createTextNode("NMKIO");
        subabout3.appendChild(subtitle3a);
        about.appendChild(subabout3);
        spreadmenu = true;
        idMenu = menu;
    }
    if (menu == "sublog1") {
        opblog1 = document.createElement("li");
        textblog1 = document.createTextNode("opcion 1");
        opblog1.appendChild(textblog1);
        subblog1.appendChild(opblog1);

        opblog2 = document.createElement("li");
        textblog2 = document.createTextNode("opcion 2");
        opblog2.appendChild(textblog2);
        subblog1.appendChild(opblog2);
        spreadSubMenu = false;
        idSubMenu = menu;
    }
}

function removeMenu(menu){
    if(menu=="blog"){
        subblog3.parentNode.removeChild(subblog3);
        subblog2.parentNode.removeChild(subblog2);
        subblog1.parentNode.removeChild(subblog1);
        spreadmenu = false;
    }
    
    if(menu=="services"){
        subservice3.parentNode.removeChild(subservice3);
        subservice2.parentNode.removeChild(subservice2);
        subservice1.parentNode.removeChild(subservice1);
        spreadmenu = false;
    }
    
    if(menu=="about"){
        subabout3.parentNode.removeChild(subabout3);
        subabout2.parentNode.removeChild(subabout2);
        subabout1.parentNode.removeChild(subabout1);
        spreadmenu = false;
    }
    if(menu=="sublog1"){
        opblog1.parentNode.removeChild(opblog1);
        opblog2.parentNode.removeChild(opblog2);
        spreadSubMenu=true;
    }
}