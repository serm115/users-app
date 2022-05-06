function App() {
    return (
        <>
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm mb-4">
                    <div className="container d-flex justify-content-between">
                        <span className="navbar-brand">
                            <strong>Users App</strong>
                        </span>
                    </div>
                </div>
            </header>
            <div className="container">
                <section>
                    <div className="d-flex justify-content-end mb-4">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">Add User</button>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Is Admin</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Join Date</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}

export default App
