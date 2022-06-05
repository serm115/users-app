function UserListHeader() {
    return (
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
                    Join Date
                </th>
                <th className="text-center" scope="col"></th>
            </tr>
        </thead>
    )
}

export default UserListHeader
