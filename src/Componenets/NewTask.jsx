import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { InsertNewTask } from '../Utils/Utils';

export const NewTask = ({ setShowNewTask }) => {
    const dispatch = useDispatch()
    const [task, setTask] = useState(() => {
        return {
            title: '',
            description: '',
            priority: 0
        }
    })
    const handleEdit = (e) => {
        let name = e.currentTarget.title
        setTask((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(InsertNewTask(task))
        setShowNewTask(false)
    }


    return (
        <>
            <Container>
                <Card className='mx-auto newTaskCard tasks-container'>
                    <Card.Header as="h5" className='nonStrikethrough'>Add new task</Card.Header>
                    <Card.Body>
                        <Form >
                            <Container style={{ textAlign: "left" }}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        className='new-text-input'
                                        placeholder="My task"
                                        aria-label="Title"
                                        title={'title'}
                                        aria-describedby="basic-addon1"
                                        value={task.title}
                                        onChange={(e) => { handleEdit(e) }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        className='new-text-input'
                                        title={'description'}
                                        placeholder="iPhone"
                                        value={task.description}
                                        onChange={(e) => { handleEdit(e) }}
                                    />
                                </InputGroup>
                            </Container>
                            <Button onClick={onSubmit} className='add-btn' variant="dark">Save</Button>
                            <Button onClick={() => { setShowNewTask(false) }} className='add-btn' variant="dark">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}