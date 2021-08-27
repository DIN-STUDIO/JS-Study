const h1 = document.querySelector("#hello")
h1.style.color = "white";

if (window.outerWidth > 0 && window.outerWidth <= 960)
    document.body.style.backgroundColor = "cornflowerblue"
else if (window.outerWidth > 960 && window.outerWidth <= 1440)
    document.body.style.backgroundColor = "coral"
else if (window.outerWidth > 1440)
    document.body.style.backgroundColor = "blueviolet"

function onBrowserResize(){
    let windowWidth = window.outerWidth;
    
    if (windowWidth > 0 && windowWidth <= 960)
        document.body.style.backgroundColor = "cornflowerblue"
    else if (windowWidth > 960 && windowWidth <= 1440)
        document.body.style.backgroundColor = "coral"
    else if (windowWidth > 1440)
        document.body.style.backgroundColor = "blueviolet"
}
window.addEventListener("resize", onBrowserResize)

