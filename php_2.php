//tried to get fancy before realizing I don't have the proper software
<?php
    $fName=htmlspecialchars($_POST['fName']);
    $lName=htmlspecialchars($_POST['lName']);
    $eMailAdd=htmlspecialchars($_POST['eMailAdd']);
echo $fName,'',$lName,'',$eMailAdd;
?>