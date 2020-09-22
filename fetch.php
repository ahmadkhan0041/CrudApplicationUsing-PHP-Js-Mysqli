<?php

$link = mysqli_connect("localhost", "root", "mysql", "formdb");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Attempt select query execution
$sql = "SELECT * FROM registration";
if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result) > 0){
        echo "<div class='container'>";
        echo "<h3 class='h1  text-center  '>Employee Details</h3>";
        echo "<table  class='table table-bordered table table-striped table-dark'>";
        echo " <thead class='thead-dark'>";
            echo "<tr class='bg-primary'>";
                echo "<th>id</th>";
                echo "<th>Username</th>";
                echo "<th>Email</th>";
                echo "<th>Phone</th>";
                echo "<th>Cnic</th>";
                echo "<th>Address</th>";
                echo "<th>Password</th>";
                echo "<th>confirm Password</th>";
                echo "<th>Action</th>";
            echo "</tr>";
            echo "</div>";
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['username'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "<td>" . $row['phone_Number'] . "</td>";
                echo "<td>" . $row['cnic_Number'] . "</td>";
                echo "<td>" . $row['user_address'] . "</td>";
                echo "<td>" . $row['first_Password'] . "</td>";
                echo "<td>" . $row['last_Password'] . "</td>";
                echo "<td > <a class='fa fa-trash trashStyle' aria-hidden='true' href='delete.php?delete_id=" . $row['id'] . "'></a>";
                echo "<a class='fas fa-pencil-alt customStyle' href='edit.php?edit_id=" . $row['id'] . "'></a></td>";
            echo "</tr>";
        }
        echo "</table>";
        // Free result set
        mysqli_free_result($result);
    } else{
        echo "No records matching your query were found.";
    }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
 ?>
<!DOCTYPE html>
 <html lang="en">
       <head>
    <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Employee Details Form</title>
    <link rel="stylesheet" href="style.css" />
    <!-- Latest compiled and minified CSS -->
   <link rel="stylesheet" href="min.css" />
     <!-- jQuery library -->
     <script src="min.js"></script>
    <link rel="stylesheet" href="./fontawesome-free-5.14.0-web/css/all.css">

   </head>
  <body>
  <div class="container"></div>
     <!-- Latest compiled JavaScript -->
    <script src="main.js"></script>
    <script src="app.js"></script>
  </body>
 </html> 
