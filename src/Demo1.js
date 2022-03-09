import React from "react";
import "./style.css";
class Demo1 extends React.Component {
  render() {
          let highlight = {
                  color: 'black',backgroundColor:'blue'
           }
          return(<React.Fragment>
                 <h1 style={highlight}>welcome to infosys</h1> 
          </React.Fragment>)
  }
}
export default Demo1;
