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

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    



`;
const MetaInfo = styled.div`

    width: 500px;
    height: 50px;
  
`;

const MetaInfoTime = styled.div`
    width: 500px;
    height: 50px;  
    
`;
const StyledMark = styled.mark`
    background-color: #8585F3; 
    
`;
const LinkOptions = styled.div`
    width: 500px;
    height: 50px; 
    text-align: right;   
    
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
                    <StyledMark>
                        <em>created at</em> {format(new Date(task.createdAt), 'MM dd yyyy H:mm')} <br />
                        <em>updated at</em> {format(new Date(task.updatedAt), 'MM dd yyyy H:mm')}                         
                    </StyledMark>

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