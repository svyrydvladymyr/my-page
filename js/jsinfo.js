var info = function(par) {
        var paramInfo = par;
        //console.log(paramInfo);
        // make block with foto
            var param = getID('sideinfo');
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
                var adressi = createNA("i", "class", "far fa-address-card");
                var adressp1 = createN("p", paramInfo.country);
                var adressp2 = createN("p", paramInfo.town);
                info.appendChild(adress);
                adress.appendChild(adressi);
                adress.appendChild(adressp1);
                adress.appendChild(adressp2);
            // make block with info date birthday
                var birthday = createNA("div", "class", "info-name");
                var birthdayi = createNA("i", "class", "fas fa-calendar-alt");
                var birthdayfull = paramInfo.date[0]  + " " + paramInfo.date[1] + " " + paramInfo.date[2];
                var birthdayp = createN("p", birthdayfull);
                info.appendChild(birthday);
                birthday.appendChild(birthdayi);
                birthday.appendChild(birthdayp);
            // make block with info email
                var email = createNA("div", "class", "info-name");
                var emaili = createNA("i", "class", "fas fa-at");
                var emailp = createN("p", paramInfo.email);
                info.appendChild(email);
                email.appendChild(emaili);
                email.appendChild(emailp);
            // make block with info phone
                var phone = createNA("div", "class", "info-name");
                var phonei = createNA("i", "class", "fas fa-phone-volume");
                var phonep = createN("p", paramInfo.phone);
                info.appendChild(phone);
                phone.appendChild(phonei);
                phone.appendChild(phonep);
            // make block with info massage
                var massage = createNA("div", "class", "info-name");
                var massagei = createNA("i", "class", "fas fa-comment");
                var massagep = createN("p", paramInfo.massage);
                info.appendChild(massage);
                massage.appendChild(massagei);
                massage.appendChild(massagep);
            // make block with info profession
                var profession = createNA("div", "class", "info-name");
                var professioni = createNA("i", "class", "fas fa-laptop");
                var professionp1 = createN("p", paramInfo.job);
                var professionp2 = createN("p", paramInfo.joblevel);
                info.appendChild(profession);
                profession.appendChild(professioni);
                profession.appendChild(professionp1);
                profession.appendChild(professionp2);
};