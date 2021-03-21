import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TaskWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;
    border-bottom: 1px groove #B8B8B9;
    border-top: 1px groove #B8B8B9;
    border-left: 1px groove #B8B8B9;
    border-right: 1px groove #B8B8B9;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #F8F8FC ,#FFFFFF);
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
                </TaskWrapper>
            ))}
        </TasksWrapper>
    )
}

export default TaskFeed;