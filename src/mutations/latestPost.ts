import gql from 'graphql-tag';

export default gql`
    mutation LatestPostMutation($newPostVal: String!) {
        latestPost(newPost: $newPostVal)
    }
`;