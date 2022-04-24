<html><head><title>Square and Cuber</title></head></html>
<body>
    <span>Enter your name and select date time for the appointment</span>
    <br>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST">
    <?php
        if(array_key_exists("name", $_POST)) {
            $name = $_POST["name"];
            $day = $_POST["day"];
            $month = $_POST["month"];
            $year = $_POST["year"];
            $hour = $_POST["hour"];
            $minute = $_POST["minute"];
            $second = $_POST["second"];
        } else {
            $name = "";
            $day = 1;
            $month = 1;
            $year = 2000;
            $hour = 1;
            $minute = 1;
            $second = 1;
        }
    ?>
        <table>
            <tr>
                <td>Your name</td>
                <td>
                    <input type="text" name="name" value="<?php echo $name; ?>">
                </td>
            </tr>
            <tr>
                <td>Date:</td>
                <td>
                    <select name="day">
                        <?php
                            for($i = 1; $i < 32; $i++) {
                                if($day == $i) {
                                    print("<option selected>$i</option>");
                                } else {
                                    print("<option>$i</options>");
                                }
                            }
                        ?>
                    </select>
                    
                    <select name="month">
                        <?php
                            for($i = 1; $i < 13; $i++) {
                                if($month == $i) {
                                    print("<option selected>$i</option>");
                                } else {
                                    print("<option>$i</options>");
                                }
                            }
                        ?>
                    </select>
                    
                    <select name="year">
                        <?php
                            for($i = 2000; $i < 2023; $i++) {
                                if($year == $i) {
                                    print("<option selected>$i</option>");
                                } else {
                                    print("<option>$i</options>");
                                }
                            }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Time:</td>
                <td>
                    <select name="hour">
                        <?php
                            for($i = 1; $i < 25; $i++) {
                                if($hour == $i) {
                                    print("<option selected>$i</option>");
                                } else {
                                    print("<option>$i</options>");
                                }
                            }
                        ?>
                    </select>
                    
                    <select name="minute">
                        <?php
                            for($i = 1; $i < 61; $i++) {
                                if($minute == $i) {
                                    print("<option selected>$i</option>");
                                } else {
                                    print("<option>$i</options>");
                                }
                            }
                        ?>
                    </select>
                    
                    <select name="second">
                        <?php
                            for($i = 1; $i < 61; $i++) {
                                if($second == $i) {
                                    print("<option selected>$i</option>");
                                } else {
                                    print("<option>$i</options>");
                                }
                            }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">
                    <input type="submit" value="Submit">
                </td>
                <td align="left">
                    <input type="reset" value="Reset">
                </td>
            </tr>
        </table>
        <?php
            if(array_key_exists("name", $_POST)) {
                print("Hi $name");
                print("<br>You have choose to have an appointment on $hour:$minute:$second, $day/$month/$year");
                print("<br>More information");
                print("<br>In 12 hours, the time and date is ");
                if($hour > 12) {
                    $new_hour = $hour - 12;
                    print("$new_hour:$minute:$second PM, $day/$month/$year");
                } else {
                    print("$hour:$minute:$second AM, $day/$month/$year");
                }
                print("<br>This month has ");
                switch($month) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        print("31 days!");
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        print("30 days!");
                        break;
                    case 2:
                        if($year % 4 == 0 && $year % 100 != 0) {
                            print("28 days!");
                        }
                        if($year % 100 == 0 && $year % 400 == 0) {
                            print("29 days!");
                        }
                }
            }
        ?>
    </form>
</body>