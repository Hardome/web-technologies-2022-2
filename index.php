<?php
//1
$i = 0;
do {
    if ($i == 0) {
        echo $i . ' - это ноль.';
    } else if ($i % 2 == 0) {
        echo $i . ' - это четное число.';
    } else {
        echo $i . ' - это нечетное число.';
    }
    echo '<br>';
    $i++;
} while ($i <= 10);

echo '<hr>';

//2
$regions = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область' => ['Рязань', 'Шацк', 'Ряжск', 'Тума', 'Касимов',]
];

foreach ($regions as $region => $cities) {
    echo $region . ': <br>';
    echo implode(', ', $cities) . '.';
    echo '<br>';
}

echo '<hr>';

//3
$letters = ['a' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e',
    'ё' => 'yo', 'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'j', 'к' => 'k', 'л' => 'l', 'м' => 'm',
    'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f',
    'х' => 'x', 'ц' => 'cz', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shh', 'ъ' => '', 'ы' => 'y', 'ь' => '',
    'э' => 'e', 'ю' => 'yu', 'я' => 'ya'];

function transliterationToLatin($str, $letters) {
    return str_replace(array_keys($letters), array_values($letters), strtolower($str));
}
function transliterationToKiril($str, $letters) {
    return str_replace(array_values($letters), array_keys($letters), strtolower($str));
}
echo transliterationToLatin('C кирилицы на латиницу', $letters);
echo '<br>';
echo transliterationToKiril('Naoborot', $letters);
echo '<hr>';
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lesson18</title>
</head>
<body>
<p><?php echo date('Y'); ?></p>
<?php require('site.php') ?>
<?php
$year = date('Y');
$content = file_get_contents('site.html');
$content = str_replace('{{ year }}', $year, $content);
echo $content; ?>
</body>
</html>