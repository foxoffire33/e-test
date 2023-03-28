import { useState } from 'react';
import PredictionTableBody from './PredictionTableBody'
import PredictionTableBodyLoading from '../loading/PredictionTableBodyLoading';
import Pagination from '../pagination/Pagination';
import Selector from '../Selector';
import { useReducer, useEffect } from "react"
import axios from "axios";
import { data } from "autoprefixer";
import PredictionTableHead from './PredictionTableHead';
import { AXIOS_REQUEST_ACTION } from '@/actions/AxiosRequestActions';

export default function SalesForcastTable() {
    const reducer = (state, action) => {
        switch (action.type) {
            case AXIOS_REQUEST_ACTION.FETCH:
                return { ...state, isLoading: true, error: null };
            case AXIOS_REQUEST_ACTION.SCCESS:
                return {
                    ...state,
                    isLoading: false,
                    data: action.payload.data.data,
                    filters: action.payload.data.meta.filters,
                    pagination: action.payload.data.meta.pagination,
                };
            case AXIOS_REQUEST_ACTION.ERROR:
                return { ...state, isLoading: false, error: [] };
            default:
                throw new Error('Invalid action type');
        }
    }

    const initialState = {
        isLoading: false,
        filters: {
            article: { options: [] },
            client: { options: [] }
        },
        pagination: {
            currentPage: 0,
            totalPages: 0,
        },
        data: [],
        error: null
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const [requestState, setRequestState] = useState({
        type: null,
        article: null,
        client: null,
        year: null,
        pageNumber: 1,
    });

    const reloadPage = async (pageNumber = 1) => {
        dispatch({ type: 'fetch' });
        axios.get(`${process.env.NEXT_PUBLIC_ENV_VARIABLE_HOST}/prediction/`, { params: requestState })
            .then(response => dispatch({ type: AXIOS_REQUEST_ACTION.SCCESS, payload: response }))
            .catch(error => dispatch({ type: AXIOS_REQUEST_ACTION.ERROR, payload: error.message }));
    }

    useEffect(() => {
        reloadPage();
    }, [requestState]);

    if (state.isLoading) {
        return (<PredictionTableBodyLoading />);
    }

    return (
        <div className="tw-flex tw-flex-col">
            <div className="tw-overflow-x-auto">
                <div className="tw-p-1.5 tw-w-full tw-inline-block tw-align-middle">
                    <div class="tw-inline-block tw-relative tw-w-64">
                        <Selector selectText='Article' selectOptions={state.filters?.article?.options} callback={(itemID) => { setRequestState({ ...requestState, article: itemID, pageNumber: 1 }) }} />
                    </div>
                    <div class="tw-inline-block tw-relative tw-w-64">
                        <Selector selectText='Client' selectOptions={state.filters?.client?.options} callback={(itemID) => { setRequestState({ ...requestState, client: itemID, pageNumber: 1 }) }} />
                    </div>
                    <div class="tw-inline-block tw-relative tw-w-64">
                        <Selector selectText='type' selectOptions={[
                            { id: 0, name: 'All' },
                            { id: 1, name: 'Recuring' },
                            { id: 2, name: 'Indencieel' }
                        ]}
                            callback={(itemID) => { setRequestState({ ...requestState, type: itemID }) }}
                        />
                    </div>
                    <div class="tw-inline-block tw-relative tw-w-64">
                        <input
                            type="number"
                            className="tw-bg-white tw-w-full tw-ml-8 tw-p-2 tw-flex tw-items-center tw-justify-between tw-rounded tw-text-gray-700" placeholder="Year..."
                            defaultValue={requestState.year}
                            onChange={(event) => event.target.value.length > 3 ? setRequestState({ ...requestState, year: event.target.value, pageNumber: 1 }) : setRequestState({ ...requestState, year: null })}
                        />
                    </div>
                    <div>
                        <table className="tw-min-w-full tw-divide-gray-200 tw-border-collapse tw-border tw-border-slate-500">
                            <PredictionTableHead />
                            <tbody className="tw-min-w-full tw-divide-gray-200">
                                <PredictionTableBody data={state.data} isLoading={state.isLoading} />
                            </tbody>
                        </table>
                        <Pagination currentPage={requestState.pageNumber} totalPages={state.pagination.totalPages} onPageChange={(pageNumber) => { setRequestState({ ...requestState, pageNumber: pageNumber }) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}