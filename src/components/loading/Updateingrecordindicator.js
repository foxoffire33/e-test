export default function Updateingrecordindicator({ colSpan }) {
    return (
        <td class="tw-relative tw-flex tw-items-center tw-justify-center tw-h-8 tw-w-8" colSpan={colSpan}>
            <span class="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-6 tw-h-6 tw-rounded-full tw-bg-green-400 tw-opacity-75"></span>
            <span class="tw-relative tw-inline-flex tw-rounded-full tw-h-4 tw-w-4 tw-bg-green-500"></span>
        </td>
    );
}