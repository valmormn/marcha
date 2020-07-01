
<?php
session_unset(); // remove all session variables
session_destroy(); // destroy the session
header("Location: /index.php");

// $_SESSION["email"] = 'anonymus@anonymus'; 
// include "/index.html";
exit();
?>
