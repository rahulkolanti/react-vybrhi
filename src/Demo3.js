import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Demo3 extends React.Component {
       render() {
                var employees = [
                  { empId: 1197, name: 'rahul', designation:'SE', salary:23000},
                  { empId: 1198, name: 'mani', designation:'SSE', salary:20000},
                  { empId: 1199, name: 'pavan',designation:'TA', salary:30000}
                ]
               
               return (<React.Fragment>
                       <table style={{width:'60%'}} className='table'>
                            <thead className="thead-light">
                                <tr>
                                     <th>EmpID</th>
                                     <th>Name</th>
                                     <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {employees.map(employee => {
                                       return employee.salary > 15000 ? (<tr key={employee.empId}>
                                                <td>{employee.empId}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                        </tr>) : null
                                }) 
                                }
                            </tbody>
                       </table>
               </React.Fragment>)  
       }
}
export default Demo3;
