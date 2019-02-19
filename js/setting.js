// function for set background-color default
(function(){
    //var x = 27 + "px";
    //document.documentElement.style.setProperty('--border-radius-main', x);
    var bgCol = "";
    var bgColor = "";
    bgCol = getCookie("bgcolor");
    if (bgCol == ""){
        bgColor = getTAG("body");
        bgColor[0].style.backgroundColor = "#f1f1f1";
    } else {
        bgColor = getTAG("body");
        bgColor[0].style.backgroundColor = bgCol;
    }
})();

// function for change background-color 
var bgColor = function(col) {
    var bgCol = "";
    var bgColor = "";
        setCookie("bgcolor", col);
        bgCol = getCookie("bgcolor");
        bgColor = getTAG("body");
        bgColor[0].style.backgroundColor = bgCol;

};

