import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { UsernameQuery } from './queries/__generated__/UsernameQuery';
import USERNAME_QUERY from './queries/username';

export default () => {
    return (
        <Query query={USERNAME_QUERY}>
            {({ loading, error, data }: QueryResult<UsernameQuery>) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return <div>Hello {data!.user!.name}</div>
            }}
        </Query>
    );
}