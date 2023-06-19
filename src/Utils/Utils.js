import { GetTaskById } from "../DAL/GetTaskById"
import { InsertTask } from "../DAL/InsertTask"
import { UpdateTaskItem } from "../DAL/UpdateTask"


export const InsertNewTask = (data) => {
    return async (dispatch) => {
        try {
            const tasks = {
                title: data.title, description: data.description
            }
            const newItem = await InsertTask(tasks)
            tasks.id = newItem.id
            tasks.priority = newItem.priority
            dispatch({ type: 'SET_TASK', tasks })
        } catch (err) {
            console.log('New Task: err in Save new task', err)
        }
    }
}
export const UpdateTask = (tasks, updated) => {
    return async (dispatch) => {
        let tempToUpdate = [...tasks]
        let index = tempToUpdate.findIndex(item => item.id === updated.id);
        tempToUpdate[index] = updated
        const updateDB = await UpdateTaskItem(tempToUpdate[index])
        tempToUpdate[index] = updateDB
        try {
            dispatch({ type: 'UPDATE_TASK', tempToUpdate })
        } catch (err) {
            console.log('Update Task: err in update task', err)
        }
    }
}
export const GetTaskItem = async (id) => {
    return await GetTaskById(id)
}

