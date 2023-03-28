import PredictionOverride from "./PredictionOverride"
import PredictionDescriptionAndAgreed from "./PredictionDescriptionAndAgreed"
import { useReducer } from "react"
import axios from "axios";
import { AXIOS_REQUEST_ACTION } from "@/actions/AxiosRequestActions";

export default function PredictionTableBody({ data }) {

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
                return { ...state, isLoading: false, error: [] };
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

    if (Array.isArray(data)) {
        return data.map(predictionByYear => {
            return (
                <>
                    <tr key={predictionByYear.id}>
                        <td className="tw-text-sm tw-text-gray-800 tw-border tw-border-slate-700 tw-max-w-xs" rowSpan={1}>
                            {predictionByYear.article.name}
                        </td>
                        <PredictionOverride clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} quarter={1} type={predictionByYear.type} override={predictionByYear.quarterOneOverride}>{predictionByYear.quarterOne}</PredictionOverride>
                        <PredictionOverride clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} quarter={2} type={predictionByYear.type} override={predictionByYear.quarterTwoOverride}>{predictionByYear.quarterTwo}</PredictionOverride>
                        <PredictionOverride clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} quarter={3} type={predictionByYear.type} override={predictionByYear.quarterThreeOverride}>{predictionByYear.quarterThree}</PredictionOverride>
                        <PredictionOverride clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} quarter={4} type={predictionByYear.type} override={predictionByYear.quarterFourOverride}>{predictionByYear.quarterFour}</PredictionOverride>
                        <td rowSpan={2} className="tw-px-6 tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-greay-100 tw-whitespace-nowrap tw-border tw-border-slate-700">
                            <input
                                tabIndex="-1"
                                type="checkbox"
                                className="tw-form-input mx-2 tw-form-checkbox tw-text-green-500 tw-rounded-sm"
                                defaultChecked={(predictionByYear.quarterOneIsAgreed && predictionByYear.quarterTwoIsAgreed && predictionByYear.quarterThreeIsAgreed && predictionByYear.quarterFourIsAgreed)}
                                onChange={(event) => {
                                    isAgreedChange(event.target.value, predictionByYear.client.id, predictionByYear.article.id, predictionByYear.orderYear, predictionByYear.type)
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="tw-bg-gray-50">
                        <td></td>
                        <PredictionDescriptionAndAgreed clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} type={predictionByYear.type} quarter={1} isAgreed={predictionByYear.quarterOneIsAgreed} description={predictionByYear.quarterOneDescription} />
                        <PredictionDescriptionAndAgreed clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} type={predictionByYear.type} quarter={2} isAgreed={predictionByYear.quarterTwoIsAgreed} description={predictionByYear.quarterTwoDescription} />
                        <PredictionDescriptionAndAgreed clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} type={predictionByYear.type} quarter={3} isAgreed={predictionByYear.quarterThreeIsAgreed} description={predictionByYear.quarterThreeDescription} />
                        <PredictionDescriptionAndAgreed clientID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} type={predictionByYear.type} quarter={4} isAgreed={predictionByYear.quarterFourIsAgreed} description={predictionByYear.quarterFourDescription} />
                    </tr>
                </>
            )
        })
    }
}