import { useReducer, useEffect } from "react"
import SalesForcastTable from "@/components/salesForcast/SalesForcastTable"
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <>
      <Layout>
        <div class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6">
          <h2 class="tw-text-lg tw-font-medium tw-mb-4">Sales forcast</h2>
          <hr />
          <SalesForcastTable />
        </div>
      </Layout>
    </>
  );
}
