import UserItem from './userItem'
import { useUsersState } from '../hooks/useUsersState'

function UserList() {
    const users = useUsersState()
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
                        Is Admin
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
                        Join Date
                    </th>
                    <th className="text-center" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <UserItem key={user.id} num={index + 1} user={user} />
                ))}
            </tbody>
        </table>
    )
}

export default UserList
