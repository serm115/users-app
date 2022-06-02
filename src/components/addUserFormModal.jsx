import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../hooks/useAppDispatch'
import api from '../helpers/httpClient'
import Input from './ui/input'

function AddUserFormModal() {
    const initialUser = {
        firstName: '',
        lastName: '',
        isAdmin: false,
        jobTitle: '',
        email: '',
        mobile: '',
        password: '',
        joinDate: '',
    }
    const [user, setUser] = useState(initialUser)
    const dispatch = useAppDispatch()

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSaveButtonClick = () => {
        user.joinDate = new Date().toLocaleString()
        addUser()
    }

    function addUser() {
        dispatch({
            type: 'change_loading_state',
            payload: {
                loading: true,
            },
        })
        api.post('users/', user).then((response) => {
            console.log(response)
            dispatch({
                type: 'add_user',
                payload: {
                    user: response.data.data,
                },
            })
            setUser(initialUser)
            toast.success('User successfully added')
        })
    }

    return (
        <div className="modal fade" tabIndex="-1" id="add-user-modal">
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
                                    <Input
                                        type="text"
                                        id="first-name"
                                        name="firstName"
                                        value={user.firstName}
                                        onChange={handleInputChange}
                                        label="First name"
                                    />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <Input
                                        type="text"
                                        id="last-name"
                                        name="lastName"
                                        value={user.lastName}
                                        onChange={handleInputChange}
                                        label="Last name"
                                    />
                                </div>

                                <div className="mb-3 col-12 col-md-6">
                                    <Input
                                        type="text"
                                        id="job-title"
                                        name="jobTitle"
                                        value={user.jobTitle}
                                        onChange={handleInputChange}
                                        label="Job title"
                                    />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <Input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInputChange}
                                        label="Email"
                                    />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <Input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        value={user.mobile}
                                        onChange={handleInputChange}
                                        label="Mobile"
                                    />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleInputChange}
                                        label="Password"
                                    />
                                </div>
                                <div className="mb-3 col-12 col-md-6 d-flex align-items-center">
                                    <div className="form-check">
                                        <Input
                                            type="checkbox"
                                            id="is-admin"
                                            name="isAdmin"
                                            checked={user.isAdmin}
                                            onChange={handleInputChange}
                                            label="Is admin"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSaveButtonClick}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserFormModal
