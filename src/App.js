import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsApi from './utils/ContactsAPI'
import { Route } from 'react-router-dom'
import CreateContact from "./createContact";
class App extends Component {

  state = {
    contacts: []
  }
  componentDidMount() {
    ContactsApi.getAll().then((contacts) => {
      this.setState({
        contacts
      })
    })
  }

  deleteContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    ContactsApi.remove(contact)
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts contacts={this.state.contacts} onDeleteContact={this.deleteContact} />
        )} >

        </Route>
        <Route
          path="/create" component={CreateContact}
        ></Route>
      </div>
    );
  }
}

export default App;
