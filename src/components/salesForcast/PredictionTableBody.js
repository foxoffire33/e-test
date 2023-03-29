import PredictionOverride from "./PredictionOverride"
import PredictionDescriptionAndAgreed from "./PredictionDescriptionAndAgreed"
import { useReducer } from "react"
import axios from "axios";
import { AXIOS_REQUEST_ACTION } from "@/Data/AxiosRequestActions";

export default function PredictionTableBody({ resource }) {

    const initialState = {
        isLoading: false,
        error: null
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case AXIOS_REQUEST_ACTION.PUT:
                return { ...state, isLoading: true, error: null };
            case AXIOS_REQUEST_ACTION.SCCESS:
                return { ...state, isLoading: false };
            case AXIOS_REQUEST_ACTION.ERROR:
                return { ...state, isLoading: false, error: action.payload.data.error };
            default:
                throw new Error('Invalid action type');
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const isAgreedChange = (value, clientID, articleID, year, type) => {
        dispatch({ type: AXIOS_REQUEST_ACTION.PUT });
        axios.put(`${process.env.NEXT_PUBLIC_ENV_VARIABLE_HOST}/prediction/${clientID}/${articleID}/${year}/${type}/agree`, { isAgreed: value })
            .then(response => dispatch({ type: AXIOS_REQUEST_ACTION.SCCESS, payload: response }))
            .catch(error => dispatch({ type: AXIOS_REQUEST_ACTION.DELETE, payload: error.message }));
    }

    const data = resource.data.read();

    return data.data.map(item => {
        return (
            <>
                <tr key={item.id}>
                    <td className="tw-text-sm tw-text-gray-800 tw-border tw-border-slate-700 tw-max-w-xs" rowSpan={1}>
                        {item.article.name}
                    </td>
                    <PredictionOverride clientID={item.client.id} articleID={item.article.id} year={item.orderYear} quarter={1} type={item.type} override={item.quarterOneOverride}>{item.quarterOne}</PredictionOverride>
                    <PredictionOverride clientID={item.client.id} articleID={item.article.id} year={item.orderYear} quarter={2} type={item.type} override={item.quarterTwoOverride}>{item.quarterTwo}</PredictionOverride>
                    <PredictionOverride clientID={item.client.id} articleID={item.article.id} year={item.orderYear} quarter={3} type={item.type} override={item.quarterThreeOverride}>{item.quarterThree}</PredictionOverride>
                    <PredictionOverride clientID={item.client.id} articleID={item.article.id} year={item.orderYear} quarter={4} type={item.type} override={item.quarterFourOverride}>{item.quarterFour}</PredictionOverride>
                    <td rowSpan={2} className="tw-px-6 tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-greay-100 tw-whitespace-nowrap tw-border tw-border-slate-700">
                        <input
                            tabIndex="-1"
                            type="checkbox"
                            className="tw-form-input mx-2 tw-form-checkbox tw-text-green-500 tw-rounded-sm"
                            defaultChecked={(item.quarterOneIsAgreed && item.quarterTwoIsAgreed && item.quarterThreeIsAgreed && item.quarterFourIsAgreed)}
                            onChange={(event) => {
                                isAgreedChange(event.target.value, item.client.id, item.article.id, item.orderYear, item.type)
                            }}
                        />
                    </td>
                </tr>
                <tr className="tw-bg-gray-50">
                    <td></td>
                    <PredictionDescriptionAndAgreed clientID={item.client.id} articleID={item.article.id} year={item.orderYear} type={item.type} quarter={1} isAgreed={item.quarterOneIsAgreed} description={item.quarterOneDescription} />
                    <PredictionDescriptionAndAgreed clientID={item.client.id} articleID={item.article.id} year={item.orderYear} type={item.type} quarter={2} isAgreed={item.quarterTwoIsAgreed} description={item.quarterTwoDescription} />
                    <PredictionDescriptionAndAgreed clientID={item.client.id} articleID={item.article.id} year={item.orderYear} type={item.type} quarter={3} isAgreed={item.quarterThreeIsAgreed} description={item.quarterThreeDescription} />
                    <PredictionDescriptionAndAgreed clientID={item.client.id} articleID={item.article.id} year={item.orderYear} type={item.type} quarter={4} isAgreed={item.quarterFourIsAgreed} description={item.quarterFourDescription} />
                </tr>
            </>
        )
    })
}