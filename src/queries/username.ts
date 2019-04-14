import gql from "graphql-tag";

export default gql`
query UsernameQuery {
    user {
        name
    }
}
`;