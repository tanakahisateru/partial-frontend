$.fn.lengthCheckInput = function (options) {
    options = $.extend({
        max: 0,
        message: "",
    }, options);
    this.each(function () {
        // Vanilla JS in jQuery plugin
        // jQuery をモジュールシステムとしてのみ使うようにしていく
        const error = document.createElement('div');
        error.setAttribute('class', 'error');
        error.style.display = 'none';
        this.append(error);

        const input = this.getElementsByTagName('input').item(0);
        input.addEventListener('input', function () {
            if (this.value.length > options.max) {
                error.innerText = options.message;
                error.style.display = 'block';
            } else {
                error.style.display = 'none';
            }
        });
    });
};
