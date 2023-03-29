import { useState } from "react";
import { PredictionsStatus } from "../Status/Predictions";


const fetchData = (requestState) => {
    const filteredRequestState = Object.entries(requestState).filter(([_, value]) => value !== null).reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    const queryParams = new URLSearchParams(filteredRequestState);
    const url = `${process.env.NEXT_PUBLIC_ENV_VARIABLE_HOST}/prediction/?${queryParams}`;

    return fetch(url).then(x => x.json()).then((x) => x);
  };
  
const wrapPromise = promise => {
    let status = PredictionsStatus.FETCHING;
    let response = [];

    let suspender = promise.then(
        r => {
            status = PredictionsStatus.SUCCESS;
            response = r;
        },
        error => {
            status = PredictionsStatus.EROOR;
            response = error;
        }
    );

    return {
        read() {
            if (status === PredictionsStatus.FETCHING) {
                throw suspender;
            } else if (status === PredictionsStatus.SUCCESS) {
                return response
            }
            return response
        }
    };
};

export const createResource = () => {
    const [requestState, setRequestState] = useState({type: null, article: null, client: null, year: null, page: 1 });
    const [data, setData] = useState(wrapPromise(fetchData(requestState)));
    const reload = () => { setData(wrapPromise(fetchData(requestState))) };

    return {
        requestState,
        data,
        reload,
        setRequestState
    };
};