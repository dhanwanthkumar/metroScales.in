<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email address where you want to receive the form submissions
    $to = "workgit9@gmail.com";
    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = "You have received a new message from your website contact form.\n\n".
                  "Here are the details:\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Subject: $subject\n".
                  "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect to a thank you page or show a success message
        echo "<script>alert('Thank you for reaching out! We will get back to you soon.');window.location.href='contact.html';</script>";
    } else {
        // Show an error message if the email fails to send
        echo "<script>alert('There was an error sending your message. Please try again later.');window.location.href='contact.html';</script>";
    }
} else {
    // Redirect to the form if accessed directly
    header("Location: /home.html");
    exit();
}
