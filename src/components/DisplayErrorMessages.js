export default function DisplayErrorMessages({ error, resetErrorBoundary }) {
    return (
        <div className="tw-bg-red-100 tw-border tw-border-red-400 tw-text-red-700 tw-px-4 tw-py-3 tw-rounded tw-relative" role="alert">
            <strong className="tw-font-bold">Holy smokes!</strong>
            <hr />
            {error.message}
        </div>
    );
}