import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//background-image: linear-gradient(to bottom right, #F8F8FC ,#FFFFFF);

const getBackgroundColor = () => {
    var colors = ["#FFE1B0","#FDE8C6","#FFF3DF","#FEF898","#FEFABD","#FDFBD3","#CBFEFA","#DEFEFB","#EEFFFE", "#FEC7E4", "#FEDEEF", "#FFEAF5"];
    var len = colors.length;
    var randomNum = Math.floor(Math.random()*len);
    var color = colors[randomNum];
    colors.splice(randomNum, 1);
    return color;

}

const TaskWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;

    border-radius: 10px;
    background-color: ${getBackgroundColor};
    
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