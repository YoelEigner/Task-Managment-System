import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { filterItems } from "../Utils/Utils";
import { TaskItem } from "./TaskItem";
import { useNavigate } from 'react-router-dom';

export const Tasks = () => {
    const { tasks } = useSelector((state) => state);
    const navigate = useNavigate();
    
    return (
        <>
            {tasks.map((task, idx) => {
                return (
                    <div key={idx} onClick={() => navigate(`/item/${task?.id}`)} >
                        <TaskItem task={task} />
                    </div>
                )
            })}
        </>
    )
}