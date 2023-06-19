import axios from "axios"

export const UpdateTaskItem = async (tempToUpdate) => {
    return (await axios.put(`http://localhost:3001/api/tasks/${tempToUpdate.id}`, tempToUpdate)).data
}