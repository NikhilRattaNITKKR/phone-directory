import React,{Component} from 'react'
import Header from './Header'
import './App.css'
class App extends Component{
  render(){
    let records=[{
      id:1,
      name:"Nikhil Ratta",
      phone:"888888888"
    },
    {
      id:2,
      name:"Drishti Ratta",
      phone:"888883888"
    }]
  return (
    <div>
    <Header heading="Phone Directory"/>
    <button className="add">Add</button>
    <div>
     <span className="heading">Name</span>
     <span className="heading">Phone Number</span>
     </div>
     {records.map(sub=>{
       return <div>
       <span key={sub.id} className="record">{sub.name}</span>
        <span key={sub.id} className="record">{sub.phone}</span>
        <button className="delete">Delete</button>
        </div>
     })}
     </div>
  );
}
}
export default App;
