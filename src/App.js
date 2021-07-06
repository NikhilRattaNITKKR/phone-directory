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
  onDelete=(id)=>{
  this.props.deleteHandler(id);
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
      { this.props.SubscriberList.map(sub=>{
       return <div key ={sub.id}>
       <span className="record">{sub.name}</span>
        <span className="record">{sub.phone}</span>
        <button className="delete" onClick={this.onDelete.bind(this,sub.id)}>Delete</button>
        </div>
     })}
     </div>
  );
}
}
export default App;
