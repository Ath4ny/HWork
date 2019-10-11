<?php

$login = htmlspecialchars($_POST["log"]);
$pas = htmlspecialchars($_POST["pas"]);

$host = 'localhost';
$database = 'hw';
$user = 'root';
$password = '';

$link = mysqli_connect($host, $user, $password, $database) or die (" ERROR ".mysqli_error($link));
$query = "INSERT INTO `hw` (`Number`, `Login`, `Password`, `Hand`) VALUES (NULL, '$login', '$pas','')";
$result = mysqli_query($link,$query) or die (" ERROR ".mysqli_error($link));
if($result){
    echo ' {"mes":"ВСЁ НОРМАС-ПИВАС"}';
}else{
    echo ' {"mes":"ВСЁ НЕ НОРМАС-ПИВАС"}';
}

// echo '{"jopa":"'.$_POST["log"].'", "nejopa":"'.$_POST["pas"].'"}'; 
?>