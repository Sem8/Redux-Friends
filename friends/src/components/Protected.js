// import React from 'react'

// const Protected = () => {
    
//   return (
//     <div>
//       <h1> Private! </h1>
//       {/* <h1>{this.props.friends}</h1> */}
//     </div>
//   )
// }

import React, { Component } from 'react';
import { connect } from "react-redux";
import FriendList from './FriendList';
import {getData} from '../actions';

class Protected extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }
    componentDidMount() {
        this.props.getData();
    }
    handleChanges = e => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
    }

  render() {
    return (
      <div>
          <FriendList friends={this.props.friends}/>
          <form>
            <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChanges}
            />
            <input
            type='text'
            name='age'
            placeholder='age'
            value={this.state.age}
            onChange={this.handleChanges}
            />
            <input
            type='text'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChanges}
            />
          </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.friends
    }    
}

export default connect(
    mapStateToProps,
    { getData }
  )(Protected);

