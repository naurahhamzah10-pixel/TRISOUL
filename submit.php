<?php
$conn = mysqli_connect("localhost","root","","dojang");

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$umur = $_POST['umur'];
$nohp1 = $_POST['nohp1'];
$email = $_POST['email'];
$nohp = $_POST['nohp'];
$jenjang = $_POST['jenjang'];

mysqli_query($conn, "INSERT INTO pendaftar VALUES('', '$nama','$alamat','$umur','$sekolah','$email','$nohp','$jenjang')");

header("Location: sukses.html");
?>
