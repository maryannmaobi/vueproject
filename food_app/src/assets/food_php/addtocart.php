<?php

// if ($_SERVER['REQUEST_METHOD']=='OPTIONS') {
// echo 'ha';
//         if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])&& 
//         $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']=='POST' && isset($_SERVER['HTTP_ORIGIN'])
//         ){
//                 header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Credentials: true');
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json; charset=UTF-8");
// echo 'abc';
require 'database.php';

$_POST = json_decode(file_get_contents('php://input'), true);
 
  $id = $_POST['id'];

  $name = $_POST['name'];
  
  $image = $_POST['picture'];

  $quantity = $_POST['quantity'];

  $price = $_POST['price'];
//     echo $price;

  $total = $_POST['total'];
//   echo $id;
//  }
// }
// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Credentials: true');
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json; charset=UTF-8");
// // require 'database.php';

// $_POST = json_decode(file_get_contents('php://input'), true);
 
//   $id = $_POST['id'];

//   $name = $_POST['name'];
  
//   $image = $_POST['picture'];

//   $quantity = $_POST['quantity'];

//   $price = $_POST['price'];
// //     echo $price;

//   $total = $_POST['total'];
//   echo $id;


  $sql = "INSERT INTO added_to_cart (`food_id`,`food_name`, `food_picture`,`food_price`, `food_quantity`, `food_total`) 
          VALUES ('$id','$name','$image','$price','$quantity','$total')";
        
  var_dump($sql);
  echo mysqli_query($mysqli, $sql);

?>
