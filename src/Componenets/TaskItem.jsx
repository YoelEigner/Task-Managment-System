import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTask, GetTaskItem, UpdateTask } from "../Utils/Utils";
import { useNavigate, useParams } from "react-router-dom";

export const TaskItem = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams()
    const [task, setTask] = useState({})
    const [editable, setEditable] = useState(false)
    const { tasks } = useSelector((state) => state)

    const handleEdit = (event) => {
        let name = event.currentTarget.title
        let value = event.target.value
        setTask((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleClick = async () => {
        if (editable) {
            await dispatch(UpdateTask(tasks, task))
            navigate('/')
        }
        setEditable(!editable)
    }

    useEffect(() => {
        const getItem = async () => {
            const item = props?.task === undefined ? await GetTaskItem(id) : props?.task
            setTask(item)
        }
        getItem()
    }, [])
    return (
        <>
            <Container className="tasks-container">
                <Card className='mx-auto newTaskCard'>
                    <Card.Header as="h5" className={'nonStrikethrough'}>
                        ID: {task?.id}
                    </Card.Header>
                    <Card.Body >
                        <div className="task-body">
                            <Col>
                                <Row>
                                    <Card.Text className={task?.status ? 'strikethrough' : 'nonStrikethrough'}>
                                        Title: {editable ? <InputGroup >
                                            <Form.Control
                                                className="text-input"
                                                placeholder="My task"
                                                aria-label="Title"
                                                title={'title'}
                                                aria-describedby="basic-addon1"
                                                value={task?.title}
                                                onChange={(e) => { handleEdit(e, 'title') }}
                                            />
                                        </InputGroup> : task?.title}
                                    </Card.Text>
                                </Row>
                                <Row>
                                    <Card.Text className={'nonStrikethrough'}>
                                        Description: {editable ? <InputGroup >
                                            <Form.Control
                                                className="text-input"
                                                placeholder="My task"
                                                aria-label="Description"
                                                title={'description'}
                                                aria-describedby="basic-addon1"
                                                value={task?.description}
                                                onChange={(e) => { handleEdit(e, 'description') }}
                                            />
                                        </InputGroup> : task?.description}
                                    </Card.Text>
                                </Row>
                                {<Row>
                                    <Card.Text className={'nonStrikethrough'}>
                                        Priority: {task?.priority}
                                    </Card.Text>
                                </Row>}
                            </Col>

                        </div>
                    </Card.Body>
                    <Container>
                        {!props?.task && <Button onClick={(e) => handleClick(e)} disabled={task?.status} className="tasks-buttons add-btn" variant="dark">{!editable ? 'Edit' : 'Update'}</Button>}
                    </Container>
                </Card>
            </Container>

        </>
    )
}