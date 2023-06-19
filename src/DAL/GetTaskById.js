import axios from "axios"

export const GetTaskById = async (id) => {
    return (await axios.get(`http://localhost:3001/api/tasks/${id}`)).data
}