export function usersReducer(state, action) {
    switch (action.type) {
        case 'add_user':
            return addUser(state, action)
        case 'delete_user':
            return deleteUser(state, action)

        default:
            throw Error(`action type not allowed: ${action.type}`)
    }
}

const addUser = (state, action) => {
    let { user } = action.payload
    return {
        ...state,
        users: [...state.users, user],
    }
}

const deleteUser = (state, action) => {
    let { id } = action.payload

    return {
        ...state,
        users: state.users.filter((item) => item.id !== id),
    }
}
