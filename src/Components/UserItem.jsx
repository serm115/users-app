function UserItem({ num, user }) {
    const { id, firstName, lastName, isAdmin, jobTitle, email, mobile, joinDate } = user
    return (
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
            <td className="text-center"></td>
        </tr>
    )
}

export default UserItem
