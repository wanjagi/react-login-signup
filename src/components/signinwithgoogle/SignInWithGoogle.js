import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInWithGoogle(){

    function googleLogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async(result) => {
            console.log(result);
            const user = result.user;
            if (result.user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: user.displayName,
                    photo: user.photoURL,
                });
                toast.success("User logged in successfully", {position:"top-center",})
                window.location.href = "/dashboard";
            }
            
        })
    }

    return(
        <div>
            <p className="continue-p">--Or continue with --</p>
            <div style={{display:"flex", justifyContent:"center", cursor:"pointer"}}
            onClick={googleLogin}
            >
                <img src={require("./google.png")} width={"60%"}/>
            </div>
        </div>
    )
}
export default SignInWithGoogle;