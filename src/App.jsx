import React, { useState } from 'react'
import AddUserFormModal from './components/addUserFormModal'
import Header from './components/header'
import UserList from './components/userList'
import { UsersProvider } from './contexts/users'

function App() {
    const [show, setShow] = useState()
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <UsersProvider>
            <Header />
            <main>
                <div className="container">
                    <div className="d-flex justify-content-end mb-4">
                        <button className="btn btn-primary" onClick={handleShow}>
                            Add User
                        </button>
                    </div>
                    <UserList />
                </div>
            </main>
            <AddUserFormModal show={show} handleClose={handleClose} />
        </UsersProvider>
    )
}

export default App
