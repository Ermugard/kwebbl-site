<?php
$data = array(
    'name' => '',
    'company' => '',
    'email' => '',
    'phone' => '',
    'subject' => '',
    'message' => '',
    'copy' => ''
);

$errors = array(
    'name' => false,
    'company' => false,
    'email' => false,
    'phone' => false,
    'subject' => false,
    'message' => false,
    'copy' => false
);

$required = array(
    'name', 'email', 'subject', 'message'
);

foreach($data as $key => $val){
    if(isset($_POST[$key]) && !empty($_POST[$key])){
        $data[$key] = $_POST[$key];
        trim($data[$key]);
        if(get_magic_quotes_gpc()) $data[$key] = stripslashes($data[$key]);
        $data[$key] = htmlentities($data[$key]);
    }
}

foreach($required as $key){
    if(empty($data[$key])){
        $errors[$key] = 'This field is required';
    }
}

foreach($errors as $error){
    if($error){
        include('../index.php');
        exit;
    }
}

$to      = 'Kwebbl <l.karpenko@kwebbl.com>';
$subject = $data['subject'];
$message = $data['message'] . "\r\n" .
    '------- Send through kwebbl.com -------' . "\r\n" . 
    'Name: ' . $data['name'] . "\r\n" .
    'Company: ' . $data['company'] . "\r\n" .
    'Email: ' . $data['email'] . "\r\n" .
    'Phone: ' . $data['phone'] . "\r\n";
$message = nl2br($message);
$headers = 'MIME-Version: 1.0' . "\r\n" .
    'Content-type: text/html; charset=utf8' . "\r\n" .
    'From: ' . $data['name'] . ' <' . $data['email'] . '>' . "\r\n";

if($data['copy'] == "on"){
    $headers .= 'Bcc: ' . $data['email'] . "\r\n";
}

if(mail($to, $subject, $message, $headers)){
    $emailSend = true;
    include('../index.php');
    exit;
}
$emailSend = false;
include('../index.php');
?>
