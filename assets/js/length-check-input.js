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

        const textState = atom("");

        const errorState = atom(async (get) => {
            const text = get(textState);
            if (text.length === 0) {
                return false;
            }
            const error = text.length > options.max;
            await sleep(1000);
            return error;
        });

        ReactDOM.render(createElement(LengthCheckInput, {
            id: this.id,
            textState,
            errorState,
            message: options.message
        }), this);
    });
};
