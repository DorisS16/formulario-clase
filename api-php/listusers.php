<?php
header("Access-Control-Allow-Origin:*");
$dsn = "mysql:dbname=store;host=localhost:3306";
$username = "root";
$password = "" ; 
$connection = new PDO($dsn, $username, $password);

$query = "SELECT * FROM users";

$result = $connection->query($query, PDO::FETCH_OBJ);

//print_r($result);

$users =[];
foreach($result as $item){
    $users[] = $item;
}
//echo '<pre>';
//print_r($users);

print json_encode($users);