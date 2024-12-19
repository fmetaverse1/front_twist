import axios from "axios"

function SendData(params) {
    axios.post(`https://back-updated-o8j0.onrender.com/create/user`, params)

}

export default SendData
