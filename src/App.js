import React from "react";
import Box_Shade from "../src/tailwind_css/Tailwind_box";
import Text from "../src/tailwind_css/Text_style";
import Button_style from "../src/tailwind_css/Buttons_style"


export default class App extends React.Component{
  render(){
    return(
      <div>
        hello from Sambit
        <Box_Shade/><br /><br />
        <Text/><br /><br />
        <Button_style />
      </div>
    )
  }
}