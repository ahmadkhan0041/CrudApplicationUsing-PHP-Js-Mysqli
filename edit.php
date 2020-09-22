<?php
$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "formdb";
$conn = mysqli_connect($servername, $username, $password, $dbname);
$sql = "SELECT  * FROM  registration  WHERE id  = ".$_GET["edit_id"];
 
$data=mysqli_query($conn,$sql);
 
$row = mysqli_fetch_assoc($data);


 ?>


<!DOCTYPE html>  
<html>  
<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<style>  
body{  
  font-family: Calibri, Helvetica, sans-serif;  
  background-color: pink;  
}  
.container {  
    padding: 5px;  
  background-color: lightblue;  
  width: 30% !important;
  border-radius: 20px;
}  
  
input[type=number], input[type=text],input[type=email],input[type=password] {  
  width: 100%;  
  padding: 8px;  
  margin: 5px 0 10px 0;  
  display: inline-block;  
  border: none;  
  background: #f1f1f1;  
}  
input[type=text]:focus, input[type=password]:focus {  
  background-color: orange;  
  outline: none;  
}  
 div {  
            padding: 5px 0;  
         }  
hr {  
  border: 1px solid #f1f1f1;  
  margin-bottom: 25px;  
}  
.update {  
  background-color: #4CAF50;  
  color: white;  
  padding: 10px 00px;  
  margin: 8px 0;  
  border: none;  
  cursor: pointer;  
  width: 100%;  
  opacity: 0.9;  
}  
.registerbtn:hover {  
  opacity: 1;  
}  
</style>  
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>  
<body>  
<form action='update.php?id=<?php echo $row["id"];?> ' method='post'>  
  <div class="container">  
  <center>  <h4> Update Data</h4> </center>  
  <hr>  
  <label> <b>User Name:</b>
       </label>   
<input type="text" name="username" placeholder= "username" size="55" required  value="<?php echo $row["username"];?>" />   
<label><b> Email:</b> </label>   
<input type="email" name="email" placeholder="email" size="55" required  value="<?php echo $row["email"];?>" />   
<label> <b>Phone:</b> </label>    
<input type="number" name="phone_Number" placeholder="number" size="11"required  value="<?php echo $row["phone_Number"];?>"/>   
<div>  
  
 <label for="cnic"><b>Cnic</b></label>  
 <input type="number" placeholder="cnic" name="cnic_Number" required value="<?php echo $row["cnic_Number"];?>">  

 <label for="address"><b>Address</b></label>  
 <input type="text" placeholder="address" name="user_address" required value="<?php echo $row["user_address"];?>">  
  
    <label for="psw"><b>Password</b></label>  
    <input type="password" placeholder="Enter Password" name="first_Password" required value="<?php echo $row["first_Password"];?>">  
  
    <label for="psw-repeat"><b>Re-type Password</b></label>  
    <input type="password" placeholder="Retype Password" name="last_Password" required value="<?php echo $row["last_Password"];?>">  
    <input type="hidden" " name="id" value="<?php echo $row["id"];?>">  
    <button type="submit" name="updateBtn" autocomplete="off" required  value="<?php  echo $row["updateBtn"]?>" class="update">Update</button>    
</form>  
</body>  
</html>  


<?php
mysqli_close($conn);

?>