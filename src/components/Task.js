import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import styled from 'styled-components';
import { BiPencil, BiChevronDownSquare } from "react-icons/bi";

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

const MetaInfoTime = styled.div`
    padding-right: 1em;
    padding-left: 0em
`;

const LinkOptions = styled.div`
    margin-top: 2px;
    margin-left: 450px
`


const Task = ({ task }) => {
    return (
        <StyledTask>
            <MetaData>
                <MetaInfo>

                    <em>by</em> {task.author.username} <br />
                    <React.Fragment> 
                        {task.completed && 
                            <p>
                                <em>completed</em> {task.completed}
                            </p>
                            
                        }
                    </React.Fragment>
                </MetaInfo>
                <MetaInfoTime>
                    <em>created at</em> {format(new Date(task.createdAt), 'MM dd yyyy')} <br />
                    <em>updated at</em> {format(new Date(task.updatedAt), 'MM dd yyyy')}  
                </MetaInfoTime>
                <LinkOptions>
                    <DeleteTask taskId={task.id} /> <br />
                    <Link to={`/edit/${task.id}`}><BiPencil size="1.5em"/></Link> <br />
                    <Link to={`task/${task.id}`}><BiChevronDownSquare size="1.5em" /></Link>
                </LinkOptions>
            </MetaData>
            <ReactMarkdown source={task.content} />
            
        </StyledTask>
    )
}

export default Task;