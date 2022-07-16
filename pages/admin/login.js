import React,{useState,useEffect} from 'react'
import styles from "./login.module.css"


const login = () => {
  const [username,setUsername] = useState();
  const [pass,setPass] = useState();
  return (
    <div className={styles.login}>
        <h1>Admin Login</h1>
        <form>
            <div class="form-group">
                <label for="adminUsername">Username</label>
                <input type="text" class="form-control" id="adminUsername"  placeholder="Enter Username" onChange={e => setUsername(e.target.values)}/>    
            </div>
            <div class="form-group">
                <label for="adminPass">Password</label>
                <input type="password" class="form-control" id="adminPass" placeholder="Password" onChange={e => setPass(e.target.values)}/>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default login