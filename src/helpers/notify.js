import { toast } from 'react-toastify'

const options = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    theme: 'colored',
}

export default {
    success: (message) => toast.success(message, options),
    error: (message) => toast.error(message, options),
    warning: (message) => toast.warn(message, options),
    info: (message) => toast.info(message, options),
}
