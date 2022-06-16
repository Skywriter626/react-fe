import React, {useState} from 'react';
import LoginModal from "./Modal/LoginModal";

const Login = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="container">
            <button className="btn-lg btn-primary mt-5" onClick={() => setShowModal(true)}>Click for authorization in App</button>
            <LoginModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
};

export default Login;