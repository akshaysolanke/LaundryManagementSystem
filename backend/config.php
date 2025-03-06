<?php
$conn = new mysqli('localhost', 'root', '', 'laundrymanagement');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
?>