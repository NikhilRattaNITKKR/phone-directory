import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component{
  constructor(){
    super();
    this.state={
      id:0,
      name:"",
      phone:""
    }
  }

  inputChangeHandler=(e)=>{
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState(state);
  }
  onAddSubscriber=(e)=>{
    e.preventDefault();
    const state=this.state;
    this.props.addSubscriber(state);
    this.setState(state);
  }
  render(){
    return(
      <div>
          <Header heading="Add Subscriber"/>
          <form className="subscriber-form" onSubmit={this.onAddSubscriber}>
           <label htmlFor="name" className="label-control"> Name:</label><br/>
           <input className="input-control" name="name" id="name" onChange={this.inputChangeHandler}></input><br/>
           <label htmlFor="phone" className="label-control"> Phone:</label><br/>
           <input className="input-control" name="phone" id="phone" onChange={this.inputChangeHandler}></input><br/>
           <button type="submit" className="btn">Add</button>
           <div className="subscriber-info-container">
             <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
             <span className="subscriber-info">Name: {this.state.name}</span><br/>
             <span className="subscriber-info">Phone: {this.state.phone}</span><br/>
          </div>
          </form>
      </div>
    )
  }
};

export default AddSubscriber;
