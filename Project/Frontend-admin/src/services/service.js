import axios from "axios";
import Login from "../views/Login/Login";
const LoginAdmin = (data) => {
    return axios.post('http://localhost:8000/admins/sign_in', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const createNewUserService = (data) => {
    return axios.post('http://localhost:8000/users', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const deleteUserService = (userID) => {
    axios.delete(`http://localhost:8000/users/${userID}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const editUserService = (data, id) => {
    return axios.put(`http://localhost:8000/users/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const createNewAdminService = (data) => {
    return axios.post('http://localhost:8000/admins', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const deleteAdminService = (id) => {
    return axios.delete(`http://localhost:8000/admins/${id}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const editAdminService = (data, id) => {
    return axios.put(`http://localhost:8000/admins/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const createNewCarService = (data) => {
    return axios.post('http://localhost:8000/products', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const createNewOrderService = (data, id) => {
    return axios.post(`http://localhost:8000/bills/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const editCarService = (data, id) => {
    return axios.put(`http://localhost:8000/products/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const editBillService = (data, id) => {
    return axios.put(`http://localhost:8000/bills/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const deleteBillService = (user_id, bill_id) => {
    return axios.delete(`http://localhost:8000/bills/${user_id}/${bill_id}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
const deleteCarService = (id) => {
    return axios.delete(`http://localhost:8000/products/${id}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
        }
    });
}
export {
    createNewUserService, deleteUserService, editUserService, createNewAdminService, deleteAdminService,
    editAdminService, createNewCarService, createNewOrderService, editCarService
    , editBillService, deleteBillService, deleteCarService, LoginAdmin
}