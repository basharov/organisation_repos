import {ICommonState} from 'src/interfaces/ICommonState';

export const initialCommonState: ICommonState = {
    organisationInfo: {
        name: '',
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
        watchers_count: -1,
    },
    repoContributors: [],

    isReposLoading: false,
    isOrganisationDetailsLoading: true,
    rateLimits: {
        rateLimit: 0,
        rateLimitRemaining: 0,
        rateLimitResetTimestamp: 0
    }
};
