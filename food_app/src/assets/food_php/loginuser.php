<?php
session_start();
include_once("database.php");
$_POST = json_decode(file_get_contents('php://input'), true);

$username =  $_POST['username'];
$password =  $_POST['password'];


    $sql = "SELECT * from users where username='$username' and password='$password'";
	$query = $mysqli->query($sql);
	if($query->num_rows>0){
		$row=$query->fetch_array();
        $_SESSION['user_id']=$row['user_id'];
        // echo $_SESSION['user_id'];
		$out['message'] = "Login Successful";
	}
	else{
		$out['error'] = true;
		$out['message'] = "Login Failed. User not Found";
    }

?>