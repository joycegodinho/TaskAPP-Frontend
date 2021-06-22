import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
    height: 100%
  
`;

const Form = styled.form`
    width: 60%;
    height: 60%;
    margin-top: 25px;
    margin-left: 60px;

`;

const TextArea = styled.textarea`
    width: 80%;
    height: 80%;
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-image: #FFFFFF;
    color: #000000;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 0.7em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1.5em;
`;

const Status = styled.div`
    margin-bottom: 35px;
`

const Select = styled.select`
    border-radius: 0.3em;
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`

const StyledMarkCompleted = styled.mark`
    background-color: #cfdcf0; 
    border-radius: 0.4em 0.2em; 
`;

const StyledButtom = styled.div`
    margin-left:230px;

`


const TaskForm = props => {

    const [value, setValue] = useState({ content: props.content || '' });
    const onChange = event => {
        
        setValue({...value, [event.target.name]: event.target.value});
        
    };

    return(
        <Wrapper>
            <Form onSubmit={e => {
                e.preventDefault();
                props.action({ variables: {...value}})
            }}>
                <TextArea required type="text" name="content" placeholder="Task content" value={value.content} onChange={onChange} />
                <Status>
                    <label><StyledMarkCompleted> Completed</StyledMarkCompleted> </label>
                    <Select name="completed" value={value.completed} placeholder="select" id="completed" onChange={onChange}>   
                        <option value="null">None</option>
                        <option value="True">True</option>
                        <option value="False">False</option>

                    </Select>
                </Status>
                <StyledButtom>
                    <Button type="submit">Save</Button>
                </StyledButtom>
              
                
            </Form>
        </Wrapper>
    );
};

export default TaskForm;