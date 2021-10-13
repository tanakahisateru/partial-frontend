$.fn.lengthCheckInput = function (options) {
    options = $.extend({
        max: 0,
        message: "",
    }, options);
    this.each(function () {
        const $self = $(this);

        const $error = $('<div class="error">').hide();
        $self.append($error);

        $self.find('input').on('input', function () {
            if ($(this).val().length > options.max) {
                $error.text(options.message).show();
            } else {
                $error.hide();
            }
        });
    });
};
