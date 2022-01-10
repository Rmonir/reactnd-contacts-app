import React ,{Component} from  'react'

class ListContacts extends Component {
    render() {
        console.log('Prop', this.props)
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((item) =>
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
                    </li>
                )
                )}
            </ol>
        )
    }
}


export default ListContacts