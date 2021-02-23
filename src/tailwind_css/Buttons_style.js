import React from "react";


export default class Button_style extends React.Component{
  render(){
    return(
      <div>
       {/* blue background, rounded, thick left border */}
        <div><button class="m-4 bg-blue-800 py-2 px-4 text-sm text-gray-400 rounded-lg border-l-8 border-blue-700">Submit</button></div>
        
       {/* Red text, outlined */}
        <div><button class="text-red-800 border-2 border-red-900 py-2 px-4 m-4 rounded">Cancel</button></div>
        
       {/* light Indigo background, bottom border, indigo text */}
        <div><button class="bg-indigo-200 border-b-4 border-t-4 border-indigo-400 text-indigo-800 py-2 px-4 m-4">Save</button></div>
        
       {/* Thick rounded, lots of padding, large button */}
        <div><button class="py-2 px-16 m-3 font-bold text-sm rounded-full border-4 bg-red-600 border-red-400">Buy Now</button></div>
        
       {/* Outlined, serif font, uppercase, rounded */}
        <div><button class="py-2 px-4 m-4 border font-serif uppercase rounder-lg text-xs">Send Postcard</button></div>
      </div>
    )
  }
}