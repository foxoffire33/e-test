export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const MAX_PAGE_LINKS = 10; // maximum number of page links to show

    let startPageNumber = Math.max(currentPage - Math.floor(MAX_PAGE_LINKS / 2), 1);
    let endPageNumber = Math.min(startPageNumber + MAX_PAGE_LINKS - 1, totalPages);

    // If the endPageNumber is less than MAX_PAGE_LINKS, adjust the startPageNumber
    if (endPageNumber - startPageNumber + 1 < MAX_PAGE_LINKS) {
        startPageNumber = Math.max(endPageNumber - MAX_PAGE_LINKS + 1, 1);
    }

    // This code uses the Array.from() method to create an array of numbers representing a range of page numbers between startPageNumber and endPageNumber
    const pageNumbers = Array.from({ length: endPageNumber - startPageNumber + 1 }, (_, i) => startPageNumber + i);

    return (<>
            <div className="tw-lg:tw-w-3/5 tw-w-full tw-flex tw-items-center tw-justify-between tw-border-t tw-border-gray-200">
                <div
                    className="tw-flex tw-items-center tw-pt-3 tw-text-gray-600 tw-hover:tw-text-gray-700 tw-cursor-pointer"
                    onClick={() => { if (currentPage > 1) { onPageChange(currentPage - 1) } }}
                >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke={'currentColor'} strokeWidth={1.25} strokeLinecap={'round'} strokeLinejoin={'round'} />
                        <path d="M1.1665 4L4.49984 7.33333" stroke={'currentColor'} strokeWidth={1.25} strokeLinecap={'round'} strokeLinejoin={'round'}/>
                        <path d="M1.1665 4.00002L4.49984 0.666687"  stroke={'currentColor'} strokeWidth={1.25} strokeLinecap={'round'} strokeLinejoin={'round'}/>
                    </svg>
                    <p className="tw-text-sm tw-ml-3 tw-font-medium tw-leading-none tw-inline">Previous</p>
                </div>
                <div className="tw-sm:flex tw-inline">
                    {pageNumbers.map((pageNumber) => (
                        <p
                            key={pageNumber}
                            onClick={() => onPageChange(pageNumber)}
                            className={`tw-text-sm tw-font-medium tw-leading-none tw-cursor-pointer tw-pt-3 tw-mr-4 tw-px-2 ${pageNumber !== currentPage ? 'tw-text-gray-600 tw-hover:tw-text-gray-700 tw-border-t tw-border-transparent tw-hover:tw-border-gray-400' : 'tw-text-gray-700 tw-border-t tw-border-transparent tw-border-gray-400'
                                } tw-inline`}
                        >{pageNumber}</p>
                    ))}
                </div>
                <div
                    className="tw-flex tw-items-center tw-pt-3 tw-text-gray-600 tw-hover:text-gray-700 tw-cursor-pointer"
                    onClick={() => { if (currentPage !== totalPages) { onPageChange(currentPage + 1) } }}
                >
                    <p className="tw-text-sm tw-font-medium tw-leading-none tw-mr-3 tw-inline">Next</p>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke={'currentColor'} strokeWidth={1.25} strokeLinecap={'round'} strokeLinejoin={'round'} />
                        <path d="M9.5 7.33333L12.8333 4" stroke={'currentColor'} strokeWidth={1.25} strokeLinecap={'round'} strokeLinejoin={'round'} />
                        <path d="M9.5 0.666687L12.8333 4.00002" stroke={'currentColor'} strokeWidth={1.25} strokeLinecap={'round'} strokeLinejoin={'round'} />
                    </svg>
                </div>
            </div>
            <div class="tw-text-center tw-text-gray-500 tw-text-sm tw-mt-1 tw-flex tw-items-center tw-justify-center tw-pb-2 tw-lg:tw-px-0 tw-sm:tw-px-6 tw-px-4 tw-container">
                Showing page {currentPage} of {totalPages}.
            </div>
    </>)
}