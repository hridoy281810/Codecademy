import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const UseAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    const axiosSecure = axios.create({ baseURL: ' https://electra-poll-server-2pqs2aw2n-hridoy281810.vercel.app' })


    const token = localStorage.getItem('electra-poll-access-token')
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })

        axiosSecure.interceptors.response.use(
            (res) => {
                return res
            },
            (error) => {
                if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                    navigate('/login');
                    // signOut(auth)
                }
                return Promise.reject(error);
            }
        )
    }, [logOut, navigate, axiosSecure])

    return [axiosSecure]
};

export default UseAxiosSecure;