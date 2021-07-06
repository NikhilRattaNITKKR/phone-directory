import React,{Component} from 'react'
import Header from './Header'
import './App.css'
import {Link} from 'react-router-dom'

class App extends Component{

  constructor(){
    super();
    this.state={
      id:0,
      subsToShow:[]
    }
  }
  render(){
  return (
    <div>
    <Header heading="Phone Directory"/>
    <Link to='/Add'><button className="btn">Add</button></Link>
    <div>
     <span className="heading">Name</span>
     <span className="heading">Phone Number</span>
     </div>
     {console.log(this.props.SubscriberList)}
      { this.props.SubscriberList.map(sub=>{
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
