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



export const DeleteTask = (tasks, updated) => {
    return async (dispatch) => {
        let tempToDelete = [...tasks]
        let index = tempToDelete.findIndex(item => item.id === updated.id);
        tempToDelete.splice(index, 1)
        try {
            dispatch({ type: 'DELETE_TASK', tempToDelete })
        } catch (err) {
            console.log('Delete Task: err in Delete task', err)
        }
    }
}

export const DeleteAllTasks = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'DELETE_ALL' })
        } catch (err) {
            console.log('Deleting Tasks: err in deleting tasks', err)
        }
    }
}
export const DeleteCompletedTasks = (tasks) => {
    return async (dispatch) => {
        let items = tasks.filter((item) => item.status !== true)
        try {
            dispatch({ type: 'DELETE_COMPLETED', items })
        } catch (err) {
            console.log('Deleting completed Tasks: err in deleting completed tasks', err)
        }
    }
}

export const updateTaskStatus = async (state, setTaskItems) => {
    setTaskItems(prevState => {
        return prevState.map((task) => {
            if (state.id === task.id) {
                return { ...task, status: !state.status };
            }
            return task;
        });
    });
};

export const onSerachStatus = (search_status) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_SEARCH_STATUS', search_status })
        } catch (err) {
            console.log('Search: err in searching', err)
        }
    }
}
export const onSerachQuery = (search_query) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_SEARCH_QUERY', search_query })
        } catch (err) {
            console.log('Search: err in searching', err)
        }
    }
}

export const filterItems = (tasks, search_query) => {
    return tasks.filter((items) => {
        if (search_query === 'Completed') {
            return items.status === true;
        } else if (search_query === 'Incomplete') {
            return items.status === false;
        } else {
            return true;
        }
    });
}