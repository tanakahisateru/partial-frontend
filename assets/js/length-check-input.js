import React, {createElement} from "react";
import ReactDOM from 'react-dom';
import LengthCheckInput from './components/LengthCheckInput';
import {atom} from "jotai";

$.fn.lengthCheckInput = function (options) {
    options = $.extend({
        max: 0,
        message: "",
    }, options);

    this.each(function () {

        const textState = atom("");
        const errorState = atom((get) => {
            return get(textState).length > options.max;
        });

        ReactDOM.render(createElement(LengthCheckInput, {
            id: this.id,
            textState,
            errorState,
            message: options.message
        }), this);
    });
};
