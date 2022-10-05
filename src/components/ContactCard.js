import React from "react";
import user from '../images/user-avatar.png'

const ContactCard = ({ contact, removeContactHandler }) => {
    const { id, name, email } = contact
    return (
        <div className="item">
            <img src={user} alt="user icon" className="ui avatar image" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" onClick={() => { removeContactHandler(id) }}></i>
        </div>
    )
}

export default ContactCard;