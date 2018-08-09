import {ICommonState} from 'src/interfaces/ICommonState';

export const initialOrganisationInfo = {
    name: '',
    avatar_url: '',
    description: '',
    location: '',
    email: '',
    blog: '',
    public_repos: -1,
    html_url: '',
};

export const initialRepoInfo = {
    name: '',
    description: '',
    subscribers_count: -1,
    watchers_count: -1,
};

export const initialRateLimits = {
    rateLimit: 0,
    rateLimitRemaining: 0,
    rateLimitResetTimestamp: 0
}

export const initialCommonState: ICommonState = {
    organisationInfo: initialOrganisationInfo,
    repos: [],
    repoInfo: initialRepoInfo,
    repoContributors: [],

    rateLimits: initialRateLimits,

    isReposLoading: false,
    isOrganisationDetailsLoading: false,
    isRepoContributorsLoading: false,
    isRepoInfoLoading: false,
};
