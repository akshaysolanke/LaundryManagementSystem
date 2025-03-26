<?php
include('./config.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {
    foreach ($data as $order) {
        $category = $conn->real_escape_string($order["category"]);
        $service = $conn->real_escape_string($order["service"]);
        $quantity = (int)$order["quantity"];
       

        $sql = "INSERT INTO `orders` (category, service, quantity) VALUES ('$category', '$service', '$quantity')";

        if (!$conn->query($sql)) {
            echo json_encode(["success" => false, "message" => "Error inserting order: " . $conn->error]);
            exit();
        }
    }
    echo json_encode(["success" => true, "message" => "Order placed successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "No order data received"]);
}

$conn->close();
?>