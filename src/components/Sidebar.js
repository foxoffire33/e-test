function Sidebar({ sidebarVisible, setSidebarVisible }) {
    return (
        <div className={`tw-bg-white tw-text-gray-800 ${sidebarVisible ? 'tw-w-1/6' : 'tw-w-12'} tw-shadow-md tw-rounded-r-lg tw-space-y-6 tw-overflow-hidden`} >
            <button className="tw-p-4" onClick={() => setSidebarVisible(!sidebarVisible)} tabIndex="0">
                <svg className="tw-h-6 w-6 tw-text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <ul>
                <li className="tw-inline-block tw-whitespace-nowrap">
                    <a href="#" className="tw-block tw-text-gray-800 tw-rounded-md tw-py-2 tw-px-4 tw-transition tw-transform hover:tw--translate-y-1 tw-motion-reduce:transition-none tw-motion-reduce:hover:tw-transform-none">
                        <svg className="tw-h-6 tw-w-6 tw-inline-block tw-mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                        </svg>
                        Dashboard
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default Sidebar;
