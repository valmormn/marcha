<?php session_start();

// include './config.php';

$_SESSION['title'] = "Titulo boladão!";
$_SESSION['favcolor'] = 'green';

// session_write_close();

// Check for Cookies

if (!isset($email)) {
  // session_unset(); // remove all session variables
  // session_destroy(); // destroy the session
  include "./index.html";
  exit();
} else {
  include "./index.html";
}


// exit();
