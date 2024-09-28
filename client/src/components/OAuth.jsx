import { Button } from 'flowbite-react'
import React from 'react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase.js'
import { signinSuccess } from '../redux/user/userSlice.js'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const navigate = useNavigate();
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt: 'select_account'})
        try{
            const resultsFromGoogle = await signInWithPopup(auth , provider)
            //console.log(resultsFromGoogle)
            const res = await fetch ('api/auth/google' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,

                }
                )
            })
            const data = await res.json()
            //console.log(data);
            if(res.ok){
                dispatch(signinSuccess(data))
                navigate("/");
            }
            
        }catch(err){
            console.log(err);
            
        }
    }
    return (
    <Button type='button' gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
       <AiFillGoogleCircle  className='h-6 w-6 mr-2'/>
        Continue With Google
    </Button>
  )
}
