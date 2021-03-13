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

export { EDIT_TASK }