import * as React from 'react';
import {Component} from 'react';
import {RepoDetailsViewArea} from './RepoDetailsView.style';
import {IRepoDetailsViewData} from './interfaces/IRepoDetailsViewData';
import {IRepoDetailsViewActions} from './interfaces/IRepoDetailsViewActions';

export interface IRepoDetailsViewProps {
    data: IRepoDetailsViewData;
    actions: IRepoDetailsViewActions;
}

export class RepoDetailsView extends Component<IRepoDetailsViewProps> {
    public readonly props: IRepoDetailsViewProps;

    public render () {

        return (
            <RepoDetailsViewArea>
                Repo details
                {
                    /*
                                        this.props.isLoading
                                            ?
                                            <div>spinner</div>
                                            :
                                            <>
                                                <h1>Project Details</h1>
                                            </>
                    */
                }


            </RepoDetailsViewArea>
        );
    }
}
