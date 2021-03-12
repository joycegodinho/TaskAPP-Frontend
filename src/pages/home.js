import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed'
import Button from '../components/Button';

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
    return (
        <React.Fragment>
            <TaskFeed tasks={data.tasks.tasks} />
            {data.tasks.hasNextPage && (
                <Button onClick={() => 
                    fetchMore({ variables: { cursor: data.tasks.cursor },
                        updateQuery: (previusResult, { fetchMoreResult }) => {
                            return {
                                tasks: {
                                    cursor: fetchMoreResult.tasks.cursor,
                                    hasNextPage: fetchMoreResult.tasks.hasNextPage,
                                    tasks: [
                                        ...previusResult.tasks.tasks,
                                        ...fetchMoreResult.tasks.tasks
                                    ],
                                    __typename: 'tasks'
                                }
                            };
                        }
                    })
                }>Load more</Button>
            )}
        </React.Fragment>
    ) 
    
};

export default Home;