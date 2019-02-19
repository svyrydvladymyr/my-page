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

// function for set cookie  
function setCookie(name, value) {
    document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2029 12:00:00 UTC; path=/";
    console.log(document.cookie);
  }

// function for get cookie  
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
 
// function for check cookie
(function () {
    var clang = getCookie("lang");
    if (clang == "") {
      var  getLang = navigator.language;
      console.log(getLang);
      setCookie("lang", getLang);
    } else {
      console.log(clang);
      return clang; 
    }
})();

// function for get language
var getLanguage = function(){ 
    var clang = getCookie("lang");
    var paramInfo = "";
    console.log(clang);
    if (clang == "en"){
        paramInfo = paramInfoEN;
    } else if (clang == "ua"){
        paramInfo = paramInfoUA;
    } else {
        paramInfo = paramInfoEN;
    }
    return paramInfo;
};





