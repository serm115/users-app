import AddUserFormModal from './components/addUserFormModal'
import Header from './components/header'
import UserList from './components/userList'
import { UsersProvider } from './contexts/users'

function App() {
    return (
        <UsersProvider>
            <Header />
            <main>
                <div className="container">
                    <div className="d-flex justify-content-end mb-4">
                        <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add-user-modal"
                        >
                            Add User
                        </button>
                    </div>
                    <UserList />
                </div>
            </main>
            <AddUserFormModal />
        </UsersProvider>
    )
}

export default App
