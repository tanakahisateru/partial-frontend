import React, {useState} from "react";

export default function LengthCheckInput ({id, max, message}) {

    const [text, setText] = useState("");
    const [error, setError] = useState(false);

    return <>
        <label htmlFor={id + "-input"}>Text</label>
        <input id={ id + "-input" } type="text" value={ text } onChange={ event => {
            const changingText = event.target.value;
            setText(changingText);
            setError(changingText.length > max);
        }} />
        { error ?
            <div className="error">{ message }</div> :
            null
        }
    </>;
};
