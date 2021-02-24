import React from "react";


export default class Block extends React.Component{
  render(){
    return(
      <div>
         {/* Must take up all of the available space  */}
         {/* Evenly distributed 3x3 grid  */}
         {/* Letters must be centered on the square  */}
         {/* Must have some spacing between the blocks  */}
        <div class="h-screen flex flex-wrap justify-around">
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-100 m-2 w-full flex justify-center items-center">A</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-200 m-2 w-full flex justify-center items-center">B</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-300 m-2 w-full flex justify-center items-center">C</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-400 m-2 w-full flex justify-center items-center">D</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-500 m-2 w-full flex justify-center items-center">E</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-600 m-2 w-full flex justify-center items-center">F</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-700 m-2 w-full flex justify-center items-center">G</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-800 m-2 w-full flex justify-center items-center">H</div>
            </div>
            <div className="flex w-1/3 h-1/3">
                <div class="bg-green-900 m-2 w-full flex justify-center items-center">I</div>
            </div>
        </div>
      </div>
    )
  }
}