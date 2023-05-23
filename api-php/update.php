<?php
header("Access-Control-Allow-Origin:*");
$data = file_get_contents("php://input");
$user = json_decode($data);
$dsn = "mysql:dbname=store;host=localhost:3306";
$username = "";
$password = "";

$connection = new PDO($dsn, $username, $password);

$id = $user->id;
$name = $user->name;
$email = $user->email;
$birthDate = $user->birthdate;
$sex = $user->sex;

$query = "UPDATE users SET
username = '$name', email = '$email', 
birthdate = '$birthDate', sex = '$sex'
where id = $id";


$connection->query($query);

echo"{'message': 'success'}";