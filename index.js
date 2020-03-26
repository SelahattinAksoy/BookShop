var index = 0;
readTextFile('./img/books/Komedi/Komedi.txt', slyteResim);
slyte();
alert("KATEGORİDEN KİTAP KATEGORİSİ SEÇİP DEVAM EDİNİZ...")

function slyteResim(name, bilgi, fiyat, filePath) {

    var divv = document.createElement("div");
    divv.setAttribute("class", "slayt");



    document.getElementById("most_satanlar").appendChild(divv);
    var img = document.createElement("IMG");
    img.setAttribute("src", filePath + name + ".jpg");
    img.setAttribute("width", "500 ");
    img.setAttribute("height", "500 ");
    divv.appendChild(img);



}


function slyte() {



    var a = document.getElementsByClassName("slayt");

    for (let i = 0; i < a.length; i++) {
        a[i].style.display = "none";
    }
    index++;
    if (index > a.length) {
        index = 1;
    }
    a[index - 1].style.display = "block";
    setTimeout(slyte, 1500);
}

function showInfo(id) {
    var a = document.getElementById(id);


    a.style.display = 'block';

}

function hideInfo(id, look) {

    if (look) {
        var toplam_fiyat = document.getElementById("toplam_fiyat").innerText;
        var fiyat = document.getElementById(id).innerText;


        document.getElementById("toplam_fiyat").innerText = parseFloat(toplam_fiyat) + (parseFloat(fiyat))

        alert((parseFloat(toplam_fiyat) - parseFloat(fiyat)));

        document.getElementById(id).style.display = 'none';
        alert(toplam_fiyat - 10);
        var x = parseInt(toplam_fiyat).valueOf();
        var y = parseInt(fiyat).valueOf();
        var res = x + y;
        alert(res);
        alert(typeof(x));

    } else {
        document.getElementById(id).style.display = 'none';

    }

}

function addSepet(name, fiyat) {

    var a = document.getElementById("button" + name);
    a.setAttribute("class", "buttonBuy");
    a.innerText = "Sepette";

    var list_item = document.createElement("p");
    list_item.setAttribute("id", "listitem" + name);
    list_item.setAttribute("onclick", "hideInfo('" + ("listitem" + name) + "\','yes')");
    list_item.innerHTML = name + "=" + fiyat + " TL";


    var list_item2 = document.createElement("p");
    list_item2.setAttribute("id", "listitem" + name);
    list_item2.innerHTML = name + "=" + fiyat + " TL";

    document.getElementById("kitap_list").appendChild(list_item);
    document.getElementById("Satın_Alındı_list").appendChild(list_item2);
    var toplam_fiyat = document.getElementById("toplam_fiyat").innerText;


    document.getElementById("toplam_fiyat").innerText = parseFloat(toplam_fiyat) + (parseFloat(fiyat))




}

function myFunction(i, bilgi, fiyat, filePath) {
    if (name) {
        document.getElementById('book_head').innerText = "Click For " +
            name + ' Books';

    } else {
        var name = document.getElementById('book_head').innerText;

        var top = document.createElement("div");
        top.setAttribute("id", "top");
        top.setAttribute("class", "toplam");
        document.getElementById("section").appendChild(top);

        var y = document.createElement("div");
        y.setAttribute("class", "liste");
        y.setAttribute("id", i + "a");
        document.getElementById("top").appendChild(y);

        var x = document.createElement("IMG");
        x.setAttribute("src", filePath + i + ".jpg");
        x.setAttribute("width", "200 ");
        x.setAttribute("height", "250 ");
        x.setAttribute("alt", "The Pulpit Rock ");

        x.setAttribute("onmouseover", "showInfo('" + ("göstere" + i) + "\')");
        x.setAttribute("onmouseout", "hideInfo('" + ("göstere" + i) + "\')");
        document.getElementById(i + "a").appendChild(x);

        var info = document.createElement("div");
        info.setAttribute("id", "göstere" + i);

        info.setAttribute("display", "none");
        var ps = document.createElement("p");
        ps.innerHTML = "<h1>" + i + " " + fiyat + " TL" + "</h1><br>" + bilgi;

        var buyBox = document.createElement("button");
        buyBox.innerText = "Sepete Ekle";
        buyBox.setAttribute("class", "button");

        buyBox.setAttribute("id", "button" + i)
        buyBox.setAttribute("onclick", "addSepet('" + i + "\','" + fiyat + "\')");


        document.getElementById(i + "a").appendChild(info);
        document.getElementById("göstere" + i).appendChild(ps);
        document.getElementById("göstere" + i).appendChild(buyBox);

    }

}

function sepet_popup() {
    document.getElementById("sepet_popup").style.display = "block ";
}

function sepet_popup_close(id) {
    document.getElementById(id).style.display = "none ";
}

function buy() {
    document.getElementById("transaction").style.display = "block ";
    document.getElementById("sepet_popup").style.display = "none ";
}

function add_book() {
    document.getElementById("add_book").style.display = "block ";

}

function Satın_Alındı_popup(id) {

    var alıcı_name = document.getElementById("alıcı_name").value;
    var alıcı_adres = document.getElementById("alıcı_adres").value;
    var alıcı_tel = document.getElementById("alıcı_tel").value;
    var alıcı_mail = document.getElementById("alıcı_mail").value;
    if (alıcı_name && alıcı_adres && alıcı_tel && alıcı_mail) {
        hideInfo(id);
        showInfo("Satın_Alındı_popup");
    } else {
        alert(" ASD AEWSD QEWA");
    }

}

function readTextFile(file, myFunctionn) {

    var vars = file;
    var arrVars = vars.split("/");
    var lastVar = arrVars.pop();
    var restVar = arrVars.join("/");
    restVar = restVar + "/";
    var element = document.getElementById("top");
    if (element) {
        element.parentNode.removeChild(element);
    }


    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var strAll = allText.split(",");

                for (i in strAll) {
                    //  alert(strAll[i]);
                    var allInfo = strAll[i].split("=");
                    myFunctionn(allInfo[0], allInfo[1], allInfo[2], restVar);
                }
                return;
            }
        }
    }
    rawFile.send(null);
}



function addNewBookImage() {
    document.getElementById('picField').onchange = function(evt) {
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;


        if (FileReader && files && files.length) {
            var fr = new FileReader();

            fr.onload = function() {
                document.getElementById("outImage").src = fr.result;


            }
            fr.readAsDataURL(files[0]);
        } else {
            alert("böyle bir kategori yohtur...");
        }
    }
}