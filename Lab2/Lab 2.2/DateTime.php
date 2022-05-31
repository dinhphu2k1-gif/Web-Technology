<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form >
        Enter your name and select date and time for appointment
        <table border="0">
            <!-- <colgroup>
                <col span="1" style="width: 30%;">
                <col span="1" style="width: 70%;">
            </colgroup> -->

            <tr>
                <td>Your name: </td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Date: </td>
                <td>
                    <select name="day">
                        <?php
                            for ($i= 1; $i<=31; $i++){
                                print("<option>$i</option>");
                            }
                        ?>
                    </select>

                    <select name="month">
                        <?php
                            for ($i= 1; $i<=2; $i++){
                                print("<option>$i</option>");
                            }
                        ?>
                    </select>
                    <select name="year">
                        <?php
                            for ($i= 2000; $i<=2030; $i++){
                                print("<option>$i</option>");
                            }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Time: </td>
                <td>
                    <select name="hour">
                        <?php
                            for ($i= 0; $i<=23; $i++){
                                print("<option>$i</option>");
                            }
                        ?>
                    </select>

                    <select name="minute">
                        <?php
                            for ($i= 0; $i<=23; $i++){
                                print("<option>$i</option>");
                            }
                        ?>
                    </select>
                    <select name="second">
                        <?php
                            for ($i= 0; $i<=23; $i++){
                                print("<option>$i</option>");
                            }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
				<td align="right"><input type="submit" value="Submit"></td>
				<td align="left"><input type="reset" value="Reset"></td>
			</tr>
        </table>
    </form>
    <?php
        if (array_key_exists("name", $_GET)){
            $name=$_GET["name"];
            $day=$_GET["day"];
            $month=$_GET["month"];
            $year=$_GET["year"];
            $hour=$_GET["hour"];
            $minute=$_GET["minute"];
            $second=$_GET["second"];
            print("Hi $name!<br>");
            print("You have choose to have an appointment on $hour:$minute:$second, $day/$month/$year <br></br>");
            print("More information<br></br>");
            
            if ($hour >= 12){
                $hour_new = $hour - 12;
                print("In 12 hours, the time and date is $hour_new:$minute:$second PM, $day/$month/$year <br></br>");
            }
            else {
                print("In 12 hours, the time and date is $hour:$minute:$second AM, $day/$month/$year <br></br>");
            }

            if ($month == 1 or $month == 3 or $month == 5 or $month == 7 or $month == 8 or $month == 10 or $month == 12){
                print("This month has 31 days!");
            }
            elseif ($month == 4 or $month == 6 or $month == 9 or $month == 11){
                print("This month has 30 days!");

            }
            else {
                if ($year % 4 == 0 or ($year % 100 == 0 and $year % 400 == 0)){
                    print("This month has 29 days!");
                }
                else {
                    print("This month has 28 days!");
                }
            }

        }
        

    ?>

</body>
</html>