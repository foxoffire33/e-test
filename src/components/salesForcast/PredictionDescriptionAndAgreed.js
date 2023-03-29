import { useEffect, useReducer, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { AXIOS_REQUEST_ACTION } from "@/Data/AxiosRequestActions";

export default function PredictionDescriptionAndAgreed({ clientID, articleID, year, quarter, type, description, isAgreed }) {

    let timer = null
    const abortController = new AbortController();
    const initState = { isLoading: false, error: null, description: description }

    useEffect(() => { return () => abortController.abort() }, []);


    const onKeyUp = (event) => {
        clearTimeout(timer);
        timer = setTimeout(() => updateDescription(event.target.value), process.env.NEXT_PUBLIC_ENV_VARIABLE_TIMEOUT);
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case AXIOS_REQUEST_ACTION.PUT:
                return { isLoading: true, error: null };
            case AXIOS_REQUEST_ACTION.SCCESS:
                return { ...state, description: action.payload.data.data.description, isLoading: false };
            case AXIOS_REQUEST_ACTION.ERROR:
                return { ...state, isLoading: false, error: action.payload.data.error };
            default:
                throw new Error('Invalid action type');
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);

    const updateDescription = (changedDescription) => {
        dispatch({ type: AXIOS_REQUEST_ACTION.PUT });
        axios.put(`${process.env.NEXT_PUBLIC_ENV_VARIABLE_HOST}/prediction/${clientID}/${articleID}/${year}/${quarter}/${type}`,
            { description: changedDescription },
            { cancelToken: abortController.signal.cancelToken }
        ).then(response => dispatch({ type: AXIOS_REQUEST_ACTION.SCCESS, payload: response }))
            .catch(error => dispatch({ type: AXIOS_REQUEST_ACTION.ERROR, payload: error.message }));
    };

    const isAgreedChange = (event) => {
        setChecked(!checked);
        isAgreed = checked;
        dispatch({ type: AXIOS_REQUEST_ACTION.PUT });
        axios.put(`${process.env.NEXT_PUBLIC_ENV_VARIABLE_HOST}/prediction/${clientID}/${articleID}/${year}/${quarter}/${type}/agree`,
            { isAgreed: !checked },
            { cancelToken: abortController.signal.cancelToken },
        )
            .then(response => dispatch({ type: AXIOS_REQUEST_ACTION.SCCESS, payload: response }))
            .catch(error => dispatch({ type: AXIOS_REQUEST_ACTION.ERROR, payload: error.message }));
    }

    const [checked, setChecked] = useState(isAgreed);

    return (
        <>
            <td colSpan="2" className="tw-pr-8 tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-greay-100 tw-whitespace-nowrap tw-border tw-border-slate-700">
                <textarea
                    className={`tw-form-textarea tw-w-full tw-text-gray-700 tw-border-gray-300 tw-rounded-sm tw-leading-tight tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-focus:tw-border-transparent tw-border tw-border-slate-700
                    ${state.error ? 'tw-border-red-500' : 'tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-focus:tw-border-transparent'}
                    ${state.isLoading ? 'tw-animate-pulse tw-bg-sky-400 tw-opacity-100' : ''}`}
                    id="descriptionOverride"
                    rows="3"
                    onKeyUp={onKeyUp}
                    onKeyDown={() => { clearTimeout(timer) }}
                    defaultValue={state.description} />
                <input
                    tabIndex="-1"
                    type="checkbox"
                    className={`tw-form-input tw-mx-2 tw-form-checkbox tw-text-green-500 tw-rounded-sm
                    ${state.error ? 'tw-border-red-500' : 'tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-focus:tw-border-transparent'}
                    ${state.isLoading ? 'tw-animate-pulse tw-bg-sky-400 tw-opacity-100' : ''}`}
                    checked={checked}
                    onChange={isAgreedChange}
                />
            </td>
        </>
    )
}