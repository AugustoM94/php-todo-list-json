<?php

$fileContent = file_get_contents("todo-list.json");


$list = json_decode($fileContent, true);





header('Content-Type: application/json');

echo json_encode($list);
?>