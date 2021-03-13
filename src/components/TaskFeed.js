import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TaskWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-bottom: 2em;
    border-bottom: 1px solid #000000;
`

const TasksWrapper = styled.div`
    padding-bottom: 5em;
`

import Task from './Task';


const TaskFeed = ({ tasks }) => {
    return (
        <TasksWrapper>
            {tasks.map(task => (
                <TaskWrapper key={task.id}>
                    <Task task={task} />
                    <Link to={`task/${task.id}`}>Link to Task</Link>
                </TaskWrapper>
            ))}
        </TasksWrapper>
    )
}

export default TaskFeed;