<?php
$manifest = json_decode(file_get_contents(__DIR__ . '/assets/dist/manifest.json'), true);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Partial Frontend</title>
    <link rel="stylesheet" href="<?= $manifest['bundle.css'] ?>">
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="index-page">

<h1>Alpine.js どうかな</h1>
<div class="length-check-input" x-data="{ overflow: false }">
    <label for="text">Text</label>
    <input id="text" type="text" value="" x-on:input="overflow = $event.target.value.length > 4">
    <div class="error" style="display: none;" x-show="overflow">長すぎます。4文字以下で入力してください。</div>
</div>

<script src="<?= $manifest['bundle.js'] ?>"></script>
</body>
</html>