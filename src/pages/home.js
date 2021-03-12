import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed'

const GET_TASKS = gql`
    query TaskFeed($cursor: String) {
        tasks(cursor: $cursor) {
            cursor
            hasNextPage
            tasks {
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
    }
`;

const Home = () => {

    const {data, loading, error, fetchMore } = useQuery(GET_TASKS);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    return <TaskFeed tasks={data.tasks.tasks} />
};

export default Home;