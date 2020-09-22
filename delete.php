<?php
$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "formdb";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
// sql to delete a record
$sql = "DELETE FROM registration WHERE id=".$_GET['delete_id'];
if (mysqli_query($conn, $sql)) {
//  echo "Record deleted successfully";
  header("Location: fetch.php?msg=Record deleted successfully");
   die();
} else {
  echo "Error deleting record: " . mysqli_error($conn);
}
mysqli_close($conn);
?>