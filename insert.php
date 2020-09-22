<?php
$servername = "localhost";
$database = "formdb";
$username = "root";
$password = "mysql";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}

 extract($_POST);
 echo $username;
 $sql = "INSERT INTO registration (username, email, phone_Number, cnic_Number, user_address, first_Password, last_Password) 
VALUES ('".$username."', '".$email."', '".$phone_Number."', '".$cnic_Number."', '".$user_address."', '".$first_Password."', '".$last_Password."' )";

if (mysqli_query($conn, $sql)) {
      echo " <br>"."New record created successfully" ;
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);


?>