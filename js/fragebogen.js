/**
 * Created by Sonia on 15.05.2017.
 */
window.onload = function questionnaireResult() {
    var a = document.getElementById('firstQuest').value;
    var b = document.getElementById('secondQuest').value;
    var c = document.getElementById('thirdQuest').value;

    /*    var first = a.options[a.selectedIndex].value;
     var second = b.options[b.selectedIndex].value;
     var third = c.options[c.selectedIndex].value;*/


    if (a == "suess") {
        for (i = 1; i <= suessArr.length(); i++) {
            suessArr.push(i);
        }
    } else if (a == "herzhaft") {
        for (q = 1; q <= herzhaftArr.length(); q++) {
            herzhaftArr.push(q);
        }
    } else if (a == "-") {
        for (r = 1; r <= unwissendArr.length(); r++) {
            unwissendArr.push(r);
        }
    } else if (b == "suess") {
        for (i = 1; i <= suessArr.length(); i++) {
            suessArr.push(i);
        }
    } else if (b == "herzhaft") {
        for (q = 1; q <= herzhaftArr.length(); q++) {
            herzhaftArr.push(q);
        }
    } else if (b == "-") {
        for (r = 1; r <= unwissendArr.length(); r++) {
            unwissendArr.push(r);
        }
    } else if (c == "suess") {
        for (i = 1; i <= suessArr.length(); i++) {
            suessArr.push(i);
        }
    } else if (c == "herzhaft") {
        for (q = 1; q <= herzhaftArr.length(); q++) {
            herzhaftArr.push(q);
        }
    } else if (c == "-") {
        for (r = 1; r <= unwissendArr.length(); r++) {
            unwissendArr.push(r);
        }
    }

    if (suessArr.length() > herzhaftArr.length() && suessArr.length() > unwissendArr.length()) {
        document.getElementById("result").innerHTML = "Du bist ein süßes Einhorn! " + document.write("<img src='../img/cuteUnicorn.gif'/>");

    } else if (herzhaftArr.length() > suessArr.length() && herzhaftArr.length() > unwissendArr.length()) {
        document.getElementById("result").innerHTML = "Du bist ein herzhaftes Einhorn! " + document.write("<img src='../img/CuteUnicorn2.gif'/>");

    } else if (unwissendArr.length() > suessArr.length() && unwissendArr.length() > herzhaftArr.length()) {
        document.getElementById("result").innerHTML = "Du bist ein noch unentschlossenes Einhorn! " + document.write("<img src='../img/CuteUnicorn3.gif'/>");

    }

}