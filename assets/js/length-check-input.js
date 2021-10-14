import React, {createElement} from "react";
import ReactDOM from 'react-dom';
import LengthCheckInput from './components/LengthCheckInput';

$.fn.lengthCheckInput = function (options) {
    options = $.extend({
        max: 0,
        message: "",
    }, options);

    this.each(function () {
        ReactDOM.render(
            createElement(LengthCheckInput, { id: this.id, ...options}),
            this
        );
    });
};
