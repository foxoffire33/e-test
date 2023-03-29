import React, { Suspense, useState } from 'react';
import PredictionTableBodyLoading from '../loading/PredictionTableBodyLoading';
import Pagination from '../pagination/Pagination';
import Selector from '../Selector';
import PredictionTableHead from './PredictionTableHead';
import Modal from '../Modal/Modal';
import { createResource } from '@/Data/Api/Predictions';
import PredictionInofrmationModalContent from '../Modal/Content/PredictionInofrmationModalContent';

const PredictionTableBody = React.lazy(() => import('./PredictionTableBody'));

export default function SalesForcastTable() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPrediction, setSelectedPrediction] = useState({ clientID: null, articleID: null, year: null, quater: null, type: null });
    const resource = createResource();

    return (
        <div className="tw-flex tw-flex-col">
            <Modal title='Prediction information' showModal={showModal} closeButton={() => setShowModal(false)}>
                <PredictionInofrmationModalContent selected={selectedPrediction} />
            </Modal>
            <div className="tw-overflow-x-auto">
                <Suspense fallback={<PredictionTableBodyLoading />}>
                    <div className="tw-p-1.5 tw-w-full tw-inline-block tw-align-middle">
                        <div className="tw-inline-block tw-relative tw-w-64">
                            <Selector selectText='Article' selectOptions={resource?.data?.meta?.filters?.article?.options} callback={(itemID) => { resource.setRequestState({ ...resource.requestState, article: itemID, page: 1 }) }} />
                        </div>
                        <div className="tw-inline-block tw-relative tw-w-64">
                            <Selector selectText='Client' selectOptions={[]} callback={(itemID) => { resource.setRequestState({ ...resource.requestState, client: itemID, page: 1 }) }} />
                        </div>
                        <div className="tw-inline-block tw-relative tw-w-64">
                            <Selector selectText='type' selectOptions={[
                                { id: 0, name: 'All' },
                                { id: 1, name: 'Recuring' },
                                { id: 2, name: 'Indencieel' }
                            ]}
                                callback={(itemID) => { resource.setRequestState({ ...resource.requestState, type: itemID }) }}
                            />
                        </div>
                        <div className="tw-inline-block tw-relative tw-w-64">
                            <input
                                type="number"
                                className="tw-bg-white tw-w-full tw-ml-8 tw-p-2 tw-flex tw-items-center tw-justify-between tw-rounded tw-text-gray-700" placeholder="Year..."
                                defaultValue={resource.requestState.year}
                                onChange={(event) => event.target.value.length > 3 ? resource.setRequestState({ ...resource.requestState, year: event.target.value, pageNumber: 1 }) : resource.setRequestState({ ...resource.requestState, year: null })}
                            />
                        </div>
                        <div>
                            <table className="tw-min-w-full tw-divide-gray-200 tw-border-collapse tw-border tw-border-slate-500">
                                <PredictionTableHead />
                                <tbody className="tw-min-w-full tw-divide-gray-200">
                                    <PredictionTableBody resource={resource} showModal={showModal} setShowModal={(value) => setShowModal(value)} setSelectedPrediction={(selected) => setSelectedPrediction({ selected })} />
                                </tbody>
                            </table>
                            <Pagination resource={resource} />
                        </div>
                    </div>
                </Suspense>
            </div>
        </div>
    )
}