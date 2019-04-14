import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { LatestPostQuery } from './queries/__generated__/LatestPostQuery';
import LATEST_POST_QUERY from './queries/latestPost';
import UpdateLatestPost from './UpdateLatestPost';

export default () => {
    return (
        <Query query={LATEST_POST_QUERY}>
            {({ loading, error, data }: QueryResult<LatestPostQuery>) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                // Show latest post in an update field
                return <span><UpdateLatestPost latestPost={data!.latestPost} /></span>
            }}
        </Query>
    );
}