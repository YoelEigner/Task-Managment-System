import axios from "axios"

export const InsertTask = async (data) => {
    return (await axios.post('http://localhost:3001/api/tasks/', data)).data
}