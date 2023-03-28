import { useState } from 'react';
import Sidebar from "./sidebar";

export default function Layout({ children }) {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    
    <div className="tw-flex">
      <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
      <div className={`${sidebarVisible ? 'tw-w-5/6' : 'tw-w-full'} tw-p-6 tw-m-6"`}>
        {children}
      </div>
    </div>
  );
}