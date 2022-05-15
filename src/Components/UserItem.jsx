import { useState } from 'react'
import { useUsersDispatch } from '../hooks/useUsersDispatch'
import Input from './ui/input'

function UserItem({ num, user }) {
    const [edit, setEdit] = useState(false)
    const [editedUser, setEditedUser] = useState(user)

    const { id, firstName, lastName, isAdmin, jobTitle, email, mobile, joinDate } = user
    const dispatch = useUsersDispatch()

    const handleDelete = () => {
        dispatch({
            type: 'delete_user',
            payload: {
                id,
            },
        })
    }

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setEditedUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleEdit = () => {
        dispatch({
            type: 'edit_user',
            payload: {
                user: editedUser,
            },
        })
        setEdit(false)
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
                    <td className="text-center">{joinDate}</td>
                    <td className="text-center">
                        <div className="d-flex">
                            <button className="btn btn-danger me-2" onClick={handleDelete}>
                                Delete
                            </button>
                            <button className="btn btn-info" onClick={() => setEdit(true)}>
                                Edit
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
                    <td className="text-center">{editedUser.joinDate}</td>
                    <td className="text-center">
                        <button className="btn btn-info" onClick={handleEdit}>
                            Edit
                        </button>
                    </td>
                </tr>
            )}
        </>
    )
}

export default UserItem
