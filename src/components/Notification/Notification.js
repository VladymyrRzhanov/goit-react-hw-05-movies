import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const Notification = ({message}) => {
    // const notify = () => toast("Wow so easy!");

    return (
        <div>
            {/* <button onClick={toast("Wow so easy!")}></button> */}
            <ToastContainer onClick={toast(`${message}`)}/>
        </div>
    );
};
  
export default Notification;