import React from "react";
import {useAtom} from "jotai";

export default function LengthCheckInput ({id, textState, errorState, message}) {

    const [text, setText] = useAtom(textState);
    const [error] = useAtom(errorState);

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
