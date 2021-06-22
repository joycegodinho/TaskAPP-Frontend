import React from 'react';
import { useQuery, gql } from '@apollo/client';

import TaskFeed from '../components/TaskFeed'
import Button from '../components/Button';

const GET_TASKS_TODO = gql`
    query TaskFeedToDo($cursor: String) {
        tasksToDo(cursor: $cursor) {
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

const ToDo = () => {

    const {data, loading, error, fetchMore } = useQuery(GET_TASKS_TODO);
    if(loading) return <p></p>;
    if(error) return <p>Error!</p>;
    return (
        <React.Fragment>
            <TaskFeed tasks={data.tasksToDo.tasks} />
            {data.tasksToDo.hasNextPage && (
                <Button onClick={() => 
                    fetchMore({ variables: { cursor: data.tasksToDo.cursor },
                        updateQuery: (previusResult, { fetchMoreResult }) => {
                            return {
                                tasksToDo: {
                                    cursor: fetchMoreResult.tasksToDo.cursor,
                                    hasNextPage: fetchMoreResult.tasksToDo.hasNextPage,
                                    tasks: [
                                        ...previusResult.tasksToDo.tasks,
                                        ...fetchMoreResult.tasksToDo.tasks
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

export default ToDo;