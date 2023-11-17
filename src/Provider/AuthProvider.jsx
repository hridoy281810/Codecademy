import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import axios from 'axios';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [favorites, setFavorites] = useState([]);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const addToFavorites = (courseId) => {
      // Check if the course is not already in favorites
      if (!favorites.includes(courseId)) {
        setFavorites((prevFavorites) => [...prevFavorites, courseId]);
        // Save favorites to local storage
        localStorage.setItem('favorites', JSON.stringify([...favorites, courseId]));
      }
    };
  
    const removeFromFavorites = (courseId) => {
      const updatedFavorites = favorites.filter((id) => id !== courseId);
      setFavorites(updatedFavorites);
      // Save updated favorites to local storage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser);
        setLoading(false);
        if (loggedUser) {
          const user = { email: loggedUser.email, name: loggedUser.displayName };
          axios.post(`http://localhost:5000/jwt`, user).then((res) => {
            localStorage.setItem('electra-poll-access-token', res.data.token);
          });
        } else {
          setUser(null);
          localStorage.removeItem('electra-poll-access-token');
        }
      });
  
      // Load favorites from local storage on initial render
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
  
      return () => {
        return unsubscribe();
      };
    }, []);
  
    const authInfo = {
      user,
      loading,
      createUser,
      login,
      loginWithGoogle,
      logOut,
      updateUserProfile,
      favorites,
      addToFavorites,
      removeFromFavorites,
    };
  
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
  };
  
  export default AuthProvider;