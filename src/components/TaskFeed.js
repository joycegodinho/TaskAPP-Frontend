import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiBookmark } from "react-icons/bi";

//background-image: linear-gradient(to bottom right, #F8F8FC ,#FFFFFF);



const TaskWrapper = styled.div`
    width: 930px;
    margin: 0px;
    padding: 0px;
    margin-left: 170px;
`

const TasksWrapper = styled.div`
    padding-bottom: 5em;
    padding-top: 2em;
    margin-left: 40px;
    justify-content: space-between;
    width: 100%;
    display: flex;
    flex-direction: row;

 
  
`

const StyledNote = styled.article`
    width: 180px;

    margin: 0px;
    margin-left: 0px;
    margin-bottom: auto;
    padding-top: 0em;
    padding-bottom: 0em;
    padding-left: 0.8em;
    padding-right: 0em;


    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);

    border-radius: 10px;

    position: fixed;


    background-color: #bfebda;
`;
const StyledNumber = styled.a`
    text-decoration: underline;
    font-weight: bold;
    margin-left: 3px;
    color: #FFFFFF;
`
const StyledNoteContent = styled.p`
    font-weight: bold;
    color: #FFFFFF;
`
import Task from './Task';


const TaskFeed = ({ tasks }) => {
    return (
        <TasksWrapper>
            
            <StyledNote>
                <StyledNoteContent>
                    Number of tasks: <StyledNumber>{tasks.length}</StyledNumber> 
                </StyledNoteContent>
            </StyledNote>
          

            <div>
                {tasks.map((task, index) => (


                <TaskWrapper key={task.id}>
                    <Task task={task} index={index + 1} />             
                </TaskWrapper>
                ))}
            </div>

        </TasksWrapper>
    )
}

export default TaskFeed;