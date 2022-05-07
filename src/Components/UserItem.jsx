import { useState } from 'react'
import { useUsersDispatch } from '../Hooks/useUsersDispatch'
function UserItem({ num, user }) {
    const [edit, setEdit] = useState(false)
    const [editedUser, setEditedUser] = useState(user)

    const { id, firstName, lastName, isAdmin, jobTitle, email, mobile, joinDate } = user
    const dispatch = useUsersDispatch()

    const handleDelete = (id) => {
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
                            <button className="btn btn-danger me-2" onClick={() => handleDelete(id)}>
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
                        <input type="text" className="form-control" id="first-name" name="firstName" value={editedUser.firstName} onChange={handleInputChange} />
                    </td>
                    <td className="text-center">
                        <input type="text" className="form-control" id="last-name" name="lastName" value={editedUser.lastName} onChange={handleInputChange} />
                    </td>
                    <td className="text-center">
                        <input type="checkbox" className="form-check-input" id="is-admin" name="isAdmin" checked={editedUser.isAdmin} onChange={handleInputChange} />
                    </td>
                    <td className="text-center">
                        <input type="text" className="form-control" id="job-title" name="jobTitle" value={editedUser.jobTitle} onChange={handleInputChange} />
                    </td>
                    <td className="text-center">
                        <input type="email" className="form-control" id="email" name="email" value={editedUser.email} onChange={handleInputChange} />
                    </td>
                    <td className="text-center">
                        <input type="text" className="form-control" id="mobile" name="mobile" value={editedUser.mobile} onChange={handleInputChange} />
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
