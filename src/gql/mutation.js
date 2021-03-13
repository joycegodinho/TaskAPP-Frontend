import { gql } from '@apollo/client';

const EDIT_TASK = gql`
  mutation updatetask ($id: ID!, $content: String!, $completed: Boolean) {
    updateTask(id: $id, content: $content, completed: $completed){
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

const DELETE_TASK = gql`
  mutation deleteTask ($id: ID!) {
    deleteTask(id: $id)
  }
`;

export { EDIT_TASK, DELETE_TASK }