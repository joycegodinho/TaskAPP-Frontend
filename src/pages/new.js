import React, { useEffect } from 'react'
import { useMutation, gql } from '@apollo/client'

import TaskForm from '../components/TaskForm';
import { GET_TASKS } from '../gql/query'


const NEW_TASK = gql`
  mutation newtask ($content: String!, $completed: String) {
    newTask(content: $content, completed: $completed){
      id
      content
      completed
      author{
        id
        username
      }
    }
  }
`;

const NewTask = props => {
    useEffect(() => { document.title = 'New Task - Task APP'})
    const [data, { loading, error }] = useMutation(NEW_TASK, {
      refetchQueries: [{ query: GET_TASKS}],
      onCompleted: data => {props.history.push(`task/${data.newTask.id}`)}
    });
    return (
    <React.Fragment>
        {loading && <p>Loading...</p>}
        {error && <p>Error saving the note</p>}
        <TaskForm action={data} />

    </React.Fragment>
    )
};

export default NewTask;