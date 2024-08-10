<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Your email where the message will be sent
    $to = "dhanwanthfofficial27@gmail.com"; // Replace with your email address
    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = "You have received a new message from your website contact form.\n\n".
                  "Here are the details:\n\nName: $name\n\n".
                  "Email: $email\n\n".
                  "Subject: $subject\n\n".
                  "Message:\n$message";

    // Headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>
