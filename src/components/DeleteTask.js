import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';
import { DELETE_TASK } from '../gql/mutation';
import { GET_TASKS } from '../gql/query';

const DeleteTask = props => {
    const [deleteTask] = useMutation(DELETE_TASK, {
      variables: {
        id: props.taskId
      },
      // refetch the note list queries to update the cache
      refetchQueries: [{ query: GET_TASKS }],
      onCompleted: data => {
        // redirect the user to the "my notes" page
        props.history.push('/');
      }
    });
  
 
  
    return <ButtonAsLink onClick={deleteTask}>Delete</ButtonAsLink>;
  };
  
  export default withRouter(DeleteTask);