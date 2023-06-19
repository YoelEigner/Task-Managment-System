import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NewTask } from './NewTask';
import { Container } from 'react-bootstrap';
import { Tasks } from './Tasks';


export const Main = () => {
    const [showNewTask, setShowNewTask] = useState(false)
    const handleClick = () => {
        setShowNewTask(!showNewTask)
    }

    return (
        <div>
            <Container className='add-new-btn-container'>
                <Container >
                    <div  >
                        <Button variant="dark" className='add-btn' onClick={handleClick}>Add New Task</Button>
                    </div>
                    {showNewTask && <NewTask setShowNewTask={(data) => { setShowNewTask(data) }} />}

                    <div >
                        <Tasks />
                    </div>
                </Container>
            </Container>

        </div>
    )
}