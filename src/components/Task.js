import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import styled from 'styled-components';
import { BiPencil, BiChevronDownSquare, BiBookmark } from "react-icons/bi";


import DeleteTask from './DeleteTask';



const getBackgroundColor = () => {
    var colors = ["#eff3fa", "#f7f9fc"];
    var len = colors.length;
    var randomNum = Math.floor(Math.random()*len);
    var color = colors[randomNum];
    colors.splice(randomNum, 1);
    return color;

}

const StyledTask = styled.article`
    max-width: 700px;
    margin-left: 90px;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;

    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);

    border-radius: 10px;
    background-color: ${getBackgroundColor};
`;

const TaskLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
const ImageLayout = styled.div`
    height: auto; 
    width: 80px;
`
const StyledMarkDown = styled.div`
    margin-left: 9.8%
`
const MetaData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;  
`;
const MetaInfo = styled.div`
    width: auto;
    height: auto;
    margin-top: 0px;
`;
const StyledTitle =styled.h2`
    color: #8c9db8
`
const MetaInfoTime = styled.div`
    width: auto; 
    height: auto;   
    margin-top: 10px;
    text-align: center; 
`;
const StyledMark = styled.mark`
    background-color: #a8d9d5; 
    border-radius: 0.4em 0.2em;  
`;
const StyledTime = styled.a`
    margin-left: 5px;
    color: #7cc7c0;
`
const StyledMarkUpdated = styled.mark`
    background-color: #FCC370; 
    border-radius: 0.8em 0.3em;
`;
const StyledMarkCompleted = styled.mark`
    background-color: #a8d9d5; 
    border-radius: 0.4em 0.2em; 
`;
const StyledCompleted = styled.a`
    text-decoration: underline;
    color: #7cc7c0;
    font-weight: bold;
    margin-left: 5px;
    font-size: 18px;
`
const LinkOptions = styled.div`
    width: auto; 
    height: auto;  
    justify-content: space-between;
    margin-top: 5px; 
    padding-right: 10px; 
    text-align: right;   
`

const Task = ({ task, index }) => {
    return (
        <StyledTask>
            <TaskLayout>

                <ImageLayout>
                    <BiBookmark size="3em" color="#a8d9d5" />
                </ImageLayout>

                <MetaData>
                    <MetaInfo>
                        {index? (
                            <StyledTitle>Task {index}</StyledTitle>
                        ): (
                            <StyledTitle>Task</StyledTitle>
                        )}
                        

                        <React.Fragment> 
                            {task.completed && 
                                <p>
                                    <StyledMarkCompleted>
                                        <em>Completed: </em>
                                    </StyledMarkCompleted>
                                    <StyledCompleted>
                                        {task.completed}
                                    </StyledCompleted>
                                        
                                </p>
                                
                            }
                        </React.Fragment>
                    </MetaInfo>

                    <MetaInfoTime>
                        <p>
                        <StyledMark>
                            <em>created at </em>                                   
                        </StyledMark>
                        <StyledTime>
                            {format(new Date(task.createdAt), 'H:mm MM/dd/yyyy')} <br />
                        </StyledTime>
                            
                                
                        </p>
                            

                        <StyledMark>
                            <em>updated at </em>
                        </StyledMark>
                            <StyledTime>
                                {format(new Date(task.updatedAt), 'H:mm MM/dd/yyyy')}
                            </StyledTime>
                            

                    </MetaInfoTime>

                    <LinkOptions>
                        <DeleteTask taskId={task.id}/> <br />
                        <Link to={`/edit/${task.id}`}><BiPencil size="1.5em"/></Link> <br />
                        <Link to={`task/${task.id}`}><BiChevronDownSquare size="1.5em" /></Link>
                    </LinkOptions>

                </MetaData>

            </TaskLayout>

            <StyledMarkDown>
                <ReactMarkdown source={task.content} />
            </StyledMarkDown>

            
        </StyledTask>
    )
}

export default Task;