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
    componentDidMount() {
        this.props.getData();
    }

  render() {
    return (
      <div>
          <FriendList friends={this.props.friends}/>
        
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

