import { toast } from "react-toastify";
import Loader from "components/Loader/Loader";

export const showToast = (status, name) => {
   switch (status) {
    case "fulfilled" :
        return toast.success(`Welcome ${name}!`);
    case "pending" :
        return <Loader/>;    
    case "rejected" : 
        return toast.error(`Something went wrong(`);
    default: 
        return;
    }
};


