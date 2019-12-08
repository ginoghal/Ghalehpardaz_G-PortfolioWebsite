<?php

ini_set('display_errors', 1);
// var_dump($_POST['name']);

// var_dump($_GET);

if(empty($_POST)){
    echo 'no...';
    exit;//
}

$name= '';
$email= '';
$subject= '';
$recipient='ginoghalehpardaz@hotmail.com';

if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r","\n","%0a","%0D"),'',$_POST['email']);
    $email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['subject'])){
    $subject = filter_var($_POST['subject'],FILTER_SANITIZE_STRING);
}

$headers = array(
    'From' => 'noreply@test.ca',
    'Reply-To'=>$name.'<'.$email.'>'
);

if(mail($recipient, $subject,implode("\r\n", $headers))){
    echo '<p>Thank you for contacting us, '.$name.'</p>';
}else{
    echo '<p>We are sorry we cant get email</p>';
}

?>
