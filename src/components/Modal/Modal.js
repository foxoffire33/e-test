import { ErrorBoundary } from 'react-error-boundary'
import DisplayErrorMessages from '../DisplayErrorMessages';

export default function Modal({ showModal, closeButton, title, children }) {
    if (showModal) {
        return <>
            <ErrorBoundary fallback={<h1>Error while loading</h1>}
                onError={(error) => {
                    console.error(error);
                }}>
                <div className="tw-relative tw-z-10" aria-labelledby="tw-modal-title" role="dialog" aria-modal="true">
                    <div className="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity"></div>
                    <div className="tw-fixed tw-inset-0 tw-z-10 tw-overflow-y-auto">
                        <div className="tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 tw-text-center sm:tw-items-center sm:tw-p-0">
                            <div className="tw-relative tw-transform tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-left tw-shadow-xl tw-transition-all sm:tw-my-8 sm:tw-w-full sm:tw-max-w-lg">
                                <div className="tw-bg-white tw-px-4 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4">
                                    <div className="sm:tw-flex sm:tw-items-start">
                                        <div className="tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-ml-4 sm:tw-text-left">
                                            <h3 className="tw-text-base tw-font-semibold tw-leading-6 tw-text-gray-900" id="tw-modal-title">{title}</h3>
                                            <div className="tw-mt-2">
                                                <p className="tw-text-sm tw-text-gray-500">
                                                    {children}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tw-bg-gray-50 tw-px-4 tw-py-3 sm:tw-flex sm:tw-flex-row-reverse sm:tw-px-6">
                                    <button
                                        type="button"
                                        className="tw-inline-flex tw-w-full tw-justify-center tw-rounded-md tw-bg-red-600 tw-px-3 tw-py-2 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm tw-hover:bg-red-500 sm:tw-ml-3 sm:tw-w-auto"
                                        onClick={closeButton} >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </ErrorBoundary>
        </>
    }
}