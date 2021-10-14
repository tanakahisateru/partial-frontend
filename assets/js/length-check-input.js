import React, {createElement} from "react";
import ReactDOM from 'react-dom';
import create from "zustand";
import LengthCheckInput from './components/LengthCheckInput';

$.fn.lengthCheckInput = function (options) {
    options = $.extend({
        max: 0,
        message: "",
    }, options);

    this.each(function () {

        const useStore = create(set => ({
            text: "",
            error: false,
            message: options.message,

            setText(text) {
                const error = text.length > options.max;
                set(() => ({
                    text: text,
                    error: error
                }));
            },
        }));

        ReactDOM.render(createElement(LengthCheckInput, {
            id: this.id,
            useStore: useStore
        }), this);
    });
};
