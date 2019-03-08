import React from 'react';
import Friend from './Friend';

const FriendList = (props) => {
  return (
    <div>
        {props.friends.map(eachFriend => {
            return <Friend key={eachFriend.id} friend={eachFriend}/>
        })}
      
    </div>
  )
}

export default FriendList

