var openSetting = function(){
    var openGASet = document.getElementById("set");
    var openGASetting = document.getElementById("setting");
    if (openGASet.className === "set"){
        openGASet.className = "set_close";
    } else {
        openGASet.className = "set";
    }
    if (openGASetting.className === "setting"){
        openGASetting.className = "setting_close";
    } else {
        openGASetting.className = "setting";
    }
};

(function(){
    var val = getCookie("lang");
    var ua = document.getElementById("lang_ua");
    var en = document.getElementById("lang_en");
    if (val == "ua"){
        en.style.width = 14 + "%";
        ua.style.width = 82 + "%";
    } else if (val == "en"){
        ua.style.width = 14 + "%";
        en.style.width = 82 + "%";
    } 
    return ua, en;   
})(); 

var changLang = function(val){
    var ua = document.getElementById("lang_ua");
    var en = document.getElementById("lang_en");
    if (val == "ua"){
        en.style.width = 14 + "%";
        ua.style.width = 82 + "%";
        setCookie("lang", "ua");
        getJson("./json/configUA.json");
    } else if (val == "en"){
        ua.style.width = 14 + "%";
        en.style.width = 82 + "%";
        setCookie("lang", "en");
        getJson("./json/configEN.json");
    } 
    return ua, en;   
}; 

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
var setBgColor = function(col) {
    var bgCol = "";
    var bgColor = "";
        setCookie("bgcolor", col);
        bgCol = getCookie("bgcolor");
        bgColor = getTAG("body");
        bgColor[0].style.backgroundColor = bgCol;
};

