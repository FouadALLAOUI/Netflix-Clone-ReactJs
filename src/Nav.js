import React, { useEffect, useState } from 'react'
import './styles/Nav.css'
import { useHistory } from 'react-router-dom';
function Nav() {
    // React useState Hook allows us to track state in a function component.
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    //useEffect Hook allows you to perform side effects in your components
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
    
    <div className='nav_content'>
        <img
            onClick={() => history.push("/")}
            className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt=""
        />
        <img
            onClick={() => history.push("/profile")}
            className='nav_avatar'
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt=''
        />
    </div>
</div>
  )
}

export default Nav