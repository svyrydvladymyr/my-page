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