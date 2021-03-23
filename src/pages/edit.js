import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import TaskForm from '../components/TaskForm';
import { GET_TASK, GET_ME } from '../gql/query';
import { EDIT_TASK } from '../gql/mutation';

const EditTask = props => {

    const id = props.match.params.id;
    console.log (id)
    const { loading, error, data } = useQuery(GET_TASK, { variables: { id }});
    console.log(data)
    

    const { data: userdata } = useQuery(GET_ME);
    console.log(userdata)
    const [editTask] = useMutation(EDIT_TASK, { variables: { id },
        onCompleted: () => {
            props.history.push(`/task/${id}`)
        }
    });

    if (loading) return 'Loading...';
    if (error) return <p>Error! Task not found</p>;
    if (userdata.me.id !== data.task.author.id) {

        return <p>You do not have access to edit this task</p>
    }


    return <TaskForm content={data.task.content} completed={data.task.completed} action={editTask} />
}

export default EditTask;