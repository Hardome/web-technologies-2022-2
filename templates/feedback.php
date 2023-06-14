<div>
    <h3> <?= $product['name'] ?></h3>
    <img class="image" src="../img/catalog/<?= $product['img'] ?>" alt="" width="300" height="300"><br>
    <h2>Отзывы</h2>
    <form action="/feedback/add/" method="post">
        Оставьте отзыв: <br>
        <input type="text" name="name" placeholder="Ваше имя"><br>
        <input type="text" name="text" placeholder="Ваш отзыв"><br>
        <input type="text" name="catalog_id" value="<?= $_GET['productId'] ?>"><br>
        <input type="submit" value="Добавить">
    </form>
    <hr/>
    <?php foreach ($feedback as $value): ?>
        <div data-id="<?= $value['id'] ?>">
            <div class="feedback">
                <strong><?= $value['name'] ?></strong>: <?= $value['text'] ?>
            </div>

            <form class="edit-form hidden" action="/feedback/update/" method="post">
                <input type="text" name="id" class="hidden" value="<?= $value['id'] ?>">
                <input type="text" name="name" value="<?= $value['name'] ?>">
                <input type="text" name="text" value="<?= $value['text'] ?>">
                <input type="text" name="catalog_id" class="hidden" value="<?= $value['catalog_id'] ?>">
                <input class="edit-second" type="submit" value="Обновить данные">
                <input class="cancel-edit" type="button" value="Отменить изменения"
                       onclick="setFormVisibility(<?= $value['id'] ?>)">
            </form>
            <button class="edit-first" onclick="setFormVisibility(<?= $value['id'] ?>)">Редактировать</button>
            <form action="/feedback/delete/" method="post">
                <input type="text" name="id" class="hidden" value="<?= $value['id'] ?>">
                <input type="text" name="catalog_id" class="hidden" value="<?= $value['catalog_id'] ?>">
                <input type="submit" value="Удалить">
            </form>

        </div>
        <br>
        <br>
    <?php endforeach; ?>
</div>

<style>
    .hidden {
        display: none;
    }
</style>

<script>
  function setFormVisibility(feedbackId) {
    document.querySelector(`[data-id='${feedbackId}'] .edit-first`).classList.toggle('hidden');
    document.querySelector(`[data-id='${feedbackId}'] .edit-form`).classList.toggle('hidden');
    document.querySelector(`[data-id='${feedbackId}'] .feedback`).classList.toggle('hidden');
  }
</script>
