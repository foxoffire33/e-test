import { useState } from "react";

export default function (props) {

    let timer = null

    const onKeyUp = (event) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            //update via axios
            console.log('Updateting description.....');
        }, 3000);
    }

    return (
        <>
            <td colSpan="3" className="px-6 text-sm font-medium text-gray-800 bg-greay-100 whitespace-nowrap">
                <textarea
                    className="form-textarea w-full text-gray-700 border-gray-300 rounded-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    onKeyUp={onKeyUp}
                    onKeyDown={() => {clearTimeout(timer)}} />
                <input tabIndex="-1" type="checkbox" className="form-input mx-2 form-checkbox text-green-500 rounded-sm" checked={props.isAgreed}/>
            </td>
        </>
    )
}