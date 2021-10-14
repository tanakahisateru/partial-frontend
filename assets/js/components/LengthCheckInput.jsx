import React from "react";

export default function LengthCheckInput ({id, useStore}) {

    const {text, error, message, setText} = useStore();

    return <>
        <label htmlFor={id + "-input"}>Text</label>
        <input id={ id + "-input" } type="text" value={ text } onChange={ event => {
            setText(event.target.value);
        }} />
        { error ?
            <div className="error">{ message }</div> :
            null
        }
    </>;
};
