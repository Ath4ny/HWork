<?php 

$number_1 = htmlspecialchars($_POST["num_1"]);
$symbol = htmlspecialchars($_POST["sym"]);
$number_2 = htmlspecialchars($_POST["num_2"]);

if($number_1 != "" && $symbol != "" && $number_2 != ""){

    switch($symbol){
        case '-':
        echo $number_1 - $number_2;
        break;
        case '+':
        echo $number_1 + $number_2;
        break;
        case '*':
        echo $number_1 * $number_2;
        break;
        case '/':
        echo $number_1 / $number_2;
        break;
        default:
        echo ("Что-то не так");

    }

}
else{
    echo "Одна или несколько строк пусты";
}


//$name = htmlspecialchars($_POST["name"]);
//INSERT INTO `hw` (`Number`, `Login`, `Password`, `Hand`) VALUES (NULL, '2', '3', '');
//DELETE FROM `hw` WHERE `hw`.`Number` = 1
?>
