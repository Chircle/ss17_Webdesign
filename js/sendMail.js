/**
 * Created by Mechu on 14.05.2017.
 */

window.onload = function sendMail() {
    var link = "mailto:msimert@stud.hs-heilbronn.de"
        //+ "?cc=myCCaddress@example.com"
        + "&subject=" + escape("Kontaktaufnahme- Galaxy of Unicorns Webseite")
        + "&body=" + escape(document.getElementById('nachricht').value)
    ;

    window.location.href = link;
}