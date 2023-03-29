import { useState } from "react";
import { PredictionsStatus } from "../Status/Predictions";

const fetchData = (clientID, articleID, year, quarter, type) => {
    const url = `${process.env.NEXT_PUBLIC_ENV_VARIABLE_HOST}/prediction/${clientID}/${articleID}/${year}/${quarter}/${type}`;
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
            } else if (status === PredictionsStatus.EROOR) {
                throw response;
            }

            return response;
        }
    };
};

export const createResource = (clientID, articleID, year, quarter, type) => {
    return {
        data: wrapPromise(fetchData(clientID, articleID, year, quarter, type))
    };
};