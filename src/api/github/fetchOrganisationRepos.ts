import {Config} from '../../config';
import {fetchPagedData} from './utils/fetchPagedData';

export const fetchOrganisationRepos = async (organisationId: string) => {
    return fetchPagedData(`${Config.BasePath}/orgs/${organisationId}/repos`, `repos_${organisationId}`);
};
