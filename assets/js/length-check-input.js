import React, {createElement} from "react";
import ReactDOM from 'react-dom';
import LengthCheckInput from './components/LengthCheckInput';
import {atom} from "jotai";

function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

$.fn.lengthCheckInput = function (options) {
    options = $.extend({
        max: 0,
        message: "",
    }, options);

    this.each(function () {

        const textState = atom("", (get, set, value) => {
            set(textState, value);
            sleep(1000).then(() => {
                set(errorState, value.length > options.max);
            });
        });
        const errorState = atom(false);

        ReactDOM.render(createElement(LengthCheckInput, {
            id: this.id,
            textState,
            errorState,
            message: options.message
        }), this);
    });
};
