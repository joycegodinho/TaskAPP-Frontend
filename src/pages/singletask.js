import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Task from '../components/Task';

const GET_TASK = gql`
    query task($id:ID!) {
        task(id: $id) {
            id
            createdAt
            updatedAt
            content
            completed
            author {
                username
                id
            }
        }
    }
`

const SingleTask = props => {
    const id = props.match.params.id;
    console.log(id)
    const { loading, error, data } =useQuery(GET_TASK, { variables: { id } });
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Task not found</p>;
    return <Task task={data.task} />
};

export default SingleTask;