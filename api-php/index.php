<?php
//permite guardar peticiones de cualquier direccion 
header("Access-Control-Allow-Origin:*");
// recibir datos enviados en el cuerpo de la peticion
$rawData = file_get_contents("php://input");
//para ver en pantalla lo que estamos recibiendo 
     //print_r($rawData);
//echo 'hola mundo';

//transformar rawdata en un objeto php
$user=json_decode($rawData);

$dsn = "mysql:dbname=store;host=localhost:3306";
$username = "root";
$password = "";

$conecction = new PDO($dsn, $username, $password);
//echo'Conexion exitosa';
$name = $user->name;
$email =$user->email;
$birthdate =$user->birthdate;
$sex= $user->sex;

$query = "INSERT INTO users (username, email, birthdate, sex) VALUES ('$name', '$email','$birthdate', '$sex')";

$conecction->query($query);