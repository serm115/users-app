import { useEffect } from 'react'
import UserItem from '../userItem'
import { useUsersState } from '../../../hooks/useUsersState'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import api from '../../../helpers/httpClient'
import UserListHeader from './userListHeader'
import AddUserFormModal from '../addUserFormModal'

function UserList() {
    const users = useUsersState()
    const dispatch = useAppDispatch()

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        dispatch({
            type: 'change_loading_state',
            payload: {
                loading: true,
            },
        })
        await api
            .get('users/')
            .then((response) => {
                dispatch({
                    type: 'get_users',
                    payload: {
                        users: response.data.data,
                    },
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'change_loading_state',
                    payload: {
                        loading: false,
                    },
                })
            })
    }

    return (
        <>
            <AddUserFormModal />
            <div className="table-responsive">
                <table className="table table-striped">
                    <UserListHeader />
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
            </div>
        </>
    )
}

export default UserList
