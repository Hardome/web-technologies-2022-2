<?php

function getAllFeedback($productId) {
    $sql = "SELECT * FROM feedback WHERE catalog_id = {$productId} ORDER BY id DESC";
    return getAssocResult($sql);
}

function addFeedback() {
    extract($_POST);
    $sql = "INSERT INTO `feedback` (`id`, `name`, `text`, `catalog_id`) VALUES (NULL, '{$name}', '{$text}', '{$catalog_id}')";

    executeSql($sql);
    header("Location: /feedback/?productId={$catalog_id}");
}

function deleteFeedback() {
    extract($_POST);
    $sql = "DELETE FROM `feedback` WHERE id = '{$id}'";
    executeSql($sql);
    header("Location: /feedback/?productId={$catalog_id}");
}

function updateFeedback() {
    extract($_POST);
    $sql = "UPDATE `feedback` SET `name`='{$name}',`text`='{$text}',`catalog_id`='{$catalog_id}' WHERE id = {$id}";
    executeSql($sql);
    header("Location: /feedback/?productId={$catalog_id}");
}

function doFeedbackAction($action) {
    if($action === 'add') {
        addFeedback();
        die();
    }
    if($action === 'update') {
        updateFeedback();
        die();
    }

    if($action === 'delete') {
        deleteFeedback();
        die();
    }
}
