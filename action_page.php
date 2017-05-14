<?php 
if(isset($_POST['submit'])){
    $to = "msimert@stud.hs-heilbronn.de"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $anrede = $_POST['anrede'];
    $vorname = $_POST['vorname'];
    $nachname = $_POST['nachname'];
    $subject = "Kontaktaufnahme - Galaxy of Unicorns - Sonia, Luzie, Mechu";
    $subject2 = "Kopie ihrer Nachricht";
    $nachricht = $vorname . " " . $nachname . " wrote the following:" . "\n\n" . $_POST['nachricht'];
    $nachricht2 = "Here is a copy of your nachricht " . $vorname . "\n\n" . $_POST['nachricht'];

    $headers = "Von:" . $from;
    $headers2 = "Von:" . $to;
    mail($to,$subject,$nachricht,$headers);
    mail($from,$subject2,$nachricht2,$headers2); // sends a copy of the nachricht to the sender
    echo "Mail Sent. Thank you " . $vorname . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>