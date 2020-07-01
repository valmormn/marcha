<!-- src/app/auth/signup/signup.php -->

<?php session_start();

include $_SERVER['DOCUMENT_ROOT'].'./../server-auth.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/config.php';

// Create connection
// Using Medoo namespace - Database library 
// use Medoo\Medoo;

// Initialize
//  $database = new Medoo([
//     'database_type' => 'mysql',
//     'database_name' => $server->db,
//     'server' => 'localhost',
//     'username' => $server->user,
//     'password' => $server->pass
// ]);

// $_SESSION['db'] = $database;

if ($_POST) {
  # code...
  $db = $_SESSION['db'];
  $db->insert('accounts', [
    'username' => $_POST["username"],
    'email' => $_POST["email"],
    'pass' => $_POST["pass2"]
  ]);
  
  echo 'tudo certo!';
  // echo $_SESSION['db'];
  // echo $_SESSION['favcolor']; // green
    
} else {
  # code...
  echo 'sem $_POST não tem negócio';
}




?>
