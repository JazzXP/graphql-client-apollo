import React from 'react';
import { Mutation } from 'react-apollo';
import LATEST_POST_MUTATION from './mutations/latestPost';
import LATEST_POST_QUERY from './queries/latestPost';
import { LatestPostMutation, LatestPostMutationVariables } from './mutations/__generated__/LatestPostMutation';
import { LatestPostQuery } from './queries/__generated__/LatestPostQuery';

export interface UpdateLatestPostProps {
    latestPost: string;
}

export default (props: UpdateLatestPostProps) => {
    let latestPostData: {
        latestPostField: HTMLInputElement | null;
    } = {
        latestPostField: null
    }
    return (<Mutation<LatestPostMutation, LatestPostMutationVariables>
        mutation={LATEST_POST_MUTATION}
        update={(cache, result) => {
            if ((result.data as LatestPostQuery).latestPost) {
                // Update the Apollo cache
                cache.writeQuery({
                    query: LATEST_POST_QUERY,
                    data: { latestPost: (result.data as LatestPostQuery).latestPost }
                });
            }
        }}>
        {updateItem => <div>
            <input
                type="text"
                defaultValue={
                    latestPostData.latestPostField ?
                        latestPostData.latestPostField.value :
                        props.latestPost || ""
                }
                ref={node => latestPostData.latestPostField = node}
            /><br />
            <input
                type="button"
                value="Update"
                onClick={
                    () => {
                        updateItem({
                            variables: {
                                newPostVal: latestPostData.latestPostField ? latestPostData.latestPostField.value : ""
                            }
                        })
                    }
                }
            />
        </div>
        }
    </Mutation>)
}