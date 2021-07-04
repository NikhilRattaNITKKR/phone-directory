import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component{
  render(){
    return(
      <div>
          <Header heading="Add Subscriber"/>
          <button className="btn">Back</button>
          <form className="subscriber-form">
           <label htmlFor="name" className="label-control"> Name:</label><br/>
           <input className="input-control" name="name" id="name"></input><br/>
           <label htmlFor="phone" className="label-control"> Phone:</label><br/>
           <input className="input-control" name="phone" id="phone"></input><br/>
           <div className="subscriber-info-container">
             <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
             <span className="subscriber-info">Name: </span><br/>
             <span className="subscriber-info">Phone: </span><br/>
          </div>
          </form>
      </div>
    )
  }
};

export default AddSubscriber;
