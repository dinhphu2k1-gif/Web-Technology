<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration</title>
</head>

<body style="width:100vh">
<div style="font-size:32px"><b>Category Administration</b></div>
<form action="admin.php" method="post">
<?php

$server = 'localhost';
$user = 'root';
$pass = 'mysql1234';
$mydb = 'business_service';
$table_name = 'categories';
$connect = mysqli_connect($server, $user, $pass, $mydb);

if(!$connect) {
    die ("Connect fail to $server using $user");
} 
else {
    print '<br>';

    $catid = $_POST['CatID'];
    $title = $_POST['Title'];
    $description = $_POST['Description'];
    $SQLcmd = "INSERT INTO $table_name (CategoryID, Title, Description) VALUES('$catid', '$title', '$description')";
    echo $SQLcmd;

    if(mysqli_query($connect, $SQLcmd)) {
        print "<div>Insert into $table_name was succesful!</div>";
    } 
    else {
        print "<div>Insert into $table_name failed</div>";
    }

    mysqli_close($connect);
    print '<input type="submit" value="Back">';
}
?>
</form>
</body>
</html>