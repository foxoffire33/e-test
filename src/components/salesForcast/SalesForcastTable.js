import { useState } from 'react';
import PredictionTableBody from './PredictionTableBody'
export default function(){

    return(
        <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="border rounded-lg">
                    <table className="min-w-full divide-gray-200"> 
                    <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Product</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q1</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q1 Override</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q2</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q2 Override</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q3</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q3 Override</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q4</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Q4 Override</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >Agreed</th>
                            </tr>
                        </thead>
                        <tbody className="min-w-full divide-gray-200">
                            <PredictionTableBody />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}