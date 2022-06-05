import Header from './components/header'
import Loading from './components/shared/loading/loading'
import UserList from './components/users/userList'
import { useLoadingState } from './hooks/useLoadingState'
import { ToastContainer } from 'react-toastify'

function App() {
    const loading = useLoadingState()
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <UserList />
                </div>
            </main>
            <ToastContainer />
            {loading && <Loading />}
        </>
    )
}

export default App
