import { Controller } from "@hotwired/stimulus"

// noinspection JSUnresolvedVariable
export default class extends Controller {
    static values = {
        max: Number,
        message: String
    };

    static targets = [
        "text",
        "error"
    ];

    static classes = [
        "error"
    ];

    /**
     * @public
     */
    check() {
        if (this.overflow()) {
            this.showError();
        } else {
            this.hideError();
        }
    }

    /**
     * @private
     * @returns {boolean}
     */
    overflow() {
        return this.textTarget.value.length > this.maxValue;
    }

    /**
     * @private
     */
    showError() {
        this.errorTarget.classList.add(this.errorClass);
        this.errorTarget.innerText = this.messageValue;
    }

    /**
     * @private
     */
    hideError() {
        this.errorTarget.classList.remove(this.errorClass);
    }
}
