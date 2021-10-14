import React, {Suspense} from "react";
import {useAtom} from "jotai";

export default function LengthCheckInput ({id, textState, errorState, message}) {

    const [text, setText] = useAtom(textState);

    return <>
        <label htmlFor={id + "-input"}>Text</label>
        <input id={ id + "-input" } type="text" value={ text } onChange={ event => {
            setText(event.target.value);
        }} />
        <Suspense fallback={ <small>checking...</small> }>
            {/* Preact の Suspense はまだ互換性がなさそう。本物の React でためす */}
            <LengthCheckError {...{errorState, message}} />
        </Suspense>
    </>;
};

function LengthCheckError({errorState, message}) {

    const [error] = useAtom(errorState);

    if (error) {
        return <div className="error">{ message }</div>;
    } else {
        return <></>
    }
}
