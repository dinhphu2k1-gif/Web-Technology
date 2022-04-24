<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $full_name = $_POST["full_name"];
        $school = $_POST["school"];
        $class = $_POST["class"];
        $skills = $_POST["skills"];
        $vehicles = $_POST["vehicles"];
        $birthdaytime = $_POST["birthdaytime"];
        $siblings = $_POST["siblings"];
        print("Hello, <strong>$full_name</strong>");
        print("<br>You are studying at <strong>$class</strong>, <strong>$school</strong>");
        print("<br>Your skills are <strong>$skills</strong>");
        print("<br>Your vehicles are");
        foreach ($vehicles as $vehicle){
            echo "<li><strong>" .$vehicle."</strong></li>";
        }
        print("Your birthday is <strong>$birthdaytime</strong>");
        print("<br>Number of your siblings are <strong>$siblings</strong>");
    ?>
</body>
</html>