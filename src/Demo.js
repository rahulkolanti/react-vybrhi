import React from "react";
import "./style.css";
class Demo extends React.Component {
       render() {
               let name = {
                       firstName: 'Rahul',
                       lastName: 'Kolanti'
               }
               return(<React.Fragment>
                      <h1>{name.firstName} {name.lastName}</h1> 
               </React.Fragment>)
       }
}
export default Demo;