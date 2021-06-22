import React, {  useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-image: #FFFFFF;
    color: #000000;
    max-width: 500px;
    height: auto;
    max-height: 400px;
    padding: 1em;
    margin: auto;

    
`;

const Form = styled.form`
    
    label,
    input {
        display: block;
        line-height: 2em;
    }
    input {
        width: 100%;
        margin-bottom: 1em;
    }
`;
const Input = styled.input`
    border-radius: 5px;
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
`

const StyledButtom = styled.div`
    margin-left:195px;
    margin-top: 20px;

`

const UserForm = props => {

    const [values, setValues] = useState();
    const onChange = event => {
        setValues({...values, [event.target.name]:event.target.value});
    };

    return (
        <Wrapper>
            {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
            <Form onSubmit={e => {
                e.preventDefault();
                props.action({variables: {...values}})
            }}>
        
                {props.formType === 'signup' && (
                    <React.Fragment>

                        <label htmlFor="username">Username:</label>
                        <Input required type="text" id="username" name="username" placeholder="username" onChange={onChange}/>
                    </React.Fragment>
                )}
                <label htmlFor="email">Email:</label>
                <Input required type="email" id="email" name="email" placeholder="Email" onChange={onChange}/>
                        
                <label htmlFor="password">Password:</label>
                <Input required type="password" id="password" name="password" placeholder="Password" onChange={onChange}/>

                <StyledButtom>
                    <Button type="submit">Submit</Button>
                </StyledButtom>

                

            </Form>
        </Wrapper>
    );
};

export default UserForm;