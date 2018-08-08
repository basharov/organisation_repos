import {ICommonState} from '../interfaces/ICommonState';

export const initialCommonState: ICommonState = {
    organisationInfo: {
        name: '!!!',
        avatar_url: '',
        description: '',
        location: '',
        email: '',
        blog: '',
        public_repos: -1,
        html_url: '',
    },
    repos: [],
    repoInfo: {
        name: '',
        description: '',
        subscribers_count: -1,
    },
    repoContributors: [],

    isReposLoading: true,
    isOrganisationDetailsLoading: true
};
