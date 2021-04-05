import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
    height: 100%
`;

const Form = styled.form`
    height: 100%
`;

const TextArea = styled.textarea`
    width: 60%;
    height: 60%;
    margin-bottom: 15px;
`;

const Status = styled.div`
    margin-bottom: 15px;
`

const Select = styled.select`
    border-radius: 0.3em;
`

const TaskForm = props => {

    const [value, setValue] = useState([{ content: props.content || '' },{ completed: props.completed  }]);
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
                    <label>Completed </label>
                    <Select name="completed" value={value.completed} placeholder="select" id="completed" onChange={onChange}>   
                        <option value="null">None</option>
                        <option value="True">True</option>
                        <option value="False">False</option>

                    </Select>
                </Status>

                <Button type="submit">Save</Button>
            </Form>
        </Wrapper>
    );
};

export default TaskForm;