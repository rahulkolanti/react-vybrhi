import React from 'react';
import "./style.css";
class Demo2 extends React.Component {
        render() {
          var x=55, y=30
          return (<div>                
                      <h2> Evaluating expression </h2>
                      <h3> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'} </h3>
                  </div>)
        }
}
export default Demo2;
