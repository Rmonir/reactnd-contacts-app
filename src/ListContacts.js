import React  from  'react'
import PropTypes from 'prop-types'

// class ListContacts extends Component {
//     render() {
//         console.log('Prop', this.props)
//         return (
//             <ol className='contact-list'>
//                 {this.props.contacts.map((item) =>
//                 (
//                     <li className='contact-list-item' key={item.id}>
//                         <div className='contact-avatar'
//                             style={{
//                                 backgroundImage: `url(${item.avatarURL})`
//                             }}
//                         >
//                         </div>
//                         <div className='contact-details'>
//                             <p>
//                                 {item.name}
//                             </p>
//                             <p>
//                                 @{item.handle}
//                             </p>
//                         </div>
//                     </li>
//                 )
//                 )}
//             </ol>
//         )
//     }
// }


function ListContacts(props) {
    return (
        <ol className='contact-list'>
            {props.contacts.map((item) =>
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
                    <button className='contact-remove' onClick={()=> props.onDeleteContact(item)} >

                    </button>   
                </li>
            )
            )}
        </ol>
    )
}

export default ListContacts

ListContacts.PropTypes={
    contacts: PropTypes.array.isRequired,
    onDeleteContact:PropTypes.func.isRequired
}