import { Suspense, startTransition } from "react";
import LoadingAnimation from "@/components/loading/LoadingAnimation";
import { ErrorBoundary } from 'react-error-boundary'
import DisplayErrorMessages from "@/components/DisplayErrorMessages";
import { createResource } from "@/Data/Api/PredictionsInformation";

export default function PredictionInofrmationModalContent({ selected }) {
    const resource = createResource(selected.selected.clientID, selected.selected.articleID, selected.selected.year, selected.selected.quarter, selected.selected.type);
    console.log(selected.selected);

    return (
        <ErrorBoundary FallbackComponent={DisplayErrorMessages} >
            <Suspense fallback={<LoadingAnimation />}>
                <OrdersList resource={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}

const dateFormated = (date) => new Date(Date.parse(date)).toLocaleDateString('nl-nl', { year: "numeric", month: "short", day: "numeric" })

const OrdersList = ({ resource }) => {
    const data = resource.data.read();

    return data.data.orders.map((order) => {
        return (
            <ul>
                <a href='#'>{dateFormated(order.updatedAt)} ({order.id}), KGS: {order.kgs} </a>
            </ul>
        )
    });
}

// const SuspenseTrigger = () => {
//     throw new Promise(() => {})
//   }
