import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import styled from 'styled-components';

import DeleteTask from './DeleteTask';

const StyledTask = styled.article`
    max-width: 800px;
    margin: 0 auto;
    color: #000000;

`;
const MetaData = styled.div`
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
`;
const MetaInfo = styled.div`
    padding-right: 1em;
    padding-left: 0em
`;


const Task = ({ task }) => {
    return (
        <StyledTask>
            <MetaData>
                <MetaInfo>
                <em>by</em> {task.author.username} <br />
                <em>created at</em> {format(new Date(task.createdAt), 'MM dd yyyy')} <br />
                <em>updated at</em> {format(new Date(task.updatedAt), 'MM dd yyyy')} <br />
                <em>completed</em> {String(task.completed)} <br />
                <Link to={`/edit/${task.id}`}>Edit</Link> <br />
                <DeleteTask taskId={task.id} />
                
                </MetaInfo>
            </MetaData>
            <ReactMarkdown source={task.content} />
            
        </StyledTask>
    )
}

export default Task;