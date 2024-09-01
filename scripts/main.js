<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Process the form data, e.g., send an email
    // mail("your-email@example.com", "Contact Form Submission", $message, "From: $email");

    echo "Thank you, $name. Your message has been sent.";
}
?>