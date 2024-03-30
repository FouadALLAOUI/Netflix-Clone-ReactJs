import React from 'react'
import '../styles/ProfileScreen.css'
import Nav from "../Nav";
import { useSelector } from 'react-redux';
import {selectUser} from "../features/userSlice"
import {auth} from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
               <img 
               src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
               alt=''
               />
               <div className='profileScreen_details'>
                  <h2>{user.email}</h2>
                  <div className='profileScreen_plans'>
                    <h3> Plans </h3>
                  <button onClick={()=> auth.signOut()} className='ProfileScreen_signOut'>
                    Sign Out
                  </button>

                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen