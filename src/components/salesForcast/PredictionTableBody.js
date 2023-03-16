import PredictionOverride from "./PredictionOverride"
import PredictionDescriptionAndAgreed from "./PredictionDescriptionAndAgreed"
import { useEffect, useState } from "react";

export default function (props) {

    const [isLoading, setIsLoading] = useState(false);
    const [state, setSate] = useState({
        isLoading: false,
        filters: [],
        pagination: [],
        data: [
            {
                "id": "string",
                "quarterOne": 0,
                "quarterOneOverride": 0,
                "quarterOneIsAgreed": 0,
                "quarterOneDescription": true,
                "quarterTwo": 0,
                "quarterTwoOverride": 0,
                "quarterTwoIsAgreed": 0,
                "quarterTwoDescription": true,
                "quarterThree": 0,
                "quarterThreeOverride": 0,
                "quarterThreeIsAgreed": 0,
                "quarterThreeDescription": true,
                "quarterFour": 0,
                "quarterFourOverride": 0,
                "quarterFourIsAgreed": 0,
                "quarterFourDescription": true,
                "orderYear": 0,
                "type": 0,
                "article": {
                    "id": 0,
                    "name": "string"
                },
                "client": {
                    "id": 0,
                    "name": "string"
                },
            },
            {
                "id": "string",
                "quarterOne": 0,
                "quarterOneOverride": 0,
                "quarterOneIsAgreed": 0,
                "quarterOneDescription": true,
                "quarterTwo": 0,
                "quarterTwoOverride": 0,
                "quarterTwoIsAgreed": 0,
                "quarterTwoDescription": true,
                "quarterThree": 0,
                "quarterThreeOverride": 0,
                "quarterThreeIsAgreed": 0,
                "quarterThreeDescription": true,
                "quarterFour": 0,
                "quarterFourOverride": 0,
                "quarterFourIsAgreed": 0,
                "quarterFourDescription": true,
                "orderYear": 0,
                "type": 0,
                "article": {
                    "id": 0,
                    "name": "string"
                },
                "client": {
                    "id": 0,
                    "name": "string"
                },
            },
            {
                "id": "string",
                "quarterOne": 0,
                "quarterOneOverride": 0,
                "quarterOneIsAgreed": 0,
                "quarterOneDescription": true,
                "quarterTwo": 0,
                "quarterTwoOverride": 0,
                "quarterTwoIsAgreed": 0,
                "quarterTwoDescription": true,
                "quarterThree": 0,
                "quarterThreeOverride": 0,
                "quarterThreeIsAgreed": 0,
                "quarterThreeDescription": true,
                "quarterFour": 0,
                "quarterFourOverride": 0,
                "quarterFourIsAgreed": 0,
                "quarterFourDescription": true,
                "orderYear": 0,
                "type": 0,
                "article": {
                    "id": 0,
                    "name": "string"
                },
                "client": {
                    "id": 0,
                    "name": "string"
                },
            },
            {
                "id": "string",
                "quarterOne": 0,
                "quarterOneOverride": 0,
                "quarterOneIsAgreed": 0,
                "quarterOneDescription": true,
                "quarterTwo": 0,
                "quarterTwoOverride": 0,
                "quarterTwoIsAgreed": 0,
                "quarterTwoDescription": true,
                "quarterThree": 0,
                "quarterThreeOverride": 0,
                "quarterThreeIsAgreed": 0,
                "quarterThreeDescription": true,
                "quarterFour": 0,
                "quarterFourOverride": 0,
                "quarterFourIsAgreed": 0,
                "quarterFourDescription": true,
                "orderYear": 0,
                "type": 0,
                "article": {
                    "id": 0,
                    "name": "string"
                },
                "client": {
                    "id": 0,
                    "name": "string"
                },
            },
            {
                "id": "string",
                "quarterOne": 0,
                "quarterOneOverride": 0,
                "quarterOneIsAgreed": 0,
                "quarterOneDescription": true,
                "quarterTwo": 0,
                "quarterTwoOverride": 0,
                "quarterTwoIsAgreed": 0,
                "quarterTwoDescription": true,
                "quarterThree": 0,
                "quarterThreeOverride": 0,
                "quarterThreeIsAgreed": 0,
                "quarterThreeDescription": true,
                "quarterFour": 0,
                "quarterFourOverride": 0,
                "quarterFourIsAgreed": 0,
                "quarterFourDescription": true,
                "orderYear": 0,
                "type": 0,
                "article": {
                    "id": 0,
                    "name": "string"
                },
                "client": {
                    "id": 0,
                    "name": "string"
                },
            },
        ],
    });

    useEffect(() => {
        state;
    },[]);

    const renderTable = () => {

    }

    return state.data.map(predictionByYear => {
        return (
            <>
                <tr>
                    <td className="text-sm text-gray-800 whitespace-nowrap">
                        ProductName
                    </td>
                    <PredictionOverride customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} override={predictionByYear.quarterOneOverride}>{predictionByYear.quarterOne}</PredictionOverride>
                    <PredictionOverride customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} override={predictionByYear.quarterTwoOverride}>{predictionByYear.quarterTwo}</PredictionOverride>
                    <PredictionOverride customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} override={predictionByYear.quarterThreeOverride}>{predictionByYear.quarterThree}</PredictionOverride>
                    <PredictionOverride customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} override={predictionByYear.quarterFourOverride}>{predictionByYear.quarterFour}</PredictionOverride>
                </tr>
                <tr className="bg-gray-100">
                    <PredictionDescriptionAndAgreed customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} isAgreed={predictionByYear.quarterOneIsAgreed}>
                        {predictionByYear.quarterOneDescription}
                    </PredictionDescriptionAndAgreed>
                    <PredictionDescriptionAndAgreed customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} isAgreed={predictionByYear.quarterTwoIsAgreed}>
                        {predictionByYear.quarterTwoDescription}
                    </PredictionDescriptionAndAgreed>
                    <PredictionDescriptionAndAgreed customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} isAgreed={predictionByYear.quarterThreeIsAgreed}>
                        {predictionByYear.quarterThreeDescription}
                    </PredictionDescriptionAndAgreed>
                    <PredictionDescriptionAndAgreed customerID={predictionByYear.client.id} articleID={predictionByYear.article.id} year={predictionByYear.orderYear} isLoading={isLoading} setIsLoading={setIsLoading} isAgreed={predictionByYear.quarterFourIsAgreed}>
                        {predictionByYear.quarterFourDescription}
                    </PredictionDescriptionAndAgreed>
                </tr>
            </>
        )
    })
}