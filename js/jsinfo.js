(function() {
    // make block with foto
    var param = document.getElementById('sideinfo');
    var imgdiv = createNodeAndAttributes("div", "class", "ava");
    var img = createNodeAndAttributes("img", "src", paramInfo.foto);
    var imgatr = createAtrib("alt", "MY-FOTO");
    img.setAttributeNode(imgatr); 
    imgdiv.appendChild(img);
    param.appendChild(imgdiv);

    // make wrap block with info
    var maindivinfo = createNodeAndAttributes("div", "class", "info");
    param.appendChild(maindivinfo);

        // make block with info name
        var divinfoname = createNodeAndAttributes("div", "class", "info-name");
        maindivinfo.appendChild(divinfoname);
        var divinfonamep1 = createNode("p", paramInfo.name);
        var divinfonamep2 = createNode("p", paramInfo.surname);
        divinfoname.appendChild(divinfonamep1);
        divinfoname.appendChild(divinfonamep2);

        // make block with info adress
        var divinfoadress = createNodeAndAttributes("div", "class", "info-name");
        maindivinfo.appendChild(divinfoadress);
        var divinfoadressi = createNodeAndAttributes("i", "class", paramInfo.adress.adressclass);
        divinfoadress.appendChild(divinfoadressi);
        var divinfoadressp1 = createNode("p", paramInfo.adress.adresscountry);
        divinfoadress.appendChild(divinfoadressp1);
        var divinfoadressp2 = createNode("p", paramInfo.adress.adresstown);
        divinfoadress.appendChild(divinfoadressp2);

        // make block with info date birthday
        var divinfobirthday = createNodeAndAttributes("div", "class", "info-name");
        maindivinfo.appendChild(divinfobirthday);

        // make block with info email
        var divinfoemail = createNodeAndAttributes("div", "class", "info-name");
        maindivinfo.appendChild(divinfoemail);

        // make block with info phone
        var divinfophone = createNodeAndAttributes("div", "class", "info-name");
        maindivinfo.appendChild(divinfophone);

        // make block with info massage
        var divinfomassage = createNodeAndAttributes("div", "class", "info-name");
        maindivinfo.appendChild(divinfomassage);

        // make block with info profession
        var divinfoprofession = createNodeAndAttributes("div", "class", "info-name");
        maindivinfo.appendChild(divinfoprofession);
})();