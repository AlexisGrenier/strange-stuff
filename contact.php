<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

//////////////////////////////////

if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];


///

if ($name === ''){
  echo "Name required.";
  die();
}
if ($email === ''){
  echo "E-mail is missing.";
  die();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo "Invalid e-mail format.";
    die();
  }
}
if ($subject === ''){
  echo "Subject is required.";
  die();
}
if ($message === ''){
  echo "Message field can not be empty.";
  die();
}
//////////////////////////////////

    $email_from ='Formulaire de contact - Strange Stuff';
    $email_subject ='Nouveaux message du formulaire de contact';
    $email_body = "Name: $name.\n".
                "E-mail: $email.\n".
                "Subject: $subject\n".
                "Message: $message.\n";
    $to ="to.alexisg@gmail.com";
    $headers ="From: $email_from \r\n";
    $headers .="Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);


    header("location:index.html");

?>