import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";


function Header(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)

    function handleSignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.=> navigate to home page / sign up page
            navigate("/")
            dispatch(removeUser());
            
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"> 
           <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-logo"></img>

           {/* only load this portion when the user is sign in or sign up => when we have the user */}
           {user && (<div className="flex p-3 gap-2">
            <img  className="w-12 h-12 cursor-pointer" alt="usericon" src={user?.photoURL}>
            </img>
            <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
           </div>)}
        </div>
    )
}

export default Header;