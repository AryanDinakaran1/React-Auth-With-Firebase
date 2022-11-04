import React, { useState } from 'react';
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
//import Home from './Home';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const nav = useNavigate();

    function createUser() {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res);
            nav('/');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <h1>SignUp</h1>

            <input type="text" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={createUser}>Submit</button>

        </div>
    );
}

export default SignUp;