import React,{useState} from 'react'
import UserForm from './UserForm';
import UserDetails from './UserDetails';
export default function UserInfo(){
    const [user,setUser] = useState();
    const ChangeUserHandler=data=>{
        setUser(data);
    }
    return<>
        <UserForm onSubmit={ChangeUserHandler}></UserForm>
        {user &&<UserDetails user={user}></UserDetails> }
        
    </>
}