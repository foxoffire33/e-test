export default function DisplayErrorMessages({ errorMessages }) {

    let errorsAsHtml = '';

    if (errorMessages.length > 1) {
        return (
            <div className="tw-bg-red-100 tw-border tw-border-red-400 tw-text-red-700 tw-px-4 tw-py-3 tw-rounded tw-relative" role="alert">
                <strong class="tw-font-bold">Holy smokes!</strong>
                <hr />
                {errorMessages.map(error => {
                    return <span class="block sm:inline">{error?.message}</span>
                })}
            </div>
        );
    }

}