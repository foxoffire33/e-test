import { useEffect, useReducer } from "react";
import axios from "axios";
import { AXIOS_REQUEST_ACTION } from "@/Data/AxiosRequestActions";
import LoadingAnimation from "../loading/LoadingAnimation";

export default function PredictionOverride({ children, clientID, articleID, year, quarter, type, override }) {

    let timer = null

    const initialState = { isLoading: false, error: null, override: override };
    const abortController = new AbortController();

    useEffect(() => { return () => abortController.abort(); });

    const reducer = (state, action) => {
        switch (action.type) {
            case AXIOS_REQUEST_ACTION.PUT:
                return { ...state, isLoading: true, error: null };
            case AXIOS_REQUEST_ACTION.SCCESS:
                return { ...state, override: action.payload.data.data.overridePrediction, isLoading: false };
            case AXIOS_REQUEST_ACTION.ERROR:
                return { ...state, isLoading: false, error: action.payload.data.error };
            default:
                throw new Error('Invalid action type');
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (event) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch({ type: AXIOS_REQUEST_ACTION.PUT });
            axios.put(`${process.env.NEXT_PUBLIC_ENV_VARIABLE_HOST}/prediction/${clientID}/${articleID}/${year}/${quarter}/${type}`,
                { overridePrediction: event.target.value },
                { cancelToken: abortController.signal.cancelToken }
            )
                .then(response => dispatch({ type: AXIOS_REQUEST_ACTION.SCCESS, payload: response }))
                .catch(error => dispatch({ type: AXIOS_REQUEST_ACTION.ERROR, payload: error.message }));
        }, process.env.NEXT_PUBLIC_ENV_VARIABLE_TIMEOUT);
    }

    if (state.isLoading) {
        return (<td colSpan="2"><LoadingAnimation /></td>)
    }

    return (
        <>
            <td className={`tw-text-sm tw-text-gray-800 tw-whitespace-nowrap tw-border tw-border-slate-700 tw-text-center tw-border-2`}>
                {children}
            </td>
            <td className="tw-flex tw-text-sm tw-text-gray-800 tw-whitespace-nowrap">
                <input
                    type="number"
                    step="0.01"
                    className={`tw-form-input tw-form-input tw-text-gray-700 tw-border-gray-300 tw-rounded-sm tw-py-2 tw-leading-tight tw-border-2
                    ${state.error ? 'tw-border-red-500' : 'tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-focus:tw-border-transparent'}
                    `}
                    id="exampleFormControlInput1"
                    placeholder="Override prediction"
                    onChange={handleChange}
                    defaultValue={state.override}
                />
            </td>
        </>
    );
}