<?php
function getCatalog() {
    return getAssocResult("SELECT id, name, img, price, description FROM catalog");
}

function getOneProduct($id) {
    return getAssocResult("SELECT id, name, img, price, description FROM catalog WHERE id = {$id}")[0];
}