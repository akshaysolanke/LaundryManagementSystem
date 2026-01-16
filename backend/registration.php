<?php
include('./config.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');



$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$contact = $data['contact'] ?? '';
$address = $data['address'] ?? '';
$password = $data['password'] ?? ''; // Store password as plain text

// Validate input fields
if (empty($name) || empty($email) || empty($contact) || empty($address) || empty($password)) {
    echo json_encode(['message' => 'All fields are required']);
    exit();
}

// Prepare and execute the query
$stmt = $conn->prepare('INSERT INTO user(name, email, contact, address, password) VALUES (?, ?, ?, ?, ?)');
if (!$stmt) {
    echo json_encode(['message' => 'Database error: ' . $conn->error]);
    exit();
}
$stmt->bind_param('sssss', $name, $email, $contact, $address, $password);

if ($stmt->execute()) {
    echo json_encode(['message' => 'Registration successful']);
} else {
    echo json_encode(['message' => 'Database insert error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>