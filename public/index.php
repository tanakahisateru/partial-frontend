<?php
$manifest = json_decode(file_get_contents(__DIR__ . '/assets/dist/manifest.json'), true);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Partial Frontend</title>
    <link rel="stylesheet" href="<?= $manifest['bundle.css'] ?>">
</head>
<body class="index-page">

<h1>ここだけ React</h1>
<div id="text-1" class="length-check-input">
    <label for="text-1-input">Text</label>
    <input id="text-1-input" type="text" value="">
</div>

<script src="<?= $manifest['bundle.js'] ?>"></script>
<script>
    $(function () {
        // 中身は React なんだけど HTML では jQuery プラグインと同じ使い方
        // DOM の中身は完全に React の VDOM と置き換わるけど
        $('.length-check-input').lengthCheckInput({
            max: 4,
            message:"長すぎます。4文字以下で入力してください。"
        });
    });
</script>
</body>
</html>