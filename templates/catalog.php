<h2>Каталог</h2>

<div>
    <?php foreach ($catalog as $item): ?>

        <div>
            <h4><?= $item['name'] ?></h4><br>
            <img class="image" src="img/catalog/<?= $item['img'] ?>" alt="" width="125"
                 onclick="redirect('<?= $item['id'] ?>')"><br>
            Цена: <?= $item['price'] ?><br>
            <button>Купить</button>
            <hr>
        </div>
    <?php endforeach; ?>
</div>

<script>
  function redirect(productId) {
    location.href = `/feedback/?productId=${productId}`;
  }
</script>