<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "ticket"; 

$con = mysqli_connect($server, $username, $password, $dbname);

// Check connection
if (!$con) {
    die("Connection to this database failed due to " . mysqli_connect_error());
}

$name = $_POST['name'];
$seat_no = $_POST['seat'];
$date = $_POST['date'];
$from_location = $_POST['from'];
$to_location = $_POST['to'];

$sql = "INSERT INTO ticket.ticket (`Name`, `Seat_no`, `Date`, `From_location`, `To_location`) 
        VALUES ('$name', '$seat_no', '$date', '$from_location', '$to_location')";

if (mysqli_query($con, $sql)) {
    header('Location: index.html');
    exit();
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

// Close the connection
mysqli_close($con);
?>
