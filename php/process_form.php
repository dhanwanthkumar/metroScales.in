<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "workgit9@gmail.com";  // Replace with your email address
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $fullMessage = "Name: $name\n";
    $fullMessage .= "Email: $email\n";
    $fullMessage .= "Subject: $subject\n";
    $fullMessage .= "Message:\n$message\n";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    header("Location: index.html"); // Redirect back to the form if accessed directly
    exit();
}
?>