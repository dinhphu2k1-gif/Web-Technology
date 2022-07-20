<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert table</title>
</head>
<body>
<?php

$server = 'localhost';
$user = 'phongnx';
$pass = 'phongnx';
$mydb = 'test';
$table_name = 'Products';
$connect = mysqli_connect($server, $user, $pass, $mydb);

if(!$connect) {
    die ("Connect fail to $server using $user");
} 

else {
    $product_id = 0;
    $product_desc = $_POST["product_desc"];
    $weight = $_POST["weight"];
    $cost = $_POST["cost"];
    $number = $_POST["number"];
    $SQLcmd = "INSERT INTO $table_name (ProductID, Product_desc, Cost, Weight, Numb) VALUES($product_id, '$product_desc', $cost, $weight, $number)";
    if(mysqli_query($connect, $SQLcmd)) {
        print "<div>Query: $SQLcmd</div>";
        print "<div>Insert succesfully into $table_name !</div>";
    } else {
        die ("Insert into $table_name failed SQLcmd=$SQLcmd");
    }
 
    mysqli_close($connect);
}
?>
</body>
</html>