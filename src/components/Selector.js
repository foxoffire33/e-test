import React, { useState } from "react";

export default function Selector({ selectText, selectOptions, callback }) {
    const [inputValue, setInputValue] = useState('');
    const [selected, setSelected] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className="tw-w-72 tw-font-medium">
            <div
                onClick={() => setOpen(!open)}
                className={`tw-bg-white tw-w-full tw-p-2 tw-flex tw-items-center tw-justify-between tw-rounded ${!selected && "tw-text-gray-700"}`}
            >
                {selected ? selected?.length > 25 ? selected?.substring(0, 25) + "..."  : selected : selectText}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={'currentColor'} className="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
            </div>
            <ul className={`tw-z-50 tw-bg-white tw-mt-2 tw-overflow-y-auto ${open ? "tw-max-h-60" : "tw-max-h-0"} `} >
                <div className="tw-flex tw-items-center tw-px-2 tw-sticky tw-top-0 tw-bg-white">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                        defaultValue={inputValue}
                        className="tw-placeholder:tw-text-gray-700 tw-p-2 tw-outline-none"
                    />
                </div>
                <li
                    key='empty'
                    className={`tw-p-2 tw-text-sm tw-hover:tw-bg-sky-600 tw-hover:tw-text-white`}
                    onClick={() => {
                        callback(null);
                        setOpen(false);
                    }}
                >
                    Clear
                </li>
                {selectOptions?.map((option) => (
                    <li
                        key={option.id}
                        className={`tw-p-2 tw-text-sm tw-hover:tw-bg-sky-600 tw-hover:tw-text-white
             ${option?.name?.toLowerCase() === selected?.toLowerCase() && "tw-bg-sky-600 tw-text-white"}
            ${option?.name?.toLowerCase().startsWith(inputValue) ? "tw-block" : "tw-hidden"}`}
                        onClick={() => {
                            callback(option?.id);
                            setOpen(false);
                            setInputValue(option.name);
                        }}
                    >
                        {option?.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};