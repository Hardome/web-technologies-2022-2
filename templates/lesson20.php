<script type="module" src="js/folders.js"></script>
<link href="css/style.css" rel="stylesheet"/>
<?php
function buildTree($elements, $parent) {
    foreach ($elements as $item) {
        if ($item["child"] == $parent) {
            echo '<div class="list-item list-item_open" data-parent>' .
                '<div class="list-item__inner">' .
                '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>' .
                '<img class="list-item__folder" src="img/folder.png" alt="folder">';
            echo    '<span>' . $item["name"] . '</span>';
            echo '</div>';
            echo '<div class="list-item__items">';
            buildTree($elements, $item["id"]);
            echo '</div>';
            echo '</div>';
        }
    }
}
echo '<div class="list-items" id="list-items">';
buildTree($folders, null);
echo '</div>';
?>