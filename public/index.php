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

<div class="length-check-input">
    <label for="text">Text</label>
    <input id="text" type="text" value="">
    <div class="error" style="display: none;">長すぎます。4文字以下で入力してください。</div>
</div>

<script src="<?= $manifest['bundle.js'] ?>"></script>
</body>
</html>