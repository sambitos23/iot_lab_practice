import React from "react";

export default class Card extends React.Component{
    render(){
        return(
            <div className="h-screen flex bg-gray-600 justify-center items-center ">
                <div className="w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">The titel of the card here</div>

                    <div className="flex px-6 py-4 justify-between items-center">
                        <div className="bg-red-400 font-bold uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-100">Under Review</div>
                        <div className="text-sm">May 14, 1988</div>
                    </div>

                    <div className="px-6 py-4 border-t border-grey-200">
                        <div className="border rounded-lg p-4 bg-gray-200">
                            Here is a comment about this employee
                        </div>
                    </div>

                    <div className="bg-gray-200 px-6 py-4">
                        <div className="uppercase text-xs font-bold text-grey-600">Employee</div>

                        <div className="flex items-center pt-3">
                            <div className="bg-blue-800 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">SS</div>
                            <div className="ml-4">
                                <p className="font-bold">Sambit Saha</p>
                                <p className="text-sm text-gray-700 mt-1">Instructor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}