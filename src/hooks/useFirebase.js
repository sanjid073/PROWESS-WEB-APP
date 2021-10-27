import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,updateProfile,createUserWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/FireBase/firebase.init";


initializeAuthentication()

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const useFirebase = () => {
     const [user, setUser] = useState({})
     const [error, setError] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [name, setName] = useState("")
     const [photo, setPhoto] = useState("")
     const [isLoading, setIsLoading] = useState(true)

    //  google sign in
     const signInWithGoogle = () => {
         setIsLoading(true)
        return  signInWithPopup(auth, googleProvider)
         
     }

    //  github Sign in
     const signInWithGithub = () => {
        setIsLoading(true)

        return signInWithPopup(auth, githubProvider)
         
     }
    
    //  get email input value
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    //  get password input value
    const getPassWord = (e) => {
        setPassword(e.target.value)
    }
    //  get name input value
    const getName = (e) => {
        setName(e.target.value)
    }
    //  get photo input value
    const getPhoto = (e) => {
        setPhoto(e.target.value)
    }

    // send email verification func
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert(`An Verification mail has been set to ${email}`)
        });
    }
    
    // sign in with email and password
    const SignInWithEmail = (e) => {
        
        return signInWithEmailAndPassword(auth, email, password)
                

    }
    
    // set name and Photo 
    const setNameAndPhoto = () => {
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          }).then(() => {}).catch((err) => {
            setError(err.message)
          });
    }
   
    // sign up with email password name photo
    const signUp = (e) => {
      e.preventDefault()
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setNameAndPhoto()
            verifyEmail()
            setUser(userCredential.user)
            alert("user has been created")
        })
        .catch((err) => {
            setError(err.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    // cler error
    useEffect(()=>{
        setTimeout(()=>{
            setError("")
        },5000)
    }, [error])

    // password reset
    const passwordReset = (e) =>{
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("password reset email has been sent");
        })
        .catch((err) => {
            setError(err.message);
        });
    }




    //  logout
     const Logout = () => {
         setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((err) => {
            setError(error.message)
          })
          .finally(() => {
            setIsLoading(false)
        })
     }
    //  tracker for crurent user
     useEffect(()=>{
        onAuthStateChanged(auth, (Signeduser) => {
            if (Signeduser) {
               setUser(Signeduser)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
          });
     }, [])


     return{
         signInWithGoogle,
         signInWithGithub,
         user,
         Logout,
         error,
         getPassWord,
         getEmail,
         SignInWithEmail,
         getName,
         getPhoto,
         signUp,
         passwordReset,
         isLoading,
         setIsLoading,
         setError,
         setUser
     }
}

export default useFirebase;