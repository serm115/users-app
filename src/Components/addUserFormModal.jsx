import { useState } from 'react'
import { useUsersDispatch } from '../hooks/useUsersDispatch'
import Input from './ui/input'
import { Modal } from 'react-bootstrap'
import validator from 'validator'

function AddUserFormModal({ show, handleClose }) {
    const initailState = {
        id: 0,
        firstName: '',
        lastName: '',
        isAdmin: false,
        jobTitle: '',
        email: '',
        mobile: '',
        joinDate: '',
    }
    const [user, setUser] = useState(initailState)
    const [error, setError] = useState('')
    const dispatch = useUsersDispatch()

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const getCurrentDate = () => {
        const today = new Date()
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric',
        }
        const now = today.toLocaleString('en-IR', options)
        return now
    }

    const checkValidation = () => {
        if (validator.isEmpty(user.email) || validator.isEmpty(user.firstName)) {
            setError('Email and First name are required.')
            return false
        } else if (!validator.isEmail(user.email)) {
            setError('Email address is invalid')
            return false
        }

        return true
    }

    const handleSaveButtonClick = () => {
        if (checkValidation()) {
            user.id = Date.now()
            user.joinDate = getCurrentDate()
            dispatch({
                type: 'add_user',
                payload: {
                    user,
                },
            })
            close()
        }
    }

    const save = () => {}

    const close = () => {
        setError('')
        setUser(initailState)
        handleClose()
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Add User Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                    {error && <h6 className="text-danger">{error}</h6>}
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
                </>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={close}>
                    Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveButtonClick}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUserFormModal
