'use client';
import axios from "axios"

export default function SignIn(){
    return(
        <div>
            Sign In page <br />
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick= { async()=>{
                const res = await axios.post("http://localhost:3000/api/signin", {
                    username: "kapil",
                    password: "jfgsujh"
                })

                localStorage.setItem("token", res.data.token);
            }}>Sign in </button>
        </div>
    )
}