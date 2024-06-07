import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.Config";
import useAxiosPublic from "../Components/Hook/useAxiosPublic";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  //! Google Provider
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //! Create User - Email/Gmail
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //!login User - Email/Gmail
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! Log Out
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //! AuthStateChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Current user -->", currentUser);
      if (currentUser) {
        //get token & store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        //remove token
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    googleLogin,
    logoutUser,
    createUser,
    login,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
