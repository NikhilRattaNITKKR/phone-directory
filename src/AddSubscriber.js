import React, {Component} from 'react';
import Header from './Header';
import './common/common.css';

class AddSubscriber extends Component{
  render(){
    return(
      <div>
          <Header heading="Add Subscriber"/>
          <button className="btn">Back</button>
      </div>
    )
  }
};

export default AddSubscriber;
