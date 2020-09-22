<?php
$servername = "localhost";
$database = "formdb";
$uname = "root";
$password = "mysql";
// Create connection
$conn = mysqli_connect($servername, $uname, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
if(isset($_GET['id'])) {
  $id = $_GET['id'];
  $username = $_POST['username'];
  $email = $_POST['email'];
  $phone_Number = $_POST['phone_Number'];
  $cnic_Number = $_POST['cnic_Number'];
  $user_address = $_POST['user_address'];
  $first_Password = $_POST['first_Password'];
  $last_Password = $_POST['last_Password'];

  $sql = "UPDATE registration SET username = '$username', email = '$email', phone_Number = '$phone_Number', cnic_Number = '$cnic_Number', user_address = '$user_address', first_Password = '$first_Password', last_Password = '$last_Password' WHERE  id = $id"; 
  
  if (mysqli_query($conn, $sql)) {
    echo " <br>"." record Updated successfully" ;
  } 
  else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  mysqli_close($conn);
}

?>