import React from 'react';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed'
import Button from '../components/Button';

const GET_TASKS_DONE = gql`
    query TaskFeedDone($cursor: String) {
        tasksDone(cursor: $cursor) {
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

const Done = () => {

    const {data, loading, error, fetchMore } = useQuery(GET_TASKS_DONE);
    if(loading) return <p></p>;
    if(error) return <p>Error!</p>;
    return (
        <React.Fragment>
            <TaskFeed tasks={data.tasksDone.tasks} />
            {data.tasksDone.hasNextPage && (
                <Button onClick={() => 
                    fetchMore({ variables: { cursor: data.tasksDone.cursor },
                        updateQuery: (previusResult, { fetchMoreResult }) => {
                            return {
                                tasksDone: {
                                    cursor: fetchMoreResult.tasksDone.cursor,
                                    hasNextPage: fetchMoreResult.tasksDone.hasNextPage,
                                    tasks: [
                                        ...previusResult.tasksDone.tasks,
                                        ...fetchMoreResult.tasksDone.tasks
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

export default Done;