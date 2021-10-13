const $error = $('<div class="error">').hide();

$('.length-check-input').append($error);

$('.length-check-input input').on('input', function () {
    if ($(this).val().length > 4) {
        $error.text("長すぎます。4文字以下で入力してください。").show();
    } else {
        $error.hide();
    }
});
