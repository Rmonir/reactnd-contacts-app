import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {

    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: (query !== '' && query.length > 0) ? query.trim() : query
        }))
    }

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    clearQuery() {
        this.updateQuery('')
    }


    render() {
        const { contacts, onDeleteContact } = this.props
        const { query } = this.state

        const showedContacts = query === ''
            ? contacts
            : contacts.filter((c) => (c.name.toLowerCase().includes(query.toLowerCase()))
            )

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input type="text" className='search-contacts' placeholder='Search contacts' value={query} onChange={(event) => this.updateQuery(event.target.value)}></input>
                </div>
                {
                    showedContacts.length !== contacts.length && (
                        <div className='showing-contacts'>
                            <span> Now showing {showedContacts.length} of {contacts.length}
                            </span>
                            <button onClick={() => this.clearQuery()}>
                                Show all
                            </button>
                        </div>
                    )
                }
                <ol className='contact-list'>
                    {showedContacts.map((item) =>
                    (
                        <li className='contact-list-item' key={item.id}>
                            <div className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${item.avatarURL})`
                                }}
                            >
                            </div>
                            <div className='contact-details'>
                                <p>
                                    {item.name}
                                </p>
                                <p>
                                    @{item.handle}
                                </p>
                            </div>
                            <button className='contact-remove' onClick={() => onDeleteContact(item)} >
                            </button>
                        </li>
                    )
                    )}
                </ol>
            </div>

        )
    }
}



export default ListContacts
