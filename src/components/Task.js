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
    background-color: #FDFF70; 
    border-radius: 0.8em 0.3em;
    
`;

const StyledMarkUpdated = styled.mark`
    background-color: #FCC370; 
    border-radius: 0.8em 0.3em;
    
    
`;
const StyledMarkCompleted = styled.mark`
    background-color: #FD8FCB; 
    border-radius: 0.4em 0.2em;
    
    
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
                                <em>completed </em>
                                <StyledMarkCompleted>
                                    {task.completed}
                                </StyledMarkCompleted>
                            </p>
                            
                        }
                    </React.Fragment>
                </MetaInfo>
                <MetaInfoTime>
                    <em>created at </em> 
                    <StyledMark>
                        {format(new Date(task.createdAt), 'MM dd yyyy H:mm')} <br />                                  
                    </StyledMark>
                    <em>updated at </em> 
                    <StyledMarkUpdated>
                        {format(new Date(task.updatedAt), 'MM dd yyyy H:mm')}
                    </StyledMarkUpdated>

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