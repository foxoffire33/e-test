export default function LoadingAnimation() {
    return (
        <div class="tw-flex tw-items-center tw-justify-center">
            <div
                class="tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:tw-animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    class="!tw-absolute !tw--m-px !tw-h-px !tw-w-px !tw-overflow-hidden !tw-whitespace-nowrap !tw-border-0 !tw-p-0 ![tw-clip:tw-rect(0,0,0,0)]">
                </span>
            </div>
        </div>
    );
}