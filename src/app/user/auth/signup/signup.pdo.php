<!-- src/app/auth/signup/signup.php -->

<?php session_start();

// include './../../../../server-auth.php';
include $_SERVER['DOCUMENT_ROOT'].'./../server-auth.php';

require_once $_SERVER['DOCUMENT_ROOT'].'/config.php';
// echo "\n";
// echo $_SERVER['DOCUMENT_ROOT'];
// echo "\n";
// $post = new stdClass;

// echo $_SESSION['title'] . "\n";

if ($_POST) {
  try {
    // echo inverse(5) . "\n";
    // echo inverse(0) . "\n";

    $post = implode(" ",$_POST);

    $data = new stdClass;
    $data->username = $_POST["username"];
    $data->email = $_POST["email"];
    $data->pass1 = $_POST["pass1"];
    $data->pass2 = $_POST["pass2"];

    // cryptografar pass2 com uma chave que fica guardada num arquivo em algum canto sem acesso no servidor.
    // dai finalmente se tudo der certo escreve na tabela

    // MySQLi Object-oriented
    $conn = new mysqli($server->host, $server->user, $server->pass, $server->db);
    // $conn = new mysqli($_SESSION["host"], $_SESSION["user"], $_SESSION["pass"], $_SESSION["db"]);
    
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "INSERT INTO accounts (username, email, pass) 
    VALUES ('$data->username', '$data->email', '$data->pass2')";

    if ($conn->query($sql) === TRUE) {
        echo "\n New record created successfully \n";
    } else {
        echo "\n Error: " . $sql . " <br>" . $conn->error . "\n";
    }
    
  } catch (Exception $e) {
      echo 'Exception reçue : ',  $e->getMessage(), "\n";
  }
  


  
/*
  MySQLi Procedural
  
  Create connection
  $conn = mysqli_connect($server->host, $server->user, $server->pass, $server->db);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  $sql = "INSERT INTO accounts (username,email,pass)  VALUES ('$data->username','$data->email', '$data->pass2')";

  if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
*/

  $conn->close();
  

  echo "\n";
  // echo $post;
}


/*

// Create connection
// Using Medoo namespace - Database library 
// use Medoo\Medoo;

// Initialize
 $database = new Medoo([
    'database_type' => 'mysql',
    'database_name' => $server->db,
    'server' => 'localhost',
    'username' => $server->user,
    'password' => $server->pass
]);

$_SESSION['db'] = $database;

if ($_POST) {
  # code...
  $db = $_SESSION['db'];
  $db->insert('accounts', [
    'username' => $_POST["username"],
    'email' => $_POST["email"],
    'pass' => $_POST["pass2"]
  ]);
  echo $_SESSION['db'];
  echo $_SESSION['favcolor']; // green
    
} else {
  # code...
  echo 'deu ruim no medoo';
}
*/



?>
