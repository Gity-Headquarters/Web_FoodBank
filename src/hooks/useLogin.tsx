import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }
        const decoded: any = jwtDecode(token || '');
        const role = decoded.role;
        if (role !== 'admin') {
            navigate('/');
        }
    }, []);
};
