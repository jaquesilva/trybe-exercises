import { Component } from 'react';

class UserProfile extends Component {
  render () {
    const { user } = this.props

    return (
      <div>{user.id} {user.name} {user.email}</div>
    );
  }
}

export default UserProfile;