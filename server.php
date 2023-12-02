<?php

$fileContent = file_get_contents("todo-list.json");


$list = json_decode($fileContent, true);

if(isset($_POST['task'])){
    $newTask = [
        'text'=> $_POST['task'],
        'done' => false,

    ];
    array_push($list, $newTask);
    file_put_contents('todo-list.json', json_encode($list));
}   

if (isset($_POST['deleteTask'])) {
    $index = $_POST['deleteTask'];
    if (isset($list[$index])) {
        array_splice($list, $index, 1);  
        file_put_contents('todo-list.json', json_encode($list));
    }
} 



header('Content-Type: application/json');

echo json_encode($list);
?>