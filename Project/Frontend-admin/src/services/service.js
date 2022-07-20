import axios from "axios";
import Login from "../views/Login/Login";
import tonken from "./token";
const LoginAdmin = (data) => {
    return axios.post('http://localhost:8000/admins/sign_in', data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const createNewUserService = (data) => {
    return axios.post('http://localhost:8000/users', data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const deleteUserService = (userID) => {
    axios.delete(`http://localhost:8000/users/${userID}`, {
        headers: {
            'Authorization': tonken
        }
    });
}
const editUserService = (data, id) => {
    return axios.put(`http://localhost:8000/users/${id}`, data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const createNewAdminService = (data) => {
    return axios.post('http://localhost:8000/admins', data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const deleteAdminService = (id) => {
    return axios.delete(`http://localhost:8000/admins/${id}`, {
        headers: {
            'Authorization': tonken
        }
    });
}
const editAdminService = (data, id) => {
    return axios.put(`http://localhost:8000/admins/${id}`, data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const createNewCarService = (data) => {
    return axios.post('http://localhost:8000/products', data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const createNewOrderService = (data, id) => {
    return axios.post(`http://localhost:8000/bills/${id}`, data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const editCarService = (data, id) => {
    return axios.put(`http://localhost:8000/products/${id}`, data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const editBillService = (data, id) => {
    return axios.put(`http://localhost:8000/bills/${id}`, data, {
        headers: {
            'Authorization': tonken
        }
    });
}
const deleteBillService = (user_id, bill_id) => {
    return axios.delete(`http://localhost:8000/bills/${user_id}/${bill_id}`, {
        headers: {
            'Authorization': tonken
        }
    });
}
const deleteCarService = (id) => {
    return axios.delete(`http://localhost:8000/products/${id}`, {
        headers: {
            'Authorization': tonken
        }
    });
}
export {
    createNewUserService, deleteUserService, editUserService, createNewAdminService, deleteAdminService,
    editAdminService, createNewCarService, createNewOrderService, editCarService
    , editBillService, deleteBillService, deleteCarService, LoginAdmin
}