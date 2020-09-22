<?php

$dbhost = 'localhost';
         $username = "root";
         $dbpass = 'mysql';
         $dbname = 'formdb';
         $conn = mysqli_connect($dbhost,$username, $dbpass,$dbname) or die("HOST: ".mysqli_error());
         
         if(! $conn ) {
            die('Could not connect: ' . mysqli_error());
         }
         echo 'Connected successfully!';
         mysqli_close($conn);




         
    $target_path = "C:/Program Files/Ampps/www/MyCompleteCourseDir/testing/images/";  
    $target_path = $target_path.basename( $_FILES['image']['name']);   
    
    if(move_uploaded_file($_FILES['image']['tmp_name'], $target_path)) {  
        echo "File uploaded successfully!"."<br><br>";  
    } else{  
        echo "Sorry, file not uploaded, please try again!";  
    }  

// echo $username =  $_POST["username"] . "<br>";
// echo $email =  $_POST["email"] . "<br>";
// echo $phone_Number = $_POST["phone_Number"] . "<br>";
// echo $cnic_Number = $_POST["cnic_Number"] . "<br>";
// echo $user_address = $_POST["user_address"]. "<br>";
// echo $first_Password = $_POST["first_Password"] . "<br>";
// echo $last_Password = $_POST["last_Password"]. "<br>";
// echo $check_terms = $_POST["terms"]."<br>";
// echo $fileUpload_Data = $_FILES["pic"]['name']."<br>";
// echo $upload_path =  $target_path;  

 ?>
    