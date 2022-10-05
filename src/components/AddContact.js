import React, { useState } from "react";

const AddContact = (props) => {
    const [newContact, setNewContact] = useState(
        [{
            name: "",
            email: ""
        }]
    )

    const add = (event) => {
        event.preventDefault();

        if (newContact.name === "" || newContact.email === "") {
            alert("Pls fill all the fields.")
            return
        }

        props.AddContactHandler(newContact);

        setNewContact({
            name: "",
            email: ""
        })
    }

    return (
        <div className="ui main">
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={newContact.name} onChange={(event) => {
                        setNewContact({
                            ...newContact,
                            name: event.target.value
                        })
                    }} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={newContact.email} onChange={(event) => {
                        setNewContact({
                            ...newContact,
                            email: event.target.value
                        })
                    }} />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;