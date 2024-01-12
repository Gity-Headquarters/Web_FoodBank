import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const decoded: any = jwtDecode(token || '');
    const role = decoded.role;
    useEffect(() => {
        if (role !== 'admin') {
            navigate('/');
        } else {
            navigate('/dashboard')
        }
    }, []);

};
