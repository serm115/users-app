import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import api from '../../helpers/httpClient'
import Input from '../shared/input'

function UserItem({ num, user }) {
    const [edit, setEdit] = useState(false)
    const [editedUser, setEditedUser] = useState(user)

    const { id, firstName, lastName, isAdmin, jobTitle, email, mobile, password, joinDate } = user
    const dispatch = useAppDispatch()

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setEditedUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleDelete = () => {
        dispatch({
            type: 'change_loading_state',
            payload: {
                loading: true,
            },
        })
        api.delete(`users/${id}`).then((response) => {
            dispatch({
                type: 'delete_user',
                payload: {
                    id,
                },
            })
            toast.success('User successfully removed')
        })
    }

    const handleEdit = () => {
        const editedUserCopy = { ...editedUser }
        delete editedUserCopy.id
        dispatch({
            type: 'change_loading_state',
            payload: {
                loading: true,
            },
        })
        api.put(`users/${id}`, editedUserCopy).then((response) => {
            console.log(response)
            dispatch({
                type: 'edit_user',
                payload: {
                    user: response.data.data,
                },
            })
            setEdit(false)
            toast.success('User successfully edited')
        })
    }

    return (
        <>
            {!edit ? (
                <tr>
                    <th className="text-center" scope="row">
                        {num}
                    </th>
                    <td className="text-center">{firstName}</td>
                    <td className="text-center">{lastName}</td>
                    <td className="text-center">{isAdmin ? 'yes' : 'no'}</td>
                    <td className="text-center">{jobTitle}</td>
                    <td className="text-center">{email}</td>
                    <td className="text-center">{mobile}</td>
                    <td className="text-center">{password}</td>
                    <td className="text-center">{joinDate}</td>
                    <td className="text-center">
                        <div className="d-flex">
                            <button className="btn btn-info me-2" onClick={() => setEdit(true)}>
                                Edit
                            </button>
                            <button className="btn btn-danger" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            ) : (
                <tr>
                    <th className="text-center" scope="row">
                        {num}
                    </th>
                    <td className="text-center">
                        <Input
                            type="text"
                            name="firstName"
                            value={editedUser.firstName}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            type="text"
                            name="lastName"
                            value={editedUser.lastName}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            type="checkbox"
                            name="isAdmin"
                            checked={editedUser.isAdmin}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            type="text"
                            name="jobTitle"
                            value={editedUser.jobTitle}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            type="text"
                            name="email"
                            value={editedUser.email}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            type="text"
                            name="mobile"
                            value={editedUser.mobile}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            type="text"
                            name="password"
                            value={editedUser.password}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td className="text-center">{editedUser.joinDate}</td>
                    <td className="text-center">
                        <div className="d-flex">
                            <button className="btn btn-info me-2" onClick={handleEdit}>
                                Edit
                            </button>
                            <button className="btn btn-primary" onClick={() => setEdit(false)}>
                                Cancel
                            </button>
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}

export default UserItem
