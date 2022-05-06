import Header from './Components/Header'
import UserList from './Components/UserList'
import { UsersProvider } from './Contexts/users'

function App() {
    return (
        <>
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
                <div className="modal" tabIndex="-1" id="add-user-modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add User Form</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="mb-3 col-12 col-md-6">
                                            <label htmlFor="first-name" className="form-label">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="first-name"
                                            />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6">
                                            <label htmlFor="last-name" className="form-label">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="last-name"
                                            />
                                        </div>

                                        <div className="mb-3 col-12 col-md-6">
                                            <label htmlFor="job-title" className="form-label">
                                                Job title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="job-title"
                                            />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                            />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6">
                                            <label htmlFor="mobile" className="form-label">
                                                Mobile
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="mobile"
                                            />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6 d-flex align-items-center">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="is-admin"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="is-admin"
                                                >
                                                    Is admin
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </UsersProvider>
        </>
    )
}

export default App
