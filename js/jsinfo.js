(function() {
    // make block with foto
    var param = document.getElementById('sideinfo');
    var imgdiv = createNA("div", "class", "ava");
    var img = createNA("img", "src", paramInfo.foto);
    var imgatr = createA("alt", "MY-FOTO");
    img.setAttributeNode(imgatr); 
    imgdiv.appendChild(img);
    param.appendChild(imgdiv);
    // make wrap block with info
    var info = createNA("div", "class", "info");
    param.appendChild(info);
        // make block with info name
        var name = createNA("div", "class", "info-name");
        var namep1 = createN("p", paramInfo.name);
        var namep2 = createN("p", paramInfo.surname);
        info.appendChild(name);
        name.appendChild(namep1);
        name.appendChild(namep2);
        // make block with info adress
        var adress = createNA("div", "class", "info-name");
        var adressi = createNA("i", "class", paramInfo.adress.adressclass);
        var adressp1 = createN("p", paramInfo.adress.adresscountry);
        var adressp2 = createN("p", paramInfo.adress.adresstown);
        info.appendChild(adress);
        adress.appendChild(adressi);
        adress.appendChild(adressp1);
        adress.appendChild(adressp2);
        // make block with info date birthday
        var birthday = createNA("div", "class", "info-name");
        var birthdayi = createNA("i", "class", paramInfo.born.bornclass);
        var birthdayfull = paramInfo.born.date  + " " + paramInfo.born.month + " " + paramInfo.born.year;
        var birthdayp = createN("p", birthdayfull);
        info.appendChild(birthday);
        birthday.appendChild(birthdayi);
        birthday.appendChild(birthdayp);
        // make block with info email
        var email = createNA("div", "class", "info-name");
        var emaili = createNA("i", "class", paramInfo.email.emailclass);
        var emailp = createN("p", paramInfo.email.emailname);
        info.appendChild(email);
        email.appendChild(emaili);
        email.appendChild(emailp);
        // make block with info phone
        var phone = createNA("div", "class", "info-name");
        var phonei = createNA("i", "class", paramInfo.phone.phoneclass);
        var phonep = createN("p", paramInfo.phone.phonename);
        info.appendChild(phone);
        phone.appendChild(phonei);
        phone.appendChild(phonep);
        // make block with info massage
        var massage = createNA("div", "class", "info-name");
        var massagei = createNA("i", "class", paramInfo.phone.massageclass);
        var massagep = createN("p", paramInfo.phone.phonename);
        info.appendChild(massage);
        massage.appendChild(massagei);
        massage.appendChild(massagep);
        // make block with info profession
        var profession = createNA("div", "class", "info-name");
        var professioni = createNA("i", "class", paramInfo.job.jobclass);
        var professionp1 = createN("p", paramInfo.job.jobname);
        var professionp2 = createN("p", paramInfo.job.joblevel);
        info.appendChild(profession);
        profession.appendChild(professioni);
        profession.appendChild(professionp1);
        profession.appendChild(professionp2);
})();