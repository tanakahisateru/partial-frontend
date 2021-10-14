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

<h1>Stimulus どうかな</h1>

<div class="length-check-input"
     data-controller="length-check"
     data-length-check-max-value="4"
     data-length-check-message-value="長すぎます。4文字以下で入力してください。"
     data-length-check-error-class="error--shown"
>
    <label for="text">Text</label>
    <input id="text" type="text" value=""
           data-length-check-target="text"
           data-action="input->length-check#check"
    >
    <div class="error"
         data-length-check-target="error"
    ></div>
</div>

<script src="<?= $manifest['bundle.js'] ?>"></script>
</body>
</html>