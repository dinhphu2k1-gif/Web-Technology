<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Start sale</title>
</head>
<body>
<div style="color:blue; font-size:24px">Select Product We Just Sold</div>
	<!-- <form action="sale.php" method="post">
		<div>
			Hammer <input type="radio" name="product_desc" value="Hammer">
			Screw Driver<input type="radio" name="product_desc" value="Screw Driver">
			Wrench<input type="radio" name="product_desc" value="Wrench">
		</div>
		<input type="submit" value="Click To Submit">
		<input type="reset" value="Reset">
	</form> -->
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
        $SQLcmd = "SELECT * from $table_name";
        $result = mysqli_query($connect, $SQLcmd);
        print '<form action="sale.php" method="post"><div>';
        if(mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                print ''.$row['Product_desc'].'<input type="radio" name="product_desc" value="'.$row['Product_desc'].'">';
            }
        }
        print '</div>
		            <input type="submit" value="Click To Submit">
		            <input type="reset" value="Reset">
	            </form>';
        print "<div>The query is <i>$SQLcmd</i></div>";
        $result = mysqli_query($connect, $SQLcmd);
        print "<table border='1'>";

        print "<tr>
                <th>Num</th>
                <th>Product</th>
                <th>Cost</th>
                <th>Weight</th>
                <th>Count</th>
                </tr>";
        if(mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                print "<tr>
                        <td>".$row['ProductID']."</td>
                        <td>".$row['Product_desc']."</td>
                        <td>".$row['Cost']."</td>
                        <td>".$row['Weight']."</td>
                        <td>".$row['Numb']."</td>
                    </tr>";
            }
        }

        print "</table>";
        mysqli_close($connect);
    }
    ?>
</body>
</html>
