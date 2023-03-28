import Modal from "./Modal";

export default function PredictionsInformationModal({ showModal, setShowModal }) {
    return (
        <>
            <Modal title='Prediction information' showModal={showModal} setShowModal={() => setShowModal(false)} >
                fetch content information
            </Modal>
        </>
    )
}