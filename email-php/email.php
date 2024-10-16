<?php

// Email address that you want the form to be submitted to.
$receive_mails_at = "123@gmail.com";

$homePage = "/";
$thankyouPage = "../thankyou.html"; // Added missing semicolon

if (!isset($_REQUEST['email'])) {
   header("Location: $homePage");
   exit; // Exit after redirecting
}

// Form Fields
$firstname = $_REQUEST['name'];
$email = $_REQUEST['email'];
$number = $_REQUEST['number'];
$message = $_REQUEST['message'];


$msg = 
   "First Name: " . $firstname . "\r\n" . 
   "Email: " . $email . "\r\n" . 
   "Number: " . $number . "\r\n" . // Added missing period and colon
   "Message: " . $message ;

// Send mail
$send_email = mail($receive_mails_at, "Contact Form", $msg);

if ($send_email) {
    header("Location: $thankyouPage");
} else {
    echo 'error';
}

?>