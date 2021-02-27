import React from "react";
import Box_Shade from "../src/tailwind_css/Tailwind_box";
import Text from "../src/tailwind_css/Text_style";
import Button_style from "../src/tailwind_css/Buttons_style";
import Block from "../src/tailwind_css/Block_gallery";
import Input from "../src/tailwind_css/input_style";
import Card from "../src/tailwind_css/Employee_card";


export default class App extends React.Component{
  render(){
    return(
      <div>
        {/* hello from Sambit
        <Box_Shade/><br /><br />
        <Text/><br /><br />
        <Button_style /><br/><br />
        <Block/>
        <Input /> */}       
        <Card/> 
      </div>
    )
  }
}