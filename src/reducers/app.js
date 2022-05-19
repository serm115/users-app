export function appReducer(state, action) {
    switch (action.type) {
        case 'get_users':
            return getUsers(state, action)
        case 'add_user':
            return addUser(state, action)
        case 'delete_user':
            return deleteUser(state, action)
        case 'edit_user':
            return editUser(state, action)
        case 'change_loading_state':
            return changeLoadingState(state, action)
        default:
            throw Error(`action type not allowed: ${action.type}`)
    }
}

const getUsers = (state, action) => {
    let { users } = action.payload
    return {
        ...state,
        users,
        loading: false,
    }
}

const addUser = (state, action) => {
    let { user } = action.payload
    return {
        ...state,
        users: [...state.users, user],
        loading: false,
    }
}

const deleteUser = (state, action) => {
    let { id } = action.payload

    return {
        ...state,
        users: state.users.filter((item) => item.id !== id),
        loading: false,
    }
}

const editUser = (state, action) => {
    let { user } = action.payload
    // let newUsers = state.users.filter((item) => item.id !== user.id)
    let newUsers = state.users.map((item) => (item.id !== user.id ? item : user))

    return {
        ...state,
        // users: [...newUsers, user],
        users: [...newUsers],
        loading: false,
    }
}

const changeLoadingState = (state, action) => {
    const loading = action.payload
    return {
        ...state,
        loading,
    }
}
