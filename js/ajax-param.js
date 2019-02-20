// function for get object from (*.json) file
function getJson(namefile) {
    var file = new XMLHttpRequest();
    file.onreadystatechange = function() {
        if (file.readyState === 4 && file.status == "200") {
            var data = JSON.parse(file.responseText);
            //console.log(data); 
            info(data);
        }
    };
    file.open("GET", namefile, true);
    file.send(null);
}
  
// function for get language
(function(){ 
    var clang = getCookie("lang");
    //console.log(clang);
    if (clang == "en"){
        getJson("./json/configEN.json");
    } else if (clang == "ua"){
        getJson("./json/configUA.json");
    } else {
        getJson("./json/configEN.json");
    }
})();

