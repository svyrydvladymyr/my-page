// function for get id node
var getID = function(val) {
    var getid = document.getElementById(val);
    return getid;
};

// function for get class node
var getCL = function(val) {
    var getclass = document.getElementsByClassName(val);
    return getclass;
};

// function for get tag name
var getTAG = function(val) {
    var getclass = document.getElementsByTagName(val);
    return getclass;
};

// function for adding node 
var createN = function(noda, val) {
    var elem = document.createElement(noda);
    elem.innerHTML = val;
    return elem;
};

// function for adding node with atributes
var createNA  = function(noda, atr, val) {
    var elem = document.createElement(noda);
    var atribute = document.createAttribute(atr);
    atribute.value = val;
    elem.setAttributeNode(atribute);    
    return elem;
};

// function for adding atributes
var createA = function(atr, val) {
    var elem = document.createAttribute(atr);
    elem.value = val;
    return elem;
};

var changLang = function(val){
    var ua = document.getElementById("lang_ua");
    var en = document.getElementById("lang_en");
    if (val == "ua"){
        en.style.width = 15 + "%";
        ua.style.width = 81 + "%";
    } else if (val == "en"){
        ua.style.width = 15 + "%";
        en.style.width = 81 + "%";
    } 
    return ua, en;   
} 


