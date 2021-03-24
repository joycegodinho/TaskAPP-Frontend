import { gql } from '@apollo/client'

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

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;

const GET_ME = gql`
  query me {
    me {
      id
    }
  }
`;

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

export { GET_TASKS, IS_LOGGED_IN, GET_ME, GET_TASK, GET_TASKS_TODO }