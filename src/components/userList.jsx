import { useEffect } from 'react'
import UserItem from './userItem'
import { useUsersState } from '../hooks/useUsersState'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { httpClient } from '../services/httpClient'

function UserList() {
    const users = useUsersState()
    const dispatch = useAppDispatch()

    useEffect(() => {
        getUsers()
    }, [])

    function getUsers() {
        httpClient.get('/').then((response) => {
            dispatch({
                type: 'get_users',
                payload: {
                    users: response.data.data,
                },
            })
        })
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="text-center" scope="col">
                        #
                    </th>
                    <th className="text-center" scope="col">
                        First Name
                    </th>
                    <th className="text-center" scope="col">
                        Last Name
                    </th>
                    <th className="text-center" scope="col">
                        IsAdmin
                    </th>
                    <th className="text-center" scope="col">
                        Job Title
                    </th>
                    <th className="text-center" scope="col">
                        Email
                    </th>
                    <th className="text-center" scope="col">
                        Mobile
                    </th>
                    <th className="text-center" scope="col">
                        Password
                    </th>
                    <th className="text-center" scope="col">
                        Join Date
                    </th>
                    <th className="text-center" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.length ? (
                    users.map((user, index) => (
                        <UserItem key={user.id} num={index + 1} user={user} />
                    ))
                ) : (
                    <tr>
                        <td colSpan={10} className="text-center">
                            کاربری وجود ندارد
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserList
