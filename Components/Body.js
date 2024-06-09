import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


function Body(){
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])

            useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                    //user sign in or sign up
                    if (user) {
                      const {uid , email , password, displayName , photoURL} = user;
                      //we need to dispatch an action => update the store
                      dispatch(addUser({uid: uid, email: email, password: password, displayName: displayName, photoURL: photoURL}))
                      // we need to navigate when the user sign in it re-direct to browse page
                      
                    } else {
                      dispatch(removeUser())
                    }
                  });
            }, [])
    return (
        <div>
           <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}

export default Body;