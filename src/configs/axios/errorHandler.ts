import { toast } from 'react-toastify';

const errorHandler = (error: any) => {
    if (error) {
        let message: string;

        if (error.response) {
            if (error.response.status === 500) {
                message = 'Something went terribly wrong';
            } else {
                message = error.response.data.message;
            }

            if (typeof message === 'string') {
                toast.error(message);
            }

            return Promise.reject(error);
        }
    }
};
export default errorHandler;
