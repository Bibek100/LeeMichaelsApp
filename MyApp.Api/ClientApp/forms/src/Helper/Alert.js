import { toast } from 'react-toastify';

const Alert = (model) => {
    model.success ? toast.success(model.message, { position: toast.POSITION.TOP_RIGHT}) : toast.error(model.message, { position: toast.POSITION.TOP_RIGHT})
} 

export { Alert };