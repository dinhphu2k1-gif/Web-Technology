<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create table</title>
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
    die ("Cannot connect to $server using $user");
} 
else {
    $SQLcmd = "CREATE TABLE $table_name(
                            ProductID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            Product_desc VARCHAR(50),
                            Cost INT,
                            Weight INT,
                            Numb INT)";
    
    if(mysqli_query($connect, $SQLcmd)) {
        print '<font size="4" color="blue" >Created Table ';
        print "<i>$table_name</i> in database <i>$mydb</i><br></font>"; 
        print "<br>SQLcmd=$SQLcmd";
    } 
    else {
        die ("Table Create Creation Failed SQLcmd=$SQLcmd");
    }
    mysqli_close($connect);
}
?>
</body>
</html>