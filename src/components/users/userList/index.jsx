import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserItem from '../userItem'
import api from '../../../helpers/httpClient'
import UserListHeader from './userListHeader'
import AddUserFormModal from '../addUserFormModal'
import { fetchUsers } from '../../../store/slices/users'
import { setLoading } from '../../../store/slices/app'

function UserList() {
    const users = useSelector((state) => state.users.list)
    const dispatch = useDispatch()

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        dispatch(setLoading(true))
        await api
            .get('users/')
            .then((response) => {
                dispatch(fetchUsers(response.data.data))
                dispatch(setLoading(false))
            })
            .catch((error) => {
                dispatch(setLoading(false))
            })
    }

    return (
        <>
            {/* <AddUserFormModal /> */}
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
