import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FriendsApiService from '../../services/friends-api-service';
import search from './undraw_people_search.svg';

import './FriendsPage.scss'

class FriendsPage extends Component {
  state = {
    friend: {
      email: '',
      properties: []
    },
    error: null
  }

  searchUsers = (ev) => {

    ev.preventDefault();

    const { friendsSearch } = ev.target

    // if (this.state.friend.email !== friendsSearch.value) {
    FriendsApiService.searchUsers(friendsSearch.value)
      .then(properties => this.setState({
        friend: {
          properties,
          email: friendsSearch.value
        },
        error: null
      }))
      .catch(e => this.setState({ error: e.error }))
    // }

  }

  renderFriendProperties() {
    const { friend } = this.state

    const propertyList = friend.properties.map((p) => {
      const link = `/friends/${p.id}`
      return (
        <li key={p.id}>
          <Link to={link}>
            <h4>{p.address}</h4>
          </Link>
        </li>
      )
    })

    return (
      <>
        <h3>Make a reservation with</h3>
        <p>{friend.email}</p>
        <ul className="propertyList">
          {propertyList}
        </ul>
      </>
    )
  }


  render() {
    return (
      <div className="FriendsPage">
        <h2>Find Friends</h2>
        <div className="friends_search">
          <form onSubmit={e => this.searchUsers(e)}>
            <label htmlFor="friendsSearch">Search by email</label>
            <input id="friendsSearch" type="email" required />
            <button type="submit">Search</button>
          </form>
          <img src={search} alt={search} />
        </div>
        {!!this.state.error && <div>Can't find user with email</div>}
        <section>
          {!!this.state.friend.properties.length && this.renderFriendProperties()}
        </section>
      </div>
    );
  }
}

export default FriendsPage;