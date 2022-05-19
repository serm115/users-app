import AddUserFormModal from './components/addUserFormModal'
import Header from './components/header'
import Loading from './components/ui/loading/loading'
import UserList from './components/userList'
import { useLoadingState } from './hooks/useLoadingState'
import { ToastContainer} from 'react-toastify'

function App() {
    const loading = useLoadingState()
    return (
        <>
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
            <ToastContainer />
            {loading && <Loading />}
        </>
    )
}

export default App
