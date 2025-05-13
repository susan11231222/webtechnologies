
<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "chicken_orders"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $quantity = intval($_POST["quantity"]);
    $address = htmlspecialchars($_POST["address"]);

    // Validate fields
    if (empty($name) || empty($email) || empty($quantity) || empty($address)) {
        echo "All fields are required!";
        exit;
    }

    // Insert data into the orders table
    $stmt = $conn->prepare("INSERT INTO orders (name, email, quantity, address) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $name, $email, $quantity, $address);

    if ($stmt->execute()) {
        echo "Thank you, $name! Your order has been placed successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
